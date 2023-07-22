
module.exports.default = class Entry {
    insertStyle() {
        const styleTag = document.createElement('style');
        styleTag.innerHTML = '.q-dialog-modal { display: none !important; }';
        document.body.appendChild(styleTag);
    }
    removeStyle() {
        const styleTags = document.getElementsByTagName('style');
        const targetStyle = '.q-dialog-modal { display: none; }';

        for (let i = 0; i < styleTags.length; i++) {
            if (styleTags[i].innerHTML === targetStyle) {
                styleTags[i].parentNode.removeChild(styleTags[i]);
                break;
            }
        }
    }
    constructor() {
        this.insertStyle()
        const interval = setInterval(() => {
            // console.log("check update");
            let update_btn = document.querySelector("body > div.q-dialog > div.update-dialog.q-dialog-main > div.q-dialog-footer > div > button.q-button.q-button--primary.q-button--default > span");
            if (!update_btn)
                return;
            clearInterval(interval);
            if (update_btn.textContent == "立即更新") {
                document.querySelector("body > div.q-dialog > div.update-dialog.q-dialog-main > div.q-dialog-header > i").click()
                setTimeout(this.removeStyle,200)
            }
        }, 100);
        setInterval(() => { clearInterval(interval); }, 60000)
    }
}