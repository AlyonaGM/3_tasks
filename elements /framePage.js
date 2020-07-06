class FramePage {
    constructor() {
        this.topFrame = by.name('frame-top');
        this.leftFrame = by.name('frame-left');
        this.middleFrame = by.name('frame-middle');
        this.rightFrame = by.name('frame-right');
        this.bottomFrame = by.name('frame-bottom');
        this.contentMiddleFrame = by.css('#content');
        this.textInFrame = by.css('body');
    }

    async switchToFrame(frame) {
        await browser.switchTo().frame(await element(frame).getWebElement());
    }

    async getBodyIframe() {
        const elm = await element(this.textInFrame);
        await helpers.waitForVisible(elm);
        return elm.getText();
    }
}

module.exports = FramePage;
