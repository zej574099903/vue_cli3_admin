# 格式化说明文档（插件：beautify）

## 插件介绍
·beautify是格式化代码的插件
·可美化js、html、css、sass、json
.在项目文件夹根目录下创建.jsbeautifyrc文件

## 配置规则
### 1.适合所有文件类型的规则
| 设置 | 适用 | 描述 |
| :---- | :---- | :---- |
| indent_char | 所有 | [String] 缩进字符，默认：" " |
| indent_size | 所有 | [Number] 缩进大小，默认：4 |
| eol | 所有 | [String] 行结束符，默认："\n" |
| end_with_newline | 所有 | [Boolean] 确保最后一行是新行，默认：false |
| indent_with_tabs | 所有 | [Boolean] 用Tab缩进，会覆盖 indent_size 和 indent_char，默认：false |
| preserve_newlines | 所有 | [Boolean] 留原有的多余空行，默认：true |

```json
{
    "indent_char": " ",
    "indent_size": 4,
    "eol": "\n",
    "end_with_newline": false,
    "indent_with_tabs": false,
    "preserve_newlines": true
}
```

### 2.适合js、html的规则
| 设置 | 适用 | 描述 |
| :---- | :---- | :---- |
| max_preserve_newlines | js、html | [Number] 最多能保留的空行，默认：10 |
| wrap_line_length | js、html | [Number] 在N个字符后换行，默认：0（忽略） |

```json
{
    "max_preserve_newlines": 10,
    "wrap_line_length": 0
}
```

### 3.适合js的规则
| 设置 | 适用 | 描述 |
| :---- | :---- | :---- |
| comma_first | js | [Boolean] 将逗号放在新行的开头，默认：false |
| indent_level | js | [Number] 缩放级别，即距离左边界多远开始，默认：0 |
| keep_array_indentation | js | [Boolean] 保留数组缩进，默认：false |
| keep_function_indentation | js | [Boolean] 保留函数缩进，默认：false |
| space_after_anon_function | js | [Boolean] 匿名函数与括号之间添加空格，默认：false |
| space_after_named_function | js | [Boolean] 函数名与括号之间添加空格，默认：false |
| space_before_conditional | js | [Boolean] 条件语句和括号之间添加空格，默认：true |
| space_in_empty_paren | js | [Boolean] 空括号中保留空格，默认：false |
| space_in_paren | js | [Boolean] 括号内添加填充空格，如f( a, b )，默认：false |
```json
{
    "comma_first": false,
    "indent_level": 0,
    "keep_array_indentation": false,
    "keep_function_indentation": false,
    "space_after_anon_function": false,
    "space_after_named_function": false, 
    "space_before_conditional": false,
    "space_in_empty_paren": false,
    "space_in_paren": false
}
```

### 4.适合html的规则
| 设置 | 适用 | 描述 |
| :---- | :---- | :---- |
| extra_liners | html | [Array] 数组内定义的标签，在它们之前有一个换行符，默认[“head”, “body”, “/html”] |
| indent_body_inner_html | html | [Boolean] 缩进 < body> 中的元素，默认：true |
| indent_head_inner_html | html | [Boolean] 缩进 < head> 中的元素，默认：true |
| indent_inner_html | html | [Boolean] 缩进< head>和< body>中的元素（head和body也会缩进），默认：false |
| indent_scripts | html | [String] 缩进< script> 标签里的代码，有三个值：“keep”(对齐< script>标签)、“separate”(对齐左边界)、“normal”(正常缩进)，默认：“normal” |
| wrap_attributes | html | [String] 将属性换到新行，有5个值：“auto”(不换行)、“force”(第2个起换行)、 “force-aligned”(第2个起换行，与第1个属性对齐)、 “force-expand-multiline"或"align-multiple”(两个效果一样，所有属性都换行)，默认：“auto” |
| wrap_attributes_indent_size | html | [Number] 属性换行缩进大小,默认：indent_size |
| unformatted | html | [Array] 数组中的标签不会重新格式化，默认：[] |
| content_unformatted | html | [Array] 数组中标签的内容不会重新格式化，默认：[“pre”,“textarea”] |

```json
{
    "extra_liners": ["head", "body", "/html"],
    "indent_body_inner_html": true,
    "indent_head_inner_html": true,
    "indent_inner_html": false,
    "indent_scripts": "normal",
    "wrap_attributes": "auto",
    "wrap_attributes_indent_size": 2,
    "unformatted": [],
    "content_unformatted": ["pre","textarea"]
}
```

### 5.适合css的规则
| 设置 | 适用 | 描述 |
| :---- | :---- | :---- |
| newline_between_rules | css | [Boolean] 规则之间添加换行符，默认：false |
| selector_separator_newline | css | [Boolean] 选择器之间添加换行符，默认：true |
| space_around_combinator | css | [Boolean] 选择器和样式规则周围添加空格，默认：false |

```json
{
    "newline_between_rules": false,
    "selector_separator_newline": false,
    "space_around_combinator": false,
}
```