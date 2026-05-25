import {test, expect } from '@playwright/test'
import ProductListPage from '../pages/ProductListpage'
import {items} from '../testData/items.json'
import CartPage from '../pages/CartPage'
import CheckOutPage from '../pages/CheckOutPage'
import Homepage from '../pages/HomePage'


test.describe('Placeorder Test....', () => {

     let listPage: ProductListPage
     let homePage: Homepage
     let cartPage: CartPage
     let checkOutPage: CheckOutPage

        test.beforeEach(async ({ page }) => {
        
       await page.goto('https://demoblaze.com/')
        listPage = new ProductListPage(page)
        homePage = new Homepage(page)
        cartPage = new CartPage(page)
        checkOutPage = new CheckOutPage(page)
        
})
    items.forEach((product, index) => {
      test(`Add product ${product.name}`, async({ page }) =>{
            await homePage.selectProduct(product.name)
            await listPage.addToCart()
  })
      })
      test('View Cart', async({ page }) => {
            await listPage.viewCartPage()
            await page.waitForTimeout(3000)
      })
      test('DeleteItems', async ({ page }) =>{
            await listPage.viewCartPage()
            await page.waitForTimeout(3000)
            await cartPage.getproductcount()
            await cartPage.deleteproduct(1)
            await page.waitForTimeout(3000)
            await cartPage.getproductcount()
      })
      test('CheckOutPage', async({ page }) => {
            await listPage.viewCartPage()
            await page.waitForTimeout(3000)
            await cartPage.placeOrder()
            await page.waitForTimeout(3000)
            await checkOutPage.checkOutitems('Ajay', 'India', '4567', 'May', '2026')
            await expect(page.getByRole('heading', { name: 'Thank you for your purchase'})).toBeVisible()
      })
})   
    

