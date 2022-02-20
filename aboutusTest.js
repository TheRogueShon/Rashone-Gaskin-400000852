const { Builder, By, Key, NoSuchElementError } = require("selenium-webdriver");
const webdriver = require ('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

async function test(){
    let driver = new webdriver.Builder().forBrowser('firefox').build();

    await driver.get('http://127.0.0.1/taxiApp/aboutus.php');

    textDemo = driver.findElement(By.xpath("//*[text()='Welcome to islandMovers']"));
    
    
    if(textDemo.isDisplayed())
    {
        console.log("Element found using text");
    }
    else
        console.log("Element not found");
    //driver.quit();
}

test();