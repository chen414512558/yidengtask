module.exports = {
    'Demo test thumb' : function (client) {
        client
            .url('http://localhost:3000/index/index')
            .waitForElementVisible('body', 1000)
            .assert.title('点赞')
            // .assert.visible('input[type=text]')
            // .setValue('input[type=text]', 'rembrandt van rijn')
            .waitForElementVisible('div[class=thumbsUp]', 1000)
            .click('div[class=thumbsUp]')
            .waitForElementVisible('div[class=addOneDom]', 500)
            .assert.elementPresent('div[class=addOneDom]')
            // .assert.containsText('ol#rso li:first-child',
            // 'Rembrandt - Wikipedia')
            .end();
    }
};
