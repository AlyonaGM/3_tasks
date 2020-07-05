const DownloadPage = require('../page-objects/downloadPage');
const UrlsList = require('../helpers/urls.js');
const fileFolder = require('../helpers/files.js');

describe('Uploading', function () {
    const downloadPage = new DownloadPage();
    const urls = new UrlsList();
    const file = new fileFolder();

    it('Check tha file could be uploaded', async () => {
        await browser.get(urls.url_upload);
        await downloadPage.downloadFile(file.path);
        expect(await downloadPage.checkDownloadFile(file.nameFile)).to.equal(true);
    });
});
