# 20200603

## 阅读思考

### [Implementing single-file Web Components](https://ckeditor.com/blog/implementing-single-file-web-components/)

利用 [DOMParse](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser) 解析文件内容（字符串文本）;  
利用 ObjectURI 包装字符串代码，再通过 Dynamic import 动态加载 URI，其返回值为 ES6 模块对象，也就是说前提是代码内容为 ES6 模块。
