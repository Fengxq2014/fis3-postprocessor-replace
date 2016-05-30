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
                    '{api-url}':'192.168.10.0',
                    '{api-u}':'345'
                }
            }
        ]
    })
})
```
