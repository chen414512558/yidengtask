import Thumb from './thumb.js';
import '../css/thumbsup.css';
import xtag from 'x-tag';
xtag.register('x-praise', {
    content: `
        <div class="thumbsUp">
            <div class="thumb bigThumb"></div>
            <div class="thumb firstThumb"></div>
            <div class="thumb secThumb"></div>
            <div class="thumb threeThumb"></div>
            <div class="thumb fourThumb"></div>
        </div>
    `,
    lifecycle: {
        created: function () {
            const thumb = new Thumb('.thumbsUp', '.thumbsUp');
            thumb.init();
        }
    },
});
