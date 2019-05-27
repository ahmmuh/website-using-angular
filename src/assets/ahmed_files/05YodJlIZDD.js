if (self.CavalryLogger) { CavalryLogger.start_js(["cnznP"]); }

__d("WasmosisDefaultCohort",["Promise","regeneratorRuntime","Bootloader","bx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("bx").getURL(b("bx")("669874")),h=b("Promise").reject(new Error("wasmosis unsupported"));window.fetch&&window.WebAssembly&&window.WebAssembly.instantiateStreaming&&(h=function(){__p&&__p();var a,c,d,e,f,h,i,j,k;return b("regeneratorRuntime").async(function(l){__p&&__p();while(1)switch(l.prev=l.next){case 0:a=window.fetch(g);c=WebAssembly.instantiateStreaming(a);d=new(b("Promise"))(function(a){b("Bootloader").loadModules(["WasmosisCore","WasmosisCohort"],function(b,c){a([b,c])},"WasmosisDefaultCohort")});l.next=5;return b("regeneratorRuntime").awrap(c);case 5:e=l.sent;f=e.instance;l.next=9;return b("regeneratorRuntime").awrap(d);case 9:h=l.sent;i=h[0];j=h[1];k=new i(f);return l.abrupt("return",new j(k));case 14:case"end":return l.stop()}},null,this)}());e.exports={get:function(){return h}}}),null);
__d("WasmosisMemory",[],(function(a,b,c,d,e,f){"use strict";e.exports={getByteSlice:function(a,b,c){return new Uint8Array(a,b,c)},getJSString:function(a,b,c){return new TextDecoder("utf-8").decode(this.getByteSlice(a,b,c))}}}),null);
__d("WasmosisRelocatableModule",["invariant","regeneratorRuntime","Promise"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h="wasmosis_dylink",i="__data_start",j="memory";a=function(){__p&&__p();a.compileStreaming=function(d){__p&&__p();var c;return b("regeneratorRuntime").async(function(e){while(1)switch(e.prev=e.next){case 0:window.fetch||g(0,6353);e.next=3;return b("regeneratorRuntime").awrap(WebAssembly.compileStreaming(window.fetch(d)));case 3:c=e.sent;return e.abrupt("return",new a(c));case 5:case"end":return e.stop()}},null,this)};function a(a){__p&&__p();this.module=a;var b=WebAssembly.Module.customSections(a,h);b=b[0];b||g(0,1278);b=new DataView(b);this.dataSize=b.getUint32(0,!0);WebAssembly.Module.imports(a).find(function(a){var b=a.name;a=a.kind;return b===j&&a==="memory"})!==void 0||g(0,1279);this.dataSize===0||WebAssembly.Module.imports(a).find(function(a){var b=a.name;a=a.kind;return b===i&&a==="global"})!==void 0||g(0,1280)}var c=a.prototype;c.instantiate=function(a,c){__p&&__p();var d,e,f,g,h,k;return b("regeneratorRuntime").async(function(l){__p&&__p();while(1)switch(l.prev=l.next){case 0:e=0;this.dataSize>0&&(f=a.alloc(this.dataSize),e=f.base);g=babelHelpers["extends"]((d={},d[j]=a.getMemory(),d[i]=e,d),a.getRuntimeImports());l.next=7;break;h=Object.keys(g).find(function(a){return a in c});if(!(h!==void 0)){l.next=7;break}return l.abrupt("return",b("Promise").reject(new Error("user import "+h+" conflicts with core")));case 7:k={env:babelHelpers["extends"]({},g,c)};return l.abrupt("return",WebAssembly.instantiate(this.module,k));case 9:case"end":return l.stop()}},null,this)};return a}();e.exports=a}),null);
__d("WasmosisSnappy",["invariant","regeneratorRuntime","WasmosisDefaultCohort","WasmosisMemory","WasmosisRelocatableModule","bx"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("bx").getURL(b("bx")("689124")),i=function(){__p&&__p();function a(a){var b=a.instance.exports,c=b.snappy_compress;b=b.snappy_max_compress_len;c||g(0,6357);b||g(0,6356);this.$1=a;this.$2=c;this.$3=b}var c=a.prototype;c.compress=function(a){__p&&__p();var c=this.$1.cohort.getCore(),d=c.alloc(a.byteLength),e=b("WasmosisMemory").getByteSlice(c.getMemory().buffer,d.base,a.byteLength);e.set(a);e=this.$4(d,a.byteLength);a=e[0];e=e[1];var f=b("WasmosisMemory").getByteSlice(c.getMemory().buffer,a.base,e);e=new Uint8Array(e);e.set(f);c.free(d);c.free(a);return e};c.compressStringToBase64=function(a){__p&&__p();var c=this.$1.cohort.getCore(),d=c.alloc(a.length);try{var e=b("WasmosisMemory").getByteSlice(c.getMemory().buffer,d.base,a.length);for(var f=0;f<a.length;f++){var g=a.charCodeAt(f);if(g&-128)throw new Error("cannot compress non-ASCII character");e[f]=g}return this.$5(d,a.length)}finally{c.free(d)}};c.compressToBase64=function(a){var c=this.$1.cohort.getCore(),d=c.alloc(a.byteLength),e=b("WasmosisMemory").getByteSlice(c.getMemory().buffer,d.base,a.byteLength);e.set(a);e=this.$5(d,a.byteLength);c.free(d);return e};c.$5=function(a,c){var d=this.$1.cohort.getCore();a=this.$4(a,c);c=a[0];a=a[1];var e=b("WasmosisMemory").getByteSlice(d.getMemory().buffer,c.base,a),f="";for(var g=0;g<a;g++)f+=String.fromCharCode(e[g]);d.free(c);return window.btoa(f)};c.$4=function(a,b){var c=this.$1.cohort.getCore(),d=this.$3(b);c=c.alloc(d);a=this.$2(a.base,b,c.base,d);return[c,a]};return a}();e.exports=function(){__p&&__p();var a,c,d;return b("regeneratorRuntime").async(function(e){__p&&__p();while(1)switch(e.prev=e.next){case 0:a=b("WasmosisRelocatableModule").compileStreaming(h);e.next=3;return b("regeneratorRuntime").awrap(b("WasmosisDefaultCohort").get());case 3:c=e.sent;e.t0=b("regeneratorRuntime");e.t1=c;e.next=8;return b("regeneratorRuntime").awrap(a);case 8:e.t2=e.sent;e.t3=e.t1.instantiate.call(e.t1,"snappy",e.t2);e.next=12;return e.t0.awrap.call(e.t0,e.t3);case 12:d=e.sent;return e.abrupt("return",new i(d));case 14:case"end":return e.stop()}},null,this)}()}),null);
__d("SnappyCompressUtilWasmosis",["FBLogger","SnappyCompressUtil","WasmosisSnappy","promiseDone"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=null;b("promiseDone")(b("WasmosisSnappy"),function(a){g=a},function(a){b("FBLogger")("wasmosis_snappy").catching(a).debug("failed to compile WasmosisSnappy")});a={compressUint8ArrayToSnappy:function(a){__p&&__p();if(a===null||a===void 0)return null;if(g===null){b("FBLogger")("wasmosis_snappy").debug("falling back to JS due to no async compilation result");return b("SnappyCompressUtil").compressUint8ArrayToSnappy(a)}try{return g.compressToBase64(a)}catch(a){b("FBLogger")("wasmosis_snappy").catching(a).warn("error compressing input array");return null}},compressStringToSnappy:function(a){if(g===null){b("FBLogger")("wasmosis_snappy").debug("falling back to JS due to no async compilation result");return b("SnappyCompressUtil").compressStringToSnappy(a)}try{return g.compressStringToBase64(a)}catch(a){b("FBLogger")("wasmosis_snappy").catching(a).warn("error compressing input string");return null}}};e.exports=a}),null);