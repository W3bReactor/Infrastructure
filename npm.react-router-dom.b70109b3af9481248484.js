"use strict";(self.webpackChunkunit_demo_cra=self.webpackChunkunit_demo_cra||[]).push([[216],{727:(e,t,n)=>{n.d(t,{VK:()=>f,rU:()=>y});var r=n(550),a=n(354),i=n(294),o=n(731),c=n(462),l=n(366),u=n(776),f=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).history=(0,o.lX)(t.props),t}return(0,a.Z)(t,e),t.prototype.render=function(){return i.createElement(r.F0,{history:this.history,children:this.props.children})},t}(i.Component);i.Component;var s=function(e,t){return"function"==typeof e?e(t):e},v=function(e,t){return"string"==typeof e?(0,o.ob)(e,null,null,t):e},p=function(e){return e},h=i.forwardRef;void 0===h&&(h=p);var m=h((function(e,t){var n=e.innerRef,r=e.navigate,a=e.onClick,o=(0,l.Z)(e,["innerRef","navigate","onClick"]),u=o.target,f=(0,c.Z)({},o,{onClick:function(e){try{a&&a(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||u&&"_self"!==u||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return f.ref=p!==h&&t||n,i.createElement("a",f)})),y=h((function(e,t){var n=e.component,a=void 0===n?m:n,f=e.replace,y=e.to,d=e.innerRef,C=(0,l.Z)(e,["component","replace","to","innerRef"]);return i.createElement(r.s6.Consumer,null,(function(e){e||(0,u.Z)(!1);var n=e.history,r=v(s(y,e.location),e.location),l=r?n.createHref(r):"",m=(0,c.Z)({},C,{href:l,navigate:function(){var t=s(y,e.location),r=(0,o.Ep)(e.location)===(0,o.Ep)(v(t));(f||r?n.replace:n.push)(t)}});return p!==h?m.ref=t||d:m.innerRef=d,i.createElement(a,m)}))})),d=function(e){return e},C=i.forwardRef;void 0===C&&(C=d),C((function(e,t){var n=e["aria-current"],a=void 0===n?"page":n,o=e.activeClassName,f=void 0===o?"active":o,p=e.activeStyle,h=e.className,m=e.exact,R=e.isActive,Z=e.location,g=e.sensitive,E=e.strict,k=e.style,w=e.to,K=e.innerRef,N=(0,l.Z)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return i.createElement(r.s6.Consumer,null,(function(e){e||(0,u.Z)(!1);var n=Z||e.location,o=v(s(w,n),n),l=o.pathname,_=l&&l.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),b=_?(0,r.LX)(n.pathname,{path:_,exact:m,sensitive:g,strict:E}):null,A=!!(R?R(b,n):b),x="function"==typeof h?h(A):h,D="function"==typeof k?k(A):k;A&&(x=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(x,f),D=(0,c.Z)({},D,p));var S=(0,c.Z)({"aria-current":A&&a||null,className:x,style:D,to:o},N);return d!==C?S.ref=t||K:S.innerRef=K,i.createElement(y,S)}))}))}}]);