(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],{18:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),o=n(10),i=n.n(o),a=(n(18),n(2)),u=n(3);function s(){return Array.from(Array(20),(function(){return new Array(10).fill([0,"clear"])}))}function l(e,t,n){for(var c=n.x,r=n.y,o=0;o<e.tetromino.length;o++)for(var i=0;i<e.tetromino[o].length;i++)if(0!==e.tetromino[o][i]&&(!t[o+e.pos.y+r]||!t[o+e.pos.y+r][i+e.pos.x+c]||"clear"!==t[o+e.pos.y+r][i+e.pos.x+c][1]))return!0}var f=n(4),d=n(8),b={0:{shape:[[0]],color:"white"},O:{shape:[["O","O"],["O","O"]],color:"blue"}};function j(e,t){var n=Object(c.useState)(s()),r=Object(a.a)(n,2),o=r[0],i=r[1],u=Object(c.useState)(0),l=Object(a.a)(u,2),f=l[0],d=l[1];return Object(c.useEffect)((function(){d(0);var n=function(n){var c=n.map((function(e){return e.map((function(e){return"clear"===e[1]?[0,"clear"]:e}))}));return e.tetromino.forEach((function(t,n){t.forEach((function(t,r){0!==t&&(c[n+e.pos.y][r+e.pos.x]=[t,"".concat(e.collided?"merged":"clear")])}))})),e.collided?(t(),function(e){return e.reduce((function(t,n){return-1===n.findIndex((function(e){return 0===e[0]}))?(d((function(e){return e+1})),t.unshift(new Array(e[0].length).fill([0,"clear"])),t):(t.push(n),t)}),[])}(c)):c};i((function(e){return n(e)}))}),[e]),[o,i,f]}var O,p=n(1),x=f.b.div(O||(O=Object(u.a)(["\n  width: 30px;\n  height: 30px;\n  background-color: ",";\n  border: 1px solid #ccc;\n"])),(function(e){return e.color}));function h(e){var t=e.type;return Object(p.jsx)(x,{type:t,color:b[t].color})}var m,g=r.a.memo(h),v=f.b.div(m||(m=Object(u.a)(["\n  display: grid;\n  grid-template-columns: repeat(",", 1fr);\n  grid-template-rows: repeat(",", calc(646 / ","));\n  border: 3px solid black;\n  background-color: white;\n  position: relative;\n\n  .game-over {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.75);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 30px;\n    color: red;\n    text-shadow: -2px 0 white, 0 2px white, 2px 0 white, 0 -2px white;\n  }\n"])),(function(e){return e.width}),(function(e){return e.height}),(function(e){return e.width}));var y,w=function(e){var t=e.gameOver,n=e.stage,c=e.setCoordinate;return Object(p.jsxs)(v,{width:n[0].length,height:n.length,onMouseMove:function(e){e.movementX&&e.movementX>-4&&e.movementX<4&&(!function(e){for(var t=(new Date).getTime();(new Date).getTime()<t+e;);}(55),c(e.movementX))},children:[t&&Object(p.jsx)("div",{className:"game-over",children:"Game Over"}),n.map((function(e){return e.map((function(e,t){return Object(p.jsx)(g,{type:e[0]},t)}))}))]})},k=f.b.div(y||(y=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  margin: 0 0 20px 0;\n  padding: 20px;\n  border-radius: 10px;\n  font-size: 18px;\n  color: ",";\n  background-color: black;\n"])),(function(e){return e.gameOver?"red":"white"}));var S,C=function(e){var t=e.gameOver,n=e.text;return Object(p.jsx)(k,{gameOver:t,children:n})},E=f.b.button(S||(S=Object(u.a)(["\n  background-color: black;\n  font-size: 26px;\n  color: white;\n  width: 250px;\n  padding: 20px;\n"])));var T,I,A=function(e){var t=e.callback,n=e.dropTime,c=e.gameOver;return Object(p.jsx)(E,{onClick:t,children:c||null===n?"Get Started":"Restart"})},F=Object(f.a)(T||(T=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),N=f.b.div(I||(I=Object(u.a)(["\n  ","\n  width: 100vw;\n  min-height: 100vh;\n\n  div.tetris {\n    ","\n    flex-direction: row;\n    column-gap: 20px;\n    margin: 0 auto;\n    text-align: center;\n\n    aside.right-section {\n      display: flex;\n      min-height: 646px;\n      flex-direction: column;\n      row-gap: 345px;\n    }\n  }\n"])),F,F);var R=function(){var e=Object(c.useState)(null),t=Object(a.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(!1),i=Object(a.a)(o,2),u=i[0],f=i[1],O=function(){var e=Object(c.useState)({pos:{x:0,y:0},tetromino:b[0].shape,collided:!1}),t=Object(a.a)(e,2),n=t[0],r=t[1];return[n,function(e){var t=e.x,n=e.y,c=e.collided;r((function(e){return Object(d.a)(Object(d.a)({},e),{},{pos:{x:e.pos.x+=t,y:e.pos.y+=n},collided:c})}))},Object(c.useCallback)((function(){r({pos:{x:4,y:0},tetromino:b.O.shape,collided:!1})}),[])]}(),x=Object(a.a)(O,3),h=x[0],m=x[1],g=x[2],v=j(h,g),y=Object(a.a)(v,3),k=y[0],S=y[1],E=function(e){var t=Object(c.useState)(0),n=Object(a.a)(t,2),r=n[0],o=n[1],i=Object(c.useState)(0),u=Object(a.a)(i,2),s=u[0],l=u[1],f=Object(c.useState)(0),d=Object(a.a)(f,2),b=d[0],j=d[1],O=[40,100,300,1200],p=Object(c.useCallback)((function(){e>0&&(o((function(t){return t+O[e-1]*(b+1)})),l((function(t){return t+e})))}),[b,O,e]);return Object(c.useEffect)((function(){p()}),[p,e,r]),[r,o,s,l,b,j]}(y[2]),T=Object(a.a)(E,6),I=T[0],F=T[1],R=T[2],X=T[3],z=T[4],D=T[5],B=Object(c.useState)(0),G=Object(a.a)(B,2),J=G[0],L=G[1],M=function(e){l(h,k,{x:e,y:0})||m({x:e,y:0})};return Object(c.useEffect)((function(){u||(J>0?M(1):J<0&&M(-1))}),[J]),function(e,t){var n=Object(c.useRef)();Object(c.useEffect)((function(){n.current=e}),[e]),Object(c.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){clearInterval(e)}}}),[t])}((function(){R>10*(z+1)&&(D((function(e){return e+1})),r(1e3/(z+1)+200)),l(h,k,{x:0,y:1})?(h.pos.y<1&&(f(!0),r(null)),m({x:0,y:0,collided:!0})):m({x:0,y:1,collided:!1})}),n),Object(p.jsx)(N,{children:Object(p.jsxs)("div",{className:"tetris",children:[Object(p.jsx)(w,{stage:k,setCoordinate:L,gameOver:u}),Object(p.jsxs)("aside",{className:"right-section",children:[Object(p.jsxs)("div",{className:"score-board",children:[Object(p.jsx)(C,{text:"Score: ".concat(I)}),Object(p.jsx)(C,{text:"Rows: ".concat(R)}),Object(p.jsx)(C,{text:"Round: ".concat(z)})]}),Object(p.jsx)(A,{callback:function(){S(s()),r(1e3),g(),f(!1),F(0),X(0),D(0)},gameOver:u,dropTime:n})]})]})})};var X=function(){return Object(p.jsx)(R,{})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),o(e),i(e)}))};i.a.render(Object(p.jsx)(X,{}),document.getElementById("root")),z()}},[[22,1,2]]]);
//# sourceMappingURL=main.4be6a558.chunk.js.map