## 标签

在家办公

## 计划任务

- [x] 配合媒资 v1.4.5 测试；

- [x] 面试

## TC39 ECMA-262

### 原型链

> Every object created by a constructor has an implicit reference (called the object's prototype) to the value of its constructor's "prototype" property. Furthermore, a prototype may have a non-null implicit reference to its prototype, and so on; this is called the prototype chain. When a reference is made to a property in an object, that reference is to the property of that name in the first object in the prototype chain that contains a property of that name. In other words, first the object mentioned directly is examined for such a property; if that object contains the named property, that is the property to which the reference refers; if that object does not contain the named property, the prototype for that object is examined next; and so on.
>
> ![1IXkRJ.png](https://s2.ax1x.com/2020/02/11/1IXkRJ.png)

构造函数创建的每个对象都有对其构造函数的 “prototype” 属性值的隐式引用（称为对象的原型）。此外，原型可能对其原型具有非 null 的隐式引用，依此类推；等等。这称为原型链。当引用对象中的属性时，该引用就是包含该名称的属性的原型链中第一个对象中该名称的属性。换句话说，首先检查直接提到的对象是否具有这种属性；如果该对象包含命名属性，那么该引用就是该属性；如果该对象不包含命名属性，则接下来检查该对象的原型；等等。

### 5 Notational Conventions

完全没看懂

## 一句话记录

【英语】一句话如果有几个不认识的单词，读起来就晦涩难懂，产生放弃的念头。如果想追求，也会产生去记单词的想法。

【前端】不要把原型和继承混为一谈

【Charles】移动端代理需要安装证书，SSL 代理可设置成匹配所有请求。
