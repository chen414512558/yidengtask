class ParasiseButton {
    constructor(panelSelector, clickSelector) {
        this.thumbUpNum = 0;
        this.$panel = $(panelSelector);
        this.$clickDom = $(clickSelector);
    }

    init() {
        let time1000Click = myFunc.timeClick(1000);
        let $addOneDom = this.renderAddOneDom();
        this.$panel.append($addOneDom);
        this.$clickDom.on('click', ()=>time1000Click(()=>{
                this.thumbUpNum = myFunc.add(this.thumbUpNum);
                if (this.thumbUpNum > 0 ){
                    $addOneDom.addClass('addOneAnimation');
                    if ( this.thumbUpNum > 10 ) {
                        this.resetNum();
                        this.setIsVisbal(false);
                    }
                } else if(this.thumbUpNum == 0) {
                    this.setIsVisbal(true);
                }

            }, ()=>{
                $addOneDom.removeClass('addOneAnimation');
            })
        );
    }

    renderAddOneDom() {
        let addOneDom = $('<div class="addOneDom">+1</div>');
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


