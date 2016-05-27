### 本插件将会根据配置替换字符串，适用于打包规则

```
npm install fis-postpackager-replace -g
```
fis-conf
```
fis.match('*.js', {
    postprocessor: fis.plugin('replace',{
        reg:'{api-url}',
        str:'192.168.10.1'
    })
})
```