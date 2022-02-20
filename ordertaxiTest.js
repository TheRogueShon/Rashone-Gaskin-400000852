const { Builder, By, Key, NoSuchElementError } = require("selenium-webdriver");
const webdriver = require ('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

async function test(){
    let driver = new webdriver.Builder().forBrowser('firefox').build();

    await driver.get('http://127.0.0.1/taxiApp/ordertaxi.php');

    id1 = await driver.findElement(By.id('order-1'));
    id2 = await driver.findElement(By.id('order-2'));
    id3 = await driver.findElement(By.id('order-3'));
    id4 = await driver.findElement(By.id('order-4'));
    
    
    carImage = await driver.findElement(By.xpath("//img[@alt='Car image']"));
    vanImage = await driver.findElement(By.xpath("//img[@alt='Van image']"));
    busImage = await driver.findElement(By.xpath("//img[@alt='Bus image']"));
    truckImage = await driver.findElement(By.xpath("//img[@alt='Truck image']"));
    driver.quit();
}

test();
