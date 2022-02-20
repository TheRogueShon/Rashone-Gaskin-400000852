const { Builder, By, Key, NoSuchElementError } = require("selenium-webdriver");
const webdriver = require ('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

async function test(){
    let driver = new webdriver.Builder().forBrowser('firefox').build();

    await driver.get('http://127.0.0.1/taxiApp/contact.php');

    let element = driver.findElement(By.css('form'));

    driver.findElement(By.css('#Name #Query #SubmitQuery'));
    
    await driver.quit();
}

test();

