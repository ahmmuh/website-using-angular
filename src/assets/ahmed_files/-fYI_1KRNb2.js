if (self.CavalryLogger) { CavalryLogger.start_js(["S1S1i"]); }

__d("asyncSleep",["regeneratorRuntime","Promise"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){return b("regeneratorRuntime").async(function(c){while(1)switch(c.prev=c.next){case 0:c.next=2;return b("regeneratorRuntime").awrap(new(b("Promise"))(function(b){return setTimeout(b,a)}));case 2:case"end":return c.stop()}},null,this)}e.exports=a}),null);
__d("QPLTimeToLoadHelper",["QuickPerformanceLogger","Run","crc32","performance"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){return a&&b("crc32")(a)||0}function h(a){return b("performance")&&b("performance").timing&&b("performance").timing.navigationStart&&a<b("performance").timing.navigationStart?a+b("performance").timing.navigationStart:a}function i(a){a.time!=null&&(a.time=h(a.time));var c=g(a.instanceKey);b("QuickPerformanceLogger").markerStart(a.qplMarker,c,a.time);b("QuickPerformanceLogger").annotateMarkerString(a.qplMarker,"SOURCE",a.source,c);b("Run").onUnload(function(){return b("QuickPerformanceLogger").markerEnd(a.qplMarker,"CANCEL",c)})}a={startWithClickEvent:function(a){i(babelHelpers["extends"]({},a,{time:a.event.timeStamp}))},start:function(a){i(a)},annotateString:function(a){var c=g(a.instanceKey);b("QuickPerformanceLogger").annotateMarkerString(a.qplMarker,a.annotationKey,a.annotationValue,c)},annotateInt:function(a){var c=g(a.instanceKey);b("QuickPerformanceLogger").annotateMarkerInt(a.qplMarker,a.annotationKey,a.annotationValue,c)},addPoint:function(a){var c=g(a.instanceKey);b("QuickPerformanceLogger").markerPoint(a.qplMarker,a.pointName,a.data,c,a.time!=null?h(a.time):a.time)},end:function(a){var c=a.time!=null?h(a.time):a.time,d=g(a.instanceKey);b("QuickPerformanceLogger").annotateMarkerInt(a.qplMarker,"END_TIME",c==null?-1:c,d);b("QuickPerformanceLogger").markerEnd(a.qplMarker,a.action?a.action:"SUCCESS",d,c)}};e.exports=a}),null);
__d("PermalinkTimeToLoadLogger",["Arbiter","BigPipe","FeedQuickLogModule","PageEvents","QPLTimeToLoadHelper","performance"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){a.subscribe(b("PageEvents").AJAXPIPE_SEND,function(a,c){a=c.ts;b("QPLTimeToLoadHelper").start({source:"quickling",qplMarker:b("FeedQuickLogModule").LOAD_STORY_PERMALINK_FROM_ANYWHERE_WWW,time:a})})}function h(a){b("QPLTimeToLoadHelper").start({source:a,qplMarker:b("FeedQuickLogModule").LOAD_STORY_PERMALINK_FROM_ANYWHERE_WWW,time:b("performance").timing&&b("performance").timing.navigationStart})}function i(a){b("Arbiter").subscribeOnce(b("BigPipe").Events.init,function(c,d){c=d.arbiter;a.requestType==="quickling"?g(c):h(a.requestType);c.subscribe(b("BigPipe").Events.tti,function(a,c){a=c.ts;b("QPLTimeToLoadHelper").end({qplMarker:b("FeedQuickLogModule").LOAD_STORY_PERMALINK_FROM_ANYWHERE_WWW,time:a})})})}a={log:function(a){i(a)}};e.exports=a}),null);
__d("retry",["regeneratorRuntime","asyncSleep"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=function(b){__p&&__p();babelHelpers.inheritsLoose(a,b);function a(a,c,d,e){var f;f=b.call(this,a)||this;f.message=a;f.values=c;f.errors=d;f.options=e;return f}return a}(babelHelpers.wrapNativeSuper(Error)),h=function(){__p&&__p();function a(b){this.$1=babelHelpers["extends"]({},a.RETRY_OPTION_DEFAULTS,b),this.$2=0,this.$3=!1,this.$4=!1,this.$5=[],this.$6=[],this.$7=null,this.$8=0,this.$9()}var c=a.prototype;c.$9=function(){if(this.$1.interval&&this.$1.interval<0)throw new g("C'mon, interval < 0 makes no sense.",[],[],this.$1);if(this.$1.backoff&&this.$1.backoff<1)throw new g("backoff must be >= 1",[],[],this.$1);if(this.$1.jitter&&(this.$1.jitter<0||this.$1.jitter>1))throw new g("jitter must be in range [0, 1]",[],[],this.$1)};c.onValue=function(){this.$1.retryValues||(this.$1.retryValues=[]);for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];this.$1.retryValues=this.$1.retryValues.concat(b);return this};c.untilValue=function(){for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];return this.untilValueMatches(function(a){return b.indexOf(a)!==-1})};c.onFalsy=function(){return this.onValueMatches(function(a){return!a})};c.onTruthy=function(){return this.onValueMatches(function(a){return!!a})};c.untilTruthy=function(){return this.onFalsy()};c.untilFalsy=function(){return this.onTruthy()};c.onNull=function(){return this.onValueMatches(function(a){return a===null})};c.onUndefined=function(){return this.onValueMatches(function(a){return a===void 0})};c.onValueMatches=function(){this.$1.retryValueMatchers||(this.$1.retryValueMatchers=[]);for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];this.$1.retryValueMatchers=this.$1.retryValueMatchers.concat(b);return this};c.untilValueMatches=function(){for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];return this.onValueMatches.apply(this,b.map(function(a){return function(b){return!a(b)}}))};c.onError=function(){for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];if(b.length===0)return this.onErrorMatches(function(a){return!0});this.$1.retryErrorClasses||(this.$1.retryErrorClasses=[]);this.$1.retryErrorClasses=this.$1.retryErrorClasses.concat(b);return this};c.onErrorMatches=function(){this.$1.retryErrorMatchers||(this.$1.retryErrorMatchers=[]);for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];this.$1.retryErrorMatchers=this.$1.retryErrorMatchers.concat(b);return this};c.limit=function(a){this.$1.retries=a;this.$9();return this};c.once=function(){return this.limit(1)};c.twice=function(){return this.limit(2)};c.withInterval=function(a){this.$1.interval=a;this.$9();return this};c.withMaxInterval=function(a){this.$1.maxInterval=a;return this};c.withMinInterval=function(a){this.$1.minInterval=a;return this};c.withBackoff=function(a){this.$1.backoff=a;this.$9();return this};c.withJitter=function(a){this.$1.jitter=a;this.$9();return this};c.abort=function(){this.$3=!0};c.getCallCount=function(){return this.$2};c.getValues=function(){return this.$5};c.getErrors=function(){return this.$6};c.isRunning=function(){return this.$4};c.call=function(a){__p&&__p();var c,d;return b("regeneratorRuntime").async(function(e){__p&&__p();while(1)switch(e.prev=e.next){case 0:if(!this.$4){e.next=2;break}throw new g("Cannot reuse a retry object while it is still running!",[],[],this.$1);case 2:this.$4=!0,e.prev=3,this.$7=a,this.$6=[],this.$5=[];case 7:if(!(!this.$1.retries||this.$2<this.$1.retries+1)){e.next=33;break}if(!(this.$2>0)){e.next=12;break}c=this.$10();e.next=12;return b("regeneratorRuntime").awrap(b("asyncSleep")(c));case 12:if(!this.$3){e.next=14;break}throw new g("Retry aborted.",this.$5,this.$6,this.$1);case 14:e.prev=14;this.$2++;e.next=18;return b("regeneratorRuntime").awrap(a());case 18:d=e.sent;this.$5.push(d);if(!this.$11(d)){e.next=22;break}return e.abrupt("continue",7);case 22:return e.abrupt("return",d);case 25:e.prev=25;e.t0=e["catch"](14);this.$6.push(e.t0);if(!this.$12(e.t0)){e.next=30;break}return e.abrupt("continue",7);case 30:throw e.t0;case 31:e.next=7;break;case 33:throw new g("Max call count exceeded.",this.$5,this.$6,this.$1);case 34:e.prev=34;this.$4=!1;return e.finish(34);case 37:case"end":return e.stop()}},null,this,[[3,,34,37],[14,25]])};c.$10=function(){return Math.max(0,this.$13(this.$14()))};c.$13=function(a){a=a;this.$1.minInterval&&(a=Math.max(a,this.$1.minInterval));this.$1.maxInterval&&(a=Math.min(a,this.$1.maxInterval));return a};c.$14=function(){return this.$15()+this.$16()};c.$17=function(){return this.$1.interval?this.$1.interval:0};c.$18=function(){return this.$1.backoff?this.$1.backoff:1};c.$15=function(){var a=this.$17(),b=this.$18();return a*Math.pow(b,this.$2-1)};c.$16=function(){var a=this.$19(),b=a-this.$8;this.$8=a;return b};c.$19=function(){var a=this.$1.jitter;if(!a)return 0;var b=Math.random()*2-1;b=b*b*b*a/2;a=this.$17();var c=this.$18(),d=c-1;return d<1e-6?a*Math.pow(c,this.$2)*(b+d*(b*b-b)/2):a*Math.pow(c,this.$2)*(Math.pow(c,b)-1)/(c-1)};c.$11=function(a){return!!this.$1.retryValues&&this.$1.retryValues.indexOf(a)!==-1||!!this.$1.retryValueMatchers&&this.$1.retryValueMatchers.some(function(b){return b(a)})};c.$12=function(a){return!!this.$1.retryErrorClasses&&this.$1.retryErrorClasses.some(function(b){return a instanceof b})||!!this.$1.retryErrorMatchers&&this.$1.retryErrorMatchers.some(function(b){return b(a)})};return a}();h.RETRY_OPTION_DEFAULTS={interval:1e3,backoff:1,jitter:.25};function a(a,c){return b("regeneratorRuntime").async(function(d){while(1)switch(d.prev=d.next){case 0:d.next=2;return b("regeneratorRuntime").awrap(new h(c).call(a));case 2:return d.abrupt("return",d.sent);case 3:case"end":return d.stop()}},null,this)}a.Retry=h;a.RetryError=g;function c(){var a;return(a=new h()).onValue.apply(a,arguments)}a.onValue=c;function d(){var a;return(a=new h()).untilValue.apply(a,arguments)}a.untilValue=d;function f(){return new h().onFalsy()}a.onFalsy=f;function i(){return new h().onTruthy()}a.onTruthy=i;function j(){return new h().untilTruthy()}a.untilTruthy=j;function k(){return new h().untilFalsy()}a.untilFalsy=k;function l(){return new h().onNull()}a.onNull=l;function m(){return new h().onUndefined()}a.onUndefined=m;function n(){var a;return(a=new h()).onValueMatches.apply(a,arguments)}a.onValueMatches=n;function o(){var a;return(a=new h()).untilValueMatches.apply(a,arguments)}a.untilValueMatches=o;function p(){var a;return(a=new h()).onError.apply(a,arguments)}a.onError=p;function q(){var a;return(a=new h()).onErrorMatches.apply(a,arguments)}a.onErrorMatches=q;function r(a){return new h().limit(a)}a.limit=r;function s(){return new h().once()}a.once=s;function t(){return new h().twice()}a.twice=t;function u(a){return new h().withInterval(a)}a.withInterval=u;function v(a){return new h().withMaxInterval(a)}a.withMaxInterval=v;function w(a){return new h().withMinInterval(a)}a.withMinInterval=w;function x(a){return new h().withBackoff(a)}a.withBackoff=x;function y(a){return new h().withJitter(a)}a.withJitter=y;e.exports=a}),null);