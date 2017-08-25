System.import('./thumb.js').then(m=>{
    var Thumb = m.default;
    $.extend({Thumb: Thumb});
    var thumb = new Thumb('.thumbsUp', '.thumbsUp');
    thumb.init();
});