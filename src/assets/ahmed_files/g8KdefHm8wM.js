if (self.CavalryLogger) { CavalryLogger.start_js(["xszja"]); }

__d("ChatOpenTab",["csx","Bootloader","ContextualThing","CurrentUser","Event","MercuryIDs","MercuryParticipantTypes","Parent","WorkGalahadSettings","requireWeak"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=null;b("requireWeak")("FantaTabsReactApp",function(a){return h=a});b("requireWeak")("FantaTabsSlimApp",function(a){return h=a});function i(a,c,d,e){b("Event").listen(a,"click",function(f){(b("WorkGalahadSettings").isGalahadEnabled||l.canOpenTab())&&(e(c,d),a.removeAttribute("ajaxify"),a.removeAttribute("rel"),f.preventDefault())})}function j(a,c,d,e){b("Event").listen(a,"click",function(a){l.canOpenTab()&&e(c,d)})}function k(a){a=b("ContextualThing").getContext(a);return a&&b("Parent").bySelector(a,"._3qw")!==null}var l={canOpenTab:function(){return h&&!h.isHidden()},listenOpenEmptyTabDEPRECATED:function(a,b){i(a,null,b,this._loadAndOpenEmptyFantaTab)},listenOpenThreadDEPRECATED:function(a,b,c){var d=this;i(a,b,c,function(a,b){return d.loadAndOpenFantaTab(a,b,c)})},listenOpenUserTabDEPRECATED:function(a,c,d){var e=this;k(a)||i(a,c,d,function(a){return e.loadAndOpenFantaTab(a,b("MercuryParticipantTypes").USER,d)})},listenOpenUserTabPersistentEventDEPRECATED:function(a,c,d){var e=this;k(a)||j(a,c,d,function(a){return e.loadAndOpenFantaTab(a,b("MercuryParticipantTypes").USER,d)})},listenOpenPageTabDEPRECATED:function(a,c,d,e){var f=this;k(a)||i(a,c,e,function(a){return f.loadAndOpenFantaTab(a,b("MercuryParticipantTypes").PAGE,e)})},listenOpenPageTabPersistentEventDEPRECATED:function(a,c,d,e){var f=this;k(a)||j(a,c,e,function(a){return f.loadAndOpenFantaTab(a,b("MercuryParticipantTypes").PAGE,e)})},loadAndOpenFantaTab:function(a,c,d){b("Bootloader").loadModules(["ChatOpenTabEventLogger","FantaTabActions"],function(e,f){if(c===b("MercuryParticipantTypes").USER||c===b("MercuryParticipantTypes").PAGE){var g=b("MercuryIDs").getThreadIDFromUserID(a);f.openTab(g,[d]);e.logUserClickOpen(d,a)}else f.openTab(a,[d]),e.logClickOpen(d,a)},"ChatOpenTab")},_loadAndOpenEmptyFantaTab:function(){b("Bootloader").loadModules(["ChatOpenTabEventLogger","FantaTabActions","MessengerState.bs"],function(a,c,d){d=d.createNewLocalThreadGenerateID(b("CurrentUser").getID());c.openNewMessageTab(d,"jewel_new_message");a.logClickOpen("EmptyTab")},"ChatOpenTab")}};e.exports=l}),null);
__d("ReasonReact.bs",["bs_curry","React","bs_caml_builtin_exceptions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(){return 0}function h(){return 0}function i(){return!0}function j(){return"RenderNotImplemented"}function k(){return 0}function l(a){return a}function m(a,b){return 0}function n(a,c,d){var e=a.reasonProps;if(e==null)if(c!==void 0)return[b("bs_curry")._1(c,a)];else throw[b("bs_caml_builtin_exceptions").invalid_argument,"A JS component called the Reason component "+(d+" which didn't implement the JS->Reason React props conversion.")];else return e}function o(a){__p&&__p();return b("React").createClass({displayName:a,subscriptions:null,statics:{jsPropsToReason:void 0,getDerivedStateFromProps:function(c,d){__p&&__p();var e=this;e=e==null?void 0:e.jsPropsToReason;c=n(c,e,a);e=c[0];if(e[3]!==l){c=d.reasonState;e=b("bs_curry")._1(e[3],c);if(e===c)return null;else return{reasonState:e,reasonStateVersion:d.reasonStateVersion+1|0,reasonStateVersionUsedToComputeSubelements:d.reasonStateVersionUsedToComputeSubelements}}else return null}},self:function(a,b){var c=this;return[c.handleMethod,a,b,c.sendMethod,c.onUnmountMethod]},getInitialState:function(){var c=this;c=n(c.props,c.jsPropsToReason,a);return{reasonState:b("bs_curry")._1(c[0][9],0)}},componentDidMount:function(){var c=this,d=this,e=n(d.props,d.jsPropsToReason,a);e=e[0];if(e[4]!==h){d=d.state;d=d.reasonState;return b("bs_curry")._1(e[4],c.self(d,e[10]))}else return 0},componentDidUpdate:function(c,d){__p&&__p();var e=this,f=this,h=f.state;h=h.reasonState;var i=f.props,j=n(i,f.jsPropsToReason,a),k=j[0];if(k[5]!==g){i=c===i;i=i?j:n(c,f.jsPropsToReason,a);j=d.reasonState;c=e.self(h,k[10]);f=c[0];d=i[0][10];e=c[3];h=c[4];i=[f,j,d,e,h];return b("bs_curry")._1(k[5],[i,c])}else return 0},componentWillUnmount:function(){__p&&__p();var c=this,d=this,e=n(d.props,d.jsPropsToReason,a);e=e[0];d=d.state;d=d.reasonState;e[6]!==h&&b("bs_curry")._1(e[6],c.self(d,e[10]));d=c.subscriptions;if(d!==null){d.forEach(function(a){return b("bs_curry")._1(a,0)});return 0}else return 0},shouldComponentUpdate:function(c,d,e){__p&&__p();e=this;var f=this,g=f.props,h=n(f.props,f.jsPropsToReason,a);g=c===g;g=g?h:n(c,f.jsPropsToReason,a);c=g[0];g=d.reasonState;d=e.self(g,c[10]);if(c[7]!==i){e=f.state;g=e.reasonState;f=d[0];e=h[0][10];h=d[3];var j=d[4];f=[f,g,e,h,j];return b("bs_curry")._1(c[7],[f,d])}else return!0},onUnmountMethod:function(a){var b=this,c=b.subscriptions;if(c!==null){c.push(a);return 0}else{b.subscriptions=[a];return 0}},handleMethod:function(c){var d=this,e=this;return function(f){var g=e.state;g=g.reasonState;var h=n(e.props,e.jsPropsToReason,a);return b("bs_curry")._2(c,f,d.self(g,h[0][10]))}},sendMethod:function(c){__p&&__p();var d=this,e=this,f=n(e.props,e.jsPropsToReason,a);f=f[0];if(f[11]!==m){var g=[function(){return 0}],h=b("bs_curry")._1(f[11],c);return e.setState(function(a,c){__p&&__p();c=a.reasonState;c=b("bs_curry")._1(h,c);if(c===0)return null;else{var d;if(typeof c==="number")d=a;else switch(c.tag|0){case 0:d={reasonState:c[0]};break;case 1:g[0]=c[0];d=a;break;case 2:g[0]=c[1];d={reasonState:c[0]};break}if(d!==a)return d;else return null}},d.handleMethod(function(a,c){return b("bs_curry")._1(g[0],c)}))}else return 0},render:function(){var c=this,d=this,e=n(d.props,d.jsPropsToReason,a);e=e[0];d=d.state;d=d.reasonState;return b("bs_curry")._1(e[8],c.self(d,e[10]))}})}function a(a){return[a,o(a),[void 0],l,h,g,h,i,j,k,0,m,void 0]}var p=a,q=a,r=a,s=a;function c(a,c,d){a=a!==void 0?a:void 0;c=c!==void 0?c:void 0;var e=[d],f=d[12];if(f!==void 0)return b("bs_curry")._2(f,a,c);else return b("React").createElement(d[1],{key:a,ref:c,reasonProps:e})}function d(a,b){var c=a[1].prototype;c.jsPropsToReason=b;c=a[1];c.getDerivedStateFromProps=a[1].getDerivedStateFromProps.bind({jsPropsToReason:b});return a[1]}function e(a,c){var d=function(a){return b("bs_curry")._2(c,a,a.children)};d=d;var e=a[1].prototype;e.jsPropsToReason=d;return a[1]}var t=a("interop");function u(a,c,d){var e=function(e,f){var g=a,h=c,i=d;e=e;f=f;h=Object.assign(Object.assign({},h),{ref:f,key:e});f=[g,h].concat(i);return b("React").createElement.apply(null,f)};return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],e]}function v(a,c){__p&&__p();var d=a!==void 0?a:function(a,b){return a===b},e=[void 0];return function(a){__p&&__p();var f=e[0];if(f!==void 0){f=f;if(b("bs_curry")._2(d,f[0],a))return f[1];else f=1}else f=1;if(f===1){f=b("bs_curry")._1(c,a);e[0]=[a,f];return f}}}function w(a){var b=[a];return function(a){var c=b[0];b[0]=a;return c}}a=[v,w];v=0;f.statelessComponent=p;f.statelessComponentWithRetainedProps=q;f.reducerComponent=r;f.reducerComponentWithRetainedProps=s;f.element=c;f.wrapReasonForJs=d;f.wrapReasonForJsWithChildren=e;f.wrapJsForReason=u;f.Router=v;f.Props=a}),null);
__d("LinkReact.bs",["Link.react","ReasonReact.bs","bs_js_primitive","bs_js_null_undefined"],(function(a,b,c,d,e,f){"use strict";function a(a,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){d={"aria-label":b("bs_js_null_undefined").fromOption(d),"data-ft":b("bs_js_null_undefined").fromOption(f),"data-hover":b("bs_js_null_undefined").fromOption(g),"data-tooltip-content":b("bs_js_null_undefined").fromOption(h),"data-tooltip-alignh":b("bs_js_null_undefined").fromOption(i),"data-tooltip-position":b("bs_js_null_undefined").fromOption(j),className:b("bs_js_null_undefined").fromOption(e),href:b("bs_js_null_undefined").fromOption(k),linkRef:b("bs_js_null_undefined").fromOption(l),onClick:b("bs_js_null_undefined").fromOption(m),onMouseDown:b("bs_js_null_undefined").fromOption(n),onMouseEnter:b("bs_js_null_undefined").fromOption(o),role:b("bs_js_null_undefined").fromOption(p),rel:b("bs_js_null_undefined").fromOption(q),style:b("bs_js_null_undefined").fromOption(r),tabIndex:b("bs_js_null_undefined").fromOption(s),target:b("bs_js_null_undefined").fromOption(t),title:b("bs_js_null_undefined").fromOption(u)};a!==void 0&&(d["aria-expanded"]=b("bs_js_primitive").valFromOption(a));c!==void 0&&(d["aria-hidden"]=b("bs_js_primitive").valFromOption(c));return b("ReasonReact.bs").wrapJsForReason(b("Link.react"),d,v)}f.make=a}),null);
__d("getURLRanges",["UnicodeUtils","URI","URLScraper"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a,c){__p&&__p();c===void 0&&(c=0);var d=a.substr(c),e=b("URLScraper").match(d);if(!e)return[];var f=e;/^[a-z][a-z0-9\-+.]+:\/\//i.test(e)||(f="http://"+e);if(!b("URI").isValidURI(f))return[];var h=d.indexOf(e);d=b("UnicodeUtils").strlen(d.substr(0,h));c+=d;h=e.length;d=[{offset:c,length:e.length,entity:{url:f}}];return d.concat(g(a,c+h))}e.exports=g}),null);
__d("ReasonReactCompat.bs",["ReasonReact.bs"],(function(a,b,c,d,e,f){"use strict";a=b("ReasonReact.bs").wrapJsForReason;c=b("ReasonReact.bs").wrapReasonForJs;f.wrapReactForReasonReact=a;f.wrapReasonReactForReact=c}),null);
__d("Image.bs",["Image.react","bs_js_primitive","ReasonReactCompat.bs"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,c,d,e,f,g,h,i,j,k){__p&&__p();var l={};a!==void 0&&(l.className=b("bs_js_primitive").valFromOption(a));c!==void 0&&(l.alt=b("bs_js_primitive").valFromOption(c));d!==void 0&&(l["aria-label"]=b("bs_js_primitive").valFromOption(d));e!==void 0&&(l["aria-busy"]=b("bs_js_primitive").valFromOption(e));f!==void 0&&(l.src=b("bs_js_primitive").valFromOption(f));g!==void 0&&(l.height=b("bs_js_primitive").valFromOption(g));h!==void 0&&(l.title=b("bs_js_primitive").valFromOption(h));i!==void 0&&(l.width=b("bs_js_primitive").valFromOption(i));j!==void 0&&(l.style=b("bs_js_primitive").valFromOption(j));return b("ReasonReactCompat.bs").wrapReactForReasonReact(b("Image.react"),l,k)}f.make=a}),null);