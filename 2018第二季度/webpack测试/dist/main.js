!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){var r,o,i,s;
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
s=function(e){var t=Object.prototype.toString,n=Array.isArray||function(e){return"[object Array]"===t.call(e)};function r(e){return"function"==typeof e}function o(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function i(e,t){return null!=e&&"object"==typeof e&&t in e}var s=RegExp.prototype.test;var a=/\S/;function u(e){return!function(e,t){return s.call(e,t)}(a,e)}var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};var l=/\s*/,p=/\s+/,f=/\s*=/,h=/\s*\}/,d=/#|\^|\/|>|\{|&|=|!/;function v(e){this.string=e,this.tail=e,this.pos=0}function g(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function y(){this.cache={}}v.prototype.eos=function(){return""===this.tail},v.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var n=t[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n},v.prototype.scanUntil=function(e){var t,n=this.tail.search(e);switch(n){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=t.length,t},g.prototype.push=function(e){return new g(e,this)},g.prototype.lookup=function(e){var t,n=this.cache;if(n.hasOwnProperty(e))t=n[e];else{for(var o,s,a=this,u=!1;a;){if(e.indexOf(".")>0)for(t=a.view,o=e.split("."),s=0;null!=t&&s<o.length;)s===o.length-1&&(u=i(t,o[s])),t=t[o[s++]];else t=a.view[e],u=i(a.view,e);if(u)break;a=a.parent}n[e]=t}return r(t)&&(t=t.call(this.view)),t},y.prototype.clearCache=function(){this.cache={}},y.prototype.parse=function(t,r){var i=this.cache,s=i[t];return null==s&&(s=i[t]=function(t,r){if(!t)return[];var i,s,a,c=[],g=[],y=[],w=!1,b=!1;function m(){if(w&&!b)for(;y.length;)delete g[y.pop()];else y=[];w=!1,b=!1}function x(e){if("string"==typeof e&&(e=e.split(p,2)),!n(e)||2!==e.length)throw new Error("Invalid tags: "+e);i=new RegExp(o(e[0])+"\\s*"),s=new RegExp("\\s*"+o(e[1])),a=new RegExp("\\s*"+o("}"+e[1]))}x(r||e.tags);for(var k,E,U,j,T,O,P=new v(t);!P.eos();){if(k=P.pos,U=P.scanUntil(i))for(var S=0,V=U.length;S<V;++S)u(j=U.charAt(S))?y.push(g.length):b=!0,g.push(["text",j,k,k+1]),k+=1,"\n"===j&&m();if(!P.scan(i))break;if(w=!0,E=P.scan(d)||"name",P.scan(l),"="===E?(U=P.scanUntil(f),P.scan(f),P.scanUntil(s)):"{"===E?(U=P.scanUntil(a),P.scan(h),P.scanUntil(s),E="&"):U=P.scanUntil(s),!P.scan(s))throw new Error("Unclosed tag at "+P.pos);if(T=[E,U,k,P.pos],g.push(T),"#"===E||"^"===E)c.push(T);else if("/"===E){if(!(O=c.pop()))throw new Error('Unopened section "'+U+'" at '+k);if(O[1]!==U)throw new Error('Unclosed section "'+O[1]+'" at '+k)}else"name"===E||"{"===E||"&"===E?b=!0:"="===E&&x(U)}if(O=c.pop())throw new Error('Unclosed section "'+O[1]+'" at '+P.pos);return function(e){for(var t,n=[],r=n,o=[],i=0,s=e.length;i<s;++i)switch((t=e[i])[0]){case"#":case"^":r.push(t),o.push(t),r=t[4]=[];break;case"/":o.pop()[5]=t[2],r=o.length>0?o[o.length-1][4]:n;break;default:r.push(t)}return n}(function(e){for(var t,n,r=[],o=0,i=e.length;o<i;++o)(t=e[o])&&("text"===t[0]&&n&&"text"===n[0]?(n[1]+=t[1],n[3]=t[3]):(r.push(t),n=t));return r}(g))}(t,r)),s},y.prototype.render=function(e,t,n){var r=this.parse(e),o=t instanceof g?t:new g(t);return this.renderTokens(r,o,n,e)},y.prototype.renderTokens=function(e,t,n,r){for(var o,i,s,a="",u=0,c=e.length;u<c;++u)s=void 0,"#"===(i=(o=e[u])[0])?s=this.renderSection(o,t,n,r):"^"===i?s=this.renderInverted(o,t,n,r):">"===i?s=this.renderPartial(o,t,n,r):"&"===i?s=this.unescapedValue(o,t):"name"===i?s=this.escapedValue(o,t):"text"===i&&(s=this.rawValue(o)),void 0!==s&&(a+=s);return a},y.prototype.renderSection=function(e,t,o,i){var s=this,a="",u=t.lookup(e[1]);if(u){if(n(u))for(var c=0,l=u.length;c<l;++c)a+=this.renderTokens(e[4],t.push(u[c]),o,i);else if("object"==typeof u||"string"==typeof u||"number"==typeof u)a+=this.renderTokens(e[4],t.push(u),o,i);else if(r(u)){if("string"!=typeof i)throw new Error("Cannot use higher-order sections without the original template");null!=(u=u.call(t.view,i.slice(e[3],e[5]),function(e){return s.render(e,t,o)}))&&(a+=u)}else a+=this.renderTokens(e[4],t,o,i);return a}},y.prototype.renderInverted=function(e,t,r,o){var i=t.lookup(e[1]);if(!i||n(i)&&0===i.length)return this.renderTokens(e[4],t,r,o)},y.prototype.renderPartial=function(e,t,n){if(n){var o=r(n)?n(e[1]):n[e[1]];return null!=o?this.renderTokens(this.parse(o),t,n,o):void 0}},y.prototype.unescapedValue=function(e,t){var n=t.lookup(e[1]);if(null!=n)return n},y.prototype.escapedValue=function(t,n){var r=n.lookup(t[1]);if(null!=r)return e.escape(r)},y.prototype.rawValue=function(e){return e[1]},e.name="mustache.js",e.version="2.3.0",e.tags=["{{","}}"];var w=new y;return e.clearCache=function(){return w.clearCache()},e.parse=function(e,t){return w.parse(e,t)},e.render=function(e,t,r){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+(n(o=e)?"array":typeof o)+'" was given as the first argument for mustache#render(template, view, partials)');var o;return w.render(e,t,r)},e.to_html=function(t,n,o,i){var s=e.render(t,n,o);if(!r(i))return s;i(s)},e.escape=function(e){return String(e).replace(/[&<>"'`=\/]/g,function(e){return c[e]})},e.Scanner=v,e.Context=g,e.Writer=y,e},"object"==typeof t&&t&&"string"!=typeof t.nodeName?s(t):(o=[t],void 0===(i="function"==typeof(r=s)?r.apply(t,o):r)||(e.exports=i))},function(e,t,n){let r=n(0),o="<h1>Hello <i>{{name}}</i></h1>";r.parse(o),t.sayHello=(e=>r.render(o,{name:e}))},function(e,t,n){window.addEventListener("load",()=>{document.write(n(1).sayHello("node"))})}]);