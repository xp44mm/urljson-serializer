# Urljson

Urljson is designed to put a json object into url query in a shorter style.

## Get Started

序列化数据时，主要用到两个函数，`queryStringify`和`urljsonStringify`，用法如下：

对象序列化为查询字符串：

```js
let data = {
    a: false,
    b: 0,
    c: "test",
    d: {x:1,y:"name"},
    e: [1,2],
}
let y = queryStringify(data)
expect(y).toEqual("a=false&b=0&c=test&d=(x!1*y!'name')&e=(1*2)")
```

生成的结果，对象直接属性如果是标量，兼容x-forms字符串格式，可以被浏览器开发者工具识别解析。如果对象的属性是对象（数组是特殊的对象），则按Urljson格式化为字符串。

数据序列化为纯Urljson格式：

对象的序列化：

```js
let obj = {
    a: 1,
    b: 2,
}
let s = urljsonStringify(obj)
expect(s).toEqual("(a!1*b!2)")
```

## Data Format

Urljson stores data as plain text. Its grammar 类似 the grammar of JSON. For example:

```json
{
    "first": "Jane",
    "last": "Porter",
    "married": true,
    "born": 1890,
    "friends": [ "Tarzan", "Cheeta" ]
}
```

convert to Urljson:

```
"(first!'Jane'*last!'Porter'*married!true*born!1890*friends!('Tarzan'*'Cheeta'))"
```

## 格式说明

The grammar can be transcribed as follows:

```
value : object
	  | array
	  | NULL
	  | FALSE
	  | TRUE
	  | STRING
	  | NUMBER
	  ;
object : "(" "!" ")"
       | "(" fields ")"
       ;
fields : field
	   | fields "*" field
	   ;
field : KEY "!" value
	  ;
array : "(" ")"
      | "(" values ")"
      ;
values : value
	   | values "*" value
       ;
```

Urljson与json格式的区别：

双引号字符串`"`替换为单引号字符串`'`。字符串的转义符号用波浪线代替反斜杠。

属性键单引号是可选的。除非当包含控制字符，空白字符，标点符号时必须用单引号括起来。

非空对象`{}`或非空数组`[]`两端的括号都被替换为`()`。

空数组`[]`被替换为`()`，空对象`{}`被替换为`(!)`。

键值分隔符`:`替换为`!`

成员分隔符`,`替换为`*`

其他基元类型：数字`number`，布尔真`true`，布尔假`false`，空`null`，他们都和JSON格式一样。没有变化。

## 生成查询字符串

因为浏览器的开发工具普遍支持query string格式，我们设计对象的直接属性兼容query string，当query的属性仍然是结构类型object或者array时，用urljson格式进行编码。

通过url传递对象数据使用查询字符串。这是标准用法。各种现有开发工具都支持解析。查询字符串以`?`开头，以`&`分隔开相邻参数，以`=`分隔参数名与参数值。

它会序列化传入的 `obj` 中以下类型的值：string | number | boolean 。 任何其他的输入值都将会被强制转换为空字符串。

当对象涉及多层嵌套是查询字符串的参数名变得冗余。所以我们传递对象的第一层成员用查询字符串格式，当对象成员仍然是对象时（包括数组），用Urljson格式。

* 如果成员值为字符串类型，则参数值为成员值，不加引号。例如，`{x:"abc"}`将表示为`?x=abc`

* 如果成员值为`null`、`function`、`undefined`，则字段值转化为空字符串。

* 如果成员值为基元类型，对应的参数值是该成员值的字符串化表示。

* 如果成员值为对象或数组，则用Urljson格式字符化为参数值。注，这里和queryString有区别，即使是基元数组也用Urljson格式字符化，而不是多个同名参数顺序排列。

