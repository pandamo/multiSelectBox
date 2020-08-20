function multiSelectModuel(dom, datas) {
  var data = JSON.parse(JSON.stringify(datas))
  var dataLength = data.length
  var dom = document.getElementById(dom)

  multiSelectInit()

  function multiSelectInit() {
    var searchFilter = document.createElement('input')
    searchFilter.placeholder = '请选择...'
    dom.appendChild(searchFilter)
    searchFilter.addEventListener('focus', function (e) {
      dom.focus()
    })
    //设置已选数据      

    let _selected = data.filter(d => d.checked)
    let _value = _selected.map(i => i.label).join(' , ')
    searchFilter.value = _value
    //设置监听    
    dom.addEventListener('focus', multiSelect)
  }

  function countSelected() {
    let _selectNum = data.filter(d => d.checked).length
    return '全选（' + _selectNum + ' / ' + dataLength + '）'
  }

  function multiSelect() {
    if (dom.lastChild.className === "multiSelectBox") return

    const selectBox = document.createElement('div') // 大框
    const searchBox = document.createElement('input') // 下拉框内的搜索框
    const selectAlllabel = document.createElement('label') // 全选按钮
    const listBox = document.createElement('ul') // 下拉框内的搜索框
    //选项样式设置
    selectBox.className = 'multiSelectBox'
    selectBox.style.width = dom.offsetWidth + 'px'
    //选择框样式设置
    searchBox.className = 'multiSelectBox-search'
    searchBox.type = 'search'
    searchBox.placeholder = '请输入关键字检索'
    //全选按钮
    selectAlllabel.innerText = countSelected()
    if (data.every(l => l.checked)) {
      selectAlllabel.classList.add('selected')
    }

    //selectAllBtn.checked = list.every(l => l.checked)

    let _li = ''
    data.forEach(item => {
      let isChecked = item.checked ? 'class="selected"' : ''
      _li += '<li ' + isChecked + '>' + item.label + '</li>'
    })
    listBox.innerHTML = _li

    selectBox.appendChild(searchBox)
    selectBox.appendChild(selectAlllabel)
    selectBox.appendChild(listBox)

    function showValue() {
      let _selected = data.filter(l => l.checked)
      let _value = _selected.map(i => i.label).join(' , ')
      dom.children[0].value = _value

      selectAlllabel.innerText = countSelected()
    }

    setTimeout(() => {
      let lis = dom.lastChild.lastChild.childNodes
      lis.forEach((li, liIndex) => {
        li.addEventListener('click', () => {
          li.classList.toggle('selected')
          data[liIndex].checked = !data[liIndex].checked
          //校验是否全选
          if (data.every(l => l.checked)) {
            selectAlllabel.classList.add('selected')
          } else {
            selectAlllabel.classList.remove('selected')
          }

          //输入框显示结果
          showValue()
        }, false)
      })

      //监听全选按钮
      selectAlllabel.addEventListener('click', () => {
        let _selectAll = selectAlllabel.className == 'selected'

        data.forEach(l => l.checked = !_selectAll)

        let lis = dom.lastChild.lastChild.childNodes
        lis.forEach(li => {
          if (!_selectAll) {
            li.classList.add('selected')
          } else {
            li.classList.remove('selected')
          }
        })
        showValue()
        selectAlllabel.classList.toggle('selected')
      })


      //监听搜索框
      searchBox.addEventListener('input', (e) => {
        let result = data.filter((item) => item.label.indexOf(e.target.value.trim()) > -1)
        listBox.childNodes.forEach(child => {
          child.classList.remove('show')
        })
        result.forEach(i => {
          let r = data.findIndex(j => j.label === i.label)
          listBox.children[r].classList.add('show')
        })

        if (e.target.value.trim()) {
          listBox.classList.add('showResult')
        } else {
          listBox.classList.remove('showResult')
        }
      })
    }, 20)


    if (dom.lastElementChild.className !== 'multiSelectBox') {
      dom.appendChild(selectBox)
    }


    dom.addEventListener('blur', function () {
      setTimeout(() => {
        if (document.activeElement.parentNode.parentNode !== dom) {
          if (document.activeElement === dom) {
            return
          }
          selectBox.remove()
          /* if(dom.lastElementChild===selectBox){
            dom.removeChild(selectBox)
          } */
        }
      }, 50)
    })
  }
  return {
    getAll: () => {
      return data
    },
    getSelected: () => {
      return data.filter(d => d.checked)
    }
  }
}