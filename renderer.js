module.exports.default = class Entry {
    constructor() {
        // 目标元素的选择器
        const targetSelector =
            "body > div.q-dialog.vue-component > div.update-dialog.q-dialog-main.vue-component";

        // 配置MutationObserver
        const observerConfig = {
            childList: true, // 观察目标元素子节点的变化
            subtree: true, // 观察目标元素的所有后代节点
        };

        var isFound = false;

        // 创建MutationObserver实例
        const observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
                if (mutation.type === "childList") {
                    const targetElement = document.querySelector(targetSelector);
                    if (targetElement) {
                        console.log("[Fuck Update] Fuck!");
                        targetElement.parentElement.remove();
                        isFound = true
                        observer.disconnect();
                    }
                }
            }
        });

        // 开始观察目标元素
        const targetElement = document.querySelector(targetSelector);
        if (targetElement) {
            observer.observe(targetElement.parentNode, observerConfig);
        } else {
            console.log("[Fuck Update] Waiting update dialog");
            observer.observe(document.body, observerConfig);
            setTimeout(() => {
                if(!isFound) {
                    console.log("[Fuck Update] Timeout disconnect observer");
                    observer.disconnect()
                }
            },60000)
        }
    }
};
