(this.webpackJsonpdnd=this.webpackJsonpdnd||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){},,,function(e,t,a){e.exports=a(37)},,,,,function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/assy.208457ce.png"},function(e,t,a){e.exports=a.p+"static/media/square.7756f838.png"},function(e,t,a){e.exports=a.p+"static/media/heli-wit.fa0c8680.png"},function(e,t,a){e.exports=a.p+"static/media/heli-zwart.dc5d816a.png"},function(e,t,a){e.exports=a.p+"static/media/hoek.71bb7154.png"},function(e,t,a){e.exports=a.p+"static/media/lip.c156dfa3.png"},function(e,t,a){e.exports=a.p+"static/media/None.575b9ee0.png"},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),o=a(15),s=a.n(o),c=(a(22),a(23),a(16)),r=a(2),l=a(3),d=a(5),h=a(4),p=a(6),m=(i.Component,a(11)),u=a(1);a(28);function g(e){var t=e.onclick,a=e.showDoubleModule;return n.a.createElement("div",{className:"chooseModule"},n.a.createElement("div",{onClick:t,className:a&&"moduleBtnAtcive"},"Double modules"),n.a.createElement("div",{onClick:t,className:!a&&"moduleBtnAtcive"},"Simple modules"))}function f(e){var t=e.width,a=e.height,i=e.deep,o=e.capacity,s=e.sofa,c=(void 0===s?[]:s).reduce((function(e,t){return e+t.price}),0);return n.a.createElement("div",{className:"infoTab"},n.a.createElement("div",null,"Height: ",a||0," \u0441\u043c"),n.a.createElement("div",null,"Width: ",t||0," \u0441\u043c"),n.a.createElement("div",null,"Deep: ",i||0," \u0441\u043c"),n.a.createElement("div",null,"Number of doors: ",o||0),n.a.createElement("div",null,"Total: ",c," \u20ac"))}var v=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).onDrop=i.onDrop.bind(Object(u.a)(i)),i.shouldAcceptDrop=i.shouldAcceptDrop.bind(Object(u.a)(i)),i.renderPiece=i.renderPiece.bind(Object(u.a)(i)),i.handleMouseMove=i.handleMouseMove.bind(Object(u.a)(i)),i.handler=i.handler.bind(Object(u.a)(i)),i.onDragStart=i.onDragStart.bind(Object(u.a)(i)),i.changeModule=i.changeModule.bind(Object(u.a)(i)),i.newCapacity=i.props.capacity,i.pieceWidth=i.props.pieceWidth,i.pieceHeight=i.props.sofaHeight,i.withing=i.props.sofaWidth,i.pieceDeep=i.props.sofaDeep,i.zoom=i.props.zoom,i.totalPrice=null,i.prevSofa=[],i.activeSectionSize=null,i.dragging=!1,i.dragOverSofa=!1,i.state={board:[[{side:"black",size:2,id:"black-0-0",model:"model-1",empty:!1,price:200},{side:"black",size:2,id:"black-0-1",model:"model-2",empty:!1,price:210},{side:"black",size:2,id:"black-0-2",model:"model-3",empty:!1,price:220},{side:"black",size:2,id:"black-0-3",model:"model-4",empty:!1,price:230}],[{side:"black",size:1,id:"black-1-0",model:"model-1",empty:!1,price:100},{side:"black",size:1,id:"black-1-1",model:"model-2",empty:!1,price:110},{side:"black",size:1,id:"black-1-2",model:"model-3",empty:!1,price:120},{side:"black",size:1,id:"black-1-3",model:"model-4",empty:!1,price:130}],i.props.sofa],x:0,colonka:null,showDoubleModules:!0},i}return Object(l.a)(a,[{key:"renderPiece",value:function(e,t,a,i){var o=this;return n.a.createElement(p.Draggable,null,n.a.createElement("div",{className:2===t&&o.dragging?1===o.activeSectionSize&&null!==i&&2===o.state.board[2][i].size?-1<=o.state.x&&o.state.x<o.pieceWidth?i!==a?"piece ".concat(e.model):"piece ".concat(e.model," onSquareHalfRight"):i!==a?"piece ".concat(e.model):"piece ".concat(e.model," onSquareHalfLeft"):1===o.activeSectionSize?i!==a?"piece ".concat(e.model):"piece ".concat(e.model," onSquare"):2===o.activeSectionSize&&null!==i&&i<o.state.board[2].length-1&&1===o.state.board[2][i].size&&2===o.state.board[2][i+1].size?i===a?"piece ".concat(e.model," onSquare"):i+1===a?"piece ".concat(e.model," onSquareHalfRight"):"piece ".concat(e.model):null!==i&&2===o.activeSectionSize&&2===o.state.board[2][i].size&&o.state.x>o.pieceWidth&&o.state.board[2][i]&&i!==o.state.board[2].length-1?o.state.board[2][i+1]&&2===o.state.board[2][i+1].size?i+1===a?"piece ".concat(e.model," onSquareHalfRight"):i===a?"piece ".concat(e.model," onSquareHalfLeft"):"piece ".concat(e.model):i+1===a?"piece ".concat(e.model," onSquare"):i===a?"piece ".concat(e.model," onSquareHalfLeft"):"piece ".concat(e.model):null!==i&&2===o.state.board[2][i].size?i!==a&&i!==a?"piece ".concat(e.model):"piece ".concat(e.model," onSquare"):2===o.activeSectionSize&&i===o.state.board[2].length-1&&2===o.state.board[2][i-1].size?i===a?"piece ".concat(e.model," onSquare"):i-1===a?"piece ".concat(e.model," onSquareHalfLeft"):"piece ".concat(e.model):2===o.activeSectionSize&&i===o.state.board[2].length-1?i!==a&&i!==a+1?"piece ".concat(e.model):"piece ".concat(e.model," onSquare"):i!==a&&i!==a-1?"piece ".concat(e.model):"piece ".concat(e.model," onSquare"):"piece ".concat(e.model),style:{width:this.pieceWidth*e.size,height:this.pieceHeight}}))}},{key:"changeModule",value:function(){this.setState((function(e){return{showDoubleModules:!e.showDoubleModules}}))}},{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement(g,{onclick:this.changeModule,showDoubleModule:this.state.showDoubleModules}),this.state.board.map((function(t,a){return 2===a?n.a.createElement(n.a.Fragment,null,n.a.createElement(f,{width:e.withing/e.zoom,height:e.pieceHeight/e.zoom,deep:e.pieceDeep/e.zoom,capacity:e.newCapacity,sofa:e.state.board[2]}),n.a.createElement("div",{onMouseLeave:e.handler,onMouseMove:e.handleMouseMove,className:"sofaBox",style:{width:e.withing},key:t+"-"+a},n.a.createElement("div",{className:"underSofa",style:{width:e.withing,height:e.pieceHeight,perspective:300,overflow:"hidden",padding:40,top:-40}},n.a.createElement("div",{className:"underSofaSides",style:{width:e.withing}},t.map((function(t,a){return n.a.createElement("div",{style:{width:e.pieceWidth*t.size,height:e.pieceHeight}},n.a.createElement("div",{className:"dashUnderline",style:{width:e.pieceWidth,height:e.pieceHeight,top:e.pieceHeight/2}}),n.a.createElement("div",{className:!t.empty&&"solidUnderline",style:{width:e.pieceWidth*t.size,height:e.pieceHeight,top:e.pieceHeight/2}}))})))),n.a.createElement("div",{className:"sofaConstructor"},n.a.createElement("div",{className:"sofaSides",style:{width:e.withing}},n.a.createElement("div",{className:"back",style:{height:e.pieceHeight,width:e.withing}}),n.a.createElement("div",{className:"left",style:{height:e.pieceHeight,width:e.pieceWidth}}),n.a.createElement("div",{className:"right",style:{height:e.pieceHeight,width:e.pieceWidth}}),n.a.createElement("div",{className:"top",style:{width:e.withing,height:e.pieceWidth}}),n.a.createElement("div",{className:e.dragging?"bottom bottom-hover":"bottom",style:{width:e.withing,top:e.pieceHeight,height:e.pieceWidth}}))),n.a.createElement("div",{className:"underSofa",style:{width:e.withing,height:e.pieceHeight}},n.a.createElement("div",{className:"underSofaSides",style:{width:e.withing}},t.map((function(t,a){return t.empty?n.a.createElement("div",{style:{width:e.pieceWidth*t.size,height:e.pieceHeight}},n.a.createElement("div",{className:!t.empty&&"sectionFront",style:{width:e.pieceWidth*t.size,height:e.pieceHeight}})):n.a.createElement("div",{style:{width:e.pieceWidth*t.size,height:e.pieceHeight}},n.a.createElement("div",{className:!t.empty&&"sectionFront",style:{width:e.pieceWidth*t.size,height:e.pieceHeight}}),n.a.createElement("div",{className:!t.empty&&"sectionLeft",style:{width:e.pieceWidth,height:e.pieceHeight}}),n.a.createElement("div",{className:!t.empty&&"sectionRight",style:{width:e.pieceWidth,height:e.pieceHeight}}))})))),t.map((function(t,i){return n.a.createElement("div",{style:{width:e.pieceWidth*t.size},key:"".concat(a).concat(i)},n.a.createElement(p.Container,{dragClass:"nothing",style:{height:"100%"},behaviour:"drop-zone",onDrop:function(t){return e.onDrop(t,a,i)},getChildPayload:function(){return{colIndex:i,rowIndex:a,piece:t}},onDragStart:function(t){return e.onDragStart(t,a,i)},onDragEnd:function(){return e.onDragEnd(a,i)},onDragEnter:function(t){return e.onDragEnter(t,a,i)},onDropReady:function(t){return e.onDropReady(t)},shouldAcceptDrop:function(t,n){return e.shouldAcceptDrop(n,a,i)}},e.renderPiece(t,a,i,e.state.colonka)))})))):1===a?n.a.createElement(n.a.Fragment,null,!e.state.showDoubleModules&&n.a.createElement("div",{className:"singleModuleBox",key:a},t.map((function(t,i){return n.a.createElement("div",{className:"moduleSection",key:"".concat(a).concat(i),style:{width:e.pieceWidth*t.size,height:e.pieceHeight}},n.a.createElement(p.Container,{dragClass:"dragging",style:{height:"100%"},behaviour:"move",onDrop:function(t){return e.onDrop(t,a,i)},shouldAcceptDrop:function(t,n){return e.shouldAcceptDrop(n,a,i)},getChildPayload:function(){return{colIndex:i,rowIndex:a,piece:t}}},e.renderPiece(t)))})))):n.a.createElement(n.a.Fragment,null,e.state.showDoubleModules&&n.a.createElement("div",{className:"doubleModuleBox",key:a},t.map((function(t,i){return n.a.createElement("div",{className:"moduleSection",style:{width:e.pieceWidth*t.size,height:e.pieceHeight},key:"".concat(a).concat(i)},n.a.createElement(p.Container,{dragClass:"dragging",style:{height:"100%"},behaviour:"move",onDrop:function(t){return e.onDrop(t,a,i)},shouldAcceptDrop:function(t,n){return e.shouldAcceptDrop(n,a,i)},getChildPayload:function(){return{colIndex:i,rowIndex:a,piece:t}}},e.renderPiece(t)))}))))})))}},{key:"handleMouseMove",value:function(e){this.setState({x:e.nativeEvent.offsetX})}},{key:"handler",value:function(e){var t={side:"white",size:1,model:"empty",empty:!0,price:0};this.dragOverSofa&&(2===this.activeSectionSize?this.state.board[2].splice(this.state.colonka,1,t,t):this.state.board[2].splice(this.state.colonka,1,t),this.dragOverSofa=!1)}},{key:"onDragStart",value:function(e,t,a){2===e.payload.rowIndex&&(this.dragOverSofa=!0)}},{key:"onDragEnter",value:function(e,t,a){this.setState({colonka:a}),this.dragging=!0}},{key:"onDragEnd",value:function(e,t){this.dragging=!1,this.dragOverSofa=!1,this.props.updateSofa(this.state.board[2]),this.forceUpdate()}},{key:"shouldAcceptDrop",value:function(e,t,a){var i=e.colIndex,n=e.rowIndex,o=this.state.board[n][i],s=this.state.board[t][a];return o===s||o.side!==s.side&&("white"!==o.side||"black"!==s.side)}},{key:"onDropReady",value:function(e){this.prevSofa=Object.assign([],this.state.board[2]),this.activeSectionSize=e.payload.piece.size}},{key:"onDrop",value:function(e,t,a){var i=this,n=e.addedIndex,o=e.removedIndex,s=e.payload,c=this.state.board[2],r={side:"white",size:1,model:"empty",empty:!0,price:0};if(this.props.updateSofa(this.state.board[2]),"white"===e.payload.piece.side)return null;if(null!==n||null!==o){var l=Object.assign({},s.piece);this.state.board[t][a]={},this.setState((function(e){return e.board[t][a]=l}))}null!==n&&null===o&&(2===s.piece.size&&1===this.prevSofa[a].size&&a<this.prevSofa.length-1&&"white"!==e.payload.piece.side&&(c.splice(a+1,1),console.log("two")),2===s.piece.size&&2===this.prevSofa[a].size&&this.state.x>this.pieceWidth&&(this.state.board[2][a+1]&&2===this.prevSofa[a+1].size?(console.log("klac"),c.splice(a,0,r),c.splice(a+2,1,r)):a===this.prevSofa.length-1||(console.log("ono"),c.splice(a,0,r),c.splice(a+2,1))),1===s.piece.size&&2===this.prevSofa[a].size&&(this.state.x<this.pieceWidth?(console.log("heres"),c.splice(a+1,0,r)):(console.log("one"),c.splice(a,0,r))),this.newCapacity>3&&(2===s.piece.size&&1===this.prevSofa[a].size&&a===this.prevSofa.length-1&&(2===this.prevSofa[a-1].size?c.splice(a-1,1,r):c.splice(a-1,1)),2===s.piece.size&&1===this.prevSofa[a].size&&a<this.prevSofa.length-1&&2===this.prevSofa[a+1].size&&c.splice(a+1,0,r)),3===this.newCapacity&&(2===s.piece.size&&1===this.prevSofa[a].size&&a===this.prevSofa.length-1&&1===this.prevSofa[a-1].size&&c.splice(a-1,1),2===s.piece.size&&1===this.prevSofa[a].size&&a===this.prevSofa.length-1&&2===this.prevSofa[a-1].size&&c.splice(a-1,1,r),2===s.piece.size&&1===this.prevSofa[a].size&&0===a&&2===this.prevSofa[a+1].size&&c.splice(a+1,0,r)),1===this.state.board[2].reduce((function(e,t){return e+t.empty}),0)&&this.setState({showDoubleModules:!1}),this.setState((function(e){e.colonka=null;var t=i.state.board[2].map((function(e,t){return e.side="white",e}));return Object(m.a)(Object(m.a)({},e),{},{row:t})})))}},{key:"componentWillUpdate",value:function(){this.newCapacity=this.state.board[2].reduce((function(e,t){return e+t.size}),0)}},{key:"componentDidUpdate",value:function(){this.newCapacity=this.state.board[2].reduce((function(e,t){return e+t.size}),0)}}]),a}(i.Component),b=(i.Component,a(8));a(14);function y(e){var t=e.onsubmit,a=e.onchange,i=e.sofaHeight,o=e.sofaWidth,s=e.sofaDeep,c=e.zoom;return n.a.createElement(n.a.Fragment,null,n.a.createElement("form",{className:"form",onSubmit:t},n.a.createElement("label",{style:{top:80,left:100}},"Height: ",n.a.createElement("input",{defaultValue:i&&i/c,type:"number",min:"100",max:"270",name:"sofaHeight",placeholder:"100-270",onChange:a,required:!0})," cm. "),n.a.createElement("label",{style:{bottom:220,right:100}},"Width: ",n.a.createElement("input",{defaultValue:o&&o/c,type:"number",min:"50",max:"550",name:"sofaWidth",placeholder:"50-550",onChange:a,required:!0})," cm. "),n.a.createElement("label",{style:{bottom:120,left:20,color:"lightgrey"}},"Deep: ",n.a.createElement("input",{defaultValue:s&&s/c,type:"number",min:"25",max:"75",name:"sofaDeep",placeholder:"25-75",onChange:a,required:!0})," cm. "),n.a.createElement("input",{className:"btnIn",style:E.btn,type:"submit",value:"Next Stage"})))}var E={btn:{position:"absolute",bottom:20,right:20,backgroundColor:"#fd4f7d",width:120}},S=a(9),w=(a(29),a(12));function z(e){var t=e.data,a=e.onclick,i=e.choosedHandler;return t.map((function(e,t){return n.a.createElement("button",{onClick:function(){return a(e.name)},key:e.name+t},i===e.name&&n.a.createElement("div",{className:"choosedHandler"},"\u2713"),n.a.createElement("img",{alt:e.name+"-img",src:e.img}))}))}function k(e){var t=e.innerColorPrice,a=e.outerColorPrice,i=e.capacity,o=e.handlerPrice;return n.a.createElement("div",{className:"infoTab"},n.a.createElement("div",null,"Inner color: ",t||0," \u20ac"),n.a.createElement("div",null,"Outer color: ",a||0," \u20ac"),n.a.createElement("div",null,"Handlers(",i||0," pcs.): ",o||0," \u20ac"),n.a.createElement("div",null,"Total: ",t+a+o," \u20ac"))}function N(e){var t=e.sofaWidth,o=e.sofaHeight,s=e.pieceWidth,c=e.pieceDeep,r=e.capacity,l=e.sofa,d=e.zoom,h=e.updateDesign,p=e.inner,m=e.outer,u=e.handler,g=Object(i.useState)(!1),v=Object(S.a)(g,2),b=v[0],y=v[1],E=Object(i.useState)(p),N=Object(S.a)(E,2),D=N[0],W=N[1],O=Object(i.useState)(m),C=Object(S.a)(O,2),x=C[0],j=C[1],M=Object(i.useState)(u),I=Object(S.a)(M,2),L=I[0],P=I[1],R=[{value:1,color:"rgb(135, 221, 233)",price:115},{value:1,color:"rgb(233, 207, 135)",price:120},{value:1,color:"rgb(92, 92, 92)",price:130},{value:1,color:"rgb(204, 99, 99)",price:140},{value:1,color:"rgb(143, 119, 119)",price:155},{value:1,color:"rgb(255, 245, 245)",price:165},{value:1,color:"rgb(138, 105, 105)",price:170}],q=[{img:a(30),name:"assy",price:20},{img:a(31),name:"square",price:22},{img:a(32),name:"heli-wit",price:24},{img:a(33),name:"heli-zwart",price:26},{img:a(34),name:"hoek",price:28},{img:a(35),name:"lip",price:30},{img:a(36),name:"none",price:40}],A=q.filter((function(e){return e.name===L}))[0].price,F=function(e){return R.filter((function(t,a){return a===e}))[0].color},T=function(e){return R.filter((function(t,a){return a===e}))[0].price},U=l.reduce((function(e,t){return e+t.price}),0)+T(D)+T(x)+A*r;return h(D,x,L,U),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"sofaBox",style:{height:o+70}},n.a.createElement("div",{className:"underSofa",style:{width:t+20,height:o+70,perspective:800,top:-10}},n.a.createElement("div",{className:"lineUnderSofa",style:{width:t+20,height:o+70,top:-o/2-35}}),n.a.createElement("div",{className:"lineUnderSofa",style:{width:t+20,height:o+70,top:o/2+5}})),n.a.createElement("div",{className:"underSofa",style:{width:t+20,height:o+40,backgroundColor:F(x),top:-10}}),n.a.createElement("div",{className:"underSofa",style:{width:t,height:o,perspective:800}},n.a.createElement("div",{className:"underSofaSides here",style:{width:t,height:o,backgroundColor:F(D)}}),n.a.createElement("div",{className:"underSofaSides",style:{width:t,opacity:.7}},l.map((function(e,t){return n.a.createElement("div",{key:"piece-".concat(e.model,"-").concat(t),className:"piece ".concat(e.model),style:{width:s*e.size,height:o}})})))),n.a.createElement("div",{className:"sofaDoors",style:{width:t,height:o}},l.map((function(e,t){return 1===e.size&&l.length-1===t||1===e.size&&l[t-1]&&1===l[t-1].size?n.a.createElement("div",{key:e.size+"-doorRight",className:"door",style:{width:s,height:o}},n.a.createElement("div",{className:b?"doorRight doorOpenRight ":"doorRight",style:{background:F(x),width:s,height:o}}),n.a.createElement("div",{className:b?"doorHandlerRight  ".concat(L," doorHandlerOpenRight "):"".concat(L," doorHandlerRight"),style:{position:"absolute",top:o/2}})):2===e.size?n.a.createElement(n.a.Fragment,{key:e.size+"-door-"+t},n.a.createElement("div",{className:"door",style:{width:s,height:o}},n.a.createElement("div",{className:b?"doorLeft doorOpenLeft ":"doorLeft",style:{background:F(x),width:s,height:o}}),n.a.createElement("div",{className:b?"doorHandlerLeft ".concat(L,"  doorHandlerOpenLeft "):"".concat(L," doorHandlerLeft"),style:{position:"absolute",top:o/2,right:10}})),n.a.createElement("div",{className:"door",style:{width:s,height:o}},n.a.createElement("div",{className:b?"doorRight doorOpenRight ":"doorRight",style:{background:F(x),width:s,height:o}}),n.a.createElement("div",{className:b?"doorHandlerRight ".concat(L,"  doorHandlerOpenRight "):"".concat(L," doorHandlerRight"),style:{position:"absolute",top:o/2}}))):n.a.createElement("div",{key:e.size+"-doorLeft",className:"door",style:{width:s,height:o}},n.a.createElement("div",{className:b?"doorLeft doorOpenLeft ":"doorLeft",style:{background:F(x),width:s,height:o}}),n.a.createElement("div",{className:b?"doorHandlerLeft  ".concat(L," doorHandlerOpenLeft "):"".concat(L," doorHandlerLeft"),style:{position:"absolute",top:o/2,right:10}}))}))),n.a.createElement("button",{style:H.btn,onClick:function(){return y(!b)}},b?"Close":"Open")),n.a.createElement(f,{width:t/d,height:o/d,deep:c/d,capacity:r,sofa:l}),n.a.createElement(k,{innerColorPrice:T(D),outerColorPrice:T(x),handlerPrice:A*r,capacity:r}),n.a.createElement("div",{className:"infoTab"},n.a.createElement("div",{style:{fontSize:50}},"Total Sum: ",U," \u20ac")),n.a.createElement("div",{className:"handlers"},n.a.createElement(z,{data:q,onclick:function(e){return P(e)},choosedHandler:L})),n.a.createElement("div",{className:"colorSections"},n.a.createElement("div",{className:"innerColor"},n.a.createElement("p",{className:"textInside"},"Inner"),n.a.createElement(w.PieChart,{style:{fontSize:10},radius:40,data:R,onClick:function(e,t){return W(t)},lineWidth:50,segmentsStyle:{transition:"stroke .9s",cursor:"pointer"},segmentsShift:function(e){return e===D?5:1}})),n.a.createElement("div",{className:"outerColor"},n.a.createElement("p",{className:"textInside"},"Outer"),n.a.createElement(w.PieChart,{style:{fontSize:10},radius:40,data:R,onClick:function(e,t){return j(t)},lineWidth:50,segmentsStyle:{transition:"stroke .9s",cursor:"pointer"},segmentsShift:function(e){return e===x?5:1}}))))}var H={btn:{position:"absolute",backgroundColor:"grey",color:"white",width:120,bottom:0}},D=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).nextStep=function(e){e.preventDefault();var t=i.state.step;i.setState({step:t+1})},i.prevStep=function(e){e.preventDefault();var t=i.state.step;i.setState({step:t-1})},i.updateSofa=function(e){return i.setState({sofa:e})},i.updateDesign=function(e,t,a,n){i.selectedInner=e,i.selectedOuter=t,i.selectedHandler=a,i.totalSum=n},i.handleInputChange=i.handleInputChange.bind(Object(u.a)(i)),i.sofaLength=i.sofaLength.bind(Object(u.a)(i)),i.zoom=1.5,i.capacity=null,i.pieceWidth=null,i.isSofaEmpty=!0,i.state={step:1,sofaHeight:null,sofaWidth:null,sofaDeep:null,showStageTwo:!1,sofa:i.sofaLength(i.capacity)},i.selectedInner=5,i.selectedOuter=5,i.selectedHandler="assy",i.totalSum=null,i}return Object(l.a)(a,[{key:"sofaLength",value:function(e){for(var t=[],a=0;a<e;a++)t.push({side:"white",size:1,id:"white-2-".concat(a),model:"empty",empty:!0,price:0});return t}},{key:"makeSections",value:function(){for(var e=this,t=[],a=0;a<this.capacity;a++)t.push(a);return n.a.createElement("div",{className:"underSofaSides",style:{width:this.state.sofaWidth,height:this.state.sofaHeight}},t.map((function(t,a){return n.a.createElement("div",{key:t+"-"+a,style:{width:e.pieceWidth,height:e.state.sofaHeight}},n.a.createElement("div",{className:"dashUnderline",style:{width:e.pieceWidth,height:e.state.sofaHeight,top:e.state.sofaHeight/2}}))})))}},{key:"handleInputChange",value:function(e){var t=+e.target.value*this.zoom,a=e.target.name;setTimeout(function(){var e;this.setState((e={},Object(b.a)(e,a,t),Object(b.a)(e,"sofa",this.sofaLength(this.capacity)),e))}.bind(this),700)}},{key:"showStageOne",value:function(){var e=this.state.sofaWidth/50/this.zoom;return this.capacity=e>100?Math.round(e):Math.floor(e),this.pieceWidth=this.state.sofaWidth/this.capacity,this.state.sofa=this.sofaLength(this.capacity),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"room"},n.a.createElement(y,{sofaHeight:this.state.sofaHeight,sofaWidth:this.state.sofaWidth,sofaDeep:this.state.sofaDeep,onsubmit:this.nextStep,onchange:this.handleInputChange,zoom:this.zoom})),n.a.createElement(f,{width:this.state.sofaWidth/this.zoom,height:this.state.sofaHeight/this.zoom,deep:this.state.sofaDeep/this.zoom,capacity:this.capacity}),n.a.createElement("div",{style:{padding:50}},n.a.createElement("div",{style:{margin:"auto",position:"relative",width:this.state.sofaWidth,height:this.state.sofaHeight,perspective:200,overflow:"hidden"}},n.a.createElement("div",{className:"left",style:{height:this.state.sofaHeight,width:this.state.sofaDeep}}),n.a.createElement("div",{className:"right",style:{height:this.state.sofaHeight,width:this.state.sofaDeep}}),n.a.createElement("div",{className:"top",style:{width:this.state.sofaWidth,height:this.state.sofaDeep}}),n.a.createElement("div",{className:"bottom",style:{width:this.state.sofaWidth,top:this.state.sofaHeight,height:this.state.sofaDeep}}),this.makeSections())))}},{key:"render",value:function(){switch(this.isSofaEmpty=this.state.sofa.some((function(e){return!0===e.empty})),this.state.step){case 1:return this.showStageOne();case 2:return n.a.createElement(n.a.Fragment,null,n.a.createElement(v,{capacity:this.capacity,pieceWidth:this.pieceWidth,sofaHeight:this.state.sofaHeight,sofaWidth:this.state.sofaWidth,sofaDeep:this.state.sofaDeep,updateSofa:this.updateSofa,sofa:this.state.sofa,zoom:this.zoom}),n.a.createElement("div",{className:"btnPos"},n.a.createElement("button",{className:"btnIn",style:W.btn,onClick:this.prevStep},"Prev Stage"),n.a.createElement("button",{className:"btnIn",style:W.btn,onClick:this.nextStep,disabled:this.isSofaEmpty},"Next Stage")));case 3:return n.a.createElement(n.a.Fragment,null,n.a.createElement(N,{pieceWidth:this.pieceWidth,sofaHeight:this.state.sofaHeight,sofaWidth:this.state.sofaWidth,capacity:this.capacity,sofa:this.state.sofa,zoom:this.zoom,updateDesign:this.updateDesign,inner:this.selectedInner,outer:this.selectedOuter,handler:this.selectedHandler}),n.a.createElement("div",{className:"btnPos"},n.a.createElement("button",{className:"btnIn",style:W.btn,onClick:this.prevStep},"Prev Stage"),n.a.createElement("button",{className:"btnIn",style:W.btn,onClick:this.nextStep},"Send")));case 4:return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("h1",null,"Congratulation, your order is complete"),n.a.createElement("h1",null,"TOATL SUM TO PAY ",this.totalSum," \u20ac"),n.a.createElement("button",{className:"btnIn",style:W.btn,onClick:this.prevStep},"GO TO STAGE 1")));default:console.log("This is a multi-step form built with React.")}}}]),a}(n.a.Component),W={btn:{backgroundColor:"#fd4f7d",width:120}};var O=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(D,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.5a771455.chunk.js.map