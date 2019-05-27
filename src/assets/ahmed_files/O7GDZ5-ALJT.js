if (self.CavalryLogger) { CavalryLogger.start_js(["s\/qSb"]); }

__d("BootloaderEventsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("bootloader_events:BootloaderEventsLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("bootloader_events:BootloaderEventsLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("bootloader_events:BootloaderEventsLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setAllResourcesCount=function(a){this.$1.all_resources_count=a;return this};c.setAllResourcesDownloaded=function(a){this.$1.all_resources_downloaded=a;return this};c.setAsyncResourcesCount=function(a){this.$1.async_resources_count=a;return this};c.setAsyncResourcesDownloaded=function(a){this.$1.async_resources_downloaded=a;return this};c.setBlEndpointMode=function(a){this.$1.bl_endpoint_mode=a;return this};c.setBlSampleRate=function(a){this.$1.bl_sample_rate=a;return this};c.setBlockingResourcesCount=function(a){this.$1.blocking_resources_count=a;return this};c.setBlockingResourcesDownloaded=function(a){this.$1.blocking_resources_downloaded=a;return this};c.setCavalryBlCohort=function(a){this.$1.cavalry_bl_cohort=a;return this};c.setCavalryCohort=function(a){this.$1.cavalry_cohort=a;return this};c.setComponents=function(a){this.$1.components=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setDuration=function(a){this.$1.duration=a;return this};c.setEfPage=function(a){this.$1.ef_page=a;return this};c.setErrCount=function(a){this.$1.err_count=a;return this};c.setFirstIdenticalRequest=function(a){this.$1.first_identical_request=a;return this};c.setHasNewComponent=function(a){this.$1.has_new_component=a;return this};c.setIsEmployee=function(a){this.$1.is_employee=a;return this};c.setMsSinceNavstart=function(a){this.$1.ms_since_navstart=a;return this};c.setParentLid=function(a){this.$1.parent_lid=a;return this};c.setPkgCohort=function(a){this.$1.pkg_cohort=a;return this};c.setRef=function(a){this.$1.ref=a;return this};c.setRequestPath=function(a){this.$1.request_path=a;return this};c.setRetries=function(a){this.$1.retries=a;return this};c.setSvnRev=function(a){this.$1.svn_rev=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setTimesliceContext=function(a){this.$1.timeslice_context=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={all_resources_count:!0,all_resources_downloaded:!0,async_resources_count:!0,async_resources_downloaded:!0,bl_endpoint_mode:!0,bl_sample_rate:!0,blocking_resources_count:!0,blocking_resources_downloaded:!0,cavalry_bl_cohort:!0,cavalry_cohort:!0,components:!0,duration:!0,ef_page:!0,err_count:!0,first_identical_request:!0,has_new_component:!0,is_employee:!0,ms_since_navstart:!0,parent_lid:!0,pkg_cohort:!0,ref:!0,request_path:!0,retries:!0,svn_rev:!0,time:!0,timeslice_context:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("StringTransformations",[],(function(a,b,c,d,e,f){e.exports={unicodeEscape:function(a){return a.replace(/[^A-Za-z0-9\-\.\:\_\$\/\+\=]/g,function(a){a=a.charCodeAt().toString(16);return"\\u"+("0000"+a.toUpperCase()).slice(-4)})},unicodeUnescape:function(a){return a.replace(/(\\u[0-9A-Fa-f]{4})/g,function(a){return String.fromCharCode(parseInt(a.slice(2),16))})}}}),null);
__d("TimeSpentArray",["Banzai","TimeSlice","clearTimeout","pageID","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){__p&&__p();var g=2,h=g*32,i,j,k,l,m,n,o,p,q,r={},s;function t(){return{timeoutDelayMap:r,nextDelay:s,timeoutInSeconds:k}}function u(){if(i){var a=Date.now();a>m&&(o=Math.min(h,Math.ceil(a/1e3-l)));a=z();a&&i(a,s)}y()}function v(){w(),j=b("setTimeoutAcrossTransitions")(b("TimeSlice").guard(u,"TimeSpentArray Timeout",{propagationType:b("TimeSlice").PropagationType.ORPHAN}),k*1e3)}function w(){j&&(b("clearTimeout")(j),j=null)}function x(a){__p&&__p();l=a;m=l*1e3;n=[1];for(var a=1;a<g;a++)n.push(0);o=1;p+=1;q+=1;a=q.toString()+"_delay";s=r[a];s===void 0&&(s=r.delay);a=q.toString()+"_timeout";a=r[a];a===void 0&&(a=r.timeout);a=Math.min(a,h);k=a||h;v()}function y(){w(),n=null}function z(){return!n?null:{tos_id:b("pageID"),start_time:l,tos_array:n.slice(0),tos_len:o,tos_seq:q,tos_cum:p}}function A(a){if(a>=m&&a-m<1e3)return;B(Math.floor(a/1e3))}function B(a){var b=a-l;(b<0||b>=h)&&u();!n?x(a):(n[b>>5]|=1<<(b&31),o=b+1,p+=1,m=a*1e3)}e.exports={init:function(a,c,d){p=0,q=-1,i=a,typeof c==="object"&&c!==null?r=c:r={},x(Math.floor((d===void 0||d===null||d===0?Date.now():d)/1e3)),b("Banzai").subscribe(b("Banzai").SHUTDOWN,u)},update:function(a){A(a)},get:function(){return z()},ship:function(){u()},reset:function(){y()},testState:function(){return t()}}}),null);
__d("TimeSpentImmediateActiveSecondsLogger",["requireCond","cr:844180"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:844180")}),null);
__d("TimeSpentBitArrayLogger",["Arbiter","Banzai","BanzaiODS","Env","LogHistory","TimeSpentArray","TimeSpentConfig","TimeSpentImmediateActiveSecondsLogger","UserActivity","isInIframe"],(function(a,b,c,d,e,f){__p&&__p();var g={delay:b("Banzai").BASIC.delay,retry:!0};function h(a,c){b("Arbiter").inform("timespent/tosbitdataposted",babelHelpers["extends"]({},a)),typeof c==="number"?g.delay=c:g.delay=b("Banzai").BASIC.delay,b("Banzai").post("time_spent_bit_array",babelHelpers["extends"]({},a),g),g.delay=b("TimeSpentConfig").delay}e.exports={init:function(a){__p&&__p();if(b("isInIframe")()&&!b("Env").isCQuick)return;b("UserActivity").subscribe(function(a,c){a=c.last_inform;b("TimeSpentArray").update(a);b("TimeSpentImmediateActiveSecondsLogger").maybeReportActiveSecond(a)});a=Date.now();b("TimeSpentArray").init(h,b("TimeSpentConfig"),a);b("TimeSpentImmediateActiveSecondsLogger").maybeReportActiveSecond(a);b("BanzaiODS").bumpEntityKey("ms.time_spent.qa.www","time_spent.bits.js_initialized")}}}),null);
__d("NavigationClickPointHandler",["Event","ScriptPath","collectDataAttributes"],(function(a,b,c,d,e,f){__p&&__p();var g={getClickPointInfo:function(a){__p&&__p();var c=null,d=b("collectDataAttributes")(a,["ft"],["href","data-click"]),e=d.normal.href;if(!e||e==="#")return!1;e=d.normal["data-click"];c===null&&e&&(c={click:e});e=d.ft.tn;c===null&&e&&(c={tn:e});if(c===null&&a.getAttribute){d=a.getAttribute("class");d&&(c={"class":d})}return c}};function a(a){a=a.target||a.srcElement;a=g.getClickPointInfo(a);a!==!1&&b("ScriptPath").setClickPointInfo(a)}document.documentElement!==null&&b("Event").listen(document.documentElement,{click:a});e.exports=g}),null);
__d("WebDevicePerfInfoLogging",["Banzai","JSScheduler","WebDevicePerfInfoData"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){__p&&__p();var b=document.createElement("canvas");b=b.getContext("webgl")||b.getContext("experimental-webgl");if(!b)return;var c=b.getExtension("WEBGL_debug_renderer_info");if(!c)return;var d=b.getParameter(c.UNMASKED_RENDERER_WEBGL);b=b.getParameter(c.UNMASKED_VENDOR_WEBGL);a.gpu_vendor=b;a.gpu_renderer=d}function h(){var a={};navigator&&navigator.hardwareConcurrency!==void 0&&(a.cpu_cores=navigator.hardwareConcurrency);navigator&&navigator.deviceMemory!==void 0&&(a.ram=navigator.deviceMemory);b("WebDevicePerfInfoData").needsFullUpdate&&g(a);b("Banzai").post("web_device_perf_info_log",a)}a={doLog:function(){(b("WebDevicePerfInfoData").needsFullUpdate||b("WebDevicePerfInfoData").needsPartialUpdate)&&b("JSScheduler").scheduleSpeculativeCallback(h)}};e.exports=a}),null);
__d("WebStorageMonster",["AsyncRequest","Event","StringTransformations","UserActivity","WebStorage","WebStorageMonsterLoggingURI","isEmpty","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){__p&&__p();var g=3e5,h=!1;function i(a){var c={};for(var d in a){var e=a.getItem(d),f=b("StringTransformations").unicodeEscape(d);typeof e==="string"&&(c[f]=e.length)}return c}function j(a){var c=b("WebStorage").getLocalStorage();if(!c||!a.keys)return;m._getLocalStorageKeys().forEach(function(b){a.keys.includes(b)&&c.removeItem(b)})}function k(a){var c=b("WebStorage").getLocalStorage();c&&m._getLocalStorageKeys().forEach(function(b){a.some(function(a){return new RegExp(a).test(b)})||c.removeItem(b)})}function l(a){a===void 0&&(a=!1),b("UserActivity").isActive(g)?b("setTimeoutAcrossTransitions")(function(){l(a)},g):m.cleanNow(a)}var m={registerLogoutForm:function(a,c){b("Event").listen(a,"submit",function(a){m.cleanOnLogout(c)})},schedule:function(a){a===void 0&&(a=!1);if(h)return;h=!0;l(a)},cleanNow:function(a){__p&&__p();a===void 0&&(a=!1);var c=Date.now(),d={},e=b("WebStorage").getLocalStorage();e&&(d.local_storage=i(e));e=b("WebStorage").getSessionStorage();e&&(d.session_storage=i(e));e=!b("isEmpty")(d);var f=Date.now();d.logtime=f-c;if(e){f=b("WebStorageMonsterLoggingURI").uri;if(f===null)return null;new(b("AsyncRequest"))(f).setData(d).setHandler(function(c){c=c.getPayload();c.keys&&(c.keys=c.keys.map(b("StringTransformations").unicodeUnescape));a||j(c)}).send()}},cleanOnLogout:function(a){a&&k(a);a=b("WebStorage").getSessionStorage();a&&a.clear()},_getLocalStorageKeys:function(){var a=b("WebStorage").getLocalStorage();return a?Object.keys(a):[]}};e.exports=m}),null);
__d("BootloaderLoggerUtil",["Bootloader","BootloaderEventsTypedLogger","CurrentUser","ScriptPath","SiteData","performanceNavigationStart"],(function(a,b,c,d,e,f){__p&&__p();var g=null;a={initLogging:function(a){__p&&__p();if(g)return;g=b("Bootloader").getArbiter().subscribe(b("Bootloader").Events.BOOTLOAD,function(c,d){if(!d)return;c=d.start_time;d=babelHelpers.objectWithoutPropertiesLoose(d,["start_time"]);c=Math.round(c-b("performanceNavigationStart")());delete d.will_request_hashes;new(b("BootloaderEventsTypedLogger"))().setMsSinceNavstart(c).setCavalryCohort(a.cavalry_cohort).setPkgCohort(b("SiteData").pkg_cohort).setWeight(a.sample_rate).setIsEmployee(b("CurrentUser").isEmployee()).setSvnRev(b("SiteData").client_revision).setBlEndpointMode(b("SiteData").be_mode).setRequestPath(b("ScriptPath").getScriptPath()).setEfPage(b("ScriptPath").getEarlyFlushPage()).setCavalryBlCohort(a.cavalry_bl_cohort).setBlSampleRate(a.bl_sample_rate).setParentLid(a.parent_lid).updateData(d).log()})}};e.exports=a}),null);
__d("ScriptPathLogger",["Banzai","CurrentUser","LogHistory","ScriptPath","TimeSpentPageTransitionCause","URI","isInIframe"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="script_path_change",h={scriptPath:null,categoryToken:null,extraData:{}},i=!1,j="imp_id";function k(a){__p&&__p();var c=b("URI").getNextURI?b("URI").getNextURI():new(b("URI"))(window.location.href),d=c.getQueryData();c=c.getPath();c.endsWith("/")&&(c=c.substr(0,c.length-1));var e=l(c,d);if(e){a.content_id=e;return}e=m(c);if(e!==""){a.dest_topic_feed=e;return}if(n(c)){e=d.queue_id;e&&(a.dest_srt_queue_id=e);c=d.job_in_review;c&&(a.dest_srt_reviewing_job_id=c);return}}function l(a,b){__p&&__p();if(b.story_fbid)return b.story_fbid;if(b.fbid)return b.fbid;if(b.view==="permalink"&&b.id)return b.id;b=/\/(posts|videos|notes|groups\/.*\/permalink)\//;var c=/^[0-9]+$/;if(b.test(a)){b=a.split("/");a=b[b.length-1];if(c.test(a))return a}return""}function m(a){if(!a||a.search("/feed/topics/")==-1)return"";a=a.split("/");return a[a.length-1]}function n(a){return!!a&&a.search("/intern/review/")!==-1}function o(a,c,d,e){__p&&__p();if(!i||b("isInIframe")())return;var f=b("CurrentUser").isLoggedIn(),h=f?b("Banzai").VITAL:b("Banzai").BASIC;f&&(e=e||{},e.via_banzai_vital="1");f={source_path:a.scriptPath,source_token:a.categoryToken,dest_path:c.scriptPath,dest_token:c.categoryToken,impression_id:c.extraData?c.extraData.imp_id:null,cause:d};d=d===b("TimeSpentPageTransitionCause").PAGE_UNLOAD;d||k(f);if(e!=null){var l=e;l=l.snowlift_content_id;!d&&l!=null&&(f.content_id=l,delete e.snowlift_content_id);f.extra_data=e}a.scriptPath===null&&(f.referrer=document.referrer);d=b("ScriptPath").getClickPointInfo();d&&(f.click_point_info=d);if(a.extraData)for(var m in a.extraData)m!=j&&(f["source_"+m]=a.extraData[m]);if(c.extraData)for(var n in c.extraData)n!=j&&(f["dest_"+n]=c.extraData[n]);a.topViewEndpoint&&(f.source_endpoint=a.topViewEndpoint);c.topViewEndpoint&&(f.dest_endpoint=c.topViewEndpoint);a.restored&&(f.source_restored=!0);b("Banzai").post(g,f,h);b("ScriptPath").setClickPointInfo(null)}function p(){o(b("ScriptPath").getSourcePageInfo()||h,b("ScriptPath").getPageInfo()||h,b("TimeSpentPageTransitionCause").PAGE_LOAD)}function q(a,c,d){o(a,c,b("TimeSpentPageTransitionCause").TRANSITION,d)}function a(){o(b("ScriptPath").getPageInfo()||h,h,b("TimeSpentPageTransitionCause").PAGE_UNLOAD),b("ScriptPath").shutdown()}var r=b("ScriptPath").subscribe(function(a){if(i){var b=a.source,c=a.dest,d=a.cause;a=a.extraData;d?o(b||h,c||h,d,a):b?q(b,c||h,a):p()}});b("Banzai").subscribe(b("Banzai").SHUTDOWN,a);c={startLogging:function(){i=!0,b("ScriptPath").getPageInfo()&&p()},stopLogging:function(){i=!1,r.remove()},BANZAI_LOGGING_ROUTE:g};e.exports=c}),null);
__d("TimeSpentImmediateActiveSecondsLoggerBlue",["Banzai","ImmediateActiveSecondsConfig","ScriptPath"],(function(a,b,c,d,e,f){__p&&__p();var g="immediate_active_seconds",h={signal:!0,retry:!0},i=b("ImmediateActiveSecondsConfig").sampling_rate,j=b("ImmediateActiveSecondsConfig").ias_bucket,k=0;function l(a){if(i<=0)return!1;a=Math.floor(a/1e3)%i;return a===j}function a(a){if(a>=k&&a-k<1e3)return;if(l(a)){var c={activity_time_ms:a,last_activity_time_ms:k,script_path:b("ScriptPath").getTopViewEndpoint()};b("Banzai").post(g,c,h)}k=Math.floor(a/1e3)*1e3}e.exports={maybeReportActiveSecond:a}}),null);