(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e){e.exports={10:{0:"4",1:"5",2:"5",3:"6",4:"6",5:"7",6:"8",7:"8",8:"9",9:"9",10:"10",11:"11",12:"11",13:"12",14:"12",15:"13",16:"14",17:"14",18:"15",19:"15",20:"16",percentage:"40"},11:{0:"4",1:"5",2:"6",3:"6",4:"7",5:"7",6:"8",7:"9",8:"9",9:"10",10:"10",11:"11",12:"12",13:"12",14:"13",15:"13",16:"14",17:"15",18:"15",19:"16",20:"16",percentage:"40"},12:{0:"5",1:"5",2:"6",3:"7",4:"7",5:"8",6:"8",7:"9",8:"10",9:"10",10:"11",11:"11",12:"12",13:"13",14:"13",15:"14",16:"14",17:"15",18:"16",19:"16",20:"17",percentage:"40"},13:{0:"7",1:"7",2:"8",3:"8",4:"9",5:"9",6:"10",7:"10",8:"11",9:"11",10:"12",11:"12",12:"13",13:"13",14:"14",15:"14",16:"15",17:"15",18:"16",19:"16",20:"17",percentage:"60"},14:{0:"7",1:"8",2:"8",3:"9",4:"9",5:"10",6:"10",7:"11",8:"11",9:"12",10:"12",11:"13",12:"13",13:"14",14:"14",15:"15",16:"15",17:"16",18:"16",19:"17",20:"17",percentage:"60"},15:{0:"9",1:"9",2:"10",3:"10",4:"11",5:"11",6:"11",7:"12",8:"12",9:"13",10:"13",11:"13",12:"14",13:"14",14:"15",15:"15",16:"15",17:"16",18:"16",19:"17",20:"17",percentage:"60"},16:{0:"10",1:"10",2:"10",3:"11",4:"11",5:"12",6:"12",7:"12",8:"13",9:"13",10:"14",11:"14",12:"14",13:"15",14:"15",15:"16",16:"16",17:"16",18:"17",19:"17",20:"18",percentage:"60"},17:{0:"12",1:"12",2:"13",3:"13",4:"13",5:"13",6:"14",7:"14",8:"14",9:"15",10:"15",11:"15",12:"16",13:"16",14:"16",15:"16",16:"17",17:"17",18:"17",19:"18",20:"18",percentage:"70"},18:{0:"14",1:"15",2:"15",3:"15",4:"15",5:"15",6:"16",7:"16",8:"16",9:"16",10:"16",11:"16",12:"17",13:"17",14:"17",15:"17",16:"18",17:"18",18:"18",19:"18",20:"18",percentage:"80"},19:{0:"20",1:"20",2:"20",3:"20",4:"20",5:"20",6:"20",7:"20",8:"20",9:"20",10:"20",11:"20",12:"20",13:"20",14:"20",15:"20",16:"20",17:"20",18:"20",19:"20",20:"20",percentage:"100"},20:{0:"20",1:"20",2:"20",3:"20",4:"20",5:"20",6:"20",7:"20",8:"20",9:"20",10:"20",11:"20",12:"20",13:"20",14:"20",15:"20",16:"20",17:"20",18:"20",19:"20",20:"20",percentage:"100"}}},25:function(e,a,t){e.exports=t(50)},30:function(e,a,t){},31:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},32:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var s=t(1),n=t.n(s),l=t(20),r=t.n(l),c=(t(30),t(9)),o=t(10),i=t(13),m=t(11),u=t(6),p=t(12),d=(t(31),t(32),t(21)),h=(t(17),t(51)),v=t(52),g=t(53),b=t(57),E=t(7),N=t.n(E),f=(t(19),n.a.Component,t(54)),w=t(55),y=t(56),x=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).MyPrevious=function(){t.state.value1,t.state.value2},t.search=function(e){console.log(t.state.value1,t.state.value2,t.state.todos[t.state.value1][t.state.value2]);var a=t.state.value1,s=t.state.value2,l=t.state.todos[a][s],r=t.state.todos[a].percentage;return n.a.createElement(f.a,null,n.a.createElement(w.a,{lg:12,className:l<=9?"bg-dark text-white p-1 rounded mr-1 ml-1":21==l?"bg-success text-white p-1 rounded mr-1 ml-1":"bg-primary text-white p-1 rounded"},n.a.createElement("p",{className:"display-3"},n.a.createElement("span",{className:"fz-16"},"Mi definitiva es de "),l<10?"0"+l:l,n.a.createElement("span",{className:"fz-16"}," puntos")),n.a.createElement("p",{className:"h2"},l<10?"\ud83d\ude14 Reprobado":l>=10&&l<=12?"\ud83d\ude03 Aprobado":l>=13&&l<=16?"\ud83d\ude01 Aprobado":17==l?"\ud83d\ude06 Aprobado":18==l?"\ud83d\ude05 Aprobado":"\ud83e\udd29 Aprobado"),n.a.createElement("p",{className:""},l<10?"Debes ir a reparaci\xf3n \ud83d\ude2d":"Celebra con una cerveza\ud83c\udf7b\ud83d\udd7a\ud83c\udfff\ud83d\udc83\ud83c\udffd"),n.a.createElement("p",{className:"h4"},r,"% ",n.a.createElement("span",null," de porcentaje aplicable"))))},t.state={todos:d,dato:"",previous:"",lastNote:"",todo2:"",value1:10,value2:0,ok:0},t.search=t.search.bind(Object(u.a)(t)),t.MyPrevious=t.MyPrevious.bind(Object(u.a)(t)),console.log(t.state.todos),t}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App"},n.a.createElement(y.a,{className:"pt-5 pb-5"},n.a.createElement(f.a,null,n.a.createElement(w.a,{lg:12},n.a.createElement("p",{className:"h2"},"\ud83c\udf93Abacus")),n.a.createElement(w.a,{lg:6,className:"pb-5 pt-2"},n.a.createElement("label",{className:"h5 pb-3"},"\xbfCu\xe1l es mi nota previa? \ud83e\udd14"),n.a.createElement(N.a,{maxValue:20,minValue:10,value:this.state.value1,onChange:function(a){return e.setState({value1:a})}}),n.a.createElement(f.a,null,n.a.createElement(w.a,{lg:12,className:"bg-primary p-1 rounded mb-1 mt-5 mr-1 ml-1"},n.a.createElement("p",{className:"text-white display-3"},n.a.createElement("span",{className:"fz-16"},"Llevo")," ",this.state.value1," ",n.a.createElement("span",{className:"fz-16"},"Puntos nota previa")),n.a.createElement("p",{className:"display-4"},40==this.state.todos[this.state.value1].percentage?"\ud83d\ude03":60==this.state.todos[this.state.value1].percentage?"\ud83d\ude01":70==this.state.todos[this.state.value1].percentage?"\ud83d\ude06":80==this.state.todos[this.state.value1].percentage?"\ud83d\ude05":"\ud83e\udd29")))),n.a.createElement(w.a,{lg:6,className:"pb-5 pt-2"},n.a.createElement("label",{className:"h5 pb-3"},"\xbfCu\xe1l es o ser\xe1 mi nota final? \ud83e\udd14"),n.a.createElement(N.a,{maxValue:20,minValue:0,value:this.state.value2,onChange:function(a){return e.setState({value2:a})}}),n.a.createElement(f.a,null,n.a.createElement(w.a,{lg:12,className:this.state.value2<10?"bg-dark rounded p-1 mb-1 mt-5 ml-2 mr-1":"bg-primary rounded p-1 mb-1 mt-5 ml-2 mr-1"},n.a.createElement("p",{className:"text-white display-3"},n.a.createElement("span",{className:"fz-16"},"Saqu\xe9")," ",this.state.value2<10?"0"+this.state.value2:this.state.value2," ",n.a.createElement("span",{className:"fz-16"},1==this.state.value2?"Punto":"Puntos"," nota final")),n.a.createElement("p",{className:"display-4"},this.state.value2<10?"\ud83d\ude14":40==this.state.todos[this.state.value2].percentage?"\ud83d\ude03":60==this.state.todos[this.state.value2].percentage?"\ud83d\ude01":70==this.state.todos[this.state.value2].percentage?"\ud83d\ude06":80==this.state.todos[this.state.value2].percentage?"\ud83d\ude05":"\ud83e\udd29")))),n.a.createElement(w.a,{lg:12},n.a.createElement("label",{className:"h5 pb-3"},"\xbfCu\xe1l es o ser\xe1 mi definitiva? \ud83e\udd14"),this.search()))))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.f3dea632.chunk.js.map