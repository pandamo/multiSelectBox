"use strict";function multiSelectModuel(e,t){function n(){return"全选（"+l.filter(function(e){return e.checked}).length+" / "+i+"）"}function c(){function t(){var t=l.filter(function(e){return e.checked}),c=t.map(function(e){return e.label}).join(" , ");e.children[0].value=c,r.innerText=n()}if("multiSelectBox"!==e.lastChild.className){var c=document.createElement("div"),i=document.createElement("input"),r=document.createElement("label"),a=document.createElement("ul");c.className="multiSelectBox",c.style.width=e.offsetWidth+"px",i.className="multiSelectBox-search",i.type="search",i.placeholder="请输入关键字检索",r.innerText=n(),l.every(function(e){return e.checked})&&r.classList.add("selected");var s="";l.forEach(function(e){var t=e.checked?'class="selected"':"";s+="<li "+t+">"+e.label+"</li>"}),a.innerHTML=s,c.appendChild(i),c.appendChild(r),c.appendChild(a),setTimeout(function(){e.lastChild.lastChild.childNodes.forEach(function(e,n){e.addEventListener("click",function(){e.classList.toggle("selected"),l[n].checked=!l[n].checked,l.every(function(e){return e.checked})?r.classList.add("selected"):r.classList.remove("selected"),t()},!1)}),r.addEventListener("click",function(){var n="selected"==r.className;l.forEach(function(e){return e.checked=!n}),e.lastChild.lastChild.childNodes.forEach(function(e){n?e.classList.remove("selected"):e.classList.add("selected")}),t(),r.classList.toggle("selected")}),i.addEventListener("input",function(e){var t=l.filter(function(t){return t.label.indexOf(e.target.value.trim())>-1});a.childNodes.forEach(function(e){e.classList.remove("show")}),t.forEach(function(e){var t=l.findIndex(function(t){return t.label===e.label});a.children[t].classList.add("show")}),e.target.value.trim()?a.classList.add("showResult"):a.classList.remove("showResult")})},20),"multiSelectBox"!==e.lastElementChild.className&&e.appendChild(c),e.addEventListener("blur",function(){setTimeout(function(){if(document.activeElement.parentNode.parentNode!==e){if(document.activeElement===e)return;c.remove()}},50)})}}var l=JSON.parse(JSON.stringify(t)),i=l.length,e=document.getElementById(e);return function(){var t=document.createElement("input");t.placeholder="请选择...",e.appendChild(t),t.addEventListener("focus",function(t){e.focus()});var n=l.filter(function(e){return e.checked}),i=n.map(function(e){return e.label}).join(" , ");t.value=i,e.addEventListener("focus",c)}(),{getAll:function(){return l},getSelected:function(){return l.filter(function(e){return e.checked})}}}