import { Page, Locator } from '@playwright/test'

export default class CheckOutPage{
    readonly page: Page
    readonly name: Locator
    readonly country: Locator
    readonly city: Locator
    readonly creditcard: Locator
    readonly month: Locator
    readonly year: Locator
    readonly purchase: Locator
    readonly ok: Locator
    
    
    constructor(page: Page) {
        this.page = page
        this.name = this.page.getByPlaceholder('Name')
        this.country = this.page.getByPlaceholder('Country')
        this.city = this.page.getByPlaceholder('City')
        this.creditcard = this.page.getByPlaceholder('Credit card')
        this.month = this.page.getByPlaceholder('Month')
        this.year = this.page.getByPlaceholder('Year')
         this.purchase = this.page.getByRole('button', { name:'purchase'})
          this.ok = this.page.getByRole('button', { name:'OK'})

    }
    async checkOutitems(fname: string, cname: string, hcity: string, ccard: string, cmonth: string,   ) {
        await this.name.fill(fname)
        await this.country.fill(cname)
        await this.city.fill(hcity)
        await this.creditcard.fill(ccard)
        await this.month.fill(cmonth)
        await this.city.fill(hcity)
        await this.purchase.click()
}

async finishorder(){
    await this.ok.click()
}
}
