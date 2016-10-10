[![NPM](https://nodei.co/npm/fis3-postprocessor-replace.png?downloads=true)](https://nodei.co/npm/fis3-postprocessor-replace/)
### 本插件将会根据配置替换字符串，适用于打包规则

```
npm install fis3-postprocessor-replace -g
```
fis-conf
```
fis.match('*.js', {
    postprocessor: fis.plugin('replace', {
        files: [
            {
                path: "/js/controllers/login.js",
                rule:{
                    '{api-url}|i': '/json/login.json',
                    '{api-u}':'GET'
                }
            },
            {
                path:"/js/controllers/lists.js",
                rule:{
                    '{api-url}|ig':'192.168.10.0',
                    '{api-u}':'345'
                }
            }
        ]
    })
})
```
这样配置的话，将在编译阶段根据正则替换`/js/controllers/login.js`和`/js/controllers/lists.js`对应的`{api-url}`和`{api-u}`。