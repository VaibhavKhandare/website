(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{31:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(18),a=c.n(s),l=c(5),i=c(8),r=c(0);var j=function(){return Object(r.jsx)("div",{className:"main_div",children:Object(r.jsxs)("div",{className:"center_div",children:[Object(r.jsx)("br",{}),Object(r.jsx)("h1",{style:{fontSize:"50px"},children:"Project List"}),Object(r.jsxs)("ol",{children:[Object(r.jsxs)("li",{children:["Google Keep",Object(r.jsx)("span",{style:{marginLeft:"40px",marginTop:"15px"},children:Object(r.jsx)(i.b,{exact:!0,activeClassName:"active_class",to:"/keep",className:"button_five",style:{marginLeft:"10px"},children:"Go"})})]}),Object(r.jsx)("p",{style:{textAlign:"left",fontSize:"10px",marginTop:"-5px"},children:" Some Google Keep feature /keep"}),Object(r.jsxs)("li",{children:["To-Do-List",Object(r.jsx)("span",{style:{marginLeft:"62px",marginTop:"15px"},children:Object(r.jsx)(i.b,{exact:!0,activeClassName:"active_class",to:"/todolist",className:"button_five",style:{marginLeft:"10px"},children:"Go"})})]}),Object(r.jsx)("p",{style:{textAlign:"left",fontSize:"10px",marginTop:"-5px"},children:"Task list /todolist"})]})]})})},o=c(10),b=c(35),x=c.n(b),d=(c(31),function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)([]),i=Object(l.a)(a,2),j=i[0],b=i[1],d=function(e){console.log(e.target.innerHTML),b((function(t){return t.splice(e.target.innerHTML-1,1),console.log(t),Object(o.a)(t)}))},O=function(e){console.log(e.target.innerHTML-1),b((function(t){if(" "===t[e.target.innerHTML-1][0])return Object(o.a)(t);var c=" "+t[e.target.innerHTML-1];return t.splice(e.target.innerHTML-1,1,c),console.log(t),Object(o.a)(t)}))};return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"main_div",children:Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(""),c.trim()?b((function(e){return[].concat(Object(o.a)(e),[c.trim()])})):b((function(e){return Object(o.a)(e)}))},children:[Object(r.jsxs)("div",{className:"center_div",children:[Object(r.jsx)("br",{}),Object(r.jsx)("h1",{children:"To Do List"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",onChange:function(e){console.log(e.target.value),s(e.target.value)},placeholder:"Add a task",value:c}),Object(r.jsx)("button",{className:"button_one",type:"submit",children:"+"}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("ol",{children:j.map((function(e,t){return Object(r.jsxs)("li",{style:{textDecoration:" "===e[0]?"line-through":"none"},children:[Object(r.jsx)("span",{children:Object(r.jsx)("button",{onClick:O,onDoubleClick:d,className:"button_two",style:{textDecoration:"none"},children:t+1})}),Object(r.jsx)("span",{style:{marginLeft:"10px",marginTop:"3px"},children:e})]})}))})]}),Object(r.jsx)("div",{className:"div_clock",children:Object(r.jsx)(x.a,{})})]})})})}),O=(c(48),function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("h1",{style:{color:"black",fontStyle:"bold",backgroundColor:"#ffff9f",fontFamily:["Oswald","sansSerif"]},children:[Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL8AAAEHCAMAAADI2meYAAAAilBMVEX/ugD/////lQD/uAD/vAD/tgD/oQD/nQD/68f/1YP/zGj/kQD/tQD//ff/+e3/5LT/vh7/wC7/pkP/x1H/z3D/qUr/rFP/03//wz7/5rr/7tD/pD7/vh//qk3/y1//8dj/3Jr/6cH/ylv/tlD/pwD/umT/36T/2ZH/0nj/9eH/xUj/1IH/8NX/4qxjVc21AAAEv0lEQVR4nO2d3ZraNhCGJWbV8CPABLcLhG7StE1INr3/2yvYgTW7BsuSHs/Mk+894vD90NiWLXlsbIPF8nFdmAH526ZiXn5uN94RDan/8O5DNv9x4QZ1r/x/m6UGOPuXfnD7k/8oNUDtP1+54e0r/9QAlf+8YPjzf/onBqj8Vzz6tX9agJN/yVI8F/+kAEf/sWfSP/unBDj6MxV/w380ex/vv+WqnoZ/fABjN2x/f8M/uoTMgq36r/xjR8As+crnyj8ygHnmK59r/7gAZi3GPyqA2fPpv/aPCcBo/9Y/IoAs//4BhPn3DiDNv28Acf49A8jz7xdAoH+vABL9R7Pfdfv3GAGZ/uEBhPoHl5BU/9AAYv0DA8j1Dwsg2D8ogGT/kACi/QMCyPbvDiDcvzOAdP+uAOL9OwLI9x/N/tTtfzeABv97JaTC/84I6PC/HUCJ/80AWvxvBVDjfyOAHv/2AIr8WwNo8m8LoMq/JYAu/7cBlPm/CaDNfzT7Q7f/qwD6/K8DKPS/CqDRvxlApX8jgE7/lwBK/S8BtPqfA6j1/xlAr38dQLF/FYDZf5YagNXf/PMujdG/vP7mIRFmfQAAAAAAAAAAAHBDZ7hF+kPOeVqtp2VZTtd78m745gzREHmaftnNG6tUi/GnJzdwc4xIyBdfP75eJa/YTYz4USBf/miVrxk/cbTJCIbcZHHHvqqkg9gE5A/zDvsqgdAxcKtvAfYnfhSM73zfgPynQPsTE8aX7lshE/rn1+xknUvd91729tTxRlAAV/bVP7IWcxC4xwh9a5+EBIjUlxLATSP1rf0u4Big3odugz17ADIh19xbLNgryLfPNUP5i/lC5vpcddsoWSuIVon61hrOAInVc4KzgijmuvsaxpOo77pbCeEj2wDQcwZ9az9zDUCWv/94O8M0ABQ/cbiGqQOa22Xy52khRqbbLBAe/0k2/yeOAspWPkwF5LLpW44egPQ5nz/HfUDyzLPJgcF/nNH/v+EPgEwX35odg39GfYYDmB5y+tvh/VMeO7xl8OOX1ln9Bz+BZpt81gw+Bc3sP/hNpPr/X3v9az//KD//a7/+qp//aJ9/ap//Z73/4lhMpXz6LD3w3b2NMv1g+YQCfc3mP+V4/pPxCsaziud1P/9U//zZ+JSl3xfYFmAyPcFleXpbkWUAvvEtQNIhgz/nBzh8v11jbbDuINC+/p4+Cz0w70BJrCDu/SeJq3j8+3+077+K3DxZI2H/2zFA7GVYxv7D4zEcF0CKvvr9t+r3P59uxlTvP1e///+I20xC4flabBcUDrcqAAAAAAAwVc+BQETO32i6G4exY1nv6qLHasAE/vmBPy/w5wX+vMCfF/jzAn9eaFVOwyhlrV2cwfNnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgV2HPLZDE3nC2n0qG1uZZtf+zYWrelwe3NCy9N3PhF4at+2AGaGMNT/PQPLjt0d8WWgeACnvyH2s9Avy48relzgqquj5V7dtkvk/QQd27sPKfKzwEqJhf/O1cZkehO7hV3Xv03P6vlPlR7RuQP3c8u7QvHBcyX6tvgVxxaR7faL+43Xgn/tUaIuc32xfpq/aRi+XjuuA2vEuxflxefXjgfxvoW9Ib1aBfAAAAAElFTkSuQmCC",alt:"logo",height:"60px",weight:"60px"}),Object(r.jsx)("span",{style:{marginLeft:"15px"},children:"Google Keep"})]})})}),m=c(26),u=c(16),f=c(36),h=c.n(f),A=function(e){var t={title:"",content:""},c=Object(n.useState)(t),s=Object(l.a)(c,2),a=s[0],i=s[1],j=Object(n.useState)(!1),o=Object(l.a)(j,2),b=o[0],x=o[1],d=function(e){var t=e.target.value,c=e.target.name;console.log(c+t),i((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(m.a)({},c,t))}))};return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"col",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"},children:[Object(r.jsx)("input",{name:"title",type:"text",onChange:d,onClick:function(){x(!0)},value:a.title,onDoubleClick:function(){x(!1)},placeholder:"Title",style:{width:"150px",borderBottom:"2px solid #f4b400"}}),b?Object(r.jsx)("textarea",{name:"content",style:{marginTop:"5px"},onChange:d,value:a.content,placeholder:"Description"}):null]}),Object(r.jsx)("div",{className:"col",style:{height:"20vh",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",textAlign:"center"},children:b?Object(r.jsxs)("button",{className:"button_four",onClick:function(){console.log(""!==a.title||""!==a.content),""===a.title&&""===a.content||(e.passNote(a),i(t))},children:[" ",Object(r.jsx)(h.a,{})]}):null})]})})})},g=c(37),p=c.n(g),v=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"col",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",marginTop:"0px"},children:[Object(r.jsx)("h3",{children:e.title}),Object(r.jsx)("br",{}),Object(r.jsx)("p",{children:e.content})]}),Object(r.jsx)("div",{className:"col",style:{height:"20vh",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",textAlign:"center"},children:Object(r.jsxs)("button",{onClick:function(){e.deleItem(e.id)},className:"button_three",children:[" ",Object(r.jsx)(p.a,{})]})})]})})})},y=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=function(e){s((function(t){var c;return console.log((" ",c=Object(l.a)(" ",1),t[e].title=c[0]," ")),Object(o.a)(t)}))};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(O,{}),Object(r.jsx)("div",{style:{height:"20vh",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",textAlign:"center"},children:Object(r.jsx)("div",{className:"center_div2",children:Object(r.jsx)(A,{passNote:function(e){s((function(t){return[].concat(Object(o.a)(t),[e])}))}})})}),Object(r.jsx)("div",{className:"img_div",style:{flexDirection:"row",justifyContent:"right",alignItems:"center",textAlign:"center"},children:c.map((function(e,t){return" "!==e.title?Object(r.jsx)("div",{className:"center_div2",style:{margin:"10px"},children:Object(r.jsx)(v,{id:t,title:e.title,content:e.content,deleItem:a},t)}):null}))}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{})]})},N=function(){return Object(r.jsx)("div",{className:"main_div",style:{fontSize:"72px"},children:"Page Not Found"})},D=c(3),C=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("h1",{className:"menu",style:{backgroundColor:"skyblue",color:"red"},children:[Object(r.jsxs)("label",{className:"switch",style:{marginTop:"13px",marginLeft:"13px"},children:[Object(r.jsx)("input",{type:"checkbox",onClick:function(t){e.fnc()}}),Object(r.jsx)("span",{className:"slider round"})]}),Object(r.jsx)(i.b,{exact:!0,activeClassName:"active_class",to:"/",style:{marginLeft:"10px"},children:"Home"}),Object(r.jsx)(i.b,{exact:!0,activeClassName:"active_class",to:"/keep",style:{marginLeft:"10px"},children:"Keep"}),Object(r.jsx)(i.b,{exact:!0,activeClassName:"active_class",to:"/todolist",style:{marginLeft:"10px"},children:"TodoList"}),Object(r.jsx)(i.b,{exact:!0,activeClassName:"active_class",to:"/contact",style:{marginLeft:"10px"},children:"Contact"})]})})},P=function(){var e={name:"",email:"",suggestions:""},t=Object(n.useState)([]),c=Object(l.a)(t,2),s=c[0],a=c[1],i=Object(n.useState)(e),j=Object(l.a)(i,2),b=j[0],x=j[1],d=function(e){var t=e.target,c=t.name,n=t.value;x((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(m.a)({},c,n))}))};return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"main_div",children:Object(r.jsxs)("div",{className:"center_div",children:[Object(r.jsx)("br",{}),Object(r.jsx)("h1",{children:"Contact Us"}),Object(r.jsxs)("form",{style:{padding:"8px",textAlign:"left"},onSubmit:function(t){t.preventDefault(),""===b.name&&""===b.email||(a([].concat(Object(o.a)(s),[b])),x(e),alert(b.name+" Submitted"))},children:[Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("label",{children:"Name"}),Object(r.jsx)("input",{name:"name",type:"text",className:"form-control",onChange:d,value:b.name})]}),Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("label",{for:"exampleInputEmail1",className:"form-label",children:"Email address"}),Object(r.jsx)("input",{name:"email",type:"email",className:"form-control",onChange:d,value:b.email})]}),Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("label",{for:"exampleInputEmail1",className:"form-label",children:"Suggestions"}),Object(r.jsx)("input",{name:"suggestions",type:"Text",className:"form-control",onChange:d,value:b.suggestions})]}),Object(r.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})})})},w=function(){var e=Object(n.useState)("white"),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(C,{fnc:function(){s("white"===c?"black":"white")}}),Object(r.jsx)("div",{style:{backgroundColor:c},children:Object(r.jsxs)(D.c,{children:[Object(r.jsx)(D.a,{exact:!0,path:"/",component:j}),Object(r.jsx)(D.a,{exact:!0,path:"/website",component:j}),Object(r.jsx)(D.a,{exact:!0,path:"/todolist",component:d}),Object(r.jsx)(D.a,{exact:!0,path:"/keep",component:y}),Object(r.jsx)(D.a,{exact:!0,path:"/contact",component:P}),Object(r.jsx)(D.a,{component:N})]})})]})};a.a.render(Object(r.jsx)(i.a,{children:Object(r.jsx)(w,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.d5c9bfc9.chunk.js.map