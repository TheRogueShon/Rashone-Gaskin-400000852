const { Builder, By, Key, NoSuchElementError } = require("selenium-webdriver");
const firefox = require('selenium-webdriver/firefox');

async function runTests(){
    await homeTest();
    await aboutTest();
    await ordertaxiTest();
    await contactTest();
}

async function homeTest(){
    let driver = new Builder().forBrowser('firefox')
                                .setFirefoxOptions(new firefox.Options().headless())
                                .build();

    await driver.get('http://127.0.0.1/taxiApp/index.php');

    let found = await driver.findElement(By.id("DateTime"));

    await driver.quit(); 
}

async function aboutTest(){
    let driver = new Builder().forBrowser('firefox')
                                .setFirefoxOptions(new firefox.Options().headless())                            
                                .build();

    await driver.get('http://127.0.0.1/taxiApp/aboutus.php');
    
    let welcome = await driver.findElement(By.id("Welcome"));
    let welcomeText = await welcome.getText();
    if(welcomeText == 'Welcome to islandMovers'){
        console.log("Text found");
    }
    else{
        console.log("Text not found");
    }

    await driver.quit();
}

async function ordertaxiTest(){
    let driver = new Builder().forBrowser('firefox')
                                .setFirefoxOptions(new firefox.Options().headless())                            
                                .build();

    await driver.get('http://127.0.0.1/taxiApp/ordertaxi.php');

    id1 = await driver.findElement(By.id('order-1'));
    id2 = await driver.findElement(By.id('order-2'));
    id3 = await driver.findElement(By.id('order-3'));
    id4 = await driver.findElement(By.id('order-4'));
    
    
    carImage = await driver.findElement(By.xpath("//img[@alt='Car image']"));
    vanImage = await driver.findElement(By.xpath("//img[@alt='Van image']"));
    busImage = await driver.findElement(By.xpath("//img[@alt='Bus image']"));
    truckImage = await driver.findElement(By.xpath("//img[@alt='Truck image']"));
    await driver.quit();
}

async function contactTest(){
    let driver = new Builder().forBrowser('firefox')
                                .setFirefoxOptions(new firefox.Options().headless())                            
                                .build();

    await driver.get('http://127.0.0.1/taxiApp/contact.php');

    let form = await driver.findElement(By.css('form'));
    let name = await driver.findElement(By.css('#Name'));
    let query = await driver.findElement(By.css('#Query'))
    let submit = await driver.findElement(By.css('#submitQuery'));
    
    await submit.click();
    await driver.quit();
}

runTests();

