import { Injectable, Logger } from '@nestjs/common';
import puppeteer from 'puppeteer'

@Injectable()
export class DocuService {

    private readonly logger = new Logger(DocuService.name);

    async getDocsData() {
        const browser = await puppeteer.launch();
        try {
            const page = await browser.newPage();
            // Navigate the page to a URL
            await page.setDefaultNavigationTimeout(2 * 60 * 1000);
            this.logger.log('Scraping data xd ...')
            await Promise.all([
                page.waitForNavigation(),
                page.goto('https://svelte.dev/docs/introduction')
            ])
            const links = await page.$$eval('a', (resultItems) => resultItems.map(item => item.href));
            const data = []
            for (const link of links) {
                //const bro = await puppeteer.launch();
                    const newPage = await browser.newPage();
                    await newPage.setDefaultNavigationTimeout(2 * 60 * 1000);
                    await Promise.all([
                        newPage.waitForNavigation(),
                        newPage.goto(link)
                    ])
                    const texts = await newPage.$$eval('p', (items) => items.map(item => item.textContent));
                    data.push({ link, texts });

                    await newPage.close()
            }
           
            return {
                data
            };
        } finally {
            await browser.close();
        }

    }
}
