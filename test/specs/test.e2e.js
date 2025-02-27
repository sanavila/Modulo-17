import {expect, driver} from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import profilePage from '../pageobjects/profile.page.js'

describe('My Login application', () => {

    it('should create a new user', async () => {
        await homePage.openMenu('profile')
        await homePage.openForm('Sign up')
        await loginPage.login('Rute', 'Avila', '1140028922', 'test@test.com', '123456', '123456')
        await homePage.openMenu('profile')
        expect ((await profilePage.profileName('Rute Avila')).isDisplayed()).toBeTruthy
    })
})

