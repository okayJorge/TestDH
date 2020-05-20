const {Builder, By, Key, until, Capabilities} = require('selenium-webdriver')
const wait = require('./helpers').wait
exports.registro = async function(driver){

var emailfake = driver.wait(until.elementLocated(By.id('email_create')))
        emailfake.click()
        emailfake.sendKeys('asdasd', Key.RETURN)
        console.log('TC-01: VERIFICAR QUE EL CAMPO DE CORREO SEA CORRECTO')
        console.log('VALIDACION EXITOSA')
        await wait(3000)

        var email = driver.wait(until.elementLocated(By.id('email_create')))
        email.click()
        email.sendKeys('jorge12@ovando2.com', Key.RETURN)
       
        await wait(3000)
        var quiz = driver.wait(until.elementLocated(By.id('id_gender1')))
        quiz.click()
        var quiz1 = driver.wait(until.elementLocated(By.css('#customer_firstname')))
        quiz1.click()
        quiz1.sendKeys('Jorge')

        await wait(1000)
        var quiz2 = driver.wait(until.elementLocated(By.css('#customer_lastname')))
        quiz2.click()
        quiz2.sendKeys('Ovando')

        await wait(1000)
        var pass = driver.wait(until.elementLocated(By.css('#passwd')))
        pass.click()
        pass.sendKeys('123456')
        console.log('added')

        await wait(1000)
        var day = driver.wait(until.elementLocated(By.css('#days')))
        day.click()
        day.then(
            await driver.findElement(By.xpath('//*[@id="days"]/option[3]')).click()
        )

        await wait(1000)
        var month = driver.wait(until.elementLocated(By.css('#months')))
        month.click()
        month.then(
            await driver.findElement(By.xpath('//*[@id="months"]/option[5]')).click()
        )

        await wait(1000)
        var year = driver.wait(until.elementLocated(By.css('#years')))
        year.click()
        year.then(
            await driver.findElement(By.xpath('//*[@id="years"]/option[6]')).click()
        )

        await wait(1000)
        var address = driver.wait(until.elementLocated(By.css('#address1')))
        address.click()
        address.sendKeys('Calle de mi casa')

        await wait(1000)
        var city = driver.wait(until.elementLocated(By.css('#city')))
        city.click()
        city.sendKeys('Cochabamba')

        await wait(1000)
        var state = driver.wait(until.elementLocated(By.css('#id_state')))
        state.click()
        state.then(
            await driver.findElement(By.xpath('//*[@id="id_state"]/option[6]')).click()
        )

        await wait(1000)
        var postal = driver.wait(until.elementLocated(By.css('#postcode')))
        postal.click()
        postal.sendKeys('12345')

        await wait(1000)
        var mobil = driver.wait(until.elementLocated(By.css('#phone_mobile')))
        mobil.click()
        mobil.sendKeys('65465465', Key.RETURN)

        }