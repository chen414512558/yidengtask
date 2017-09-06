let webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

let driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('http://localhost:3000/index/index');
driver.findElement(By.className('thumbsUp')).click();
driver.wait(()=>{
    driver.findElement(By.className('addOneAnimation')).getText().then(text=>{
        if (text !== '+1') {
            throw new Error('no expected');
        }
    });
}, 300);
driver.quit();

