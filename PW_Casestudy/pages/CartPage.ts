import { Page, Locator } from "@playwright/test"

export default class CartPage {
    readonly page: Page
    readonly items: Locator
    readonly chkoutBtn: Locator

    constructor(page: Page) {
        this.page = page
        this.items = this.page.locator('div.col-lg-8')
        this.chkoutBtn=this.page.getByRole('button',{name:'Place order'})
    }
    async placeOrder(){
        await this.chkoutBtn.click()
    }
    async getproductcount(){
        const count = await this.items.count()
        console.log('Cart Item count:', count)
        return count
    }
    async deleteproduct(index:number){
        const deletebuttons = this.page.locator('text=Delete')
        await deletebuttons.nth(index).click()
        this.page.waitForTimeout(2000)
}
 }
