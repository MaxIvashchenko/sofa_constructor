(this.webpackJsonpdnd=this.webpackJsonpdnd||[]).push([[0],{12:function(e,t,i){e.exports=i(25)},17:function(e,t,i){},18:function(e,t,i){},23:function(e,t,i){},24:function(e,t,i){},25:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),o=i(10),c=i.n(o),s=(i(17),i(18),i(11)),l=i(2),r=i(3),d=i(5),h=i(4),p=i(6),m=(a.Component,i(8)),u=i(1);i(23);function g(e){var t=e.onclick,i=e.showDoubleModule;return n.a.createElement("div",{className:"chooseModule"},n.a.createElement("div",{onClick:t,className:i&&"moduleBtnAtcive"},"Double modules"),n.a.createElement("div",{onClick:t,className:!i&&"moduleBtnAtcive"},"Simple modules"))}var f=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var a;return Object(l.a)(this,i),(a=t.call(this,e)).onDrop=a.onDrop.bind(Object(u.a)(a)),a.shouldAcceptDrop=a.shouldAcceptDrop.bind(Object(u.a)(a)),a.renderPiece=a.renderPiece.bind(Object(u.a)(a)),a.sofaLength=a.sofaLength.bind(Object(u.a)(a)),a.handleMouseMove=a.handleMouseMove.bind(Object(u.a)(a)),a.handler=a.handler.bind(Object(u.a)(a)),a.onDragStart=a.onDragStart.bind(Object(u.a)(a)),a.changeModule=a.changeModule.bind(Object(u.a)(a)),a.newCapacity=a.props.capacity,a.pieceWidth=a.props.pieceWidth,a.pieceHeight=a.props.sofaHeight,a.withing=a.props.sofaWidth,a.pieceDeep=a.props.sofaDeep,a.totalPrice=null,a.prevSofa=[],a.activeSectionSize=null,a.dragging=!1,a.dragOverSofa=!1,a.state={board:[[{side:"black",size:2,id:"black-0-0",model:"model-1",empty:!1,price:200},{side:"black",size:2,id:"black-0-1",model:"model-2",empty:!1,price:210},{side:"black",size:2,id:"black-0-2",model:"model-3",empty:!1,price:220},{side:"black",size:2,id:"black-0-3",model:"model-4",empty:!1,price:230},{side:"black",size:2,id:"black-0-0",model:"model-1",empty:!1,price:200},{side:"black",size:2,id:"black-0-1",model:"model-2",empty:!1,price:210},{side:"black",size:2,id:"black-0-2",model:"model-3",empty:!1,price:220},{side:"black",size:2,id:"black-0-3",model:"model-4",empty:!1,price:230}],[{side:"black",size:1,id:"black-1-0",model:"model-1",empty:!1,price:100},{side:"black",size:1,id:"black-1-1",model:"model-2",empty:!1,price:110},{side:"black",size:1,id:"black-1-2",model:"model-3",empty:!1,price:120},{side:"black",size:1,id:"black-1-3",model:"model-4",empty:!1,price:130},{side:"black",size:1,id:"black-1-3",model:"model-4",empty:!1,price:130},{side:"black",size:1,id:"black-1-3",model:"model-4",empty:!1,price:130},{side:"black",size:1,id:"black-1-3",model:"model-4",empty:!1,price:130},{side:"black",size:1,id:"black-1-3",model:"model-4",empty:!1,price:130},{side:"black",size:1,id:"black-1-3",model:"model-4",empty:!1,price:130},{side:"black",size:1,id:"black-1-3",model:"model-4",empty:!1,price:130},{side:"black",size:1,id:"black-1-3",model:"model-4",empty:!1,price:130},{side:"black",size:1,id:"black-1-3",model:"model-4",empty:!1,price:130},{side:"black",size:1,id:"black-1-3",model:"model-4",empty:!1,price:130}],a.sofaLength(a.newCapacity)],x:0,colonka:null,showDoubleModules:!0},a}return Object(r.a)(i,[{key:"sofaLength",value:function(e){for(var t=[],i=0;i<e;i++)t.push({side:"white",size:1,id:"white-2-".concat(i),model:"empty",empty:!0,price:0});return t}},{key:"renderPiece",value:function(e,t,i,a){var o=this;return n.a.createElement(p.Draggable,null,n.a.createElement("div",{className:2===t&&o.dragging?1===o.activeSectionSize&&null!==a&&2===o.state.board[2][a].size?-1<=o.state.x&&o.state.x<o.pieceWidth?a!==i?"piece ".concat(e.model):"piece ".concat(e.model," onSquareHalfRight"):a!==i?"piece ".concat(e.model):"piece ".concat(e.model," onSquareHalfLeft"):1===o.activeSectionSize?a!==i?"piece ".concat(e.model):"piece ".concat(e.model," onSquare"):2===o.activeSectionSize&&null!==a&&a<o.state.board[2].length-1&&1===o.state.board[2][a].size&&2===o.state.board[2][a+1].size?a===i?"piece ".concat(e.model," onSquare"):a+1===i?"piece ".concat(e.model," onSquareHalfRight"):"piece ".concat(e.model):null!==a&&2===o.activeSectionSize&&2===o.state.board[2][a].size&&o.state.x>100&&o.state.board[2][a]&&a!==o.state.board[2].length-1?o.state.board[2][a+1]&&2===o.state.board[2][a+1].size?a+1===i?"piece ".concat(e.model," onSquareHalfRight"):a===i?"piece ".concat(e.model," onSquareHalfLeft"):"piece ".concat(e.model):a+1===i?"piece ".concat(e.model," onSquare"):a===i?"piece ".concat(e.model," onSquareHalfLeft"):"piece ".concat(e.model):null!==a&&2===o.state.board[2][a].size?a!==i&&a!==i?"piece ".concat(e.model):"piece ".concat(e.model," onSquare"):2===o.activeSectionSize&&a===o.state.board[2].length-1&&2===o.state.board[2][a-1].size?a===i?"piece ".concat(e.model," onSquare"):a-1===i?"piece ".concat(e.model," onSquareHalfLeft"):"piece ".concat(e.model):2===o.activeSectionSize&&a===o.state.board[2].length-1?a!==i&&a!==i+1?"piece ".concat(e.model):"piece ".concat(e.model," onSquare"):a!==i&&a!==i-1?"piece ".concat(e.model):"piece ".concat(e.model," onSquare"):"piece ".concat(e.model),style:{width:this.pieceWidth*e.size,height:this.pieceHeight}}))}},{key:"changeModule",value:function(){this.setState((function(e){return{showDoubleModules:!e.showDoubleModules}}))}},{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement(g,{onclick:this.changeModule,showDoubleModule:this.state.showDoubleModules}),this.state.board.map((function(t,i){return 2===i?n.a.createElement("div",{onMouseLeave:e.handler,onMouseMove:e.handleMouseMove,className:"row3",style:{width:e.withing},key:t+"-"+i},n.a.createElement("div",{className:"gridWrapper",style:{width:e.withing,height:e.pieceHeight,perspective:400,borderBottom:"14px solid rgb(110, 110, 136)"}},n.a.createElement("div",{className:"grid",style:{width:e.withing}},t.map((function(t,i){return n.a.createElement("div",{style:{width:e.pieceWidth*t.size,height:e.pieceHeight}},n.a.createElement("div",{className:"dashUnderline",style:{width:e.pieceWidth,height:e.pieceHeight,top:e.pieceHeight/2}}),n.a.createElement("div",{className:!t.empty&&"solidUnderline",style:{width:e.pieceWidth*t.size,height:e.pieceHeight,top:e.pieceHeight/2}}))})))),n.a.createElement("div",{className:"underCube"},n.a.createElement("div",{className:"cube",style:{width:e.withing}},n.a.createElement("div",{className:"back",style:{height:e.pieceHeight,width:e.withing}}),n.a.createElement("div",{className:"left",style:{height:e.pieceHeight,width:e.pieceWidth}}),n.a.createElement("div",{className:"right",style:{height:e.pieceHeight,width:e.pieceWidth}}),n.a.createElement("div",{className:"top",style:{width:e.withing,height:e.pieceWidth}}),n.a.createElement("div",{className:e.dragging?"bottom bottom-hover":"bottom",style:{width:e.withing,top:e.pieceHeight,height:e.pieceWidth}}))),n.a.createElement("div",{className:"gridWrapper",style:{width:e.withing,height:e.pieceHeight}},n.a.createElement("div",{className:"grid",style:{width:e.withing}},t.map((function(t,i){return t.empty?n.a.createElement("div",{style:{width:e.pieceWidth*t.size,height:e.pieceHeight}},n.a.createElement("div",{className:!t.empty&&"sectionFront",style:{width:e.pieceWidth*t.size,height:e.pieceHeight}})):n.a.createElement("div",{style:{width:e.pieceWidth*t.size,height:e.pieceHeight}},n.a.createElement("div",{className:!t.empty&&"sectionFront",style:{width:e.pieceWidth*t.size,height:e.pieceHeight}}),n.a.createElement("div",{className:!t.empty&&"sectionLeft",style:{width:e.pieceWidth,height:e.pieceHeight}}),n.a.createElement("div",{className:!t.empty&&"sectionRight",style:{width:e.pieceWidth,height:e.pieceHeight}}))})))),t.map((function(t,a){return n.a.createElement("div",{style:{width:e.pieceWidth*t.size},key:"".concat(i).concat(a)},n.a.createElement(p.Container,{dragClass:"nothing",style:{height:"100%"},behaviour:"drop-zone",onDrop:function(t){return e.onDrop(t,i,a)},getChildPayload:function(){return{colIndex:a,rowIndex:i,piece:t}},onDragStart:function(t){return e.onDragStart(t,i,a)},onDragEnd:function(){return e.onDragEnd(i,a)},onDragEnter:function(t){return e.onDragEnter(t,i,a)},onDropReady:function(t){return e.onDropReady(t)},shouldAcceptDrop:function(t,n){return e.shouldAcceptDrop(n,i,a)}},e.renderPiece(t,i,a,e.state.colonka)))}))):1===i?n.a.createElement(n.a.Fragment,null,!e.state.showDoubleModules&&n.a.createElement("div",{className:"row2",key:i},t.map((function(t,a){return n.a.createElement("div",{className:"squareRow2 ",key:"".concat(i).concat(a),style:{width:e.pieceWidth*t.size,height:e.pieceHeight}},n.a.createElement(p.Container,{dragClass:"dragging",style:{height:"100%"},behaviour:"move",onDrop:function(t){return e.onDrop(t,i,a)},shouldAcceptDrop:function(t,n){return e.shouldAcceptDrop(n,i,a)},getChildPayload:function(){return{colIndex:a,rowIndex:i,piece:t}}},e.renderPiece(t)))})))):n.a.createElement(n.a.Fragment,null,e.state.showDoubleModules&&n.a.createElement("div",{className:"row",key:i},t.map((function(t,a){return n.a.createElement("div",{className:"square",style:{width:e.pieceWidth*t.size,height:e.pieceHeight},key:"".concat(i).concat(a)},n.a.createElement(p.Container,{dragClass:"dragging",style:{height:"100%"},behaviour:"move",onDrop:function(t){return e.onDrop(t,i,a)},shouldAcceptDrop:function(t,n){return e.shouldAcceptDrop(n,i,a)},getChildPayload:function(){return{colIndex:a,rowIndex:i,piece:t}}},e.renderPiece(t)))}))))})),n.a.createElement("div",{className:"infoTab"},n.a.createElement("div",null,"Width: ",this.pieceWidth*this.newCapacity," \u0441\u043c"),n.a.createElement("div",null,"Height: ",this.pieceHeight," \u0441\u043c"),n.a.createElement("div",null,"Deep: ",this.pieceDeep," \u0441\u043c"),n.a.createElement("div",null,"Number of doors: ",this.newCapacity),n.a.createElement("div",null,"Total: ",this.state.board[2].reduce((function(e,t){return e+t.price}),0)," \u20ac")))}},{key:"handleMouseMove",value:function(e){this.setState({x:e.nativeEvent.offsetX})}},{key:"handler",value:function(e){var t={side:"white",size:1,model:"empty",empty:!0,price:0};this.dragOverSofa&&(2===this.activeSectionSize?this.state.board[2].splice(this.state.colonka,1,t,t):this.state.board[2].splice(this.state.colonka,1,t),this.dragOverSofa=!1)}},{key:"onDragStart",value:function(e,t,i){2===e.payload.rowIndex&&(this.dragOverSofa=!0)}},{key:"onDragEnter",value:function(e,t,i){this.setState({colonka:i}),this.dragging=!0}},{key:"onDragEnd",value:function(e,t){this.dragging=!1,this.dragOverSofa=!1,this.forceUpdate()}},{key:"shouldAcceptDrop",value:function(e,t,i){var a=e.colIndex,n=e.rowIndex,o=this.state.board[n][a],c=this.state.board[t][i];return o===c||o.side!==c.side&&("white"!==o.side||"black"!==c.side)}},{key:"onDropReady",value:function(e){this.prevSofa=Object.assign([],this.state.board[2]),this.activeSectionSize=e.payload.piece.size}},{key:"onDrop",value:function(e,t,i){var a=this,n=e.addedIndex,o=e.removedIndex,c=e.payload,s=this.state.board[2],l={side:"white",size:1,model:"empty",empty:!0,price:0};if("white"===e.payload.piece.side)return null;if(null!==n||null!==o){var r=Object.assign({},c.piece);this.state.board[t][i]={},this.setState((function(e){return e.board[t][i]=r}))}null!==n&&null===o&&(2===c.piece.size&&1===this.prevSofa[i].size&&i<this.prevSofa.length-1&&"white"!==e.payload.piece.side&&(s.splice(i+1,1),console.log("two")),2===c.piece.size&&2===this.prevSofa[i].size&&this.state.x>this.pieceWidth&&(this.state.board[2][i+1]&&2===this.prevSofa[i+1].size?(console.log("klac"),s.splice(i,0,l),s.splice(i+2,1,l)):i===this.prevSofa.length-1||(console.log("ono"),s.splice(i,0,l),s.splice(i+2,1))),1===c.piece.size&&2===this.prevSofa[i].size&&(this.state.x<this.pieceWidth?(console.log("heres"),s.splice(i+1,0,l)):(console.log("one"),s.splice(i,0,l))),this.newCapacity>3&&(2===c.piece.size&&1===this.prevSofa[i].size&&i===this.prevSofa.length-1&&(2===this.prevSofa[i-1].size?s.splice(i-1,1,l):s.splice(i-1,1)),2===c.piece.size&&1===this.prevSofa[i].size&&i<this.prevSofa.length-1&&2===this.prevSofa[i+1].size&&s.splice(i+1,0,l)),3===this.newCapacity&&(2===c.piece.size&&1===this.prevSofa[i].size&&i===this.prevSofa.length-1&&1===this.prevSofa[i-1].size&&s.splice(i-1,1),2===c.piece.size&&1===this.prevSofa[i].size&&i===this.prevSofa.length-1&&2===this.prevSofa[i-1].size&&s.splice(i-1,1,l),2===c.piece.size&&1===this.prevSofa[i].size&&0===i&&2===this.prevSofa[i+1].size&&s.splice(i+1,0,l)),1===this.state.board[2].reduce((function(e,t){return e+t.empty}),0)&&this.setState((function(e){return{showDoubleModules:!1}})),this.setState((function(e){e.colonka=null;var t=a.state.board[2].map((function(e,t){return e.side="white",e}));return Object(m.a)(Object(m.a)({},e),{},{row:t})})))}},{key:"componentWillUpdate",value:function(){this.newCapacity=this.state.board[2].reduce((function(e,t){return e+t.size}),0)}},{key:"componentDidUpdate",value:function(){this.newCapacity=this.state.board[2].reduce((function(e,t){return e+t.size}),0)}}]),i}(a.Component),v=(a.Component,i(7));i(24);function b(e){var t=e.onsubmit,i=e.onchange;return n.a.createElement(n.a.Fragment,null,n.a.createElement("form",{className:"form",onSubmit:t},n.a.createElement("label",null,"Height: ",n.a.createElement("input",{type:"number",min:"100",max:"270",name:"sofaHeight",placeholder:"100-270",onChange:i,required:!0})," cm. "),n.a.createElement("label",null,"Width: ",n.a.createElement("input",{type:"number",min:"50",max:"550",name:"sofaWidth",placeholder:"50-550",onChange:i,required:!0})," cm. "),n.a.createElement("label",null,"Deep: ",n.a.createElement("input",{type:"number",min:"25",max:"75",name:"sofaDeep",placeholder:"25-75",onChange:i,required:!0})," cm. "),n.a.createElement("input",{type:"submit",value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})))}var y=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var a;return Object(l.a)(this,i),(a=t.call(this,e)).handleInputChange=a.handleInputChange.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a.capacity=8,a.pieceWidth=50,a.state={sofaHeight:300,sofaWidth:400,sofaDeep:50,showStageTwo:!1},a}return Object(r.a)(i,[{key:"componentDidUpdate",value:function(){var e=this.state.sofaWidth/50;this.capacity=e>100?Math.round(e):Math.floor(e),this.pieceWidth=this.state.sofaWidth/this.capacity}},{key:"makeSections",value:function(){for(var e=this,t=[],i=0;i<this.capacity;i++)t.push(i);return n.a.createElement("div",{className:"grid",style:{width:this.state.sofaWidth,height:this.state.sofaHeight}},t.map((function(t){return n.a.createElement("div",{style:{width:e.pieceWidth,height:e.state.sofaHeight}},n.a.createElement("div",{className:"dashUnderline",style:{width:e.pieceWidth,height:e.state.sofaHeight,top:e.state.sofaHeight/2}}))})))}},{key:"handleInputChange",value:function(e){var t=+e.target.value,i=e.target.name;setTimeout(function(){this.setState(Object(v.a)({},i,t))}.bind(this),700)}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({showStageTwo:!0})}},{key:"showStageOne",value:function(){return console.log(this.pieceWidth),n.a.createElement(n.a.Fragment,null,n.a.createElement(b,{onsubmit:this.handleSubmit,onchange:this.handleInputChange}),n.a.createElement("div",{style:{padding:50,overflow:"hidden"}},n.a.createElement("div",{style:{margin:"auto",position:"relative",width:this.state.sofaWidth,height:this.state.sofaHeight,perspective:200}},n.a.createElement("div",{className:"left",style:{height:this.state.sofaHeight,width:this.state.sofaDeep}}),n.a.createElement("div",{className:"right",style:{height:this.state.sofaHeight,width:this.state.sofaDeep}}),n.a.createElement("div",{className:"top",style:{width:this.state.sofaWidth,height:this.state.sofaDeep}}),n.a.createElement("div",{className:"bottom",style:{width:this.state.sofaWidth,top:this.state.sofaHeight,height:this.state.sofaDeep}}),this.makeSections())))}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,!this.state.showStageTwo&&this.showStageOne(),this.state.showStageTwo&&n.a.createElement(f,{capacity:this.capacity,pieceWidth:this.pieceWidth,sofaHeight:this.state.sofaHeight,sofaWidth:this.state.sofaWidth,sofaDeep:this.state.sofaDeep}))}}]),i}(n.a.Component);var w=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.077f12ad.chunk.js.map