const wait = require('./helpers').wait
const registro = require('./registro').registro
const {Builder, By, Key, until, Capabilities} = require('selenium-webdriver');

async function dh(){
    try{
        driver = await new Builder().withCapabilities(Capabilities.chrome()).build();
        await driver.get("http://automationpractice.com/index.php");
        driver.manage().window().maximize();

        await wait(4000)
        var foto = driver.wait(until.elementLocated(By.xpath('//*[@id="homefeatured"]/li[5]/div/div[2]/h5/a')))
        foto.click()
        await wait(2000)

        var pop = driver.wait(until.elementLocated(By.css('#add_to_cart > button > span')))
        await driver.wait(until.urlIs("http://automationpractice.com/index.php?id_product=5&controller=product"))
        await wait(2000)
        pop.click()
        
        await wait(4000)
        var checkout = driver.wait(until.elementLocated(By.css('.standard-checkout > span')))
        await driver.wait(until.urlIs("http://automationpractice.com/index.php?controller=order"))
        checkout.click()

        await registro(driver)


        await wait(1000)
        var pay = driver.wait(until.elementLocated(By.css('#center_column > form > p > button > span')))
        await driver.wait(until.urlIs("http://automationpractice.com/index.php?controller=order&step=1&multi-shipping=0"))
        pay.click()

        await wait(1000)
        var checkbox = driver.wait(until.elementLocated(By.css('#cgv')))
        await driver.wait(until.urlIs("http://automationpractice.com/index.php?controller=order"))
        checkbox.click()
        console.log('TC1: EL CHECKBOX FUE MARCADO EXITOSAMENTE')

        await wait(1000)
        var proced = driver.wait(until.elementLocated(By.css('.standard-checkout > span')))
        proced.click()

        await wait(1000)
        var bank = driver.wait(until.elementLocated(By.css('.bankwire')))
        await driver.wait(until.urlIs("http://automationpractice.com/index.php?controller=order&multi-shipping="))
        bank.click()

        await wait(1000)
        var final = driver.wait(until.elementLocated(By.css('#cart_navigation span')))
        await driver.wait(until.urlIs("http://automationpractice.com/index.php?fc=module&module=bankwire&controller=payment"))
        final.click()

        }catch(error){
            console.log(error);
        }
    }
    dh()