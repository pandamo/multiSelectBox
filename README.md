# multiSelectBox

![alt 演示图](https://ftp.bmp.ovh/imgs/2020/08/55e6887a356f38ae.png)

### dist目录内，js和css已压缩
```javascript
依赖：
    css：multiSelect.css
    js：multiSelect.js

    html应用:
    相应位置插入<div class='multiSelect' tabindex="0" id="元素ID"><div>

    js应用：    
    初始化： var 名称 = new multiSelectModuel('元素ID',传入的数据名称)
    获取完整数据：名称.getAll() 
    获取已选数据：名称.getSelected() 
    例：
    var data1 = new multiSelectModuel('mSelect01',list1)
    完整数据：data1.getAll() 
    完整数据：data1.getSelected() 

    传入的数据结构：   
    [
      {
        label: '',//显示的名称
        checked: false //是否选择
        //其他字段（如id,value等）自行拓展
      }
    ]

    例:
    var list1=[
      {
        label: 'Java',
        checked: false
      },
      {
        label: 'javascript',
        checked: false
      }
    ]
```
