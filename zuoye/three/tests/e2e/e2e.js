let webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

let driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('http://localhost:3000/index/index');
driver.findElement(By.className('thumbsUp')).click();
driver.wait(()=>{
    return driver.findElement(By.className('addOneDom'));
}, 100);

// driver.findElement(By.className('addOneDom')).getText().then(text=>{
//     if (text !== '+1') {
//         throw new Error('no expected');
//     }
// });
driver.quit();

