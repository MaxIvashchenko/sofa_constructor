(this.webpackJsonpdnd=this.webpackJsonpdnd||[]).push([[0],{10:function(e,t,a){e.exports=a(21)},15:function(e,t,a){},16:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),i=a(5),c=a.n(i),r=(a(15),a(16),a(3)),s=a(6),l=a(7),d=a(1),p=a(9),u=a(8),h=a(2),m=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).onDrop=e.onDrop.bind(Object(d.a)(e)),e.shouldAcceptDrop=e.shouldAcceptDrop.bind(Object(d.a)(e)),e.renderPiece=e.renderPiece.bind(Object(d.a)(e)),e.sofaLength=e.sofaLength.bind(Object(d.a)(e)),e.handleMouseMove=e.handleMouseMove.bind(Object(d.a)(e)),e.newCapacity=5,e.withing=100*e.newCapacity,e.prevSofa=[],e.temporary=[],e.activeSectionSize=null,e.dragging=!1,e.state={board:[[{side:"black",data:"01",size:2,id:"black-0-0",model:"model-1"},{side:"black",data:"02",size:2,id:"black-0-1",model:"model-2"},{side:"black",data:"03",size:2,id:"black-0-2",model:"model-3"},{side:"black",data:"04",size:2,id:"black-0-3",model:"model-4"}],[{side:"black",data:"11",size:1,id:"black-1-0",model:"model-1"},{side:"black",data:"12",size:1,id:"black-1-1",model:"model-2"},{side:"black",data:"13",size:1,id:"black-1-2",model:"model-3"},{side:"black",data:"14",size:1,id:"black-1-3",model:"model-4"}],e.sofaLength(e.newCapacity)],x:0,colonka:null},e}return Object(l.a)(a,[{key:"sofaLength",value:function(e){for(var t=[],a=0;a<e;a++)t.push({data:a,size:1,side:"white",id:"white-2-".concat(a)});return t}},{key:"renderPiece",value:function(e,t,a,o){var i=this;return n.a.createElement(h.Draggable,null,n.a.createElement("div",{className:2===t&&i.dragging?1===i.activeSectionSize&&null!==o&&2===i.state.board[2][o].size?-1<=i.state.x&&i.state.x<100?o!==a?"piece ".concat(e.model):"piece ".concat(e.model," onSquareHalfRight"):o!==a?"piece ".concat(e.model):"piece ".concat(e.model," onSquareHalfLeft"):1===i.activeSectionSize?o!==a?"piece ".concat(e.model):"piece ".concat(e.model," onSquare"):2===i.activeSectionSize&&null!==o&&o<i.state.board[2].length-1&&1===i.state.board[2][o].size&&2===i.state.board[2][o+1].size?o===a?"piece ".concat(e.model," onSquare"):o+1===a?"piece ".concat(e.model," onSquareHalfRight"):"piece ".concat(e.model):null!==o&&2===i.activeSectionSize&&2===i.state.board[2][o].size&&i.state.x>100&&i.state.board[2][o]&&o!==i.state.board[2].length-1?i.state.board[2][o+1]&&2===i.state.board[2][o+1].size?o+1===a?"piece ".concat(e.model," onSquareHalfRight"):o===a?"piece ".concat(e.model," onSquareHalfLeft"):"piece ".concat(e.model):o+1===a?"piece ".concat(e.model," onSquare"):o===a?"piece ".concat(e.model," onSquareHalfLeft"):"piece ".concat(e.model):null!==o&&2===i.state.board[2][o].size?o!==a&&o!==a?"piece ".concat(e.model):"piece ".concat(e.model," onSquare"):2===i.activeSectionSize&&o===i.state.board[2].length-1&&2===i.state.board[2][o-1].size?o===a?"piece ".concat(e.model," onSquare"):o-1===a?"piece ".concat(e.model," onSquareHalfLeft"):"piece ".concat(e.model):2===i.activeSectionSize&&o===i.state.board[2].length-1?o!==a&&o!==a+1?"piece ".concat(e.model):"piece ".concat(e.model," onSquare"):o!==a&&o!==a-1?"piece ".concat(e.model):"piece ".concat(e.model," onSquare"):"piece ".concat(e.model)}))}},{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,this.state.board.map((function(t,a){return 2===a?n.a.createElement("div",{onMouseMove:e.handleMouseMove,className:"row3",style:{width:e.withing},key:t+"-"+a},n.a.createElement("div",{className:"underCube"},n.a.createElement("div",{className:"cube",style:{width:e.withing}},n.a.createElement("div",{className:"left"}),n.a.createElement("div",{className:"right"}),n.a.createElement("div",{className:"top",style:{width:e.withing}}),n.a.createElement("div",{className:e.dragging?"bottom bottom-hover":"bottom",style:{width:e.withing}}))),t.map((function(t,o){return n.a.createElement("div",{className:"squareRow3 ",style:{width:100*t.size},key:"".concat(a).concat(o)},n.a.createElement(h.Container,{dragClass:"nothing",dropClass:"dropping",style:{height:"100%"},behaviour:"drop-zone",onDrop:function(t){return e.onDrop(t,a,o)},getChildPayload:function(){return{colIndex:o,rowIndex:a,piece:t}},onDragEnd:function(){return e.onDragEnd(a,o)},onDragEnter:function(){return e.onDragEnter(a,o)},onDropReady:function(t){return e.onDropReady(t)},shouldAcceptDrop:function(t,n){return e.shouldAcceptDrop(n,a,o)}},e.renderPiece(t,a,o,e.state.colonka)))}))):1===a?n.a.createElement("div",{className:"row2",key:a},t.map((function(t,o){return n.a.createElement("div",{className:"squareRow2 ".concat((a+o)%2===0?"white":"black"),key:"".concat(a).concat(o)},n.a.createElement(h.Container,{dragClass:"dragging",style:{height:"100%"},behaviour:"move",onDrop:function(t){return e.onDrop(t,a,o)},shouldAcceptDrop:function(t,n){return e.shouldAcceptDrop(n,a,o)},getChildPayload:function(){return{colIndex:o,rowIndex:a,piece:t}}},e.renderPiece(t)))}))):n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"row",key:a},t.map((function(t,o){return n.a.createElement("div",{className:"square",key:"".concat(a).concat(o)},n.a.createElement(h.Container,{dragClass:"dragging",style:{height:"100%"},behaviour:"move",onDrop:function(t){return e.onDrop(t,a,o)},shouldAcceptDrop:function(t,n){return e.shouldAcceptDrop(n,a,o)},getChildPayload:function(){return{colIndex:o,rowIndex:a,piece:t}}},e.renderPiece(t)))}))))})))}},{key:"handleMouseMove",value:function(e){this.setState({x:e.nativeEvent.offsetX})}},{key:"onDragEnter",value:function(e,t){this.setState({colonka:t}),this.dragging=!0}},{key:"onDragEnd",value:function(e,t){this.dragging=!1,this.forceUpdate()}},{key:"shouldAcceptDrop",value:function(e,t,a){var o=e.colIndex,n=e.rowIndex,i=this.state.board[n][o],c=this.state.board[t][a];return i===c||i.side!==c.side&&("white"!==i.side||"black"!==c.side)}},{key:"onDropReady",value:function(e){this.prevSofa=Object.assign([],this.state.board[2]),this.activeSectionSize=e.payload.piece.size}},{key:"onDrop",value:function(e,t,a){var o=this,n=e.addedIndex,i=e.removedIndex,c=e.payload,s=this.state.board[2],l={data:0,size:1,side:"white"};if(null!==n||null!==i){var d=Object.assign({},c.piece);this.state.board[t][a]={},this.setState((function(e){return e.board[t][a]=d}))}if(this.temporary=Object.assign([],this.state.board[2]),null!==n&&null===i){if("white"===e.payload.piece.side){console.log("drop",s);var p=this.prevSofa.map((function(e,t){return t===o.state.colonka?(console.log("-----*start*-----"),console.log("this.prevSofa",o.prevSofa),console.log("i === this.state.colonka",t===o.state.colonka,"this.state.colonka =",o.state.colonka),console.log(c.piece),console.log("-----*end*-----"),c.piece):t===c.colIndex?(console.log("ono-----"),console.log("this.prevSofa",o.prevSofa),console.log("i === payload.colIndex --\x3e",t===c.colIndex,"payload.colIndex =",c.colIndex),console.log(o.prevSofa[o.state.colonka]),o.prevSofa[o.state.colonka]):e}));return console.log("arrNew",p),p.splice(c.colIndex,1,{}),console.log("arrNew",p),this.setState((function(e){return{board:e.board.map((function(e,t){return 2===t?p:e}))}}))}2===c.piece.size&&1===this.prevSofa[a].size&&a<this.prevSofa.length-1&&(s.splice(a+1,1),console.log("two")),2===c.piece.size&&2===this.prevSofa[a].size&&this.state.x>100&&(this.state.board[2][a+1]&&2===this.prevSofa[a+1].size?(console.log("klac"),s.splice(a,0,l),s.splice(a+2,1,l)):(console.log("ono"),s.splice(a,0,l),s.splice(a+2,1))),1===c.piece.size&&2===this.prevSofa[a].size&&(this.state.x<100?s.splice(a+1,0,l):(console.log("one"),s.splice(a,0,l))),this.newCapacity>3&&(2===c.piece.size&&1===this.prevSofa[a].size&&a===this.prevSofa.length-1&&(2===this.prevSofa[a-1].size?s.splice(a-1,1,l):s.splice(a-1,1)),2===c.piece.size&&1===this.prevSofa[a].size&&a<this.prevSofa.length-1&&2===this.prevSofa[a+1].size&&s.splice(a+1,0,l)),3===this.newCapacity&&(2===c.piece.size&&1===this.prevSofa[a].size&&a===this.prevSofa.length-1&&1===this.prevSofa[a-1].size&&s.splice(a-1,1),2===c.piece.size&&1===this.prevSofa[a].size&&a===this.prevSofa.length-1&&2===this.prevSofa[a-1].size&&s.splice(a-1,1,l),2===c.piece.size&&1===this.prevSofa[a].size&&0===a&&2===this.prevSofa[a+1].size&&s.splice(a+1,0,l)),this.setState((function(e){e.colonka=null;var t=o.state.board[2].map((function(e,t){return e.side="white",e}));return Object(r.a)(Object(r.a)({},e),{},{row:t})}))}}},{key:"componentDidUpdate",value:function(e,t){this.newCapacity=this.state.board[2].reduce((function(e,t){return e+t.size}),0)}}]),a}(o.Component);var f=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.4c941d20.chunk.js.map