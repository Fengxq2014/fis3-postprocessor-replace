/**
 * Created by DefNed on 2016/5/27.
 */
module.exports = function (content, file, settings) {
    // 只对 js 类文件进行处理
    if (!file.isJsLike) return content;
    fis.log.debug('fisse');
    return content = content.replace(settings.reg,settings.str);
}