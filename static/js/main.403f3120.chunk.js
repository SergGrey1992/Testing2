(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,r){e.exports={preloaderPage:"Preloader_preloaderPage__22p5B",preloader:"Preloader_preloader__2FoS_",load4:"Preloader_load4__z4W5e"}},52:function(e,t,r){"use strict";r.r(t);var a=r(0),c=r.n(a),n=r(6),u=r.n(n),d=r(5),s=function(e){return e.dataReducer},i=function(e){return e.loadingReducer},l=r(2),o=r(21),j=r.n(o),b=function(){return j.a.get("https://cors-anywhere.herokuapp.com/http://www.mrsoft.by/data.json")},O=function(e){return{type:"/app/SET-STATUS",status:e}},f={status:"idle",requestError:null},p=function(e){return{type:"redux/dataReducer/SET-FILTERED-DATA",filteredData:e}},h=function(e){return{type:"redux/dataReducer/SET-MESSAGE",message:e}},x={data:[],valueInputText:"",filteredData:[],isRegister:!1,message:""},T=r(11),E=r.n(T),g=r(1),v=function(){return Object(g.jsx)("div",{className:E.a.preloaderPage,children:Object(g.jsx)("div",{className:E.a.preloader,children:"Loading..."})})},S=c.a.memo((function(e){var t=e.type,r=e.value,a=e.checked,c=e.handler;return Object(g.jsx)("div",{children:Object(g.jsx)("input",{type:t,value:r,checked:a,onChange:c})})})),R=c.a.memo((function(e){var t=e.title,r=e.handler;return Object(g.jsx)("div",{children:Object(g.jsx)("button",{onClick:r,children:t})})})),m=c.a.memo((function(e){var t=e.filteredData;return Object(g.jsx)("div",{children:Object(g.jsxs)("div",{children:["\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442: ",0!==t.length?t.map((function(e,t){return Object(g.jsxs)("span",{children:[" ",t,".",e,"; "]},t)})):"\u041d\u0435\u0442 \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0439"]})})})),y=function(){var e,t=Object(d.c)(s),r=t.data,c=t.valueInputText,n=t.filteredData,u=t.isRegister,l=t.message,o=Object(d.c)(i).status,j=Object(d.b)(),f=Object(a.useCallback)((function(e){return j({type:"redux/dataReducer/SET-VALUE-INPUT-TEXT",value:e.currentTarget.value})}),[j]),x=Object(a.useCallback)((function(e){return j({type:"redux/dataReducer/SET-IS-REGISTER",checked:e.currentTarget.checked})}),[j]),T=Object(a.useCallback)((function(){return j(p(r.filter((function(e){return e.length>+c}))))}),[j,r,c]),E=Object(a.useCallback)((function(){j(p(u?r.filter((function(e){return[c].every((function(t){return e.includes(t)}))})):r.filter((function(e){return[c.toLowerCase()].every((function(t){return e.toLowerCase().includes(t.toLowerCase())}))}))))}),[r,u,c,j]);return Object(a.useEffect)((function(){j((function(e){return e(O("loading")),b().then((function(t){e({type:"redux/dataReducer/SET-DATA",data:t.data.data})})).catch((function(e){console.log(e)})).finally((function(){e(O("succeeded"))}))}))}),[j]),"loading"===o?Object(g.jsx)(v,{}):Object(g.jsxs)("div",{children:["\u041f\u0440\u0438 \u0432\u0432\u043e\u0434\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u043f\u043e\u044f\u0432\u044f\u0442\u0441\u044f \u043d\u0443\u0436\u043d\u044b\u0435 \u043a\u043d\u043e\u043f\u043a\u0438:",Object(g.jsx)("br",{}),Object(g.jsx)(S,{type:"text",value:(e=c,Number(e)?l||j(h("Number")):l||j(h("String")),e),handler:f}),"Number"===l&&Object(g.jsx)(R,{title:"\u0444\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0434\u043b\u0438\u043d\u0435 \u0441\u043b\u043e\u0432",handler:T}),"String"===l&&Object(g.jsxs)("div",{children:[Object(g.jsx)(R,{title:"\u0444\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u043f\u043e\u0434\u0441\u0442\u0440\u043e\u043a\u0435",handler:E}),Object(g.jsx)("span",{children:"\u0440\u0435\u0433\u0438\u0441\u0442\u0440:"}),Object(g.jsx)(S,{type:"checkbox",checked:u,handler:x})]}),l||"",Object(g.jsx)(m,{filteredData:n})]})},k=r(4),A=r(22),D=Object(k.c)({dataReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"redux/dataReducer/SET-DATA":return Object(l.a)(Object(l.a)({},e),{},{data:t.data});case"redux/dataReducer/SET-VALUE-INPUT-TEXT":return Object(l.a)(Object(l.a)({},e),{},{valueInputText:t.value,message:""});case"redux/dataReducer/SET-FILTERED-DATA":return Object(l.a)(Object(l.a)({},e),{},{filteredData:t.filteredData});case"redux/dataReducer/SET-IS-REGISTER":return Object(l.a)(Object(l.a)({},e),{},{isRegister:t.checked});case"redux/dataReducer/SET-MESSAGE":return Object(l.a)(Object(l.a)({},e),{},{message:t.message});default:return Object(l.a)({},e)}},loadingReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"/app/SET-STATUS":return Object(l.a)(Object(l.a)({},e),{},{status:t.status});case"/app/SET-REQUEST-ERROR":return Object(l.a)(Object(l.a)({},e),{},{requestError:t.errorText});default:return Object(l.a)({},e)}}}),I=Object(k.d)(D,Object(k.a)(A.a));u.a.render(Object(g.jsx)(d.a,{store:I,children:Object(g.jsx)(y,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.403f3120.chunk.js.map