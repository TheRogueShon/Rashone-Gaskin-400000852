const { Builder, By, Key, NoSuchElementError } = require("selenium-webdriver");
const firefox = require('selenium-webdriver/firefox');

async function runTests(){
    await requestVehicleTest();
}

async function requestVehicleTest(){
    let driver = new Builder().forBrowser('firefox')
                                .setFirefoxOptions(new firefox.Options())
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
    await driver.manage().setTimeouts( { implicit: 10000 } );
    let div = await driver.findElements(By.css('col-3'));
    for(let e of div){
        console.log(div);
    }
    //await driver.quit(); 
}

async function acceptOrderTest(){
    let driver = new Builder().forBrowser('firefox')
                                .setFirefoxOptions(new firefox.Options().headless())                            
                                .build();

    await driver.get('http://127.0.0.1/aboutus');
    
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

    await driver.get('http://127.0.0.1/ordertaxi');

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

    await driver.get('http://127.0.0.1/contact');

    let form = await driver.findElement(By.css('form'));
    let name = await driver.findElement(By.css('#Name'));
    let query = await driver.findElement(By.css('#Query'))
    let submit = await driver.findElement(By.css('#submitQuery'));
    
    await submit.click();
    await driver.quit();
}

runTests();
