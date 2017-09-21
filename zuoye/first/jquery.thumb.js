System.import('./thumb.js').then(m=>{
    var Thumb = m.default;
    $.extend({Thumb: Thumb});
    xtag.register('x-praise', {
        content: `<div class="thumbsUp">
        <div class="thumb bigThumb"></div>
        <div class="thumb firstThumb"></div>
        <div class="thumb secThumb"></div>
        <div class="thumb threeThumb"></div>
        <div class="thumb fourThumb"></div>
    </div>`,
        lifecycle:{
            created: function(){
                var thumb = new Thumb('.thumbsUp', '.thumbsUp');
                thumb.init();
            }
        }
    });
});