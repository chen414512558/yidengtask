!function () {
    function add(num) {
        if (isNaN(num)) {
            return 0;
        }
        num = parseInt(num);
        return num + 1;
    }

    function timeClick(time) {
        var isClick = true;
        var timeout;
        return function(func, timeoutFunc) {
            if (isClick) {
                isClick = false;
                func();
                timeout && clearTimeout(timeout);
                timeout = setTimeout(function(){
                    isClick=true;
                    timeoutFunc && timeoutFunc();
                }, time);
            }
        };
    }

    function fetchClick(funcAjax) {
        let isClick = true;
        return function (...args) {
            if (isClick) {
                isClick = false;
                return funcAjax.apply(this, args).then((data)=>{
                    isClick = true;
                    return data;
                }).catch(e=>{
                    console.log('错误：', e);
                });
            }
        }
    }


    window.myFunc = {
        add: add,
        timeClick: timeClick,
        fetchClick: fetchClick,
    }
}()
