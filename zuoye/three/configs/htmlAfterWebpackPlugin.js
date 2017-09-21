function HtmlAfterWebapckPlugin(options) {
    this.options = options;
}
// process.env.NODE_ENV
function arraytoStringByAassets(arrs, isJs) {
    let icon = isJs? 'js': 'css';
    arrs = arrs.map(item=>{
        let res = item.slice(item.indexOf(icon)-1, item.length);
        if (isJs) {
            return `<script src="${res}"></script>`;
        }
        return `<link rel="stylesheet" href="${res}">`;
    });
    return '\n' + arrs.join('') + '\n';
}

HtmlAfterWebapckPlugin.prototype.apply = function(compiler) {
    compiler.plugin('compilation', function (compilation) {
        compilation.plugin('html-webpack-plugin-after-html-processing', function (htmlPluginData, callback) {
            let assets = htmlPluginData.assets;
            let html = htmlPluginData.html;
            html = html.replace('{% block style %}', `{% block style %} ${arraytoStringByAassets(assets.css, false)}`);
            html = html.replace('{% block script %}', `{% block script %} ${arraytoStringByAassets(assets.js, true)}`);
            htmlPluginData.html = html;
            callback(null, htmlPluginData);
        });
    });
};

module.exports = HtmlAfterWebapckPlugin;