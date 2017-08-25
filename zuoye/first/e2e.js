let webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

let driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('file:///Users/zihuichen/temp/mynodeStu/yideng/zuoye/first/thumbsup.html');
driver.findElement(By.className('thumbsUp')).click();
driver.findElement(By.className('addOneAnimation')).getText().then(text=>{
    if (text !== '+1') {
        throw new Error('no expected');
    }
});
driver.quit();

