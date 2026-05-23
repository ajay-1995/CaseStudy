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
    readonly closeBtn: Locator
    
    
    constructor(page: Page) {
        this.page = page
        this.name = page.getByRole('textbox', {name: 'Name'})
        this.country = page.getByRole('textbox', { name: 'Country'})
        this.city = page.getByRole('textbox', { name: 'city'})
        this.creditcard = page.getByRole('textbox', {name: 'Credit card'})
        this.month = page.getByRole('textbox', {name: 'Month'})
        this.year = page.getByRole('textbox', {name: 'Year'})
         this.purchase = page.getByRole('button', { name:'purchase'})
          this.closeBtn = this.page.getByRole('button', { name:'Close'})

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
}
