(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[91],{5540:function(e,t,r){Promise.resolve().then(r.bind(r,5858))},5858:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return w}});var n=r(7437),s=()=>(0,n.jsx)("div",{className:"lg:backdrop-blur-sm lg:py-2",children:(0,n.jsx)("p",{className:"text-2xl font-semibold text-center",children:"Admin Kampung Holtekamp"})}),a=r(2265),i=r(2510),o=r(1396),l=r.n(o),c=r(4033),u=r(6691),d=r.n(u),m=r(1490);let f=e=>{let{subMenus:t,name:r,icon:s,slug:a,index:i,pathname:o,openMenus:c}=e,u=c.includes(a);return(0,n.jsx)("div",{children:(0,n.jsxs)("details",{className:"group [&_summary::-webkit-details-marker]:hidden",open:u,children:[(0,n.jsxs)("summary",{className:"flex items-center justify-between px-3 py-2 transition-colors duration-300 transform rounded-lg hover:bg-primary hover:text-gray-200 }",children:[(0,n.jsxs)("div",{className:"flex items-center cursor-pointer",children:[(0,n.jsx)("span",{children:s}),(0,n.jsx)("span",{className:"mx-2 text-sm font-medium",children:r})]}),(0,n.jsx)("span",{className:"shrink-0 transition duration-300 group-open:-rotate-180",children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})})]}),t&&t.map((e,t)=>{let r=o===e.href;return(0,n.jsxs)("div",{className:"ml-4",children:[!e.subMenus&&(0,n.jsx)(l(),{href:e.href,className:"flex items-center mx-3 py-2 transition-colors duration-300 transform rounded-lg hover:bg-primary hover:text-gray-200 ".concat(r&&"border-b-2 border-primary text-primary bg-white/50"),children:(0,n.jsx)("span",{className:"mx-2 text-sm font-medium",children:e.name})}),e.subMenus&&f({subMenus:e.subMenus,name:e.name,icon:e.icon,slug:e.slug,index:t,pathname:o,openMenus:c})]},t)})]})},i)};var h=e=>{let{menus:t}=e,[r,s]=(0,a.useState)(!1),[i,o]=(0,a.useState)([]),u=(0,c.useRouter)(),h=(0,c.usePathname)(),p=e=>{for(let t of e){if(t.href===h){let e=null==h?void 0:h.split("/");e.splice(0,1),o(e)}t.subMenus&&p(t.subMenus)}};(0,a.useEffect)(()=>(p(t),()=>{}),[h]);let x=async()=>{s(!0),m.Z.remove("token"),m.Z.remove("role"),u.push("/"),s(!1)};return(0,n.jsxs)("aside",{className:"flex flex-col w-64 h-screen px-5 overflow-y-auto",children:[(0,n.jsx)("div",{className:"flex items-center mt-2 gap-2 justify-center",children:(0,n.jsx)("div",{className:"relative h-[75px] w-20",children:(0,n.jsx)(d(),{alt:"logo",fill:!0,sizes:"(100vw, 100vh)",style:{objectFit:"contain",objectPosition:"center",width:"100%",height:"100%"},src:"/images/logo_jayapura.png"})})}),(0,n.jsx)("div",{className:"mt-4 mb-2 mx-auto",children:(0,n.jsx)("span",{className:"px-3 text-sm font-semibold text-black uppercasetext-gray-400",children:"Menu"})}),(0,n.jsxs)("div",{className:"flex flex-col justify-between flex-1 pt-2 border-t",children:[(0,n.jsx)("nav",{className:"-mx-3 space-y-6 ",children:(0,n.jsx)("div",{className:"space-y-3 text-slate-800",children:t.map((e,t)=>{let{name:r,href:s,icon:a,subMenus:o,slug:c}=e,u=h===s;return o?f({subMenus:o,name:r,icon:a,slug:c,index:t,pathname:h,openMenus:i}):(0,n.jsx)("div",{children:(0,n.jsxs)(l(),{href:s,className:"flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg hover:bg-primary hover:text-gray-200 ".concat(u&&"border-b-2 border-primary text-primary bg-white/50"),children:[(0,n.jsx)("span",{children:a}),(0,n.jsx)("span",{className:"mx-2 text-sm font-medium",children:r})]})},t)})})}),(0,n.jsx)("div",{children:r?(0,n.jsx)("p",{children:"Loading..."}):(0,n.jsx)("button",{onClick:x,className:"flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg text-primary hover:underline hover:text-secondary",children:(0,n.jsx)("span",{children:"Sign Out"})})})]})]})},p=r(4606);let x=[{name:"Dashboard",href:"/admin",icon:(0,n.jsx)(p.ufG,{})},{name:"Banner",href:"/admin/banner",icon:(0,n.jsx)(p.Dz8,{})},{name:"Kegiatan",href:"/admin/kegiatan/daftar",icon:(0,n.jsx)(p.pZ5,{})}];var v=r(6753),g=r(2167),b=r(2979),j=e=>{let{isOpen:t,setIsOpen:r}=(0,v.useMenuContext)(),s=(0,c.usePathname)();return(0,a.useEffect)(()=>{let e=window.innerWidth>=1024;return e?r(!0):r(!1),()=>{r(!1)}},[s]),(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("div",{className:"lg:hidden mt-2 ml-2 z-50 h-7 absolute",onClick:()=>r(!t),children:t?(0,n.jsx)(i._0w,{className:" text-3xl absolute left-[15rem] bg-slate-950 text-white rounded-tr-lg rounded-br-lg"}):(0,n.jsx)(i.jw0,{className:"text-2xl"})}),(0,n.jsx)(g.M,{children:t&&(0,n.jsx)(b.E.aside,{animate:"open",exit:"closed",initial:"closed",variants:{open:{opacity:1,x:0},closed:{opacity:0,x:"-100%"}},className:t?"absolute lg:static lg:block w-[15.5rem] lg:w-[18rem] z-10 bg-thirdary rounded-lg shadow-lg shadow-black":"",children:(0,n.jsx)(h,{menus:x})})})]})},y=r(1735),w=e=>{let t=(0,c.useRouter)(),r=(0,c.usePathname)(),{cekToken:i}=(0,y.Z)(),o=async()=>{let e=await i();(null==e?void 0:e.error)&&t.push("/auth/login")};return(0,a.useEffect)(()=>(o(),()=>{}),[r]),(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"flex min-h-screen h-screen text-black bg-bg",children:[(0,n.jsx)(j,{}),(0,n.jsxs)("div",{className:"flex h-full w-full overflow-hidden p-1 rounded-lg flex-col",children:[(0,n.jsx)("div",{className:"lg:-mx-4 lg:-mt-2 mb-1",children:(0,n.jsx)(s,{})}),(0,n.jsx)("div",{className:"bg-white h-full overflow-hidden p-2 drop-shadow-2xl shadow-black rounded-lg",children:e.children})]})]})})}},6753:function(e,t,r){"use strict";r.r(t),r.d(t,{useMenuContext:function(){return i}});var n=r(7437),s=r(2265);let a=(0,s.createContext)({isOpen:!1,setIsOpen:()=>!1});t.default=e=>{let{children:t}=e,[r,i]=(0,s.useState)(!1);return(0,n.jsx)(a.Provider,{value:{isOpen:r,setIsOpen:i},children:t})};let i=()=>(0,s.useContext)(a)},1485:function(e,t,r){"use strict";r.d(t,{I8:function(){return a},Sj:function(){return i},_n:function(){return s},hi:function(){return o}});var n=r(9222);let s="https://admin.holtekamp.com",a=n.Z.create({baseURL:"".concat(s,"/auth")}),i=n.Z.create({baseURL:"".concat(s,"/crud")}),o=n.Z.create({baseURL:"".concat(s,"/api")});n.Z.create({baseURL:"".concat(s,"/storage")})},1735:function(e,t,r){"use strict";var n=r(4660),s=r(4810),a=r(1485),i=r(1490);let o=(0,n.Ue)((0,s.mW)((e,t)=>({setToken:async()=>{let e=i.Z.get("token");return e},setLogin:async e=>{try{let t=await (0,a.I8)({method:"post",url:"/login",data:e});return{status:"success",data:t.data}}catch(e){return{status:"error",error:e.response.data}}},cekToken:async()=>{let e=await t().setToken();try{let t=await (0,a.I8)({method:"post",url:"/cek_token",headers:{Authorization:"Bearer ".concat(e)}});return{status:"success",data:t.data}}catch(e){return{status:"error",error:e.response.data}}}})));t.Z=o},2167:function(e,t,r){"use strict";r.d(t,{M:function(){return x}});var n=r(2265),s=r(538);function a(){let e=(0,n.useRef)(!1);return(0,s.L)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var i=r(3041),o=r(8243),l=r(961);class c extends n.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function u({children:e,isPresent:t}){let r=(0,n.useId)(),s=(0,n.useRef)(null),a=(0,n.useRef)({width:0,height:0,top:0,left:0});return(0,n.useInsertionEffect)(()=>{let{width:e,height:n,top:i,left:o}=a.current;if(t||!s.current||!e||!n)return;s.current.dataset.motionPopId=r;let l=document.createElement("style");return document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${n}px !important;
            top: ${i}px !important;
            left: ${o}px !important;
          }
        `),()=>{document.head.removeChild(l)}},[t]),n.createElement(c,{isPresent:t,childRef:s,sizeRef:a},n.cloneElement(e,{ref:s}))}let d=({children:e,initial:t,isPresent:r,onExitComplete:s,custom:a,presenceAffectsLayout:i,mode:c})=>{let d=(0,l.h)(m),f=(0,n.useId)(),h=(0,n.useMemo)(()=>({id:f,initial:t,isPresent:r,custom:a,onExitComplete:e=>{for(let t of(d.set(e,!0),d.values()))if(!t)return;s&&s()},register:e=>(d.set(e,!1),()=>d.delete(e))}),i?void 0:[r]);return(0,n.useMemo)(()=>{d.forEach((e,t)=>d.set(t,!1))},[r]),n.useEffect(()=>{r||d.size||!s||s()},[r]),"popLayout"===c&&(e=n.createElement(u,{isPresent:r},e)),n.createElement(o.O.Provider,{value:h},e)};function m(){return new Map}var f=r(781),h=r(6567);let p=e=>e.key||"",x=({children:e,custom:t,initial:r=!0,onExitComplete:o,exitBeforeEnter:l,presenceAffectsLayout:c=!0,mode:u="sync"})=>{var m;(0,h.k)(!l,"Replace exitBeforeEnter with mode='wait'");let x=(0,n.useContext)(f.p).forceRender||function(){let e=a(),[t,r]=(0,n.useState)(0),s=(0,n.useCallback)(()=>{e.current&&r(t+1)},[t]),o=(0,n.useCallback)(()=>i.Wi.postRender(s),[s]);return[o,t]}()[0],v=a(),g=function(e){let t=[];return n.Children.forEach(e,e=>{(0,n.isValidElement)(e)&&t.push(e)}),t}(e),b=g,j=(0,n.useRef)(new Map).current,y=(0,n.useRef)(b),w=(0,n.useRef)(new Map).current,k=(0,n.useRef)(!0);if((0,s.L)(()=>{k.current=!1,function(e,t){e.forEach(e=>{let r=p(e);t.set(r,e)})}(g,w),y.current=b}),m=()=>{k.current=!0,w.clear(),j.clear()},(0,n.useEffect)(()=>()=>m(),[]),k.current)return n.createElement(n.Fragment,null,b.map(e=>n.createElement(d,{key:p(e),isPresent:!0,initial:!!r&&void 0,presenceAffectsLayout:c,mode:u},e)));b=[...b];let N=y.current.map(p),E=g.map(p),C=N.length;for(let e=0;e<C;e++){let t=N[e];-1!==E.indexOf(t)||j.has(t)||j.set(t,void 0)}return"wait"===u&&j.size&&(b=[]),j.forEach((e,r)=>{if(-1!==E.indexOf(r))return;let s=w.get(r);if(!s)return;let a=N.indexOf(r),i=e;i||(i=n.createElement(d,{key:p(s),isPresent:!1,onExitComplete:()=>{w.delete(r),j.delete(r);let e=y.current.findIndex(e=>e.key===r);if(y.current.splice(e,1),!j.size){if(y.current=g,!1===v.current)return;x(),o&&o()}},custom:t,presenceAffectsLayout:c,mode:u},s),j.set(r,i)),b.splice(a,0,i)}),b=b.map(e=>{let t=e.key;return j.has(t)?e:n.createElement(d,{key:p(e),isPresent:!0,presenceAffectsLayout:c,mode:u},e)}),n.createElement(n.Fragment,null,j.size?b:b.map(e=>(0,n.cloneElement)(e)))}},1490:function(e,t,r){"use strict";/*! js-cookie v3.0.5 | MIT */function n(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)e[n]=r[n]}return e}r.d(t,{Z:function(){return s}});var s=function e(t,r){function s(e,s,a){if("undefined"!=typeof document){"number"==typeof(a=n({},r,a)).expires&&(a.expires=new Date(Date.now()+864e5*a.expires)),a.expires&&(a.expires=a.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var i="";for(var o in a)a[o]&&(i+="; "+o,!0!==a[o]&&(i+="="+a[o].split(";")[0]));return document.cookie=e+"="+t.write(s,e)+i}}return Object.create({set:s,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var r=document.cookie?document.cookie.split("; "):[],n={},s=0;s<r.length;s++){var a=r[s].split("="),i=a.slice(1).join("=");try{var o=decodeURIComponent(a[0]);if(n[o]=t.read(i,o),e===o)break}catch(e){}}return e?n[e]:n}},remove:function(e,t){s(e,"",n({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,n({},this.attributes,t))},withConverter:function(t){return e(n({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}},function(e){e.O(0,[447,306,954,222,979,628,360,971,596,560],function(){return e(e.s=5540)}),_N_E=e.O()}]);