(this.webpackJsonppixels=this.webpackJsonppixels||[]).push([[0],{26:function(e){e.exports=JSON.parse('{"pixel-bela":{"A1":"#fff7dc","A2":"#fffed7","A3":"#fff288","A4":"#fbf53a","A5":"#f2cd28","A6":"#fbba50","A7":"#fb8139","A8":"#e6c52a","A9":"#fcab73","A10":"#ff9648","A13":"#fbba50","A14":"#f96b2b","A25":"#f0cc68","B13":"#e2faab","B27":"#cbdbb8","B2":"#95de3b","B5":"#39b33d","B6":"#71e9c3","B14":"#d0ee39","B7":"#009b84","B8":"#13904d","B12":"#007152","B11":"#60781e","B21":"#006f5e","B23":"#344a15","B9":"#153322","B15":"#305033","C2":"#ccfff5","C3":"#a4f2ff","C4":"#68dbff","C5":"#23bae4","C6":"#6fbaf8","C10":"#26dce6","C11":"#01c3ba","C7":"#3d8bee","C8":"#1a70c8","C9":"#3856cc","D3":"#1a43a4","D4":"#1a3d78","D16":"#e6eeff","D8":"#e9e3ff","D9":"#cfc8fe","D11":"#c6d5ff","D6":"#a58eea","D18":"#ab78d0","D1":"#9dbbfb","D2":"#748dd3","D5":"#d054c9","D13":"#bb2e9b","D14":"#8835a7","D7":"#603399","D15":"#47297c","E1":"#fcd4cf","E11":"#feece7","E8":"#ffe1ed","E2":"#fbd5ef","E12":"#fdafde","E3":"#fb9fce","E9":"#ee80d9","E4":"#f06ea7","E13":"#a71383","F1":"#ffa39b","F3":"#e9545f","F4":"#ee2238","F5":"#db2325","F19":"#c8486f","F13":"#d0492d","F8":"#b60c32","F7":"#8a1b35","G1":"#fbdec6","G2":"#fdcfb7","G3":"#f2bca8","G4":"#d59a82","G12":"#ddb186","G10":"#b68026","G13":"#cc7b4d","G19":"#e99c42","G14":"#8a5f4c","G7":"#8e5636","G8":"#442919","H9":"#e6e3db","H10":"#ebeaf4","H14":"#c9d7e2","H11":"#c8c6c5","H3":"#989ba2","H4":"#666463","H5":"#454549","H6":"#27282f","Preto":"#000000","Branco":"#ffffff","M4":"#e6d4c2"}}')},30:function(e,t,a){e.exports=a(51)},35:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var l=a(0),r=a.n(l),c=a(10),n=a.n(c),s=(a(35),a(28));const o=e=>{const t=e.width,a=e.height;var l=document.createElement("canvas").getContext("2d");l.drawImage(e,0,0);const r=l.getImageData(0,0,t,a).data,c=[];for(var n=0;n<a;n++){c[n]=[];for(var s=0;s<t;s++){const e=4*(n*t+s);c[n][s]=0===r[e+3]?0:{hex:i(r[e],r[e+1],r[e+2]),r:r[e],g:r[e+1],b:r[e+2]}}}return c},i=(e,t,a)=>"#"+e.toString(16).padStart(2,"0")+t.toString(16).padStart(2,"0")+a.toString(16).padStart(2,"0"),m=e=>{let t,a,l,r=e.r/255,c=e.g/255,n=e.b/255;return r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92,c=c>.04045?Math.pow((c+.055)/1.055,2.4):c/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92,t=(.4124*r+.3576*c+.1805*n)/.95047,a=(.2126*r+.7152*c+.0722*n)/1,l=(.0193*r+.1192*c+.9505*n)/1.08883,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116,a=a>.008856?Math.pow(a,1/3):7.787*a+16/116,l=l>.008856?Math.pow(l,1/3):7.787*l+16/116,{L:116*a-16,A:500*(t-a),B:200*(a-l)}},d=e=>{e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(e,t,a,l)=>t+t+a+a+l+l);var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null},f=e=>{const t=e.substring(4,e.length-1).replace(/ /g,"").split(",");return{r:t[0],g:t[1],b:t[2]}};var u=r.a.memo(e=>{let{setImages:t}=e;const a=Object(l.useCallback)(e=>{e.forEach(e=>{const a=new FileReader;a.onabort=()=>console.log("file reading was aborted"),a.onerror=()=>console.log("file reading has failed"),a.onload=async()=>{const l=a.result,r=await(async e=>await(e=>new Promise((t,a)=>{let l=new Image;l.onload=()=>t(l),l.onerror=a,l.src=e}))(e))(l),c={name:e.name,width:r.width,height:r.height,image:r,url:l,pixels:o(r)};t(t=>({...t,[e.name]:c}))},a.readAsDataURL(e)})},[t]),{getRootProps:c,getInputProps:n,isDragActive:i}=Object(s.a)({onDrop:a});return r.a.createElement("div",Object.assign({},c(),{className:"flex items-center justify-center p-6 w-1/2 mx-2 cursor-pointer text-center hover:bg-gray-800 rounded-lg border-2 border-dashed border-gray-500"}),r.a.createElement("input",Object.assign({},n(),{accept:"image/*"})),i?r.a.createElement("p",null,"Drop the files here ..."):r.a.createElement("p",null,"Drag 'n' drop some files here, or click to select files"))}),p=a(21),b=a.n(p);var g=r.a.memo(e=>{let{images:t,setPalettes:a}=e;const c=Object(l.useCallback)(()=>{const e=prompt("Set palette title","New Palette"),l=prompt("Set palette limit",32);if(l&&e){const r=new b.a({colors:l,method:1});Object.keys(t).forEach(e=>{r.sample(t[e].image)});const c={};r.palette(!0).forEach(e=>{const t=i(e[0],e[1],e[2]);c[t]=t}),a(t=>({...t,[e]:c}))}},[t,a]);return r.a.createElement("button",{onClick:c,className:"uppercase flex items-center justify-center cursor-pointer mx-2 p-6 w-1/2 text-center rounded-lg border-2 hover:bg-gray-800 border-dashed border-gray-500"},"Generate palette from images")});var h=r.a.memo(e=>{let{palette:t,useKey:a}=e;return r.a.createElement("div",{className:"flex flex-wrap items-center justify-center"},Object.keys(t).map(e=>r.a.createElement("div",{key:e,className:"inline-block",style:{backgroundColor:a?e:t[e],width:"".concat(9.826,"px"),height:"".concat(9.826,"px")}})))});var x=r.a.memo(e=>{let{palettes:t,selectedPalette:a,setSelectedPalette:l}=e;return r.a.createElement("div",{className:"flex m-3 items-stretch"},Object.keys(t).map(e=>r.a.createElement("div",{title:e,key:e,onClick:()=>l(a===e?null:e),className:"flex items-center m-2 cursor-pointer rounded border-2 w p-3 border-dashed"+(a===e?" border-gray-400":" border-transparent")},r.a.createElement(h,{palette:t[e]}))))}),E=a(22),y=a.n(E),v=a(23),w=a.n(v);const N={EUCLIDEAN:"Euclidean",DELTA_E76:"DeltaE76",DELTA_E94:"DeltaE94",DELTA_E00:"DeltaE00"};let j,k,C={};const D=e=>Object.keys(e).map(t=>{const a=e[t],l=a.includes("#")?m(d(a)):m(f(a));return{id:t,value:a,lab:l}});var A={from:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:N.EUCLIDEAN;j=t,j===N.EUCLIDEAN?k=y.a.from(e):C=D(e)},match:e=>{if(j===N.EUCLIDEAN)return k(e);let t,a=1/0;C.forEach((l,r)=>{const c=e.includes("#")?m(d(e)):m(f(e)),n=w.a["get"+j](c,l.lab);n<a&&(t=r,a=n)});const l=C[t];return{name:l.id,value:l.value,distance:a}}};var O=r.a.memo(e=>{let{selectedAlgorithm:t,setSelectedAlgorithm:a}=e;return r.a.createElement("div",{className:"flex m-1 items-center justify-center text-base text-gray-400"},Object.keys(N).map(e=>{const l=N[e];return r.a.createElement("div",{key:l,onClick:()=>a(l),className:"flex items-center m-2 cursor-pointer rounded border-2 py-1 px-2 border-dashed"+(t===l?" border-gray-400":" border-transparent")},l)}))});var S=r.a.memo(e=>{let{palette:t}=e;return r.a.createElement("div",{className:"p-3 flex flex-wrap items-center justify-center"},Object.keys(t).map(e=>r.a.createElement("div",{key:e,title:t[e].id,className:"relative inline-flex items-center justify-center w-10 h-10",style:{backgroundColor:e}},r.a.createElement("span",{className:"absolute px-1 bottom-0 right-0 bg-white text-gray-700 text-xs opacity-25"},t[e].count))))});var I=r.a.memo(e=>{let{colorsGlobal:t,pixels:a,cost:l,sprites:c}=e;return r.a.createElement("div",{className:"p-3"},r.a.createElement("div",{className:"text-center text-sm uppercase"},r.a.createElement("span",{className:"mr-2"},"Sprites: ",r.a.createElement("b",null,c)),r.a.createElement("span",{className:"mr-2"},"Pixels: ",r.a.createElement("b",null,a)),r.a.createElement("span",null,"Cost: ",r.a.createElement("b",null,"$",l))),r.a.createElement(S,{palette:t}))});var P=r.a.memo(e=>{let{pixels:t,map:a,palette:l,width:c,height:n,size:s,titled:o}=e;return r.a.createElement("div",{style:{width:c*s+"px",height:n*s+"px"}},t.map((e,t)=>r.a.createElement("div",{className:"flex",key:t,style:{height:s+"px"}},e.map((e,t)=>{if(e){const c=l?l[a[e.hex]]:e.hex;return r.a.createElement("div",{key:t,className:"inline-block",title:o?a[e.hex]:null,style:{backgroundColor:c,width:s+"px",height:s+"px"}})}return r.a.createElement("div",{key:t,className:"inline-block bg-transparent",style:{width:s+"px",height:s+"px"}})}))))}),B=a(14);var G=r.a.memo(e=>{let{images:t,palette:a,selectedPalette:l,colorsImage:c,cost:n,currency:s,setSelectedImage:o}=e;const i=Object.keys(t),m=e=>{let{key:s,index:m,style:d}=e;const f=i[m],u=t[f];return r.a.createElement("div",{key:s,style:d,onClick:()=>o(f),className:"flex w-1/2 p-2 cursor-pointer hover:bg-gray-800"},r.a.createElement("div",{className:"w-20 flex items-center justify-center"},r.a.createElement("img",{src:u.url,alt:f,style:{imageRendering:"pixelated",width:u.width+"px",height:u.height+"px"}})),r.a.createElement("div",{className:"w-20 flex items-center justify-center"},r.a.createElement(P,{pixels:u.pixels,palette:a,map:l?c[f].map:null,width:u.width,height:u.height,size:1})),l&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"w-20 flex items-center justify-end text-sm"},c[f].total),r.a.createElement("div",{className:"w-20 flex items-center justify-end text-sm"},"R$",Math.round(c[f].total*n+9),",00"),r.a.createElement("div",{className:"flex-1 flex flex-wrap items-center justify-center px-2"},r.a.createElement(h,{palette:c[f].count,useKey:!0}))))};return r.a.createElement("div",{className:"p-3 flex w-3/4 m-auto flex-col items-center"},r.a.createElement("div",{className:"flex w-full p-2 text-xs uppercase text-gray-500 bg-gray-800 rounded-t opacity-50"},r.a.createElement("div",{className:"w-20 flex items-center justify-center"},"Original"),r.a.createElement("div",{className:"w-20 flex items-center justify-center"},"Resultado"),r.a.createElement("div",{className:"w-20 flex items-center justify-end"},"Pixels"),r.a.createElement("div",{className:"w-20 flex items-center justify-end"},"Pre\xe7o"),r.a.createElement("div",{className:"flex-1 flex flex-wrap items-center justify-center"},"Paleta")),r.a.createElement("div",{className:"w-full"},r.a.createElement(B.a,null,e=>{let{width:t}=e;return r.a.createElement(B.b,{height:300,width:t,rowCount:i.length,rowHeight:80,rowRenderer:m})})))});var F=r.a.memo(e=>{let{id:t,image:a,colors:c,palette:n,selectedPalette:s,setSelectedImage:o,moveSelectedImage:i,cost:m}=e;return Object(l.useEffect)(()=>{const e=e=>{27===e.keyCode&&o(null),37===e.keyCode&&i(-1),39===e.keyCode&&i(1)};return document.addEventListener("keydown",e,!1),()=>{document.removeEventListener("keydown",e,!1)}}),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{onClick:()=>o(null),className:"bg-gray-900 opacity-50 w-full h-full fixed z-20 top-0 left-0"}),r.a.createElement("div",{className:"w-full h-full px-24 py-10 pointer-events-none fixed z-30 top-0 left-0 flex items-center justify-center"},r.a.createElement("button",{onClick:()=>i(-1),className:"mr-2 w-10 h-10 rounded hover:bg-gray-700 flex items-center justify-center text-white font-bold text-xl cursor-pointer pointer-events-auto"},"\u25c4"),r.a.createElement("div",{className:"flex flex-col max-h-full max-w-full p-3 overflow-auto pointer-events-auto bg-gray-700 rounded shadow-lg"},r.a.createElement("div",{className:"flex flex-wrap items-center justify-center p-3"},r.a.createElement("img",{src:a.url,alt:t,style:{imageRendering:"pixelated",width:9.826*a.width+"px",height:9.826*a.height+"px"}}),r.a.createElement(P,{pixels:a.pixels,map:s?c.map:null,palette:n,width:a.width,height:a.height,size:9.826,titled:!!s})),s&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"p-3"},r.a.createElement("div",{className:"text-center text-sm uppercase"},r.a.createElement("span",{className:"mr-2"},"Pixels: ",r.a.createElement("b",null,c.total)),r.a.createElement("span",null,"Cost: ",r.a.createElement("b",null,"$",(c.total*m).toFixed(2))))),r.a.createElement("div",{className:"p-3"},r.a.createElement(S,{palette:c.count})))),r.a.createElement("button",{onClick:()=>i(1),className:"ml-2 w-10 h-10 rounded hover:bg-gray-700 flex items-center justify-center text-white font-bold text-xl cursor-pointer pointer-events-auto"},"\u25ba")))});var L=r.a.memo(e=>{let{cost:t,setCost:a}=e;return r.a.createElement("button",{onClick:()=>{const e=prompt("Set cost per pixel",t);e&&!isNaN(e)&&(a(.04),localStorage.setItem("cost",e))},className:"uppercase flex items-center justify-center cursor-pointer mx-2 p-6 w-1/2 text-center rounded-lg border-2 hover:bg-gray-800 border-dashed border-gray-500 w-16"},"Custo por pixel: R$",t)}),H=a(26),M=a(29),R=a(27),$=a.n(R);var z=Object(M.a)($.a,(function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.reduce((e,t)=>e+"-"+JSON.stringify(t),"")}))(e=>e.img,e=>e.closerColor,e=>e.palette,e=>e.selectedAlgorithm,(e,t,a)=>{let l=0;const r={total:0,count:{},map:{}},c={};return e.pixels.flat().forEach(e=>{if(!e)return;let n,s;r.map[e.hex]?s=a[r.map[e.hex]]:(n=t.match(e.hex),s=n.value,r.map[e.hex]=n.name),r.count[s]?r.count[s].count++:r.count[s]={id:n.name,count:1},c[s]?c[s].count++:c[s]={id:n.name,count:1},r.total++,l++}),{colorImage:r,colorGlobal:c,count:l}});var U=()=>{const[e,t]=Object(l.useState)(localStorage.getItem("cost")||.04),[a,c]=Object(l.useState)({}),[n,s]=Object(l.useState)(H),[o,i]=Object(l.useState)(null),[m,d]=Object(l.useState)(null),[f,p]=Object(l.useState)(N.DELTA_E00),b=n[o],{colorsImage:h,colorsGlobal:E,globalCount:y}=Object(l.useMemo)(()=>{const e={},t={};let l=0;return b&&(A.from(b,f),Object.keys(a).forEach(r=>{const c=a[r],{colorImage:n,colorGlobal:s,count:o}=z({img:c,closerColor:A,palette:b,selectedAlgorithm:f});e[r]=n,l+=o,Object.keys(s).forEach(e=>{t[e]?t[e].count+=s[e].count:t[e]=s[e]})})),{colorsImage:e,colorsGlobal:t,globalCount:l}},[a,b,f]),v=Object.keys(a).length;return r.a.createElement("div",{className:"w-screen h-screen font-sans text-white p-3"},r.a.createElement("div",{className:"flex p-3 text-gray-500 uppercase text-base"},r.a.createElement(u,{setImages:c}),r.a.createElement(g,{images:a,setPalettes:s}),r.a.createElement(L,{cost:e,setCost:t})),r.a.createElement(x,{palettes:n,selectedPalette:o,setSelectedPalette:i}),r.a.createElement(O,{selectedAlgorithm:f,setSelectedAlgorithm:p}),o&&v>0&&r.a.createElement(I,{pixels:y,sprites:v,cost:(y*e).toFixed(2),colorsGlobal:E}),Object.keys(a).length>0&&r.a.createElement(G,{palette:b,images:a,selectedPalette:o,colorsImage:h,cost:e,setSelectedImage:d}),m&&r.a.createElement(F,{id:m,image:a[m],colors:h[m],palette:b,selectedPalette:o,setSelectedImage:d,cost:e,moveSelectedImage:e=>{const t=Object.keys(a),l=t.indexOf(m),r=l+e<0?t.length-1:l+e>t.length-1?0:l+e;d(t[r])}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.d57746b8.chunk.js.map