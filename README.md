# FireKeeper

## Form

| 属性 | 说明 | 类型 | 默认值 | 可选值 | 稳定度 |
| --- | --- | --- | --- | --- | --- |
| url | 表格的提交地址 | String | - | - | 1 | 
| method | 表格的提交方式 | String | post | get, post | 1 | 
| layout | 设置表格的布局方式 | String | basic | basic, inline, horizontal | 1 | 

### Input

| 属性 | 说明 | 类型 | 默认值 | 可选值 | 稳定度 | 
| --- | --- | --- | --- | --- | --- |
| size | 文本框的尺寸 | String | medium | extra-small, small, medium, large | 1 | 
| type | 文本框的类型 | String | text | text, textarea | 1 | 
| placeholder | 文本框内的描述文字 | String | - | - | 1 | 
| disabled | 文本框的禁用状态 | Boolean | false | true, false | 1 | 
| value | 文本的值 | String | - | - | 1 | 
| name | 文本框的字段名称，用于提交 | String | - | - | 1 | 
| status | 文本框的状态 | String | normal | normal, success, warning, error, validating | 1 | 
| onChange | 文本框内容改变后的回调函数 | Function | - | - | 1 | 

## Grid

### Col

24 格栅格系统

| 属性 | 说明 | 类型 | 默认值 | 可选值 | 稳定度 | 
| --- | --- | --- | --- | --- | --- |
| span | 所占栅格格数 | Number | 6 | 1-24 | 1 | 
| offset | 偏移栅格格数 | Number | 0 | 1-24 | 1 | 
