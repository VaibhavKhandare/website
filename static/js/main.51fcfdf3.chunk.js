(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{27:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(17),s=n.n(i),l=n(3),a=n(9),r=n(0);var j=function(){return Object(r.jsx)("div",{className:"main_div",children:Object(r.jsxs)("div",{className:"center_div",children:[Object(r.jsx)("br",{}),Object(r.jsx)("h1",{style:{fontSize:"50px"},children:"Project List"}),Object(r.jsxs)("ol",{children:[Object(r.jsxs)("li",{children:["Google Keep",Object(r.jsx)("span",{style:{marginLeft:"40px",marginTop:"15px"},children:Object(r.jsx)(a.b,{exact:!0,activeClassName:"active_class",to:"/keep",className:"button_five",style:{marginLeft:"10px"},children:"Go"})})]}),Object(r.jsx)("p",{style:{textAlign:"left",fontSize:"10px",marginTop:"-5px"},children:" Some Google Keep feature /keep"}),Object(r.jsxs)("li",{children:["To-Do-List",Object(r.jsx)("span",{style:{marginLeft:"62px",marginTop:"15px"},children:Object(r.jsx)(a.b,{exact:!0,activeClassName:"active_class",to:"/todolist",className:"button_five",style:{marginLeft:"10px"},children:"Go"})})]}),Object(r.jsx)("p",{style:{textAlign:"left",fontSize:"10px",marginTop:"-5px"},children:"Task list /todolist"})]})]})})},o=n(5),x=n(28),b=n.n(x),d=(n(27),function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)([]),a=Object(l.a)(s,2),j=a[0],x=a[1],d=function(e){x((function(t){return t.splice(e.target.innerHTML-1,1),Object(o.a)(t)}))},f=function(e){x((function(t){if(" "===t[e.target.innerHTML-1][0])return Object(o.a)(t);var n=" "+t[e.target.innerHTML-1];return t.splice(e.target.innerHTML-1,1,n),Object(o.a)(t)}))};return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"main_div",children:Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i(""),n.trim()?x((function(e){return[].concat(Object(o.a)(e),[n.trim()])})):x((function(e){return Object(o.a)(e)}))},children:[Object(r.jsxs)("div",{className:"center_div",children:[Object(r.jsx)("br",{}),Object(r.jsx)("h1",{children:"To Do List"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",onChange:function(e){i(e.target.value)},placeholder:"Add a task",value:n}),Object(r.jsx)("button",{className:"button_one",type:"submit",children:"+"}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("ol",{children:j.map((function(e,t){return Object(r.jsxs)("li",{style:{textDecoration:" "===e[0]?"line-through":"none"},children:[Object(r.jsx)("span",{children:Object(r.jsx)("button",{onClick:f,onDoubleClick:d,className:"button_two",style:{textDecoration:"none"},children:t+1})}),Object(r.jsx)("span",{style:{marginLeft:"10px",marginTop:"3px"},children:e})]})}))})]}),Object(r.jsx)("div",{className:"div_clock",children:Object(r.jsx)(b.a,{})})]})})})}),f=(n(43),function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("h1",{style:{color:"black",fontStyle:"bold",backgroundColor:"#ffff9f",fontFamily:["Oswald","sansSerif"],marginTop:"-10px"},children:[Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL8AAAEHCAMAAADI2meYAAAAilBMVEX/ugD/////lQD/uAD/vAD/tgD/oQD/nQD/68f/1YP/zGj/kQD/tQD//ff/+e3/5LT/vh7/wC7/pkP/x1H/z3D/qUr/rFP/03//wz7/5rr/7tD/pD7/vh//qk3/y1//8dj/3Jr/6cH/ylv/tlD/pwD/umT/36T/2ZH/0nj/9eH/xUj/1IH/8NX/4qxjVc21AAAEv0lEQVR4nO2d3ZraNhCGJWbV8CPABLcLhG7StE1INr3/2yvYgTW7BsuSHs/Mk+894vD90NiWLXlsbIPF8nFdmAH526ZiXn5uN94RDan/8O5DNv9x4QZ1r/x/m6UGOPuXfnD7k/8oNUDtP1+54e0r/9QAlf+8YPjzf/onBqj8Vzz6tX9agJN/yVI8F/+kAEf/sWfSP/unBDj6MxV/w380ex/vv+WqnoZ/fABjN2x/f8M/uoTMgq36r/xjR8As+crnyj8ygHnmK59r/7gAZi3GPyqA2fPpv/aPCcBo/9Y/IoAs//4BhPn3DiDNv28Acf49A8jz7xdAoH+vABL9R7Pfdfv3GAGZ/uEBhPoHl5BU/9AAYv0DA8j1Dwsg2D8ogGT/kACi/QMCyPbvDiDcvzOAdP+uAOL9OwLI9x/N/tTtfzeABv97JaTC/84I6PC/HUCJ/80AWvxvBVDjfyOAHv/2AIr8WwNo8m8LoMq/JYAu/7cBlPm/CaDNfzT7Q7f/qwD6/K8DKPS/CqDRvxlApX8jgE7/lwBK/S8BtPqfA6j1/xlAr38dQLF/FYDZf5YagNXf/PMujdG/vP7mIRFmfQAAAAAAAAAAAHBDZ7hF+kPOeVqtp2VZTtd78m745gzREHmaftnNG6tUi/GnJzdwc4xIyBdfP75eJa/YTYz4USBf/miVrxk/cbTJCIbcZHHHvqqkg9gE5A/zDvsqgdAxcKtvAfYnfhSM73zfgPynQPsTE8aX7lshE/rn1+xknUvd91729tTxRlAAV/bVP7IWcxC4xwh9a5+EBIjUlxLATSP1rf0u4Big3odugz17ADIh19xbLNgryLfPNUP5i/lC5vpcddsoWSuIVon61hrOAInVc4KzgijmuvsaxpOo77pbCeEj2wDQcwZ9az9zDUCWv/94O8M0ABQ/cbiGqQOa22Xy52khRqbbLBAe/0k2/yeOAspWPkwF5LLpW44egPQ5nz/HfUDyzLPJgcF/nNH/v+EPgEwX35odg39GfYYDmB5y+tvh/VMeO7xl8OOX1ln9Bz+BZpt81gw+Bc3sP/hNpPr/X3v9az//KD//a7/+qp//aJ9/ap//Z73/4lhMpXz6LD3w3b2NMv1g+YQCfc3mP+V4/pPxCsaziud1P/9U//zZ+JSl3xfYFmAyPcFleXpbkWUAvvEtQNIhgz/nBzh8v11jbbDuINC+/p4+Cz0w70BJrCDu/SeJq3j8+3+077+K3DxZI2H/2zFA7GVYxv7D4zEcF0CKvvr9t+r3P59uxlTvP1e///+I20xC4flabBcUDrcqAAAAAAAwVc+BQETO32i6G4exY1nv6qLHasAE/vmBPy/w5wX+vMCfF/jzAn9eaFVOwyhlrV2cwfNnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgV2HPLZDE3nC2n0qG1uZZtf+zYWrelwe3NCy9N3PhF4at+2AGaGMNT/PQPLjt0d8WWgeACnvyH2s9Avy48relzgqquj5V7dtkvk/QQd27sPKfKzwEqJhf/O1cZkehO7hV3Xv03P6vlPlR7RuQP3c8u7QvHBcyX6tvgVxxaR7faL+43Xgn/tUaIuc32xfpq/aRi+XjuuA2vEuxflxefXjgfxvoW9Ib1aBfAAAAAElFTkSuQmCC",alt:"logo",height:"60px",weight:"60px"}),Object(r.jsx)("span",{style:{marginLeft:"15px"},children:"Google Keep"})]})})}),p=n(14),u=n(15),O=n(29),m=n.n(O),g=function(e){var t={title:"",content:""},n=Object(c.useState)(t),i=Object(l.a)(n,2),s=i[0],a=i[1],j=Object(c.useState)(!1),o=Object(l.a)(j,2),x=o[0],b=o[1],d=function(e){var t=e.target.value,n=e.target.name;a((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(p.a)({},n,t))}))};return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"col",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"},children:[Object(r.jsx)("input",{name:"title",type:"text",onChange:d,onClick:function(){b(!0)},value:s.title,onDoubleClick:function(){b(!1)},placeholder:"Title",style:{width:"150px",borderBottom:"2px solid #f4b400"}}),x?Object(r.jsx)("textarea",{name:"content",style:{marginTop:"5px"},onChange:d,value:s.content,placeholder:"Description"}):null]}),Object(r.jsx)("div",{className:"col",style:{height:"20vh",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",textAlign:"center"},children:x?Object(r.jsxs)("button",{className:"button_four",onClick:function(){""===s.title&&""===s.content||(e.passNote(s),a(t))},children:[" ",Object(r.jsx)(m.a,{})]}):null})]})})})},h=n(30),v=n.n(h),y=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"col",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",marginTop:"0px"},children:[Object(r.jsx)("h3",{children:e.title}),Object(r.jsx)("br",{}),Object(r.jsx)("p",{children:e.content})]}),Object(r.jsx)("div",{className:"col",style:{height:"20vh",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",textAlign:"center"},children:Object(r.jsxs)("button",{onClick:function(){e.deleItem(e.id)},className:"button_three",children:[" ",Object(r.jsx)(v.a,{})]})})]})})})},A=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],i=t[1],s=function(e){i((function(t){var n=Object(l.a)(" ",1);return t[e].title=n[0],Object(o.a)(t)}))};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(f,{}),Object(r.jsx)("div",{style:{height:"20vh",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",textAlign:"center"},children:Object(r.jsx)("div",{className:"center_div2",style:{marginTop:"10px"},children:Object(r.jsx)(g,{passNote:function(e){i((function(t){return[].concat(Object(o.a)(t),[e])}))}})})}),Object(r.jsx)("div",{className:"img_div",style:{flexDirection:"row",justifyContent:"right",alignItems:"center",textAlign:"center"},children:Object(r.jsx)("div",{className:"grid2",children:n.map((function(e,t){return" "!==e.title?Object(r.jsx)("div",{className:"center_div2",style:{margin:"5px"},children:Object(r.jsx)(y,{id:t,title:e.title,content:e.content,deleItem:s},t)}):null}))})}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{})]})},C=function(){return Object(r.jsx)("div",{className:"main_div",style:{fontSize:"72px"},children:"Page Not Found"})},N=n(4),D=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("h1",{className:"menu",style:{backgroundColor:"skyblue",color:"red"},children:[Object(r.jsxs)("label",{className:"switch",style:{marginTop:"13px",marginLeft:"13px"},children:[Object(r.jsx)("input",{type:"checkbox",onClick:function(t){e.fnc()}}),Object(r.jsx)("span",{className:"slider round"})]}),Object(r.jsx)(a.b,{exact:!0,activeClassName:"active_class",to:"/",style:{marginLeft:"10px"},children:"Home"}),Object(r.jsx)(a.b,{exact:!0,activeClassName:"active_class",to:"/keep",style:{marginLeft:"10px"},children:"Keep"}),Object(r.jsx)(a.b,{exact:!0,activeClassName:"active_class",to:"/todolist",style:{marginLeft:"10px"},children:"TodoList"}),Object(r.jsx)(a.b,{exact:!0,activeClassName:"active_class",to:"/game",style:{marginLeft:"10px"},children:"Game"})]})})},P=function(){var e={name:"",email:"",suggestions:""},t=Object(c.useState)([]),n=Object(l.a)(t,2),i=n[0],s=n[1],a=Object(c.useState)(e),j=Object(l.a)(a,2),x=j[0],b=j[1],d=function(e){var t=e.target,n=t.name,c=t.value;b((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(p.a)({},n,c))}))};return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"main_div",children:Object(r.jsxs)("div",{className:"center_div",children:[Object(r.jsx)("br",{}),Object(r.jsx)("h1",{children:"Contact Us"}),Object(r.jsxs)("form",{style:{padding:"8px",textAlign:"left"},onSubmit:function(t){t.preventDefault(),""===x.name&&""===x.email||(s([].concat(Object(o.a)(i),[x])),b(e),alert(x.name+" Submitted"))},children:[Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("label",{children:"Name"}),Object(r.jsx)("input",{name:"name",type:"text",className:"form-control",onChange:d,value:x.name})]}),Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("label",{for:"exampleInputEmail1",className:"form-label",children:"Email address"}),Object(r.jsx)("input",{name:"email",type:"email",className:"form-control",onChange:d,value:x.email})]}),Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("label",{for:"exampleInputEmail1",className:"form-label",children:"Suggestions"}),Object(r.jsx)("input",{name:"suggestions",type:"Text",className:"form-control",onChange:d,value:x.suggestions})]}),Object(r.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})})})},S=n(31),w=n.n(S),L=8,T=[0,1,2,3,4,5,6,7,8],k=function(){var e=["","","","","","","","",""],t=Object(c.useState)(["","","","","","","","",""]),n=Object(l.a)(t,2),i=n[0],s=n[1],a=Object(c.useState)("X"),j=Object(l.a)(a,2),x=j[0],b=j[1],d=Object(c.useState)("turn"),f=Object(l.a)(d,2),p=f[0],u=f[1],O=Object(c.useState)("1P"),m=Object(l.a)(O,2),g=m[0],h=m[1],v=Object(c.useState)(0),y=Object(l.a)(v,2),A=y[0],C=y[1],N=Object(c.useState)(0),D=Object(l.a)(N,2),P=D[0],S=D[1],k=Object(c.useState)(""),z=Object(l.a)(k,2),I=z[0],F=z[1],X=Object(c.useState)(""),B=Object(l.a)(X,2),M=B[0],H=B[1],E=Object(c.useState)(""),_=Object(l.a)(E,2),q=_[0],Q=_[1],V=Object(c.useState)(""),G=Object(l.a)(V,2),Y=G[0],U=G[1],Z="10px";I>19||M>19?Z="6px":I>9||M>9?Z="7px":(I>1||M>1)&&(Z="9px");var J=function(e){if(e[0]&&e[1]&&e[2]&&e[0]===e[1]&&e[1]===e[2])u("wins");else if(e[3]&&e[4]&&e[5]&&e[3]===e[4]&&e[4]===e[5])u("wins");else if(e[6]&&e[7]&&e[8]&&e[6]===e[7]&&e[7]===e[8])u("wins");else if(e[0]&&e[3]&&e[6]&&e[0]===e[3]&&e[3]===e[6])u("wins");else if(e[1]&&e[4]&&e[7]&&e[1]===e[4]&&e[4]===e[7])u("wins");else if(e[2]&&e[5]&&e[8]&&e[2]===e[5]&&e[5]===e[8])u("wins");else if(e[0]&&e[1]&&e[2]&&e[0]===e[1]&&e[1]===e[2])u("wins");else if(e[0]&&e[4]&&e[8]&&e[0]===e[4]&&e[4]===e[8])u("wins");else{if(!(e[2]&&e[4]&&e[6]&&e[2]===e[4]&&e[4]===e[6]))return L<0?(u("Draw"),b(""),1):(b((function(e){return"X"===e?"O":"X"})),1);u("wins")}return 0},W=function(e){"turn"!==p&&K(),i[e.target.id]||"turn"!==p||s((function(t){var n=Object(o.a)(t);if(n[e.target.id]=x,L-=1,J(n)){if(T=T.filter((function(t){return t!=e.target.id})),"1P"===g&&T&&"turn"===p){var c=Math.floor(Math.random()*T.length);return n[T[c]]="O",L-=1,J(n)||(S((function(e){return e+1})),H((function(e){return e+1-0})),F(""),Q("transparent"),U(M<3?"coin bronze":M<5?"coin silver":"coin gold")),T.splice(c,1),Object(o.a)(n)}return Object(o.a)(n)}return p&&("X"===x?(C((function(e){return e+1})),F((function(e){return e+1-0})),U("transparent"),Q(I<3?"coin bronze":I<5?"coin silver":"coin gold"),H("")):"O"===x&&(S((function(e){return e+1})),H((function(e){return e+1-0})),F(""),Q("transparent"),U(M<3?"coin bronze":M<5?"coin silver":"coin gold"))),Object(o.a)(n)}))},K=function(){s([].concat(e)),b("1P"===g?"X":function(e){return"X"===e?"O":"X"}),u("turn"),L=8,T=[0,1,2,3,4,5,6,7,8]};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"main_div",style:{flexDirection:"column",fontFamily:" 'Odibee Sans', cursive"},children:[Object(r.jsxs)("div",{className:"center_div",style:{margin:"20px",padding:"20px",height:"150px",width:"285px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"left",textAlign:"left",backgroundColor:"transparent"},children:[Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"left",alignItems:"left",textAlign:"left",margin:"0"},children:[Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",backgroundColor:"transparent",marginLeft:"5px"},children:[Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",textAlign:"center",backgroundColor:"transparent"},children:[Object(r.jsx)("h10",{style:{fontSize:"15px",marginRight:"3px"},children:"1P"}),Object(r.jsxs)("label",{className:"switch",style:{marginTop:"0px",marginLeft:"0px"},children:[Object(r.jsx)("input",{type:"checkbox",onClick:function(){K(),C(0),S(0),H(""),F(""),b("X"),Q("transparent"),U("transparent"),h((function(e){return"1P"===e?"2P":"1P"}))}}),Object(r.jsx)("span",{className:"slider round"})]}),Object(r.jsx)("h10",{style:{fontSize:"15px",marginLeft:"3px"},children:"2P"})]}),Object(r.jsxs)("button",{onClick:K,className:"button_three",style:{margin:"5px"},children:[" ",Object(r.jsx)(w.a,{})]})]}),"1P"===g&&"turn"===p?Object(r.jsxs)("span",{style:{padding:"30px",color:"blue",fontSize:"29px",display:"flex",flexDirection:"center",justifyContent:"center",alignItems:"center",textAlign:"center",marginTop:"-30px",marginLeft:"20px",fontFamily:" 'Mate SC', serif"},children:[" ","Play!"]}):null,"1P"===g&&"wins"===p&&"X"===x?Object(r.jsxs)("span",{style:{padding:"30px",color:"blue",fontSize:"29px",display:"flex",flexDirection:"center",justifyContent:"center",alignItems:"center",textAlign:"center",marginTop:"-30px",marginLeft:"-10px",fontFamily:" 'Mate SC', serif"},children:[" ","You wins"]}):null,"1P"===g&&"wins"===p&&"O"===x?Object(r.jsxs)("span",{style:{padding:"30px",color:"blue",fontSize:"22px",display:"flex",flexDirection:"center",justifyContent:"center",alignItems:"center",textAlign:"center",marginTop:"-30px",marginLeft:"-7px",fontFamily:" 'Mate SC', serif"},children:[" ","Comp wins"]}):null,"1P"===g&&"Draw"===p?Object(r.jsxs)("span",{style:{padding:"30px",color:"blue",fontSize:"29px",display:"flex",flexDirection:"center",justifyContent:"center",alignItems:"center",textAlign:"center",marginTop:"-30px",marginLeft:"0px",fontFamily:" 'Mate SC', serif"},children:[" ","draw"]}):null,"2P"===g?Object(r.jsxs)("span",{style:{padding:"30px",color:"blue",fontSize:"35px",display:"flex",flexDirection:"center",justifyContent:"center",alignItems:"center",textAlign:"center",marginTop:"-30px",marginLeft:"-0px",fontFamily:" 'Mate SC', serif"},children:[" ",x+" "+p]}):null]}),"1P"===g?Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",marginTop:"-20px"},children:[Object(r.jsx)("span",{style:{color:"green",fontSize:"25px",marginTop:"-5px"},children:"Score"}),Object(r.jsxs)("span",{style:{fontSize:"25px",marginTop:"-5px"},children:[Object(r.jsx)("span",{style:{color:"#ff4137",fontFamily:" 'Mate SC', serif"},children:"You: "}),Object(r.jsx)("span",{children:A}),I?Object(r.jsx)("div",{className:q,style:{marginTop:"-5px"},children:Object(r.jsx)("p",{style:{paddingLeft:Z},children:I})}):null,Object(r.jsx)("span",{style:{color:"#37e0ff",fontFamily:" 'Mate SC', serif",marginLeft:"40px"},children:"Comp: "}),Object(r.jsx)("span",{children:P}),M?Object(r.jsx)("div",{className:Y,style:{marginTop:"-5px"},children:Object(r.jsx)("p",{style:{paddingLeft:Z},children:M})}):null]})]}):Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",marginTop:"-20px"},children:[Object(r.jsx)("span",{style:{color:"green",fontSize:"25px",marginTop:"-5px"},children:"Score"}),Object(r.jsxs)("span",{style:{fontSize:"25 px",marginTop:"-5px"},children:[Object(r.jsx)("span",{style:{color:"#ff4137",fontFamily:" 'Mate SC', serif"},children:"X: "}),Object(r.jsx)("span",{children:A}),I?Object(r.jsx)("div",{className:q,style:{marginTop:"-5px"},children:Object(r.jsx)("p",{style:{paddingLeft:Z},children:I})}):null,Object(r.jsx)("span",{style:{marginLeft:"40px",color:"#37e0ff",fontFamily:" 'Mate SC', serif"},children:"O: "}),Object(r.jsx)("span",{children:P}),M?Object(r.jsx)("div",{className:Y,style:{marginTop:"-5px"},children:Object(r.jsx)("p",{style:{paddingLeft:Z},children:M})}):null]})]})]}),Object(r.jsx)("div",{className:"center_div",style:{height:"285px",width:"285px",display:"flex",flexDirection:"center",justifyContent:"center",alignItems:"center",textAlign:"center",backgroundColor:"transparent",fontFamily:" 'Mate SC', serif"},children:Object(r.jsx)("div",{className:"grid",children:i.map((function(e,t){return"X"===e?Object(r.jsx)("div",{className:"cell",children:Object(r.jsx)("button",{id:t,className:"XOXbutton",onClick:W,style:{backgroundColor:"#ff4137"},children:i[t]})}):"O"===e?Object(r.jsx)("div",{className:"cell",children:Object(r.jsx)("button",{id:t,className:"XOXbutton",onClick:W,style:{backgroundColor:"#37e0ff"},children:i[t]})}):Object(r.jsx)("div",{className:"cell",children:Object(r.jsx)("button",{id:t,className:"XOXbutton",onClick:W,children:i[t]})})}))})})]})})},z=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(k,{})})},I=function(){var e=Object(c.useState)("white"),t=Object(l.a)(e,2),n=t[0],i=t[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(D,{fnc:function(){i("white"===n?"black":"white")}}),Object(r.jsx)("div",{style:{backgroundColor:n},children:Object(r.jsxs)(N.c,{children:[Object(r.jsx)(N.a,{exact:!0,path:"/",component:j}),Object(r.jsx)(N.a,{exact:!0,path:"/website",component:j}),Object(r.jsx)(N.a,{exact:!0,path:"/todolist",component:d}),Object(r.jsx)(N.a,{exact:!0,path:"/keep",component:A}),Object(r.jsx)(N.a,{exact:!0,path:"/contact",component:P}),Object(r.jsx)(N.a,{exact:!0,path:"/game",component:z}),Object(r.jsx)(N.a,{component:C})]})})]})};s.a.render(Object(r.jsx)(a.a,{children:Object(r.jsx)(I,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.51fcfdf3.chunk.js.map