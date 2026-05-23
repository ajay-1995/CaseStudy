import { Page, Locator } from '@playwright/test'

export default class Homepage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    async selectProduct(productName: string){
        await this.page.click(`text=${productName}`)
    }
}
