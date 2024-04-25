function kR(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function RE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var CE={exports:{}},uh={},xE={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fu=Symbol.for("react.element"),AR=Symbol.for("react.portal"),PR=Symbol.for("react.fragment"),bR=Symbol.for("react.strict_mode"),RR=Symbol.for("react.profiler"),CR=Symbol.for("react.provider"),xR=Symbol.for("react.context"),NR=Symbol.for("react.forward_ref"),DR=Symbol.for("react.suspense"),OR=Symbol.for("react.memo"),VR=Symbol.for("react.lazy"),j_=Symbol.iterator;function LR(t){return t===null||typeof t!="object"?null:(t=j_&&t[j_]||t["@@iterator"],typeof t=="function"?t:null)}var NE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},DE=Object.assign,OE={};function Wo(t,e,n){this.props=t,this.context=e,this.refs=OE,this.updater=n||NE}Wo.prototype.isReactComponent={};Wo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Wo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function VE(){}VE.prototype=Wo.prototype;function Ng(t,e,n){this.props=t,this.context=e,this.refs=OE,this.updater=n||NE}var Dg=Ng.prototype=new VE;Dg.constructor=Ng;DE(Dg,Wo.prototype);Dg.isPureReactComponent=!0;var z_=Array.isArray,LE=Object.prototype.hasOwnProperty,Og={current:null},ME={key:!0,ref:!0,__self:!0,__source:!0};function FE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)LE.call(e,r)&&!ME.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:fu,type:t,key:s,ref:o,props:i,_owner:Og.current}}function MR(t,e){return{$$typeof:fu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Vg(t){return typeof t=="object"&&t!==null&&t.$$typeof===fu}function FR(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var U_=/\/+/g;function Rf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?FR(""+t.key):e.toString(36)}function Oc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case fu:case AR:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Rf(o,0):r,z_(i)?(n="",t!=null&&(n=t.replace(U_,"$&/")+"/"),Oc(i,e,n,"",function(u){return u})):i!=null&&(Vg(i)&&(i=MR(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(U_,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",z_(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Rf(s,a);o+=Oc(s,e,n,l,i)}else if(l=LR(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Rf(s,a++),o+=Oc(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Xu(t,e,n){if(t==null)return t;var r=[],i=0;return Oc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function jR(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Nt={current:null},Vc={transition:null},zR={ReactCurrentDispatcher:Nt,ReactCurrentBatchConfig:Vc,ReactCurrentOwner:Og};re.Children={map:Xu,forEach:function(t,e,n){Xu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xu(t,function(){e++}),e},toArray:function(t){return Xu(t,function(e){return e})||[]},only:function(t){if(!Vg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=Wo;re.Fragment=PR;re.Profiler=RR;re.PureComponent=Ng;re.StrictMode=bR;re.Suspense=DR;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zR;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=DE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Og.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)LE.call(e,l)&&!ME.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:fu,type:t.type,key:i,ref:s,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:xR,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:CR,_context:t},t.Consumer=t};re.createElement=FE;re.createFactory=function(t){var e=FE.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:NR,render:t}};re.isValidElement=Vg;re.lazy=function(t){return{$$typeof:VR,_payload:{_status:-1,_result:t},_init:jR}};re.memo=function(t,e){return{$$typeof:OR,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=Vc.transition;Vc.transition={};try{t()}finally{Vc.transition=e}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(t,e){return Nt.current.useCallback(t,e)};re.useContext=function(t){return Nt.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return Nt.current.useDeferredValue(t)};re.useEffect=function(t,e){return Nt.current.useEffect(t,e)};re.useId=function(){return Nt.current.useId()};re.useImperativeHandle=function(t,e,n){return Nt.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return Nt.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return Nt.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return Nt.current.useMemo(t,e)};re.useReducer=function(t,e,n){return Nt.current.useReducer(t,e,n)};re.useRef=function(t){return Nt.current.useRef(t)};re.useState=function(t){return Nt.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return Nt.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return Nt.current.useTransition()};re.version="18.2.0";xE.exports=re;var T=xE.exports;const ch=RE(T),UR=kR({__proto__:null,default:ch},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $R=T,BR=Symbol.for("react.element"),qR=Symbol.for("react.fragment"),WR=Object.prototype.hasOwnProperty,GR=$R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,KR={key:!0,ref:!0,__self:!0,__source:!0};function jE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)WR.call(e,r)&&!KR.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:BR,type:t,key:s,ref:o,props:i,_owner:GR.current}}uh.Fragment=qR;uh.jsx=jE;uh.jsxs=jE;CE.exports=uh;var f=CE.exports,Cm={},zE={exports:{}},Jt={},UE={exports:{}},$E={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Y){var J=z.length;z.push(Y);e:for(;0<J;){var Me=J-1>>>1,Xe=z[Me];if(0<i(Xe,Y))z[Me]=Y,z[J]=Xe,J=Me;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Y=z[0],J=z.pop();if(J!==Y){z[0]=J;e:for(var Me=0,Xe=z.length,Qu=Xe>>>1;Me<Qu;){var Si=2*(Me+1)-1,bf=z[Si],ki=Si+1,Yu=z[ki];if(0>i(bf,J))ki<Xe&&0>i(Yu,bf)?(z[Me]=Yu,z[ki]=J,Me=ki):(z[Me]=bf,z[Si]=J,Me=Si);else if(ki<Xe&&0>i(Yu,J))z[Me]=Yu,z[ki]=J,Me=ki;else break e}}return Y}function i(z,Y){var J=z.sortIndex-Y.sortIndex;return J!==0?J:z.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,m=!1,y=!1,_=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(z){for(var Y=n(u);Y!==null;){if(Y.callback===null)r(u);else if(Y.startTime<=z)r(u),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(u)}}function E(z){if(_=!1,v(z),!y)if(n(l)!==null)y=!0,da(k);else{var Y=n(u);Y!==null&&ha(E,Y.startTime-z)}}function k(z,Y){y=!1,_&&(_=!1,g(L),L=-1),m=!0;var J=h;try{for(v(Y),d=n(l);d!==null&&(!(d.expirationTime>Y)||z&&!$());){var Me=d.callback;if(typeof Me=="function"){d.callback=null,h=d.priorityLevel;var Xe=Me(d.expirationTime<=Y);Y=t.unstable_now(),typeof Xe=="function"?d.callback=Xe:d===n(l)&&r(l),v(Y)}else r(l);d=n(l)}if(d!==null)var Qu=!0;else{var Si=n(u);Si!==null&&ha(E,Si.startTime-Y),Qu=!1}return Qu}finally{d=null,h=J,m=!1}}var b=!1,C=null,L=-1,X=5,N=-1;function $(){return!(t.unstable_now()-N<X)}function ae(){if(C!==null){var z=t.unstable_now();N=z;var Y=!0;try{Y=C(!0,z)}finally{Y?We():(b=!1,C=null)}}else b=!1}var We;if(typeof p=="function")We=function(){p(ae)};else if(typeof MessageChannel<"u"){var tn=new MessageChannel,wr=tn.port2;tn.port1.onmessage=ae,We=function(){wr.postMessage(null)}}else We=function(){w(ae,0)};function da(z){C=z,b||(b=!0,We())}function ha(z,Y){L=w(function(){z(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,da(k))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(z){switch(h){case 1:case 2:case 3:var Y=3;break;default:Y=h}var J=h;h=Y;try{return z()}finally{h=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Y){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var J=h;h=z;try{return Y()}finally{h=J}},t.unstable_scheduleCallback=function(z,Y,J){var Me=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?Me+J:Me):J=Me,z){case 1:var Xe=-1;break;case 2:Xe=250;break;case 5:Xe=1073741823;break;case 4:Xe=1e4;break;default:Xe=5e3}return Xe=J+Xe,z={id:c++,callback:Y,priorityLevel:z,startTime:J,expirationTime:Xe,sortIndex:-1},J>Me?(z.sortIndex=J,e(u,z),n(l)===null&&z===n(u)&&(_?(g(L),L=-1):_=!0,ha(E,J-Me))):(z.sortIndex=Xe,e(l,z),y||m||(y=!0,da(k))),z},t.unstable_shouldYield=$,t.unstable_wrapCallback=function(z){var Y=h;return function(){var J=h;h=Y;try{return z.apply(this,arguments)}finally{h=J}}}})($E);UE.exports=$E;var HR=UE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BE=T,Qt=HR;function R(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qE=new Set,dl={};function _s(t,e){Io(t,e),Io(t+"Capture",e)}function Io(t,e){for(dl[t]=e,t=0;t<e.length;t++)qE.add(e[t])}var rr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xm=Object.prototype.hasOwnProperty,QR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$_={},B_={};function YR(t){return xm.call(B_,t)?!0:xm.call($_,t)?!1:QR.test(t)?B_[t]=!0:($_[t]=!0,!1)}function XR(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function JR(t,e,n,r){if(e===null||typeof e>"u"||XR(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Dt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){mt[t]=new Dt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];mt[e]=new Dt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){mt[t]=new Dt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){mt[t]=new Dt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){mt[t]=new Dt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){mt[t]=new Dt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){mt[t]=new Dt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){mt[t]=new Dt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){mt[t]=new Dt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Lg=/[\-:]([a-z])/g;function Mg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Lg,Mg);mt[e]=new Dt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Lg,Mg);mt[e]=new Dt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Lg,Mg);mt[e]=new Dt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){mt[t]=new Dt(t,1,!1,t.toLowerCase(),null,!1,!1)});mt.xlinkHref=new Dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){mt[t]=new Dt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Fg(t,e,n,r){var i=mt.hasOwnProperty(e)?mt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(JR(e,n,i,r)&&(n=null),r||i===null?YR(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var fr=BE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ju=Symbol.for("react.element"),Bs=Symbol.for("react.portal"),qs=Symbol.for("react.fragment"),jg=Symbol.for("react.strict_mode"),Nm=Symbol.for("react.profiler"),WE=Symbol.for("react.provider"),GE=Symbol.for("react.context"),zg=Symbol.for("react.forward_ref"),Dm=Symbol.for("react.suspense"),Om=Symbol.for("react.suspense_list"),Ug=Symbol.for("react.memo"),Pr=Symbol.for("react.lazy"),KE=Symbol.for("react.offscreen"),q_=Symbol.iterator;function fa(t){return t===null||typeof t!="object"?null:(t=q_&&t[q_]||t["@@iterator"],typeof t=="function"?t:null)}var be=Object.assign,Cf;function xa(t){if(Cf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cf=e&&e[1]||""}return`
`+Cf+t}var xf=!1;function Nf(t,e){if(!t||xf)return"";xf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{xf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?xa(t):""}function ZR(t){switch(t.tag){case 5:return xa(t.type);case 16:return xa("Lazy");case 13:return xa("Suspense");case 19:return xa("SuspenseList");case 0:case 2:case 15:return t=Nf(t.type,!1),t;case 11:return t=Nf(t.type.render,!1),t;case 1:return t=Nf(t.type,!0),t;default:return""}}function Vm(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case qs:return"Fragment";case Bs:return"Portal";case Nm:return"Profiler";case jg:return"StrictMode";case Dm:return"Suspense";case Om:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case GE:return(t.displayName||"Context")+".Consumer";case WE:return(t._context.displayName||"Context")+".Provider";case zg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ug:return e=t.displayName||null,e!==null?e:Vm(t.type)||"Memo";case Pr:e=t._payload,t=t._init;try{return Vm(t(e))}catch{}}return null}function eC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vm(e);case 8:return e===jg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Yr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function HE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function tC(t){var e=HE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Zu(t){t._valueTracker||(t._valueTracker=tC(t))}function QE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=HE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function od(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Lm(t,e){var n=e.checked;return be({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function W_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function YE(t,e){e=e.checked,e!=null&&Fg(t,"checked",e,!1)}function Mm(t,e){YE(t,e);var n=Yr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Fm(t,e.type,n):e.hasOwnProperty("defaultValue")&&Fm(t,e.type,Yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function G_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Fm(t,e,n){(e!=="number"||od(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Na=Array.isArray;function oo(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Yr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function jm(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(R(91));return be({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function K_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(R(92));if(Na(n)){if(1<n.length)throw Error(R(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Yr(n)}}function XE(t,e){var n=Yr(e.value),r=Yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function H_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function JE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zm(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?JE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ec,ZE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ec=ec||document.createElement("div"),ec.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ec.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function hl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var qa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nC=["Webkit","ms","Moz","O"];Object.keys(qa).forEach(function(t){nC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),qa[e]=qa[t]})});function e1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||qa.hasOwnProperty(t)&&qa[t]?(""+e).trim():e+"px"}function t1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=e1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var rC=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Um(t,e){if(e){if(rC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(R(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(R(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(R(61))}if(e.style!=null&&typeof e.style!="object")throw Error(R(62))}}function $m(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bm=null;function $g(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qm=null,ao=null,lo=null;function Q_(t){if(t=gu(t)){if(typeof qm!="function")throw Error(R(280));var e=t.stateNode;e&&(e=ph(e),qm(t.stateNode,t.type,e))}}function n1(t){ao?lo?lo.push(t):lo=[t]:ao=t}function r1(){if(ao){var t=ao,e=lo;if(lo=ao=null,Q_(t),e)for(t=0;t<e.length;t++)Q_(e[t])}}function i1(t,e){return t(e)}function s1(){}var Df=!1;function o1(t,e,n){if(Df)return t(e,n);Df=!0;try{return i1(t,e,n)}finally{Df=!1,(ao!==null||lo!==null)&&(s1(),r1())}}function fl(t,e){var n=t.stateNode;if(n===null)return null;var r=ph(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(R(231,e,typeof n));return n}var Wm=!1;if(rr)try{var ma={};Object.defineProperty(ma,"passive",{get:function(){Wm=!0}}),window.addEventListener("test",ma,ma),window.removeEventListener("test",ma,ma)}catch{Wm=!1}function iC(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Wa=!1,ad=null,ld=!1,Gm=null,sC={onError:function(t){Wa=!0,ad=t}};function oC(t,e,n,r,i,s,o,a,l){Wa=!1,ad=null,iC.apply(sC,arguments)}function aC(t,e,n,r,i,s,o,a,l){if(oC.apply(this,arguments),Wa){if(Wa){var u=ad;Wa=!1,ad=null}else throw Error(R(198));ld||(ld=!0,Gm=u)}}function ws(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function a1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Y_(t){if(ws(t)!==t)throw Error(R(188))}function lC(t){var e=t.alternate;if(!e){if(e=ws(t),e===null)throw Error(R(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Y_(i),t;if(s===r)return Y_(i),e;s=s.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?t:e}function l1(t){return t=lC(t),t!==null?u1(t):null}function u1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=u1(t);if(e!==null)return e;t=t.sibling}return null}var c1=Qt.unstable_scheduleCallback,X_=Qt.unstable_cancelCallback,uC=Qt.unstable_shouldYield,cC=Qt.unstable_requestPaint,Fe=Qt.unstable_now,dC=Qt.unstable_getCurrentPriorityLevel,Bg=Qt.unstable_ImmediatePriority,d1=Qt.unstable_UserBlockingPriority,ud=Qt.unstable_NormalPriority,hC=Qt.unstable_LowPriority,h1=Qt.unstable_IdlePriority,dh=null,jn=null;function fC(t){if(jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(dh,t,void 0,(t.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:gC,mC=Math.log,pC=Math.LN2;function gC(t){return t>>>=0,t===0?32:31-(mC(t)/pC|0)|0}var tc=64,nc=4194304;function Da(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function cd(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Da(a):(s&=o,s!==0&&(r=Da(s)))}else o=n&~i,o!==0?r=Da(o):s!==0&&(r=Da(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-yn(e),i=1<<n,r|=t[n],e&=~i;return r}function vC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-yn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=vC(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Km(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function f1(){var t=tc;return tc<<=1,!(tc&4194240)&&(tc=64),t}function Of(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function mu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-yn(e),t[e]=n}function _C(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-yn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function qg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-yn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ue=0;function m1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var p1,Wg,g1,v1,y1,Hm=!1,rc=[],jr=null,zr=null,Ur=null,ml=new Map,pl=new Map,Rr=[],wC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function J_(t,e){switch(t){case"focusin":case"focusout":jr=null;break;case"dragenter":case"dragleave":zr=null;break;case"mouseover":case"mouseout":Ur=null;break;case"pointerover":case"pointerout":ml.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":pl.delete(e.pointerId)}}function pa(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=gu(e),e!==null&&Wg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function IC(t,e,n,r,i){switch(e){case"focusin":return jr=pa(jr,t,e,n,r,i),!0;case"dragenter":return zr=pa(zr,t,e,n,r,i),!0;case"mouseover":return Ur=pa(Ur,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ml.set(s,pa(ml.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,pl.set(s,pa(pl.get(s)||null,t,e,n,r,i)),!0}return!1}function _1(t){var e=Mi(t.target);if(e!==null){var n=ws(e);if(n!==null){if(e=n.tag,e===13){if(e=a1(n),e!==null){t.blockedOn=e,y1(t.priority,function(){g1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Lc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Qm(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Bm=r,n.target.dispatchEvent(r),Bm=null}else return e=gu(n),e!==null&&Wg(e),t.blockedOn=n,!1;e.shift()}return!0}function Z_(t,e,n){Lc(t)&&n.delete(e)}function EC(){Hm=!1,jr!==null&&Lc(jr)&&(jr=null),zr!==null&&Lc(zr)&&(zr=null),Ur!==null&&Lc(Ur)&&(Ur=null),ml.forEach(Z_),pl.forEach(Z_)}function ga(t,e){t.blockedOn===e&&(t.blockedOn=null,Hm||(Hm=!0,Qt.unstable_scheduleCallback(Qt.unstable_NormalPriority,EC)))}function gl(t){function e(i){return ga(i,t)}if(0<rc.length){ga(rc[0],t);for(var n=1;n<rc.length;n++){var r=rc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(jr!==null&&ga(jr,t),zr!==null&&ga(zr,t),Ur!==null&&ga(Ur,t),ml.forEach(e),pl.forEach(e),n=0;n<Rr.length;n++)r=Rr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Rr.length&&(n=Rr[0],n.blockedOn===null);)_1(n),n.blockedOn===null&&Rr.shift()}var uo=fr.ReactCurrentBatchConfig,dd=!0;function TC(t,e,n,r){var i=ue,s=uo.transition;uo.transition=null;try{ue=1,Gg(t,e,n,r)}finally{ue=i,uo.transition=s}}function SC(t,e,n,r){var i=ue,s=uo.transition;uo.transition=null;try{ue=4,Gg(t,e,n,r)}finally{ue=i,uo.transition=s}}function Gg(t,e,n,r){if(dd){var i=Qm(t,e,n,r);if(i===null)qf(t,e,r,hd,n),J_(t,r);else if(IC(i,t,e,n,r))r.stopPropagation();else if(J_(t,r),e&4&&-1<wC.indexOf(t)){for(;i!==null;){var s=gu(i);if(s!==null&&p1(s),s=Qm(t,e,n,r),s===null&&qf(t,e,r,hd,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else qf(t,e,r,null,n)}}var hd=null;function Qm(t,e,n,r){if(hd=null,t=$g(r),t=Mi(t),t!==null)if(e=ws(t),e===null)t=null;else if(n=e.tag,n===13){if(t=a1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return hd=t,null}function w1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dC()){case Bg:return 1;case d1:return 4;case ud:case hC:return 16;case h1:return 536870912;default:return 16}default:return 16}}var Dr=null,Kg=null,Mc=null;function I1(){if(Mc)return Mc;var t,e=Kg,n=e.length,r,i="value"in Dr?Dr.value:Dr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Mc=i.slice(t,1<r?1-r:void 0)}function Fc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ic(){return!0}function ew(){return!1}function Zt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ic:ew,this.isPropagationStopped=ew,this}return be(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ic)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ic)},persist:function(){},isPersistent:ic}),e}var Go={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hg=Zt(Go),pu=be({},Go,{view:0,detail:0}),kC=Zt(pu),Vf,Lf,va,hh=be({},pu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==va&&(va&&t.type==="mousemove"?(Vf=t.screenX-va.screenX,Lf=t.screenY-va.screenY):Lf=Vf=0,va=t),Vf)},movementY:function(t){return"movementY"in t?t.movementY:Lf}}),tw=Zt(hh),AC=be({},hh,{dataTransfer:0}),PC=Zt(AC),bC=be({},pu,{relatedTarget:0}),Mf=Zt(bC),RC=be({},Go,{animationName:0,elapsedTime:0,pseudoElement:0}),CC=Zt(RC),xC=be({},Go,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),NC=Zt(xC),DC=be({},Go,{data:0}),nw=Zt(DC),OC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},VC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},LC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function MC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=LC[t])?!!e[t]:!1}function Qg(){return MC}var FC=be({},pu,{key:function(t){if(t.key){var e=OC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Fc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?VC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qg,charCode:function(t){return t.type==="keypress"?Fc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jC=Zt(FC),zC=be({},hh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rw=Zt(zC),UC=be({},pu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qg}),$C=Zt(UC),BC=be({},Go,{propertyName:0,elapsedTime:0,pseudoElement:0}),qC=Zt(BC),WC=be({},hh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),GC=Zt(WC),KC=[9,13,27,32],Yg=rr&&"CompositionEvent"in window,Ga=null;rr&&"documentMode"in document&&(Ga=document.documentMode);var HC=rr&&"TextEvent"in window&&!Ga,E1=rr&&(!Yg||Ga&&8<Ga&&11>=Ga),iw=" ",sw=!1;function T1(t,e){switch(t){case"keyup":return KC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function S1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ws=!1;function QC(t,e){switch(t){case"compositionend":return S1(e);case"keypress":return e.which!==32?null:(sw=!0,iw);case"textInput":return t=e.data,t===iw&&sw?null:t;default:return null}}function YC(t,e){if(Ws)return t==="compositionend"||!Yg&&T1(t,e)?(t=I1(),Mc=Kg=Dr=null,Ws=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return E1&&e.locale!=="ko"?null:e.data;default:return null}}var XC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ow(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!XC[t.type]:e==="textarea"}function k1(t,e,n,r){n1(r),e=fd(e,"onChange"),0<e.length&&(n=new Hg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ka=null,vl=null;function JC(t){L1(t,0)}function fh(t){var e=Hs(t);if(QE(e))return t}function ZC(t,e){if(t==="change")return e}var A1=!1;if(rr){var Ff;if(rr){var jf="oninput"in document;if(!jf){var aw=document.createElement("div");aw.setAttribute("oninput","return;"),jf=typeof aw.oninput=="function"}Ff=jf}else Ff=!1;A1=Ff&&(!document.documentMode||9<document.documentMode)}function lw(){Ka&&(Ka.detachEvent("onpropertychange",P1),vl=Ka=null)}function P1(t){if(t.propertyName==="value"&&fh(vl)){var e=[];k1(e,vl,t,$g(t)),o1(JC,e)}}function ex(t,e,n){t==="focusin"?(lw(),Ka=e,vl=n,Ka.attachEvent("onpropertychange",P1)):t==="focusout"&&lw()}function tx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fh(vl)}function nx(t,e){if(t==="click")return fh(e)}function rx(t,e){if(t==="input"||t==="change")return fh(e)}function ix(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var wn=typeof Object.is=="function"?Object.is:ix;function yl(t,e){if(wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!xm.call(e,i)||!wn(t[i],e[i]))return!1}return!0}function uw(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cw(t,e){var n=uw(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=uw(n)}}function b1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?b1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function R1(){for(var t=window,e=od();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=od(t.document)}return e}function Xg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function sx(t){var e=R1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&b1(n.ownerDocument.documentElement,n)){if(r!==null&&Xg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=cw(n,s);var o=cw(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ox=rr&&"documentMode"in document&&11>=document.documentMode,Gs=null,Ym=null,Ha=null,Xm=!1;function dw(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xm||Gs==null||Gs!==od(r)||(r=Gs,"selectionStart"in r&&Xg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ha&&yl(Ha,r)||(Ha=r,r=fd(Ym,"onSelect"),0<r.length&&(e=new Hg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Gs)))}function sc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ks={animationend:sc("Animation","AnimationEnd"),animationiteration:sc("Animation","AnimationIteration"),animationstart:sc("Animation","AnimationStart"),transitionend:sc("Transition","TransitionEnd")},zf={},C1={};rr&&(C1=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function mh(t){if(zf[t])return zf[t];if(!Ks[t])return t;var e=Ks[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in C1)return zf[t]=e[n];return t}var x1=mh("animationend"),N1=mh("animationiteration"),D1=mh("animationstart"),O1=mh("transitionend"),V1=new Map,hw="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fi(t,e){V1.set(t,e),_s(e,[t])}for(var Uf=0;Uf<hw.length;Uf++){var $f=hw[Uf],ax=$f.toLowerCase(),lx=$f[0].toUpperCase()+$f.slice(1);fi(ax,"on"+lx)}fi(x1,"onAnimationEnd");fi(N1,"onAnimationIteration");fi(D1,"onAnimationStart");fi("dblclick","onDoubleClick");fi("focusin","onFocus");fi("focusout","onBlur");fi(O1,"onTransitionEnd");Io("onMouseEnter",["mouseout","mouseover"]);Io("onMouseLeave",["mouseout","mouseover"]);Io("onPointerEnter",["pointerout","pointerover"]);Io("onPointerLeave",["pointerout","pointerover"]);_s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_s("onBeforeInput",["compositionend","keypress","textInput","paste"]);_s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ux=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oa));function fw(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,aC(r,e,void 0,t),t.currentTarget=null}function L1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;fw(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;fw(i,a,u),s=l}}}if(ld)throw t=Gm,ld=!1,Gm=null,t}function me(t,e){var n=e[np];n===void 0&&(n=e[np]=new Set);var r=t+"__bubble";n.has(r)||(M1(e,t,2,!1),n.add(r))}function Bf(t,e,n){var r=0;e&&(r|=4),M1(n,t,r,e)}var oc="_reactListening"+Math.random().toString(36).slice(2);function _l(t){if(!t[oc]){t[oc]=!0,qE.forEach(function(n){n!=="selectionchange"&&(ux.has(n)||Bf(n,!1,t),Bf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[oc]||(e[oc]=!0,Bf("selectionchange",!1,e))}}function M1(t,e,n,r){switch(w1(e)){case 1:var i=TC;break;case 4:i=SC;break;default:i=Gg}n=i.bind(null,e,n,t),i=void 0,!Wm||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function qf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Mi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}o1(function(){var u=s,c=$g(n),d=[];e:{var h=V1.get(t);if(h!==void 0){var m=Hg,y=t;switch(t){case"keypress":if(Fc(n)===0)break e;case"keydown":case"keyup":m=jC;break;case"focusin":y="focus",m=Mf;break;case"focusout":y="blur",m=Mf;break;case"beforeblur":case"afterblur":m=Mf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=tw;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=PC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=$C;break;case x1:case N1:case D1:m=CC;break;case O1:m=qC;break;case"scroll":m=kC;break;case"wheel":m=GC;break;case"copy":case"cut":case"paste":m=NC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=rw}var _=(e&4)!==0,w=!_&&t==="scroll",g=_?h!==null?h+"Capture":null:h;_=[];for(var p=u,v;p!==null;){v=p;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,g!==null&&(E=fl(p,g),E!=null&&_.push(wl(p,E,v)))),w)break;p=p.return}0<_.length&&(h=new m(h,y,null,n,c),d.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==Bm&&(y=n.relatedTarget||n.fromElement)&&(Mi(y)||y[ir]))break e;if((m||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?Mi(y):null,y!==null&&(w=ws(y),y!==w||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(_=tw,E="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(_=rw,E="onPointerLeave",g="onPointerEnter",p="pointer"),w=m==null?h:Hs(m),v=y==null?h:Hs(y),h=new _(E,p+"leave",m,n,c),h.target=w,h.relatedTarget=v,E=null,Mi(c)===u&&(_=new _(g,p+"enter",y,n,c),_.target=v,_.relatedTarget=w,E=_),w=E,m&&y)t:{for(_=m,g=y,p=0,v=_;v;v=xs(v))p++;for(v=0,E=g;E;E=xs(E))v++;for(;0<p-v;)_=xs(_),p--;for(;0<v-p;)g=xs(g),v--;for(;p--;){if(_===g||g!==null&&_===g.alternate)break t;_=xs(_),g=xs(g)}_=null}else _=null;m!==null&&mw(d,h,m,_,!1),y!==null&&w!==null&&mw(d,w,y,_,!0)}}e:{if(h=u?Hs(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var k=ZC;else if(ow(h))if(A1)k=rx;else{k=tx;var b=ex}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=nx);if(k&&(k=k(t,u))){k1(d,k,n,c);break e}b&&b(t,h,u),t==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&Fm(h,"number",h.value)}switch(b=u?Hs(u):window,t){case"focusin":(ow(b)||b.contentEditable==="true")&&(Gs=b,Ym=u,Ha=null);break;case"focusout":Ha=Ym=Gs=null;break;case"mousedown":Xm=!0;break;case"contextmenu":case"mouseup":case"dragend":Xm=!1,dw(d,n,c);break;case"selectionchange":if(ox)break;case"keydown":case"keyup":dw(d,n,c)}var C;if(Yg)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Ws?T1(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(E1&&n.locale!=="ko"&&(Ws||L!=="onCompositionStart"?L==="onCompositionEnd"&&Ws&&(C=I1()):(Dr=c,Kg="value"in Dr?Dr.value:Dr.textContent,Ws=!0)),b=fd(u,L),0<b.length&&(L=new nw(L,t,null,n,c),d.push({event:L,listeners:b}),C?L.data=C:(C=S1(n),C!==null&&(L.data=C)))),(C=HC?QC(t,n):YC(t,n))&&(u=fd(u,"onBeforeInput"),0<u.length&&(c=new nw("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=C))}L1(d,e)})}function wl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fd(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=fl(t,n),s!=null&&r.unshift(wl(t,s,i)),s=fl(t,e),s!=null&&r.push(wl(t,s,i))),t=t.return}return r}function xs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function mw(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=fl(n,s),l!=null&&o.unshift(wl(n,l,a))):i||(l=fl(n,s),l!=null&&o.push(wl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var cx=/\r\n?/g,dx=/\u0000|\uFFFD/g;function pw(t){return(typeof t=="string"?t:""+t).replace(cx,`
`).replace(dx,"")}function ac(t,e,n){if(e=pw(e),pw(t)!==e&&n)throw Error(R(425))}function md(){}var Jm=null,Zm=null;function ep(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var tp=typeof setTimeout=="function"?setTimeout:void 0,hx=typeof clearTimeout=="function"?clearTimeout:void 0,gw=typeof Promise=="function"?Promise:void 0,fx=typeof queueMicrotask=="function"?queueMicrotask:typeof gw<"u"?function(t){return gw.resolve(null).then(t).catch(mx)}:tp;function mx(t){setTimeout(function(){throw t})}function Wf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),gl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);gl(e)}function $r(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function vw(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ko=Math.random().toString(36).slice(2),Pn="__reactFiber$"+Ko,Il="__reactProps$"+Ko,ir="__reactContainer$"+Ko,np="__reactEvents$"+Ko,px="__reactListeners$"+Ko,gx="__reactHandles$"+Ko;function Mi(t){var e=t[Pn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ir]||n[Pn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=vw(t);t!==null;){if(n=t[Pn])return n;t=vw(t)}return e}t=n,n=t.parentNode}return null}function gu(t){return t=t[Pn]||t[ir],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Hs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(R(33))}function ph(t){return t[Il]||null}var rp=[],Qs=-1;function mi(t){return{current:t}}function ye(t){0>Qs||(t.current=rp[Qs],rp[Qs]=null,Qs--)}function he(t,e){Qs++,rp[Qs]=t.current,t.current=e}var Xr={},Et=mi(Xr),Ut=mi(!1),Zi=Xr;function Eo(t,e){var n=t.type.contextTypes;if(!n)return Xr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function $t(t){return t=t.childContextTypes,t!=null}function pd(){ye(Ut),ye(Et)}function yw(t,e,n){if(Et.current!==Xr)throw Error(R(168));he(Et,e),he(Ut,n)}function F1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(R(108,eC(t)||"Unknown",i));return be({},n,r)}function gd(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Xr,Zi=Et.current,he(Et,t),he(Ut,Ut.current),!0}function _w(t,e,n){var r=t.stateNode;if(!r)throw Error(R(169));n?(t=F1(t,e,Zi),r.__reactInternalMemoizedMergedChildContext=t,ye(Ut),ye(Et),he(Et,t)):ye(Ut),he(Ut,n)}var Hn=null,gh=!1,Gf=!1;function j1(t){Hn===null?Hn=[t]:Hn.push(t)}function vx(t){gh=!0,j1(t)}function pi(){if(!Gf&&Hn!==null){Gf=!0;var t=0,e=ue;try{var n=Hn;for(ue=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Hn=null,gh=!1}catch(i){throw Hn!==null&&(Hn=Hn.slice(t+1)),c1(Bg,pi),i}finally{ue=e,Gf=!1}}return null}var Ys=[],Xs=0,vd=null,yd=0,nn=[],rn=0,es=null,Qn=1,Yn="";function bi(t,e){Ys[Xs++]=yd,Ys[Xs++]=vd,vd=t,yd=e}function z1(t,e,n){nn[rn++]=Qn,nn[rn++]=Yn,nn[rn++]=es,es=t;var r=Qn;t=Yn;var i=32-yn(r)-1;r&=~(1<<i),n+=1;var s=32-yn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Qn=1<<32-yn(e)+i|n<<i|r,Yn=s+t}else Qn=1<<s|n<<i|r,Yn=t}function Jg(t){t.return!==null&&(bi(t,1),z1(t,1,0))}function Zg(t){for(;t===vd;)vd=Ys[--Xs],Ys[Xs]=null,yd=Ys[--Xs],Ys[Xs]=null;for(;t===es;)es=nn[--rn],nn[rn]=null,Yn=nn[--rn],nn[rn]=null,Qn=nn[--rn],nn[rn]=null}var Ht=null,Gt=null,we=!1,gn=null;function U1(t,e){var n=on(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ww(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ht=t,Gt=$r(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ht=t,Gt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=es!==null?{id:Qn,overflow:Yn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=on(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ht=t,Gt=null,!0):!1;default:return!1}}function ip(t){return(t.mode&1)!==0&&(t.flags&128)===0}function sp(t){if(we){var e=Gt;if(e){var n=e;if(!ww(t,e)){if(ip(t))throw Error(R(418));e=$r(n.nextSibling);var r=Ht;e&&ww(t,e)?U1(r,n):(t.flags=t.flags&-4097|2,we=!1,Ht=t)}}else{if(ip(t))throw Error(R(418));t.flags=t.flags&-4097|2,we=!1,Ht=t}}}function Iw(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ht=t}function lc(t){if(t!==Ht)return!1;if(!we)return Iw(t),we=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ep(t.type,t.memoizedProps)),e&&(e=Gt)){if(ip(t))throw $1(),Error(R(418));for(;e;)U1(t,e),e=$r(e.nextSibling)}if(Iw(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(R(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Gt=$r(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Gt=null}}else Gt=Ht?$r(t.stateNode.nextSibling):null;return!0}function $1(){for(var t=Gt;t;)t=$r(t.nextSibling)}function To(){Gt=Ht=null,we=!1}function ev(t){gn===null?gn=[t]:gn.push(t)}var yx=fr.ReactCurrentBatchConfig;function mn(t,e){if(t&&t.defaultProps){e=be({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var _d=mi(null),wd=null,Js=null,tv=null;function nv(){tv=Js=wd=null}function rv(t){var e=_d.current;ye(_d),t._currentValue=e}function op(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function co(t,e){wd=t,tv=Js=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Mt=!0),t.firstContext=null)}function cn(t){var e=t._currentValue;if(tv!==t)if(t={context:t,memoizedValue:e,next:null},Js===null){if(wd===null)throw Error(R(308));Js=t,wd.dependencies={lanes:0,firstContext:t}}else Js=Js.next=t;return e}var Fi=null;function iv(t){Fi===null?Fi=[t]:Fi.push(t)}function B1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,iv(e)):(n.next=i.next,i.next=n),e.interleaved=n,sr(t,r)}function sr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var br=!1;function sv(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function q1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function er(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Br(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,sr(t,n)}return i=r.interleaved,i===null?(e.next=e,iv(r)):(e.next=i.next,i.next=e),r.interleaved=e,sr(t,n)}function jc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qg(t,n)}}function Ew(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Id(t,e,n,r){var i=t.updateQueue;br=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,_=a;switch(h=e,m=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){d=y.call(m,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,h=typeof y=="function"?y.call(m,d,h):y,h==null)break e;d=be({},d,h);break e;case 2:br=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=d):c=c.next=m,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ns|=o,t.lanes=o,t.memoizedState=d}}function Tw(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var W1=new BE.Component().refs;function ap(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:be({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var vh={isMounted:function(t){return(t=t._reactInternals)?ws(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Pt(),i=Wr(t),s=er(r,i);s.payload=e,n!=null&&(s.callback=n),e=Br(t,s,i),e!==null&&(_n(e,t,i,r),jc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Pt(),i=Wr(t),s=er(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Br(t,s,i),e!==null&&(_n(e,t,i,r),jc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Pt(),r=Wr(t),i=er(n,r);i.tag=2,e!=null&&(i.callback=e),e=Br(t,i,r),e!==null&&(_n(e,t,r,n),jc(e,t,r))}};function Sw(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!yl(n,r)||!yl(i,s):!0}function G1(t,e,n){var r=!1,i=Xr,s=e.contextType;return typeof s=="object"&&s!==null?s=cn(s):(i=$t(e)?Zi:Et.current,r=e.contextTypes,s=(r=r!=null)?Eo(t,i):Xr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=vh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function kw(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&vh.enqueueReplaceState(e,e.state,null)}function lp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=W1,sv(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=cn(s):(s=$t(e)?Zi:Et.current,i.context=Eo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ap(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&vh.enqueueReplaceState(i,i.state,null),Id(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ya(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===W1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,t))}return t}function uc(t,e){throw t=Object.prototype.toString.call(e),Error(R(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Aw(t){var e=t._init;return e(t._payload)}function K1(t){function e(g,p){if(t){var v=g.deletions;v===null?(g.deletions=[p],g.flags|=16):v.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=Gr(g,p),g.index=0,g.sibling=null,g}function s(g,p,v){return g.index=v,t?(v=g.alternate,v!==null?(v=v.index,v<p?(g.flags|=2,p):v):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,p,v,E){return p===null||p.tag!==6?(p=Zf(v,g.mode,E),p.return=g,p):(p=i(p,v),p.return=g,p)}function l(g,p,v,E){var k=v.type;return k===qs?c(g,p,v.props.children,E,v.key):p!==null&&(p.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Pr&&Aw(k)===p.type)?(E=i(p,v.props),E.ref=ya(g,p,v),E.return=g,E):(E=Wc(v.type,v.key,v.props,null,g.mode,E),E.ref=ya(g,p,v),E.return=g,E)}function u(g,p,v,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=em(v,g.mode,E),p.return=g,p):(p=i(p,v.children||[]),p.return=g,p)}function c(g,p,v,E,k){return p===null||p.tag!==7?(p=Hi(v,g.mode,E,k),p.return=g,p):(p=i(p,v),p.return=g,p)}function d(g,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Zf(""+p,g.mode,v),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ju:return v=Wc(p.type,p.key,p.props,null,g.mode,v),v.ref=ya(g,null,p),v.return=g,v;case Bs:return p=em(p,g.mode,v),p.return=g,p;case Pr:var E=p._init;return d(g,E(p._payload),v)}if(Na(p)||fa(p))return p=Hi(p,g.mode,v,null),p.return=g,p;uc(g,p)}return null}function h(g,p,v,E){var k=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return k!==null?null:a(g,p,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ju:return v.key===k?l(g,p,v,E):null;case Bs:return v.key===k?u(g,p,v,E):null;case Pr:return k=v._init,h(g,p,k(v._payload),E)}if(Na(v)||fa(v))return k!==null?null:c(g,p,v,E,null);uc(g,v)}return null}function m(g,p,v,E,k){if(typeof E=="string"&&E!==""||typeof E=="number")return g=g.get(v)||null,a(p,g,""+E,k);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ju:return g=g.get(E.key===null?v:E.key)||null,l(p,g,E,k);case Bs:return g=g.get(E.key===null?v:E.key)||null,u(p,g,E,k);case Pr:var b=E._init;return m(g,p,v,b(E._payload),k)}if(Na(E)||fa(E))return g=g.get(v)||null,c(p,g,E,k,null);uc(p,E)}return null}function y(g,p,v,E){for(var k=null,b=null,C=p,L=p=0,X=null;C!==null&&L<v.length;L++){C.index>L?(X=C,C=null):X=C.sibling;var N=h(g,C,v[L],E);if(N===null){C===null&&(C=X);break}t&&C&&N.alternate===null&&e(g,C),p=s(N,p,L),b===null?k=N:b.sibling=N,b=N,C=X}if(L===v.length)return n(g,C),we&&bi(g,L),k;if(C===null){for(;L<v.length;L++)C=d(g,v[L],E),C!==null&&(p=s(C,p,L),b===null?k=C:b.sibling=C,b=C);return we&&bi(g,L),k}for(C=r(g,C);L<v.length;L++)X=m(C,g,L,v[L],E),X!==null&&(t&&X.alternate!==null&&C.delete(X.key===null?L:X.key),p=s(X,p,L),b===null?k=X:b.sibling=X,b=X);return t&&C.forEach(function($){return e(g,$)}),we&&bi(g,L),k}function _(g,p,v,E){var k=fa(v);if(typeof k!="function")throw Error(R(150));if(v=k.call(v),v==null)throw Error(R(151));for(var b=k=null,C=p,L=p=0,X=null,N=v.next();C!==null&&!N.done;L++,N=v.next()){C.index>L?(X=C,C=null):X=C.sibling;var $=h(g,C,N.value,E);if($===null){C===null&&(C=X);break}t&&C&&$.alternate===null&&e(g,C),p=s($,p,L),b===null?k=$:b.sibling=$,b=$,C=X}if(N.done)return n(g,C),we&&bi(g,L),k;if(C===null){for(;!N.done;L++,N=v.next())N=d(g,N.value,E),N!==null&&(p=s(N,p,L),b===null?k=N:b.sibling=N,b=N);return we&&bi(g,L),k}for(C=r(g,C);!N.done;L++,N=v.next())N=m(C,g,L,N.value,E),N!==null&&(t&&N.alternate!==null&&C.delete(N.key===null?L:N.key),p=s(N,p,L),b===null?k=N:b.sibling=N,b=N);return t&&C.forEach(function(ae){return e(g,ae)}),we&&bi(g,L),k}function w(g,p,v,E){if(typeof v=="object"&&v!==null&&v.type===qs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ju:e:{for(var k=v.key,b=p;b!==null;){if(b.key===k){if(k=v.type,k===qs){if(b.tag===7){n(g,b.sibling),p=i(b,v.props.children),p.return=g,g=p;break e}}else if(b.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Pr&&Aw(k)===b.type){n(g,b.sibling),p=i(b,v.props),p.ref=ya(g,b,v),p.return=g,g=p;break e}n(g,b);break}else e(g,b);b=b.sibling}v.type===qs?(p=Hi(v.props.children,g.mode,E,v.key),p.return=g,g=p):(E=Wc(v.type,v.key,v.props,null,g.mode,E),E.ref=ya(g,p,v),E.return=g,g=E)}return o(g);case Bs:e:{for(b=v.key;p!==null;){if(p.key===b)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(g,p.sibling),p=i(p,v.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=em(v,g.mode,E),p.return=g,g=p}return o(g);case Pr:return b=v._init,w(g,p,b(v._payload),E)}if(Na(v))return y(g,p,v,E);if(fa(v))return _(g,p,v,E);uc(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,v),p.return=g,g=p):(n(g,p),p=Zf(v,g.mode,E),p.return=g,g=p),o(g)):n(g,p)}return w}var So=K1(!0),H1=K1(!1),vu={},zn=mi(vu),El=mi(vu),Tl=mi(vu);function ji(t){if(t===vu)throw Error(R(174));return t}function ov(t,e){switch(he(Tl,e),he(El,t),he(zn,vu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:zm(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=zm(e,t)}ye(zn),he(zn,e)}function ko(){ye(zn),ye(El),ye(Tl)}function Q1(t){ji(Tl.current);var e=ji(zn.current),n=zm(e,t.type);e!==n&&(he(El,t),he(zn,n))}function av(t){El.current===t&&(ye(zn),ye(El))}var ke=mi(0);function Ed(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Kf=[];function lv(){for(var t=0;t<Kf.length;t++)Kf[t]._workInProgressVersionPrimary=null;Kf.length=0}var zc=fr.ReactCurrentDispatcher,Hf=fr.ReactCurrentBatchConfig,ts=0,Ae=null,Ge=null,Ze=null,Td=!1,Qa=!1,Sl=0,_x=0;function gt(){throw Error(R(321))}function uv(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!wn(t[n],e[n]))return!1;return!0}function cv(t,e,n,r,i,s){if(ts=s,Ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,zc.current=t===null||t.memoizedState===null?Tx:Sx,t=n(r,i),Qa){s=0;do{if(Qa=!1,Sl=0,25<=s)throw Error(R(301));s+=1,Ze=Ge=null,e.updateQueue=null,zc.current=kx,t=n(r,i)}while(Qa)}if(zc.current=Sd,e=Ge!==null&&Ge.next!==null,ts=0,Ze=Ge=Ae=null,Td=!1,e)throw Error(R(300));return t}function dv(){var t=Sl!==0;return Sl=0,t}function An(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?Ae.memoizedState=Ze=t:Ze=Ze.next=t,Ze}function dn(){if(Ge===null){var t=Ae.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var e=Ze===null?Ae.memoizedState:Ze.next;if(e!==null)Ze=e,Ge=t;else{if(t===null)throw Error(R(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},Ze===null?Ae.memoizedState=Ze=t:Ze=Ze.next=t}return Ze}function kl(t,e){return typeof e=="function"?e(t):e}function Qf(t){var e=dn(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=Ge,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ts&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Ae.lanes|=c,ns|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,wn(r,e.memoizedState)||(Mt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ae.lanes|=s,ns|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Yf(t){var e=dn(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);wn(s,e.memoizedState)||(Mt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Y1(){}function X1(t,e){var n=Ae,r=dn(),i=e(),s=!wn(r.memoizedState,i);if(s&&(r.memoizedState=i,Mt=!0),r=r.queue,hv(eT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,Al(9,Z1.bind(null,n,r,i,e),void 0,null),tt===null)throw Error(R(349));ts&30||J1(n,e,i)}return i}function J1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Z1(t,e,n,r){e.value=n,e.getSnapshot=r,tT(e)&&nT(t)}function eT(t,e,n){return n(function(){tT(e)&&nT(t)})}function tT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!wn(t,n)}catch{return!0}}function nT(t){var e=sr(t,1);e!==null&&_n(e,t,1,-1)}function Pw(t){var e=An();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:kl,lastRenderedState:t},e.queue=t,t=t.dispatch=Ex.bind(null,Ae,t),[e.memoizedState,t]}function Al(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function rT(){return dn().memoizedState}function Uc(t,e,n,r){var i=An();Ae.flags|=t,i.memoizedState=Al(1|e,n,void 0,r===void 0?null:r)}function yh(t,e,n,r){var i=dn();r=r===void 0?null:r;var s=void 0;if(Ge!==null){var o=Ge.memoizedState;if(s=o.destroy,r!==null&&uv(r,o.deps)){i.memoizedState=Al(e,n,s,r);return}}Ae.flags|=t,i.memoizedState=Al(1|e,n,s,r)}function bw(t,e){return Uc(8390656,8,t,e)}function hv(t,e){return yh(2048,8,t,e)}function iT(t,e){return yh(4,2,t,e)}function sT(t,e){return yh(4,4,t,e)}function oT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function aT(t,e,n){return n=n!=null?n.concat([t]):null,yh(4,4,oT.bind(null,e,t),n)}function fv(){}function lT(t,e){var n=dn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&uv(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function uT(t,e){var n=dn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&uv(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function cT(t,e,n){return ts&21?(wn(n,e)||(n=f1(),Ae.lanes|=n,ns|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Mt=!0),t.memoizedState=n)}function wx(t,e){var n=ue;ue=n!==0&&4>n?n:4,t(!0);var r=Hf.transition;Hf.transition={};try{t(!1),e()}finally{ue=n,Hf.transition=r}}function dT(){return dn().memoizedState}function Ix(t,e,n){var r=Wr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},hT(t))fT(e,n);else if(n=B1(t,e,n,r),n!==null){var i=Pt();_n(n,t,r,i),mT(n,e,r)}}function Ex(t,e,n){var r=Wr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(hT(t))fT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,wn(a,o)){var l=e.interleaved;l===null?(i.next=i,iv(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=B1(t,e,i,r),n!==null&&(i=Pt(),_n(n,t,r,i),mT(n,e,r))}}function hT(t){var e=t.alternate;return t===Ae||e!==null&&e===Ae}function fT(t,e){Qa=Td=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function mT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qg(t,n)}}var Sd={readContext:cn,useCallback:gt,useContext:gt,useEffect:gt,useImperativeHandle:gt,useInsertionEffect:gt,useLayoutEffect:gt,useMemo:gt,useReducer:gt,useRef:gt,useState:gt,useDebugValue:gt,useDeferredValue:gt,useTransition:gt,useMutableSource:gt,useSyncExternalStore:gt,useId:gt,unstable_isNewReconciler:!1},Tx={readContext:cn,useCallback:function(t,e){return An().memoizedState=[t,e===void 0?null:e],t},useContext:cn,useEffect:bw,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Uc(4194308,4,oT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Uc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Uc(4,2,t,e)},useMemo:function(t,e){var n=An();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=An();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Ix.bind(null,Ae,t),[r.memoizedState,t]},useRef:function(t){var e=An();return t={current:t},e.memoizedState=t},useState:Pw,useDebugValue:fv,useDeferredValue:function(t){return An().memoizedState=t},useTransition:function(){var t=Pw(!1),e=t[0];return t=wx.bind(null,t[1]),An().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ae,i=An();if(we){if(n===void 0)throw Error(R(407));n=n()}else{if(n=e(),tt===null)throw Error(R(349));ts&30||J1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,bw(eT.bind(null,r,s,t),[t]),r.flags|=2048,Al(9,Z1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=An(),e=tt.identifierPrefix;if(we){var n=Yn,r=Qn;n=(r&~(1<<32-yn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Sl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=_x++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Sx={readContext:cn,useCallback:lT,useContext:cn,useEffect:hv,useImperativeHandle:aT,useInsertionEffect:iT,useLayoutEffect:sT,useMemo:uT,useReducer:Qf,useRef:rT,useState:function(){return Qf(kl)},useDebugValue:fv,useDeferredValue:function(t){var e=dn();return cT(e,Ge.memoizedState,t)},useTransition:function(){var t=Qf(kl)[0],e=dn().memoizedState;return[t,e]},useMutableSource:Y1,useSyncExternalStore:X1,useId:dT,unstable_isNewReconciler:!1},kx={readContext:cn,useCallback:lT,useContext:cn,useEffect:hv,useImperativeHandle:aT,useInsertionEffect:iT,useLayoutEffect:sT,useMemo:uT,useReducer:Yf,useRef:rT,useState:function(){return Yf(kl)},useDebugValue:fv,useDeferredValue:function(t){var e=dn();return Ge===null?e.memoizedState=t:cT(e,Ge.memoizedState,t)},useTransition:function(){var t=Yf(kl)[0],e=dn().memoizedState;return[t,e]},useMutableSource:Y1,useSyncExternalStore:X1,useId:dT,unstable_isNewReconciler:!1};function Ao(t,e){try{var n="",r=e;do n+=ZR(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Xf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function up(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ax=typeof WeakMap=="function"?WeakMap:Map;function pT(t,e,n){n=er(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ad||(Ad=!0,_p=r),up(t,e)},n}function gT(t,e,n){n=er(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){up(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){up(t,e),typeof r!="function"&&(qr===null?qr=new Set([this]):qr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Rw(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Ax;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=zx.bind(null,t,e,n),e.then(t,t))}function Cw(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function xw(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=er(-1,1),e.tag=2,Br(n,e,1))),n.lanes|=1),t)}var Px=fr.ReactCurrentOwner,Mt=!1;function Tt(t,e,n,r){e.child=t===null?H1(e,null,n,r):So(e,t.child,n,r)}function Nw(t,e,n,r,i){n=n.render;var s=e.ref;return co(e,i),r=cv(t,e,n,r,s,i),n=dv(),t!==null&&!Mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,or(t,e,i)):(we&&n&&Jg(e),e.flags|=1,Tt(t,e,r,i),e.child)}function Dw(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Iv(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,vT(t,e,s,r,i)):(t=Wc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:yl,n(o,r)&&t.ref===e.ref)return or(t,e,i)}return e.flags|=1,t=Gr(s,r),t.ref=e.ref,t.return=e,e.child=t}function vT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(yl(s,r)&&t.ref===e.ref)if(Mt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Mt=!0);else return e.lanes=t.lanes,or(t,e,i)}return cp(t,e,n,r,i)}function yT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(eo,qt),qt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,he(eo,qt),qt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,he(eo,qt),qt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,he(eo,qt),qt|=r;return Tt(t,e,i,n),e.child}function _T(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function cp(t,e,n,r,i){var s=$t(n)?Zi:Et.current;return s=Eo(e,s),co(e,i),n=cv(t,e,n,r,s,i),r=dv(),t!==null&&!Mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,or(t,e,i)):(we&&r&&Jg(e),e.flags|=1,Tt(t,e,n,i),e.child)}function Ow(t,e,n,r,i){if($t(n)){var s=!0;gd(e)}else s=!1;if(co(e,i),e.stateNode===null)$c(t,e),G1(e,n,r),lp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=cn(u):(u=$t(n)?Zi:Et.current,u=Eo(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&kw(e,o,r,u),br=!1;var h=e.memoizedState;o.state=h,Id(e,r,o,i),l=e.memoizedState,a!==r||h!==l||Ut.current||br?(typeof c=="function"&&(ap(e,n,c,r),l=e.memoizedState),(a=br||Sw(e,n,a,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,q1(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:mn(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=cn(l):(l=$t(n)?Zi:Et.current,l=Eo(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&kw(e,o,r,l),br=!1,h=e.memoizedState,o.state=h,Id(e,r,o,i);var y=e.memoizedState;a!==d||h!==y||Ut.current||br?(typeof m=="function"&&(ap(e,n,m,r),y=e.memoizedState),(u=br||Sw(e,n,u,r,h,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return dp(t,e,n,r,s,i)}function dp(t,e,n,r,i,s){_T(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&_w(e,n,!1),or(t,e,s);r=e.stateNode,Px.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=So(e,t.child,null,s),e.child=So(e,null,a,s)):Tt(t,e,a,s),e.memoizedState=r.state,i&&_w(e,n,!0),e.child}function wT(t){var e=t.stateNode;e.pendingContext?yw(t,e.pendingContext,e.pendingContext!==e.context):e.context&&yw(t,e.context,!1),ov(t,e.containerInfo)}function Vw(t,e,n,r,i){return To(),ev(i),e.flags|=256,Tt(t,e,n,r),e.child}var hp={dehydrated:null,treeContext:null,retryLane:0};function fp(t){return{baseLanes:t,cachePool:null,transitions:null}}function IT(t,e,n){var r=e.pendingProps,i=ke.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),he(ke,i&1),t===null)return sp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ih(o,r,0,null),t=Hi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=fp(n),e.memoizedState=hp,t):mv(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return bx(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Gr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Gr(a,s):(s=Hi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?fp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=hp,r}return s=t.child,t=s.sibling,r=Gr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function mv(t,e){return e=Ih({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function cc(t,e,n,r){return r!==null&&ev(r),So(e,t.child,null,n),t=mv(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function bx(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Xf(Error(R(422))),cc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ih({mode:"visible",children:r.children},i,0,null),s=Hi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&So(e,t.child,null,o),e.child.memoizedState=fp(o),e.memoizedState=hp,s);if(!(e.mode&1))return cc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(R(419)),r=Xf(s,r,void 0),cc(t,e,o,r)}if(a=(o&t.childLanes)!==0,Mt||a){if(r=tt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,sr(t,i),_n(r,t,i,-1))}return wv(),r=Xf(Error(R(421))),cc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Ux.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Gt=$r(i.nextSibling),Ht=e,we=!0,gn=null,t!==null&&(nn[rn++]=Qn,nn[rn++]=Yn,nn[rn++]=es,Qn=t.id,Yn=t.overflow,es=e),e=mv(e,r.children),e.flags|=4096,e)}function Lw(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),op(t.return,e,n)}function Jf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function ET(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Tt(t,e,r.children,n),r=ke.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lw(t,n,e);else if(t.tag===19)Lw(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(he(ke,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ed(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Jf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ed(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Jf(e,!0,n,null,s);break;case"together":Jf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function $c(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function or(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ns|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(R(153));if(e.child!==null){for(t=e.child,n=Gr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Gr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Rx(t,e,n){switch(e.tag){case 3:wT(e),To();break;case 5:Q1(e);break;case 1:$t(e.type)&&gd(e);break;case 4:ov(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;he(_d,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(he(ke,ke.current&1),e.flags|=128,null):n&e.child.childLanes?IT(t,e,n):(he(ke,ke.current&1),t=or(t,e,n),t!==null?t.sibling:null);he(ke,ke.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return ET(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(ke,ke.current),r)break;return null;case 22:case 23:return e.lanes=0,yT(t,e,n)}return or(t,e,n)}var TT,mp,ST,kT;TT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};mp=function(){};ST=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ji(zn.current);var s=null;switch(n){case"input":i=Lm(t,i),r=Lm(t,r),s=[];break;case"select":i=be({},i,{value:void 0}),r=be({},r,{value:void 0}),s=[];break;case"textarea":i=jm(t,i),r=jm(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=md)}Um(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(dl.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(dl.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&me("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};kT=function(t,e,n,r){n!==r&&(e.flags|=4)};function _a(t,e){if(!we)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Cx(t,e,n){var r=e.pendingProps;switch(Zg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vt(e),null;case 1:return $t(e.type)&&pd(),vt(e),null;case 3:return r=e.stateNode,ko(),ye(Ut),ye(Et),lv(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(lc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,gn!==null&&(Ep(gn),gn=null))),mp(t,e),vt(e),null;case 5:av(e);var i=ji(Tl.current);if(n=e.type,t!==null&&e.stateNode!=null)ST(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(R(166));return vt(e),null}if(t=ji(zn.current),lc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Pn]=e,r[Il]=s,t=(e.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<Oa.length;i++)me(Oa[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":W_(r,s),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},me("invalid",r);break;case"textarea":K_(r,s),me("invalid",r)}Um(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ac(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ac(r.textContent,a,t),i=["children",""+a]):dl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&me("scroll",r)}switch(n){case"input":Zu(r),G_(r,s,!0);break;case"textarea":Zu(r),H_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=md)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=JE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Pn]=e,t[Il]=r,TT(t,e,!1,!1),e.stateNode=t;e:{switch(o=$m(n,r),n){case"dialog":me("cancel",t),me("close",t),i=r;break;case"iframe":case"object":case"embed":me("load",t),i=r;break;case"video":case"audio":for(i=0;i<Oa.length;i++)me(Oa[i],t);i=r;break;case"source":me("error",t),i=r;break;case"img":case"image":case"link":me("error",t),me("load",t),i=r;break;case"details":me("toggle",t),i=r;break;case"input":W_(t,r),i=Lm(t,r),me("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=be({},r,{value:void 0}),me("invalid",t);break;case"textarea":K_(t,r),i=jm(t,r),me("invalid",t);break;default:i=r}Um(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?t1(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ZE(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&hl(t,l):typeof l=="number"&&hl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(dl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&me("scroll",t):l!=null&&Fg(t,s,l,o))}switch(n){case"input":Zu(t),G_(t,r,!1);break;case"textarea":Zu(t),H_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Yr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?oo(t,!!r.multiple,s,!1):r.defaultValue!=null&&oo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=md)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return vt(e),null;case 6:if(t&&e.stateNode!=null)kT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(R(166));if(n=ji(Tl.current),ji(zn.current),lc(e)){if(r=e.stateNode,n=e.memoizedProps,r[Pn]=e,(s=r.nodeValue!==n)&&(t=Ht,t!==null))switch(t.tag){case 3:ac(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ac(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pn]=e,e.stateNode=r}return vt(e),null;case 13:if(ye(ke),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(we&&Gt!==null&&e.mode&1&&!(e.flags&128))$1(),To(),e.flags|=98560,s=!1;else if(s=lc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(R(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(R(317));s[Pn]=e}else To(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;vt(e),s=!1}else gn!==null&&(Ep(gn),gn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ke.current&1?Ke===0&&(Ke=3):wv())),e.updateQueue!==null&&(e.flags|=4),vt(e),null);case 4:return ko(),mp(t,e),t===null&&_l(e.stateNode.containerInfo),vt(e),null;case 10:return rv(e.type._context),vt(e),null;case 17:return $t(e.type)&&pd(),vt(e),null;case 19:if(ye(ke),s=e.memoizedState,s===null)return vt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)_a(s,!1);else{if(Ke!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ed(t),o!==null){for(e.flags|=128,_a(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return he(ke,ke.current&1|2),e.child}t=t.sibling}s.tail!==null&&Fe()>Po&&(e.flags|=128,r=!0,_a(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ed(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),_a(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!we)return vt(e),null}else 2*Fe()-s.renderingStartTime>Po&&n!==1073741824&&(e.flags|=128,r=!0,_a(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Fe(),e.sibling=null,n=ke.current,he(ke,r?n&1|2:n&1),e):(vt(e),null);case 22:case 23:return _v(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?qt&1073741824&&(vt(e),e.subtreeFlags&6&&(e.flags|=8192)):vt(e),null;case 24:return null;case 25:return null}throw Error(R(156,e.tag))}function xx(t,e){switch(Zg(e),e.tag){case 1:return $t(e.type)&&pd(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ko(),ye(Ut),ye(Et),lv(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return av(e),null;case 13:if(ye(ke),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(R(340));To()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ye(ke),null;case 4:return ko(),null;case 10:return rv(e.type._context),null;case 22:case 23:return _v(),null;case 24:return null;default:return null}}var dc=!1,_t=!1,Nx=typeof WeakSet=="function"?WeakSet:Set,j=null;function Zs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(t,e,r)}else n.current=null}function pp(t,e,n){try{n()}catch(r){Re(t,e,r)}}var Mw=!1;function Dx(t,e){if(Jm=dd,t=R1(),Xg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zm={focusedElem:t,selectionRange:n},dd=!1,j=e;j!==null;)if(e=j,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,j=t;else for(;j!==null;){e=j;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,w=y.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?_:mn(e.type,_),w);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(E){Re(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,j=t;break}j=e.return}return y=Mw,Mw=!1,y}function Ya(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&pp(e,n,s)}i=i.next}while(i!==r)}}function _h(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function gp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function AT(t){var e=t.alternate;e!==null&&(t.alternate=null,AT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Pn],delete e[Il],delete e[np],delete e[px],delete e[gx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function PT(t){return t.tag===5||t.tag===3||t.tag===4}function Fw(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||PT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function vp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=md));else if(r!==4&&(t=t.child,t!==null))for(vp(t,e,n),t=t.sibling;t!==null;)vp(t,e,n),t=t.sibling}function yp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(yp(t,e,n),t=t.sibling;t!==null;)yp(t,e,n),t=t.sibling}var at=null,pn=!1;function Ir(t,e,n){for(n=n.child;n!==null;)bT(t,e,n),n=n.sibling}function bT(t,e,n){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(dh,n)}catch{}switch(n.tag){case 5:_t||Zs(n,e);case 6:var r=at,i=pn;at=null,Ir(t,e,n),at=r,pn=i,at!==null&&(pn?(t=at,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):at.removeChild(n.stateNode));break;case 18:at!==null&&(pn?(t=at,n=n.stateNode,t.nodeType===8?Wf(t.parentNode,n):t.nodeType===1&&Wf(t,n),gl(t)):Wf(at,n.stateNode));break;case 4:r=at,i=pn,at=n.stateNode.containerInfo,pn=!0,Ir(t,e,n),at=r,pn=i;break;case 0:case 11:case 14:case 15:if(!_t&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&pp(n,e,o),i=i.next}while(i!==r)}Ir(t,e,n);break;case 1:if(!_t&&(Zs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Re(n,e,a)}Ir(t,e,n);break;case 21:Ir(t,e,n);break;case 22:n.mode&1?(_t=(r=_t)||n.memoizedState!==null,Ir(t,e,n),_t=r):Ir(t,e,n);break;default:Ir(t,e,n)}}function jw(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Nx),e.forEach(function(r){var i=$x.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function fn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:at=a.stateNode,pn=!1;break e;case 3:at=a.stateNode.containerInfo,pn=!0;break e;case 4:at=a.stateNode.containerInfo,pn=!0;break e}a=a.return}if(at===null)throw Error(R(160));bT(s,o,i),at=null,pn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Re(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)RT(e,t),e=e.sibling}function RT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(fn(e,t),Sn(t),r&4){try{Ya(3,t,t.return),_h(3,t)}catch(_){Re(t,t.return,_)}try{Ya(5,t,t.return)}catch(_){Re(t,t.return,_)}}break;case 1:fn(e,t),Sn(t),r&512&&n!==null&&Zs(n,n.return);break;case 5:if(fn(e,t),Sn(t),r&512&&n!==null&&Zs(n,n.return),t.flags&32){var i=t.stateNode;try{hl(i,"")}catch(_){Re(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&YE(i,s),$m(a,o);var u=$m(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?t1(i,d):c==="dangerouslySetInnerHTML"?ZE(i,d):c==="children"?hl(i,d):Fg(i,c,d,u)}switch(a){case"input":Mm(i,s);break;case"textarea":XE(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?oo(i,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?oo(i,!!s.multiple,s.defaultValue,!0):oo(i,!!s.multiple,s.multiple?[]:"",!1))}i[Il]=s}catch(_){Re(t,t.return,_)}}break;case 6:if(fn(e,t),Sn(t),r&4){if(t.stateNode===null)throw Error(R(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){Re(t,t.return,_)}}break;case 3:if(fn(e,t),Sn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{gl(e.containerInfo)}catch(_){Re(t,t.return,_)}break;case 4:fn(e,t),Sn(t);break;case 13:fn(e,t),Sn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(vv=Fe())),r&4&&jw(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(_t=(u=_t)||c,fn(e,t),_t=u):fn(e,t),Sn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(j=t,c=t.child;c!==null;){for(d=j=c;j!==null;){switch(h=j,m=h.child,h.tag){case 0:case 11:case 14:case 15:Ya(4,h,h.return);break;case 1:Zs(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){Re(r,n,_)}}break;case 5:Zs(h,h.return);break;case 22:if(h.memoizedState!==null){Uw(d);continue}}m!==null?(m.return=h,j=m):Uw(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=e1("display",o))}catch(_){Re(t,t.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){Re(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:fn(e,t),Sn(t),r&4&&jw(t);break;case 21:break;default:fn(e,t),Sn(t)}}function Sn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(PT(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(hl(i,""),r.flags&=-33);var s=Fw(t);yp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Fw(t);vp(t,a,o);break;default:throw Error(R(161))}}catch(l){Re(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ox(t,e,n){j=t,CT(t)}function CT(t,e,n){for(var r=(t.mode&1)!==0;j!==null;){var i=j,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||dc;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||_t;a=dc;var u=_t;if(dc=o,(_t=l)&&!u)for(j=i;j!==null;)o=j,l=o.child,o.tag===22&&o.memoizedState!==null?$w(i):l!==null?(l.return=o,j=l):$w(i);for(;s!==null;)j=s,CT(s),s=s.sibling;j=i,dc=a,_t=u}zw(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,j=s):zw(t)}}function zw(t){for(;j!==null;){var e=j;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:_t||_h(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!_t)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:mn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Tw(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Tw(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&gl(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}_t||e.flags&512&&gp(e)}catch(h){Re(e,e.return,h)}}if(e===t){j=null;break}if(n=e.sibling,n!==null){n.return=e.return,j=n;break}j=e.return}}function Uw(t){for(;j!==null;){var e=j;if(e===t){j=null;break}var n=e.sibling;if(n!==null){n.return=e.return,j=n;break}j=e.return}}function $w(t){for(;j!==null;){var e=j;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{_h(4,e)}catch(l){Re(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Re(e,i,l)}}var s=e.return;try{gp(e)}catch(l){Re(e,s,l)}break;case 5:var o=e.return;try{gp(e)}catch(l){Re(e,o,l)}}}catch(l){Re(e,e.return,l)}if(e===t){j=null;break}var a=e.sibling;if(a!==null){a.return=e.return,j=a;break}j=e.return}}var Vx=Math.ceil,kd=fr.ReactCurrentDispatcher,pv=fr.ReactCurrentOwner,un=fr.ReactCurrentBatchConfig,se=0,tt=null,Be=null,dt=0,qt=0,eo=mi(0),Ke=0,Pl=null,ns=0,wh=0,gv=0,Xa=null,Lt=null,vv=0,Po=1/0,Kn=null,Ad=!1,_p=null,qr=null,hc=!1,Or=null,Pd=0,Ja=0,wp=null,Bc=-1,qc=0;function Pt(){return se&6?Fe():Bc!==-1?Bc:Bc=Fe()}function Wr(t){return t.mode&1?se&2&&dt!==0?dt&-dt:yx.transition!==null?(qc===0&&(qc=f1()),qc):(t=ue,t!==0||(t=window.event,t=t===void 0?16:w1(t.type)),t):1}function _n(t,e,n,r){if(50<Ja)throw Ja=0,wp=null,Error(R(185));mu(t,n,r),(!(se&2)||t!==tt)&&(t===tt&&(!(se&2)&&(wh|=n),Ke===4&&Cr(t,dt)),Bt(t,r),n===1&&se===0&&!(e.mode&1)&&(Po=Fe()+500,gh&&pi()))}function Bt(t,e){var n=t.callbackNode;yC(t,e);var r=cd(t,t===tt?dt:0);if(r===0)n!==null&&X_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&X_(n),e===1)t.tag===0?vx(Bw.bind(null,t)):j1(Bw.bind(null,t)),fx(function(){!(se&6)&&pi()}),n=null;else{switch(m1(r)){case 1:n=Bg;break;case 4:n=d1;break;case 16:n=ud;break;case 536870912:n=h1;break;default:n=ud}n=FT(n,xT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function xT(t,e){if(Bc=-1,qc=0,se&6)throw Error(R(327));var n=t.callbackNode;if(ho()&&t.callbackNode!==n)return null;var r=cd(t,t===tt?dt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=bd(t,r);else{e=r;var i=se;se|=2;var s=DT();(tt!==t||dt!==e)&&(Kn=null,Po=Fe()+500,Ki(t,e));do try{Fx();break}catch(a){NT(t,a)}while(!0);nv(),kd.current=s,se=i,Be!==null?e=0:(tt=null,dt=0,e=Ke)}if(e!==0){if(e===2&&(i=Km(t),i!==0&&(r=i,e=Ip(t,i))),e===1)throw n=Pl,Ki(t,0),Cr(t,r),Bt(t,Fe()),n;if(e===6)Cr(t,r);else{if(i=t.current.alternate,!(r&30)&&!Lx(i)&&(e=bd(t,r),e===2&&(s=Km(t),s!==0&&(r=s,e=Ip(t,s))),e===1))throw n=Pl,Ki(t,0),Cr(t,r),Bt(t,Fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(R(345));case 2:Ri(t,Lt,Kn);break;case 3:if(Cr(t,r),(r&130023424)===r&&(e=vv+500-Fe(),10<e)){if(cd(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Pt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=tp(Ri.bind(null,t,Lt,Kn),e);break}Ri(t,Lt,Kn);break;case 4:if(Cr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-yn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Vx(r/1960))-r,10<r){t.timeoutHandle=tp(Ri.bind(null,t,Lt,Kn),r);break}Ri(t,Lt,Kn);break;case 5:Ri(t,Lt,Kn);break;default:throw Error(R(329))}}}return Bt(t,Fe()),t.callbackNode===n?xT.bind(null,t):null}function Ip(t,e){var n=Xa;return t.current.memoizedState.isDehydrated&&(Ki(t,e).flags|=256),t=bd(t,e),t!==2&&(e=Lt,Lt=n,e!==null&&Ep(e)),t}function Ep(t){Lt===null?Lt=t:Lt.push.apply(Lt,t)}function Lx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!wn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Cr(t,e){for(e&=~gv,e&=~wh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-yn(e),r=1<<n;t[n]=-1,e&=~r}}function Bw(t){if(se&6)throw Error(R(327));ho();var e=cd(t,0);if(!(e&1))return Bt(t,Fe()),null;var n=bd(t,e);if(t.tag!==0&&n===2){var r=Km(t);r!==0&&(e=r,n=Ip(t,r))}if(n===1)throw n=Pl,Ki(t,0),Cr(t,e),Bt(t,Fe()),n;if(n===6)throw Error(R(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ri(t,Lt,Kn),Bt(t,Fe()),null}function yv(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(Po=Fe()+500,gh&&pi())}}function rs(t){Or!==null&&Or.tag===0&&!(se&6)&&ho();var e=se;se|=1;var n=un.transition,r=ue;try{if(un.transition=null,ue=1,t)return t()}finally{ue=r,un.transition=n,se=e,!(se&6)&&pi()}}function _v(){qt=eo.current,ye(eo)}function Ki(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,hx(n)),Be!==null)for(n=Be.return;n!==null;){var r=n;switch(Zg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pd();break;case 3:ko(),ye(Ut),ye(Et),lv();break;case 5:av(r);break;case 4:ko();break;case 13:ye(ke);break;case 19:ye(ke);break;case 10:rv(r.type._context);break;case 22:case 23:_v()}n=n.return}if(tt=t,Be=t=Gr(t.current,null),dt=qt=e,Ke=0,Pl=null,gv=wh=ns=0,Lt=Xa=null,Fi!==null){for(e=0;e<Fi.length;e++)if(n=Fi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Fi=null}return t}function NT(t,e){do{var n=Be;try{if(nv(),zc.current=Sd,Td){for(var r=Ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Td=!1}if(ts=0,Ze=Ge=Ae=null,Qa=!1,Sl=0,pv.current=null,n===null||n.return===null){Ke=1,Pl=e,Be=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=dt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Cw(o);if(m!==null){m.flags&=-257,xw(m,o,a,s,e),m.mode&1&&Rw(s,u,e),e=m,l=u;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){Rw(s,u,e),wv();break e}l=Error(R(426))}}else if(we&&a.mode&1){var w=Cw(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),xw(w,o,a,s,e),ev(Ao(l,a));break e}}s=l=Ao(l,a),Ke!==4&&(Ke=2),Xa===null?Xa=[s]:Xa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=pT(s,l,e);Ew(s,g);break e;case 1:a=l;var p=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(qr===null||!qr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=gT(s,a,e);Ew(s,E);break e}}s=s.return}while(s!==null)}VT(n)}catch(k){e=k,Be===n&&n!==null&&(Be=n=n.return);continue}break}while(!0)}function DT(){var t=kd.current;return kd.current=Sd,t===null?Sd:t}function wv(){(Ke===0||Ke===3||Ke===2)&&(Ke=4),tt===null||!(ns&268435455)&&!(wh&268435455)||Cr(tt,dt)}function bd(t,e){var n=se;se|=2;var r=DT();(tt!==t||dt!==e)&&(Kn=null,Ki(t,e));do try{Mx();break}catch(i){NT(t,i)}while(!0);if(nv(),se=n,kd.current=r,Be!==null)throw Error(R(261));return tt=null,dt=0,Ke}function Mx(){for(;Be!==null;)OT(Be)}function Fx(){for(;Be!==null&&!uC();)OT(Be)}function OT(t){var e=MT(t.alternate,t,qt);t.memoizedProps=t.pendingProps,e===null?VT(t):Be=e,pv.current=null}function VT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=xx(n,e),n!==null){n.flags&=32767,Be=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ke=6,Be=null;return}}else if(n=Cx(n,e,qt),n!==null){Be=n;return}if(e=e.sibling,e!==null){Be=e;return}Be=e=t}while(e!==null);Ke===0&&(Ke=5)}function Ri(t,e,n){var r=ue,i=un.transition;try{un.transition=null,ue=1,jx(t,e,n,r)}finally{un.transition=i,ue=r}return null}function jx(t,e,n,r){do ho();while(Or!==null);if(se&6)throw Error(R(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(R(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(_C(t,s),t===tt&&(Be=tt=null,dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hc||(hc=!0,FT(ud,function(){return ho(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=un.transition,un.transition=null;var o=ue;ue=1;var a=se;se|=4,pv.current=null,Dx(t,n),RT(n,t),sx(Zm),dd=!!Jm,Zm=Jm=null,t.current=n,Ox(n),cC(),se=a,ue=o,un.transition=s}else t.current=n;if(hc&&(hc=!1,Or=t,Pd=i),s=t.pendingLanes,s===0&&(qr=null),fC(n.stateNode),Bt(t,Fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ad)throw Ad=!1,t=_p,_p=null,t;return Pd&1&&t.tag!==0&&ho(),s=t.pendingLanes,s&1?t===wp?Ja++:(Ja=0,wp=t):Ja=0,pi(),null}function ho(){if(Or!==null){var t=m1(Pd),e=un.transition,n=ue;try{if(un.transition=null,ue=16>t?16:t,Or===null)var r=!1;else{if(t=Or,Or=null,Pd=0,se&6)throw Error(R(331));var i=se;for(se|=4,j=t.current;j!==null;){var s=j,o=s.child;if(j.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(j=u;j!==null;){var c=j;switch(c.tag){case 0:case 11:case 15:Ya(8,c,s)}var d=c.child;if(d!==null)d.return=c,j=d;else for(;j!==null;){c=j;var h=c.sibling,m=c.return;if(AT(c),c===u){j=null;break}if(h!==null){h.return=m,j=h;break}j=m}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var w=_.sibling;_.sibling=null,_=w}while(_!==null)}}j=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,j=o;else e:for(;j!==null;){if(s=j,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ya(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,j=g;break e}j=s.return}}var p=t.current;for(j=p;j!==null;){o=j;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,j=v;else e:for(o=p;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:_h(9,a)}}catch(k){Re(a,a.return,k)}if(a===o){j=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,j=E;break e}j=a.return}}if(se=i,pi(),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(dh,t)}catch{}r=!0}return r}finally{ue=n,un.transition=e}}return!1}function qw(t,e,n){e=Ao(n,e),e=pT(t,e,1),t=Br(t,e,1),e=Pt(),t!==null&&(mu(t,1,e),Bt(t,e))}function Re(t,e,n){if(t.tag===3)qw(t,t,n);else for(;e!==null;){if(e.tag===3){qw(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qr===null||!qr.has(r))){t=Ao(n,t),t=gT(e,t,1),e=Br(e,t,1),t=Pt(),e!==null&&(mu(e,1,t),Bt(e,t));break}}e=e.return}}function zx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Pt(),t.pingedLanes|=t.suspendedLanes&n,tt===t&&(dt&n)===n&&(Ke===4||Ke===3&&(dt&130023424)===dt&&500>Fe()-vv?Ki(t,0):gv|=n),Bt(t,e)}function LT(t,e){e===0&&(t.mode&1?(e=nc,nc<<=1,!(nc&130023424)&&(nc=4194304)):e=1);var n=Pt();t=sr(t,e),t!==null&&(mu(t,e,n),Bt(t,n))}function Ux(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),LT(t,n)}function $x(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(e),LT(t,n)}var MT;MT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ut.current)Mt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Mt=!1,Rx(t,e,n);Mt=!!(t.flags&131072)}else Mt=!1,we&&e.flags&1048576&&z1(e,yd,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;$c(t,e),t=e.pendingProps;var i=Eo(e,Et.current);co(e,n),i=cv(null,e,r,t,i,n);var s=dv();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,$t(r)?(s=!0,gd(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,sv(e),i.updater=vh,e.stateNode=i,i._reactInternals=e,lp(e,r,t,n),e=dp(null,e,r,!0,s,n)):(e.tag=0,we&&s&&Jg(e),Tt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch($c(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=qx(r),t=mn(r,t),i){case 0:e=cp(null,e,r,t,n);break e;case 1:e=Ow(null,e,r,t,n);break e;case 11:e=Nw(null,e,r,t,n);break e;case 14:e=Dw(null,e,r,mn(r.type,t),n);break e}throw Error(R(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),cp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),Ow(t,e,r,i,n);case 3:e:{if(wT(e),t===null)throw Error(R(387));r=e.pendingProps,s=e.memoizedState,i=s.element,q1(t,e),Id(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ao(Error(R(423)),e),e=Vw(t,e,r,n,i);break e}else if(r!==i){i=Ao(Error(R(424)),e),e=Vw(t,e,r,n,i);break e}else for(Gt=$r(e.stateNode.containerInfo.firstChild),Ht=e,we=!0,gn=null,n=H1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(To(),r===i){e=or(t,e,n);break e}Tt(t,e,r,n)}e=e.child}return e;case 5:return Q1(e),t===null&&sp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ep(r,i)?o=null:s!==null&&ep(r,s)&&(e.flags|=32),_T(t,e),Tt(t,e,o,n),e.child;case 6:return t===null&&sp(e),null;case 13:return IT(t,e,n);case 4:return ov(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=So(e,null,r,n):Tt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),Nw(t,e,r,i,n);case 7:return Tt(t,e,e.pendingProps,n),e.child;case 8:return Tt(t,e,e.pendingProps.children,n),e.child;case 12:return Tt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,he(_d,r._currentValue),r._currentValue=o,s!==null)if(wn(s.value,o)){if(s.children===i.children&&!Ut.current){e=or(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=er(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),op(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(R(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),op(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Tt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,co(e,n),i=cn(i),r=r(i),e.flags|=1,Tt(t,e,r,n),e.child;case 14:return r=e.type,i=mn(r,e.pendingProps),i=mn(r.type,i),Dw(t,e,r,i,n);case 15:return vT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),$c(t,e),e.tag=1,$t(r)?(t=!0,gd(e)):t=!1,co(e,n),G1(e,r,i),lp(e,r,i,n),dp(null,e,r,!0,t,n);case 19:return ET(t,e,n);case 22:return yT(t,e,n)}throw Error(R(156,e.tag))};function FT(t,e){return c1(t,e)}function Bx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function on(t,e,n,r){return new Bx(t,e,n,r)}function Iv(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qx(t){if(typeof t=="function")return Iv(t)?1:0;if(t!=null){if(t=t.$$typeof,t===zg)return 11;if(t===Ug)return 14}return 2}function Gr(t,e){var n=t.alternate;return n===null?(n=on(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Wc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Iv(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case qs:return Hi(n.children,i,s,e);case jg:o=8,i|=8;break;case Nm:return t=on(12,n,e,i|2),t.elementType=Nm,t.lanes=s,t;case Dm:return t=on(13,n,e,i),t.elementType=Dm,t.lanes=s,t;case Om:return t=on(19,n,e,i),t.elementType=Om,t.lanes=s,t;case KE:return Ih(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case WE:o=10;break e;case GE:o=9;break e;case zg:o=11;break e;case Ug:o=14;break e;case Pr:o=16,r=null;break e}throw Error(R(130,t==null?t:typeof t,""))}return e=on(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Hi(t,e,n,r){return t=on(7,t,r,e),t.lanes=n,t}function Ih(t,e,n,r){return t=on(22,t,r,e),t.elementType=KE,t.lanes=n,t.stateNode={isHidden:!1},t}function Zf(t,e,n){return t=on(6,t,null,e),t.lanes=n,t}function em(t,e,n){return e=on(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Wx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Of(0),this.expirationTimes=Of(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Of(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ev(t,e,n,r,i,s,o,a,l){return t=new Wx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=on(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sv(s),t}function Gx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function jT(t){if(!t)return Xr;t=t._reactInternals;e:{if(ws(t)!==t||t.tag!==1)throw Error(R(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if($t(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(R(171))}if(t.tag===1){var n=t.type;if($t(n))return F1(t,n,e)}return e}function zT(t,e,n,r,i,s,o,a,l){return t=Ev(n,r,!0,t,i,s,o,a,l),t.context=jT(null),n=t.current,r=Pt(),i=Wr(n),s=er(r,i),s.callback=e??null,Br(n,s,i),t.current.lanes=i,mu(t,i,r),Bt(t,r),t}function Eh(t,e,n,r){var i=e.current,s=Pt(),o=Wr(i);return n=jT(n),e.context===null?e.context=n:e.pendingContext=n,e=er(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Br(i,e,o),t!==null&&(_n(t,i,o,s),jc(t,i,o)),o}function Rd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ww(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Tv(t,e){Ww(t,e),(t=t.alternate)&&Ww(t,e)}function Kx(){return null}var UT=typeof reportError=="function"?reportError:function(t){console.error(t)};function Sv(t){this._internalRoot=t}Th.prototype.render=Sv.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(R(409));Eh(t,e,null,null)};Th.prototype.unmount=Sv.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;rs(function(){Eh(null,t,null,null)}),e[ir]=null}};function Th(t){this._internalRoot=t}Th.prototype.unstable_scheduleHydration=function(t){if(t){var e=v1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Rr.length&&e!==0&&e<Rr[n].priority;n++);Rr.splice(n,0,t),n===0&&_1(t)}};function kv(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Sh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Gw(){}function Hx(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Rd(o);s.call(u)}}var o=zT(e,r,t,0,null,!1,!1,"",Gw);return t._reactRootContainer=o,t[ir]=o.current,_l(t.nodeType===8?t.parentNode:t),rs(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Rd(l);a.call(u)}}var l=Ev(t,0,!1,null,null,!1,!1,"",Gw);return t._reactRootContainer=l,t[ir]=l.current,_l(t.nodeType===8?t.parentNode:t),rs(function(){Eh(e,l,n,r)}),l}function kh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Rd(o);a.call(l)}}Eh(e,o,t,i)}else o=Hx(n,e,t,i,r);return Rd(o)}p1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Da(e.pendingLanes);n!==0&&(qg(e,n|1),Bt(e,Fe()),!(se&6)&&(Po=Fe()+500,pi()))}break;case 13:rs(function(){var r=sr(t,1);if(r!==null){var i=Pt();_n(r,t,1,i)}}),Tv(t,1)}};Wg=function(t){if(t.tag===13){var e=sr(t,134217728);if(e!==null){var n=Pt();_n(e,t,134217728,n)}Tv(t,134217728)}};g1=function(t){if(t.tag===13){var e=Wr(t),n=sr(t,e);if(n!==null){var r=Pt();_n(n,t,e,r)}Tv(t,e)}};v1=function(){return ue};y1=function(t,e){var n=ue;try{return ue=t,e()}finally{ue=n}};qm=function(t,e,n){switch(e){case"input":if(Mm(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ph(r);if(!i)throw Error(R(90));QE(r),Mm(r,i)}}}break;case"textarea":XE(t,n);break;case"select":e=n.value,e!=null&&oo(t,!!n.multiple,e,!1)}};i1=yv;s1=rs;var Qx={usingClientEntryPoint:!1,Events:[gu,Hs,ph,n1,r1,yv]},wa={findFiberByHostInstance:Mi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Yx={bundleType:wa.bundleType,version:wa.version,rendererPackageName:wa.rendererPackageName,rendererConfig:wa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=l1(t),t===null?null:t.stateNode},findFiberByHostInstance:wa.findFiberByHostInstance||Kx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fc.isDisabled&&fc.supportsFiber)try{dh=fc.inject(Yx),jn=fc}catch{}}Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qx;Jt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kv(e))throw Error(R(200));return Gx(t,e,null,n)};Jt.createRoot=function(t,e){if(!kv(t))throw Error(R(299));var n=!1,r="",i=UT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ev(t,1,!1,null,null,n,!1,r,i),t[ir]=e.current,_l(t.nodeType===8?t.parentNode:t),new Sv(e)};Jt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(R(188)):(t=Object.keys(t).join(","),Error(R(268,t)));return t=l1(e),t=t===null?null:t.stateNode,t};Jt.flushSync=function(t){return rs(t)};Jt.hydrate=function(t,e,n){if(!Sh(e))throw Error(R(200));return kh(null,t,e,!0,n)};Jt.hydrateRoot=function(t,e,n){if(!kv(t))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=UT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=zT(e,null,t,1,n??null,i,!1,s,o),t[ir]=e.current,_l(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Th(e)};Jt.render=function(t,e,n){if(!Sh(e))throw Error(R(200));return kh(null,t,e,!1,n)};Jt.unmountComponentAtNode=function(t){if(!Sh(t))throw Error(R(40));return t._reactRootContainer?(rs(function(){kh(null,null,t,!1,function(){t._reactRootContainer=null,t[ir]=null})}),!0):!1};Jt.unstable_batchedUpdates=yv;Jt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Sh(n))throw Error(R(200));if(t==null||t._reactInternals===void 0)throw Error(R(38));return kh(t,e,n,!1,r)};Jt.version="18.2.0-next-9e3b772b8-20220608";function $T(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($T)}catch(t){console.error(t)}}$T(),zE.exports=Jt;var Xx=zE.exports,Kw=Xx;Cm.createRoot=Kw.createRoot,Cm.hydrateRoot=Kw.hydrateRoot;/**
 * @remix-run/router v1.15.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bl(){return bl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},bl.apply(this,arguments)}var Vr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Vr||(Vr={}));const Hw="popstate";function Jx(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Tp("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Cd(i)}return eN(e,n,null,t)}function qe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function BT(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Zx(){return Math.random().toString(36).substr(2,8)}function Qw(t,e){return{usr:t.state,key:t.key,idx:e}}function Tp(t,e,n,r){return n===void 0&&(n=null),bl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ho(e):e,{state:n,key:e&&e.key||r||Zx()})}function Cd(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ho(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function eN(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Vr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(bl({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=Vr.Pop;let w=c(),g=w==null?null:w-u;u=w,l&&l({action:a,location:_.location,delta:g})}function h(w,g){a=Vr.Push;let p=Tp(_.location,w,g);n&&n(p,w),u=c()+1;let v=Qw(p,u),E=_.createHref(p);try{o.pushState(v,"",E)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(E)}s&&l&&l({action:a,location:_.location,delta:1})}function m(w,g){a=Vr.Replace;let p=Tp(_.location,w,g);n&&n(p,w),u=c();let v=Qw(p,u),E=_.createHref(p);o.replaceState(v,"",E),s&&l&&l({action:a,location:_.location,delta:0})}function y(w){let g=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof w=="string"?w:Cd(w);return p=p.replace(/ $/,"%20"),qe(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let _={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Hw,d),l=w,()=>{i.removeEventListener(Hw,d),l=null}},createHref(w){return e(i,w)},createURL:y,encodeLocation(w){let g=y(w);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:m,go(w){return o.go(w)}};return _}var Yw;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Yw||(Yw={}));function tN(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ho(e):e,i=Av(r.pathname||"/",n);if(i==null)return null;let s=qT(t);nN(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let l=mN(i);o=dN(s[a],l)}return o}function qT(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(qe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Kr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(qe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),qT(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:uN(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of WT(s.path))i(s,o,l)}),e}function WT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=WT(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function nN(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:cN(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const rN=/^:[\w-]+$/,iN=3,sN=2,oN=1,aN=10,lN=-2,Xw=t=>t==="*";function uN(t,e){let n=t.split("/"),r=n.length;return n.some(Xw)&&(r+=lN),e&&(r+=sN),n.filter(i=>!Xw(i)).reduce((i,s)=>i+(rN.test(s)?iN:s===""?oN:aN),r)}function cN(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function dN(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=hN({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:Kr([i,c.pathname]),pathnameBase:yN(Kr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Kr([i,c.pathnameBase]))}return s}function hN(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=fN(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:h,isOptional:m}=c;if(h==="*"){let _=a[d]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const y=a[d];return m&&!y?u[h]=void 0:u[h]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function fN(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),BT(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function mN(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return BT(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Av(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function pN(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ho(t):t;return{pathname:n?n.startsWith("/")?n:gN(n,e):e,search:_N(r),hash:wN(i)}}function gN(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function tm(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function vN(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function GT(t,e){let n=vN(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function KT(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ho(t):(i=bl({},t),qe(!i.pathname||!i.pathname.includes("?"),tm("?","pathname","search",i)),qe(!i.pathname||!i.pathname.includes("#"),tm("#","pathname","hash",i)),qe(!i.search||!i.search.includes("#"),tm("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=pN(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Kr=t=>t.join("/").replace(/\/\/+/g,"/"),yN=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),_N=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,wN=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function IN(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const HT=["post","put","patch","delete"];new Set(HT);const EN=["get",...HT];new Set(EN);/**
 * React Router v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rl(){return Rl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Rl.apply(this,arguments)}const Pv=T.createContext(null),TN=T.createContext(null),Is=T.createContext(null),Ah=T.createContext(null),Es=T.createContext({outlet:null,matches:[],isDataRoute:!1}),QT=T.createContext(null);function SN(t,e){let{relative:n}=e===void 0?{}:e;yu()||qe(!1);let{basename:r,navigator:i}=T.useContext(Is),{hash:s,pathname:o,search:a}=XT(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Kr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function yu(){return T.useContext(Ah)!=null}function Ph(){return yu()||qe(!1),T.useContext(Ah).location}function YT(t){T.useContext(Is).static||T.useLayoutEffect(t)}function kN(){let{isDataRoute:t}=T.useContext(Es);return t?FN():AN()}function AN(){yu()||qe(!1);let t=T.useContext(Pv),{basename:e,future:n,navigator:r}=T.useContext(Is),{matches:i}=T.useContext(Es),{pathname:s}=Ph(),o=JSON.stringify(GT(i,n.v7_relativeSplatPath)),a=T.useRef(!1);return YT(()=>{a.current=!0}),T.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=KT(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Kr([e,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[e,r,o,s,t])}function XT(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=T.useContext(Is),{matches:i}=T.useContext(Es),{pathname:s}=Ph(),o=JSON.stringify(GT(i,r.v7_relativeSplatPath));return T.useMemo(()=>KT(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function PN(t,e){return bN(t,e)}function bN(t,e,n,r){yu()||qe(!1);let{navigator:i}=T.useContext(Is),{matches:s}=T.useContext(Es),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Ph(),c;if(e){var d;let w=typeof e=="string"?Ho(e):e;l==="/"||(d=w.pathname)!=null&&d.startsWith(l)||qe(!1),c=w}else c=u;let h=c.pathname||"/",m=h;if(l!=="/"){let w=l.replace(/^\//,"").split("/");m="/"+h.replace(/^\//,"").split("/").slice(w.length).join("/")}let y=tN(t,{pathname:m}),_=DN(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:Kr([l,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:Kr([l,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,r);return e&&_?T.createElement(Ah.Provider,{value:{location:Rl({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Vr.Pop}},_):_}function RN(){let t=MN(),e=IN(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},e),n?T.createElement("pre",{style:i},n):null,null)}const CN=T.createElement(RN,null);class xN extends T.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?T.createElement(Es.Provider,{value:this.props.routeContext},T.createElement(QT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function NN(t){let{routeContext:e,match:n,children:r}=t,i=T.useContext(Pv);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(Es.Provider,{value:e},r)}function DN(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id]));c>=0||qe(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:h,errors:m}=n,y=d.route.loader&&h[d.route.id]===void 0&&(!m||m[d.route.id]===void 0);if(d.route.lazy||y){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,h)=>{let m,y=!1,_=null,w=null;n&&(m=a&&d.route.id?a[d.route.id]:void 0,_=d.route.errorElement||CN,l&&(u<0&&h===0?(jN("route-fallback",!1),y=!0,w=null):u===h&&(y=!0,w=d.route.hydrateFallbackElement||null)));let g=e.concat(o.slice(0,h+1)),p=()=>{let v;return m?v=_:y?v=w:d.route.Component?v=T.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=c,T.createElement(NN,{match:d,routeContext:{outlet:c,matches:g,isDataRoute:n!=null},children:v})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?T.createElement(xN,{location:n.location,revalidation:n.revalidation,component:_,error:m,children:p(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):p()},null)}var JT=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(JT||{}),xd=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(xd||{});function ON(t){let e=T.useContext(Pv);return e||qe(!1),e}function VN(t){let e=T.useContext(TN);return e||qe(!1),e}function LN(t){let e=T.useContext(Es);return e||qe(!1),e}function ZT(t){let e=LN(),n=e.matches[e.matches.length-1];return n.route.id||qe(!1),n.route.id}function MN(){var t;let e=T.useContext(QT),n=VN(xd.UseRouteError),r=ZT(xd.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function FN(){let{router:t}=ON(JT.UseNavigateStable),e=ZT(xd.UseNavigateStable),n=T.useRef(!1);return YT(()=>{n.current=!0}),T.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Rl({fromRouteId:e},s)))},[t,e])}const Jw={};function jN(t,e,n){!e&&!Jw[t]&&(Jw[t]=!0)}function kn(t){qe(!1)}function zN(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Vr.Pop,navigator:s,static:o=!1,future:a}=t;yu()&&qe(!1);let l=e.replace(/^\/*/,"/"),u=T.useMemo(()=>({basename:l,navigator:s,static:o,future:Rl({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Ho(r));let{pathname:c="/",search:d="",hash:h="",state:m=null,key:y="default"}=r,_=T.useMemo(()=>{let w=Av(c,l);return w==null?null:{location:{pathname:w,search:d,hash:h,state:m,key:y},navigationType:i}},[l,c,d,h,m,y,i]);return _==null?null:T.createElement(Is.Provider,{value:u},T.createElement(Ah.Provider,{children:n,value:_}))}function UN(t){let{children:e,location:n}=t;return PN(Sp(e),n)}new Promise(()=>{});function Sp(t,e){e===void 0&&(e=[]);let n=[];return T.Children.forEach(t,(r,i)=>{if(!T.isValidElement(r))return;let s=[...e,i];if(r.type===T.Fragment){n.push.apply(n,Sp(r.props.children,s));return}r.type!==kn&&qe(!1),!r.props.index||!r.props.children||qe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Sp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kp(){return kp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},kp.apply(this,arguments)}function $N(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function BN(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function qN(t,e){return t.button===0&&(!e||e==="_self")&&!BN(t)}const WN=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],GN="6";try{window.__reactRouterVersion=GN}catch{}const KN="startTransition",Zw=UR[KN];function HN(t){let{basename:e,children:n,future:r,window:i}=t,s=T.useRef();s.current==null&&(s.current=Jx({window:i,v5Compat:!0}));let o=s.current,[a,l]=T.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=T.useCallback(d=>{u&&Zw?Zw(()=>l(d)):l(d)},[l,u]);return T.useLayoutEffect(()=>o.listen(c),[o,c]),T.createElement(zN,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const QN=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",YN=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bo=T.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:d}=e,h=$N(e,WN),{basename:m}=T.useContext(Is),y,_=!1;if(typeof u=="string"&&YN.test(u)&&(y=u,QN))try{let v=new URL(window.location.href),E=u.startsWith("//")?new URL(v.protocol+u):new URL(u),k=Av(E.pathname,m);E.origin===v.origin&&k!=null?u=k+E.search+E.hash:_=!0}catch{}let w=SN(u,{relative:i}),g=XN(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:d});function p(v){r&&r(v),v.defaultPrevented||g(v)}return T.createElement("a",kp({},h,{href:y||w,onClick:_||s?r:p,ref:n,target:l}))});var e0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(e0||(e0={}));var t0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(t0||(t0={}));function XN(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=kN(),u=Ph(),c=XT(t,{relative:o});return T.useCallback(d=>{if(qN(d,n)){d.preventDefault();let h=r!==void 0?r:Cd(u)===Cd(c);l(t,{replace:h,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}function n0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function F(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?n0(Object(n),!0).forEach(function(r){Qe(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):n0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Nd(t){"@babel/helpers - typeof";return Nd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Nd(t)}function JN(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r0(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function ZN(t,e,n){return e&&r0(t.prototype,e),n&&r0(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Qe(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function bv(t,e){return t2(t)||r2(t,e)||eS(t,e)||s2()}function _u(t){return e2(t)||n2(t)||eS(t)||i2()}function e2(t){if(Array.isArray(t))return Ap(t)}function t2(t){if(Array.isArray(t))return t}function n2(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function r2(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function eS(t,e){if(t){if(typeof t=="string")return Ap(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ap(t,e)}}function Ap(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function s2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i0=function(){},Rv={},tS={},nS=null,rS={mark:i0,measure:i0};try{typeof window<"u"&&(Rv=window),typeof document<"u"&&(tS=document),typeof MutationObserver<"u"&&(nS=MutationObserver),typeof performance<"u"&&(rS=performance)}catch{}var o2=Rv.navigator||{},s0=o2.userAgent,o0=s0===void 0?"":s0,Jr=Rv,_e=tS,a0=nS,mc=rS;Jr.document;var mr=!!_e.documentElement&&!!_e.head&&typeof _e.addEventListener=="function"&&typeof _e.createElement=="function",iS=~o0.indexOf("MSIE")||~o0.indexOf("Trident/"),pc,gc,vc,yc,_c,ar="___FONT_AWESOME___",Pp=16,sS="fa",oS="svg-inline--fa",is="data-fa-i2svg",bp="data-fa-pseudo-element",a2="data-fa-pseudo-element-pending",Cv="data-prefix",xv="data-icon",l0="fontawesome-i2svg",l2="async",u2=["HTML","HEAD","STYLE","SCRIPT"],aS=function(){try{return!0}catch{return!1}}(),pe="classic",xe="sharp",Nv=[pe,xe];function wu(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[pe]}})}var Cl=wu((pc={},Qe(pc,pe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),Qe(pc,xe,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),pc)),xl=wu((gc={},Qe(gc,pe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Qe(gc,xe,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),gc)),Nl=wu((vc={},Qe(vc,pe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Qe(vc,xe,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),vc)),c2=wu((yc={},Qe(yc,pe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Qe(yc,xe,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),yc)),d2=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,lS="fa-layers-text",h2=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,f2=wu((_c={},Qe(_c,pe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Qe(_c,xe,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),_c)),uS=[1,2,3,4,5,6,7,8,9,10],m2=uS.concat([11,12,13,14,15,16,17,18,19,20]),p2=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],zi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Dl=new Set;Object.keys(xl[pe]).map(Dl.add.bind(Dl));Object.keys(xl[xe]).map(Dl.add.bind(Dl));var g2=[].concat(Nv,_u(Dl),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",zi.GROUP,zi.SWAP_OPACITY,zi.PRIMARY,zi.SECONDARY]).concat(uS.map(function(t){return"".concat(t,"x")})).concat(m2.map(function(t){return"w-".concat(t)})),Za=Jr.FontAwesomeConfig||{};function v2(t){var e=_e.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function y2(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(_e&&typeof _e.querySelector=="function"){var _2=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];_2.forEach(function(t){var e=bv(t,2),n=e[0],r=e[1],i=y2(v2(n));i!=null&&(Za[r]=i)})}var cS={styleDefault:"solid",familyDefault:"classic",cssPrefix:sS,replacementClass:oS,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Za.familyPrefix&&(Za.cssPrefix=Za.familyPrefix);var Ro=F(F({},cS),Za);Ro.autoReplaceSvg||(Ro.observeMutations=!1);var U={};Object.keys(cS).forEach(function(t){Object.defineProperty(U,t,{enumerable:!0,set:function(n){Ro[t]=n,el.forEach(function(r){return r(U)})},get:function(){return Ro[t]}})});Object.defineProperty(U,"familyPrefix",{enumerable:!0,set:function(e){Ro.cssPrefix=e,el.forEach(function(n){return n(U)})},get:function(){return Ro.cssPrefix}});Jr.FontAwesomeConfig=U;var el=[];function w2(t){return el.push(t),function(){el.splice(el.indexOf(t),1)}}var Er=Pp,Dn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function I2(t){if(!(!t||!mr)){var e=_e.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=_e.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return _e.head.insertBefore(e,r),t}}var E2="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ol(){for(var t=12,e="";t-- >0;)e+=E2[Math.random()*62|0];return e}function Qo(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Dv(t){return t.classList?Qo(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function dS(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function T2(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(dS(t[n]),'" ')},"").trim()}function bh(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Ov(t){return t.size!==Dn.size||t.x!==Dn.x||t.y!==Dn.y||t.rotate!==Dn.rotate||t.flipX||t.flipY}function S2(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function k2(t){var e=t.transform,n=t.width,r=n===void 0?Pp:n,i=t.height,s=i===void 0?Pp:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&iS?l+="translate(".concat(e.x/Er-r/2,"em, ").concat(e.y/Er-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Er,"em), calc(-50% + ").concat(e.y/Er,"em)) "):l+="translate(".concat(e.x/Er,"em, ").concat(e.y/Er,"em) "),l+="scale(".concat(e.size/Er*(e.flipX?-1:1),", ").concat(e.size/Er*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var A2=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function hS(){var t=sS,e=oS,n=U.cssPrefix,r=U.replacementClass,i=A2;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var u0=!1;function nm(){U.autoAddCss&&!u0&&(I2(hS()),u0=!0)}var P2={mixout:function(){return{dom:{css:hS,insertCss:nm}}},hooks:function(){return{beforeDOMElementCreation:function(){nm()},beforeI2svg:function(){nm()}}}},lr=Jr||{};lr[ar]||(lr[ar]={});lr[ar].styles||(lr[ar].styles={});lr[ar].hooks||(lr[ar].hooks={});lr[ar].shims||(lr[ar].shims=[]);var vn=lr[ar],fS=[],b2=function t(){_e.removeEventListener("DOMContentLoaded",t),Dd=1,fS.map(function(e){return e()})},Dd=!1;mr&&(Dd=(_e.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(_e.readyState),Dd||_e.addEventListener("DOMContentLoaded",b2));function R2(t){mr&&(Dd?setTimeout(t,0):fS.push(t))}function Iu(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?dS(t):"<".concat(e," ").concat(T2(r),">").concat(s.map(Iu).join(""),"</").concat(e,">")}function c0(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var C2=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},rm=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?C2(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function x2(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Rp(t){var e=x2(t);return e.length===1?e[0].toString(16):null}function N2(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function d0(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Cp(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=d0(e);typeof vn.hooks.addPack=="function"&&!i?vn.hooks.addPack(t,d0(e)):vn.styles[t]=F(F({},vn.styles[t]||{}),s),t==="fas"&&Cp("fa",e)}var wc,Ic,Ec,to=vn.styles,D2=vn.shims,O2=(wc={},Qe(wc,pe,Object.values(Nl[pe])),Qe(wc,xe,Object.values(Nl[xe])),wc),Vv=null,mS={},pS={},gS={},vS={},yS={},V2=(Ic={},Qe(Ic,pe,Object.keys(Cl[pe])),Qe(Ic,xe,Object.keys(Cl[xe])),Ic);function L2(t){return~g2.indexOf(t)}function M2(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!L2(i)?i:null}var _S=function(){var e=function(s){return rm(to,function(o,a,l){return o[l]=rm(a,s,{}),o},{})};mS=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),pS=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),yS=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in to||U.autoFetchSvg,r=rm(D2,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});gS=r.names,vS=r.unicodes,Vv=Rh(U.styleDefault,{family:U.familyDefault})};w2(function(t){Vv=Rh(t.styleDefault,{family:U.familyDefault})});_S();function Lv(t,e){return(mS[t]||{})[e]}function F2(t,e){return(pS[t]||{})[e]}function Ui(t,e){return(yS[t]||{})[e]}function wS(t){return gS[t]||{prefix:null,iconName:null}}function j2(t){var e=vS[t],n=Lv("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Zr(){return Vv}var Mv=function(){return{prefix:null,iconName:null,rest:[]}};function Rh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?pe:n,i=Cl[r][t],s=xl[r][t]||xl[r][i],o=t in vn.styles?t:null;return s||o||null}var h0=(Ec={},Qe(Ec,pe,Object.keys(Nl[pe])),Qe(Ec,xe,Object.keys(Nl[xe])),Ec);function Ch(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},Qe(e,pe,"".concat(U.cssPrefix,"-").concat(pe)),Qe(e,xe,"".concat(U.cssPrefix,"-").concat(xe)),e),o=null,a=pe;(t.includes(s[pe])||t.some(function(u){return h0[pe].includes(u)}))&&(a=pe),(t.includes(s[xe])||t.some(function(u){return h0[xe].includes(u)}))&&(a=xe);var l=t.reduce(function(u,c){var d=M2(U.cssPrefix,c);if(to[c]?(c=O2[a].includes(c)?c2[a][c]:c,o=c,u.prefix=c):V2[a].indexOf(c)>-1?(o=c,u.prefix=Rh(c,{family:a})):d?u.iconName=d:c!==U.replacementClass&&c!==s[pe]&&c!==s[xe]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var h=o==="fa"?wS(u.iconName):{},m=Ui(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||m||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!to.far&&to.fas&&!U.autoFetchSvg&&(u.prefix="fas")}return u},Mv());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===xe&&(to.fass||U.autoFetchSvg)&&(l.prefix="fass",l.iconName=Ui(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Zr()||"fas"),l}var z2=function(){function t(){JN(this,t),this.definitions={}}return ZN(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=F(F({},n.definitions[a]||{}),o[a]),Cp(a,o[a]);var l=Nl[pe][a];l&&Cp(l,o[a]),_S()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[a][d]=u)}),n[a][l]=u}),n}}]),t}(),f0=[],no={},fo={},U2=Object.keys(fo);function $2(t,e){var n=e.mixoutsTo;return f0=t,no={},Object.keys(fo).forEach(function(r){U2.indexOf(r)===-1&&delete fo[r]}),f0.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Nd(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){no[o]||(no[o]=[]),no[o].push(s[o])})}r.provides&&r.provides(fo)}),n}function xp(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=no[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function ss(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=no[t]||[];i.forEach(function(s){s.apply(null,n)})}function ur(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return fo[t]?fo[t].apply(null,e):void 0}function Np(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Zr();if(e)return e=Ui(n,e)||e,c0(IS.definitions,n,e)||c0(vn.styles,n,e)}var IS=new z2,B2=function(){U.autoReplaceSvg=!1,U.observeMutations=!1,ss("noAuto")},q2={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return mr?(ss("beforeI2svg",e),ur("pseudoElements2svg",e),ur("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;U.autoReplaceSvg===!1&&(U.autoReplaceSvg=!0),U.observeMutations=!0,R2(function(){G2({autoReplaceSvgRoot:n}),ss("watch",e)})}},W2={icon:function(e){if(e===null)return null;if(Nd(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ui(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Rh(e[0]);return{prefix:r,iconName:Ui(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(U.cssPrefix,"-"))>-1||e.match(d2))){var i=Ch(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Zr(),iconName:Ui(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Zr();return{prefix:s,iconName:Ui(s,e)||e}}}},en={noAuto:B2,config:U,dom:q2,parse:W2,library:IS,findIconDefinition:Np,toHtml:Iu},G2=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?_e:n;(Object.keys(vn.styles).length>0||U.autoFetchSvg)&&mr&&U.autoReplaceSvg&&en.dom.i2svg({node:r})};function xh(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Iu(r)})}}),Object.defineProperty(t,"node",{get:function(){if(mr){var r=_e.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function K2(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Ov(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=bh(F(F({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function H2(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(U.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:F(F({},i),{},{id:o}),children:r}]}]}function Fv(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,d=t.extra,h=t.watchable,m=h===void 0?!1:h,y=r.found?r:n,_=y.width,w=y.height,g=i==="fak",p=[U.replacementClass,s?"".concat(U.cssPrefix,"-").concat(s):""].filter(function(X){return d.classes.indexOf(X)===-1}).filter(function(X){return X!==""||!!X}).concat(d.classes).join(" "),v={children:[],attributes:F(F({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:p,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(w)})},E=g&&!~d.classes.indexOf("fa-fw")?{width:"".concat(_/w*16*.0625,"em")}:{};m&&(v.attributes[is]=""),l&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(c||Ol())},children:[l]}),delete v.attributes.title);var k=F(F({},v),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:F(F({},E),d.styles)}),b=r.found&&n.found?ur("generateAbstractMask",k)||{children:[],attributes:{}}:ur("generateAbstractIcon",k)||{children:[],attributes:{}},C=b.children,L=b.attributes;return k.children=C,k.attributes=L,a?H2(k):K2(k)}function m0(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=F(F(F({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[is]="");var c=F({},o.styles);Ov(i)&&(c.transform=k2({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=bh(c);d.length>0&&(u.style=d);var h=[];return h.push({tag:"span",attributes:u,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function Q2(t){var e=t.content,n=t.title,r=t.extra,i=F(F(F({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=bh(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var im=vn.styles;function Dp(t){var e=t[0],n=t[1],r=t.slice(4),i=bv(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(U.cssPrefix,"-").concat(zi.GROUP)},children:[{tag:"path",attributes:{class:"".concat(U.cssPrefix,"-").concat(zi.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(U.cssPrefix,"-").concat(zi.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var Y2={found:!1,width:512,height:512};function X2(t,e){!aS&&!U.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Op(t,e){var n=e;return e==="fa"&&U.styleDefault!==null&&(e=Zr()),new Promise(function(r,i){if(ur("missingIconAbstract"),n==="fa"){var s=wS(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&im[e]&&im[e][t]){var o=im[e][t];return r(Dp(o))}X2(t,e),r(F(F({},Y2),{},{icon:U.showMissingIcons&&t?ur("missingIconAbstract")||{}:{}}))})}var p0=function(){},Vp=U.measurePerformance&&mc&&mc.mark&&mc.measure?mc:{mark:p0,measure:p0},Va='FA "6.5.1"',J2=function(e){return Vp.mark("".concat(Va," ").concat(e," begins")),function(){return ES(e)}},ES=function(e){Vp.mark("".concat(Va," ").concat(e," ends")),Vp.measure("".concat(Va," ").concat(e),"".concat(Va," ").concat(e," begins"),"".concat(Va," ").concat(e," ends"))},jv={begin:J2,end:ES},Gc=function(){};function g0(t){var e=t.getAttribute?t.getAttribute(is):null;return typeof e=="string"}function Z2(t){var e=t.getAttribute?t.getAttribute(Cv):null,n=t.getAttribute?t.getAttribute(xv):null;return e&&n}function eD(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(U.replacementClass)}function tD(){if(U.autoReplaceSvg===!0)return Kc.replace;var t=Kc[U.autoReplaceSvg];return t||Kc.replace}function nD(t){return _e.createElementNS("http://www.w3.org/2000/svg",t)}function rD(t){return _e.createElement(t)}function TS(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?nD:rD:n;if(typeof t=="string")return _e.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(TS(o,{ceFn:r}))}),i}function iD(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Kc={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(TS(i),n)}),n.getAttribute(is)===null&&U.keepOriginalSource){var r=_e.createComment(iD(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Dv(n).indexOf(U.replacementClass))return Kc.replace(e);var i=new RegExp("".concat(U.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===U.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Iu(a)}).join(`
`);n.setAttribute(is,""),n.innerHTML=o}};function v0(t){t()}function SS(t,e){var n=typeof e=="function"?e:Gc;if(t.length===0)n();else{var r=v0;U.mutateApproach===l2&&(r=Jr.requestAnimationFrame||v0),r(function(){var i=tD(),s=jv.begin("mutate");t.map(i),s(),n()})}}var zv=!1;function kS(){zv=!0}function Lp(){zv=!1}var Od=null;function y0(t){if(a0&&U.observeMutations){var e=t.treeCallback,n=e===void 0?Gc:e,r=t.nodeCallback,i=r===void 0?Gc:r,s=t.pseudoElementsCallback,o=s===void 0?Gc:s,a=t.observeMutationsRoot,l=a===void 0?_e:a;Od=new a0(function(u){if(!zv){var c=Zr();Qo(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!g0(d.addedNodes[0])&&(U.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&U.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&g0(d.target)&&~p2.indexOf(d.attributeName))if(d.attributeName==="class"&&Z2(d.target)){var h=Ch(Dv(d.target)),m=h.prefix,y=h.iconName;d.target.setAttribute(Cv,m||c),y&&d.target.setAttribute(xv,y)}else eD(d.target)&&i(d.target)})}}),mr&&Od.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function sD(){Od&&Od.disconnect()}function oD(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function aD(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Ch(Dv(t));return i.prefix||(i.prefix=Zr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=F2(i.prefix,t.innerText)||Lv(i.prefix,Rp(t.innerText))),!i.iconName&&U.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function lD(t){var e=Qo(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return U.autoA11y&&(n?e["aria-labelledby"]="".concat(U.replacementClass,"-title-").concat(r||Ol()):(e["aria-hidden"]="true",e.focusable="false")),e}function uD(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Dn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function _0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=aD(t),r=n.iconName,i=n.prefix,s=n.rest,o=lD(t),a=xp("parseNodeAttributes",{},t),l=e.styleParser?oD(t):[];return F({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Dn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var cD=vn.styles;function AS(t){var e=U.autoReplaceSvg==="nest"?_0(t,{styleParser:!1}):_0(t);return~e.extra.classes.indexOf(lS)?ur("generateLayersText",t,e):ur("generateSvgReplacementMutation",t,e)}var ei=new Set;Nv.map(function(t){ei.add("fa-".concat(t))});Object.keys(Cl[pe]).map(ei.add.bind(ei));Object.keys(Cl[xe]).map(ei.add.bind(ei));ei=_u(ei);function w0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!mr)return Promise.resolve();var n=_e.documentElement.classList,r=function(d){return n.add("".concat(l0,"-").concat(d))},i=function(d){return n.remove("".concat(l0,"-").concat(d))},s=U.autoFetchSvg?ei:Nv.map(function(c){return"fa-".concat(c)}).concat(Object.keys(cD));s.includes("fa")||s.push("fa");var o=[".".concat(lS,":not([").concat(is,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(is,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Qo(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=jv.begin("onTree"),u=a.reduce(function(c,d){try{var h=AS(d);h&&c.push(h)}catch(m){aS||m.name==="MissingIcon"&&console.error(m)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(h){SS(h,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(h){l(),d(h)})})}function dD(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;AS(t).then(function(n){n&&SS([n],e)})}function hD(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Np(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Np(i||{})),t(r,F(F({},n),{},{mask:i}))}}var fD=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Dn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,d=n.title,h=d===void 0?null:d,m=n.titleId,y=m===void 0?null:m,_=n.classes,w=_===void 0?[]:_,g=n.attributes,p=g===void 0?{}:g,v=n.styles,E=v===void 0?{}:v;if(e){var k=e.prefix,b=e.iconName,C=e.icon;return xh(F({type:"icon"},e),function(){return ss("beforeDOMElementCreation",{iconDefinition:e,params:n}),U.autoA11y&&(h?p["aria-labelledby"]="".concat(U.replacementClass,"-title-").concat(y||Ol()):(p["aria-hidden"]="true",p.focusable="false")),Fv({icons:{main:Dp(C),mask:l?Dp(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:b,transform:F(F({},Dn),i),symbol:o,title:h,maskId:c,titleId:y,extra:{attributes:p,styles:E,classes:w}})})}},mD={mixout:function(){return{icon:hD(fD)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=w0,n.nodeCallback=dD,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?_e:r,s=n.callback,o=s===void 0?function(){}:s;return w0(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,h=r.extra;return new Promise(function(m,y){Promise.all([Op(i,a),c.iconName?Op(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var w=bv(_,2),g=w[0],p=w[1];m([n,Fv({icons:{main:g,mask:p},prefix:a,iconName:i,transform:l,symbol:u,maskId:d,title:s,titleId:o,extra:h,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=bh(a);l.length>0&&(i.style=l);var u;return Ov(o)&&(u=ur("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},pD={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return xh({type:"layer"},function(){ss("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(U.cssPrefix,"-layers")].concat(_u(s)).join(" ")},children:o}]})}}}},gD={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return xh({type:"counter",content:n},function(){return ss("beforeDOMElementCreation",{content:n,params:r}),Q2({content:n.toString(),title:s,extra:{attributes:u,styles:d,classes:["".concat(U.cssPrefix,"-layers-counter")].concat(_u(a))}})})}}}},vD={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Dn:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,h=r.styles,m=h===void 0?{}:h;return xh({type:"text",content:n},function(){return ss("beforeDOMElementCreation",{content:n,params:r}),m0({content:n,transform:F(F({},Dn),s),title:a,extra:{attributes:d,styles:m,classes:["".concat(U.cssPrefix,"-layers-text")].concat(_u(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(iS){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return U.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,m0({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},yD=new RegExp('"',"ug"),I0=[1105920,1112319];function _D(t){var e=t.replace(yD,""),n=N2(e,0),r=n>=I0[0]&&n<=I0[1],i=e.length===2?e[0]===e[1]:!1;return{value:Rp(i?e[0]:e),isSecondary:r||i}}function E0(t,e){var n="".concat(a2).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Qo(t.children),o=s.filter(function(C){return C.getAttribute(bp)===e})[0],a=Jr.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(h2),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=a.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?xe:pe,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?xl[h][l[2].toLowerCase()]:f2[h][u],y=_D(d),_=y.value,w=y.isSecondary,g=l[0].startsWith("FontAwesome"),p=Lv(m,_),v=p;if(g){var E=j2(_);E.iconName&&E.prefix&&(p=E.iconName,m=E.prefix)}if(p&&!w&&(!o||o.getAttribute(Cv)!==m||o.getAttribute(xv)!==v)){t.setAttribute(n,v),o&&t.removeChild(o);var k=uD(),b=k.extra;b.attributes[bp]=e,Op(p,m).then(function(C){var L=Fv(F(F({},k),{},{icons:{main:C,mask:Mv()},prefix:m,iconName:v,extra:b,watchable:!0})),X=_e.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(X,t.firstChild):t.appendChild(X),X.outerHTML=L.map(function(N){return Iu(N)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function wD(t){return Promise.all([E0(t,"::before"),E0(t,"::after")])}function ID(t){return t.parentNode!==document.head&&!~u2.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(bp)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function T0(t){if(mr)return new Promise(function(e,n){var r=Qo(t.querySelectorAll("*")).filter(ID).map(wD),i=jv.begin("searchPseudoElements");kS(),Promise.all(r).then(function(){i(),Lp(),e()}).catch(function(){i(),Lp(),n()})})}var ED={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=T0,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?_e:r;U.searchPseudoElements&&T0(i)}}},S0=!1,TD={mixout:function(){return{dom:{unwatch:function(){kS(),S0=!0}}}},hooks:function(){return{bootstrap:function(){y0(xp("mutationObserverCallbacks",{}))},noAuto:function(){sD()},watch:function(n){var r=n.observeMutationsRoot;S0?Lp():y0(xp("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},k0=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},SD={mixout:function(){return{parse:{transform:function(n){return k0(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=k0(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},m={outer:a,inner:d,path:h};return{tag:"g",attributes:F({},m.outer),children:[{tag:"g",attributes:F({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:F(F({},r.icon.attributes),m.path)}]}]}}}},sm={x:0,y:0,width:"100%",height:"100%"};function A0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function kD(t){return t.tag==="g"?t.children:[t]}var AD={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Ch(i.split(" ").map(function(o){return o.trim()})):Mv();return s.prefix||(s.prefix=Zr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,d=o.width,h=o.icon,m=S2({transform:l,containerWidth:d,iconWidth:u}),y={tag:"rect",attributes:F(F({},sm),{},{fill:"white"})},_=c.children?{children:c.children.map(A0)}:{},w={tag:"g",attributes:F({},m.inner),children:[A0(F({tag:c.tag,attributes:F(F({},c.attributes),m.path)},_))]},g={tag:"g",attributes:F({},m.outer),children:[w]},p="mask-".concat(a||Ol()),v="clip-".concat(a||Ol()),E={tag:"mask",attributes:F(F({},sm),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,g]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:kD(h)},E]};return r.push(k,{tag:"rect",attributes:F({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(p,")")},sm)}),{children:r,attributes:i}}}},PD={provides:function(e){var n=!1;Jr.matchMedia&&(n=Jr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:F(F({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=F(F({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:F(F({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:F(F({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:F(F({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:F(F({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:F(F({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:F(F({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:F(F({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},bD={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},RD=[P2,mD,pD,gD,vD,ED,TD,SD,AD,PD,bD];$2(RD,{mixoutsTo:en});en.noAuto;en.config;en.library;en.dom;var Mp=en.parse;en.findIconDefinition;en.toHtml;var CD=en.icon;en.layer;en.text;en.counter;var PS={exports:{}},xD="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ND=xD,DD=ND;function bS(){}function RS(){}RS.resetWarningCache=bS;var OD=function(){function t(r,i,s,o,a,l){if(l!==DD){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:RS,resetWarningCache:bS};return n.PropTypes=n,n};PS.exports=OD();var VD=PS.exports;const Z=RE(VD);function P0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Lr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?P0(Object(n),!0).forEach(function(r){ro(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Vd(t){"@babel/helpers - typeof";return Vd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Vd(t)}function ro(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function LD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function MD(t,e){if(t==null)return{};var n=LD(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Fp(t){return FD(t)||jD(t)||zD(t)||UD()}function FD(t){if(Array.isArray(t))return jp(t)}function jD(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function zD(t,e){if(t){if(typeof t=="string")return jp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return jp(t,e)}}function jp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function UD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $D(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,d=t.pulse,h=t.fixedWidth,m=t.inverse,y=t.border,_=t.listItem,w=t.flip,g=t.size,p=t.rotation,v=t.pull,E=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":h,"fa-inverse":m,"fa-border":y,"fa-li":_,"fa-flip":w===!0,"fa-flip-horizontal":w==="horizontal"||w==="both","fa-flip-vertical":w==="vertical"||w==="both"},ro(e,"fa-".concat(g),typeof g<"u"&&g!==null),ro(e,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),ro(e,"fa-pull-".concat(v),typeof v<"u"&&v!==null),ro(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(E).map(function(k){return E[k]?k:null}).filter(function(k){return k})}function BD(t){return t=t-0,t===t}function CS(t){return BD(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var qD=["style"];function WD(t){return t.charAt(0).toUpperCase()+t.slice(1)}function GD(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=CS(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[WD(i)]=s:e[i]=s,e},{})}function xS(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return xS(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=GD(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[CS(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=MD(n,qD);return i.attrs.style=Lr(Lr({},i.attrs.style),o),t.apply(void 0,[e.tag,Lr(Lr({},i.attrs),a)].concat(Fp(r)))}var NS=!1;try{NS=!0}catch{}function KD(){if(!NS&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function b0(t){if(t&&Vd(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Mp.icon)return Mp.icon(t);if(t===null)return null;if(t&&Vd(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function om(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ro({},t,e):{}}var He=ch.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=b0(n),c=om("classes",[].concat(Fp($D(t)),Fp(s.split(" ")))),d=om("transform",typeof t.transform=="string"?Mp.transform(t.transform):t.transform),h=om("mask",b0(r)),m=CD(u,Lr(Lr(Lr(Lr({},c),d),h),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!m)return KD("Could not find icon",u),null;var y=m.abstract,_={ref:e};return Object.keys(t).forEach(function(w){He.defaultProps.hasOwnProperty(w)||(_[w]=t[w])}),HD(y[0],_)});He.displayName="FontAwesomeIcon";He.propTypes={beat:Z.bool,border:Z.bool,beatFade:Z.bool,bounce:Z.bool,className:Z.string,fade:Z.bool,flash:Z.bool,mask:Z.oneOfType([Z.object,Z.array,Z.string]),maskId:Z.string,fixedWidth:Z.bool,inverse:Z.bool,flip:Z.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Z.oneOfType([Z.object,Z.array,Z.string]),listItem:Z.bool,pull:Z.oneOf(["right","left"]),pulse:Z.bool,rotation:Z.oneOf([0,90,180,270]),shake:Z.bool,size:Z.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Z.bool,spinPulse:Z.bool,spinReverse:Z.bool,symbol:Z.oneOfType([Z.bool,Z.string]),title:Z.string,titleId:Z.string,transform:Z.oneOfType([Z.string,Z.object]),swapOpacity:Z.bool};He.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var HD=xS.bind(null,ch.createElement),QD={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},YD=QD,DS={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},XD={prefix:"fas",iconName:"right-to-bracket",icon:[512,512,["sign-in-alt"],"f2f6","M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},OS=XD,JD={prefix:"fas",iconName:"circle-question",icon:[512,512,[62108,"question-circle"],"f059","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},ZD=JD,Uv={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},eO={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]},tO={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},VS=tO,nO={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},rO={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},iO={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]},sO={prefix:"fas",iconName:"user-plus",icon:[640,512,[],"f234","M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]},R0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},oO=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},MS={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(h=64)),r.push(n[c],n[d],n[h],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(LS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):oO(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new aO;const h=s<<2|a>>4;if(r.push(h),u!==64){const m=a<<4&240|u>>2;if(r.push(m),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class aO extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lO=function(t){const e=LS(t);return MS.encodeByteArray(e,!0)},Ld=function(t){return lO(t).replace(/\./g,"")},FS=function(t){try{return MS.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Md(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!uO(n)||(t[n]=Md(t[n],e[n]));return t}function uO(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cO(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO=()=>cO().__FIREBASE_DEFAULTS__,hO=()=>{if(typeof process>"u"||typeof R0>"u")return;const t=R0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fO=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&FS(t[1]);return e&&JSON.parse(e)},$v=()=>{try{return dO()||hO()||fO()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},jS=()=>{var t;return(t=$v())===null||t===void 0?void 0:t.config},mO=t=>{var e;return(e=$v())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gO(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ld(JSON.stringify(n)),Ld(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vO(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function Bv(){var t;const e=(t=$v())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yO(){return typeof self=="object"&&self.self===self}function zS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function US(){const t=Se();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $S(){return!Bv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Vl(){try{return typeof indexedDB=="object"}catch{return!1}}function _O(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wO="FirebaseError";class bt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=wO,Object.setPrototypeOf(this,bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ts.prototype.create)}}class Ts{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?IO(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new bt(i,a,r)}}function IO(t,e){return t.replace(EO,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const EO=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function TO(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ll(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(x0(s)&&x0(o)){if(!Ll(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function x0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function io(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function La(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function BS(t,e){const n=new SO(t,e);return n.subscribe.bind(n)}class SO{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");kO(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=am),i.error===void 0&&(i.error=am),i.complete===void 0&&(i.complete=am);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kO(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function am(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(t){return t&&t._delegate?t._delegate:t}class Bn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new pO;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bO(e))try{this.getOrInitializeService({instanceIdentifier:Ci})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ci){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ci){return this.instances.has(e)}getOptions(e=Ci){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:PO(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ci){return this.component?this.component.multipleInstances?e:Ci:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function PO(t){return t===Ci?void 0:t}function bO(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new AO(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv=[];var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const qS={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},CO=ee.INFO,xO={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},NO=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=xO[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nh{constructor(e){this.name=e,this._logLevel=CO,this._logHandler=NO,this._userLogHandler=null,Wv.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}function DO(t){Wv.forEach(e=>{e.setLogLevel(t)})}function OO(t,e){for(const n of Wv){let r=null;e&&e.level&&(r=qS[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:ee[s].toLowerCase(),message:a,args:o,type:i.name})}}}const VO=(t,e)=>e.some(n=>t instanceof n);let N0,D0;function LO(){return N0||(N0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function MO(){return D0||(D0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const WS=new WeakMap,zp=new WeakMap,GS=new WeakMap,lm=new WeakMap,Gv=new WeakMap;function FO(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Hr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&WS.set(n,t)}).catch(()=>{}),Gv.set(e,t),e}function jO(t){if(zp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});zp.set(t,e)}let Up={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||GS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zO(t){Up=t(Up)}function UO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(um(this),e,...n);return GS.set(r,e.sort?e.sort():[e]),Hr(r)}:MO().includes(t)?function(...e){return t.apply(um(this),e),Hr(WS.get(this))}:function(...e){return Hr(t.apply(um(this),e))}}function $O(t){return typeof t=="function"?UO(t):(t instanceof IDBTransaction&&jO(t),VO(t,LO())?new Proxy(t,Up):t)}function Hr(t){if(t instanceof IDBRequest)return FO(t);if(lm.has(t))return lm.get(t);const e=$O(t);return e!==t&&(lm.set(t,e),Gv.set(e,t)),e}const um=t=>Gv.get(t);function BO(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Hr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Hr(o.result),l.oldVersion,l.newVersion,Hr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const qO=["get","getKey","getAll","getAllKeys","count"],WO=["put","add","delete","clear"],cm=new Map;function O0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cm.get(e))return cm.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=WO.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||qO.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return cm.set(e,s),s}zO(t=>({...t,get:(e,n,r)=>O0(e,n)||t.get(e,n,r),has:(e,n)=>!!O0(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KO(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function KO(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $p="@firebase/app",V0="0.9.28";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=new Nh("@firebase/app"),HO="@firebase/app-compat",QO="@firebase/analytics-compat",YO="@firebase/analytics",XO="@firebase/app-check-compat",JO="@firebase/app-check",ZO="@firebase/auth",eV="@firebase/auth-compat",tV="@firebase/database",nV="@firebase/database-compat",rV="@firebase/functions",iV="@firebase/functions-compat",sV="@firebase/installations",oV="@firebase/installations-compat",aV="@firebase/messaging",lV="@firebase/messaging-compat",uV="@firebase/performance",cV="@firebase/performance-compat",dV="@firebase/remote-config",hV="@firebase/remote-config-compat",fV="@firebase/storage",mV="@firebase/storage-compat",pV="@firebase/firestore",gV="@firebase/firestore-compat",vV="firebase",yV="10.8.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti="[DEFAULT]",_V={[$p]:"fire-core",[HO]:"fire-core-compat",[YO]:"fire-analytics",[QO]:"fire-analytics-compat",[JO]:"fire-app-check",[XO]:"fire-app-check-compat",[ZO]:"fire-auth",[eV]:"fire-auth-compat",[tV]:"fire-rtdb",[nV]:"fire-rtdb-compat",[rV]:"fire-fn",[iV]:"fire-fn-compat",[sV]:"fire-iid",[oV]:"fire-iid-compat",[aV]:"fire-fcm",[lV]:"fire-fcm-compat",[uV]:"fire-perf",[cV]:"fire-perf-compat",[dV]:"fire-rc",[hV]:"fire-rc-compat",[fV]:"fire-gcs",[mV]:"fire-gcs-compat",[pV]:"fire-fst",[gV]:"fire-fst-compat","fire-js":"fire-js",[vV]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=new Map,Ml=new Map;function Fd(t,e){try{t.container.addComponent(e)}catch(n){os.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function KS(t,e){t.container.addOrOverwriteComponent(e)}function ri(t){const e=t.name;if(Ml.has(e))return os.debug(`There were multiple attempts to register component ${e}.`),!1;Ml.set(e,t);for(const n of ni.values())Fd(n,t);return!0}function HS(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function wV(t,e,n=ti){HS(t,e).clearInstance(n)}function IV(){Ml.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EV={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},tr=new Ts("app","Firebase",EV);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let TV=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tr.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=yV;function Kv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ti,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw tr.create("bad-app-name",{appName:String(i)});if(n||(n=jS()),!n)throw tr.create("no-options");const s=ni.get(i);if(s){if(Ll(n,s.options)&&Ll(r,s.config))return s;throw tr.create("duplicate-app",{appName:i})}const o=new RO(i);for(const l of Ml.values())o.addComponent(l);const a=new TV(n,r,o);return ni.set(i,a),a}function SV(t=ti){const e=ni.get(t);if(!e&&t===ti&&jS())return Kv();if(!e)throw tr.create("no-app",{appName:t});return e}function kV(){return Array.from(ni.values())}async function QS(t){const e=t.name;ni.has(e)&&(ni.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Un(t,e,n){var r;let i=(r=_V[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),os.warn(a.join(" "));return}ri(new Bn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function YS(t,e){if(t!==null&&typeof t!="function")throw tr.create("invalid-log-argument");OO(t,e)}function XS(t){DO(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AV="firebase-heartbeat-database",PV=1,Fl="firebase-heartbeat-store";let dm=null;function JS(){return dm||(dm=BO(AV,PV,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Fl)}catch(n){console.warn(n)}}}}).catch(t=>{throw tr.create("idb-open",{originalErrorMessage:t.message})})),dm}async function bV(t){try{const n=(await JS()).transaction(Fl),r=await n.objectStore(Fl).get(ZS(t));return await n.done,r}catch(e){if(e instanceof bt)os.warn(e.message);else{const n=tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});os.warn(n.message)}}}async function L0(t,e){try{const r=(await JS()).transaction(Fl,"readwrite");await r.objectStore(Fl).put(e,ZS(t)),await r.done}catch(n){if(n instanceof bt)os.warn(n.message);else{const r=tr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});os.warn(r.message)}}}function ZS(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RV=1024,CV=30*24*60*60*1e3;class xV{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new DV(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=M0();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=CV}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=M0(),{heartbeatsToSend:r,unsentEntries:i}=NV(this._heartbeatsCache.heartbeats),s=Ld(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function M0(){return new Date().toISOString().substring(0,10)}function NV(t,e=RV){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),F0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),F0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class DV{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vl()?_O().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await bV(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return L0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return L0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function F0(t){return Ld(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OV(t){ri(new Bn("platform-logger",e=>new GO(e),"PRIVATE")),ri(new Bn("heartbeat",e=>new xV(e),"PRIVATE")),Un($p,V0,t),Un($p,V0,"esm2017"),Un("fire-js","")}OV("");const VV=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:bt,SDK_VERSION:gi,_DEFAULT_ENTRY_NAME:ti,_addComponent:Fd,_addOrOverwriteComponent:KS,_apps:ni,_clearComponents:IV,_components:Ml,_getProvider:HS,_registerComponent:ri,_removeServiceInstance:wV,deleteApp:QS,getApp:SV,getApps:kV,initializeApp:Kv,onLog:YS,registerVersion:Un,setLogLevel:XS},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LV{constructor(e,n){this._delegate=e,this.firebase=n,Fd(e,new Bn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),QS(this._delegate)))}_getService(e,n=ti){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=ti){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Fd(this._delegate,e)}_addOrOverwriteComponent(e){KS(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MV={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},j0=new Ts("app-compat","Firebase",MV);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FV(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:Un,setLogLevel:XS,onLog:YS,apps:null,SDK_VERSION:gi,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:VV}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||ti,!C0(e,u))throw j0.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,c={}){const d=Kv(u,c);if(C0(e,d.name))return e[d.name];const h=new t(d,n);return e[d.name]=h,h}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const c=u.name,d=c.replace("-compat","");if(ri(u)&&u.type==="PUBLIC"){const h=(m=i())=>{if(typeof m[d]!="function")throw j0.create("invalid-app-argument",{appName:c});return m[d]()};u.serviceProps!==void 0&&Md(h,u.serviceProps),n[d]=h,t.prototype[d]=function(...m){return this._getService.bind(this,c).apply(this,u.multipleInstances?m:[])}}return u.type==="PUBLIC"?n[d]:null}function l(u,c){return c==="serverAuth"?null:c}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(){const t=FV(LV);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:ek,extendNamespace:e,createSubscribe:BS,ErrorFactory:Ts,deepExtend:Md});function e(n){Md(t,n)}return t}const jV=ek();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0=new Nh("@firebase/app-compat"),zV="@firebase/app-compat",UV="0.2.28";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $V(t){Un(zV,UV,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(yO()&&self.firebase!==void 0){z0.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&z0.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const G=jV;$V();var BV="firebase",qV="10.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */G.registerVersion(BV,qV,"app-compat");function Hv(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Ia={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Ns={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WV(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function tk(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const GV=WV,KV=tk,nk=new Ts("auth","Firebase",tk());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd=new Nh("@firebase/auth");function HV(t,...e){jd.logLevel<=ee.WARN&&jd.warn(`Auth (${gi}): ${t}`,...e)}function Hc(t,...e){jd.logLevel<=ee.ERROR&&jd.error(`Auth (${gi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t,...e){throw Qv(t,...e)}function ht(t,...e){return Qv(t,...e)}function rk(t,e,n){const r=Object.assign(Object.assign({},KV()),{[e]:n});return new Ts("auth","Firebase",r).create(e,{appName:t.name})}function Xo(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&pt(t,"argument-error"),rk(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Qv(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return nk.create(t,...e)}function x(t,e,...n){if(!t)throw Qv(e,...n)}function On(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Hc(e),new Error(e)}function In(t,e){t||On(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Yv(){return U0()==="http:"||U0()==="https:"}function U0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QV(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Yv()||zS()||"connection"in navigator)?navigator.onLine:!0}function YV(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,n){this.shortDelay=e,this.longDelay=n,In(n>e,"Short delay should be less than long delay!"),this.isMobile=vO()||qv()}get(){return QV()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv(t,e){In(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;On("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;On("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;On("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XV={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JV=new Eu(3e4,6e4);function Ve(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Le(t,e,n,r,i={}){return sk(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Yo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),ik.fetch()(ok(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function sk(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},XV),e);try{const i=new eL(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ma(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ma(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ma(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ma(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw rk(t,c,u);pt(t,c)}}catch(i){if(i instanceof bt)throw i;pt(t,"network-request-failed",{message:String(i)})}}async function pr(t,e,n,r,i={}){const s=await Le(t,e,n,r,i);return"mfaPendingCredential"in s&&pt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function ok(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Xv(t.config,i):`${t.config.apiScheme}://${i}`}function ZV(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class eL{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ht(this.auth,"network-request-failed")),JV.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ma(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ht(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(t){return t!==void 0&&t.getResponse!==void 0}function B0(t){return t!==void 0&&t.enterprise!==void 0}class tL{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ZV(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nL(t){return(await Le(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function rL(t,e){return Le(t,"GET","/v2/recaptchaConfig",Ve(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iL(t,e){return Le(t,"POST","/v1/accounts:delete",e)}async function sL(t,e){return Le(t,"POST","/v1/accounts:update",e)}async function oL(t,e){return Le(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function aL(t,e=!1){const n=W(t),r=await n.getIdToken(e),i=Dh(r);x(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:tl(hm(i.auth_time)),issuedAtTime:tl(hm(i.iat)),expirationTime:tl(hm(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function hm(t){return Number(t)*1e3}function Dh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Hc("JWT malformed, contained fewer than 3 sections"),null;try{const i=FS(n);return i?JSON.parse(i):(Hc("Failed to decode base64 JWT payload"),null)}catch(i){return Hc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function lL(t){const e=Dh(t);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof bt&&uL(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function uL({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cL{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=tl(this.lastLoginAt),this.creationTime=tl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await cr(t,oL(n,{idToken:r}));x(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?fL(s.providerUserInfo):[],a=hL(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ak(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function dL(t){const e=W(t);await zl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hL(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function fL(t){return t.map(e=>{var{providerId:n}=e,r=Hv(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mL(t,e){const n=await sk(t,{},async()=>{const r=Yo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=ok(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ik.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function pL(t,e){return Le(t,"POST","/v2/accounts:revokeToken",Ve(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lL(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return x(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await mL(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ul;return r&&(x(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(x(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(x(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ul,this.toJSON())}_performRefresh(){return On("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(t,e){x(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Qi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Hv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cL(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ak(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await cr(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return aL(this,e)}reload(){return dL(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Qi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await zl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await cr(this,iL(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:E,isAnonymous:k,providerData:b,stsTokenManager:C}=n;x(v&&C,e,"internal-error");const L=Ul.fromJSON(this.name,C);x(typeof v=="string",e,"internal-error"),Tr(d,e.name),Tr(h,e.name),x(typeof E=="boolean",e,"internal-error"),x(typeof k=="boolean",e,"internal-error"),Tr(m,e.name),Tr(y,e.name),Tr(_,e.name),Tr(w,e.name),Tr(g,e.name),Tr(p,e.name);const X=new Qi({uid:v,auth:e,email:h,emailVerified:E,displayName:d,isAnonymous:k,photoURL:y,phoneNumber:m,tenantId:_,stsTokenManager:L,createdAt:g,lastLoginAt:p});return b&&Array.isArray(b)&&(X.providerData=b.map(N=>Object.assign({},N))),w&&(X._redirectEventId=w),X}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ul;i.updateFromServerResponse(n);const s=new Qi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await zl(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0=new Map;function Kt(t){In(t instanceof Function,"Expected a class definition");let e=q0.get(t);return e?(In(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,q0.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}lk.type="NONE";const Co=lk;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(t,e,n){return`firebase:${t}:${e}:${n}`}class mo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Yi(this.userKey,i.apiKey,s),this.fullPersistenceKey=Yi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Qi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new mo(Kt(Co),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Kt(Co);const o=Yi(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Qi._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new mo(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new mo(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dk(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(uk(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hk(e))return"Blackberry";if(fk(e))return"Webos";if(Jv(e))return"Safari";if((e.includes("chrome/")||ck(e))&&!e.includes("edge/"))return"Chrome";if(Tu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function uk(t=Se()){return/firefox\//i.test(t)}function Jv(t=Se()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ck(t=Se()){return/crios\//i.test(t)}function dk(t=Se()){return/iemobile/i.test(t)}function Tu(t=Se()){return/android/i.test(t)}function hk(t=Se()){return/blackberry/i.test(t)}function fk(t=Se()){return/webos/i.test(t)}function Jo(t=Se()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function gL(t=Se()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function vL(t=Se()){var e;return Jo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function yL(){return US()&&document.documentMode===10}function mk(t=Se()){return Jo(t)||Tu(t)||fk(t)||hk(t)||/windows phone/i.test(t)||dk(t)}function _L(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pk(t,e=[]){let n;switch(t){case"Browser":n=W0(Se());break;case"Worker":n=`${W0(Se())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${gi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wL{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IL(t,e={}){return Le(t,"GET","/v2/passwordPolicy",Ve(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EL=6;class TL{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:EL,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SL{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new G0(this),this.idTokenSubscription=new G0(this),this.beforeStateQueue=new wL(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nk,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Kt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await mo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=YV()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?W(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Kt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await IL(this),n=new TL(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ts("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await pL(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Kt(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await mo.create(this,[Kt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pk(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&HV(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ne(t){return W(t)}class G0{constructor(e){this.auth=e,this.observer=null,this.addObserver=BS(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Su={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kL(t){Su=t}function Zv(t){return Su.loadJS(t)}function AL(){return Su.recaptchaV2Script}function PL(){return Su.recaptchaEnterpriseScript}function bL(){return Su.gapiScript}function gk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const RL="recaptcha-enterprise",CL="NO_RECAPTCHA";class xL{constructor(e){this.type=RL,this.auth=Ne(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{rL(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new tL(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;B0(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(CL)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&B0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=PL();l.length!==0&&(l+=a),Zv(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function K0(t,e,n,r=!1){const i=new xL(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function $l(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await K0(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await K0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}function NL(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Kt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function DL(t,e,n){const r=Ne(t);x(r._canInitEmulator,r,"emulator-config-failed"),x(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=vk(e),{host:o,port:a}=OL(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||VL()}function vk(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function OL(t){const e=vk(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:H0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:H0(o)}}}function H0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function VL(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return On("not implemented")}_getIdTokenResponse(e){return On("not implemented")}_linkToIdToken(e,n){return On("not implemented")}_getReauthenticationResolver(e){return On("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yk(t,e){return Le(t,"POST","/v1/accounts:resetPassword",Ve(t,e))}async function LL(t,e){return Le(t,"POST","/v1/accounts:update",e)}async function ML(t,e){return Le(t,"POST","/v1/accounts:signUp",e)}async function FL(t,e){return Le(t,"POST","/v1/accounts:update",Ve(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jL(t,e){return pr(t,"POST","/v1/accounts:signInWithPassword",Ve(t,e))}async function Oh(t,e){return Le(t,"POST","/v1/accounts:sendOobCode",Ve(t,e))}async function zL(t,e){return Oh(t,e)}async function UL(t,e){return Oh(t,e)}async function $L(t,e){return Oh(t,e)}async function BL(t,e){return Oh(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qL(t,e){return pr(t,"POST","/v1/accounts:signInWithEmailLink",Ve(t,e))}async function WL(t,e){return pr(t,"POST","/v1/accounts:signInWithEmailLink",Ve(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl extends Zo{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Bl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Bl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $l(e,n,"signInWithPassword",jL);case"emailLink":return qL(e,{email:this._email,oobCode:this._password});default:pt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $l(e,r,"signUpPassword",ML);case"emailLink":return WL(e,{idToken:n,email:this._email,oobCode:this._password});default:pt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nr(t,e){return pr(t,"POST","/v1/accounts:signInWithIdp",Ve(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GL="http://localhost";class qn extends Zo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):pt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Hv(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new qn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return nr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,nr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,nr(e,n)}buildRequest(){const e={requestUri:GL,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Yo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KL(t,e){return Le(t,"POST","/v1/accounts:sendVerificationCode",Ve(t,e))}async function HL(t,e){return pr(t,"POST","/v1/accounts:signInWithPhoneNumber",Ve(t,e))}async function QL(t,e){const n=await pr(t,"POST","/v1/accounts:signInWithPhoneNumber",Ve(t,e));if(n.temporaryProof)throw Ma(t,"account-exists-with-different-credential",n);return n}const YL={USER_NOT_FOUND:"user-not-found"};async function XL(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return pr(t,"POST","/v1/accounts:signInWithPhoneNumber",Ve(t,n),YL)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi extends Zo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Xi({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Xi({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return HL(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return QL(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return XL(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Xi({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JL(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ZL(t){const e=io(La(t)).link,n=e?io(La(e)).deep_link_id:null,r=io(La(t)).deep_link_id;return(r?io(La(r)).link:null)||r||n||e||t}class Vh{constructor(e){var n,r,i,s,o,a;const l=io(La(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=JL((i=l.mode)!==null&&i!==void 0?i:null);x(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=ZL(e);try{return new Vh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.providerId=vi.PROVIDER_ID}static credential(e,n){return Bl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Vh.parseLink(n);return x(r,"argument-error"),Bl._fromEmailAndCode(e,r.code,r.tenantId)}}vi.PROVIDER_ID="password";vi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea extends gr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class po extends ea{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return x("providerId"in n&&"signInMethod"in n,"argument-error"),qn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return x(e.idToken||e.accessToken,"argument-error"),qn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return po.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return po.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new po(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends ea{constructor(){super("facebook.com")}static credential(e){return qn._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";bn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends ea{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qn._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Rn.credential(n,r)}catch{return null}}}Rn.GOOGLE_SIGN_IN_METHOD="google.com";Rn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends ea{constructor(){super("github.com")}static credential(e){return qn._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.GITHUB_SIGN_IN_METHOD="github.com";Cn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eM="http://localhost";class xo extends Zo{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return nr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,nr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,nr(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new xo(r,s)}static _create(e,n){return new xo(e,n)}buildRequest(){return{requestUri:eM,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tM="saml.";class zd extends gr{constructor(e){x(e.startsWith(tM),"argument-error"),super(e)}static credentialFromResult(e){return zd.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return zd.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=xo.fromJSON(e);return x(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return xo._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends ea{constructor(){super("twitter.com")}static credential(e,n){return qn._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return xn.credential(n,r)}catch{return null}}}xn.TWITTER_SIGN_IN_METHOD="twitter.com";xn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _k(t,e){return pr(t,"POST","/v1/accounts:signUp",Ve(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Qi._fromIdTokenResponse(e,r,i),o=Q0(r);return new hn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Q0(r);return new hn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Q0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nM(t){var e;const n=Ne(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new hn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await _k(n,{returnSecureToken:!0}),i=await hn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud extends bt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ud.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ud(e,n,r,i)}}function wk(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ud._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ik(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rM(t,e){const n=W(t);await Lh(!0,n,e);const{providerUserInfo:r}=await sL(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=Ik(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function ey(t,e,n=!1){const r=await cr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return hn._forOperation(t,"link",r)}async function Lh(t,e,n){await zl(e);const r=Ik(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";x(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ek(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await cr(t,wk(r,i,e,t),n);x(s.idToken,r,"internal-error");const o=Dh(s.idToken);x(o,r,"internal-error");const{sub:a}=o;return x(t.uid===a,r,"user-mismatch"),hn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&pt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tk(t,e,n=!1){const r="signIn",i=await wk(t,r,e),s=await hn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Mh(t,e){return Tk(Ne(t),e)}async function Sk(t,e){const n=W(t);return await Lh(!1,n,e.providerId),ey(n,e)}async function kk(t,e){return Ek(W(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iM(t,e){return pr(t,"POST","/v1/accounts:signInWithCustomToken",Ve(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sM(t,e){const n=Ne(t),r=await iM(n,{token:e,returnSecureToken:!0}),i=await hn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?ty._fromServerResponse(e,n):"totpInfo"in n?ny._fromServerResponse(e,n):pt(e,"internal-error")}}class ty extends ku{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new ty(n)}}class ny extends ku{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new ny(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(t,e,n){var r;x(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),x(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(x(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(x(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ry(t){const e=Ne(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function oM(t,e,n){const r=Ne(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Fh(r,i,n),await $l(r,i,"getOobCode",UL)}async function aM(t,e,n){await yk(W(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ry(t),r})}async function lM(t,e){await FL(W(t),{oobCode:e})}async function Ak(t,e){const n=W(t),r=await yk(n,{oobCode:e}),i=r.requestType;switch(x(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":x(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":x(r.mfaInfo,n,"internal-error");default:x(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=ku._fromServerResponse(Ne(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function uM(t,e){const{data:n}=await Ak(W(t),e);return n.email}async function cM(t,e,n){const r=Ne(t),o=await $l(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",_k).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&ry(t),l}),a=await hn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function dM(t,e,n){return Mh(W(t),vi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ry(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hM(t,e,n){const r=Ne(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){x(a.handleCodeInApp,r,"argument-error"),a&&Fh(r,o,a)}s(i,n),await $l(r,i,"getOobCode",$L)}function fM(t,e){const n=Vh.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function mM(t,e,n){const r=W(t),i=vi.credentialWithLink(e,n||jl());return x(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Mh(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pM(t,e){return Le(t,"POST","/v1/accounts:createAuthUri",Ve(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gM(t,e){const n=Yv()?jl():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await pM(W(t),r);return i||[]}async function vM(t,e){const n=W(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Fh(n.auth,i,e);const{email:s}=await zL(n.auth,i);s!==t.email&&await t.reload()}async function yM(t,e,n){const r=W(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Fh(r.auth,s,n);const{email:o}=await BL(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _M(t,e){return Le(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wM(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=W(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await cr(r,_M(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function IM(t,e){return Pk(W(t),e,null)}function EM(t,e){return Pk(W(t),null,e)}async function Pk(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await cr(t,LL(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TM(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=Dh(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new go(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new SM(s,i);case"github.com":return new kM(s,i);case"google.com":return new AM(s,i);case"twitter.com":return new PM(s,i,t.screenName||null);case"custom":case"anonymous":return new go(s,null);default:return new go(s,r,i)}}class go{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class bk extends go{constructor(e,n,r,i){super(e,n,r),this.username=i}}class SM extends go{constructor(e,n){super(e,"facebook.com",n)}}class kM extends bk{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class AM extends go{constructor(e,n){super(e,"google.com",n)}}class PM extends bk{constructor(e,n,r){super(e,"twitter.com",n,r)}}function bM(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:TM(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new $i("enroll",e,n)}static _fromMfaPendingCredential(e){return new $i("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return $i._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return $i._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Ne(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>ku._fromServerResponse(r,a));x(i.mfaPendingCredential,r,"internal-error");const o=$i._fromMfaPendingCredential(i.mfaPendingCredential);return new iy(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const c=await hn._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return x(n.user,r,"internal-error"),hn._forOperation(n.user,n.operationType,u);default:pt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function RM(t,e){var n;const r=W(t),i=e;return x(e.customData.operationType,r,"argument-error"),x((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),iy._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CM(t,e){return Le(t,"POST","/v2/accounts/mfaEnrollment:start",Ve(t,e))}function xM(t,e){return Le(t,"POST","/v2/accounts/mfaEnrollment:finalize",Ve(t,e))}function NM(t,e){return Le(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Ve(t,e))}class sy{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>ku._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new sy(e)}async getSession(){return $i._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await cr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await cr(this.user,NM(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const fm=new WeakMap;function DM(t){const e=W(t);return fm.has(e)||fm.set(e,sy._fromUser(e)),fm.get(e)}const $d="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($d,"1"),this.storage.removeItem($d),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OM(){const t=Se();return Jv(t)||Jo(t)}const VM=1e3,LM=10;class Ck extends Rk{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=OM()&&_L(),this.fallbackToPolling=mk(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);yL()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,LM):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},VM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ck.type="LOCAL";const oy=Ck;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk extends Rk{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}xk.type="SESSION";const as=xk;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MM(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new jh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await MM(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Au("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(){return window}function jM(t){$e().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(){return typeof $e().WorkerGlobalScope<"u"&&typeof $e().importScripts=="function"}async function zM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function UM(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function $M(){return ay()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk="firebaseLocalStorageDb",BM=1,Bd="firebaseLocalStorage",Dk="fbase_key";class Pu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function zh(t,e){return t.transaction([Bd],e?"readwrite":"readonly").objectStore(Bd)}function qM(){const t=indexedDB.deleteDatabase(Nk);return new Pu(t).toPromise()}function Bp(){const t=indexedDB.open(Nk,BM);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Bd,{keyPath:Dk})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Bd)?e(r):(r.close(),await qM(),e(await Bp()))})})}async function Y0(t,e,n){const r=zh(t,!0).put({[Dk]:e,value:n});return new Pu(r).toPromise()}async function WM(t,e){const n=zh(t,!1).get(e),r=await new Pu(n).toPromise();return r===void 0?null:r.value}function X0(t,e){const n=zh(t,!0).delete(e);return new Pu(n).toPromise()}const GM=800,KM=3;class Ok{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>KM)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ay()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jh._getInstance($M()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await zM(),!this.activeServiceWorker)return;this.sender=new FM(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||UM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bp();return await Y0(e,$d,"1"),await X0(e,$d),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Y0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>WM(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>X0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=zh(i,!1).getAll();return new Pu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),GM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ok.type="LOCAL";const ql=Ok;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HM(t,e){return Le(t,"POST","/v2/accounts/mfaSignIn:start",Ve(t,e))}function QM(t,e){return Le(t,"POST","/v2/accounts/mfaSignIn:finalize",Ve(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YM=500,XM=6e4,Tc=1e12;class JM{constructor(e){this.auth=e,this.counter=Tc,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new ZM(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Tc;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Tc;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Tc;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class ZM{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;x(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=e4(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},XM)},YM))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function e4(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm=gk("rcb"),t4=new Eu(3e4,6e4);class n4{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=$e().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return x(r4(n),e,"argument-error"),this.shouldResolveImmediately(n)&&$0($e().grecaptcha)?Promise.resolve($e().grecaptcha):new Promise((r,i)=>{const s=$e().setTimeout(()=>{i(ht(e,"network-request-failed"))},t4.get());$e()[mm]=()=>{$e().clearTimeout(s),delete $e()[mm];const a=$e().grecaptcha;if(!a||!$0(a)){i(ht(e,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const d=l(u,c);return this.counter++,d},this.hostLanguage=n,r(a)};const o=`${AL()}?${Yo({onload:mm,render:"explicit",hl:n})}`;Zv(o).catch(()=>{clearTimeout(s),i(ht(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=$e().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function r4(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class i4{async load(e){return new JM(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk="recaptcha",s4={theme:"light",type:"image"};let o4=class{constructor(e,n,r=Object.assign({},s4)){this.parameters=r,this.type=Vk,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ne(e),this.isInvisible=this.parameters.size==="invisible",x(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;x(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new i4:new n4,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){x(!this.parameters.sitekey,this.auth,"argument-error"),x(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),x(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=$e()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){x(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){x(Yv()&&!ay(),this.auth,"internal-error"),await a4(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await nL(this.auth);x(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return x(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function a4(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Xi._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function l4(t,e,n){const r=Ne(t),i=await Uh(r,e,W(n));return new ly(i,s=>Mh(r,s))}async function u4(t,e,n){const r=W(t);await Lh(!1,r,"phone");const i=await Uh(r.auth,e,W(n));return new ly(i,s=>Sk(r,s))}async function c4(t,e,n){const r=W(t),i=await Uh(r.auth,e,W(n));return new ly(i,s=>kk(r,s))}async function Uh(t,e,n){var r;const i=await n.verify();try{x(typeof i=="string",t,"argument-error"),x(n.type===Vk,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return x(o.type==="enroll",t,"internal-error"),(await CM(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{x(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return x(a,t,"missing-multi-factor-info"),(await HM(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await KL(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function d4(t,e){await ey(W(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ls=class Qc{constructor(e){this.providerId=Qc.PROVIDER_ID,this.auth=Ne(e)}verifyPhoneNumber(e,n){return Uh(this.auth,e,W(n))}static credential(e,n){return Xi._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Qc.credentialFromTaggedObject(n)}static credentialFromError(e){return Qc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Xi._fromTokenResponse(n,r):null}};ls.PROVIDER_ID="phone";ls.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(t,e){return e?Kt(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy extends Zo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return nr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return nr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return nr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function h4(t){return Tk(t.auth,new uy(t),t.bypassAuthState)}function f4(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),Ek(n,new uy(t),t.bypassAuthState)}async function m4(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),ey(n,new uy(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return h4;case"linkViaPopup":case"linkViaRedirect":return m4;case"reauthViaPopup":case"reauthViaRedirect":return f4;default:pt(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p4=new Eu(2e3,1e4);async function g4(t,e,n){const r=Ne(t);Xo(t,e,gr);const i=Ss(r,n);return new Xn(r,"signInViaPopup",e,i).executeNotNull()}async function v4(t,e,n){const r=W(t);Xo(r.auth,e,gr);const i=Ss(r.auth,n);return new Xn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function y4(t,e,n){const r=W(t);Xo(r.auth,e,gr);const i=Ss(r.auth,n);return new Xn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Xn extends Lk{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Xn.currentPopupAction&&Xn.currentPopupAction.cancel(),Xn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=Au();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,p4.get())};e()}}Xn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _4="pendingRedirect",nl=new Map;class w4 extends Lk{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=nl.get(this.auth._key());if(!e){try{const r=await I4(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}nl.set(this.auth._key(),e)}return this.bypassAuthState||nl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function I4(t,e){const n=Fk(e),r=Mk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function cy(t,e){return Mk(t)._set(Fk(e),"true")}function E4(){nl.clear()}function dy(t,e){nl.set(t._key(),e)}function Mk(t){return Kt(t._redirectPersistence)}function Fk(t){return Yi(_4,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T4(t,e,n){return S4(t,e,n)}async function S4(t,e,n){const r=Ne(t);Xo(t,e,gr),await r._initializationPromise;const i=Ss(r,n);return await cy(i,r),i._openRedirect(r,e,"signInViaRedirect")}function k4(t,e,n){return A4(t,e,n)}async function A4(t,e,n){const r=W(t);Xo(r.auth,e,gr),await r.auth._initializationPromise;const i=Ss(r.auth,n);await cy(i,r.auth);const s=await jk(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function P4(t,e,n){return b4(t,e,n)}async function b4(t,e,n){const r=W(t);Xo(r.auth,e,gr),await r.auth._initializationPromise;const i=Ss(r.auth,n);await Lh(!1,r,e.providerId),await cy(i,r.auth);const s=await jk(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function R4(t,e){return await Ne(t)._initializationPromise,$h(t,e,!1)}async function $h(t,e,n=!1){const r=Ne(t),i=Ss(r,e),o=await new w4(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function jk(t){const e=Au(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C4=10*60*1e3;class zk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!x4(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Uk(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ht(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=C4&&this.cachedEventUids.clear(),this.cachedEventUids.has(J0(e))}saveEventToCache(e){this.cachedEventUids.add(J0(e)),this.lastProcessedEventTime=Date.now()}}function J0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Uk({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function x4(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Uk(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $k(t,e={}){return Le(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N4=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,D4=/^https?/;async function O4(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $k(t);for(const n of e)try{if(V4(n))return}catch{}pt(t,"unauthorized-domain")}function V4(t){const e=jl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!D4.test(n))return!1;if(N4.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L4=new Eu(3e4,6e4);function Z0(){const t=$e().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function M4(t){return new Promise((e,n)=>{var r,i,s;function o(){Z0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Z0(),n(ht(t,"network-request-failed"))},timeout:L4.get()})}if(!((i=(r=$e().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=$e().gapi)===null||s===void 0)&&s.load)o();else{const a=gk("iframefcb");return $e()[a]=()=>{gapi.load?o():n(ht(t,"network-request-failed"))},Zv(`${bL()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Yc=null,e})}let Yc=null;function F4(t){return Yc=Yc||M4(t),Yc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j4=new Eu(5e3,15e3),z4="__/auth/iframe",U4="emulator/auth/iframe",$4={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},B4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function q4(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Xv(e,U4):`https://${t.config.authDomain}/${z4}`,r={apiKey:e.apiKey,appName:t.name,v:gi},i=B4.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Yo(r).slice(1)}`}async function W4(t){const e=await F4(t),n=$e().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:q4(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$4,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ht(t,"network-request-failed"),a=$e().setTimeout(()=>{s(o)},j4.get());function l(){$e().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},K4=500,H4=600,Q4="_blank",Y4="http://localhost";class eI{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function X4(t,e,n,r=K4,i=H4){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},G4),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Se().toLowerCase();n&&(a=ck(u)?Q4:n),uk(u)&&(e=e||Y4,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[m,y])=>`${h}${m}=${y},`,"");if(vL(u)&&a!=="_self")return J4(e||"",a),new eI(null);const d=window.open(e||"",a,c);x(d,t,"popup-blocked");try{d.focus()}catch{}return new eI(d)}function J4(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z4="__/auth/handler",eF="emulator/auth/handler",tF=encodeURIComponent("fac");async function qp(t,e,n,r,i,s){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:gi,eventId:i};if(e instanceof gr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",TO(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof ea){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${tF}=${encodeURIComponent(l)}`:"";return`${nF(t)}?${Yo(a).slice(1)}${u}`}function nF({config:t}){return t.emulator?Xv(t,eF):`https://${t.authDomain}/${Z4}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm="webStorageSupport";class rF{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=as,this._completeRedirectFn=$h,this._overrideRedirectResult=dy}async _openPopup(e,n,r,i){var s;In((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await qp(e,n,r,jl(),i);return X4(e,o,Au())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await qp(e,n,r,jl(),i);return jM(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(In(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await W4(e),r=new zk(e);return n.register("authEvent",i=>(x(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(pm,{type:pm},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[pm];o!==void 0&&n(!!o),pt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=O4(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return mk()||Jv()||Jo()}}const iF=rF;class sF{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return On("unexpected MultiFactorSessionType")}}}class hy extends sF{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new hy(e)}_finalizeEnroll(e,n,r){return xM(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return QM(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Bk{constructor(){}static assertion(e){return hy._fromCredential(e)}}Bk.FACTOR_ID="phone";var tI="@firebase/auth",nI="1.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oF{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aF(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function lF(t){ri(new Bn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;x(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pk(t)},u=new SL(r,i,s,l);return NL(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ri(new Bn("auth-internal",e=>{const n=Ne(e.getProvider("auth").getImmediate());return(r=>new oF(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Un(tI,nI,aF(t)),Un(tI,nI,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uF=5*60;mO("authIdTokenMaxAge");function cF(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}kL({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ht("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",cF().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});lF("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dF=2e3;async function hF(t,e,n){var r;const{BuildInfo:i}=us();In(e.sessionId,"AuthEvent did not contain a session ID");const s=await vF(e.sessionId),o={};return Jo()?o.ibi=i.packageName:Tu()?o.apn=i.packageName:pt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,qp(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function fF(t){const{BuildInfo:e}=us(),n={};Jo()?n.iosBundleId=e.packageName:Tu()?n.androidPackageName=e.packageName:pt(t,"operation-not-supported-in-this-environment"),await $k(t,n)}function mF(t){const{cordova:e}=us();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,gL()?"_blank":"_system","location=yes"),n(i)})})}async function pF(t,e,n){const{cordova:r}=us();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var d;s();const h=(d=r.plugins.browsertab)===null||d===void 0?void 0:d.close;typeof h=="function"&&h(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(ht(t,"redirect-cancelled-by-user"))},dF))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),Tu()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function gF(t){var e,n,r,i,s,o,a,l,u,c;const d=us();x(typeof((e=d==null?void 0:d.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),x(typeof((n=d==null?void 0:d.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),x(typeof((s=(i=(r=d==null?void 0:d.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),x(typeof((l=(a=(o=d==null?void 0:d.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),x(typeof((c=(u=d==null?void 0:d.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function vF(t){const e=yF(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function yF(t){if(In(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _F=20;class wF extends zk{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function IF(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:SF(),postBody:null,tenantId:t.tenantId,error:ht(t,"no-auth-event")}}function EF(t,e){return Wp()._set(Gp(t),e)}async function rI(t){const e=await Wp()._get(Gp(t));return e&&await Wp()._remove(Gp(t)),e}function TF(t,e){var n,r;const i=AF(e);if(i.includes("/__/auth/callback")){const s=Xc(i),o=s.firebaseError?kF(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?ht(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function SF(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<_F;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Wp(){return Kt(oy)}function Gp(t){return Yi("authEvent",t.config.apiKey,t.name)}function kF(t){try{return JSON.parse(t)}catch{return null}}function AF(t){const e=Xc(t),n=e.link?decodeURIComponent(e.link):void 0,r=Xc(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Xc(i).link||i||r||n||t}function Xc(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return io(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PF=500;class bF{constructor(){this._redirectPersistence=as,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=$h,this._overrideRedirectResult=dy}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new wF(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){pt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){gF(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),E4(),await this._originValidation(e);const o=IF(e,r,i);await EF(e,o);const a=await hF(e,o,n),l=await mF(a);return pF(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fF(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=us(),o=setTimeout(async()=>{await rI(e),n.onEvent(iI())},PF),a=async c=>{clearTimeout(o);const d=await rI(e);let h=null;d&&(c!=null&&c.url)&&(h=TF(d,c.url)),n.onEvent(h||iI())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${s.packageName.toLowerCase()}://`;us().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(u)&&a({url:c}),typeof l=="function")try{l(c)}catch(d){console.error(d)}}}}const RF=bF;function iI(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:ht("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CF(t,e){Ne(t)._logFramework(e)}var xF="@firebase/auth-compat",NF="0.5.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DF=1e3;function rl(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function OF(){return rl()==="http:"||rl()==="https:"}function qk(t=Se()){return!!((rl()==="file:"||rl()==="ionic:"||rl()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function VF(){return qv()||Bv()}function LF(){return US()&&(document==null?void 0:document.documentMode)===11}function MF(t=Se()){return/Edge\/\d+/.test(t)}function FF(t=Se()){return LF()||MF(t)}function Wk(){try{const t=self.localStorage,e=Au();if(t)return t.setItem(e,"1"),t.removeItem(e),FF()?Vl():!0}catch{return fy()&&Vl()}return!1}function fy(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function gm(){return(OF()||zS()||qk())&&!VF()&&Wk()&&!fy()}function Gk(){return qk()&&typeof document<"u"}async function jF(){return Gk()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},DF);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function zF(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt={LOCAL:"local",NONE:"none",SESSION:"session"},Ea=x,Kk="persistence";function UF(t,e){if(Ea(Object.values(Wt).includes(e),t,"invalid-persistence-type"),qv()){Ea(e!==Wt.SESSION,t,"unsupported-persistence-type");return}if(Bv()){Ea(e===Wt.NONE,t,"unsupported-persistence-type");return}if(fy()){Ea(e===Wt.NONE||e===Wt.LOCAL&&Vl(),t,"unsupported-persistence-type");return}Ea(e===Wt.NONE||Wk(),t,"unsupported-persistence-type")}async function Kp(t){await t._initializationPromise;const e=Hk(),n=Yi(Kk,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function $F(t,e){const n=Hk();if(!n)return[];const r=Yi(Kk,t,e);switch(n.getItem(r)){case Wt.NONE:return[Co];case Wt.LOCAL:return[ql,as];case Wt.SESSION:return[as];default:return[]}}function Hk(){var t;try{return((t=zF())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BF=x;class Mr{constructor(){this.browserResolver=Kt(iF),this.cordovaResolver=Kt(RF),this.underlyingResolver=null,this._redirectPersistence=as,this._completeRedirectFn=$h,this._overrideRedirectResult=dy}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Gk()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return BF(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await jF();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qk(t){return t.unwrap()}function qF(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WF(t){return Yk(t)}function GF(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new KF(t,RM(t,e))}else if(r){const i=Yk(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function Yk(t){const{_tokenResponse:e}=t instanceof bt?t.customData:t;if(!e)return null;if(!(t instanceof bt)&&"temporaryProof"in e&&"phoneNumber"in e)return ls.credentialFromResult(t);const n=e.providerId;if(!n||n===Ia.PASSWORD)return null;let r;switch(n){case Ia.GOOGLE:r=Rn;break;case Ia.FACEBOOK:r=bn;break;case Ia.GITHUB:r=Cn;break;case Ia.TWITTER:r=xn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?xo._create(n,a):qn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new po(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof bt?r.credentialFromError(t):r.credentialFromResult(t)}function Ot(t,e){return e.catch(n=>{throw n instanceof bt&&GF(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:WF(n),additionalUserInfo:bM(n),user:Bh.getOrCreate(i)}})}async function Hp(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Ot(t,n.confirm(r))}}class KF{constructor(e,n){this.resolver=n,this.auth=qF(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Ot(Qk(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bh=class Fa{constructor(e){this._delegate=e,this.multiFactor=DM(e)}static getOrCreate(e){return Fa.USER_MAP.has(e)||Fa.USER_MAP.set(e,new Fa(e)),Fa.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Ot(this.auth,Sk(this._delegate,e))}async linkWithPhoneNumber(e,n){return Hp(this.auth,u4(this._delegate,e,n))}async linkWithPopup(e){return Ot(this.auth,y4(this._delegate,e,Mr))}async linkWithRedirect(e){return await Kp(Ne(this.auth)),P4(this._delegate,e,Mr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Ot(this.auth,kk(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Hp(this.auth,c4(this._delegate,e,n))}reauthenticateWithPopup(e){return Ot(this.auth,v4(this._delegate,e,Mr))}async reauthenticateWithRedirect(e){return await Kp(Ne(this.auth)),k4(this._delegate,e,Mr)}sendEmailVerification(e){return vM(this._delegate,e)}async unlink(e){return await rM(this._delegate,e),this}updateEmail(e){return IM(this._delegate,e)}updatePassword(e){return EM(this._delegate,e)}updatePhoneNumber(e){return d4(this._delegate,e)}updateProfile(e){return wM(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return yM(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};Bh.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=x;class Qp{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Ta(r,"invalid-api-key",{appName:e.name}),Ta(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Mr:void 0;this._delegate=n.initialize({options:{persistence:HF(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(GV),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Bh.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){DL(this._delegate,e,n)}applyActionCode(e){return lM(this._delegate,e)}checkActionCode(e){return Ak(this._delegate,e)}confirmPasswordReset(e,n){return aM(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Ot(this._delegate,cM(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return gM(this._delegate,e)}isSignInWithEmailLink(e){return fM(this._delegate,e)}async getRedirectResult(){Ta(gm(),this._delegate,"operation-not-supported-in-this-environment");const e=await R4(this._delegate,Mr);return e?Ot(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){CF(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=sI(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=sI(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return hM(this._delegate,e,n)}sendPasswordResetEmail(e,n){return oM(this._delegate,e,n||void 0)}async setPersistence(e){UF(this._delegate,e);let n;switch(e){case Wt.SESSION:n=as;break;case Wt.LOCAL:n=await Kt(ql)._isAvailable()?ql:oy;break;case Wt.NONE:n=Co;break;default:return pt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Ot(this._delegate,nM(this._delegate))}signInWithCredential(e){return Ot(this._delegate,Mh(this._delegate,e))}signInWithCustomToken(e){return Ot(this._delegate,sM(this._delegate,e))}signInWithEmailAndPassword(e,n){return Ot(this._delegate,dM(this._delegate,e,n))}signInWithEmailLink(e,n){return Ot(this._delegate,mM(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Hp(this._delegate,l4(this._delegate,e,n))}async signInWithPopup(e){return Ta(gm(),this._delegate,"operation-not-supported-in-this-environment"),Ot(this._delegate,g4(this._delegate,e,Mr))}async signInWithRedirect(e){return Ta(gm(),this._delegate,"operation-not-supported-in-this-environment"),await Kp(this._delegate),T4(this._delegate,e,Mr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return uM(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Qp.Persistence=Wt;function sI(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Bh.getOrCreate(o)),error:e,complete:n}}function HF(t,e){const n=$F(t,e);if(typeof self<"u"&&!n.includes(ql)&&n.push(ql),typeof window<"u")for(const r of[oy,as])n.includes(r)||n.push(r);return n.includes(Co)||n.push(Co),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(){this.providerId="phone",this._delegate=new ls(Qk(G.auth()))}static credential(e,n){return ls.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}my.PHONE_SIGN_IN_METHOD=ls.PHONE_SIGN_IN_METHOD;my.PROVIDER_ID=ls.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QF=x;class YF{constructor(e,n,r=G.app()){var i;QF((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new o4(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XF="auth-compat";function JF(t){t.INTERNAL.registerComponent(new Bn(XF,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Qp(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Ns.EMAIL_SIGNIN,PASSWORD_RESET:Ns.PASSWORD_RESET,RECOVER_EMAIL:Ns.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Ns.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Ns.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Ns.VERIFY_EMAIL}},EmailAuthProvider:vi,FacebookAuthProvider:bn,GithubAuthProvider:Cn,GoogleAuthProvider:Rn,OAuthProvider:po,SAMLAuthProvider:zd,PhoneAuthProvider:my,PhoneMultiFactorGenerator:Bk,RecaptchaVerifier:YF,TwitterAuthProvider:xn,Auth:Qp,AuthCredential:Zo,Error:bt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(xF,NF)}JF(G);var ZF=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,py=py||{},K=ZF||self;function qh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function bu(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function e3(t){return Object.prototype.hasOwnProperty.call(t,vm)&&t[vm]||(t[vm]=++t3)}var vm="closure_uid_"+(1e9*Math.random()>>>0),t3=0;function n3(t,e,n){return t.call.apply(t.bind,arguments)}function r3(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function wt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?wt=n3:wt=r3,wt.apply(null,arguments)}function Sc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function it(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function yi(){this.s=this.s,this.o=this.o}var i3=0;yi.prototype.s=!1;yi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),i3!=0)&&e3(this)};yi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Xk=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function gy(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function oI(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(qh(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function It(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}It.prototype.h=function(){this.defaultPrevented=!0};var s3=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};K.addEventListener("test",n,e),K.removeEventListener("test",n,e)}catch{}return t}();function Wl(t){return/^[\s\xa0]*$/.test(t)}function Wh(){var t=K.navigator;return t&&(t=t.userAgent)?t:""}function Nn(t){return Wh().indexOf(t)!=-1}function vy(t){return vy[" "](t),t}vy[" "]=function(){};function o3(t,e){var n=J3;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var a3=Nn("Opera"),No=Nn("Trident")||Nn("MSIE"),Jk=Nn("Edge"),Yp=Jk||No,Zk=Nn("Gecko")&&!(Wh().toLowerCase().indexOf("webkit")!=-1&&!Nn("Edge"))&&!(Nn("Trident")||Nn("MSIE"))&&!Nn("Edge"),l3=Wh().toLowerCase().indexOf("webkit")!=-1&&!Nn("Edge");function eA(){var t=K.document;return t?t.documentMode:void 0}var Xp;e:{var ym="",_m=function(){var t=Wh();if(Zk)return/rv:([^\);]+)(\)|;)/.exec(t);if(Jk)return/Edge\/([\d\.]+)/.exec(t);if(No)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(l3)return/WebKit\/(\S+)/.exec(t);if(a3)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(_m&&(ym=_m?_m[1]:""),No){var wm=eA();if(wm!=null&&wm>parseFloat(ym)){Xp=String(wm);break e}}Xp=ym}var Jp;if(K.document&&No){var aI=eA();Jp=aI||parseInt(Xp,10)||void 0}else Jp=void 0;var u3=Jp;function Gl(t,e){if(It.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Zk){e:{try{vy(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:c3[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Gl.$.h.call(this)}}it(Gl,It);var c3={2:"touch",3:"pen",4:"mouse"};Gl.prototype.h=function(){Gl.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ru="closure_listenable_"+(1e6*Math.random()|0),d3=0;function h3(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++d3,this.fa=this.ia=!1}function Gh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function yy(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function f3(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function tA(t){const e={};for(const n in t)e[n]=t[n];return e}const lI="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function nA(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<lI.length;s++)n=lI[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Kh(t){this.src=t,this.g={},this.h=0}Kh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=eg(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new h3(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Zp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Xk(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Gh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function eg(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var _y="closure_lm_"+(1e6*Math.random()|0),Im={};function rA(t,e,n,r,i){if(r&&r.once)return sA(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)rA(t,e[s],n,r,i);return null}return n=Ey(n),t&&t[Ru]?t.O(e,n,bu(r)?!!r.capture:!!r,i):iA(t,e,n,!1,r,i)}function iA(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=bu(i)?!!i.capture:!!i,a=Iy(t);if(a||(t[_y]=a=new Kh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=m3(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)s3||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(aA(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function m3(){function t(n){return e.call(t.src,t.listener,n)}const e=p3;return t}function sA(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)sA(t,e[s],n,r,i);return null}return n=Ey(n),t&&t[Ru]?t.P(e,n,bu(r)?!!r.capture:!!r,i):iA(t,e,n,!0,r,i)}function oA(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)oA(t,e[s],n,r,i);else r=bu(r)?!!r.capture:!!r,n=Ey(n),t&&t[Ru]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=eg(s,n,r,i),-1<n&&(Gh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Iy(t))&&(e=t.g[e.toString()],t=-1,e&&(t=eg(e,n,r,i)),(n=-1<t?e[t]:null)&&wy(n))}function wy(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ru])Zp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(aA(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Iy(e))?(Zp(n,t),n.h==0&&(n.src=null,e[_y]=null)):Gh(t)}}}function aA(t){return t in Im?Im[t]:Im[t]="on"+t}function p3(t,e){if(t.fa)t=!0;else{e=new Gl(e,this);var n=t.listener,r=t.la||t.src;t.ia&&wy(t),t=n.call(r,e)}return t}function Iy(t){return t=t[_y],t instanceof Kh?t:null}var Em="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ey(t){return typeof t=="function"?t:(t[Em]||(t[Em]=function(e){return t.handleEvent(e)}),t[Em])}function rt(){yi.call(this),this.i=new Kh(this),this.S=this,this.J=null}it(rt,yi);rt.prototype[Ru]=!0;rt.prototype.removeEventListener=function(t,e,n,r){oA(this,t,e,n,r)};function ft(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new It(e,t);else if(e instanceof It)e.target=e.target||t;else{var i=e;e=new It(r,t),nA(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=kc(o,r,!0,e)&&i}if(o=e.g=t,i=kc(o,r,!0,e)&&i,i=kc(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=kc(o,r,!1,e)&&i}rt.prototype.N=function(){if(rt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Gh(n[r]);delete t.g[e],t.h--}}this.J=null};rt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};rt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function kc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Zp(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Ty=K.JSON.stringify;class g3{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function v3(){var t=Sy;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class y3{constructor(){this.h=this.g=null}add(e,n){const r=lA.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var lA=new g3(()=>new _3,t=>t.reset());class _3{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function w3(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function I3(t){K.setTimeout(()=>{throw t},0)}let Kl,Hl=!1,Sy=new y3,uA=()=>{const t=K.Promise.resolve(void 0);Kl=()=>{t.then(E3)}};var E3=()=>{for(var t;t=v3();){try{t.h.call(t.g)}catch(n){I3(n)}var e=lA;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Hl=!1};function Hh(t,e){rt.call(this),this.h=t||1,this.g=e||K,this.j=wt(this.qb,this),this.l=Date.now()}it(Hh,rt);V=Hh.prototype;V.ga=!1;V.T=null;V.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ft(this,"tick"),this.ga&&(ky(this),this.start()))}};V.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ky(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}V.N=function(){Hh.$.N.call(this),ky(this),delete this.g};function Ay(t,e,n){if(typeof t=="function")n&&(t=wt(t,n));else if(t&&typeof t.handleEvent=="function")t=wt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:K.setTimeout(t,e||0)}function cA(t){t.g=Ay(()=>{t.g=null,t.i&&(t.i=!1,cA(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class T3 extends yi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:cA(this)}N(){super.N(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ql(t){yi.call(this),this.h=t,this.g={}}it(Ql,yi);var uI=[];function dA(t,e,n,r){Array.isArray(n)||(n&&(uI[0]=n.toString()),n=uI);for(var i=0;i<n.length;i++){var s=rA(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function hA(t){yy(t.g,function(e,n){this.g.hasOwnProperty(n)&&wy(e)},t),t.g={}}Ql.prototype.N=function(){Ql.$.N.call(this),hA(this)};Ql.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Qh(){this.g=!0}Qh.prototype.Ea=function(){this.g=!1};function S3(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function k3(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function so(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+P3(t,n)+(r?" "+r:"")})}function A3(t,e){t.info(function(){return"TIMEOUT: "+e})}Qh.prototype.info=function(){};function P3(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ty(n)}catch{return e}}var ks={},cI=null;function Yh(){return cI=cI||new rt}ks.Ta="serverreachability";function fA(t){It.call(this,ks.Ta,t)}it(fA,It);function Yl(t){const e=Yh();ft(e,new fA(e))}ks.STAT_EVENT="statevent";function mA(t,e){It.call(this,ks.STAT_EVENT,t),this.stat=e}it(mA,It);function At(t){const e=Yh();ft(e,new mA(e,t))}ks.Ua="timingevent";function pA(t,e){It.call(this,ks.Ua,t),this.size=e}it(pA,It);function Cu(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){t()},e)}var Xh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},gA={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Py(){}Py.prototype.h=null;function dI(t){return t.h||(t.h=t.i())}function vA(){}var xu={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function by(){It.call(this,"d")}it(by,It);function Ry(){It.call(this,"c")}it(Ry,It);var tg;function Jh(){}it(Jh,Py);Jh.prototype.g=function(){return new XMLHttpRequest};Jh.prototype.i=function(){return{}};tg=new Jh;function Nu(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ql(this),this.P=b3,t=Yp?125:void 0,this.V=new Hh(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new yA}function yA(){this.i=null,this.g="",this.h=!1}var b3=45e3,_A={},ng={};V=Nu.prototype;V.setTimeout=function(t){this.P=t};function rg(t,e,n){t.L=1,t.A=ef(dr(e)),t.u=n,t.S=!0,wA(t,null)}function wA(t,e){t.G=Date.now(),Du(t),t.B=dr(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),bA(n.i,"t",r),t.o=0,n=t.l.J,t.h=new yA,t.g=QA(t.l,n?e:null,!t.u),0<t.O&&(t.M=new T3(wt(t.Pa,t,t.g),t.O)),dA(t.U,t.g,"readystatechange",t.nb),e=t.I?tA(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Yl(),S3(t.j,t.v,t.B,t.m,t.W,t.u)}V.nb=function(t){t=t.target;const e=this.M;e&&Vn(t)==3?e.l():this.Pa(t)};V.Pa=function(t){try{if(t==this.g)e:{const c=Vn(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>c)&&(c!=3||Yp||this.g&&(this.h.h||this.g.ja()||pI(this.g)))){this.J||c!=4||e==7||(e==8||0>=d?Yl(3):Yl(2)),Zh(this);var n=this.g.da();this.ca=n;t:if(IA(this)){var r=pI(this.g);t="";var i=r.length,s=Vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Bi(this),il(this);var o="";break t}this.h.i=new K.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,k3(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Wl(a)){var u=a;break t}}u=null}if(n=u)so(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ig(this,n);else{this.i=!1,this.s=3,At(12),Bi(this),il(this);break e}}this.S?(EA(this,c,o),Yp&&this.i&&c==3&&(dA(this.U,this.V,"tick",this.mb),this.V.start())):(so(this.j,this.m,o,null),ig(this,o)),c==4&&Bi(this),this.i&&!this.J&&(c==4?WA(this.l,this):(this.i=!1,Du(this)))}else Q3(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,At(12)):(this.s=0,At(13)),Bi(this),il(this)}}}catch{}finally{}};function IA(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function EA(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=R3(t,n),i==ng){e==4&&(t.s=4,At(14),r=!1),so(t.j,t.m,null,"[Incomplete Response]");break}else if(i==_A){t.s=4,At(15),so(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else so(t.j,t.m,i,null),ig(t,i);IA(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,At(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Vy(e),e.M=!0,At(11))):(so(t.j,t.m,n,"[Invalid Chunked Response]"),Bi(t),il(t))}V.mb=function(){if(this.g){var t=Vn(this.g),e=this.g.ja();this.o<e.length&&(Zh(this),EA(this,t,e),this.i&&t!=4&&Du(this))}};function R3(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?ng:(n=Number(e.substring(n,r)),isNaN(n)?_A:(r+=1,r+n>e.length?ng:(e=e.slice(r,r+n),t.o=r+n,e)))}V.cancel=function(){this.J=!0,Bi(this)};function Du(t){t.Y=Date.now()+t.P,TA(t,t.P)}function TA(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Cu(wt(t.lb,t),e)}function Zh(t){t.C&&(K.clearTimeout(t.C),t.C=null)}V.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(A3(this.j,this.B),this.L!=2&&(Yl(),At(17)),Bi(this),this.s=2,il(this)):TA(this,this.Y-t)};function il(t){t.l.H==0||t.J||WA(t.l,t)}function Bi(t){Zh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,ky(t.V),hA(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function ig(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||sg(n.i,t))){if(!t.K&&sg(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Gd(n),sf(n);else break e;Oy(n),At(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Cu(wt(n.ib,n),6e3));if(1>=xA(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else qi(n,11)}else if((t.K||n.g==t)&&Gd(n),!Wl(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const d=u[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Cy(s,s.h),s.h=null))}if(r.F){const _=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,ge(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=HA(r,r.J?r.pa:null,r.Y),o.K){NA(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(Zh(a),Du(a)),r.g=o}else BA(r);0<n.j.length&&of(n)}else u[0]!="stop"&&u[0]!="close"||qi(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?qi(n,7):Dy(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Yl(4)}catch{}}function C3(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(qh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function x3(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(qh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function SA(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(qh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=x3(t),r=C3(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var kA=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function N3(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ji(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ji){this.h=t.h,qd(this,t.j),this.s=t.s,this.g=t.g,Wd(this,t.m),this.l=t.l;var e=t.i,n=new Xl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),hI(this,n),this.o=t.o}else t&&(e=String(t).match(kA))?(this.h=!1,qd(this,e[1]||"",!0),this.s=ja(e[2]||""),this.g=ja(e[3]||"",!0),Wd(this,e[4]),this.l=ja(e[5]||"",!0),hI(this,e[6]||"",!0),this.o=ja(e[7]||"")):(this.h=!1,this.i=new Xl(null,this.h))}Ji.prototype.toString=function(){var t=[],e=this.j;e&&t.push(za(e,fI,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(za(e,fI,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(za(n,n.charAt(0)=="/"?V3:O3,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",za(n,M3)),t.join("")};function dr(t){return new Ji(t)}function qd(t,e,n){t.j=n?ja(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Wd(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function hI(t,e,n){e instanceof Xl?(t.i=e,F3(t.i,t.h)):(n||(e=za(e,L3)),t.i=new Xl(e,t.h))}function ge(t,e,n){t.i.set(e,n)}function ef(t){return ge(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ja(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function za(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,D3),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function D3(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var fI=/[#\/\?@]/g,O3=/[#\?:]/g,V3=/[#\?]/g,L3=/[#\?@]/g,M3=/#/g;function Xl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function _i(t){t.g||(t.g=new Map,t.h=0,t.i&&N3(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=Xl.prototype;V.add=function(t,e){_i(this),this.i=null,t=ta(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function AA(t,e){_i(t),e=ta(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function PA(t,e){return _i(t),e=ta(t,e),t.g.has(e)}V.forEach=function(t,e){_i(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};V.ta=function(){_i(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};V.Z=function(t){_i(this);let e=[];if(typeof t=="string")PA(this,t)&&(e=e.concat(this.g.get(ta(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};V.set=function(t,e){return _i(this),this.i=null,t=ta(this,t),PA(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function bA(t,e,n){AA(t,e),0<n.length&&(t.i=null,t.g.set(ta(t,e),gy(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function ta(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function F3(t,e){e&&!t.j&&(_i(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(AA(this,r),bA(this,i,n))},t)),t.j=e}var j3=class{constructor(t,e){this.g=t,this.map=e}};function RA(t){this.l=t||z3,K.PerformanceNavigationTiming?(t=K.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(K.g&&K.g.Ka&&K.g.Ka()&&K.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var z3=10;function CA(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function xA(t){return t.h?1:t.g?t.g.size:0}function sg(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Cy(t,e){t.g?t.g.add(e):t.h=e}function NA(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}RA.prototype.cancel=function(){if(this.i=DA(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function DA(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return gy(t.i)}var U3=class{stringify(t){return K.JSON.stringify(t,void 0)}parse(t){return K.JSON.parse(t,void 0)}};function $3(){this.g=new U3}function B3(t,e,n){const r=n||"";try{SA(t,function(i,s){let o=i;bu(i)&&(o=Ty(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function q3(t,e){const n=new Qh;if(K.Image){const r=new Image;r.onload=Sc(Ac,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Sc(Ac,n,r,"TestLoadImage: error",!1,e),r.onabort=Sc(Ac,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Sc(Ac,n,r,"TestLoadImage: timeout",!1,e),K.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ac(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function tf(t){this.l=t.ec||null,this.j=t.ob||!1}it(tf,Py);tf.prototype.g=function(){return new nf(this.l,this.j)};tf.prototype.i=function(t){return function(){return t}}({});function nf(t,e){rt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=xy,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}it(nf,rt);var xy=0;V=nf.prototype;V.open=function(t,e){if(this.readyState!=xy)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Jl(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||K).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ou(this)),this.readyState=xy};V.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Jl(this)),this.g&&(this.readyState=3,Jl(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof K.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;OA(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function OA(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}V.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ou(this):Jl(this),this.readyState==3&&OA(this)}};V.Za=function(t){this.g&&(this.response=this.responseText=t,Ou(this))};V.Ya=function(t){this.g&&(this.response=t,Ou(this))};V.ka=function(){this.g&&Ou(this)};function Ou(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Jl(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Jl(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(nf.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var W3=K.JSON.parse;function De(t){rt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=VA,this.L=this.M=!1}it(De,rt);var VA="",G3=/^https?$/i,K3=["POST","PUT"];V=De.prototype;V.Oa=function(t){this.M=t};V.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():tg.g(),this.C=this.u?dI(this.u):dI(tg),this.g.onreadystatechange=wt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){mI(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=K.FormData&&t instanceof K.FormData,!(0<=Xk(K3,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{FA(this),0<this.B&&((this.L=H3(this.g))?(this.g.timeout=this.B,this.g.ontimeout=wt(this.ua,this)):this.A=Ay(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){mI(this,s)}};function H3(t){return No&&typeof t.timeout=="number"&&t.ontimeout!==void 0}V.ua=function(){typeof py<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ft(this,"timeout"),this.abort(8))};function mI(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,LA(t),rf(t)}function LA(t){t.F||(t.F=!0,ft(t,"complete"),ft(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ft(this,"complete"),ft(this,"abort"),rf(this))};V.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),rf(this,!0)),De.$.N.call(this)};V.La=function(){this.s||(this.G||this.v||this.l?MA(this):this.kb())};V.kb=function(){MA(this)};function MA(t){if(t.h&&typeof py<"u"&&(!t.C[1]||Vn(t)!=4||t.da()!=2)){if(t.v&&Vn(t)==4)Ay(t.La,0,t);else if(ft(t,"readystatechange"),Vn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(kA)[1]||null;!i&&K.self&&K.self.location&&(i=K.self.location.protocol.slice(0,-1)),r=!G3.test(i?i.toLowerCase():"")}n=r}if(n)ft(t,"complete"),ft(t,"success");else{t.m=6;try{var s=2<Vn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",LA(t)}}finally{rf(t)}}}}function rf(t,e){if(t.g){FA(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ft(t,"ready");try{n.onreadystatechange=r}catch{}}}function FA(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(K.clearTimeout(t.A),t.A=null)}V.isActive=function(){return!!this.g};function Vn(t){return t.g?t.g.readyState:0}V.da=function(){try{return 2<Vn(this)?this.g.status:-1}catch{return-1}};V.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),W3(e)}};function pI(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case VA:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Q3(t){const e={};t=(t.g&&2<=Vn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Wl(t[r]))continue;var n=w3(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}f3(e,function(r){return r.join(", ")})}V.Ia=function(){return this.m};V.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function jA(t){let e="";return yy(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Ny(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=jA(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ge(t,e,n))}function Sa(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function zA(t){this.Ga=0,this.j=[],this.l=new Qh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Sa("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Sa("baseRetryDelayMs",5e3,t),this.hb=Sa("retryDelaySeedMs",1e4,t),this.eb=Sa("forwardChannelMaxRetries",2,t),this.xa=Sa("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new RA(t&&t.concurrentRequestLimit),this.Ja=new $3,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}V=zA.prototype;V.ra=8;V.H=1;function Dy(t){if(UA(t),t.H==3){var e=t.W++,n=dr(t.I);if(ge(n,"SID",t.K),ge(n,"RID",e),ge(n,"TYPE","terminate"),Vu(t,n),e=new Nu(t,t.l,e),e.L=2,e.A=ef(dr(n)),n=!1,K.navigator&&K.navigator.sendBeacon)try{n=K.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&K.Image&&(new Image().src=e.A,n=!0),n||(e.g=QA(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Du(e)}KA(t)}function sf(t){t.g&&(Vy(t),t.g.cancel(),t.g=null)}function UA(t){sf(t),t.u&&(K.clearTimeout(t.u),t.u=null),Gd(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&K.clearTimeout(t.m),t.m=null)}function of(t){if(!CA(t.i)&&!t.m){t.m=!0;var e=t.Na;Kl||uA(),Hl||(Kl(),Hl=!0),Sy.add(e,t),t.C=0}}function Y3(t,e){return xA(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Cu(wt(t.Na,t,e),GA(t,t.C)),t.C++,!0)}V.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Nu(this,this.l,t);let s=this.s;if(this.U&&(s?(s=tA(s),nA(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=$A(this,i,e),n=dr(this.I),ge(n,"RID",t),ge(n,"CVER",22),this.F&&ge(n,"X-HTTP-Session-Id",this.F),Vu(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(jA(s)))+"&"+e:this.o&&Ny(n,this.o,s)),Cy(this.i,i),this.bb&&ge(n,"TYPE","init"),this.P?(ge(n,"$req",e),ge(n,"SID","null"),i.aa=!0,rg(i,n,null)):rg(i,n,e),this.H=2}}else this.H==3&&(t?gI(this,t):this.j.length==0||CA(this.i)||gI(this))};function gI(t,e){var n;e?n=e.m:n=t.W++;const r=dr(t.I);ge(r,"SID",t.K),ge(r,"RID",n),ge(r,"AID",t.V),Vu(t,r),t.o&&t.s&&Ny(r,t.o,t.s),n=new Nu(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=$A(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Cy(t.i,n),rg(n,r,e)}function Vu(t,e){t.na&&yy(t.na,function(n,r){ge(e,r,n)}),t.h&&SA({},function(n,r){ge(e,r,n)})}function $A(t,e,n){n=Math.min(t.j.length,n);var r=t.h?wt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{B3(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function BA(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Kl||uA(),Hl||(Kl(),Hl=!0),Sy.add(e,t),t.A=0}}function Oy(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Cu(wt(t.Ma,t),GA(t,t.A)),t.A++,!0)}V.Ma=function(){if(this.u=null,qA(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Cu(wt(this.jb,this),t)}};V.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,At(10),sf(this),qA(this))};function Vy(t){t.B!=null&&(K.clearTimeout(t.B),t.B=null)}function qA(t){t.g=new Nu(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=dr(t.wa);ge(e,"RID","rpc"),ge(e,"SID",t.K),ge(e,"AID",t.V),ge(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ge(e,"TO",t.qa),ge(e,"TYPE","xmlhttp"),Vu(t,e),t.o&&t.s&&Ny(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=ef(dr(e)),n.u=null,n.S=!0,wA(n,t)}V.ib=function(){this.v!=null&&(this.v=null,sf(this),Oy(this),At(19))};function Gd(t){t.v!=null&&(K.clearTimeout(t.v),t.v=null)}function WA(t,e){var n=null;if(t.g==e){Gd(t),Vy(t),t.g=null;var r=2}else if(sg(t.i,e))n=e.F,NA(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=Yh(),ft(r,new pA(r,n)),of(t)}else BA(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&Y3(t,e)||r==2&&Oy(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:qi(t,5);break;case 4:qi(t,10);break;case 3:qi(t,6);break;default:qi(t,2)}}}function GA(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function qi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=wt(t.pb,t);n||(n=new Ji("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||qd(n,"https"),ef(n)),q3(n.toString(),r)}else At(2);t.H=0,t.h&&t.h.za(e),KA(t),UA(t)}V.pb=function(t){t?(this.l.info("Successfully pinged google.com"),At(2)):(this.l.info("Failed to ping google.com"),At(1))};function KA(t){if(t.H=0,t.ma=[],t.h){const e=DA(t.i);(e.length!=0||t.j.length!=0)&&(oI(t.ma,e),oI(t.ma,t.j),t.i.i.length=0,gy(t.j),t.j.length=0),t.h.ya()}}function HA(t,e,n){var r=n instanceof Ji?dr(n):new Ji(n);if(r.g!="")e&&(r.g=e+"."+r.g),Wd(r,r.m);else{var i=K.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Ji(null);r&&qd(s,r),e&&(s.g=e),i&&Wd(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ge(r,n,e),ge(r,"VER",t.ra),Vu(t,r),r}function QA(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new De(new tf({ob:n})):new De(t.va),e.Oa(t.J),e}V.isActive=function(){return!!this.h&&this.h.isActive(this)};function YA(){}V=YA.prototype;V.Ba=function(){};V.Aa=function(){};V.za=function(){};V.ya=function(){};V.isActive=function(){return!0};V.Va=function(){};function Kd(){if(No&&!(10<=Number(u3)))throw Error("Environmental error: no available transport.")}Kd.prototype.g=function(t,e){return new Yt(t,e)};function Yt(t,e){rt.call(this),this.g=new zA(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Wl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Wl(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new na(this)}it(Yt,rt);Yt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;At(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=HA(t,null,t.Y),of(t)};Yt.prototype.close=function(){Dy(this.g)};Yt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ty(t),t=n);e.j.push(new j3(e.fb++,t)),e.H==3&&of(e)};Yt.prototype.N=function(){this.g.h=null,delete this.j,Dy(this.g),delete this.g,Yt.$.N.call(this)};function XA(t){by.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}it(XA,by);function JA(){Ry.call(this),this.status=1}it(JA,Ry);function na(t){this.g=t}it(na,YA);na.prototype.Ba=function(){ft(this.g,"a")};na.prototype.Aa=function(t){ft(this.g,new XA(t))};na.prototype.za=function(t){ft(this.g,new JA)};na.prototype.ya=function(){ft(this.g,"b")};function X3(){this.blockSize=-1}function En(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}it(En,X3);En.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Tm(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}En.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Tm(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Tm(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Tm(this,r),i=0;break}}this.h=i,this.i+=e};En.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ce(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var J3={};function Ly(t){return-128<=t&&128>t?o3(t,function(e){return new ce([e|0],0>e?-1:0)}):new ce([t|0],0>t?-1:0)}function Ln(t){if(isNaN(t)||!isFinite(t))return vo;if(0>t)return ut(Ln(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=og;return new ce(e,0)}function ZA(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ut(ZA(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Ln(Math.pow(e,8)),r=vo,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Ln(Math.pow(e,s)),r=r.R(s).add(Ln(o))):(r=r.R(n),r=r.add(Ln(o)))}return r}var og=4294967296,vo=Ly(0),ag=Ly(1),vI=Ly(16777216);V=ce.prototype;V.ea=function(){if(sn(this))return-ut(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:og+r)*e,e*=og}return t};V.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Jn(this))return"0";if(sn(this))return"-"+ut(this).toString(t);for(var e=Ln(Math.pow(t,6)),n=this,r="";;){var i=Qd(n,e).g;n=Hd(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Jn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};V.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Jn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function sn(t){return t.h==-1}V.X=function(t){return t=Hd(this,t),sn(t)?-1:Jn(t)?0:1};function ut(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ce(n,~t.h).add(ag)}V.abs=function(){return sn(this)?ut(this):this};V.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ce(n,n[n.length-1]&-2147483648?-1:0)};function Hd(t,e){return t.add(ut(e))}V.R=function(t){if(Jn(this)||Jn(t))return vo;if(sn(this))return sn(t)?ut(this).R(ut(t)):ut(ut(this).R(t));if(sn(t))return ut(this.R(ut(t)));if(0>this.X(vI)&&0>t.X(vI))return Ln(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Pc(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Pc(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Pc(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Pc(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ce(n,0)};function Pc(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ka(t,e){this.g=t,this.h=e}function Qd(t,e){if(Jn(e))throw Error("division by zero");if(Jn(t))return new ka(vo,vo);if(sn(t))return e=Qd(ut(t),e),new ka(ut(e.g),ut(e.h));if(sn(e))return e=Qd(t,ut(e)),new ka(ut(e.g),e.h);if(30<t.g.length){if(sn(t)||sn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=ag,r=e;0>=r.X(t);)n=yI(n),r=yI(r);var i=Ds(n,1),s=Ds(r,1);for(r=Ds(r,2),n=Ds(n,2);!Jn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Ds(r,1),n=Ds(n,1)}return e=Hd(t,i.R(e)),new ka(i,e)}for(i=vo;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Ln(n),o=s.R(e);sn(o)||0<o.X(t);)n-=r,s=Ln(n),o=s.R(e);Jn(s)&&(s=ag),i=i.add(s),t=Hd(t,o)}return new ka(i,t)}V.gb=function(t){return Qd(this,t).h};V.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ce(n,this.h&t.h)};V.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ce(n,this.h|t.h)};V.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ce(n,this.h^t.h)};function yI(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ce(n,t.h)}function Ds(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ce(i,t.h)}Kd.prototype.createWebChannel=Kd.prototype.g;Yt.prototype.send=Yt.prototype.u;Yt.prototype.open=Yt.prototype.m;Yt.prototype.close=Yt.prototype.close;Xh.NO_ERROR=0;Xh.TIMEOUT=8;Xh.HTTP_ERROR=6;gA.COMPLETE="complete";vA.EventType=xu;xu.OPEN="a";xu.CLOSE="b";xu.ERROR="c";xu.MESSAGE="d";rt.prototype.listen=rt.prototype.O;De.prototype.listenOnce=De.prototype.P;De.prototype.getLastError=De.prototype.Sa;De.prototype.getLastErrorCode=De.prototype.Ia;De.prototype.getStatus=De.prototype.da;De.prototype.getResponseJson=De.prototype.Wa;De.prototype.getResponseText=De.prototype.ja;De.prototype.send=De.prototype.ha;De.prototype.setWithCredentials=De.prototype.Oa;En.prototype.digest=En.prototype.l;En.prototype.reset=En.prototype.reset;En.prototype.update=En.prototype.j;ce.prototype.add=ce.prototype.add;ce.prototype.multiply=ce.prototype.R;ce.prototype.modulo=ce.prototype.gb;ce.prototype.compare=ce.prototype.X;ce.prototype.toNumber=ce.prototype.ea;ce.prototype.toString=ce.prototype.toString;ce.prototype.getBits=ce.prototype.D;ce.fromNumber=Ln;ce.fromString=ZA;var Z3=function(){return new Kd},ej=function(){return Yh()},Sm=Xh,tj=gA,nj=ks,_I={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},bc=vA,rj=De,ij=En,yo=ce;const wI="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ra="10.8.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=new Nh("@firebase/firestore");function Fs(){return ii.logLevel}function sj(t){ii.setLogLevel(t)}function P(t,...e){if(ii.logLevel<=ee.DEBUG){const n=e.map(My);ii.debug(`Firestore (${ra}): ${t}`,...n)}}function je(t,...e){if(ii.logLevel<=ee.ERROR){const n=e.map(My);ii.error(`Firestore (${ra}): ${t}`,...n)}}function Tn(t,...e){if(ii.logLevel<=ee.WARN){const n=e.map(My);ii.warn(`Firestore (${ra}): ${t}`,...n)}}function My(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t="Unexpected state"){const e=`FIRESTORE (${ra}) INTERNAL ASSERTION FAILED: `+t;throw je(e),new Error(e)}function B(t,e){t||M()}function oj(t,e){t||M()}function O(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class A extends bt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class aj{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class lj{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class uj{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new nt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new nt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{P("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(P("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new nt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(P("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(B(typeof r.accessToken=="string"),new eP(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return B(e===null||typeof e=="string"),new et(e)}}class cj{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class dj{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new cj(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hj{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fj{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&P("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,P("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{P("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):P("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(B(typeof n.token=="string"),this.R=n.token,new hj(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mj(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=mj(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function H(t,e){return t<e?-1:t>e?1:0}function Do(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function nP(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new A(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new A(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new A(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new A(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Te.fromMillis(Date.now())}static fromDate(e){return Te.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Te(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new q(e)}static min(){return new q(new Te(0,0))}static max(){return new q(new Te(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,n,r){n===void 0?n=0:n>e.length&&M(),r===void 0?r=e.length-n:r>e.length-n&&M(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Zl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Zl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class te extends Zl{construct(e,n,r){return new te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new A(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new te(n)}static emptyPath(){return new te([])}}const pj=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ie extends Zl{construct(e,n,r){return new Ie(e,n,r)}static isValidIdentifier(e){return pj.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ie.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ie(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new A(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new A(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new A(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new A(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ie(n)}static emptyPath(){return new Ie([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.path=e}static fromPath(e){return new D(te.fromString(e))}static fromName(e){return new D(te.fromString(e).popFirst(5))}static empty(){return new D(te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new D(new te(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function lg(t){return t.fields.find(e=>e.kind===2)}function xi(t){return t.fields.filter(e=>e.kind!==2)}Yd.UNKNOWN_ID=-1;class Jc{constructor(e,n){this.fieldPath=e,this.kind=n}}class eu{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new eu(0,Xt.min())}}function rP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=q.fromTimestamp(r===1e9?new Te(n+1,0):new Te(n,r));return new Xt(i,D.empty(),e)}function iP(t){return new Xt(t.readTime,t.key,-1)}class Xt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Xt(q.min(),D.empty(),-1)}static max(){return new Xt(q.max(),D.empty(),-1)}}function Fy(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=D.comparator(t.documentKey,e.documentKey),n!==0?n:H(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class oP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wi(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==sP)throw t;P("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new I((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof I?n:I.resolve(n)}catch(n){return I.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):I.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):I.reject(n)}static resolve(e){return new I((n,r)=>{n(e)})}static reject(e){return new I((n,r)=>{r(e)})}static waitFor(e){return new I((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=I.resolve(!1);for(const r of e)n=n.next(i=>i?I.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new I((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new I((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new nt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new sl(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=jy(r.target.error);this.V.reject(new sl(e,i))}}static open(e,n,r,i){try{return new af(n,e.transaction(i,r))}catch(s){throw new sl(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(P("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new vj(n)}}class an{constructor(e,n,r){this.name=e,this.version=n,this.p=r,an.S(Se())===12.2&&je("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return P("SimpleDb","Removing database:",e),Ni(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Vl())return!1;if(an.C())return!0;const e=Se(),n=an.S(e),r=0<n&&n<10,i=an.v(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(P("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new sl(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new A(S.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new A(S.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new sl(e,o))},i.onupgradeneeded=s=>{P("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{P("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=af.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),I.reject(u))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(P("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class gj{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return Ni(this.k.delete())}}class sl extends A{constructor(e,n){super(S.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Ii(t){return t.name==="IndexedDbTransactionError"}class vj{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(P("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(P("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Ni(r)}add(e){return P("SimpleDb","ADD",this.store.name,e,e),Ni(this.store.add(e))}get(e){return Ni(this.store.get(e)).next(n=>(n===void 0&&(n=null),P("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return P("SimpleDb","DELETE",this.store.name,e),Ni(this.store.delete(e))}count(){return P("SimpleDb","COUNT",this.store.name),Ni(this.store.count())}W(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new I((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,l)=>{o.push(l)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new I((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(e,n){P("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.G(i,n)}Z(e){const n=this.cursor({});return new I((r,i)=>{n.onerror=s=>{const o=jy(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new I((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new gj(a),u=n(a.primaryKey,a.value,l);if(u instanceof I){const c=u.catch(d=>(l.done(),I.reject(d)));r.push(c)}l.isDone?i():l.$===null?a.continue():a.continue(l.$)}}).next(()=>I.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Ni(t){return new I((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=jy(r.target.error);n(i)}})}let II=!1;function jy(t){const e=an.S(Se());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new A("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return II||(II=!0,setTimeout(()=>{throw r},0)),r}}return t}class yj{constructor(e,n){this.asyncQueue=e,this.X=n,this.task=null}start(){this.ee(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ee(e){P("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{P("IndexBackfiller",`Documents written: ${await this.X.te()}`)}catch(n){Ii(n)?P("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await wi(n)}await this.ee(6e4)})}}class _j{constructor(e,n){this.localStore=e,this.persistence=n}async te(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.ne(n,e))}ne(e,n){const r=new Set;let i=n,s=!0;return I.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return P("IndexBackfiller",`Processing collection: ${o}`),this.re(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}re(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ie(i,s)).next(a=>(P("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}ie(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=iP(s);Fy(o,r)>0&&(r=o)}),new Xt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Ft._e=-1;function Lu(t){return t==null}function tu(t){return t===0&&1/t==-1/0}function aP(t){return typeof t=="number"&&Number.isInteger(t)&&!tu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=EI(e)),e=wj(t.get(n),e);return EI(e)}function wj(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function EI(t){return t+""}function Mn(t){const e=t.length;if(B(e>=2),e===2)return B(t.charAt(0)===""&&t.charAt(1)===""),te.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&M(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:M()}s=o+2}return new te(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(t,e){return[t,Rt(e)]}function lP(t,e,n){return[t,Rt(e),n]}const Ij={},Ej=["prefixPath","collectionGroup","readTime","documentId"],Tj=["prefixPath","collectionGroup","documentId"],Sj=["collectionGroup","readTime","prefixPath","documentId"],kj=["canonicalId","targetId"],Aj=["targetId","path"],Pj=["path","targetId"],bj=["collectionId","parent"],Rj=["indexId","uid"],Cj=["uid","sequenceNumber"],xj=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Nj=["indexId","uid","orderedDocumentKey"],Dj=["userId","collectionPath","documentId"],Oj=["userId","collectionPath","largestBatchId"],Vj=["userId","collectionGroup","largestBatchId"],uP=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Lj=[...uP,"documentOverlays"],cP=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],dP=cP,Mj=[...dP,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug extends oP{constructor(e,n){super(),this.ae=e,this.currentSequenceNumber=n}}function st(t,e){const n=O(t);return an.M(n.ae,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function As(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function hP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e,n){this.comparator=e,this.root=n||lt.EMPTY}insert(e,n){return new fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(e){return new fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Rc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Rc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Rc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Rc(this.root,e,this.comparator,!0)}}class Rc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class lt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??lt.RED,this.left=i??lt.EMPTY,this.right=s??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new lt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return lt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const e=this.left.check();if(e!==this.right.check())throw M();return e+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(e,n,r,i,s){return this}insert(e,n,r){return new lt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.comparator=e,this.data=new fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new kI(this.data.getIterator())}getIteratorFrom(e){return new kI(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof de)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new de(this.comparator);return n.data=e,n}}class kI{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Os(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.fields=e,e.sort(Ie.comparator)}static empty(){return new jt([])}unionWith(e){let n=new de(Ie.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Do(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fj(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new fP("Invalid base64 string: "+s):s}}(e);return new Ye(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ye(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ye.EMPTY_BYTE_STRING=new Ye("");const jj=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function si(t){if(B(!!t),typeof t=="string"){let e=0;const n=jj.exec(t);if(B(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ce(t.seconds),nanos:Ce(t.nanos)}}function Ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function oi(t){return typeof t=="string"?Ye.fromBase64String(t):Ye.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function zy(t){const e=t.mapValue.fields.__previous_value__;return lf(e)?zy(e):e}function nu(t){const e=si(t.mapValue.fields.__local_write_time__.timestampValue);return new Te(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zj{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class ai{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ai("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ai&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},ed={nullValue:"NULL_VALUE"};function cs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?lf(t)?4:mP(t)?9007199254740991:10:M()}function Wn(t,e){if(t===e)return!0;const n=cs(t);if(n!==cs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return nu(t).isEqual(nu(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=si(i.timestampValue),a=si(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return oi(i.bytesValue).isEqual(oi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ce(i.geoPointValue.latitude)===Ce(s.geoPointValue.latitude)&&Ce(i.geoPointValue.longitude)===Ce(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ce(i.integerValue)===Ce(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ce(i.doubleValue),a=Ce(s.doubleValue);return o===a?tu(o)===tu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Do(t.arrayValue.values||[],e.arrayValue.values||[],Wn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(SI(o)!==SI(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Wn(o[l],a[l])))return!1;return!0}(t,e);default:return M()}}function ru(t,e){return(t.values||[]).find(n=>Wn(n,e))!==void 0}function li(t,e){if(t===e)return 0;const n=cs(t),r=cs(e);if(n!==r)return H(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return H(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ce(s.integerValue||s.doubleValue),l=Ce(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return AI(t.timestampValue,e.timestampValue);case 4:return AI(nu(t),nu(e));case 5:return H(t.stringValue,e.stringValue);case 6:return function(s,o){const a=oi(s),l=oi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=H(a[u],l[u]);if(c!==0)return c}return H(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=H(Ce(s.latitude),Ce(o.latitude));return a!==0?a:H(Ce(s.longitude),Ce(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=li(a[u],l[u]);if(c)return c}return H(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Fr.mapValue&&o===Fr.mapValue)return 0;if(s===Fr.mapValue)return 1;if(o===Fr.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let d=0;d<l.length&&d<c.length;++d){const h=H(l[d],c[d]);if(h!==0)return h;const m=li(a[l[d]],u[c[d]]);if(m!==0)return m}return H(l.length,c.length)}(t.mapValue,e.mapValue);default:throw M()}}function AI(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return H(t,e);const n=si(t),r=si(e),i=H(n.seconds,r.seconds);return i!==0?i:H(n.nanos,r.nanos)}function Oo(t){return cg(t)}function cg(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=si(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return oi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return D.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=cg(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${cg(n.fields[o])}`;return i+"}"}(t.mapValue):M()}function ds(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function dg(t){return!!t&&"integerValue"in t}function iu(t){return!!t&&"arrayValue"in t}function PI(t){return!!t&&"nullValue"in t}function bI(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function td(t){return!!t&&"mapValue"in t}function ol(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return As(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ol(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ol(t.arrayValue.values[n]);return e}return Object.assign({},t)}function mP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function Uj(t){return"nullValue"in t?ed:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?ds(ai.empty(),D.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:M()}function $j(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?ds(ai.empty(),D.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?Fr:M()}function RI(t,e){const n=li(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function CI(t,e){const n=li(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.value=e}static empty(){return new ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!td(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ol(n)}setAll(e){let n=Ie.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ol(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());td(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Wn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];td(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){As(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ct(ol(this.value))}}function pP(t){const e=[];return As(t.fields,(n,r)=>{const i=new Ie([n]);if(td(r)){const s=pP(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new jt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ve(e,0,q.min(),q.min(),q.min(),ct.empty(),0)}static newFoundDocument(e,n,r,i){return new ve(e,1,n,q.min(),r,i,0)}static newNoDocument(e,n){return new ve(e,2,n,q.min(),q.min(),ct.empty(),0)}static newUnknownDocument(e,n){return new ve(e,3,n,q.min(),q.min(),ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ve&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ve(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,n){this.position=e,this.inclusive=n}}function xI(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=D.comparator(D.fromName(o.referenceValue),n.key):r=li(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function NI(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Wn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,n="asc"){this.field=e,this.dir=n}}function Bj(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{}class ne extends gP{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new qj(e,n,r):n==="array-contains"?new Kj(e,r):n==="in"?new EP(e,r):n==="not-in"?new Hj(e,r):n==="array-contains-any"?new Qj(e,r):new ne(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Wj(e,r):new Gj(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(li(n,this.value)):n!==null&&cs(this.value)===cs(n)&&this.matchesComparison(li(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class le extends gP{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new le(e,n)}matches(e){return Vo(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Vo(t){return t.op==="and"}function hg(t){return t.op==="or"}function Uy(t){return vP(t)&&Vo(t)}function vP(t){for(const e of t.filters)if(e instanceof le)return!1;return!0}function fg(t){if(t instanceof ne)return t.field.canonicalString()+t.op.toString()+Oo(t.value);if(Uy(t))return t.filters.map(e=>fg(e)).join(",");{const e=t.filters.map(n=>fg(n)).join(",");return`${t.op}(${e})`}}function yP(t,e){return t instanceof ne?function(r,i){return i instanceof ne&&r.op===i.op&&r.field.isEqual(i.field)&&Wn(r.value,i.value)}(t,e):t instanceof le?function(r,i){return i instanceof le&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&yP(o,i.filters[a]),!0):!1}(t,e):void M()}function _P(t,e){const n=t.filters.concat(e);return le.create(n,t.op)}function wP(t){return t instanceof ne?function(n){return`${n.field.canonicalString()} ${n.op} ${Oo(n.value)}`}(t):t instanceof le?function(n){return n.op.toString()+" {"+n.getFilters().map(wP).join(" ,")+"}"}(t):"Filter"}class qj extends ne{constructor(e,n,r){super(e,n,r),this.key=D.fromName(r.referenceValue)}matches(e){const n=D.comparator(e.key,this.key);return this.matchesComparison(n)}}class Wj extends ne{constructor(e,n){super(e,"in",n),this.keys=IP("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Gj extends ne{constructor(e,n){super(e,"not-in",n),this.keys=IP("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function IP(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>D.fromName(r.referenceValue))}class Kj extends ne{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return iu(n)&&ru(n.arrayValue,this.value)}}class EP extends ne{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ru(this.value.arrayValue,n)}}class Hj extends ne{constructor(e,n){super(e,"not-in",n)}matches(e){if(ru(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ru(this.value.arrayValue,n)}}class Qj extends ne{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!iu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ru(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yj{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function mg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Yj(t,e,n,r,i,s,o)}function hs(t){const e=O(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>fg(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Lu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Oo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Oo(r)).join(",")),e.ce=n}return e.ce}function Mu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Bj(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!yP(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!NI(t.startAt,e.startAt)&&NI(t.endAt,e.endAt)}function Xd(t){return D.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Jd(t,e){return t.filters.filter(n=>n instanceof ne&&n.field.isEqual(e))}function DI(t,e,n){let r=ed,i=!0;for(const s of Jd(t,e)){let o=ed,a=!0;switch(s.op){case"<":case"<=":o=Uj(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=ed}RI({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];RI({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function OI(t,e,n){let r=Fr,i=!0;for(const s of Jd(t,e)){let o=Fr,a=!0;switch(s.op){case">=":case">":o=$j(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Fr}CI({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];CI({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function TP(t,e,n,r,i,s,o,a){return new vr(t,e,n,r,i,s,o,a)}function ia(t){return new vr(t)}function VI(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function $y(t){return t.collectionGroup!==null}function _o(t){const e=O(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new de(Ie.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new su(s,r))}),n.has(Ie.keyField().canonicalString())||e.le.push(new su(Ie.keyField(),r))}return e.le}function Ct(t){const e=O(t);return e.he||(e.he=Xj(e,_o(t))),e.he}function Xj(t,e){if(t.limitType==="F")return mg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new su(i.field,s)});const n=t.endAt?new ui(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ui(t.startAt.position,t.startAt.inclusive):null;return mg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function pg(t,e){const n=t.filters.concat([e]);return new vr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Zd(t,e,n){return new vr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Fu(t,e){return Mu(Ct(t),Ct(e))&&t.limitType===e.limitType}function SP(t){return`${hs(Ct(t))}|lt:${t.limitType}`}function js(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>wP(i)).join(", ")}]`),Lu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Oo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Oo(i)).join(",")),`Target(${r})`}(Ct(t))}; limitType=${t.limitType})`}function ju(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):D.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of _o(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=xI(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,_o(r),i)||r.endAt&&!function(o,a,l){const u=xI(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,_o(r),i))}(t,e)}function kP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function AP(t){return(e,n)=>{let r=!1;for(const i of _o(t)){const s=Jj(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Jj(t,e,n){const r=t.field.isKeyField()?D.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?li(l,u):M()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return M()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){As(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return hP(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zj=new fe(D.comparator);function zt(){return Zj}const PP=new fe(D.comparator);function Ua(...t){let e=PP;for(const n of t)e=e.insert(n.key,n);return e}function bP(t){let e=PP;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Fn(){return al()}function RP(){return al()}function al(){return new Ei(t=>t.toString(),(t,e)=>t.isEqual(e))}const e5=new fe(D.comparator),t5=new de(D.comparator);function Q(...t){let e=t5;for(const n of t)e=e.add(n);return e}const n5=new de(H);function By(){return n5}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CP(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:tu(e)?"-0":e}}function xP(t){return{integerValue:""+t}}function NP(t,e){return aP(e)?xP(e):CP(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(){this._=void 0}}function r5(t,e,n){return t instanceof Lo?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&lf(s)&&(s=zy(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof fs?OP(t,e):t instanceof ms?VP(t,e):function(i,s){const o=DP(i,s),a=LI(o)+LI(i.Ie);return dg(o)&&dg(i.Ie)?xP(a):CP(i.serializer,a)}(t,e)}function i5(t,e,n){return t instanceof fs?OP(t,e):t instanceof ms?VP(t,e):n}function DP(t,e){return t instanceof Mo?function(r){return dg(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Lo extends uf{}class fs extends uf{constructor(e){super(),this.elements=e}}function OP(t,e){const n=LP(e);for(const r of t.elements)n.some(i=>Wn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ms extends uf{constructor(e){super(),this.elements=e}}function VP(t,e){let n=LP(e);for(const r of t.elements)n=n.filter(i=>!Wn(i,r));return{arrayValue:{values:n}}}class Mo extends uf{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function LI(t){return Ce(t.integerValue||t.doubleValue)}function LP(t){return iu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,n){this.field=e,this.transform=n}}function s5(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof fs&&i instanceof fs||r instanceof ms&&i instanceof ms?Do(r.elements,i.elements,Wn):r instanceof Mo&&i instanceof Mo?Wn(r.Ie,i.Ie):r instanceof Lo&&i instanceof Lo}(t.transform,e.transform)}class o5{constructor(e,n){this.version=e,this.transformResults=n}}class Ee{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ee}static exists(e){return new Ee(void 0,e)}static updateTime(e){return new Ee(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nd(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class cf{}function MP(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new oa(t.key,Ee.none()):new sa(t.key,t.data,Ee.none());{const n=t.data,r=ct.empty();let i=new de(Ie.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new yr(t.key,r,new jt(i.toArray()),Ee.none())}}function a5(t,e,n){t instanceof sa?function(i,s,o){const a=i.value.clone(),l=FI(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof yr?function(i,s,o){if(!nd(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=FI(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(FP(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ll(t,e,n,r){return t instanceof sa?function(s,o,a,l){if(!nd(s.precondition,o))return a;const u=s.value.clone(),c=jI(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof yr?function(s,o,a,l){if(!nd(s.precondition,o))return a;const u=jI(s.fieldTransforms,l,o),c=o.data;return c.setAll(FP(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(s,o,a){return nd(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function l5(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=DP(r.transform,i||null);s!=null&&(n===null&&(n=ct.empty()),n.set(r.field,s))}return n||null}function MI(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Do(r,i,(s,o)=>s5(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class sa extends cf{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class yr extends cf{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function FP(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function FI(t,e,n){const r=new Map;B(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,i5(o,a,n[i]))}return r}function jI(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,r5(s,o,e))}return r}class oa extends cf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qy extends cf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&a5(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ll(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ll(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=RP();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=MP(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Q())}isEqual(e){return this.batchId===e.batchId&&Do(this.mutations,e.mutations,(n,r)=>MI(n,r))&&Do(this.baseMutations,e.baseMutations,(n,r)=>MI(n,r))}}class Gy{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){B(e.mutations.length===r.length);let i=function(){return e5}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Gy(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u5{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ue,ie;function jP(t){switch(t){default:return M();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function zP(t){if(t===void 0)return je("GRPC error has no .code"),S.UNKNOWN;switch(t){case Ue.OK:return S.OK;case Ue.CANCELLED:return S.CANCELLED;case Ue.UNKNOWN:return S.UNKNOWN;case Ue.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Ue.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Ue.INTERNAL:return S.INTERNAL;case Ue.UNAVAILABLE:return S.UNAVAILABLE;case Ue.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Ue.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Ue.NOT_FOUND:return S.NOT_FOUND;case Ue.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Ue.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Ue.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Ue.ABORTED:return S.ABORTED;case Ue.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Ue.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Ue.DATA_LOSS:return S.DATA_LOSS;default:return M()}}(ie=Ue||(Ue={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UP(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c5=new yo([4294967295,4294967295],0);function zI(t){const e=UP().encode(t),n=new ij;return n.update(e),new Uint8Array(n.digest())}function UI(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new yo([n,r],0),new yo([i,s],0)]}class Hy{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new $a(`Invalid padding: ${n}`);if(r<0)throw new $a(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new $a(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new $a(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=yo.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(yo.fromNumber(r)));return i.compare(c5)===1&&(i=new yo([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=zI(e),[r,i]=UI(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Hy(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=zI(e),[r,i]=UI(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class $a extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,$u.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Uu(q.min(),i,new fe(H),zt(),Q())}}class $u{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new $u(r,n,Q(),Q(),Q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class $P{constructor(e,n){this.targetId=e,this.fe=n}}class BP{constructor(e,n,r=Ye.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class $I{constructor(){this.ge=0,this.pe=qI(),this.ye=Ye.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=Q(),n=Q(),r=Q();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:M()}}),new $u(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=qI()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,B(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class d5{constructor(e){this.Le=e,this.ke=new Map,this.qe=zt(),this.Qe=BI(),this.Ke=new fe(H)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:M()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(Xd(s))if(r===0){const o=new D(s.path);this.We(n,o,ve.newNoDocument(o,q.min()))}else B(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=oi(r).toUint8Array()}catch(l){if(l instanceof fP)return Tn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Hy(o,i,s)}catch(l){return Tn(l instanceof $a?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Xd(a.target)){const l=new D(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,ve.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=Q();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new Uu(e,n,this.Ke,this.qe,r);return this.qe=zt(),this.Qe=BI(),this.Ke=new fe(H),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new $I,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new de(H),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||P("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new $I),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function BI(){return new fe(D.comparator)}function qI(){return new fe(D.comparator)}const h5={asc:"ASCENDING",desc:"DESCENDING"},f5={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},m5={and:"AND",or:"OR"};class p5{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function gg(t,e){return t.useProto3Json||Lu(e)?e:{value:e}}function Fo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qP(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function g5(t,e){return Fo(t,e.toTimestamp())}function ze(t){return B(!!t),q.fromTimestamp(function(n){const r=si(n);return new Te(r.seconds,r.nanos)}(t))}function Qy(t,e){return vg(t,e).canonicalString()}function vg(t,e){const n=function(i){return new te(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function WP(t){const e=te.fromString(t);return B(tb(e)),e}function ou(t,e){return Qy(t.databaseId,e.path)}function $n(t,e){const n=WP(e);if(n.get(1)!==t.databaseId.projectId)throw new A(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new A(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new D(HP(n))}function GP(t,e){return Qy(t.databaseId,e)}function KP(t){const e=WP(t);return e.length===4?te.emptyPath():HP(e)}function yg(t){return new te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function HP(t){return B(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function WI(t,e,n){return{name:ou(t,e),fields:n.value.mapValue.fields}}function QP(t,e,n){const r=$n(t,e.name),i=ze(e.updateTime),s=e.createTime?ze(e.createTime):q.min(),o=new ct({mapValue:{fields:e.fields}}),a=ve.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function v5(t,e){return"found"in e?function(r,i){B(!!i.found),i.found.name,i.found.updateTime;const s=$n(r,i.found.name),o=ze(i.found.updateTime),a=i.found.createTime?ze(i.found.createTime):q.min(),l=new ct({mapValue:{fields:i.found.fields}});return ve.newFoundDocument(s,o,a,l)}(t,e):"missing"in e?function(r,i){B(!!i.missing),B(!!i.readTime);const s=$n(r,i.missing),o=ze(i.readTime);return ve.newNoDocument(s,o)}(t,e):M()}function y5(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:M()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(B(c===void 0||typeof c=="string"),Ye.fromBase64String(c||"")):(B(c===void 0||c instanceof Uint8Array),Ye.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?S.UNKNOWN:zP(u.code);return new A(c,u.message||"")}(o);n=new BP(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=$n(t,r.document.name),s=ze(r.document.updateTime),o=r.document.createTime?ze(r.document.createTime):q.min(),a=new ct({mapValue:{fields:r.document.fields}}),l=ve.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new rd(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=$n(t,r.document),s=r.readTime?ze(r.readTime):q.min(),o=ve.newNoDocument(i,s),a=r.removedTargetIds||[];n=new rd([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=$n(t,r.document),s=r.removedTargetIds||[];n=new rd([],s,i,null)}else{if(!("filter"in e))return M();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new u5(i,s),a=r.targetId;n=new $P(a,o)}}return n}function au(t,e){let n;if(e instanceof sa)n={update:WI(t,e.key,e.value)};else if(e instanceof oa)n={delete:ou(t,e.key)};else if(e instanceof yr)n={update:WI(t,e.key,e.data),updateMask:S5(e.fieldMask)};else{if(!(e instanceof qy))return M();n={verify:ou(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Lo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof fs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ms)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Mo)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw M()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:g5(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:M()}(t,e.precondition)),n}function _g(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?Ee.updateTime(ze(s.updateTime)):s.exists!==void 0?Ee.exists(s.exists):Ee.none()}(e.currentDocument):Ee.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)B(a.setToServerValue==="REQUEST_TIME"),l=new Lo;else if("appendMissingElements"in a){const c=a.appendMissingElements.values||[];l=new fs(c)}else if("removeAllFromArray"in a){const c=a.removeAllFromArray.values||[];l=new ms(c)}else"increment"in a?l=new Mo(o,a.increment):M();const u=Ie.fromServerFormat(a.fieldPath);return new zu(u,l)}(t,i)):[];if(e.update){e.update.name;const i=$n(t,e.update.name),s=new ct({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const u=l.fieldPaths||[];return new jt(u.map(c=>Ie.fromServerFormat(c)))}(e.updateMask);return new yr(i,s,o,n,r)}return new sa(i,s,n,r)}if(e.delete){const i=$n(t,e.delete);return new oa(i,n)}if(e.verify){const i=$n(t,e.verify);return new qy(i,n)}return M()}function _5(t,e){return t&&t.length>0?(B(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?ze(i.updateTime):ze(s);return o.isEqual(q.min())&&(o=ze(s)),new o5(o,i.transformResults||[])}(n,e))):[]}function YP(t,e){return{documents:[GP(t,e.path)]}}function XP(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=GP(t,i);const s=function(u){if(u.length!==0)return eb(le.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(c=>function(h){return{field:zs(h.field),direction:I5(h.dir)}}(c))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=gg(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ut:n,parent:i}}function JP(t){let e=KP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){B(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(d){const h=ZP(d);return h instanceof le&&Uy(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(h=>function(y){return new su(Us(y.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(h))}(n.orderBy));let a=null;n.limit&&(a=function(d){let h;return h=typeof d=="object"?d.value:d,Lu(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(d){const h=!!d.before,m=d.values||[];return new ui(m,h)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const h=!d.before,m=d.values||[];return new ui(m,h)}(n.endAt)),TP(e,i,o,s,a,"F",l,u)}function w5(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function ZP(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Us(n.unaryFilter.field);return ne.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Us(n.unaryFilter.field);return ne.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Us(n.unaryFilter.field);return ne.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Us(n.unaryFilter.field);return ne.create(o,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(t):t.fieldFilter!==void 0?function(n){return ne.create(Us(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return le.create(n.compositeFilter.filters.map(r=>ZP(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M()}}(n.compositeFilter.op))}(t):M()}function I5(t){return h5[t]}function E5(t){return f5[t]}function T5(t){return m5[t]}function zs(t){return{fieldPath:t.canonicalString()}}function Us(t){return Ie.fromServerFormat(t.fieldPath)}function eb(t){return t instanceof ne?function(n){if(n.op==="=="){if(bI(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NAN"}};if(PI(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(bI(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NOT_NAN"}};if(PI(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zs(n.field),op:E5(n.op),value:n.value}}}(t):t instanceof le?function(n){const r=n.getFilters().map(i=>eb(i));return r.length===1?r[0]:{compositeFilter:{op:T5(n.op),filters:r}}}(t):M()}function S5(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function tb(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n,r,i,s=q.min(),o=q.min(),a=Ye.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Zn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e){this.ct=e}}function k5(t,e){let n;if(e.document)n=QP(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=D.fromSegments(e.noDocument.path),i=gs(e.noDocument.readTime);n=ve.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return M();{const r=D.fromSegments(e.unknownDocument.path),i=gs(e.unknownDocument.version);n=ve.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new Te(i[0],i[1]);return q.fromTimestamp(s)}(e.readTime)),n}function GI(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:eh(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:ou(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Fo(s,o.version.toTimestamp()),createTime:Fo(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:ps(e.version)};else{if(!e.isUnknownDocument())return M();r.unknownDocument={path:n.path.toArray(),version:ps(e.version)}}return r}function eh(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function ps(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function gs(t){const e=new Te(t.seconds,t.nanoseconds);return q.fromTimestamp(e)}function Di(t,e){const n=(e.baseMutations||[]).map(s=>_g(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>_g(t.ct,s)),i=Te.fromMillis(e.localWriteTimeMs);return new Wy(e.batchId,i,n,r)}function Ba(t){const e=gs(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?gs(t.lastLimboFreeSnapshotVersion):q.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return B(s.documents.length===1),Ct(ia(KP(s.documents[0])))}(t.query):function(s){return Ct(JP(s))}(t.query),new Zn(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,Ye.fromBase64String(t.resumeToken))}function rb(t,e){const n=ps(e.snapshotVersion),r=ps(e.lastLimboFreeSnapshotVersion);let i;i=Xd(e.target)?YP(t.ct,e.target):XP(t.ct,e.target).ut;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:hs(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Yy(t){const e=JP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Zd(e,e.limit,"L"):e}function km(t,e){return new Ky(e.largestBatchId,_g(t.ct,e.overlayMutation))}function KI(t,e){const n=e.path.lastSegment();return[t,Rt(e.path.popLast()),n]}function HI(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:ps(r.readTime),documentKey:Rt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A5{getBundleMetadata(e,n){return QI(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:gs(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return QI(e).put(function(i){return{bundleId:i.id,createTime:ps(ze(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return YI(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:Yy(s.bundledQuery),readTime:gs(s.readTime)}}(r)})}saveNamedQuery(e,n){return YI(e).put(function(i){return{name:i.name,readTime:ps(ze(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function QI(t){return st(t,"bundles")}function YI(t){return st(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new df(e,r)}getOverlay(e,n){return Aa(e).get(KI(this.userId,n)).next(r=>r?km(this.serializer,r):null)}getOverlays(e,n){const r=Fn();return I.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new Ky(n,o);i.push(this.ht(e,a))}),I.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(Rt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Aa(e).H("collectionPathOverlayIndex",a))}),I.waitFor(s)}getOverlaysForCollection(e,n,r){const i=Fn(),s=Rt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Aa(e).W("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const u=km(this.serializer,l);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=Fn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Aa(e).Y({index:"collectionGroupOverlayIndex",range:a},(l,u,c)=>{const d=km(this.serializer,u);s.size()<i||d.largestBatchId===o?(s.set(d.getKey(),d),o=d.largestBatchId):c.done()}).next(()=>s)}ht(e,n){return Aa(e).put(function(i,s,o){const[a,l,u]=KI(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:au(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function Aa(t){return st(t,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(){}Pt(e,n){this.It(e,n),n.Tt()}It(e,n){if("nullValue"in e)this.Et(n,5);else if("booleanValue"in e)this.Et(n,10),n.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(n,15),n.dt(Ce(e.integerValue));else if("doubleValue"in e){const r=Ce(e.doubleValue);isNaN(r)?this.Et(n,13):(this.Et(n,15),tu(r)?n.dt(0):n.dt(r))}else if("timestampValue"in e){const r=e.timestampValue;this.Et(n,20),typeof r=="string"?n.At(r):(n.At(`${r.seconds||""}`),n.dt(r.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,n),this.Vt(n);else if("bytesValue"in e)this.Et(n,30),n.ft(oi(e.bytesValue)),this.Vt(n);else if("referenceValue"in e)this.gt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Et(n,45),n.dt(r.latitude||0),n.dt(r.longitude||0)}else"mapValue"in e?mP(e)?this.Et(n,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,n),this.Vt(n)):"arrayValue"in e?(this.wt(e.arrayValue,n),this.Vt(n)):M()}Rt(e,n){this.Et(n,25),this.St(e,n)}St(e,n){n.At(e)}yt(e,n){const r=e.fields||{};this.Et(n,55);for(const i of Object.keys(r))this.Rt(i,n),this.It(r[i],n)}wt(e,n){const r=e.values||[];this.Et(n,50);for(const i of r)this.It(i,n)}gt(e,n){this.Et(n,37),D.fromName(e).path.forEach(r=>{this.Et(n,60),this.St(r,n)})}Et(e,n){e.dt(n)}Vt(e){e.dt(2)}}Oi.bt=new Oi;function P5(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function XI(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=P5(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class b5{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ct(r.value),r=n.next();this.vt()}Ft(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Mt(r.value),r=n.next();this.xt()}Ot(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ct(r);else if(r<2048)this.Ct(960|r>>>6),this.Ct(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ct(480|r>>>12),this.Ct(128|63&r>>>6),this.Ct(128|63&r);else{const i=n.codePointAt(0);this.Ct(240|i>>>18),this.Ct(128|63&i>>>12),this.Ct(128|63&i>>>6),this.Ct(128|63&i)}}this.vt()}Nt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Mt(r);else if(r<2048)this.Mt(960|r>>>6),this.Mt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Mt(480|r>>>12),this.Mt(128|63&r>>>6),this.Mt(128|63&r);else{const i=n.codePointAt(0);this.Mt(240|i>>>18),this.Mt(128|63&i>>>12),this.Mt(128|63&i>>>6),this.Mt(128|63&i)}}this.xt()}Bt(e){const n=this.Lt(e),r=XI(n);this.kt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}qt(e){const n=this.Lt(e),r=XI(n);this.kt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Lt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ct(e){const n=255&e;n===0?(this.Kt(0),this.Kt(255)):n===255?(this.Kt(255),this.Kt(0)):this.Kt(n)}Mt(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}vt(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class R5{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Bt(e)}Tt(){this.Gt.Qt()}}class C5{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class Pa{constructor(){this.Gt=new b5,this.zt=new R5(this.Gt),this.jt=new C5(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return e===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Jt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Vi(this.indexId,this.documentKey,this.arrayValue,r)}}function Sr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=JI(t.arrayValue,e.arrayValue),n!==0?n:(n=JI(t.directionalValue,e.directionalValue),n!==0?n:D.comparator(t.documentKey,e.documentKey)))}function JI(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e){this.Yt=new de((n,r)=>Ie.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Zt=e.orderBy,this.Xt=[];for(const n of e.filters){const r=n;r.isInequality()?this.Yt=this.Yt.add(r):this.Xt.push(r)}}get en(){return this.Yt.size>1}tn(e){if(B(e.collectionGroup===this.collectionId),this.en)return!1;const n=lg(e);if(n!==void 0&&!this.nn(n))return!1;const r=xi(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.nn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Yt.size>0){const a=this.Yt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const l=r[s];if(!this.rn(a,l)||!this.sn(this.Zt[o++],l))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Zt.length||!this.sn(this.Zt[o++],a))return!1}return!0}on(){if(this.en)return null;let e=new de(Ie.comparator);const n=[];for(const r of this.Xt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new Jc(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new Jc(r.field,0))}for(const r of this.Zt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new Jc(r.field,r.dir==="asc"?0:1)));return new Yd(Yd.UNKNOWN_ID,this.collectionId,n,eu.empty())}nn(e){for(const n of this.Xt)if(this.rn(n,e))return!0;return!1}rn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}sn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ib(t){var e,n;if(B(t instanceof ne||t instanceof le),t instanceof ne){if(t instanceof EP){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>ne.create(t.field,"==",s)))||[];return le.create(i,"or")}return t}const r=t.filters.map(i=>ib(i));return le.create(r,t.op)}function x5(t){if(t.getFilters().length===0)return[];const e=Eg(ib(t));return B(sb(e)),wg(e)||Ig(e)?[e]:e.getFilters()}function wg(t){return t instanceof ne}function Ig(t){return t instanceof le&&Uy(t)}function sb(t){return wg(t)||Ig(t)||function(n){if(n instanceof le&&hg(n)){for(const r of n.getFilters())if(!wg(r)&&!Ig(r))return!1;return!0}return!1}(t)}function Eg(t){if(B(t instanceof ne||t instanceof le),t instanceof ne)return t;if(t.filters.length===1)return Eg(t.filters[0]);const e=t.filters.map(r=>Eg(r));let n=le.create(e,t.op);return n=th(n),sb(n)?n:(B(n instanceof le),B(Vo(n)),B(n.filters.length>1),n.filters.reduce((r,i)=>Xy(r,i)))}function Xy(t,e){let n;return B(t instanceof ne||t instanceof le),B(e instanceof ne||e instanceof le),n=t instanceof ne?e instanceof ne?function(i,s){return le.create([i,s],"and")}(t,e):eE(t,e):e instanceof ne?eE(e,t):function(i,s){if(B(i.filters.length>0&&s.filters.length>0),Vo(i)&&Vo(s))return _P(i,s.getFilters());const o=hg(i)?i:s,a=hg(i)?s:i,l=o.filters.map(u=>Xy(u,a));return le.create(l,"or")}(t,e),th(n)}function eE(t,e){if(Vo(e))return _P(e,t.getFilters());{const n=e.filters.map(r=>Xy(t,r));return le.create(n,"or")}}function th(t){if(B(t instanceof ne||t instanceof le),t instanceof ne)return t;const e=t.getFilters();if(e.length===1)return th(e[0]);if(vP(t))return t;const n=e.map(i=>th(i)),r=[];return n.forEach(i=>{i instanceof ne?r.push(i):i instanceof le&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:le.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N5{constructor(){this._n=new Jy}addToCollectionParentIndex(e,n){return this._n.add(n),I.resolve()}getCollectionParents(e,n){return I.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return I.resolve()}deleteFieldIndex(e,n){return I.resolve()}deleteAllFieldIndexes(e){return I.resolve()}createTargetIndexes(e,n){return I.resolve()}getDocumentsMatchingTarget(e,n){return I.resolve(null)}getIndexType(e,n){return I.resolve(0)}getFieldIndexes(e,n){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}getMinOffset(e,n){return I.resolve(Xt.min())}getMinOffsetFromCollectionGroup(e,n){return I.resolve(Xt.min())}updateCollectionGroup(e,n,r){return I.resolve()}updateIndexEntries(e,n){return I.resolve()}}class Jy{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new de(te.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new de(te.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc=new Uint8Array(0);class D5{constructor(e,n){this.databaseId=n,this.an=new Jy,this.un=new Ei(r=>hs(r),(r,i)=>Mu(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.an.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.an.add(n)});const s={collectionId:r,parent:Rt(i)};return tE(e).put(s)}return I.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[nP(n),""],!1,!0);return tE(e).W(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(Mn(o.parent))}return r})}addFieldIndex(e,n){const r=ba(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=Ls(e);return s.next(a=>{o.put(HI(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=ba(e),i=Ls(e),s=Vs(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=ba(e),r=Vs(e),i=Ls(e);return n.H().next(()=>r.H()).next(()=>i.H())}createTargetIndexes(e,n){return I.forEach(this.cn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new ZI(r).on();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=Vs(e);let i=!0;const s=new Map;return I.forEach(this.cn(n),o=>this.ln(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=Q();const a=[];return I.forEach(s,(l,u)=>{P("IndexedDbIndexManager",`Using index ${function(v){return`id=${v.indexId}|cg=${v.collectionGroup}|f=${v.fields.map(E=>`${E.fieldPath}:${E.kind}`).join(",")}`}(l)} to execute ${hs(n)}`);const c=function(v,E){const k=lg(E);if(k===void 0)return null;for(const b of Jd(v,k.fieldPath))switch(b.op){case"array-contains-any":return b.value.arrayValue.values||[];case"array-contains":return[b.value]}return null}(u,l),d=function(v,E){const k=new Map;for(const b of xi(E))for(const C of Jd(v,b.fieldPath))switch(C.op){case"==":case"in":k.set(b.fieldPath.canonicalString(),C.value);break;case"not-in":case"!=":return k.set(b.fieldPath.canonicalString(),C.value),Array.from(k.values())}return null}(u,l),h=function(v,E){const k=[];let b=!0;for(const C of xi(E)){const L=C.kind===0?DI(v,C.fieldPath,v.startAt):OI(v,C.fieldPath,v.startAt);k.push(L.value),b&&(b=L.inclusive)}return new ui(k,b)}(u,l),m=function(v,E){const k=[];let b=!0;for(const C of xi(E)){const L=C.kind===0?OI(v,C.fieldPath,v.endAt):DI(v,C.fieldPath,v.endAt);k.push(L.value),b&&(b=L.inclusive)}return new ui(k,b)}(u,l),y=this.hn(l,u,h),_=this.hn(l,u,m),w=this.Pn(l,u,d),g=this.In(l.indexId,c,y,h.inclusive,_,m.inclusive,w);return I.forEach(g,p=>r.j(p,n.limit).next(v=>{v.forEach(E=>{const k=D.fromSegments(E.documentKey);o.has(k)||(o=o.add(k),a.push(k))})}))}).next(()=>a)}return I.resolve(null)})}cn(e){let n=this.un.get(e);return n||(e.filters.length===0?n=[e]:n=x5(le.create(e.filters,"and")).map(r=>mg(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,n),n)}In(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),u=l/(n!=null?n.length:1),c=[];for(let d=0;d<l;++d){const h=n?this.Tn(n[d/u]):Cc,m=this.En(e,h,r[d%u],i),y=this.dn(e,h,s[d%u],o),_=a.map(w=>this.En(e,h,w,!0));c.push(...this.createRange(m,y,_))}return c}En(e,n,r,i){const s=new Vi(e,D.empty(),n,r);return i?s:s.Jt()}dn(e,n,r,i){const s=new Vi(e,D.empty(),n,r);return i?s.Jt():s}ln(e,n){const r=new ZI(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.cn(n);return I.forEach(i,s=>this.ln(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let u=new de(Ie.comparator),c=!1;for(const d of l.filters)for(const h of d.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?c=!0:u=u.add(h.field));for(const d of l.orderBy)d.field.isKeyField()||(u=u.add(d.field));return u.size+(c?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}An(e,n){const r=new Pa;for(const i of xi(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Ht(i.kind);Oi.bt.Pt(s,o)}return r.Wt()}Tn(e){const n=new Pa;return Oi.bt.Pt(e,n.Ht(0)),n.Wt()}Rn(e,n){const r=new Pa;return Oi.bt.Pt(ds(this.databaseId,n),r.Ht(function(s){const o=xi(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Wt()}Pn(e,n,r){if(r===null)return[];let i=[];i.push(new Pa);let s=0;for(const o of xi(e)){const a=r[s++];for(const l of i)if(this.Vn(n,o.fieldPath)&&iu(a))i=this.mn(i,o,a);else{const u=l.Ht(o.kind);Oi.bt.Pt(a,u)}}return this.fn(i)}hn(e,n,r){return this.Pn(e,n,r.position)}fn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Wt();return n}mn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new Pa;l.seed(a.Wt()),Oi.bt.Pt(o,l.Ht(n.kind)),s.push(l)}return s}Vn(e,n){return!!e.filters.find(r=>r instanceof ne&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=ba(e),i=Ls(e);return(n?r.W("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.W()).next(s=>{const o=[];return I.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(c,d){const h=d?new eu(d.sequenceNumber,new Xt(gs(d.readTime),new D(Mn(d.documentKey)),d.largestBatchId)):eu.empty(),m=c.fields.map(([y,_])=>new Jc(Ie.fromServerFormat(y),_));return new Yd(c.indexId,c.collectionGroup,m,h)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:H(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=ba(e),s=Ls(e);return this.gn(e).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>I.forEach(a,l=>s.put(HI(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return I.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?I.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),I.forEach(a,l=>this.pn(e,i,l).next(u=>{const c=this.yn(s,l);return u.isEqual(c)?I.resolve():this.wn(e,s,l,u,c)}))))})}Sn(e,n,r,i){return Vs(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.Rn(r,n.key),documentKey:n.key.path.toArray()})}bn(e,n,r,i){return Vs(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.Rn(r,n.key),n.key.path.toArray()])}pn(e,n,r){const i=Vs(e);let s=new de(Sr);return i.Y({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.Rn(r,n)])},(o,a)=>{s=s.add(new Vi(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}yn(e,n){let r=new de(Sr);const i=this.An(n,e);if(i==null)return r;const s=lg(n);if(s!=null){const o=e.data.field(s.fieldPath);if(iu(o))for(const a of o.arrayValue.values||[])r=r.add(new Vi(n.indexId,e.key,this.Tn(a),i))}else r=r.add(new Vi(n.indexId,e.key,Cc,i));return r}wn(e,n,r,i,s){P("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(l,u,c,d,h){const m=l.getIterator(),y=u.getIterator();let _=Os(m),w=Os(y);for(;_||w;){let g=!1,p=!1;if(_&&w){const v=c(_,w);v<0?p=!0:v>0&&(g=!0)}else _!=null?p=!0:g=!0;g?(d(w),w=Os(y)):p?(h(_),_=Os(m)):(_=Os(m),w=Os(y))}}(i,s,Sr,a=>{o.push(this.Sn(e,n,r,a))},a=>{o.push(this.bn(e,n,r,a))}),I.waitFor(o)}gn(e){let n=1;return Ls(e).Y({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Sr(o,a)).filter((o,a,l)=>!a||Sr(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Sr(o,e),l=Sr(o,n);if(a===0)i[0]=e.Jt();else if(a>0&&l<0)i.push(o),i.push(o.Jt());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Dn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Cc,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Cc,[]];s.push(IDBKeyRange.bound(a,l))}return s}Dn(e,n){return Sr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(nE)}getMinOffset(e,n){return I.mapArray(this.cn(n),r=>this.ln(e,r).next(i=>i||M())).next(nE)}}function tE(t){return st(t,"collectionParents")}function Vs(t){return st(t,"indexEntries")}function ba(t){return st(t,"indexConfiguration")}function Ls(t){return st(t,"indexState")}function nE(t){B(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Fy(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Xt(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Vt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Vt(e,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ob(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.Y({range:o},(c,d,h)=>(a++,h.delete()));s.push(l.next(()=>{B(a===1)}));const u=[];for(const c of n.mutations){const d=lP(e,c.key.path,n.batchId);s.push(i.delete(d)),u.push(c.key)}return I.waitFor(s).next(()=>u)}function nh(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw M();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vt.DEFAULT_COLLECTION_PERCENTILE=10,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Vt.DEFAULT=new Vt(41943040,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Vt.DISABLED=new Vt(-1,0,0);class hf{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Cn={}}static lt(e,n,r,i){B(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new hf(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return kr(e).Y({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=$s(e),o=kr(e);return o.add({}).next(a=>{B(typeof a=="number");const l=new Wy(a,n,r,i),u=function(m,y,_){const w=_.baseMutations.map(p=>au(m.ct,p)),g=_.mutations.map(p=>au(m.ct,p));return{userId:y,batchId:_.batchId,localWriteTimeMs:_.localWriteTime.toMillis(),baseMutations:w,mutations:g}}(this.serializer,this.userId,l),c=[];let d=new de((h,m)=>H(h.canonicalString(),m.canonicalString()));for(const h of i){const m=lP(this.userId,h.key.path,a);d=d.add(h.key.path.popLast()),c.push(o.put(u)),c.push(s.put(m,Ij))}return d.forEach(h=>{c.push(this.indexManager.addToCollectionParentIndex(e,h))}),e.addOnCommittedListener(()=>{this.Cn[a]=l.keys()}),I.waitFor(c).next(()=>l)})}lookupMutationBatch(e,n){return kr(e).get(n).next(r=>r?(B(r.userId===this.userId),Di(this.serializer,r)):null)}vn(e,n){return this.Cn[n]?I.resolve(this.Cn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Cn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return kr(e).Y({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(B(a.batchId>=r),s=Di(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return kr(e).Y({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return kr(e).W("userMutationsIndex",n).next(r=>r.map(i=>Di(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Zc(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return $s(e).Y({range:i},(o,a,l)=>{const[u,c,d]=o,h=Mn(c);if(u===this.userId&&n.path.isEqual(h))return kr(e).get(d).next(m=>{if(!m)throw M();B(m.userId===this.userId),s.push(Di(this.serializer,m))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new de(H);const i=[];return n.forEach(s=>{const o=Zc(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=$s(e).Y({range:a},(u,c,d)=>{const[h,m,y]=u,_=Mn(m);h===this.userId&&s.path.isEqual(_)?r=r.add(y):d.done()});i.push(l)}),I.waitFor(i).next(()=>this.Fn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Zc(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new de(H);return $s(e).Y({range:o},(l,u,c)=>{const[d,h,m]=l,y=Mn(h);d===this.userId&&r.isPrefixOf(y)?y.length===i&&(a=a.add(m)):c.done()}).next(()=>this.Fn(e,a))}Fn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(kr(e).get(s).next(o=>{if(o===null)throw M();B(o.userId===this.userId),r.push(Di(this.serializer,o))}))}),I.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return ob(e.ae,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Mn(n.batchId)}),I.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Mn(e){delete this.Cn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return I.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return $s(e).Y({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=Mn(s[1]);i.push(l)}else a.done()}).next(()=>{B(i.length===0)})})}containsKey(e,n){return ab(e,this.userId,n)}xn(e){return lb(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function ab(t,e,n){const r=Zc(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return $s(t).Y({range:s,J:!0},(a,l,u)=>{const[c,d,h]=a;c===e&&d===i&&(o=!0),u.done()}).next(()=>o)}function kr(t){return st(t,"mutations")}function $s(t){return st(t,"documentMutations")}function lb(t){return st(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new vs(0)}static Bn(){return new vs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O5{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Ln(e).next(n=>{const r=new vs(n.highestTargetId);return n.highestTargetId=r.next(),this.kn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Ln(e).next(n=>q.fromTimestamp(new Te(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Ln(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Ln(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.kn(e,i)))}addTargetData(e,n){return this.qn(e,n).next(()=>this.Ln(e).next(r=>(r.targetCount+=1,this.Qn(n,r),this.kn(e,r))))}updateTargetData(e,n){return this.qn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Ms(e).delete(n.targetId)).next(()=>this.Ln(e)).next(r=>(B(r.targetCount>0),r.targetCount-=1,this.kn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return Ms(e).Y((o,a)=>{const l=Ba(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>I.waitFor(s)).next(()=>i)}forEachTarget(e,n){return Ms(e).Y((r,i)=>{const s=Ba(i);n(s)})}Ln(e){return iE(e).get("targetGlobalKey").next(n=>(B(n!==null),n))}kn(e,n){return iE(e).put("targetGlobalKey",n)}qn(e,n){return Ms(e).put(rb(this.serializer,n))}Qn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Ln(e).next(n=>n.targetCount)}getTargetData(e,n){const r=hs(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Ms(e).Y({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const u=Ba(a);Mu(n,u.target)&&(s=u,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=xr(e);return n.forEach(o=>{const a=Rt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),I.waitFor(i)}removeMatchingKeys(e,n,r){const i=xr(e);return I.forEach(n,s=>{const o=Rt(s.path);return I.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=xr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=xr(e);let s=Q();return i.Y({range:r,J:!0},(o,a,l)=>{const u=Mn(o[1]),c=new D(u);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=Rt(n.path),i=IDBKeyRange.bound([r],[nP(r)],!1,!0);let s=0;return xr(e).Y({index:"documentTargetsIndex",J:!0,range:i},([o,a],l,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}_t(e,n){return Ms(e).get(n).next(r=>r?Ba(r):null)}}function Ms(t){return st(t,"targets")}function iE(t){return st(t,"targetGlobal")}function xr(t){return st(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE([t,e],[n,r]){const i=H(t,n);return i===0?H(e,r):i}class V5{constructor(e){this.Kn=e,this.buffer=new de(sE),this.$n=0}Un(){return++this.$n}Wn(e){const n=[e,this.Un()];if(this.buffer.size<this.Kn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();sE(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class L5{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.zn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}zn(e){P("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ii(n)?P("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await wi(n)}await this.zn(3e5)})}}class M5{constructor(e,n){this.jn=e,this.params=n}calculateTargetCount(e,n){return this.jn.Hn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return I.resolve(Ft._e);const r=new V5(n);return this.jn.forEachTarget(e,i=>r.Wn(i.sequenceNumber)).next(()=>this.jn.Jn(e,i=>r.Wn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(P("LruGarbageCollector","Garbage collection skipped; disabled"),I.resolve(rE)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(P("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),rE):this.Yn(e,n))}getCacheSize(e){return this.jn.getCacheSize(e)}Yn(e,n){let r,i,s,o,a,l,u;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(P("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),i=this.params.maximumSequenceNumbersToCollect):i=d,o=Date.now(),this.nthSequenceNumber(e,i))).next(d=>(r=d,a=Date.now(),this.removeTargets(e,r,n))).next(d=>(s=d,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(u=Date.now(),Fs()<=ee.DEBUG&&P("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${d} documents in `+(u-l)+`ms
Total Duration: ${u-c}ms`),I.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:d})))}}function F5(t,e){return new M5(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j5{constructor(e,n){this.db=e,this.garbageCollector=F5(this,n)}Hn(e){const n=this.Zn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Zn(e){let n=0;return this.Jn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Jn(e,n){return this.Xn(e,(r,i)=>n(i))}addReference(e,n,r){return xc(e,r)}removeReference(e,n,r){return xc(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return xc(e,n)}er(e,n){return function(i,s){let o=!1;return lb(i).Z(a=>ab(i,a,s).next(l=>(l&&(o=!0),I.resolve(!l)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Xn(e,(o,a)=>{if(a<=n){const l=this.er(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,q.min()),xr(e).delete(function(d){return[0,Rt(d.path)]}(o))))});i.push(l)}}).next(()=>I.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return xc(e,n)}Xn(e,n){const r=xr(e);let i,s=Ft._e;return r.Y({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:u})=>{o===0?(s!==Ft._e&&n(new D(Mn(i)),s),s=u,i=l):s=Ft._e}).next(()=>{s!==Ft._e&&n(new D(Mn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function xc(t,e){return xr(t).put(function(r,i){return{targetId:0,path:Rt(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(){this.changes=new Ei(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ve.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?I.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z5{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Ai(e).put(r)}removeEntry(e,n,r){return Ai(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],eh(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.tr(e,r)))}getEntry(e,n){let r=ve.newInvalidDocument(n);return Ai(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(Ra(n))},(i,s)=>{r=this.nr(n,s)}).next(()=>r)}rr(e,n){let r={size:0,document:ve.newInvalidDocument(n)};return Ai(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(Ra(n))},(i,s)=>{r={document:this.nr(n,s),size:nh(s)}}).next(()=>r)}getEntries(e,n){let r=zt();return this.ir(e,n,(i,s)=>{const o=this.nr(i,s);r=r.insert(i,o)}).next(()=>r)}sr(e,n){let r=zt(),i=new fe(D.comparator);return this.ir(e,n,(s,o)=>{const a=this.nr(s,o);r=r.insert(s,a),i=i.insert(s,nh(o))}).next(()=>({documents:r,_r:i}))}ir(e,n,r){if(n.isEmpty())return I.resolve();let i=new de(lE);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(Ra(i.first()),Ra(i.last())),o=i.getIterator();let a=o.getNext();return Ai(e).Y({index:"documentKeyIndex",range:s},(l,u,c)=>{const d=D.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&lE(a,d)<0;)r(a,null),a=o.getNext();a&&a.isEqual(d)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?c.U(Ra(a)):c.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),eh(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ai(e).W(IDBKeyRange.bound(a,l,!0)).next(u=>{s==null||s.incrementDocumentReadCount(u.length);let c=zt();for(const d of u){const h=this.nr(D.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);h.isFoundDocument()&&(ju(n,h)||i.has(h.key))&&(c=c.insert(h.key,h))}return c})}getAllFromCollectionGroup(e,n,r,i){let s=zt();const o=aE(n,r),a=aE(n,Xt.max());return Ai(e).Y({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,u,c)=>{const d=this.nr(D.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(d.key,d),s.size===i&&c.done()}).next(()=>s)}newChangeBuffer(e){return new U5(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return oE(e).get("remoteDocumentGlobalKey").next(n=>(B(!!n),n))}tr(e,n){return oE(e).put("remoteDocumentGlobalKey",n)}nr(e,n){if(n){const r=k5(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(q.min())))return r}return ve.newInvalidDocument(e)}}function cb(t){return new z5(t)}class U5 extends ub{constructor(e,n){super(),this.ar=e,this.trackRemovals=n,this.ur=new Ei(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new de((s,o)=>H(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ur.get(s);if(n.push(this.ar.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=GI(this.ar.serializer,o);i=i.add(s.path.popLast());const u=nh(l);r+=u-a.size,n.push(this.ar.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=GI(this.ar.serializer,o.convertToNoDocument(q.min()));n.push(this.ar.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.ar.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.ar.updateMetadata(e,r)),I.waitFor(n)}getFromCache(e,n){return this.ar.rr(e,n).next(r=>(this.ur.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.ar.sr(e,n).next(({documents:r,_r:i})=>(i.forEach((s,o)=>{this.ur.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function oE(t){return st(t,"remoteDocumentGlobal")}function Ai(t){return st(t,"remoteDocumentsV14")}function Ra(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function aE(t,e){const n=e.documentKey.path.toArray();return[t,eh(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function lE(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=H(n[s],r[s]),i)return i;return i=H(n.length,r.length),i||(i=H(n[n.length-2],r[r.length-2]),i||H(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $5{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ll(r.mutation,i,jt.empty(),Te.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Q()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Q()){const i=Fn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ua();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Fn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Q()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=zt();const o=al(),a=function(){return al()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof yr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),ll(c.mutation,u,c.mutation.getFieldMask(),Te.now())):o.set(u.key,jt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var d;return a.set(u,new $5(c,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=al();let i=new fe((o,a)=>o-a),s=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||jt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const d=(i.get(a.batchId)||Q()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,d=RP();c.forEach(h=>{if(!s.has(h)){const m=MP(n.get(h),r.get(h));m!==null&&d.set(h,m),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return I.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return D.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):$y(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):I.resolve(Fn());let a=-1,l=s;return o.next(u=>I.forEach(u,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(c)?I.resolve():this.remoteDocumentCache.getEntry(e,c).next(h=>{l=l.insert(c,h)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,Q())).next(c=>({batchId:a,changes:bP(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new D(n)).next(r=>{let i=Ua();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ua();return this.indexManager.getCollectionParents(e,s).next(a=>I.forEach(a,l=>{const u=function(d,h){return new vr(h,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((d,h)=>{o=o.insert(d,h)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,ve.newInvalidDocument(c)))});let a=Ua();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&ll(c.mutation,u,jt.empty(),Te.now()),ju(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B5{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return I.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ze(i.createTime)}}(n)),I.resolve()}getNamedQuery(e,n){return I.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:Yy(i.bundledQuery),readTime:ze(i.readTime)}}(n)),I.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q5{constructor(){this.overlays=new fe(D.comparator),this.hr=new Map}getOverlay(e,n){return I.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Fn();return I.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),I.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),I.resolve()}getOverlaysForCollection(e,n,r){const i=Fn(),s=n.length+1,o=new D(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return I.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new fe((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Fn(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Fn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return I.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Ky(n,r));let s=this.hr.get(n);s===void 0&&(s=Q(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(){this.Pr=new de(Je.Ir),this.Tr=new de(Je.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Je(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Je(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new D(new te([])),r=new Je(n,e),i=new Je(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new D(new te([])),r=new Je(n,e),i=new Je(n,e+1);let s=Q();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Je(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Je{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return D.comparator(e.key,n.key)||H(e.pr,n.pr)}static Er(e,n){return H(e.pr,n.pr)||D.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W5{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new de(Je.Ir)}checkEmpty(e){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Wy(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new Je(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,n){return I.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return I.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Je(n,0),i=new Je(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),I.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new de(H);return n.forEach(i=>{const s=new Je(i,0),o=new Je(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),I.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;D.isDocumentKey(s)||(s=s.child(""));const o=new Je(new D(s),0);let a=new de(H);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.pr)),!0)},o),I.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){B(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return I.forEach(n.mutations,i=>{const s=new Je(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Je(n,0),i=this.wr.firstAfterOrEqual(r);return I.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,I.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G5{constructor(e){this.vr=e,this.docs=function(){return new fe(D.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return I.resolve(r?r.document.mutableCopy():ve.newInvalidDocument(n))}getEntries(e,n){let r=zt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ve.newInvalidDocument(i))}),I.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=zt();const o=n.path,a=new D(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Fy(iP(c),r)<=0||(i.has(c.key)||ju(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return I.resolve(s)}getAllFromCollectionGroup(e,n,r,i){M()}Fr(e,n){return I.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new K5(this)}getSize(e){return I.resolve(this.size)}}class K5 extends ub{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),I.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H5{constructor(e){this.persistence=e,this.Mr=new Ei(n=>hs(n),Mu),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Zy,this.targetCount=0,this.Br=vs.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),I.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new vs(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,I.resolve()}updateTargetData(e,n){return this.qn(n),I.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),I.waitFor(s).next(()=>i)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return I.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),I.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),I.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),I.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return I.resolve(r)}containsKey(e,n){return I.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e,n){this.Lr={},this.overlays={},this.kr=new Ft(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new H5(this),this.indexManager=new N5,this.remoteDocumentCache=function(i){return new G5(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new nb(n),this.$r=new B5(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new q5,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new W5(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){P("MemoryPersistence","Starting transaction:",e);const i=new Q5(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return I.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class Q5 extends oP{constructor(e){super(),this.currentSequenceNumber=e}}class ff{constructor(e){this.persistence=e,this.zr=new Zy,this.jr=null}static Hr(e){return new ff(e)}get Jr(){if(this.jr)return this.jr;throw M()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),I.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),I.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),I.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Jr,r=>{const i=D.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,q.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return I.or([()=>I.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y5{constructor(e){this.serializer=e}N(e,n,r,i){const s=new af("createOrUpgrade",n);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",TI,{unique:!0}),l.createObjectStore("documentMutations")}(e),uE(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=I.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),uE(e)),o=o.next(()=>function(l){const u=l.store("targetGlobal"),c={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:q.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",c)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,u){return u.store("mutations").W().next(c=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",TI,{unique:!0});const d=u.store("mutations"),h=c.map(m=>d.put(m));return I.waitFor(h)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Xr(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ei(s)))),r<7&&i>=7&&(o=o.next(()=>this.ti(s))),r<8&&i>=8&&(o=o.next(()=>this.ni(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ri(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const u=l.createObjectStore("documentOverlays",{keyPath:Dj});u.createIndex("collectionPathOverlayIndex",Oj,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",Vj,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const u=l.createObjectStore("remoteDocumentsV14",{keyPath:Ej});u.createIndex("documentKeyIndex",Tj),u.createIndex("collectionGroupIndex",Sj)}(e)).next(()=>this.ii(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:Rj}).createIndex("sequenceNumberIndex",Cj,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:xj}).createIndex("documentKeyIndex",Nj,{unique:!1})}(e))),o}ei(e){let n=0;return e.store("remoteDocuments").Y((r,i)=>{n+=nh(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Xr(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.W().next(i=>I.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>I.forEach(a,l=>{B(l.userId===s.userId);const u=Di(this.serializer,l);return ob(e,s.userId,u).next(()=>{})}))}))}ti(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Y((o,a)=>{const l=new te(o),u=function(d){return[0,Rt(d)]}(l);s.push(n.get(u).next(c=>c?I.resolve():(d=>n.put({targetId:0,path:Rt(d),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>I.waitFor(s))})}ni(e,n){e.createObjectStore("collectionParents",{keyPath:bj});const r=n.store("collectionParents"),i=new Jy,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:Rt(l)})}};return n.store("remoteDocuments").Y({J:!0},(o,a)=>{const l=new te(o);return s(l.popLast())}).next(()=>n.store("documentMutations").Y({J:!0},([o,a,l],u)=>{const c=Mn(a);return s(c.popLast())}))}ri(e){const n=e.store("targets");return n.Y((r,i)=>{const s=Ba(i),o=rb(this.serializer,s);return n.put(o)})}ii(e,n){const r=n.store("remoteDocuments"),i=[];return r.Y((s,o)=>{const a=n.store("remoteDocumentsV14"),l=function(d){return d.document?new D(te.fromString(d.document.name).popFirst(5)):d.noDocument?D.fromSegments(d.noDocument.path):d.unknownDocument?D.fromSegments(d.unknownDocument.path):M()}(o).path.toArray(),u={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>I.waitFor(i))}si(e,n){const r=n.store("mutations"),i=cb(this.serializer),s=new hb(ff.Hr,this.serializer.ct);return r.W().next(o=>{const a=new Map;return o.forEach(l=>{var u;let c=(u=a.get(l.userId))!==null&&u!==void 0?u:Q();Di(this.serializer,l).keys().forEach(d=>c=c.add(d)),a.set(l.userId,c)}),I.forEach(a,(l,u)=>{const c=new et(u),d=df.lt(this.serializer,c),h=s.getIndexManager(c),m=hf.lt(c,this.serializer,h,s.referenceDelegate);return new db(i,m,d,h).recalculateAndSaveOverlaysForDocumentKeys(new ug(n,Ft._e),l).next()})})}}function uE(t){t.createObjectStore("targetDocuments",{keyPath:Aj}).createIndex("documentTargetsIndex",Pj,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",kj,{unique:!0}),t.createObjectStore("targetGlobal")}const Am="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class e_{constructor(e,n,r,i,s,o,a,l,u,c,d=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.oi=s,this.window=o,this.document=a,this._i=u,this.ai=c,this.ui=d,this.kr=null,this.qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.li=null,this.hi=null,this.Pi=Number.NEGATIVE_INFINITY,this.Ii=h=>Promise.resolve(),!e_.D())throw new A(S.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new j5(this,i),this.Ti=n+"main",this.serializer=new nb(l),this.Ei=new an(this.Ti,this.ui,new Y5(this.serializer)),this.Qr=new O5(this.referenceDelegate,this.serializer),this.remoteDocumentCache=cb(this.serializer),this.$r=new A5,this.window&&this.window.localStorage?this.di=this.window.localStorage:(this.di=null,c===!1&&je("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ai().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new A(S.FAILED_PRECONDITION,Am);return this.Ri(),this.Vi(),this.mi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Qr.getHighestSequenceNumber(e))}).then(e=>{this.kr=new Ft(e,this._i)}).then(()=>{this.qr=!0}).catch(e=>(this.Ei&&this.Ei.close(),Promise.reject(e)))}fi(e){return this.Ii=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ei.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.oi.enqueueAndForget(async()=>{this.started&&await this.Ai()}))}Ai(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Nc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.gi(e).next(n=>{n||(this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)))})}).next(()=>this.pi(e)).next(n=>this.isPrimary&&!n?this.yi(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(Ii(e))return P("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return P("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.oi.enqueueRetryable(()=>this.Ii(e)),this.isPrimary=e})}gi(e){return Ca(e).get("owner").next(n=>I.resolve(this.Si(n)))}bi(e){return Nc(e).delete(this.clientId)}async Di(){if(this.isPrimary&&!this.Ci(this.Pi,18e5)){this.Pi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=st(n,"clientMetadata");return r.W().next(i=>{const s=this.vi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return I.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.di)for(const n of e)this.di.removeItem(this.Fi(n.clientId))}}mi(){this.hi=this.oi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ai().then(()=>this.Di()).then(()=>this.mi()))}Si(e){return!!e&&e.ownerId===this.clientId}pi(e){return this.ai?I.resolve(!0):Ca(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)){if(this.Si(n)&&this.networkEnabled)return!0;if(!this.Si(n)){if(!n.allowTabSynchronization)throw new A(S.FAILED_PRECONDITION,Am);return!1}}return!(!this.networkEnabled||!this.inForeground)||Nc(e).W().next(r=>this.vi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&P("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.qr=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Oi(),this.Ni(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new ug(e,Ft._e);return this.yi(n).next(()=>this.bi(n))}),this.Ei.close(),this.Bi()}vi(e,n){return e.filter(r=>this.Ci(r.updateTimeMs,n)&&!this.Mi(r.clientId))}Li(){return this.runTransaction("getActiveClients","readonly",e=>Nc(e).W().next(n=>this.vi(n,18e5).map(r=>r.clientId)))}get started(){return this.qr}getMutationQueue(e,n){return hf.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new D5(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return df.lt(this.serializer,e)}getBundleCache(){return this.$r}runTransaction(e,n,r){P("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(l){return l===15?Mj:l===14?dP:l===13?cP:l===12?Lj:l===11?uP:void M()}(this.ui);let o;return this.Ei.runTransaction(e,i,s,a=>(o=new ug(a,this.kr?this.kr.next():Ft._e),n==="readwrite-primary"?this.gi(o).next(l=>!!l||this.pi(o)).next(l=>{if(!l)throw je(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)),new A(S.FAILED_PRECONDITION,sP);return r(o)}).next(l=>this.wi(o).next(()=>l)):this.ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}ki(e){return Ca(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)&&!this.Si(n)&&!(this.ai||this.allowTabSynchronization&&n.allowTabSynchronization))throw new A(S.FAILED_PRECONDITION,Am)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Ca(e).put("owner",n)}static D(){return an.D()}yi(e){const n=Ca(e);return n.get("owner").next(r=>this.Si(r)?(P("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):I.resolve())}Ci(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(je(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ri(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.li=()=>{this.oi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ai()))},this.document.addEventListener("visibilitychange",this.li),this.inForeground=this.document.visibilityState==="visible")}Oi(){this.li&&(this.document.removeEventListener("visibilitychange",this.li),this.li=null)}Vi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const n=/(?:Version|Mobile)\/1[456]/;$S()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.oi.enterRestrictedMode(!0),this.oi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}Ni(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Mi(e){var n;try{const r=((n=this.di)===null||n===void 0?void 0:n.getItem(this.Fi(e)))!==null;return P("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return je("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this.di)try{this.di.setItem(this.Fi(this.clientId),String(Date.now()))}catch(e){je("Failed to set zombie client id.",e)}}Bi(){if(this.di)try{this.di.removeItem(this.Fi(this.clientId))}catch{}}Fi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Ca(t){return st(t,"owner")}function Nc(t){return st(t,"clientMetadata")}function t_(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=Q(),i=Q();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new n_(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X5{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return $S()?8:an.v(Se())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new X5;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(Fs()<=ee.DEBUG&&P("QueryEngine","SDK will not create cache indexes for query:",js(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),I.resolve()):(Fs()<=ee.DEBUG&&P("QueryEngine","Query:",js(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Fs()<=ee.DEBUG&&P("QueryEngine","The SDK decides to create cache indexes for query:",js(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ct(n))):I.resolve())}ji(e,n){if(VI(n))return I.resolve(null);let r=Ct(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Zd(n,null,"F"),r=Ct(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Q(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Zi(n,a);return this.Xi(n,u,o,l.readTime)?this.ji(e,Zd(n,null,"F")):this.es(e,u,n,l)}))})))}Hi(e,n,r,i){return VI(n)||i.isEqual(q.min())?I.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?I.resolve(null):(Fs()<=ee.DEBUG&&P("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),js(n)),this.es(e,o,n,rP(i,-1)).next(a=>a))})}Zi(e,n){let r=new de(AP(e));return n.forEach((i,s)=>{ju(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return Fs()<=ee.DEBUG&&P("QueryEngine","Using full collection scan to execute query:",js(n)),this.zi.getDocumentsMatchingQuery(e,n,Xt.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J5{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new fe(H),this.rs=new Ei(s=>hs(s),Mu),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new db(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function mb(t,e,n,r){return new J5(t,e,n,r)}async function pb(t,e){const n=O(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Q();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function Z5(t,e){const n=O(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const d=u.batch,h=d.keys();let m=I.resolve();return h.forEach(y=>{m=m.next(()=>c.getEntry(l,y)).next(_=>{const w=u.docVersions.get(y);B(w!==null),_.version.compareTo(w)<0&&(d.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Q();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function gb(t){const e=O(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function e6(t,e){const n=O(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((c,d)=>{const h=i.get(d);if(!h)return;a.push(n.Qr.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.Qr.addMatchingKeys(s,c.addedDocuments,d)));let m=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?m=m.withResumeToken(Ye.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(d,m),function(_,w,g){return _.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(h,m,c)&&a.push(n.Qr.updateTargetData(s,m))});let l=zt(),u=Q();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(vb(s,o,e.documentUpdates).next(c=>{l=c.cs,u=c.ls})),!r.isEqual(q.min())){const c=n.Qr.getLastRemoteSnapshotVersion(s).next(d=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return I.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ns=i,s))}function vb(t,e,n){let r=Q(),i=Q();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=zt();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(q.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):P("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:i}})}function t6(t,e){const n=O(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function jo(t,e){const n=O(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,I.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new Zn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function zo(t,e,n){const r=O(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ii(o))throw o;P("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function rh(t,e,n){const r=O(t);let i=q.min(),s=Q();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const d=O(l),h=d.rs.get(c);return h!==void 0?I.resolve(d.ns.get(h)):d.Qr.getTargetData(u,c)}(r,o,Ct(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:q.min(),n?s:Q())).next(a=>(wb(r,kP(e),a),{documents:a,hs:s})))}function yb(t,e){const n=O(t),r=O(n.Qr),i=n.ns.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r._t(s,e).next(o=>o?o.target:null))}function _b(t,e){const n=O(t),r=n.ss.get(e)||q.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.os.getAllFromCollectionGroup(i,e,rP(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(wb(n,e,i),i))}function wb(t,e,n){let r=t.ss.get(e)||q.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}async function n6(t,e,n,r){const i=O(t);let s=Q(),o=zt();for(const u of n){const c=e.Ps(u.metadata.name);u.document&&(s=s.add(c));const d=e.Is(u);d.setReadTime(e.Ts(u.metadata.readTime)),o=o.insert(c,d)}const a=i.os.newChangeBuffer({trackRemovals:!0}),l=await jo(i,function(c){return Ct(ia(te.fromString(`__bundle__/docs/${c}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>vb(u,a,o).next(c=>(a.apply(u),c)).next(c=>i.Qr.removeMatchingKeysForTargetId(u,l.targetId).next(()=>i.Qr.addMatchingKeys(u,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,c.cs,c.ls)).next(()=>c.cs)))}async function r6(t,e,n=Q()){const r=await jo(t,Ct(Yy(e.bundledQuery))),i=O(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=ze(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.$r.saveNamedQuery(s,e);const a=r.withResumeToken(Ye.EMPTY_BYTE_STRING,o);return i.ns=i.ns.insert(a.targetId,a),i.Qr.updateTargetData(s,a).next(()=>i.Qr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Qr.addMatchingKeys(s,n,r.targetId)).next(()=>i.$r.saveNamedQuery(s,e))})}function cE(t,e){return`firestore_clients_${t}_${e}`}function dE(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Pm(t,e){return`firestore_targets_${t}_${e}`}class ih{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Es(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new A(i.error.code,i.error.message))),o?new ih(e,n,i.state,s):(je("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ul{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Es(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new A(r.error.code,r.error.message))),s?new ul(e,r.state,i):(je("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class sh{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Es(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=By();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=aP(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new sh(e,s):(je("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class r_{constructor(e,n){this.clientId=e,this.onlineState=n}static Es(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new r_(n.clientId,n.onlineState):(je("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Tg{constructor(){this.activeTargetIds=By()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class bm{constructor(e,n,r,i,s){this.window=e,this.oi=n,this.persistenceKey=r,this.Vs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.fs=this.gs.bind(this),this.ps=new fe(H),this.started=!1,this.ys=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ws=cE(this.persistenceKey,this.Vs),this.Ss=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.ps=this.ps.insert(this.Vs,new Tg),this.bs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Ds=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Cs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Fs=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.fs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Li();for(const r of e){if(r===this.Vs)continue;const i=this.getItem(cE(this.persistenceKey,r));if(i){const s=sh.Es(r,i);s&&(this.ps=this.ps.insert(s.clientId,s))}}this.Ms();const n=this.storage.getItem(this.vs);if(n){const r=this.xs(n);r&&this.Os(r)}for(const r of this.ys)this.gs(r);this.ys=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ss,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ns(this.ps)}isActiveQueryTarget(e){let n=!1;return this.ps.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Bs(e,"pending")}updateMutationState(e,n,r){this.Bs(e,n,r),this.Ls(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Pm(this.persistenceKey,e));if(r){const i=ul.Es(e,r);i&&(n=i.state)}}return this.ks.As(e),this.Ms(),n}removeLocalQueryTarget(e){this.ks.Rs(e),this.Ms()}isLocalQueryTarget(e){return this.ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Pm(this.persistenceKey,e))}updateQueryState(e,n,r){this.qs(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Ls(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Qs(e)}notifyBundleLoaded(e){this.Ks(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.fs),this.removeItem(this.ws),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return P("SharedClientState","READ",e,n),n}setItem(e,n){P("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){P("SharedClientState","REMOVE",e),this.storage.removeItem(e)}gs(e){const n=e;if(n.storageArea===this.storage){if(P("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ws)return void je("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.oi.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.bs.test(n.key)){if(n.newValue==null){const r=this.$s(n.key);return this.Us(r,null)}{const r=this.Ws(n.key,n.newValue);if(r)return this.Us(r.clientId,r)}}else if(this.Ds.test(n.key)){if(n.newValue!==null){const r=this.Gs(n.key,n.newValue);if(r)return this.zs(r)}}else if(this.Cs.test(n.key)){if(n.newValue!==null){const r=this.js(n.key,n.newValue);if(r)return this.Hs(r)}}else if(n.key===this.vs){if(n.newValue!==null){const r=this.xs(n.newValue);if(r)return this.Os(r)}}else if(n.key===this.Ss){const r=function(s){let o=Ft._e;if(s!=null)try{const a=JSON.parse(s);B(typeof a=="number"),o=a}catch(a){je("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==Ft._e&&this.sequenceNumberHandler(r)}else if(n.key===this.Fs){const r=this.Js(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Ys(i)))}}}else this.ys.push(n)})}}get ks(){return this.ps.get(this.Vs)}Ms(){this.setItem(this.ws,this.ks.ds())}Bs(e,n,r){const i=new ih(this.currentUser,e,n,r),s=dE(this.persistenceKey,this.currentUser,e);this.setItem(s,i.ds())}Ls(e){const n=dE(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Qs(e){const n={clientId:this.Vs,onlineState:e};this.storage.setItem(this.vs,JSON.stringify(n))}qs(e,n,r){const i=Pm(this.persistenceKey,e),s=new ul(e,n,r);this.setItem(i,s.ds())}Ks(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Fs,n)}$s(e){const n=this.bs.exec(e);return n?n[1]:null}Ws(e,n){const r=this.$s(e);return sh.Es(r,n)}Gs(e,n){const r=this.Ds.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return ih.Es(new et(s),i,n)}js(e,n){const r=this.Cs.exec(e),i=Number(r[1]);return ul.Es(i,n)}xs(e){return r_.Es(e)}Js(e){return JSON.parse(e)}async zs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Zs(e.batchId,e.state,e.error);P("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Hs(e){return this.syncEngine.Xs(e.targetId,e.state,e.error)}Us(e,n){const r=n?this.ps.insert(e,n):this.ps.remove(e),i=this.Ns(this.ps),s=this.Ns(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.eo(o,a).then(()=>{this.ps=r})}Os(e){this.ps.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ns(e){let n=By();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class Ib{constructor(){this.no=new Tg,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Tg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i6{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){P("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){P("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dc=null;function Rm(){return Dc===null?Dc=function(){return 268435456+Math.round(2147483648*Math.random())}():Dc++,"0x"+Dc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s6={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o6{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="WebChannelConnection";class a6 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(n,r,i,s,o){const a=Rm(),l=this.bo(n,r.toUriEncodedString());P("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,s,o),this.Co(n,l,u,i).then(c=>(P("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Tn("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}vo(n,r,i,s,o,a){return this.So(n,r,i,s,o)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ra}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}bo(n,r){const i=s6[n];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,i){const s=Rm();return new Promise((o,a)=>{const l=new rj;l.setWithCredentials(!0),l.listenOnce(tj.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Sm.NO_ERROR:const c=l.getResponseJson();P(yt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Sm.TIMEOUT:P(yt,`RPC '${e}' ${s} timed out`),a(new A(S.DEADLINE_EXCEEDED,"Request time out"));break;case Sm.HTTP_ERROR:const d=l.getStatus();if(P(yt,`RPC '${e}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const m=h==null?void 0:h.error;if(m&&m.status&&m.message){const y=function(w){const g=w.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(g)>=0?g:S.UNKNOWN}(m.status);a(new A(y,m.message))}else a(new A(S.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new A(S.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{P(yt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);P(yt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Fo(e,n,r){const i=Rm(),s=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Z3(),a=ej(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");P(yt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const d=o.createWebChannel(c,l);let h=!1,m=!1;const y=new o6({lo:w=>{m?P(yt,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(h||(P(yt,`Opening RPC '${e}' stream ${i} transport.`),d.open(),h=!0),P(yt,`RPC '${e}' stream ${i} sending:`,w),d.send(w))},ho:()=>d.close()}),_=(w,g,p)=>{w.listen(g,v=>{try{p(v)}catch(E){setTimeout(()=>{throw E},0)}})};return _(d,bc.EventType.OPEN,()=>{m||P(yt,`RPC '${e}' stream ${i} transport opened.`)}),_(d,bc.EventType.CLOSE,()=>{m||(m=!0,P(yt,`RPC '${e}' stream ${i} transport closed`),y.Vo())}),_(d,bc.EventType.ERROR,w=>{m||(m=!0,Tn(yt,`RPC '${e}' stream ${i} transport errored:`,w),y.Vo(new A(S.UNAVAILABLE,"The operation could not be completed")))}),_(d,bc.EventType.MESSAGE,w=>{var g;if(!m){const p=w.data[0];B(!!p);const v=p,E=v.error||((g=v[0])===null||g===void 0?void 0:g.error);if(E){P(yt,`RPC '${e}' stream ${i} received error:`,E);const k=E.status;let b=function(X){const N=Ue[X];if(N!==void 0)return zP(N)}(k),C=E.message;b===void 0&&(b=S.INTERNAL,C="Unknown error status: "+k+" with message "+E.message),m=!0,y.Vo(new A(b,C)),d.close()}else P(yt,`RPC '${e}' stream ${i} received:`,p),y.mo(p)}}),_(a,nj.STAT_EVENT,w=>{w.stat===_I.PROXY?P(yt,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===_I.NOPROXY&&P(yt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Ro()},0),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eb(){return typeof window<"u"?window:null}function id(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(t){return new p5(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),i=Math.max(0,n-r);i>0&&P("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new i_(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(je(n.toString()),je("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{e(()=>{const i=new A(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return P("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(P("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class l6 extends Tb{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=y5(this.serializer,e),r=function(s){if(!("targetChange"in s))return q.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?q.min():o.readTime?ze(o.readTime):q.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=yg(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Xd(l)?{documents:YP(s,l)}:{query:XP(s,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=qP(s,o.resumeToken);const u=gg(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(q.min())>0){a.readTime=Fo(s,o.snapshotVersion.toTimestamp());const u=gg(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=w5(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=yg(this.serializer),n.removeTarget=e,this.t_(n)}}class u6 extends Tb{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(B(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=_5(e.writeResults,e.commitTime),r=ze(e.commitTime);return this.listener.T_(r,n)}return B(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=yg(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>au(this.serializer,r))};this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c6 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new A(S.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,vg(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new A(S.UNKNOWN,s.toString())})}vo(e,n,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,vg(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new A(S.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class d6{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(je(n),this.g_=!1):P("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h6{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{Ti(this)&&(P("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=O(l);u.v_.add(4),await aa(u),u.x_.set("Unknown"),u.v_.delete(4),await qu(u)}(this))})}),this.x_=new d6(r,i)}}async function qu(t){if(Ti(t))for(const e of t.F_)await e(!0)}async function aa(t){for(const e of t.F_)await e(!1)}function mf(t,e){const n=O(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),a_(n)?o_(n):ua(n).Jo()&&s_(n,e))}function lu(t,e){const n=O(t),r=ua(n);n.C_.delete(e),r.Jo()&&Sb(n,e),n.C_.size===0&&(r.Jo()?r.Xo():Ti(n)&&n.x_.set("Unknown"))}function s_(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ua(t).c_(e)}function Sb(t,e){t.O_.Oe(e),ua(t).l_(e)}function o_(t){t.O_=new d5({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),ua(t).start(),t.x_.p_()}function a_(t){return Ti(t)&&!ua(t).Ho()&&t.C_.size>0}function Ti(t){return O(t).v_.size===0}function kb(t){t.O_=void 0}async function f6(t){t.C_.forEach((e,n)=>{s_(t,e)})}async function m6(t,e){kb(t),a_(t)?(t.x_.S_(e),o_(t)):t.x_.set("Unknown")}async function p6(t,e,n){if(t.x_.set("Online"),e instanceof BP&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(t,e)}catch(r){P("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await oh(t,r)}else if(e instanceof rd?t.O_.$e(e):e instanceof $P?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(q.min()))try{const r=await gb(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.C_.get(u);c&&s.C_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.C_.get(l);if(!c)return;s.C_.set(l,c.withResumeToken(Ye.EMPTY_BYTE_STRING,c.snapshotVersion)),Sb(s,l);const d=new Zn(c.target,l,u,c.sequenceNumber);s_(s,d)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){P("RemoteStore","Failed to raise snapshot:",r),await oh(t,r)}}async function oh(t,e,n){if(!Ii(e))throw e;t.v_.add(1),await aa(t),t.x_.set("Offline"),n||(n=()=>gb(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{P("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await qu(t)})}function Ab(t,e){return e().catch(n=>oh(t,n,e))}async function la(t){const e=O(t),n=ci(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;g6(e);)try{const i=await t6(e.localStore,r);if(i===null){e.D_.length===0&&n.Xo();break}r=i.batchId,v6(e,i)}catch(i){await oh(e,i)}Pb(e)&&bb(e)}function g6(t){return Ti(t)&&t.D_.length<10}function v6(t,e){t.D_.push(e);const n=ci(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function Pb(t){return Ti(t)&&!ci(t).Ho()&&t.D_.length>0}function bb(t){ci(t).start()}async function y6(t){ci(t).d_()}async function _6(t){const e=ci(t);for(const n of t.D_)e.I_(n.mutations)}async function w6(t,e,n){const r=t.D_.shift(),i=Gy.from(r,e,n);await Ab(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await la(t)}async function I6(t,e){e&&ci(t).P_&&await async function(r,i){if(function(o){return jP(o)&&o!==S.ABORTED}(i.code)){const s=r.D_.shift();ci(r).Zo(),await Ab(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await la(r)}}(t,e),Pb(t)&&bb(t)}async function fE(t,e){const n=O(t);n.asyncQueue.verifyOperationInProgress(),P("RemoteStore","RemoteStore received new credentials");const r=Ti(n);n.v_.add(3),await aa(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await qu(n)}async function Sg(t,e){const n=O(t);e?(n.v_.delete(2),await qu(n)):e||(n.v_.add(2),await aa(n),n.x_.set("Unknown"))}function ua(t){return t.N_||(t.N_=function(n,r,i){const s=O(n);return s.R_(),new l6(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:f6.bind(null,t),To:m6.bind(null,t),u_:p6.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),a_(t)?o_(t):t.x_.set("Unknown")):(await t.N_.stop(),kb(t))})),t.N_}function ci(t){return t.B_||(t.B_=function(n,r,i){const s=O(n);return s.R_(),new u6(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:y6.bind(null,t),To:I6.bind(null,t),E_:_6.bind(null,t),T_:w6.bind(null,t)}),t.F_.push(async e=>{e?(t.B_.Zo(),await la(t)):(await t.B_.stop(),t.D_.length>0&&(P("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new nt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new l_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new A(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ca(t,e){if(je("AsyncQueue",`${e}: ${t}`),Ii(t))return new A(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||D.comparator(n.key,r.key):(n,r)=>D.comparator(n.key,r.key),this.keyedMap=Ua(),this.sortedSet=new fe(this.comparator)}static emptySet(e){return new wo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof wo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new wo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(){this.L_=new fe(D.comparator)}track(e){const n=e.doc.key,r=this.L_.get(n);r?e.type!==0&&r.type===3?this.L_=this.L_.insert(n,e):e.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.L_=this.L_.remove(n):e.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):M():this.L_=this.L_.insert(n,e)}k_(){const e=[];return this.L_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Uo{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Uo(e,n,wo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E6{constructor(){this.q_=void 0,this.Q_=[]}}class T6{constructor(){this.queries=new Ei(e=>SP(e),Fu),this.onlineState="Unknown",this.K_=new Set}}async function u_(t,e){const n=O(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new E6),i)try{s.q_=await n.onListen(r)}catch(o){const a=ca(o,`Initialization of query '${js(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.Q_.push(e),e.U_(n.onlineState),s.q_&&e.W_(s.q_)&&d_(n)}async function c_(t,e){const n=O(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.Q_.indexOf(e);o>=0&&(s.Q_.splice(o,1),i=s.Q_.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function S6(t,e){const n=O(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.Q_)a.W_(i)&&(r=!0);o.q_=i}}r&&d_(n)}function k6(t,e,n){const r=O(t),i=r.queries.get(e);if(i)for(const s of i.Q_)s.onError(n);r.queries.delete(e)}function d_(t){t.K_.forEach(e=>{e.next()})}class h_{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Uo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=Uo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A6{constructor(e,n){this.X_=e,this.byteLength=n}ea(){return"metadata"in this.X_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e){this.serializer=e}Ps(e){return $n(this.serializer,e)}Is(e){return e.metadata.exists?QP(this.serializer,e.document,!1):ve.newNoDocument(this.Ps(e.metadata.name),this.Ts(e.metadata.readTime))}Ts(e){return ze(e)}}class P6{constructor(e,n,r){this.ta=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Rb(e)}na(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.X_.namedQuery)this.queries.push(e.X_.namedQuery);else if(e.X_.documentMetadata){this.documents.push({metadata:e.X_.documentMetadata}),e.X_.documentMetadata.exists||++n;const r=te.fromString(e.X_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.X_.document&&(this.documents[this.documents.length-1].document=e.X_.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}ra(e){const n=new Map,r=new pE(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Ps(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||Q()).add(s);n.set(o,a)}}return n}async complete(){const e=await n6(this.localStore,new pE(this.serializer),this.documents,this.ta.id),n=this.ra(this.documents);for(const r of this.queries)await r6(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,ia:this.collectionGroups,sa:e}}}function Rb(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e){this.key=e}}class xb{constructor(e){this.key=e}}class Nb{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=Q(),this.mutatedKeys=Q(),this.ua=AP(e),this.ca=new wo(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new mE,i=n?n.ca:this.ca;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,d)=>{const h=i.get(c),m=ju(this.query,d)?d:null,y=!!h&&this.mutatedKeys.has(h.key),_=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let w=!1;h&&m?h.data.isEqual(m.data)?y!==_&&(r.track({type:3,doc:m}),w=!0):this.Ia(h,m)||(r.track({type:2,doc:m}),w=!0,(l&&this.ua(m,l)>0||u&&this.ua(m,u)<0)&&(a=!0)):!h&&m?(r.track({type:0,doc:m}),w=!0):h&&!m&&(r.track({type:1,doc:h}),w=!0,(l||u)&&(a=!0)),w&&(m?(o=o.add(m),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ca:o,Pa:r,Xi:a,mutatedKeys:s}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const o=e.Pa.k_();o.sort((c,d)=>function(m,y){const _=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return _(m)-_(y)}(c.type,d.type)||this.ua(c.doc,d.doc)),this.Ta(r),i=i!=null&&i;const a=n&&!i?this.Ea():[],l=this.aa.size===0&&this.current&&!i?1:0,u=l!==this._a;return this._a=l,o.length!==0||u?{snapshot:new Uo(this.query,e.ca,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new mE,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}Ta(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ea(){if(!this.current)return[];const e=this.aa;this.aa=Q(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new xb(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new Cb(r))}),n}Ra(e){this.oa=e.hs,this.aa=Q();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return Uo.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class b6{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class R6{constructor(e){this.key=e,this.ma=!1}}class C6{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new Ei(a=>SP(a),Fu),this.pa=new Map,this.ya=new Set,this.wa=new fe(D.comparator),this.Sa=new Map,this.ba=new Zy,this.Da={},this.Ca=new Map,this.va=vs.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function x6(t,e){const n=v_(t);let r,i;const s=n.ga.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await jo(n.localStore,Ct(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await f_(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&mf(n.remoteStore,o)}return i}async function f_(t,e,n,r,i){t.Ma=(d,h,m)=>async function(_,w,g,p){let v=w.view.ha(g);v.Xi&&(v=await rh(_.localStore,w.query,!1).then(({documents:C})=>w.view.ha(C,v)));const E=p&&p.targetChanges.get(w.targetId),k=p&&p.targetMismatches.get(w.targetId)!=null,b=w.view.applyChanges(v,_.isPrimaryClient,E,k);return kg(_,w.targetId,b.da),b.snapshot}(t,d,h,m);const s=await rh(t.localStore,e,!0),o=new Nb(e,s.hs),a=o.ha(s.documents),l=$u.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);kg(t,n,u.da);const c=new b6(e,n,o);return t.ga.set(e,c),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),u.snapshot}async function N6(t,e){const n=O(t),r=n.ga.get(e),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter(s=>!Fu(s,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await zo(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),lu(n.remoteStore,r.targetId),$o(n,r.targetId)}).catch(wi)):($o(n,r.targetId),await zo(n.localStore,r.targetId,!0))}async function D6(t,e,n){const r=y_(t);try{const i=await function(o,a){const l=O(o),u=Te.now(),c=a.reduce((m,y)=>m.add(y.key),Q());let d,h;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let y=zt(),_=Q();return l.os.getEntries(m,c).next(w=>{y=w,y.forEach((g,p)=>{p.isValidDocument()||(_=_.add(g))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,y)).next(w=>{d=w;const g=[];for(const p of a){const v=l5(p,d.get(p.key).overlayedDocument);v!=null&&g.push(new yr(p.key,v,pP(v.value.mapValue),Ee.exists(!0)))}return l.mutationQueue.addMutationBatch(m,u,g,a)}).next(w=>{h=w;const g=w.applyToLocalDocumentSet(d,_);return l.documentOverlayCache.saveOverlays(m,w.batchId,g)})}).then(()=>({batchId:h.batchId,changes:bP(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Da[o.currentUser.toKey()];u||(u=new fe(H)),u=u.insert(a,l),o.Da[o.currentUser.toKey()]=u}(r,i.batchId,n),await _r(r,i.changes),await la(r.remoteStore)}catch(i){const s=ca(i,"Failed to persist write");n.reject(s)}}async function Db(t,e){const n=O(t);try{const r=await e6(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Sa.get(s);o&&(B(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?B(o.ma):i.removedDocuments.size>0&&(B(o.ma),o.ma=!1))}),await _r(n,r,e)}catch(r){await wi(r)}}function gE(t,e,n){const r=O(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=O(o);l.onlineState=a;let u=!1;l.queries.forEach((c,d)=>{for(const h of d.Q_)h.U_(a)&&(u=!0)}),u&&d_(l)}(r.eventManager,e),i.length&&r.fa.u_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function O6(t,e,n){const r=O(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Sa.get(e),s=i&&i.key;if(s){let o=new fe(D.comparator);o=o.insert(s,ve.newNoDocument(s,q.min()));const a=Q().add(s),l=new Uu(q.min(),new Map,new fe(H),o,a);await Db(r,l),r.wa=r.wa.remove(s),r.Sa.delete(e),g_(r)}else await zo(r.localStore,e,!1).then(()=>$o(r,e,n)).catch(wi)}async function V6(t,e){const n=O(t),r=e.batch.batchId;try{const i=await Z5(n.localStore,e);p_(n,r,null),m_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await _r(n,i)}catch(i){await wi(i)}}async function L6(t,e,n){const r=O(t);try{const i=await function(o,a){const l=O(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>(B(d!==null),c=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);p_(r,e,n),m_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await _r(r,i)}catch(i){await wi(i)}}async function M6(t,e){const n=O(t);Ti(n.remoteStore)||P("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=O(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>a.mutationQueue.getHighestUnacknowledgedBatchId(l))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Ca.get(r)||[];i.push(e),n.Ca.set(r,i)}catch(r){const i=ca(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function m_(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function p_(t,e,n){const r=O(t);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Da[r.currentUser.toKey()]=i}}function $o(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.Vr(e).forEach(r=>{t.ba.containsKey(r)||Ob(t,r)})}function Ob(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(lu(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),g_(t))}function kg(t,e,n){for(const r of n)r instanceof Cb?(t.ba.addReference(r.key,e),F6(t,r)):r instanceof xb?(P("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||Ob(t,r.key)):M()}function F6(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(P("SyncEngine","New document in limbo: "+n),t.ya.add(r),g_(t))}function g_(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new D(te.fromString(e)),r=t.va.next();t.Sa.set(r,new R6(n)),t.wa=t.wa.insert(n,r),mf(t.remoteStore,new Zn(Ct(ia(n.path)),r,"TargetPurposeLimboResolution",Ft._e))}}async function _r(t,e,n){const r=O(t),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{o.push(r.Ma(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=n_.Ki(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.fa.u_(i),await async function(l,u){const c=O(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>I.forEach(u,h=>I.forEach(h.qi,m=>c.persistence.referenceDelegate.addReference(d,h.targetId,m)).next(()=>I.forEach(h.Qi,m=>c.persistence.referenceDelegate.removeReference(d,h.targetId,m)))))}catch(d){if(!Ii(d))throw d;P("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const h=d.targetId;if(!d.fromCache){const m=c.ns.get(h),y=m.snapshotVersion,_=m.withLastLimboFreeSnapshotVersion(y);c.ns=c.ns.insert(h,_)}}}(r.localStore,s))}async function j6(t,e){const n=O(t);if(!n.currentUser.isEqual(e)){P("SyncEngine","User change. New user:",e.toKey());const r=await pb(n.localStore,e);n.currentUser=e,function(s,o){s.Ca.forEach(a=>{a.forEach(l=>{l.reject(new A(S.CANCELLED,o))})}),s.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await _r(n,r.us)}}function z6(t,e){const n=O(t),r=n.Sa.get(e);if(r&&r.ma)return Q().add(r.key);{let i=Q();const s=n.pa.get(e);if(!s)return i;for(const o of s){const a=n.ga.get(o);i=i.unionWith(a.view.la)}return i}}async function U6(t,e){const n=O(t),r=await rh(n.localStore,e.query,!0),i=e.view.Ra(r);return n.isPrimaryClient&&kg(n,e.targetId,i.da),i}async function $6(t,e){const n=O(t);return _b(n.localStore,e).then(r=>_r(n,r))}async function B6(t,e,n,r){const i=O(t),s=await function(a,l){const u=O(a),c=O(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",d=>c.vn(d,l).next(h=>h?u.localDocuments.getDocuments(d,h):I.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await la(i.remoteStore):n==="acknowledged"||n==="rejected"?(p_(i,e,r||null),m_(i,e),function(a,l){O(O(a).mutationQueue).Mn(l)}(i.localStore,e)):M(),await _r(i,s)):P("SyncEngine","Cannot apply mutation batch with id: "+e)}async function q6(t,e){const n=O(t);if(v_(n),y_(n),e===!0&&n.Fa!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await vE(n,r.toArray());n.Fa=!0,await Sg(n.remoteStore,!0);for(const s of i)mf(n.remoteStore,s)}else if(e===!1&&n.Fa!==!1){const r=[];let i=Promise.resolve();n.pa.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>($o(n,o),zo(n.localStore,o,!0))),lu(n.remoteStore,o)}),await i,await vE(n,r),function(o){const a=O(o);a.Sa.forEach((l,u)=>{lu(a.remoteStore,u)}),a.ba.mr(),a.Sa=new Map,a.wa=new fe(D.comparator)}(n),n.Fa=!1,await Sg(n.remoteStore,!1)}}async function vE(t,e,n){const r=O(t),i=[],s=[];for(const o of e){let a;const l=r.pa.get(o);if(l&&l.length!==0){a=await jo(r.localStore,Ct(l[0]));for(const u of l){const c=r.ga.get(u),d=await U6(r,c);d.snapshot&&s.push(d.snapshot)}}else{const u=await yb(r.localStore,o);a=await jo(r.localStore,u),await f_(r,Vb(u),o,!1,a.resumeToken)}i.push(a)}return r.fa.u_(s),i}function Vb(t){return TP(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function W6(t){return function(n){return O(O(n).persistence).Li()}(O(t).localStore)}async function G6(t,e,n,r){const i=O(t);if(i.Fa)return void P("SyncEngine","Ignoring unexpected query state notification.");const s=i.pa.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await _b(i.localStore,kP(s[0])),a=Uu.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Ye.EMPTY_BYTE_STRING);await _r(i,o,a);break}case"rejected":await zo(i.localStore,e,!0),$o(i,e,r);break;default:M()}}async function K6(t,e,n){const r=v_(t);if(r.Fa){for(const i of e){if(r.pa.has(i)){P("SyncEngine","Adding an already active target "+i);continue}const s=await yb(r.localStore,i),o=await jo(r.localStore,s);await f_(r,Vb(s),o.targetId,!1,o.resumeToken),mf(r.remoteStore,o)}for(const i of n)r.pa.has(i)&&await zo(r.localStore,i,!1).then(()=>{lu(r.remoteStore,i),$o(r,i)}).catch(wi)}}function v_(t){const e=O(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Db.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=z6.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=O6.bind(null,e),e.fa.u_=S6.bind(null,e.eventManager),e.fa.xa=k6.bind(null,e.eventManager),e}function y_(t){const e=O(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=V6.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=L6.bind(null,e),e}function H6(t,e,n){const r=O(t);(async function(s,o,a){try{const l=await o.getMetadata();if(await function(m,y){const _=O(m),w=ze(y.createTime);return _.persistence.runTransaction("hasNewerBundle","readonly",g=>_.$r.getBundleMetadata(g,y.id)).then(g=>!!g&&g.createTime.compareTo(w)>=0)}(s.localStore,l))return await o.close(),a._completeWith(function(m){return{taskState:"Success",documentsLoaded:m.totalDocuments,bytesLoaded:m.totalBytes,totalDocuments:m.totalDocuments,totalBytes:m.totalBytes}}(l)),Promise.resolve(new Set);a._updateProgress(Rb(l));const u=new P6(l,s.localStore,o.serializer);let c=await o.Oa();for(;c;){const h=await u.na(c);h&&a._updateProgress(h),c=await o.Oa()}const d=await u.complete();return await _r(s,d.sa,void 0),await function(m,y){const _=O(m);return _.persistence.runTransaction("Save bundle","readwrite",w=>_.$r.saveBundleMetadata(w,y))}(s.localStore,l),a._completeWith(d.progress),Promise.resolve(d.ia)}catch(l){return Tn("SyncEngine",`Loading bundle failed with ${l}`),a._failWith(l),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Ag{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Bu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return mb(this.persistence,new fb,e.initialUser,this.serializer)}createPersistence(e){return new hb(ff.Hr,this.serializer)}createSharedClientState(e){return new Ib}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Lb extends Ag{constructor(e,n,r){super(),this.Na=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Na.initialize(this,e),await y_(this.Na.syncEngine),await la(this.Na.remoteStore),await this.persistence.fi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return mb(this.persistence,new fb,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new L5(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new _j(n,this.persistence);return new yj(e.asyncQueue,r)}createPersistence(e){const n=t_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Vt.withCacheSize(this.cacheSizeBytes):Vt.DEFAULT;return new e_(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,Eb(),id(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new Ib}}class Q6 extends Lb{constructor(e,n){super(e,n,!1),this.Na=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Na.syncEngine;this.sharedClientState instanceof bm&&(this.sharedClientState.syncEngine={Zs:B6.bind(null,n),Xs:G6.bind(null,n),eo:K6.bind(null,n),Li:W6.bind(null,n),Ys:$6.bind(null,n)},await this.sharedClientState.start()),await this.persistence.fi(async r=>{await q6(this.Na.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=Eb();if(!bm.D(n))throw new A(S.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=t_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new bm(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class __{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>gE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=j6.bind(null,this.syncEngine),await Sg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new T6}()}createDatastore(e){const n=Bu(e.databaseInfo.databaseId),r=function(s){return new a6(s)}(e.databaseInfo);return function(s,o,a,l){return new c6(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new h6(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>gE(this.syncEngine,n,0),function(){return hE.D()?new hE:new i6}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const d=new C6(i,s,o,a,l,u);return c&&(d.Fa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=O(r);P("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await aa(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yE(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):je("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y6{constructor(e,n){this.ka=e,this.serializer=n,this.metadata=new nt,this.buffer=new Uint8Array,this.qa=function(){return new TextDecoder("utf-8")}(),this.Qa().then(r=>{r&&r.ea()?this.metadata.resolve(r.X_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.X_)}`))},r=>this.metadata.reject(r))}close(){return this.ka.cancel()}async getMetadata(){return this.metadata.promise}async Oa(){return await this.getMetadata(),this.Qa()}async Qa(){const e=await this.Ka();if(e===null)return null;const n=this.qa.decode(e),r=Number(n);isNaN(r)&&this.$a(`length string (${n}) is not valid number`);const i=await this.Ua(r);return new A6(JSON.parse(i),e.length+r)}Wa(){return this.buffer.findIndex(e=>e===123)}async Ka(){for(;this.Wa()<0&&!await this.Ga(););if(this.buffer.length===0)return null;const e=this.Wa();e<0&&this.$a("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Ua(e){for(;this.buffer.length<e;)await this.Ga()&&this.$a("Reached the end of bundle when more is expected.");const n=this.qa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}$a(e){throw this.ka.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ga(){const e=await this.ka.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X6{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new A(S.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=O(i),a={documents:s.map(d=>ou(o.serializer,d))},l=await o.vo("BatchGetDocuments",o.serializer.databaseId,te.emptyPath(),a,s.length),u=new Map;l.forEach(d=>{const h=v5(o.serializer,d);u.set(h.key.toString(),h)});const c=[];return s.forEach(d=>{const h=u.get(d.toString());B(!!h),c.push(h)}),c}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new oa(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=D.fromPath(r);this.mutations.push(new qy(i,this.precondition(i)))}),await async function(r,i){const s=O(r),o={writes:i.map(a=>au(s.serializer,a))};await s.So("Commit",s.serializer.databaseId,te.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw M();n=q.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new A(S.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(q.min())?Ee.exists(!1):Ee.updateTime(n):Ee.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(q.min()))throw new A(S.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ee.updateTime(n)}return Ee.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J6{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.za=r.maxAttempts,this.jo=new i_(this.asyncQueue,"transaction_retry")}ja(){this.za-=1,this.Ha()}Ha(){this.jo.qo(async()=>{const e=new X6(this.datastore),n=this.Ja(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Ya(i)}))}).catch(r=>{this.Ya(r)})})}Ja(e){try{const n=this.updateFunction(e);return!Lu(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Ya(e){this.za>0&&this.Za(e)?(this.za-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ha(),Promise.resolve()))):this.deferred.reject(e)}Za(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!jP(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z6{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=et.UNAUTHENTICATED,this.clientId=tP.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{P("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(P("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new A(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new nt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ca(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function sd(t,e){t.asyncQueue.verifyOperationInProgress(),P("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await pb(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Pg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await w_(t);P("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>fE(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>fE(e.remoteStore,i)),t._onlineComponents=e}function Mb(t){return t.name==="FirebaseError"?t.code===S.FAILED_PRECONDITION||t.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function w_(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){P("FirestoreClient","Using user provided OfflineComponentProvider");try{await sd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Mb(n))throw n;Tn("Error using user provided cache. Falling back to memory cache: "+n),await sd(t,new Ag)}}else P("FirestoreClient","Using default OfflineComponentProvider"),await sd(t,new Ag);return t._offlineComponents}async function gf(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(P("FirestoreClient","Using user provided OnlineComponentProvider"),await Pg(t,t._uninitializedComponentsProvider._online)):(P("FirestoreClient","Using default OnlineComponentProvider"),await Pg(t,new __))),t._onlineComponents}function Fb(t){return w_(t).then(e=>e.persistence)}function I_(t){return w_(t).then(e=>e.localStore)}function jb(t){return gf(t).then(e=>e.remoteStore)}function E_(t){return gf(t).then(e=>e.syncEngine)}function ez(t){return gf(t).then(e=>e.datastore)}async function Bo(t){const e=await gf(t),n=e.eventManager;return n.onListen=x6.bind(null,e.syncEngine),n.onUnlisten=N6.bind(null,e.syncEngine),n}function tz(t){return t.asyncQueue.enqueue(async()=>{const e=await Fb(t),n=await jb(t);return e.setNetworkEnabled(!0),function(i){const s=O(i);return s.v_.delete(0),qu(s)}(n)})}function nz(t){return t.asyncQueue.enqueue(async()=>{const e=await Fb(t),n=await jb(t);return e.setNetworkEnabled(!1),async function(i){const s=O(i);s.v_.add(0),await aa(s),s.x_.set("Offline")}(n)})}function rz(t,e){const n=new nt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(u,c){const d=O(u);return d.persistence.runTransaction("read document","readonly",h=>d.localDocuments.getDocument(h,c))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new A(S.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const l=ca(a,`Failed to get document '${s} from cache`);o.reject(l)}}(await I_(t),e,n)),n.promise}function zb(t,e,n={}){const r=new nt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new pf({next:h=>{o.enqueueAndForget(()=>c_(s,d));const m=h.docs.has(a);!m&&h.fromCache?u.reject(new A(S.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&h.fromCache&&l&&l.source==="server"?u.reject(new A(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),d=new h_(ia(a.path),c,{includeMetadataChanges:!0,Z_:!0});return u_(s,d)}(await Bo(t),t.asyncQueue,e,n,r)),r.promise}function iz(t,e){const n=new nt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await rh(i,s,!0),l=new Nb(s,a.hs),u=l.ha(a.documents),c=l.applyChanges(u,!1);o.resolve(c.snapshot)}catch(a){const l=ca(a,`Failed to execute query '${s} against cache`);o.reject(l)}}(await I_(t),e,n)),n.promise}function Ub(t,e,n={}){const r=new nt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new pf({next:h=>{o.enqueueAndForget(()=>c_(s,d)),h.fromCache&&l.source==="server"?u.reject(new A(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),d=new h_(a,c,{includeMetadataChanges:!0,Z_:!0});return u_(s,d)}(await Bo(t),t.asyncQueue,e,n,r)),r.promise}function sz(t,e){const n=new pf(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){O(i).K_.add(s),s.next()}(await Bo(t),n)),()=>{n.La(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){O(i).K_.delete(s)}(await Bo(t),n))}}function oz(t,e,n,r){const i=function(o,a){let l;return l=typeof o=="string"?UP().encode(o):o,function(c,d){return new Y6(c,d)}(function(c,d){if(c instanceof Uint8Array)return yE(c,d);if(c instanceof ArrayBuffer)return yE(new Uint8Array(c),d);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),a)}(n,Bu(e));t.asyncQueue.enqueueAndForget(async()=>{H6(await E_(t),i,r)})}function az(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=O(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.$r.getNamedQuery(o,i))}(await I_(t),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $b(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(t,e,n){if(!n)throw new A(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Bb(t,e,n,r){if(e===!0&&r===!0)throw new A(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function wE(t){if(!D.isDocumentKey(t))throw new A(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function IE(t){if(D.isDocumentKey(t))throw new A(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function vf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":M()}function oe(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new A(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vf(t);throw new A(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function qb(t,e){if(e<=0)throw new A(S.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new A(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new A(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Bb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$b((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new A(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new A(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new A(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Wu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new EE({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new A(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new A(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new EE(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new aj;switch(r.type){case"firstParty":return new dj(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new A(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=_E.get(n);r&&(P("ComponentProvider","Removing Datastore"),_E.delete(n),r.terminate())}(this),Promise.resolve()}}function lz(t,e,n,r={}){var i;const s=(t=oe(t,Wu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Tn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=et.MOCK_USER;else{a=gO(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new A(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new et(u)}t._authCredentials=new lj(new eP(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xt=class Wb{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Wb(this.firestore,e,this._query)}},Pe=class Gb{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Gb(this.firestore,e,this._key)}},Qr=class Kb extends xt{constructor(e,n,r){super(e,n,ia(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pe(this.firestore,null,new D(e))}withConverter(e){return new Kb(this.firestore,e,this._path)}};function Hb(t,e,...n){if(t=W(t),T_("collection","path",e),t instanceof Wu){const r=te.fromString(e,...n);return IE(r),new Qr(t,null,r)}{if(!(t instanceof Pe||t instanceof Qr))throw new A(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(te.fromString(e,...n));return IE(r),new Qr(t.firestore,null,r)}}function uz(t,e){if(t=oe(t,Wu),T_("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new A(S.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new xt(t,null,function(r){return new vr(te.emptyPath(),r)}(e))}function ah(t,e,...n){if(t=W(t),arguments.length===1&&(e=tP.newId()),T_("doc","path",e),t instanceof Wu){const r=te.fromString(e,...n);return wE(r),new Pe(t,null,new D(r))}{if(!(t instanceof Pe||t instanceof Qr))throw new A(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(te.fromString(e,...n));return wE(r),new Pe(t.firestore,t instanceof Qr?t.converter:null,new D(r))}}function Qb(t,e){return t=W(t),e=W(e),(t instanceof Pe||t instanceof Qr)&&(e instanceof Pe||e instanceof Qr)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function Yb(t,e){return t=W(t),e=W(e),t instanceof xt&&e instanceof xt&&t.firestore===e.firestore&&Fu(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cz{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new i_(this,"async_queue_retry"),this._u=()=>{const n=id();n&&P("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=id();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.au(),this.uu(e)}enterRestrictedMode(e){if(!this.tu){this.tu=!0,this.su=e||!1;const n=id();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(e){if(this.au(),this.tu)return new Promise(()=>{});const n=new nt;return this.uu(()=>this.tu&&this.su?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.eu.push(e),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(e){if(!Ii(e))throw e;P("AsyncQueue","Operation failed with retryable error: "+e)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(e){const n=this.Xa.then(()=>(this.iu=!0,e().catch(r=>{this.ru=r,this.iu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw je("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(e,n,r){this.au(),this.ou.indexOf(e)>-1&&(n=0);const i=l_.createAndSchedule(this,e,n,r,s=>this.lu(s));return this.nu.push(i),i}au(){this.ru&&M()}verifyOperationInProgress(){}async hu(){let e;do e=this.Xa,await e;while(e!==this.Xa)}Pu(e){for(const n of this.nu)if(n.timerId===e)return!0;return!1}Iu(e){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.hu()})}Tu(e){this.ou.push(e)}lu(e){const n=this.nu.indexOf(e);this.nu.splice(n,1)}}function bg(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class dz{constructor(){this._progressObserver={},this._taskCompletionResolver=new nt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hz=-1;let Oe=class extends Wu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new cz}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Xb(this),this._firestoreClient.terminate()}};function ot(t){return t._firestoreClient||Xb(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Xb(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new zj(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,$b(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Z6(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function fz(t,e){Zb(t=oe(t,Oe));const n=ot(t);if(n._uninitializedComponentsProvider)throw new A(S.FAILED_PRECONDITION,"SDK cache is already specified.");Tn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new __;return Jb(n,i,new Lb(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function mz(t){Zb(t=oe(t,Oe));const e=ot(t);if(e._uninitializedComponentsProvider)throw new A(S.FAILED_PRECONDITION,"SDK cache is already specified.");Tn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new __;return Jb(e,r,new Q6(r,n.cacheSizeBytes))}function Jb(t,e,n){const r=new nt;return t.asyncQueue.enqueue(async()=>{try{await sd(t,n),await Pg(t,e),r.resolve()}catch(i){const s=i;if(!Mb(s))throw s;Tn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function pz(t){if(t._initialized&&!t._terminated)throw new A(S.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new nt;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!an.D())return Promise.resolve();const i=r+"main";await an.delete(i)}(t_(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function gz(t){return function(n){const r=new nt;return n.asyncQueue.enqueueAndForget(async()=>M6(await E_(n),r)),r.promise}(ot(t=oe(t,Oe)))}function vz(t){return tz(ot(t=oe(t,Oe)))}function yz(t){return nz(ot(t=oe(t,Oe)))}function _z(t,e){const n=ot(t=oe(t,Oe)),r=new dz;return oz(n,t._databaseId,e,r),r}function wz(t,e){return az(ot(t=oe(t,Oe)),e).then(n=>n?new xt(t,null,n.query):null)}function Zb(t){if(t._initialized||t._terminated)throw new A(S.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gn(Ye.fromBase64String(e))}catch(n){throw new A(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Gn(Ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let di=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new A(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ie(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ps=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new A(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new A(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iz=/^__.*__$/;class Ez{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new yr(e,this.data,this.fieldMask,n,this.fieldTransforms):new sa(e,this.data,n,this.fieldTransforms)}}class eR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new yr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function tR(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class _f{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Eu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(e){return new _f(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Au({path:r,Vu:!1});return i.mu(e),i}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Au({path:r,Vu:!1});return i.Eu(),i}gu(e){return this.Au({path:void 0,Vu:!0})}pu(e){return lh(e,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Eu(){if(this.path)for(let e=0;e<this.path.length;e++)this.mu(this.path.get(e))}mu(e){if(e.length===0)throw this.pu("Document fields must not be empty");if(tR(this.du)&&Iz.test(e))throw this.pu('Document fields cannot begin and end with "__"')}}class Tz{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Bu(e)}Su(e,n,r,i=!1){return new _f({du:e,methodName:n,wu:r,path:Ie.emptyPath(),Vu:!1,yu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function bs(t){const e=t._freezeSettings(),n=Bu(t._databaseId);return new Tz(t._databaseId,!!e.ignoreUndefinedProperties,n)}function wf(t,e,n,r,i,s={}){const o=t.Su(s.merge||s.mergeFields?2:0,e,n,i);C_("Data must be an object, but it was:",o,r);const a=iR(r,o);let l,u;if(s.merge)l=new jt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const h=Rg(e,d,n);if(!o.contains(h))throw new A(S.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);oR(c,h)||c.push(h)}l=new jt(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new Ez(new ct(a),l,u)}class Gu extends Ps{_toFieldTransform(e){if(e.du!==2)throw e.du===1?e.pu(`${this._methodName}() can only appear at the top level of your update data`):e.pu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Gu}}function nR(t,e,n){return new _f({du:3,wu:e.settings.wu,methodName:t._methodName,Vu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class S_ extends Ps{_toFieldTransform(e){return new zu(e.path,new Lo)}isEqual(e){return e instanceof S_}}class k_ extends Ps{constructor(e,n){super(e),this.bu=n}_toFieldTransform(e){const n=nR(this,e,!0),r=this.bu.map(s=>Rs(s,n)),i=new fs(r);return new zu(e.path,i)}isEqual(e){return e instanceof k_&&Ll(this.bu,e.bu)}}class A_ extends Ps{constructor(e,n){super(e),this.bu=n}_toFieldTransform(e){const n=nR(this,e,!0),r=this.bu.map(s=>Rs(s,n)),i=new ms(r);return new zu(e.path,i)}isEqual(e){return e instanceof A_&&Ll(this.bu,e.bu)}}class P_ extends Ps{constructor(e,n){super(e),this.Du=n}_toFieldTransform(e){const n=new Mo(e.serializer,NP(e.serializer,this.Du));return new zu(e.path,n)}isEqual(e){return e instanceof P_&&this.Du===e.Du}}function b_(t,e,n,r){const i=t.Su(1,e,n);C_("Data must be an object, but it was:",i,r);const s=[],o=ct.empty();As(r,(l,u)=>{const c=x_(e,l,n);u=W(u);const d=i.fu(c);if(u instanceof Gu)s.push(c);else{const h=Rs(u,d);h!=null&&(s.push(c),o.set(c,h))}});const a=new jt(s);return new eR(o,a,i.fieldTransforms)}function R_(t,e,n,r,i,s){const o=t.Su(1,e,n),a=[Rg(e,r,n)],l=[i];if(s.length%2!=0)throw new A(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)a.push(Rg(e,s[h])),l.push(s[h+1]);const u=[],c=ct.empty();for(let h=a.length-1;h>=0;--h)if(!oR(u,a[h])){const m=a[h];let y=l[h];y=W(y);const _=o.fu(m);if(y instanceof Gu)u.push(m);else{const w=Rs(y,_);w!=null&&(u.push(m),c.set(m,w))}}const d=new jt(u);return new eR(c,d,o.fieldTransforms)}function rR(t,e,n,r=!1){return Rs(n,t.Su(r?4:3,e))}function Rs(t,e){if(sR(t=W(t)))return C_("Unsupported field value:",e,t),iR(t,e);if(t instanceof Ps)return function(r,i){if(!tR(i.du))throw i.pu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.pu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Vu&&e.du!==4)throw e.pu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Rs(a,i.gu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=W(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return NP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Te.fromDate(r);return{timestampValue:Fo(i.serializer,s)}}if(r instanceof Te){const s=new Te(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Fo(i.serializer,s)}}if(r instanceof yf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Gn)return{bytesValue:qP(i.serializer,r._byteString)};if(r instanceof Pe){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Qy(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.pu(`Unsupported field value: ${vf(r)}`)}(t,e)}function iR(t,e){const n={};return hP(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):As(t,(r,i)=>{const s=Rs(i,e.Ru(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function sR(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Te||t instanceof yf||t instanceof Gn||t instanceof Pe||t instanceof Ps)}function C_(t,e,n){if(!sR(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=vf(n);throw r==="an object"?e.pu(t+" a custom object"):e.pu(t+" "+r)}}function Rg(t,e,n){if((e=W(e))instanceof di)return e._internalPath;if(typeof e=="string")return x_(t,e);throw lh("Field path arguments must be of type string or ",t,!1,void 0,n)}const Sz=new RegExp("[~\\*/\\[\\]]");function x_(t,e,n){if(e.search(Sz)>=0)throw lh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new di(...e.split("."))._internalPath}catch{throw lh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function lh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new A(S.INVALID_ARGUMENT,a+t+l)}function oR(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Pe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new kz(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(If("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class kz extends uu{data(){return super.data()}}function If(t,e){return typeof e=="string"?x_(t,e):e instanceof di?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new A(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class N_{}class Ku extends N_{}function Ar(t,e,...n){let r=[];e instanceof N_&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof D_).length,a=s.filter(l=>l instanceof Ef).length;if(o>1||o>0&&a>0)throw new A(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Ef extends Ku{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ef(e,n,r)}_apply(e){const n=this._parse(e);return uR(e._query,n),new xt(e.firestore,e.converter,pg(e._query,n))}_parse(e){const n=bs(e.firestore);return function(s,o,a,l,u,c,d){let h;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new A(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){SE(d,c);const m=[];for(const y of d)m.push(TE(l,s,y));h={arrayValue:{values:m}}}else h=TE(l,s,d)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||SE(d,c),h=rR(a,o,d,c==="in"||c==="not-in");return ne.create(u,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Az(t,e,n){const r=e,i=If("where",t);return Ef._create(i,r,n)}class D_ extends N_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new D_(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:le.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)uR(o,l),o=pg(o,l)}(e._query,n),new xt(e.firestore,e.converter,pg(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class O_ extends Ku{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new O_(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new A(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new A(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new su(s,o)}(e._query,this._field,this._direction);return new xt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new vr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Pz(t,e="asc"){const n=e,r=If("orderBy",t);return O_._create(r,n)}class Tf extends Ku{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Tf(e,n,r)}_apply(e){return new xt(e.firestore,e.converter,Zd(e._query,this._limit,this._limitType))}}function bz(t){return qb("limit",t),Tf._create("limit",t,"F")}function Rz(t){return qb("limitToLast",t),Tf._create("limitToLast",t,"L")}class Sf extends Ku{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Sf(e,n,r)}_apply(e){const n=lR(e,this.type,this._docOrFields,this._inclusive);return new xt(e.firestore,e.converter,function(i,s){return new vr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function Cz(...t){return Sf._create("startAt",t,!0)}function xz(...t){return Sf._create("startAfter",t,!1)}class kf extends Ku{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new kf(e,n,r)}_apply(e){const n=lR(e,this.type,this._docOrFields,this._inclusive);return new xt(e.firestore,e.converter,function(i,s){return new vr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function Nz(...t){return kf._create("endBefore",t,!1)}function Dz(...t){return kf._create("endAt",t,!0)}function lR(t,e,n,r){if(n[0]=W(n[0]),n[0]instanceof uu)return function(s,o,a,l,u){if(!l)throw new A(S.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const c=[];for(const d of _o(s))if(d.field.isKeyField())c.push(ds(o,l.key));else{const h=l.data.field(d.field);if(lf(h))throw new A(S.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+d.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const m=d.field.canonicalString();throw new A(S.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${m}' (used as the orderBy) does not exist.`)}c.push(h)}return new ui(c,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=bs(t.firestore);return function(o,a,l,u,c,d){const h=o.explicitOrderBy;if(c.length>h.length)throw new A(S.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const m=[];for(let y=0;y<c.length;y++){const _=c[y];if(h[y].field.isKeyField()){if(typeof _!="string")throw new A(S.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof _}`);if(!$y(o)&&_.indexOf("/")!==-1)throw new A(S.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${_}' contains a slash.`);const w=o.path.child(te.fromString(_));if(!D.isDocumentKey(w))throw new A(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${w}' is not because it contains an odd number of segments.`);const g=new D(w);m.push(ds(a,g))}else{const w=rR(l,u,_);m.push(w)}}return new ui(m,d)}(t._query,t.firestore._databaseId,i,e,n,r)}}function TE(t,e,n){if(typeof(n=W(n))=="string"){if(n==="")throw new A(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!$y(e)&&n.indexOf("/")!==-1)throw new A(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(te.fromString(n));if(!D.isDocumentKey(r))throw new A(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ds(t,new D(r))}if(n instanceof Pe)return ds(t,n._key);throw new A(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vf(n)}.`)}function SE(t,e){if(!Array.isArray(t)||t.length===0)throw new A(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function uR(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new A(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new A(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class V_{convertValue(e,n="none"){switch(cs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(oi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw M()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return As(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new yf(Ce(e.latitude),Ce(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=zy(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(nu(e));default:return null}}convertTimestamp(e){const n=si(e);return new Te(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=te.fromString(e);B(tb(r));const i=new ai(r.get(1),r.get(3)),s=new D(r.popFirst(5));return i.isEqual(n)||je(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Oz extends V_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Pe(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let hr=class extends uu{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new cl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(If("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},cl=class extends hr{data(e={}){return super.data(e)}},hi=class{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Wi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new cl(this._firestore,this._userDataWriter,r.key,r,new Wi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new A(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new cl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Wi(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new cl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Wi(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:Vz(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function Vz(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}function cR(t,e){return t instanceof hr&&e instanceof hr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof hi&&e instanceof hi&&t._firestore===e._firestore&&Yb(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lz(t){t=oe(t,Pe);const e=oe(t.firestore,Oe);return zb(ot(e),t._key).then(n=>L_(e,t,n))}class Cs extends V_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Pe(this.firestore,null,n)}}function Mz(t){t=oe(t,Pe);const e=oe(t.firestore,Oe),n=ot(e),r=new Cs(e);return rz(n,t._key).then(i=>new hr(e,r,t._key,i,new Wi(i!==null&&i.hasLocalMutations,!0),t.converter))}function Fz(t){t=oe(t,Pe);const e=oe(t.firestore,Oe);return zb(ot(e),t._key,{source:"server"}).then(n=>L_(e,t,n))}function jz(t){t=oe(t,xt);const e=oe(t.firestore,Oe),n=ot(e),r=new Cs(e);return aR(t._query),Ub(n,t._query).then(i=>new hi(e,r,t,i))}function zz(t){t=oe(t,xt);const e=oe(t.firestore,Oe),n=ot(e),r=new Cs(e);return iz(n,t._query).then(i=>new hi(e,r,t,i))}function Uz(t){t=oe(t,xt);const e=oe(t.firestore,Oe),n=ot(e),r=new Cs(e);return Ub(n,t._query,{source:"server"}).then(i=>new hi(e,r,t,i))}function kE(t,e,n){t=oe(t,Pe);const r=oe(t.firestore,Oe),i=Af(t.converter,e,n);return Hu(r,[wf(bs(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Ee.none())])}function AE(t,e,n,...r){t=oe(t,Pe);const i=oe(t.firestore,Oe),s=bs(i);let o;return o=typeof(e=W(e))=="string"||e instanceof di?R_(s,"updateDoc",t._key,e,n,r):b_(s,"updateDoc",t._key,e),Hu(i,[o.toMutation(t._key,Ee.exists(!0))])}function $z(t){return Hu(oe(t.firestore,Oe),[new oa(t._key,Ee.none())])}function Bz(t,e){const n=oe(t.firestore,Oe),r=ah(t),i=Af(t.converter,e);return Hu(n,[wf(bs(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ee.exists(!1))]).then(()=>r)}function dR(t,...e){var n,r,i;t=W(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||bg(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(bg(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),e[o+2]=(i=d.complete)===null||i===void 0?void 0:i.bind(d)}let l,u,c;if(t instanceof Pe)u=oe(t.firestore,Oe),c=ia(t._key.path),l={next:d=>{e[o]&&e[o](L_(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=oe(t,xt);u=oe(d.firestore,Oe),c=d._query;const h=new Cs(u);l={next:m=>{e[o]&&e[o](new hi(u,h,d,m))},error:e[o+1],complete:e[o+2]},aR(t._query)}return function(h,m,y,_){const w=new pf(_),g=new h_(m,w,y);return h.asyncQueue.enqueueAndForget(async()=>u_(await Bo(h),g)),()=>{w.La(),h.asyncQueue.enqueueAndForget(async()=>c_(await Bo(h),g))}}(ot(u),c,a,l)}function qz(t,e){return sz(ot(t=oe(t,Oe)),bg(e)?e:{next:e})}function Hu(t,e){return function(r,i){const s=new nt;return r.asyncQueue.enqueueAndForget(async()=>D6(await E_(r),i,s)),s.promise}(ot(t),e)}function L_(t,e,n){const r=n.docs.get(e._key),i=new Cs(t);return new hr(t,i,e._key,r,new Wi(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wz={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gz=class{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=bs(e)}set(e,n,r){this._verifyNotCommitted();const i=Nr(e,this._firestore),s=Af(i.converter,n,r),o=wf(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Ee.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Nr(e,this._firestore);let o;return o=typeof(n=W(n))=="string"||n instanceof di?R_(this._dataReader,"WriteBatch.update",s._key,n,r,i):b_(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Ee.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Nr(e,this._firestore);return this._mutations=this._mutations.concat(new oa(n._key,Ee.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new A(S.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Nr(t,e){if((t=W(t)).firestore!==e)throw new A(S.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kz=class extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=bs(n)}get(n){const r=Nr(n,this._firestore),i=new Oz(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return M();const o=s[0];if(o.isFoundDocument())return new uu(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new uu(this._firestore,i,r._key,null,r.converter);throw M()})}set(n,r,i){const s=Nr(n,this._firestore),o=Af(s.converter,r,i),a=wf(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=Nr(n,this._firestore);let a;return a=typeof(r=W(r))=="string"||r instanceof di?R_(this._dataReader,"Transaction.update",o._key,r,i,s):b_(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=Nr(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Nr(e,this._firestore),r=new Cs(this._firestore);return super.get(e).then(i=>new hr(this._firestore,r,n._key,i._document,new Wi(!1,!1),n.converter))}};function Hz(t,e,n){t=oe(t,Oe);const r=Object.assign(Object.assign({},Wz),n);return function(s){if(s.maxAttempts<1)throw new A(S.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const l=new nt;return s.asyncQueue.enqueueAndForget(async()=>{const u=await ez(s);new J6(s.asyncQueue,u,a,o,l).ja()}),l.promise}(ot(t),i=>e(new Kz(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qz(){return new Gu("deleteField")}function Yz(){return new S_("serverTimestamp")}function Xz(...t){return new k_("arrayUnion",t)}function Jz(...t){return new A_("arrayRemove",t)}function Zz(t){return new P_("increment",t)}(function(e,n=!0){(function(i){ra=i})(gi),ri(new Bn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Oe(new uj(r.getProvider("auth-internal")),new fj(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new A(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ai(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Un(wI,"4.4.3",e),Un(wI,"4.4.3","esm2017")})();const eU="@firebase/firestore-compat",tU="0.3.26";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M_(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new A("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(){if(typeof Uint8Array>"u")throw new A("unimplemented","Uint8Arrays are not available in this environment.")}function bE(){if(!Fj())throw new A("unimplemented","Blobs are unavailable in Firestore in this environment.")}class cu{constructor(e){this._delegate=e}static fromBase64String(e){return bE(),new cu(Gn.fromBase64String(e))}static fromUint8Array(e){return PE(),new cu(Gn.fromUint8Array(e))}toBase64(){return bE(),this._delegate.toBase64()}toUint8Array(){return PE(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(t){return nU(t,["next","error","complete"])}function nU(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rU{enableIndexedDbPersistence(e,n){return fz(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return mz(e._delegate)}clearIndexedDbPersistence(e){return pz(e._delegate)}}class hR{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof ai||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Tn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){lz(this._delegate,e,n,r)}enableNetwork(){return vz(this._delegate)}disableNetwork(){return yz(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,Bb("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return gz(this._delegate)}onSnapshotsInSync(e){return qz(this._delegate,e)}get app(){if(!this._appCompat)throw new A("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new qo(this,Hb(this._delegate,e))}catch(n){throw kt(n,"collection()","Firestore.collection()")}}doc(e){try{return new ln(this,ah(this._delegate,e))}catch(n){throw kt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new St(this,uz(this._delegate,e))}catch(n){throw kt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Hz(this._delegate,n=>e(new fR(this,n)))}batch(){return ot(this._delegate),new mR(new Gz(this._delegate,e=>Hu(this._delegate,e)))}loadBundle(e){return _z(this._delegate,e)}namedQuery(e){return wz(this._delegate,e).then(n=>n?new St(this,n):null)}}class Pf extends V_{constructor(e){super(),this.firestore=e}convertBytes(e){return new cu(new Gn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return ln.forKey(n,this.firestore,null)}}function iU(t){sj(t)}class fR{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new Pf(e)}get(e){const n=Gi(e);return this._delegate.get(n).then(r=>new du(this._firestore,new hr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=Gi(e);return r?(M_("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Gi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Gi(e);return this._delegate.delete(n),this}}class mR{constructor(e){this._delegate=e}set(e,n,r){const i=Gi(e);return r?(M_("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Gi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Gi(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class ys{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new cl(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new hu(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=ys.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new ys(e,new Pf(e),n),i.set(n,s)),s}}ys.INSTANCES=new WeakMap;class ln{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Pf(e)}static forPath(e,n,r){if(e.length%2!==0)throw new A("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new ln(n,new Pe(n._delegate,r,new D(e)))}static forKey(e,n,r){return new ln(n,new Pe(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new qo(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new qo(this.firestore,Hb(this._delegate,e))}catch(n){throw kt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=W(e),e instanceof Pe?Qb(this._delegate,e):!1}set(e,n){n=M_("DocumentReference.set",n);try{return n?kE(this._delegate,e,n):kE(this._delegate,e)}catch(r){throw kt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?AE(this._delegate,e):AE(this._delegate,e,n,...r)}catch(i){throw kt(i,"updateDoc()","DocumentReference.update()")}}delete(){return $z(this._delegate)}onSnapshot(...e){const n=pR(e),r=gR(e,i=>new du(this.firestore,new hr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return dR(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=Mz(this._delegate):(e==null?void 0:e.source)==="server"?n=Fz(this._delegate):n=Lz(this._delegate),n.then(r=>new du(this.firestore,new hr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new ln(this.firestore,e?this._delegate.withConverter(ys.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function kt(t,e,n){return t.message=t.message.replace(e,n),t}function pR(t){for(const e of t)if(typeof e=="object"&&!Cg(e))return e;return{}}function gR(t,e){var n,r;let i;return Cg(t[0])?i=t[0]:Cg(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class du{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new ln(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return cR(this._delegate,e._delegate)}}class hu extends du{data(e){const n=this._delegate.data(e);return this._delegate._converter||oj(n!==void 0),n}}class St{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Pf(e)}where(e,n,r){try{return new St(this.firestore,Ar(this._delegate,Az(e,n,r)))}catch(i){throw kt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new St(this.firestore,Ar(this._delegate,Pz(e,n)))}catch(r){throw kt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new St(this.firestore,Ar(this._delegate,bz(e)))}catch(n){throw kt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new St(this.firestore,Ar(this._delegate,Rz(e)))}catch(n){throw kt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new St(this.firestore,Ar(this._delegate,Cz(...e)))}catch(n){throw kt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new St(this.firestore,Ar(this._delegate,xz(...e)))}catch(n){throw kt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new St(this.firestore,Ar(this._delegate,Nz(...e)))}catch(n){throw kt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new St(this.firestore,Ar(this._delegate,Dz(...e)))}catch(n){throw kt(n,"endAt()","Query.endAt()")}}isEqual(e){return Yb(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=zz(this._delegate):(e==null?void 0:e.source)==="server"?n=Uz(this._delegate):n=jz(this._delegate),n.then(r=>new xg(this.firestore,new hi(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=pR(e),r=gR(e,i=>new xg(this.firestore,new hi(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return dR(this._delegate,n,r)}withConverter(e){return new St(this.firestore,e?this._delegate.withConverter(ys.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class sU{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new hu(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class xg{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new St(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new hu(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new sU(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new hu(this._firestore,r))})}isEqual(e){return cR(this._delegate,e._delegate)}}class qo extends St{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new ln(this.firestore,e):null}doc(e){try{return e===void 0?new ln(this.firestore,ah(this._delegate)):new ln(this.firestore,ah(this._delegate,e))}catch(n){throw kt(n,"doc()","CollectionReference.doc()")}}add(e){return Bz(this._delegate,e).then(n=>new ln(this.firestore,n))}isEqual(e){return Qb(this._delegate,e._delegate)}withConverter(e){return new qo(this.firestore,e?this._delegate.withConverter(ys.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Gi(t){return oe(t,Pe)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(...e){this._delegate=new di(...e)}static documentId(){return new F_(Ie.keyField().canonicalString())}isEqual(e){return e=W(e),e instanceof di?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this._delegate=e}static serverTimestamp(){const e=Yz();return e._methodName="FieldValue.serverTimestamp",new Li(e)}static delete(){const e=Qz();return e._methodName="FieldValue.delete",new Li(e)}static arrayUnion(...e){const n=Xz(...e);return n._methodName="FieldValue.arrayUnion",new Li(n)}static arrayRemove(...e){const n=Jz(...e);return n._methodName="FieldValue.arrayRemove",new Li(n)}static increment(e){const n=Zz(e);return n._methodName="FieldValue.increment",new Li(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oU={Firestore:hR,GeoPoint:yf,Timestamp:Te,Blob:cu,Transaction:fR,WriteBatch:mR,DocumentReference:ln,DocumentSnapshot:du,Query:St,QueryDocumentSnapshot:hu,QuerySnapshot:xg,CollectionReference:qo,FieldPath:F_,FieldValue:Li,setLogLevel:iU,CACHE_SIZE_UNLIMITED:hz};function aU(t,e){t.INTERNAL.registerComponent(new Bn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},oU)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lU(t){aU(t,(e,n)=>new hR(e,n,new rU)),t.registerVersion(eU,tU)}lU(G);const uU=()=>{const[t,e]=T.useState(""),[n,r]=T.useState(""),[i,s]=T.useState(!1),[o,a]=T.useState(!1),[l,u]=T.useState(null),[c,d]=T.useState(!1),[h,m]=T.useState(0),y=async()=>{try{const p=(await G.auth().signInWithEmailAndPassword(t,n)).user;console.log("User signed in with email and password:",p)}catch(g){console.error("Email/password sign-in error:",g)}},_=async()=>{try{if(t.trim()!==""){const g=localStorage.getItem("lastResetTimestamp"),p=new Date().getTime(),v=60*60*1e3;if(h===1){d(!0),window.alert("You have already requested a password reset. Please try again later.");return}!g||p-g>v?(await G.auth().sendPasswordResetEmail(t),console.log("Password reset email sent successfully"),localStorage.setItem("lastResetTimestamp",p),a(!0),m(h+1),u(setTimeout(()=>{a(!1),d(!1)},5e3))):(console.log("Password reset already requested within the last hour"),d(!0),window.alert("You have already requested a password reset within the last hour. Please try again later."))}else console.error("Forgot password error: Email is empty"),window.alert("Please enter your email address to reset the password.")}catch(g){console.error("Forgot password error:",g)}},w=()=>{s(!i)};return f.jsxs("div",{children:[f.jsx("p",{children:"Email"}),f.jsx("input",{className:"inp1",type:"email",placeholder:"Email",value:t,onChange:g=>e(g.target.value)}),f.jsxs("div",{className:"password-wrapper",children:[f.jsx("p",{children:"Jelszó"}),f.jsx("input",{className:"inp1",type:i?"text":"password",placeholder:"Jelszó",value:n,onChange:g=>r(g.target.value)}),f.jsx("div",{className:"eye",children:f.jsx(He,{icon:i?DS:Uv,onClick:w})})]}),f.jsxs("div",{className:"logmein",children:[f.jsx("button",{className:"logbtn",onClick:y,children:"Bejelentkezés"}),f.jsxs("button",{className:`forgot-password ${c?"disabled":""}`,onClick:_,disabled:c,children:[f.jsx(He,{icon:ZD})," Elfelejtettem jelszavam"]})]}),o&&f.jsxs("div",{className:"reset-popup",children:[f.jsx("p",{children:"Password reset email sent successfully!"}),f.jsx(He,{icon:VS,onClick:()=>a(!1)})]})]})},cU=({isVisible:t})=>{const[e,n]=T.useState(""),[r,i]=T.useState(""),s=async()=>{try{const l=(await G.auth().createUserWithEmailAndPassword(e,r)).user;console.log("User registered with email and password:",l),await o(l,{})}catch(a){console.error("Email/password registration error:",a)}},o=async(a,l)=>{if(!a)return;const{uid:u,email:c}=a,d=G.firestore().doc(`users/${u}`);try{if(!(await d.get()).exists){const m=new Date;await d.set({email:c,createdAt:m,userType:"user",...l})}}catch(h){console.error("Error creating user document:",h)}};return t?f.jsxs("div",{children:[f.jsx("input",{className:"inp1",type:"email",placeholder:"Email",value:e,onChange:a=>n(a.target.value)}),f.jsxs("div",{className:"password-wrapper",children:[f.jsx("input",{className:"inp1",type:"password",placeholder:"Password",value:r,onChange:a=>i(a.target.value)}),f.jsxs("div",{className:"eye1",children:[" ",f.jsx(He,{icon:Uv,className:"eye"})]})]}),f.jsxs("button",{className:"registerbtn",onClick:s,children:[f.jsx(He,{icon:sO})," Regisztráció"]})]}):null},dU=async(t,e)=>{if(!t)return;const{uid:n,email:r}=t,i=G.firestore().doc(`users/${n}`);try{if(!(await i.get()).exists){const o=new Date;await i.set({email:r,createdAt:o,userType:"user",...e})}}catch(s){console.error("Error creating user document:",s)}},hU=()=>{const[t,e]=T.useState(!1),n=()=>{e(!t)},r=async()=>{const i=new G.auth.GoogleAuthProvider;try{const o=(await G.auth().signInWithPopup(i)).user;["craftercsapat590@gmail.com","gocsaldev@gmail.com","toptcorporation@protonmail.com","valogod3412@gmail.com"].includes(o.email)?(console.log("User signed in with Google:",o),await dU(o,{})):(console.log("Access denied. User email is not allowed to register."),window.alert("Access denied. Your email is not allowed to register."),await G.auth().signOut())}catch(s){console.error("Google sign-in error:",s)}};return f.jsxs("div",{className:"login-thingy",children:[!t&&f.jsx(uU,{}),f.jsx(cU,{isVisible:t}),f.jsx("button",{className:"togglebtn",onClick:n,children:t?"Vissza a bejeletkezéshez":"Nincs fiókom"}),f.jsxs("button",{className:"logbtn1",onClick:r,children:[f.jsx(He,{icon:OS})," Bejeletkezés Google-val."]})]})},fU=({label:t,options:e})=>{const[n,r]=T.useState(!1),i=()=>{r(!n)};return f.jsxs("div",{className:"nav-item navds ",onClick:i,children:[f.jsx("a",{className:"nav-item dropds",children:t}),f.jsx("div",{className:`dropdown-content ${n?"show":""}`,children:e.map((s,o)=>f.jsx(bo,{to:s.to,className:`dropdown-item nav-item ${n?"show":""}`,children:s.label},o))})]})},mU=()=>{const[t,e]=T.useState(null),[n,r]=T.useState("light"),[i,s]=T.useState(!1),[o,a]=T.useState(!1),[l,u]=T.useState(!1),[c,d]=T.useState(!1);T.useEffect(()=>{const w=G.auth().onAuthStateChanged(g=>{a(!!g),g&&(G.firestore().collection("admins").doc(g.uid).get().then(p=>{p.exists?(u(!0),console.log("User is an admin")):(u(!1),console.log("User is not an admin"))}).catch(p=>{console.error("Error checking admin status:",p)}),G.firestore().collection("users").doc(g.uid).get().then(p=>{p.exists?(d(!0),console.log("User is a developer")):(d(!1),console.log("User is not a developer"))}).catch(p=>{console.error("Error checking developer status:",p)}))});return()=>w()},[]);const h=w=>{e(w),_()},m=()=>{const w=n==="light"?"dark":"light";r(w),document.body.classList.remove("light-theme","dark-theme"),document.body.classList.add(`${w}-theme`),document.documentElement.style.setProperty("--navbar-bg-light",w==="light"?"#000000":"#565656"),document.documentElement.style.setProperty("--navbar-bg-dark",w==="light"?"#565656":"#000000")},y=()=>{s(!i)},_=()=>{s(!1)};return f.jsxs("div",{className:"base",children:[f.jsxs("nav",{className:`navbar ${n}`,children:[f.jsx(bo,{to:"/",className:"navbar-left",children:"Top T"}),f.jsxs("div",{className:"navbar-right",children:[f.jsxs("div",{className:`menu-toggle ${i?"open":""}`,onClick:y,children:[f.jsx("div",{className:"bar"}),f.jsx("div",{className:"bar"}),f.jsx("div",{className:"bar"})]}),f.jsxs("div",{className:`menu-items ${i?"open":""}`,children:[f.jsx(Pi,{label:"Főoldal",index:0,activeIndex:t,onClick:h,to:"/"}),f.jsx(fU,{label:"Menü",options:[{label:"Rólunk",to:"/About"},{label:"Portfólió",to:"/PortfolioPage"},{label:"Devlog",to:"/DevlogPage"}]}),f.jsx(Pi,{label:"Szolgáltatásaink",index:3,activeIndex:t,onClick:h,to:"/OrderPage"}),f.jsx(Pi,{label:"Jelentkezés",index:4,activeIndex:t,onClick:h,to:"/SignUp"}),o&&f.jsxs(f.Fragment,{children:[l&&f.jsx(Pi,{label:"Admin Panel",index:4,to:"/AdminPanel"}),(l||c)&&f.jsx(Pi,{label:"Todo Lista",index:5,to:"/TodoList"})]}),o?f.jsx(f.Fragment,{children:f.jsx(Pi,{label:f.jsx(He,{icon:YD}),index:6,onClick:()=>G.auth().signOut(),to:"/"})}):f.jsx(Pi,{label:f.jsx(He,{icon:OS}),index:7,activeIndex:t,onClick:h,to:"/login"})]}),f.jsx("button",{className:"theme-switch",onClick:m,children:n==="light"?f.jsx(He,{icon:iO}):f.jsx(He,{icon:eO})})]})]}),f.jsx("div",{className:`menu-overlay ${i?"open":""}`,onClick:_})]})},Pi=({label:t,index:e,activeIndex:n,onClick:r,to:i})=>{const s=n===e;return f.jsxs(bo,{to:i,className:`nav-item ${s?"active":""}`,onClick:()=>r(e),children:[t,s&&f.jsx("div",{className:"underline"})]})},vR="/assets/cotrh-DoiEoG7-.jpg",yR="/assets/tfg-DlALw15j.jpg",_R="/assets/TTPC-B1aScwbm.jpg",wR="/assets/test4-CwXkWlKp.jpg",pU=()=>{const t=[vR,yR,_R],[e,n]=T.useState(0),r=o=>{n(o)},i=()=>{const o=(e+1)%t.length;n(o)},s=()=>{const o=(e-1+t.length)%t.length;n(o)};return f.jsxs("div",{className:"landing-page",children:[f.jsx("h1",{children:"Üdv. a Top T corp. Weboldalán"}),f.jsx("h2",{children:"Projektjeink:"}),f.jsxs("div",{className:"image-carousel",children:[f.jsx("button",{className:"carousel-button prev",onClick:s,children:f.jsx(He,{icon:nO})}),t.map((o,a)=>f.jsx("img",{src:o,alt:"carousel",className:a===e?"active":"",onClick:()=>r(a)},a)),f.jsx("button",{className:"carousel-button next",onClick:i,children:f.jsx(He,{icon:rO})}),f.jsx("div",{className:"navigation-dots",children:t.map((o,a)=>f.jsx("span",{className:`dot ${a===e?"active":""}`,onClick:()=>r(a)},a))})]}),f.jsxs("div",{children:[f.jsx("h2",{className:"why-c-us",children:"Miért válasszon minket?"}),f.jsxs("ul",{className:"why-us",children:[f.jsxs("li",{children:[f.jsx("h3",{children:"Tapasztalt csapat:"})," Top T-nk elkötelezett, tapasztalt szakemberekből áll, akik szerteágazó tudással rendelkeznek az informatika területén."]}),f.jsxs("li",{children:[f.jsx("h3",{children:"Ügyfélközpontú megközelítés:"}),"Minden projektünkben az ügyfelek igényeire és céljaira koncentrálunk, hogy olyan egyedi megoldásokat nyújtsunk, amelyek valóban kiemelkedő eredményeket hoznak."]}),f.jsxs("li",{children:[f.jsx("h3",{children:"Innováció és minőség:"})," Top T mindig a legújabb technológiák felé nyitott, és minden munkánkat a legmagasabb minőségi sztenderdek szerint végezzük el."]})]})]}),f.jsxs("div",{className:"flex-container",children:[f.jsxs("div",{className:"box",children:[f.jsx("h4",{children:"Szolgáltatásaink:"}),f.jsxs("ul",{children:[f.jsx("li",{children:"Webfejlesztés és tervezés"}),f.jsx("li",{children:"Mobilalkalmazás fejlesztés"}),f.jsx("li",{children:"Felhőalapú megoldások"}),f.jsx("li",{children:"Tanácsadás"})]}),f.jsx(bo,{to:"/OrderPage",className:"kapcs",style:{position:"relative",top:"-5px"},children:f.jsx("button",{children:"Tuddj meg Többet --- >"})})]}),f.jsxs("div",{className:"box1",children:[f.jsx("h4",{children:"Csapatunk:"}),f.jsx("img",{className:"imgbox",src:wR,alt:"testimg"}),f.jsx(bo,{to:"/About",className:"kapcs",style:{position:"relative",top:"-5px"},children:f.jsx("button",{style:{marginTop:"10px"},children:"Tovább --- >"})})]})]})]})},gU="/assets/mpfp-CdH2zm_K.jpg",vU="/assets/hpfp-BtRXxfUj.png",yU=()=>f.jsxs("div",{className:"about-page",children:[f.jsx("h1",{children:"Top T Corporation Informatikai Fejlesztő és Tanácsadó Társulat"}),f.jsxs("div",{className:"aboutt",style:{textAlign:"justify"},children:[f.jsx("p",{children:"   A Top T Corporation Informatikai Fejlesztő és Tanácsadó Társulat kiemelkedő választás ügyfelei számára az informatikai fejlesztés és tanácsadás terén. Szakértelmünk és tapasztalatunk révén lehetőséget biztosítunk ügyfeleinknek az innovációra, hatékonyabb üzleti folyamatok kialakítására és versenyelőny megszerzésére."}),f.jsx("h2",{children:"Miért minket válasszanak?"}),f.jsx("p",{children:"   Top T Corporation Informatikai Fejlesztő és Tanácsadó Társulatot válassza, ha minőségi és hatékony informatikai megoldásokra van szüksége. Az alábbiakban felsoroljuk, miért érdemes minket választani:"}),f.jsxs("ul",{className:"abouttt",children:[f.jsx("li",{children:"Tapasztalt szakemberek: Csapatunk magasan képzett és tapasztalt szakemberekből áll, akik kiemelkedő minőségű szolgáltatásokat nyújtanak."}),f.jsx("li",{children:"Ügyfélcentrikusság: Ügyfeleink igényeire szabott megoldásokat kínálunk, figyelembe véve az egyedi követelményeket és kihívásokat."}),f.jsx("li",{children:"Átfogó szolgáltatások: Széles körű szolgáltatásaink révén lehetőséget biztosítunk webfejlesztésre és tervezésre, mobilalkalmazás fejlesztésre, felhőalapú megoldásokra és tanácsadásra."}),f.jsx("li",{children:"Innováció és kreativitás: Folyamatosan követjük az iparági trendeket és újításokat, hogy ügyfeleink számára mindig a legfrissebb és leginnovatívabb megoldásokat nyújtsuk."}),f.jsx("li",{children:"Kiváló minőség és megbízhatóság: Szolgáltatásaink magas minőséget és megbízhatóságot garantálnak, hogy ügyfeleink teljes elégedettségét biztosítsuk."})]}),f.jsx("h2",{children:"Specializációink"}),f.jsx("p",{children:"   Top T Corporation Informatikai Fejlesztő és Tanácsadó Társulat számos területen specializálódott, ideértve:"}),f.jsxs("ul",{className:"abouttt",children:[f.jsx("li",{children:"Webfejlesztés és tervezés: Kiváló minőségű webes alkalmazásokat tervezünk és fejlesztünk, figyelembe véve az ügyfelek igényeit és a legújabb trendeket."}),f.jsx("li",{children:"Mobilalkalmazás fejlesztés: Tapasztalt csapatunk mobilalkalmazásokat fejleszt minden platformra, biztosítva az optimális felhasználói élményt és funkcionalitást."}),f.jsx("li",{children:"Felhőalapú megoldások: Szakértőink felhőalapú megoldásokat kínálnak, lehetővé téve az ügyfeleknek az adatok távoli elérését és kezelését, valamint a skálázhatóságot és rugalmasságot."}),f.jsx("li",{children:"Tanácsadás: Tanácsadóink segítenek az ügyfeleknek az informatikai stratégiák kidolgozásában és optimalizálásában, hogy maximalizálják az üzleti eredményeket és versenyképességet."})]}),f.jsxs("p",{children:["Ha az említett szolgáltatások és lehetőségek felkeltették érdeklődésedet vagy úgy gondolod hogy te jó része lennél a csapatunknak akkor, ne habozz! Csatlakozz hozzánk és légy részese a",f.jsx(bo,{to:"/",className:"kapcse",style:{fontSize:"1.2rem"},children:" Top T Corporation"})," csapatának! "]})]}),f.jsx("div",{className:"team",children:f.jsxs("div",{className:"team-category",children:[f.jsxs("div",{className:"team-member",children:[f.jsx("img",{src:gU,alt:"Gocsál Mátyás"}),f.jsxs("div",{children:[f.jsx("h3",{children:"Gocsál Mátyás"}),f.jsxs("ul",{children:[f.jsx("li",{children:"Chief Executive Officer"}),f.jsx("li",{children:"Chief Human Resources Officer"}),f.jsx("li",{children:"Consulting Team Lead"})]})]})]}),f.jsxs("div",{className:"team-member",children:[f.jsx("img",{src:vU,alt:"Karsa Hunor Ákos"}),f.jsxs("div",{children:[f.jsx("h3",{children:"Karsa Hunor Ákos"}),f.jsxs("ul",{children:[f.jsx("li",{children:"Chief Executive Officer"}),f.jsx("li",{children:"Chief Technology Officer"}),f.jsx("li",{children:"Development Team Lead"})]})]})]}),f.jsxs("div",{className:"team-member",children:[f.jsx("img",{src:wR,alt:"Kovács Gáspár"}),f.jsxs("div",{children:[f.jsx("h3",{children:"Kovács Gáspár"}),f.jsxs("ul",{children:[f.jsx("li",{children:"Chief Executive Officer"}),f.jsx("li",{children:"Chief Compliance Officer"}),f.jsx("li",{children:"Chief Financial Officer"})]})]})]})]})})]});function _U({name:t,image:e,description:n,link:r}){return f.jsxs("div",{className:"portfolio-item",children:[f.jsx("h3",{children:t}),f.jsx("img",{className:"imagethingy",src:e,alt:t}),f.jsx("p",{children:n}),f.jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer",children:f.jsx("button",{className:"gomb",children:"Tudj meg többet"})})]})}function wU({style:t}){return f.jsx("div",{className:"bubble",style:t})}function IU(){const t=[{name:"Top T Physics Constitution",image:_R,description:"Ez a projekt egy Közép Iskolás fizikai projekt munka miatt jött létre. Amelyben egy tömeg átváltót készítettünk el.",link:"http://ttpc.rf.gd"},{name:"Chronicles of the Relic Hunters",image:vR,description:"Ez a projekt a Közép Iskolai projektjeink között az első volt. Melyben Megtanultuk az alapokat és ki alakítottuk az első terveinket.",link:"http://projektmunka.rf.gd"},{name:"The Physics Game",image:yR,description:"The last project description.",link:"https://xdmanus1.github.io/the-physics-game/"}];return[{top:"2vh",left:"20vw",gradientAngle:"120deg"},{top:"5vh",left:"60vw",gradientAngle:"210deg"},{top:"10vh",left:"5vw",gradientAngle:"45deg"},{top:"36vh",left:"70vw",gradientAngle:"330deg"},{top:"30vh",left:"10vw",gradientAngle:"150deg"},{top:"50vh",left:"25vw",gradientAngle:"270deg"},{top:"70vh",left:"75vw",gradientAngle:"180deg"},{top:"63vh",left:"40vw",gradientAngle:"90deg"},{top:"70vh",left:"15vw",gradientAngle:"0deg"},{top:"36vh",left:"50vw",gradientAngle:"300deg"},{top:"20vh",left:"35vw",gradientAngle:"60deg"}].map((n,r)=>f.jsx(wU,{style:{...n,background:`linear-gradient(${n.gradientAngle}, #ff8080, #ffcc99)`}},r)),f.jsxs("div",{className:"portfolio",children:[f.jsx("h1",{children:"Portfólió"}),f.jsx("div",{className:"portfolio-grid",children:t.map((n,r)=>f.jsx(_U,{...n},r))})]})}function IR({onClose:t,className:e}){return f.jsx("div",{className:`modal ${e}`,children:f.jsxs("div",{className:"modal-content",children:[f.jsx("span",{className:"close",onClick:t,children:"×"}),f.jsx("h2",{children:"Hiba"}),f.jsx("p",{children:"A rendelés leadása során hiba történt. Kérjük, próbálkozzon később újra."})]})})}function ER({onClose:t,className:e,message:n}){return f.jsx("div",{className:`modal ${e}`,children:f.jsxs("div",{className:"modal-content",children:[f.jsx("span",{className:"close",onClick:t,children:"×"}),f.jsx("h2",{children:"Siker"}),f.jsx("p",{children:n})]})})}function EU(){const[t,e]=T.useState(!1),[n,r]=T.useState(!1),[i,s]=T.useState(parseInt(localStorage.getItem("lastSubmissionTime"))||0),[o,a]=T.useState(!1),[l,u]=T.useState(0),[c,d]=T.useState(0),h=async y=>{y.preventDefault();const _=new FormData(y.target),w=_.get("name"),g=_.get("email"),p=_.get("product"),v=_.get("additionalText"),E=_.get("phoneNumber");if(!w||!g||!p||!v||!E){e(!0),r(!1);return}const k=Date.now();if(o){e(!0),r(!1);return}if(k-i<3e5&&(d(b=>b+1),c>=3)){a(!0),e(!0),r(!1),setTimeout(()=>{a(!1),d(0)},3e5);return}try{await G.firestore().collection("orders").add({name:w,email:g,product:p,additionalText:v,phoneNumber:E,timestamp:G.firestore.FieldValue.serverTimestamp()}),r(!0),e(!1),s(k),localStorage.setItem("lastSubmissionTime",k.toString())}catch{e(!0),r(!1)}},m=()=>{e(!1),r(!1)};return T.useEffect(()=>{let y;if(o){const _=Math.ceil((3e5-(Date.now()-i))/1e3);u(_),y=setInterval(()=>{u(w=>w<=0?(clearInterval(y),a(!1),0):w-1)},1e3)}return()=>{clearInterval(y)}},[o,i]),T.useEffect(()=>{const y=Date.now();if(y-i<3e5){a(!0);const _=Math.ceil((3e5-(y-i))/1e3);u(_)}},[]),f.jsxs("div",{children:[f.jsxs("div",{className:"szolg",children:[f.jsx("h1",{className:"szolgh1",children:"Szolgáltatásaink"}),f.jsx("h2",{children:"Kreatív Webfejlesztés és Tervezés:"}),f.jsx("p",{children:"   Szakértő csapatunk innovatív weboldalakat tervez és fejleszt, figyelembe véve ügyfeleink egyedi igényeit és a legfrissebb trendeket. Rugalmas megközelítésünk lehetővé teszi számunkra, hogy minden projekten egyedi és felhasználóbarát weboldalakat hozzunk létre."}),f.jsx("h2",{children:"Mobilalkalmazás Fejlesztés:"}),f.jsx("p",{children:"   Tapasztalt fejlesztőink mobilalkalmazások tervezésében és fejlesztésében jeleskednek minden platformon. Az intuitív felhasználói élmény és a hatékony funkcionalitás jellemzi alkalmazásainkat, amelyek segítik ügyfeleinket céljaik elérésében."}),f.jsx("h2",{children:"Felhőalapú Megoldások:"}),f.jsx("p",{children:"   A TOP T Cég kiemelkedő szakértelmet kínál a felhőalapú megoldások terén, beleértve az infrastruktúrát, az alkalmazásokat és az adattárolást. Rugalmas és skálázható felhőmegoldásaink segítségével ügyfeleink hatékonyan növelhetik vállalkozásuk hatékonyságát és rugalmasságát."}),f.jsx("h2",{children:"Szakértő Tanácsadás:"}),f.jsx("p",{children:"   Tapasztalt tanácsadóink stratégiai és technológiai tanácsokkal látják el ügyfeleinket, hogy segítsenek nekik a legjobb döntések meghozatalában. Az üzleti igényekre szabott tanácsadásunk célja a hosszú távú siker és a versenyelőny biztosítása minden ügyfelünknek."})]}),f.jsxs("div",{className:"container",children:[f.jsx("h2",{className:"ordtx",children:"Rendelés űrlap"}),f.jsxs("form",{onSubmit:h,children:[f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"name",children:"Név"}),f.jsx("input",{type:"text",id:"name",name:"name",className:"input-field",placeholder:"Add meg a neved"})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"email",children:"Email"}),f.jsx("input",{type:"email",id:"email",name:"email",className:"input-field",placeholder:"Add meg az emailed"})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"product",children:"Termék"}),f.jsxs("select",{id:"product",name:"product",className:"input-field",children:[f.jsx("option",{className:"input-field1",value:"webdev",children:"Webfejlesztés és Tervezés"}),f.jsx("option",{className:"input-field1",value:"phoneapp",children:"Mobilalkalmazás Fejlesztés"}),f.jsx("option",{className:"input-field1",value:"cloud",children:"Felhőalapú Megoldás"}),f.jsx("option",{className:"input-field1",value:"consulting",children:"Tanácsadás"})]})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"additionalText",children:"További szöveg"}),f.jsx("textarea",{id:"additionalText",name:"additionalText",className:"input-field expandable",rows:"1",placeholder:"Add meg a további szöveget"})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"phoneNumber",children:"Telefonszám"}),f.jsx("input",{type:"tel",id:"phoneNumber",name:"phoneNumber",className:"input-field",placeholder:"Add meg a telefonszámod"})]}),f.jsx("button",{type:"submit",className:o?"btn-submitdisabled":"btn-submit",disabled:o,style:{marginRight:"auto",marginLeft:"auto",display:"block"},children:"Beküldés"}),o&&f.jsxs("p",{style:{textAlign:"center"},children:["Következő küldésig: ",Math.floor(l/60)," perc ",l%60," másodperc"]})]}),f.jsx(IR,{onClose:m,className:t?"show":"hide"}),f.jsx(ER,{onClose:m,className:n?"show":"hide",message:"A rendelés leadás sikeres."})]})]})}const TU=({message:t,onConfirm:e,onCancel:n})=>f.jsx("div",{className:"modal",style:{display:t?"block":"none"},children:f.jsxs("div",{className:"modal-content",children:[f.jsx("p",{children:t}),f.jsx("button",{className:"btnm",onClick:()=>{e()},children:"Elfogad"}),f.jsx("button",{onClick:n,children:"Mégse"})]})}),SU=({isAdmin:t})=>{const[e,n]=T.useState([]),[r,i]=T.useState(""),[s,o]=T.useState(""),[a,l]=T.useState(["Mátyás Team","Hunor Team","Gáspár Team"]),[u,c]=T.useState(!1),[d,h]=T.useState(!1),[m,y]=T.useState(!1),[_,w]=T.useState(!1),[g,p]=T.useState("Mátyás Team"),[v,E]=T.useState(null);T.useEffect(()=>{(async()=>{try{const tn=(await G.firestore().collection("todos").get()).docs.map(wr=>({id:wr.id,...wr.data()}));n(tn)}catch(ae){console.error("Error fetching todos:",ae)}})();const $=G.firestore().collection("todos").onSnapshot(ae=>{const We=ae.docs.map(tn=>({id:tn.id,...tn.data()}));n(We)});return()=>$()},[]);const k=async()=>{if(r.trim()!=="")try{const N={title:r.trim(),newteam:s.trim(),completed:!1,team:g,createdByAdmin:t||!1};await G.firestore().collection("todos").add(N),i("")}catch(N){console.error("Error adding todo:",N)}},b=async(N,$)=>{try{await G.firestore().collection("todos").doc(N).update({completed:!$})}catch(ae){console.error("Error toggling todo:",ae)}},C=async N=>{console.log("Deleting todo with ID:",N);try{await G.firestore().collection("todos").doc(N).delete(),console.log("Todo deleted successfully!"),c(!1)}catch($){console.error("Error deleting todo:",$)}},L=N=>{console.log("Delete button clicked for todo:",N),c(!0),E(N)},X=e.filter(N=>a.includes(N.team)?!!(m&&N.completed||_&&!N.completed||!m&&!_):!1);return f.jsxs("div",{className:"todo-list",children:[f.jsx("h1",{children:"Todo Lista"}),f.jsxs("div",{className:"todo-btns",children:[f.jsx("input",{className:"input-field asd",type:"text",placeholder:"Todo hozzá adása",value:r,onChange:N=>i(N.target.value)}),f.jsx("input",{className:"input-field asd",type:"text",placeholder:"Csapat/Többi hozzá adása",value:s,style:{width:"40%"},onChange:N=>o(N.target.value)}),f.jsxs("select",{className:"dropdwn",style:{fontsize:"1.2rem"},value:g,onChange:N=>p(N.target.value),children:[f.jsx("option",{value:"Mátyás Team",children:"Mátyás Team"}),f.jsx("option",{value:"Hunor Team",children:"Hunor Team"}),f.jsx("option",{value:"Gáspár Team",children:"Gáspár Team"})]}),f.jsx("button",{onClick:k,children:"Hozzá adás"}),f.jsx("button",{onClick:()=>h(!d),children:d?f.jsx(He,{icon:DS}):f.jsx(He,{icon:Uv})}),d&&f.jsxs("div",{children:[f.jsxs("label",{children:[f.jsx("input",{type:"checkbox",value:"Mátyás Team",checked:a.includes("Mátyás Team"),onChange:N=>{const $=N.target.value;l(ae=>ae.includes($)?ae.filter(We=>We!==$):[...ae,$])}}),"Mátyás Team"]}),f.jsxs("label",{children:[f.jsx("input",{type:"checkbox",value:"Hunor Team",checked:a.includes("Hunor Team"),onChange:N=>{const $=N.target.value;l(ae=>ae.includes($)?ae.filter(We=>We!==$):[...ae,$])}}),"Hunor Team"]}),f.jsxs("label",{children:[f.jsx("input",{type:"checkbox",value:"Gáspár Team",checked:a.includes("Gáspár Team"),onChange:N=>{const $=N.target.value;l(ae=>ae.includes($)?ae.filter(We=>We!==$):[...ae,$])}}),"Gáspár Team"]}),f.jsxs("label",{children:[f.jsx("input",{type:"checkbox",checked:m,onChange:()=>y(!m)}),"Kész"]}),f.jsxs("label",{children:[f.jsx("input",{type:"checkbox",checked:_,onChange:()=>w(!_)}),"Nem kész"]})]})]}),f.jsx("ul",{children:X.map(N=>f.jsxs("li",{className:`todo-item ${N.completed?"completed":""}`,children:[f.jsx("input",{className:"nyomi",type:"checkbox",checked:N.completed,onChange:()=>b(N.id,N.completed)}),f.jsxs("span",{children:[N.title," [",N.newteam,"] (",N.team,")"]}),f.jsx("button",{onClick:()=>L(N.id),children:"X"})]},N.id))}),u&&f.jsx(TU,{message:"Biztos vagy benne hogy ki akarod törölni?",onConfirm:()=>C(v),onCancel:()=>{c(!1),E(null)}})]})};function kU(){const[t,e]=T.useState(!1),[n,r]=T.useState(!1),[i,s]=T.useState(""),[o,a]=T.useState(""),[l,u]=T.useState(""),[c]=T.useState(["Karsa Hunor Ákos","Gocsál Mátyás","Kovács Gáspár"]),d=async m=>{if(m.preventDefault(),!i||!o||!l){e(!0),r(!1);return}try{console.log("Adding new devlog...");const _=G.firestore().collection("devlogs"),w={header:i,changes:o.split(`
`),devName:l,time:G.firestore.Timestamp.now()};await _.add(w),console.log("New devlog added successfully!"),r(!0),e(!1),s(""),a(""),u("")}catch(y){console.error("Error adding devlog:",y),e(!0),r(!1)}},h=()=>{e(!1),r(!1)};return f.jsxs("div",{className:"container orders-management devlog-management",children:[f.jsx("h2",{className:"devlog-header",children:"Új fejlesztői napló hozzáadása"}),f.jsxs("form",{onSubmit:d,children:[f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"devlogHeader",children:"Cím:"}),f.jsx("input",{type:"text",id:"devlogHeader",value:i,onChange:m=>s(m.target.value),className:"devlogheader",placeholder:"Add meg a címet"})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"devlogChanges",children:"Változások:"}),f.jsx("textarea",{id:"devlogChanges",value:o,onChange:m=>a(m.target.value),className:"input-field expandable",rows:"3",placeholder:"Add meg a változásokat (új sorokkal elválasztva)"})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"devName",children:"Fejlesztő neve:"}),f.jsxs("select",{id:"devName",value:l,onChange:m=>u(m.target.value),className:"input-field",children:[f.jsx("option",{value:"",children:"Válassz fejlesztőt"}),c.map((m,y)=>f.jsx("option",{value:m,children:m},y))]})]}),f.jsx("button",{type:"submit",className:"btn-submit",children:"Hozzáadás"})]}),f.jsx(IR,{onClose:h,className:t?"show":"hide"}),f.jsx(ER,{onClose:h,className:n?"show":"hide",message:"A devlog hozzáadása sikeres."})]})}function TR({onClose:t,onConfirm:e,className:n,showConfirmModal:r}){return console.log("showConfirmModal:",r),f.jsx("div",{className:`modal ${n} ${r?"show":""}`,children:f.jsxs("div",{style:{maxwidth:"60%",width:"50%"},className:"modal-content",children:[f.jsx("span",{className:"close",onClick:t,children:"×"}),f.jsx("h2",{children:"Erősítés"}),f.jsx("p",{children:"Biztosan törölni szeretné ezt a naplóbejegyzést?"}),f.jsxs("div",{className:"button-container",children:[f.jsx("button",{onClick:e,style:{marginRight:"10px"},children:"Törlés"}),f.jsx("button",{onClick:t,children:"Mégse"})]})]})})}const AU=()=>{const[t,e]=T.useState([]),[n,r]=T.useState(!1),[i,s]=T.useState(null);T.useEffect(()=>{(async()=>{try{const d=(await G.firestore().collection("jelent").get()).docs.map(h=>({id:h.id,...h.data()}));e(d)}catch(c){console.error("Hiba a jelentkezések lekérése közben:",c)}})()},[]);const o=()=>{r(!1),s(null)},a=u=>{s(u),r(!0)},l=async()=>{try{await G.firestore().collection("jelent").doc(i).delete(),e(u=>u.filter(c=>c.id!==i)),o()}catch(u){console.error("Hiba a jelentkezés törlése közben:",u)}};return f.jsxs("div",{className:"container orders-management devlog-management",children:[f.jsx("h2",{children:"Admin Panel: Jelentkezések"}),t.map(u=>f.jsxs("div",{className:"signup-item",children:[f.jsxs("div",{children:[f.jsx("strong",{children:"Email:"})," ",u.email]}),f.jsxs("div",{children:[f.jsx("strong",{children:"Vezetéknév:"})," ",u.firstName]}),f.jsxs("div",{children:[f.jsx("strong",{children:"Keresztnév:"})," ",u.lastName]}),f.jsxs("div",{children:[f.jsx("strong",{children:"Telefonszám:"})," ",u.phone]}),f.jsxs("div",{children:[f.jsx("strong",{children:"Pozíció:"})," ",u.position]}),f.jsxs("div",{children:[f.jsx("strong",{children:"Tapasztalat:"})," ",u.experience]}),f.jsxs("div",{children:[f.jsx("strong",{children:"Iskolai végzettség:"})," ",u.education]}),f.jsxs("div",{children:[f.jsx("strong",{children:"Portfólió URL:"})," ",u.portfolioURL]}),f.jsxs("div",{children:[f.jsx("strong",{children:"Képességek:"})," ",u.skills]}),f.jsx("span",{className:"delete-icon",onClick:()=>a(u.id),children:"×"})," ",f.jsx("hr",{className:"hrse"})]},u.id)),f.jsx(TR,{onClose:o,onConfirm:l,showConfirmModal:n})]})},PU=()=>{const[t,e]=T.useState([]),[n,r]=T.useState([]),[i,s]=T.useState(!0),[o,a]=T.useState(!0);T.useState([]),T.useState(""),T.useState(""),T.useState(!0),T.useState(!1),T.useEffect(()=>{(async()=>{try{setTimeout(async()=>{const m=(await G.firestore().collection("users").get()).docs.map(y=>({id:y.id,...y.data()}));e(m),s(!1)},1e3)}catch(h){console.error("Error fetching users:",h)}})()},[]),T.useEffect(()=>{(async()=>{try{setTimeout(async()=>{const m=(await G.firestore().collection("orders").get()).docs.map(y=>({id:y.id,...y.data()}));r(m),a(!1)},1e3)}catch(h){console.error("Error fetching orders:",h)}})()},[]);const l=async(d,h)=>{try{await G.firestore().collection("users").doc(d).update({role:h}),h==="admin"?await G.firestore().collection("admins").doc(d).set({isAdmin:!0}):await G.firestore().collection("admins").doc(d).delete(),e(t.map(m=>m.id===d?{...m,role:h}:m))}catch(m){console.error("Error updating role:",m)}},u=async(d,h)=>{const m=h==="Kész"?"Elfogadás Alatt":"Kész";try{await G.firestore().collection("orders").doc(d).update({status:m}),r(n.map(y=>y.id===d?{...y,status:m}:y))}catch(y){console.error(`Error marking order as ${m}:`,y)}},c=async d=>{try{await G.firestore().collection("orders").doc(d).delete(),r(n.filter(h=>h.id!==d))}catch(h){console.error("Error deleting order:",h)}};return f.jsx("div",{className:"body2",children:f.jsx("div",{className:"admin-panel-container",children:o||i?f.jsx("div",{className:"loading-spinner-container",children:f.jsx("span",{className:"loader"})}):f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"orders-management",children:[f.jsx("h2",{className:"section-title",children:"Rendelések kezelés"}),f.jsx("ul",{className:"orders-list",children:n.map(d=>f.jsxs("li",{className:"order-item",children:[f.jsxs("div",{className:"order-info",children:[f.jsxs("span",{className:`order-name status-${d.status}`,children:["Név: ",d.name]}),f.jsxs("span",{className:`order-email status-${d.status}`,children:["Email: ",d.email]}),f.jsxs("span",{className:`order-email status-${d.status}`,children:["Tel.: ",d.phoneNumber]}),f.jsxs("span",{className:`order-email status-${d.status}`,children:["Típus: ",d.product]}),f.jsxs("span",{className:`order-email status-${d.status}`,children:["További Szöveg: ",d.additionalText]}),f.jsxs("span",{className:`order-status status-${d.status}`,children:["Státusz: ",d.status]})]}),f.jsxs("div",{className:"order-actions",children:[f.jsx("input",{type:"checkbox",checked:d.status==="Kész",onChange:()=>u(d.id,d.status),className:"order-done-checkbox"}),f.jsxs("div",{className:"xthing",children:["                                    ",f.jsx(He,{icon:VS,className:"order-delete-icon",onClick:()=>c(d.id)})]})]}),f.jsx("hr",{})]},d.id))})]}),f.jsxs("div",{className:"users-management",children:[f.jsx("h2",{className:"section-title",children:"Felhasználók kezelése"}),f.jsx("ul",{className:"users-list",children:t.map(d=>f.jsxs("li",{className:"user-item",children:[f.jsxs("div",{className:"user-info",children:[f.jsxs("span",{className:"user-name",children:[" ",d.name]}),f.jsxs("span",{className:"user-email",children:["Email: ",d.email]}),f.jsxs("span",{className:"user-role",children:["Rang: ",d.role]})]}),f.jsxs("select",{onChange:h=>l(d.id,h.target.value),value:d.role,className:"user-role-select",children:[f.jsx("option",{value:"admin",children:"Admin"}),f.jsx("option",{value:"dev",children:"Dev"}),f.jsx("option",{value:"user",children:"User"})]})]},d.id))})]}),f.jsx(kU,{}),f.jsx(AU,{})]})})})};function bU(){const[t,e]=T.useState([]),[n,r]=T.useState(!0),[i,s]=T.useState(!1),[o,a]=T.useState(null),[l,u]=T.useState(!1);T.useEffect(()=>{const y=async()=>{try{const v=(await G.firestore().collection("devlogs").get()).docs.map(E=>({id:E.id,...E.data()}));e(v),r(!1)}catch(g){console.error("Hiba a devnaplók lekérésekor:",g)}},_=async()=>{try{const g=G.auth().currentUser;if(g){const p=await G.firestore().collection("admins").doc(g.uid).get();s(p.exists)}}catch(g){console.error("Error checking admin status:",g)}},w=G.auth().onAuthStateChanged(g=>{g?_():s(!1)});return y(),()=>w()},[]),console.log("showConfirmModal:",l);const c=y=>!y||!y.seconds?"Érvénytelen időbélyeg":new Date(y.seconds*1e3).toLocaleString(),d=y=>{a(y),u(!0)},h=async()=>{if(o)try{await G.firestore().collection("devlogs").doc(o.id).delete(),e(t.filter(y=>y.id!==o.id))}catch(y){console.error("Hiba a devnapló törlésekor:",y)}u(!1)},m=()=>{u(!1)};return n?f.jsx("p",{children:"Betöltés..."}):f.jsxs("div",{children:[f.jsx("h1",{className:"devh1",children:"Fejlesztői naplók"}),f.jsx("ul",{className:"uls",children:t.map(y=>f.jsxs("div",{className:"devlog-entry",children:[i&&f.jsx("span",{className:"delete-icon",onClick:()=>d(y),children:"X"}),f.jsxs("h2",{className:"cim",children:["Cím: ",f.jsx("b",{children:y.header})]}),Array.isArray(y.changes)?f.jsxs("div",{className:"others",children:[f.jsx("p",{children:"Változások:"}),f.jsx("ul",{className:"others2",children:y.changes.map(_=>f.jsx("li",{children:_},_))})]}):f.jsx("p",{children:"Nincsenek rögzített változások"}),f.jsxs("p",{className:"others",children:["Fejlesztő: ",y.devName]}),f.jsxs("p",{className:"others",children:["Idő: ",c(y.time)]}),f.jsx("hr",{className:"hrs"})]},y.id))}),l&&f.jsx(TR,{onClose:m,onConfirm:h,className:"delete-confirm-modal",showConfirmModal:!0})]})}const RU=()=>{const[t,e]=T.useState(""),[n,r]=T.useState(""),[i,s]=T.useState(""),[o,a]=T.useState(""),[l,u]=T.useState(""),[c,d]=T.useState(""),[h,m]=T.useState(""),[y,_]=T.useState(""),[w,g]=T.useState(""),[p,v]=T.useState(null),[E,k]=T.useState(!1),[b,C]=T.useState(0);T.useEffect(()=>{const $=localStorage.getItem("lastSubmissionTimestamp");if($){const ae=new Date(parseInt($)),We=new Date(ae.getTime()+2*1e3),tn=new Date,wr=We.getTime()-tn.getTime();if(wr>0){C(wr);const da=setInterval(()=>{C(ha=>ha-1e3)},1e3);return()=>clearInterval(da)}}C(0)},[]);const L=async()=>{try{k(!0);const $=localStorage.getItem("lastSubmissionTimestamp");if($){const ae=new Date(parseInt($));if((new Date().getTime()-ae.getTime())/(1e3*3600)<24)throw new Error("Az űrlapot csak egyszer lehet benyújtani naponta.")}await G.firestore().collection("jelent").add({email:t,firstName:n,lastName:i,phone:o,position:l,experience:c,education:h,portfolioURL:y,skills:w,timestamp:G.firestore.FieldValue.serverTimestamp()}),localStorage.setItem("lastSubmissionTimestamp",Date.now().toString()),console.log("User signed up successfully!")}catch($){v($.message)}finally{k(!1)}},X=()=>t&&n&&i&&o&&l&&c&&h&&y&&w,N=$=>{const ae=Math.floor($/36e5),We=Math.floor($%(1e3*60*60)/(1e3*60)),tn=Math.floor($%(1e3*60)/1e3);return`${ae.toString().padStart(2,"0")}:${We.toString().padStart(2,"0")}:${tn.toString().padStart(2,"0")}`};return f.jsxs("div",{className:"charmander-form",children:[f.jsx("h2",{children:"Regisztráció"}),p&&f.jsx("div",{className:"jigglypuff-error",children:p}),f.jsxs("div",{className:"pikachu-group",children:[f.jsx("label",{className:"pikachu-label",children:"Email:"}),f.jsx("input",{type:"email",className:"pikachu-input",placeholder:"Email",value:t,onChange:$=>e($.target.value),required:!0})]}),f.jsxs("div",{className:"pikachu-group",children:[f.jsx("label",{className:"pikachu-label",children:"Keresztnév:"}),f.jsx("input",{type:"text",className:"pikachu-input",placeholder:"Keresztnév",value:n,onChange:$=>r($.target.value),required:!0})]}),f.jsxs("div",{className:"pikachu-group",children:[f.jsx("label",{className:"pikachu-label",children:"Vezetéknév:"}),f.jsx("input",{type:"text",className:"pikachu-input",placeholder:"Vezetéknév",value:i,onChange:$=>s($.target.value),required:!0})]}),f.jsxs("div",{className:"pikachu-group",children:[f.jsx("label",{className:"pikachu-label",children:"Telefonszám:"}),f.jsx("input",{type:"tel",className:"pikachu-input",placeholder:"Telefonszám",value:o,onChange:$=>a($.target.value),required:!0})]}),f.jsxs("div",{className:"pikachu-group",children:[f.jsx("label",{className:"pikachu-label",children:"Pozíció:"}),f.jsx("input",{type:"text",className:"pikachu-input",placeholder:"Pozíció",value:l,onChange:$=>u($.target.value),required:!0})]}),f.jsxs("div",{className:"pikachu-group",children:[f.jsx("label",{className:"pikachu-label",children:"Tapasztalat:"}),f.jsx("input",{type:"text",className:"pikachu-input",placeholder:"Tapasztalat",value:c,onChange:$=>d($.target.value),required:!0})]}),f.jsxs("div",{className:"pikachu-group",children:[f.jsx("label",{className:"pikachu-label",children:"Tanulmányok:"}),f.jsx("input",{type:"text",className:"pikachu-input",placeholder:"Tanulmányok",value:h,onChange:$=>m($.target.value),required:!0})]}),f.jsxs("div",{className:"pikachu-group",children:[f.jsx("label",{className:"pikachu-label",children:"Portfólió URL:"}),f.jsx("input",{type:"url",className:"pikachu-input",placeholder:"Portfólió URL",value:y,onChange:$=>_($.target.value),required:!0})]}),f.jsxs("div",{className:"pikachu-group",children:[f.jsx("label",{className:"pikachu-label",children:"Képességek:"}),f.jsx("input",{type:"text",className:"pikachu-input",placeholder:"Képességek",value:w,onChange:$=>g($.target.value),required:!0})]}),b>0&&f.jsxs("p",{children:["Hátralévő idő a következő beküldésig: ",N(b)]}),f.jsx("button",{className:"charizard-button",onClick:L,disabled:E||b>0||!X(),children:E?"Beküldés...":"Regisztráció"})]})},CU={apiKey:"AIzaSyCw4L9qdJe-iebiqi7LCab63IBiv34SgCI",authDomain:"top-t-6d92f.firebaseapp.com",projectId:"top-t-6d92f",storageBucket:"top-t-6d92f.appspot.com",messagingSenderId:"250872549223",appId:"1:250872549223:web:9191bf8a9f1a5aff04e9c2",measurementId:"G-48HZBJYJY9Í"},SR=G.initializeApp(CU);G.auth(SR);G.firestore(SR);function xU(){return f.jsxs(HN,{children:[f.jsx(mU,{}),f.jsxs(UN,{children:[f.jsx(kn,{path:"/",element:f.jsx(pU,{})}),f.jsx(kn,{path:"/About",element:f.jsx(yU,{})}),f.jsx(kn,{path:"/PortfolioPage",element:f.jsx(IU,{})}),f.jsx(kn,{path:"/OrderPage",element:f.jsx(EU,{})}),f.jsx(kn,{path:"/TodoList",element:f.jsx(SU,{})}),f.jsx(kn,{path:"/Login",element:f.jsx(hU,{})}),f.jsx(kn,{path:"/AdminPanel",element:f.jsx(PU,{})}),f.jsx(kn,{path:"/DevlogPage",element:f.jsx(bU,{})}),f.jsx(kn,{path:"/SignUp",element:f.jsx(RU,{})})]})]})}Cm.createRoot(document.getElementById("root")).render(f.jsx(ch.StrictMode,{children:f.jsx(xU,{})}));
