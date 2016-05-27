/**
 * Created by DefNed on 2016/5/27.
 */
module.exports = function (content, file, settings) {
    // 只对 js 类文件进行处理
    if (!file.isJsLike) return content;
    settings.files.forEach(function (fil) {
        if (fil.path === '*' || fil.path === file.subpath){
            fis.util.map(fil.rule,function (key,str) {
                var reg, arr = key.split('|');
                reg = new RegExp(arr[0], arr[1]);
                content = content.replace(reg,str);
            });
        }
    })
    return content ;
}