
module.exports.default = class Entry {
    constructor(qqntim) {
        qqntim.windowLoadPromise.then(() => {
            const interval = setInterval(() => {
                const update_btn = document.querySelector("body > div.q-dialog > div.update-dialog.q-dialog-main > div.q-dialog-footer > div > button.q-button.q-button--primary.q-button--default > span");
                if (update_btn) {
                    clearInterval(interval);
                    if (update_btn.textContent == "立即更新") {
                        document.querySelector("body > div.q-dialog > div.update-dialog.q-dialog-main > div.q-dialog-header > i").click()
                    }
                }
            }, 100);
            setInterval(() => {
                clearInterval(interval);
            }, 60000)
        });
    }
}