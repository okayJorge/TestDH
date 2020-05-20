const {Builder, By, Key, until, Capabilities} = require('selenium-webdriver')
const wait = require('./helpers').wait
const isEmpty = require('./helpers').isEmpty
exports.registro = async function(driver){

var emailfake = driver.wait(until.elementLocated(By.id('email_create')))
        emailfake.click()
        emailfake.sendKeys('correo', Key.RETURN)
        console.log('TC-01: VERIFICAR QUE EL CAMPO DE CORREO SEA CORRECTO')
        console.log('TC-01: VALIDACION EXITOSA')
        await wait(4000)
        emailfake.clear();

        var email = driver.wait(until.elementLocated(By.id('email_create')))
        email.click()
        var i = Math.floor(Math.random() * 150) + 22;
        email.sendKeys(i+'jorge@ovando.com', Key.RETURN)
        await wait(3000)
        
        var quiz = driver.wait(until.elementLocated(By.id('id_gender1')))
        quiz.click()

        var sindatos = true
        if (sindatos=true) {
            var quiz1 = driver.wait(until.elementLocated(By.css('#customer_firstname')))
            var quiz2 = driver.wait(until.elementLocated(By.css('#customer_lastname')))
            var pass = driver.wait(until.elementLocated(By.css('#passwd')))
            var day = driver.wait(until.elementLocated(By.css('#days')))
            var month = driver.wait(until.elementLocated(By.css('#months')))
            var year = driver.wait(until.elementLocated(By.css('#years')))
            var address1 = driver.wait(until.elementLocated(By.css('#address1')))
            var city = driver.wait(until.elementLocated(By.css('#city')))
            var state = driver.wait(until.elementLocated(By.css('#id_state')))
            var postal = driver.wait(until.elementLocated(By.css('#postcode')))
            var mobil = driver.wait(until.elementLocated(By.css('#phone_mobile')))
            var quiz1 = {}
            var quiz2 = {}
            var pass = {}
            var day = {}
            var month = {}
            var year = {}
            var address = {}
            var city = {}
            var state = {}
            var postal = {}
            var mobil = {}
            if(isEmpty(quiz1)&&isEmpty(quiz2)&&isEmpty(pass)&&isEmpty(day)&&isEmpty(month)&&isEmpty(year)&&isEmpty(address1)&&isEmpty(city)&&isEmpty(state)&&isEmpty(postal)&&isEmpty(mobil)){
            console.log('TC-02: VALICADION DE REGISTRO OBLIGATORIO DE CAMPOS')
        }
        }
        var quiz1 = driver.wait(until.elementLocated(By.css('#customer_firstname')))
        quiz1.click()
        quiz1.sendKeys('Jorge')
        console.log('TC-03: VERIFICAR QUE EL CAMPO NOMBRE')
        console.log('TC-03: VALIDACION EXITOSA')

        await wait(1000)
        var quiz2 = driver.wait(until.elementLocated(By.css('#customer_lastname')))
        quiz2.click()
        quiz2.sendKeys('Ovando')
        console.log('TC-04: VERIFICAR QUE EL CAMPO APELLIDO')
        console.log('TC-04: VALIDACION EXITOSA')

        await wait(1000)
        var pass = driver.wait(until.elementLocated(By.css('#passwd')))
        pass.click()
        pass.sendKeys('123456')
        console.log('added')
        console.log('TC-05: VERIFICAR QUE EL CAMPO PASSWORD')
        console.log('TC-05: VALIDACION EXITOSA')

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
        console.log('TC-06: VERIFICAR QUE EL CAMPO FECHA DE NACIMIENTO')
        console.log('TC-06: VALIDACION EXITOSA')

        await wait(1000)
        var address = driver.wait(until.elementLocated(By.css('#address1')))
        address.click()
        address.sendKeys('Calle de mi casa')
        console.log('TC-07: VERIFICAR QUE EL CAMPO DIRECCION')
        console.log('TC-07: VALIDACION EXITOSA')

        await wait(1000)
        var city = driver.wait(until.elementLocated(By.css('#city')))
        city.click()
        city.sendKeys('Cochabamba')
        console.log('TC-08: VERIFICAR QUE EL CAMPO CIUDAD')
        console.log('TC-08: VALIDACION EXITOSA')

        await wait(1000)
        var state = driver.wait(until.elementLocated(By.css('#id_state')))
        state.click()
        state.then(
        await driver.findElement(By.xpath('//*[@id="id_state"]/option[6]')).click()
        )
        console.log('TC-09: VERIFICAR QUE EL CAMPO ESTADO')
        console.log('TC-09: VALIDACION EXITOSA')

        await wait(1000)
        var postal = driver.wait(until.elementLocated(By.css('#postcode')))
        postal.click()
        postal.sendKeys('12345')
        console.log('TC-10: VERIFICAR QUE EL CAMPO CODIGO POSTAL')
        console.log('TC-11: VALIDACION EXITOSA')

        await wait(1000)
        var mobil = driver.wait(until.elementLocated(By.css('#phone_mobile')))
        mobil.click()
        mobil.sendKeys('65465465', Key.RETURN)
        console.log('TC-12: VERIFICAR QUE EL CAMPO NOMERO DE CELULAR')
        console.log('TC-12: VALIDACION EXITOSA')
        
        console.log('TC-02: VALICADION EXITOSA DE TODOS LOS REGISTROS OBLIGATORIOS')
    
        }