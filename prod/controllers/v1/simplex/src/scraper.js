"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
async function getAnswer(page) {
    const $ = cheerio.load(await page.content());
    const answer = $('.contenedor p:last-child');
    return answer.text().replace(/X/g, '\nX');
}
async function scraper(url) {
    try {
        const browser = await puppeteer.launch({
            headless: true,
            userDataDir: '/tmp',
            args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--js-flags=--expose-gc'],
            defaultViewport: {
                width: 1080,
                height: 600
            }
        });
        const page = await browser.newPage();
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36');
        // just load DOM
        await page.setRequestInterception(true);
        page.on('request', (request) => {
            if (request.resourceType() !== 'document')
                request.abort();
            else
                request.continue();
        });
        console.log('----- load page');
        await page.goto(url, { waitUntil: 'networkidle0', timeout: 0 });
        const answerlink = '[href="solucion2.php?l=es"]';
        const answerlink2 = '[href="solucion.php?l=es"]';
        try {
            await page.click(answerlink, true);
        }
        catch (e) {
            await page.click(answerlink2, true);
        }
        await page.waitFor(1000);
        const answer = await getAnswer(page);
        await browser.close();
        return answer;
    }
    catch (e) {
        return "ERROR CON LA ENTRADA DE DATOS!!!";
    }
}
;
exports.default = scraper;
//# sourceMappingURL=scraper.js.map