class ParasiseButton {
    constructor(panelSelector, clickSelector) {
        this.thumbUpNum = 0;
        this.$panel = $(panelSelector);
        this.$clickDom = $(clickSelector);
    }

    init() {
        // 在规定时间只能点击一次
        // let time1000Click = myFunc.timeClick(1000);
        // let $addOneDom = this.renderAddOneDom();
        // this.$panel.append($addOneDom);
        // this.$clickDom.on('click', ()=>time1000Click(()=>{
        //         this.thumbUpNum = myFunc.add(this.thumbUpNum);
        //         if (this.thumbUpNum > 0 ){
        //             // $addOneDom.addClass('addOneAnimation');
        //             this.$panel.append($addOneDom);
        //             if ( this.thumbUpNum > 10 ) {
        //                 this.resetNum();
        //                 this.setIsVisbal(false);
        //             }
        //         } else if(this.thumbUpNum == 0) {
        //             this.setIsVisbal(true);
        //         }
        //
        //     }, ()=>{
        //         $addOneDom.remove();
        //     })
        // );
        // 随便点击
        this.$clickDom.on('click', async ()=>{
                this.thumbUpNum = myFunc.add(this.thumbUpNum);
                let waitClick = myFunc.fetchClick(()=>{
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

class Thumb extends ParasiseButton {
    constructor(panelId, clickId) {
        super(panelId, clickId);
    }
};

export default Thumb;


