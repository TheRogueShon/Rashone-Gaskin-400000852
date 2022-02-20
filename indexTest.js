const webdriver = require ('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

async function test(){
    let driver = new webdriver.Builder().forBrowser('firefox').build();

await driver.get('http://127.0.0.1/taxiApp/index.php');

let found = await driver.findElement(webdriver.By.id("DateTime"));

driver.quit();
}



test();

