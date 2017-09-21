import {
    add,
    fetchClick,
} from './myfunc';
import $ from 'jquery';
class ParasiseButton {
    constructor(panelSelector, clickSelector) {
        this.thumbUpNum = 0;
        this.$panel = $(panelSelector);
        this.$clickDom = $(clickSelector);
    }

    init() {
        // 随便点击
        this.$clickDom.on('click', async ()=>{
                this.thumbUpNum = add(this.thumbUpNum);
                let waitClick = fetchClick(()=>{
                    return $.ajax({
                        url: '/thumb/add',
                        type: 'POST',
                        dataType: 'json',
                        data: {}
                    })
                });
                let json =  await waitClick();

                if (json) {
                    // 如果请求已经回来，并且没有错误;
                    let currentNum = json.num;
                    if (currentNum > 0 ){
                        // $addOneDom.addClass('addOneAnimation');
                        this.addOneAnimation();
                        if ( currentNum == 10 ) {
                            this.resetNum();
                            this.setIsVisbal(false);
                        }
                    } else if(currentNum == 0) {
                        this.setIsVisbal(true);
                    }
                } else {
                    // 如果请求没有回来
                    this.thumbUpNum -= 1;
                }
        })
    }

    addOneAnimation() {
        let $addOneDom = this.renderAddOneDom();
        this.$panel.append($addOneDom);
        this.clearDom($addOneDom);
    }

    clearDom($dom) {
        setTimeout(()=>{
            $dom.remove();
        }, 1000);
    }

    renderAddOneDom() {
        let addOneDom = $('<div class="addOneDom addOneAnimation">+1</div>');
        return addOneDom;
    }

    resetNum() {
        this.thumbUpNum = -1;
    }

    setIsVisbal(isVisbal) {
        if (isVisbal) {
            this.$panel.removeClass('disabelThumb');
        } else {
            this.$panel.addClass('disabelThumb');
        }
    }

}

export default class Thumb extends ParasiseButton {
    constructor(panelId, clickId) {
        super(panelId, clickId);
    }
};


