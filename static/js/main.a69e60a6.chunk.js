(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),s=n.n(o),l=(n(13),n(3)),c=n(4),i=n(6),u=n(5),m=n(7),d=(n(14),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={list:[],currentInput:""},n.addHandler=function(e){n.setState({currentInput:e.target.value})},n.submit=function(){var e=n.state.list;if(null===e||""===e)return alert("Please Type In The Space Below"),!1;e.push(n.state.currentInput),n.setState({list:e,currentInput:""}),console.log("Hi o/")},n.removeHandler=function(e){var t=n.state.list;t.splice(e,1),n.setState({list:t})},n.enterHandler=function(e){"Enter"===e.key&&n.submit()},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"To-Do-List")),r.a.createElement("div",{className:"to-do-list"},r.a.createElement("button",{className:"button1",onClick:this.submit},"Add"),r.a.createElement("input",{className:"text",type:"text",placeholder:"Type Here",value:this.state.currentInput,onChange:this.addHandler,onKeyPress:this.enterHandler}),this.state.list.map((function(t,n){return r.a.createElement("div",{className:"list"},r.a.createElement("button",{className:"button2",key:n,onClick:function(){return e.removeHandler(n)}}),r.a.createElement("p",null,t))}))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.a69e60a6.chunk.js.map