const { Builder, By, Key, NoSuchElementError } = require("selenium-webdriver");
const firefox = require('selenium-webdriver/firefox');

async function runTests(){
    await requestVehicleTest();
}

async function requestVehicleTest(){
    let driver = new Builder().forBrowser('firefox')
                                .setFirefoxOptions(new firefox.Options().headless())
                                .build();

    await driver.get('http://127.0.0.1/ordertaxi');

    id1 = await driver.findElement(By.id('order-1'));
    await id1.click();
    email = await driver.findElement(By.id('emailInput'));
    await email.sendKeys('janewane@hotmail.com')
    cellphone = await driver.findElement(By.id('cellInput'));
    await cellphone.sendKeys('76553112');
    costButton = await driver.findElement(By.id('getCost'));
    await costButton.click();

    submitOrder = await driver.findElement(By.id('submitOrder'));
    await submitOrder.click();

    
    await driver.get("http://127.0.0.1/rides");
    let div = await driver.findElements(By.css('col-3'));
    for(let e of div){
        console.log(div);
    }
    await driver.quit(); 
}

runTests();
