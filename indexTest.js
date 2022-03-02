const { Builder, By, Key, NoSuchElementError } = require("selenium-webdriver");
const firefox = require('selenium-webdriver/firefox');

async function runTests(){
    //homeTest();
    //aboutTest();
    //ordertaxiTest();
    contactTest();
}

async function homeTest(){
    let driver = new Builder().forBrowser('firefox')
                                .setFirefoxOptions(new firefox.Options().headless())
                                .build();

    await driver.get('http://127.0.0.1/taxiApp/index.php');

    let found = await driver.findElement(By.id("DateTime"));

    driver.quit(); 
}

async function aboutTest(){
    let driver = new Builder().forBrowser('firefox').build();

    await driver.get('http://127.0.0.1/taxiApp/aboutus.php');
    /*
    let textDemo = driver.findElement(By.xpath("//*[text()='Welcome to islandMovers']"));
    
    
    if(textDemo.isDisplayed())
        console.log("Element found using text");
    else
        console.log("Element not found"); */
    
    driver.quit();
}

async function ordertaxiTest(){
    let driver = new Builder().forBrowser('firefox').build();

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

async function contactTest(){
    let driver = new Builder().forBrowser('firefox').build();

    await driver.get('http://127.0.0.1/taxiApp/contact.php');

    let form = driver.findElement(By.css('form'));
    let name = driver.findElement(By.css('#Name'));
    let query = driver.findElement(By.css('#Query'))
    let submit = driver.findElement(By.css('#submitQuery'));
    
    await submit.click();
    await driver.quit();
}

runTests();

