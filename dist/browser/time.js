!function e(n,t,r){function i(u,o){if(!t[u]){if(!n[u]){var s="function"==typeof require&&require;if(!o&&s)return s(u,!0);if(a)return a(u,!0);var c=new Error("Cannot find module '"+u+"'");throw c.code="MODULE_NOT_FOUND",c}var f=t[u]={exports:{}};n[u][0].call(f.exports,function(e){var t=n[u][1][e];return i(t?t:e)},f,f.exports,e,n,t,r)}return t[u].exports}for(var a="function"==typeof require&&require,u=0;u<r.length;u++)i(r[u]);return i}({1:[function(e,n,t){(function(t){"use strict";var r=e("underscore"),i=e("./timeunits.js"),a=e("./timeformat.js"),u={parseFormatString:function(e){if(0!==e.length&&"$"===e[0]){var n=e.slice(1);return a.getFormat(n)}var t=a.getFormat(e);return t?t:(t=a.create(e),a.define(e,t),t)}},o={add:function(e){var n=arguments.length<=1||void 0===arguments[1]?"$default":arguments[1];n=u.parseFormatString(n);var t=0,r=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var c=o.value;t+=this.parse(c,n)}}catch(f){i=!0,a=f}finally{try{!r&&s["return"]&&s["return"]()}finally{if(i)throw a}}return this.stringify(t,n)},after:function(e,n){for(var r=arguments.length<=2||void 0===arguments[2]?"$default":arguments[2],i=arguments.length,a=Array(i>3?i-3:0),u=3;i>u;u++)a[u-3]=arguments[u];return a.unshift(n,this.parse(e,r)),setTimeout.apply(t,a)},ago:function(e){e=new Date(e).getTime();var n=o.now(),t="";return t=n>e?"ago":"from now",o.between(e,n)+" "+t},between:function(e,n){e=new Date(e).getTime(),n=new Date(n).getTime();var t=n-e;if(0===t)return"just now";for(var r=i.unit("year"),a=Math.abs(t/r.millis);.85>a&&"second"!==r.name;)r=i.unit(r.base),a=Math.abs(t/r.millis);var u=t/Math.abs(t),o=Math.floor(a)*u,s=a-Math.floor(a),c="";1>o?c="less than":.85>=s?c="about":s>.85&&(c="less than",o+=u);var f=o*u,l="";return 0===f||1===f?f=-1!==["a","e","i","o","u"].indexOf(r.name[0])?"an":"a":1!==o&&(l="s"),c+" "+f+" "+r.name+l},every:function(e,n){for(var r=arguments.length<=2||void 0===arguments[2]?"$default":arguments[2],i=arguments.length,a=Array(i>3?i-3:0),u=3;i>u;u++)a[u-3]=arguments[u];return a.unshift(n,this.parse(e,r)),setInterval.apply(t,a)},format:function(e){var n=arguments.length<=1||void 0===arguments[1]?"$default":arguments[1],t=arguments.length<=2||void 0===arguments[2]?"$default":arguments[2];return this.stringify(this.parse(e,t),n)},now:function(){return(new Date).getTime()},parse:function(e){var n=arguments.length<=1||void 0===arguments[1]?"$default":arguments[1];if(r.isNumber(e))return e;if(r.isString(e)){n=u.parseFormatString(n);var t=n.unformat(e),a=0;for(var o in t)t.hasOwnProperty(o)&&(a+=i.convert(t[o],o,"millisecond"));return a}},stringify:function(e){var n=arguments.length<=1||void 0===arguments[1]?"$default":arguments[1];if(r.isNumber(e)){n=u.parseFormatString(n);n.references}},subtract:function(e){var n=arguments.length<=1||void 0===arguments[1]?"$default":arguments[1];n=u.parseFormatString(n);var t=this.parse(e.shift(),n),r=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var c=o.value;t+=this.parse(c,n)}}catch(f){i=!0,a=f}finally{try{!r&&s["return"]&&s["return"]()}finally{if(i)throw a}}return this.stringify(t,n)},then:function(){for(var e=arguments.length,n=Array(e),t=0;e>t;t++)n[t]=arguments[t];return Date.apply({},n).getTime()},defineFormat:function(e,n){a.define(e,n)}};a.define("default","{if hrs then hrs ' hour' else ''}{if hrs != 1 then 's' else ''}{if hrs mins then ' ' else ''}{if mins then mins ' minute' else ''}{if mins != 1 then 's' else ''}{if mins secs then ' ' else ''}{if secs then secs ' second' else ''}{if secs != 1 then 's' else ''}"),i.update({name:"millisecond",aliases:["milliseconds","ms","millis"]}),i.define({name:"second",base:"millisecond",scale:1e3,aliases:["seconds","secs","sec","s"]}),i.define({name:"minute",base:"second",scale:60,aliases:["minutes","mins","min","m"]}),i.define({name:"hour",base:"minute",scale:60,aliases:["hours","hrs","hr","h"]}),i.define({name:"day",base:"hour",scale:24,aliases:["days","d"]}),i.define({name:"week",base:"day",scale:7,aliases:["weeks","wks","wk","w"]}),i.define({name:"month",base:"week",scale:31/7,aliases:["months"]}),i.define({name:"year",base:"month",scale:12,aliases:["years","yrs","yr","y"]}),i.define({name:"decade",base:"year",scale:10,aliases:["decades"]}),i.define({name:"century",base:"decade",scale:10,aliases:["centuries"]}),i.define({name:"millenium",base:"century",scale:10,aliases:["millenia"]}),t.time=o,n.exports=o}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./timeformat.js":2,"./timeunits.js":5,underscore:6}],2:[function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),a=e("underscore"),u=e("./timeparser.js"),o={number:/[\+\-]{0,1}(?:[0-9]*\.[0-9]+|[0-9]+)(?:e[\+\-]{0,1}[0-9]*|)/},s={},c={escapeRegexChars:function(e){return e.replace(/\\|\^|\$|\*|\+|\?|\.|\(|\)|\:|\=|\!|\||\{|\}|\,|\[|\]/,"\\$&")},evalBoolExpr:function(e,n){var t=this.evalNode(e.left,n),r=this.evalNode(e.right,n),i=e.operator;return"="===i?t===r:"!="===i?t!==r:">"===i?t>r:"<"===i?r>t:">="===i?t>=r:"<="===i?r>=t:void 0},evalNode:function(e,n){var t=e.type;if("StringLiteral"===t||"IntegerLiteral"===t)return e.value;if("Template"===t||"TemplateBlock"===t||"ThenClause"===t||"ElseClause"===t){var r="",i=!0,a=!1,u=void 0;try{for(var o,s=e.body[Symbol.iterator]();!(i=(o=s.next()).done);i=!0){var c=o.value;r+=this.evalNode(c,n)}}catch(f){a=!0,u=f}finally{try{!i&&s["return"]&&s["return"]()}finally{if(a)throw u}}return r}if("NamedReference"===t)return n[e.reference];if("BooleanExpression"===t)return this.evalBoolExpr(e,n);if("ConditionalStatement"===t)return this.evalNode(e.test,n)?this.evalNode(e.consequent,n):this.evalNode(e.alternate,n);if("Predicate"===t){var l=!0,d=!1,p=void 0;try{for(var h,m=e.body[Symbol.iterator]();!(l=(h=m.next()).done);l=!0){var c=h.value;if(!this.evalNode(c,n))return!1}}catch(f){d=!0,p=f}finally{try{!l&&m["return"]&&m["return"]()}finally{if(d)throw p}}return!0}}},f=function(){function e(){if(r(this,e),a.isString(arguments[0]))this.templateAST=u.parse(arguments[0]);else{if(!a.isObject(arguments[0]))throw new Error("Invalid arguments for Format!");this.templateAST=arguments[0]}this.raw="",this.regex="",this.references=[],this.init()}return i(e,[{key:"format",value:function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];return c.evalNode(this.templateAST,e)}},{key:"init",value:function(){var n=this.templateAST,t="",r=[],i=!0,a=!1,u=void 0;try{for(var s,f=n.body[Symbol.iterator]();!(i=(s=f.next()).done);i=!0){var l=s.value;if("StringLiteral"===l.type||"IntegerLiteral"===l.type)t+=c.escapeRegexChars(l.value.toString());else if("NamedReference"===l.type)t+="("+o.number.source+")",r.push(l.reference);else if("ConditionalStatement"===l.type){var d=e.create(l.consequent),p=e.create(l.alternate),h=d.raw,m=p.raw;t+="(?:"+h+"|"+(m.length>0?m:"")+")",r=r.concat(d.references).concat(p.references)}else if("TemplateBlock"===l.type){var v=e.create(l);t+=v.raw,r=r.concat(v.references)}}}catch(g){a=!0,u=g}finally{try{!i&&f["return"]&&f["return"]()}finally{if(a)throw u}}this.regex=new RegExp(t+"$"),this.raw=t,this.references=r}},{key:"unformat",value:function(e){var n=e.match(this.regex),t={};if(null!==n)for(var r=0;r<this.references.length;r++){var i=n[r+1];o.number.test(i)&&(i=Number(i)),a.isUndefined(i)||(t[this.references[r]]=i)}return console.log(this),console.log(n),console.log(t),t}}],[{key:"create",value:function(){return new e(arguments[0])}},{key:"define",value:function(n,t){a.isObject(t)&&t.constructor===e?s[n]=t:s[n]=new e(t)}},{key:"getFormat",value:function(e){return s.hasOwnProperty(e)?s[e]:void 0}}]),e}();n.exports=f},{"./timeparser.js":3,underscore:6}],3:[function(e,n,t){"use strict";var r=e("underscore"),i=(e("./timeunits.js"),e("./timetokenizer.js")),a={parseToken:function(e){return"Number"===e.type?{type:"IntegerLiteral",value:e.value}:"String"===e.type?{type:"StringLiteral",value:e.value}:"Identifier"===e.type?{type:"NamedReference",reference:e.name}:void 0},parseKeyword:function(e,n,t){if("IF"===e.keyword){var r={type:"ConditionalStatement",test:{type:"Predicate",body:[]},consequent:{type:"ThenClause",body:[]},alternate:{type:"ElseClause",body:[]}};this.parseTokens(n,r.test,function(e,n){return"CodeClose"===e.type||"Keyword"===e.type&&"THEN"===e.keyword}),this.parseTokens(n,r.consequent,function(e){return"CodeClose"===e.type||"Keyword"===e.type&&"ELSE"===e.keyword}),this.parseTokens(n,r.alternate,function(e){return"CodeClose"===e.type}),t.body.push(r)}},parseComparator:function(e,n,t){var r=t.body.pop(),i=n.shift();if(!r||-1===["StringLiteral","IntegerLiteral","NamedReference","BooleanExpression"].indexOf(r.type))return new Error("Invalid left side for boolean expression");if(!i||-1===["Number","String","Identifier"].indexOf(i.type))return new Error("Unexpected end to boolean expression");var a={type:"BooleanExpression",left:r,right:this.parseToken(i),operator:e.operator};t.body.push(a)},parseBlock:function(e,n,t){var r={type:"TemplateBlock",body:[]};this.parseTokens(n,r,function(e){return"CodeClose"===e.type}),t.body.push(r)},parseTokens:function(e){for(var n=arguments.length<=1||void 0===arguments[1]?{type:"Template",body:[]}:arguments[1],t=arguments.length<=2||void 0===arguments[2]?function(){return!1}:arguments[2];e.length>0&&!t(e[0],e,n);){var r=e.shift();"Comparator"===r.type?this.parseComparator(r,e,n):"CodeOpen"===r.type?this.parseBlock(r,e,n):"Keyword"===r.type?this.parseKeyword(r,e,n):"CodeClose"!==r.type&&n.body.push(this.parseToken(r))}return n}},u={parse:function(e){if(!r.isString(e)&&!r.isArray(e))return new Error("Invalid argument supplied to timeparser.parse");var n=e;r.isArray(n)||(n=i.tokenize(e));var t=a.parseTokens(n);return t}};Object.freeze&&Object.freeze(u),n.exports=u},{"./timetokenizer.js":4,"./timeunits.js":5,underscore:6}],4:[function(e,n,t){"use strict";var r=e("underscore"),i=["IF","THEN","ELSE"],a={time:"",ind:0,tokens:[]},u={reset:function(){a.ind=0,a.tokens=[]},end:function(){return a.ind>=a.time.length},isCodeBegin:function(e){return 123===e},isCodeEnd:function(e){return 125===e},isIgnore:function(e){return 37===e},isStringToggle:function(e){return 39===e||34===e},isComparatorStart:function(e){return e>=60&&62>=e||33===e},isNumberStart:function(e){return this.isDecDigit(e)||this.isSign(e)||46===e},isIdentifierStart:function(e){return e>=97&&122>=e||e>=65&&90>=e},isIdentifierPart:function(e){return this.isIdentifierStart(e)||this.isDecDigit(e)},isComparatorEnd:function(e){return 61===e},isWhitespace:function(e){return 32===e||9===e||11===e||12===e||160===e||e>=5760&&[5760,6158,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8239,8287,12288,65279].indexOf(e)>=0},isDecDigit:function(e){return e>=48&&57>=e},isSign:function(e){return 43===e||45===e},parseString:function(){var e=a.time[a.ind],n="",t=a.ind;for(++a.ind;!this.end();){var r=a.time.charCodeAt(a.ind);if(this.isStringToggle(r)){e+=a.time[a.ind++];break}this.isIgnore(r)&&(e+=a.time[a.ind++]),e+=a.time[a.ind],n+=a.time[a.ind],++a.ind}return{type:"String",start:t,end:a.ind,raw:e,value:n}},parseComparator:function(){var e=a.time[a.ind],n=a.ind;return"<"!==e&&">"!==e&&"!"!==e||!this.isComparatorEnd(a.time.charCodeAt(a.ind+1))||(++a.ind,e+=a.time[a.ind]),a.ind++,{type:"Comparator",start:n,end:a.ind,raw:e,operator:e}},parseNumber:function(){if("0"===a.time[a.ind]){var e=a.time[a.ind+1];if("x"===e||"X"===e)return this.parseSpecNum("0"+e,["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]);if("o"===e||"O"===e)return this.parseSpecNum("0"+e,["0","1","2","3","4","5","6","7"]);if("b"===e||"B"===e)return this.parseSpecNum("0"+e,["0","1"])}return this.parseDecNum()},parseIdentifier:function(){for(var e="",n="",t=a.ind;!this.end();){var r=a.time.charCodeAt(a.ind);if(!this.isIdentifierPart(r))break;e+=a.time[a.ind],n+=a.time[a.ind],++a.ind}var u=i.indexOf(n.toUpperCase());return-1!==u?{type:"Keyword",start:t,end:a.ind,raw:e,keyword:i[u]}:{type:"Identifier",start:t,end:a.ind,raw:e,name:n}},parseDecStart:function(){for(var e="";!this.end()&&this.isDecDigit(a.time.charCodeAt(a.ind))&&"."!==a.time[a.ind];)e+=a.time[a.ind++];return e},parseDecEnd:function(){for(var e="";!this.end()&&(this.isDecDigit(a.time.charCodeAt(a.ind))||"."===a.time[a.ind]);)e+=a.time[a.ind],++a.ind;var n=a.time.charCodeAt(a.ind+1);return["e","E"].indexOf(a.time[a.ind])>=0&&(this.isSign(n)||this.isDecDigit(n))&&(e+=a.time[a.ind++],e+=a.time[a.ind++],e+=this.parseDecStart()),e||(e=""),e},parseDecNum:function(){var e=a.ind,n=this.parseDecStart()+this.parseDecEnd();return{base:10,type:"Number",raw:n,value:Number(n),start:e,end:a.ind}},parseSpecNum:function(e,n){var t=a.ind,r=e;for(a.ind+=r.length;!this.end();){var i=a.time[a.ind];if(!(n.indexOf(i.toLowerCase())>=0))break;r+=i,++a.ind}return{base:n.length,type:"Number",raw:r,value:Number(r),start:t,end:a.ind}},parseCode:function(){for(var e=!1;!this.end()&&!e;){var n=a.time.charCodeAt(a.ind);this.isCodeBegin(n)?(a.tokens.push({type:"CodeOpen",start:a.ind,end:a.ind+1,raw:a.time[a.ind]}),++a.ind):this.isStringToggle(n)?a.tokens.push(this.parseString()):this.isComparatorStart(n)?a.tokens.push(this.parseComparator()):this.isNumberStart(n)?a.tokens.push(this.parseNumber()):this.isIdentifierStart(n)?a.tokens.push(this.parseIdentifier()):this.isCodeEnd(n)?(a.tokens.push({type:"CodeClose",start:a.ind,end:a.ind+1,raw:a.time[a.ind]}),++a.ind,e=!0):(a.tokens[a.tokens.length-1].raw+=a.time[a.ind],a.tokens[a.tokens.length-1].end+=1,++a.ind,!this.isWhitespace(n))}},parseDefault:function(){for(var e="",n="",t=a.ind;!this.end();){var r=a.time.charCodeAt(a.ind);if(this.isIgnore(r))e+=a.time[a.ind],++a.ind;else if(this.isCodeBegin(r))break;e+=a.time[a.ind],n+=a.time[a.ind],++a.ind}a.tokens.push({type:"String",start:t,end:a.ind,raw:e,value:n})},tokenize:function(e){if(!r.isString(e))return new Error("Invalid first argument. Must be of type 'string'");this.reset(),a.time=e;for(var n=a.tokens;!this.end();){var t=a.time.charCodeAt(a.ind);this.isCodeBegin(t)?this.parseCode():this.parseDefault()}return n}};Object.freeze&&Object.freeze(u),n.exports=u},{underscore:6}],5:[function(e,n,t){"use strict";function r(){}function i(e){return function(){return o[e]}}function a(e,n){n=n.filter(function(e){return u.isString(e)&&!o[e]&&!e.match(/^[0-9]/)});var t=i(e),a=!0,c=!1,f=void 0;try{for(var l,d=n[Symbol.iterator]();!(a=(l=d.next()).done);a=!0){var p=l.value;s.push(p),Object.defineProperty(o,p,{get:t,set:r})}}catch(h){c=!0,f=h}finally{try{!a&&d["return"]&&d["return"]()}finally{if(c)throw f}}}var u=e("underscore"),o={millisecond:{name:"millisecond",scale:1,millis:1,base:null}},s=["millisecond"],c={all:function(){return JSON.parse(JSON.stringify(s))},convert:function(e,n,t){if(!o.hasOwnProperty(n)||!o.hasOwnProperty(t))throw new Error("Time unit does not exist");for(n=o[n],t=o[t];null!==n.base;)e*=n.scale,n=o[n.base];for(var r=1;null!==t.base;)r*=t.scale,t=o[t.base];return e/r},define:function(e){if(!u.isObject(e))return new Error("First argument to timeunits.define must be an object");var n=e.base,t=void 0===n?"millisecond":n,r=e.name,i=e.scale;return o.hasOwnProperty(t)&&u.isNumber(i)&&!u.isNaN(i)&&u.isString(r)&&!o.hasOwnProperty(r)?(o[r]={name:r,base:t,millis:o[t].millis*i,scale:i},s.push(r),u.isArray(e.aliases)||(e.aliases=[]),e.aliases.push(e.alias),void a(r,e.aliases)):new Error("Invalid data supplied")},exists:function(e){return-1!==s.indexOf(e)},trashUnit:function(e){if("millisecond"!==e&&-1!==s.indexOf(e)){try{delete o[e]}catch(n){console.error(n)}s.splice(s.indexOf(e),1)}},unit:function(e){return u.isString(e)&&o[e]?JSON.parse(JSON.stringify(o[e])):new Error("")},update:function(e){if(!u.isObject(e))return new Error("The first argument to timeunits.addAlias must be an object");var n=e.name;if(!this.exists(n))return new Error("Unit does not exist");var t=e.base,r=void 0===t?o[n].base:t,i=e.scale,s=void 0===i?o[n].scale:i,c=e.alias,f=e.aliases,l=this.exists(r);l&&(o[n].base=r,o[n].millis=o[n].scale*o[r].millis),u.isNumber(s)&&!u.isNaN(s)&&(o[n].scale=s,l&&(o[n].millis=o[n].scale*o[o[n].base].millis)),u.isArray(f)||(f=[]),f.push(c),a(n,f)}};Object.freeze&&Object.freeze(c),n.exports=c},{underscore:6}],6:[function(e,n,t){(function(){function e(e){function n(n,t,r,i,a,u){for(;a>=0&&u>a;a+=e){var o=i?i[a]:a;r=t(r,n[o],o,n)}return r}return function(t,r,i,a){r=x(r,a,4);var u=!E(t)&&w.keys(t),o=(u||t).length,s=e>0?0:o-1;return arguments.length<3&&(i=t[u?u[s]:s],s+=e),n(t,r,i,u,s,o)}}function r(e){return function(n,t,r){t=S(t,r);for(var i=C(n),a=e>0?0:i-1;a>=0&&i>a;a+=e)if(t(n[a],a,n))return a;return-1}}function i(e,n,t){return function(r,i,a){var u=0,o=C(r);if("number"==typeof a)e>0?u=a>=0?a:Math.max(a+o,u):o=a>=0?Math.min(a+1,o):a+o+1;else if(t&&a&&o)return a=t(r,i),r[a]===i?a:-1;if(i!==i)return a=n(d.call(r,u,o),w.isNaN),a>=0?a+u:-1;for(a=e>0?u:o-1;a>=0&&o>a;a+=e)if(r[a]===i)return a;return-1}}function a(e,n){var t=D.length,r=e.constructor,i=w.isFunction(r)&&r.prototype||c,a="constructor";for(w.has(e,a)&&!w.contains(n,a)&&n.push(a);t--;)a=D[t],a in e&&e[a]!==i[a]&&!w.contains(n,a)&&n.push(a)}var u=this,o=u._,s=Array.prototype,c=Object.prototype,f=Function.prototype,l=s.push,d=s.slice,p=c.toString,h=c.hasOwnProperty,m=Array.isArray,v=Object.keys,g=f.bind,y=Object.create,b=function(){},w=function(e){return e instanceof w?e:this instanceof w?void(this._wrapped=e):new w(e)};"undefined"!=typeof t?("undefined"!=typeof n&&n.exports&&(t=n.exports=w),t._=w):u._=w,w.VERSION="1.8.3";var x=function(e,n,t){if(void 0===n)return e;switch(null==t?3:t){case 1:return function(t){return e.call(n,t)};case 2:return function(t,r){return e.call(n,t,r)};case 3:return function(t,r,i){return e.call(n,t,r,i)};case 4:return function(t,r,i,a){return e.call(n,t,r,i,a)}}return function(){return e.apply(n,arguments)}},S=function(e,n,t){return null==e?w.identity:w.isFunction(e)?x(e,n,t):w.isObject(e)?w.matcher(e):w.property(e)};w.iteratee=function(e,n){return S(e,n,1/0)};var k=function(e,n){return function(t){var r=arguments.length;if(2>r||null==t)return t;for(var i=1;r>i;i++)for(var a=arguments[i],u=e(a),o=u.length,s=0;o>s;s++){var c=u[s];n&&void 0!==t[c]||(t[c]=a[c])}return t}},O=function(e){if(!w.isObject(e))return{};if(y)return y(e);b.prototype=e;var n=new b;return b.prototype=null,n},j=function(e){return function(n){return null==n?void 0:n[e]}},N=Math.pow(2,53)-1,C=j("length"),E=function(e){var n=C(e);return"number"==typeof n&&n>=0&&N>=n};w.each=w.forEach=function(e,n,t){n=x(n,t);var r,i;if(E(e))for(r=0,i=e.length;i>r;r++)n(e[r],r,e);else{var a=w.keys(e);for(r=0,i=a.length;i>r;r++)n(e[a[r]],a[r],e)}return e},w.map=w.collect=function(e,n,t){n=S(n,t);for(var r=!E(e)&&w.keys(e),i=(r||e).length,a=Array(i),u=0;i>u;u++){var o=r?r[u]:u;a[u]=n(e[o],o,e)}return a},w.reduce=w.foldl=w.inject=e(1),w.reduceRight=w.foldr=e(-1),w.find=w.detect=function(e,n,t){var r;return r=E(e)?w.findIndex(e,n,t):w.findKey(e,n,t),void 0!==r&&-1!==r?e[r]:void 0},w.filter=w.select=function(e,n,t){var r=[];return n=S(n,t),w.each(e,function(e,t,i){n(e,t,i)&&r.push(e)}),r},w.reject=function(e,n,t){return w.filter(e,w.negate(S(n)),t)},w.every=w.all=function(e,n,t){n=S(n,t);for(var r=!E(e)&&w.keys(e),i=(r||e).length,a=0;i>a;a++){var u=r?r[a]:a;if(!n(e[u],u,e))return!1}return!0},w.some=w.any=function(e,n,t){n=S(n,t);for(var r=!E(e)&&w.keys(e),i=(r||e).length,a=0;i>a;a++){var u=r?r[a]:a;if(n(e[u],u,e))return!0}return!1},w.contains=w.includes=w.include=function(e,n,t,r){return E(e)||(e=w.values(e)),("number"!=typeof t||r)&&(t=0),w.indexOf(e,n,t)>=0},w.invoke=function(e,n){var t=d.call(arguments,2),r=w.isFunction(n);return w.map(e,function(e){var i=r?n:e[n];return null==i?i:i.apply(e,t)})},w.pluck=function(e,n){return w.map(e,w.property(n))},w.where=function(e,n){return w.filter(e,w.matcher(n))},w.findWhere=function(e,n){return w.find(e,w.matcher(n))},w.max=function(e,n,t){var r,i,a=-(1/0),u=-(1/0);if(null==n&&null!=e){e=E(e)?e:w.values(e);for(var o=0,s=e.length;s>o;o++)r=e[o],r>a&&(a=r)}else n=S(n,t),w.each(e,function(e,t,r){i=n(e,t,r),(i>u||i===-(1/0)&&a===-(1/0))&&(a=e,u=i)});return a},w.min=function(e,n,t){var r,i,a=1/0,u=1/0;if(null==n&&null!=e){e=E(e)?e:w.values(e);for(var o=0,s=e.length;s>o;o++)r=e[o],a>r&&(a=r)}else n=S(n,t),w.each(e,function(e,t,r){i=n(e,t,r),(u>i||i===1/0&&a===1/0)&&(a=e,u=i)});return a},w.shuffle=function(e){for(var n,t=E(e)?e:w.values(e),r=t.length,i=Array(r),a=0;r>a;a++)n=w.random(0,a),n!==a&&(i[a]=i[n]),i[n]=t[a];return i},w.sample=function(e,n,t){return null==n||t?(E(e)||(e=w.values(e)),e[w.random(e.length-1)]):w.shuffle(e).slice(0,Math.max(0,n))},w.sortBy=function(e,n,t){return n=S(n,t),w.pluck(w.map(e,function(e,t,r){return{value:e,index:t,criteria:n(e,t,r)}}).sort(function(e,n){var t=e.criteria,r=n.criteria;if(t!==r){if(t>r||void 0===t)return 1;if(r>t||void 0===r)return-1}return e.index-n.index}),"value")};var A=function(e){return function(n,t,r){var i={};return t=S(t,r),w.each(n,function(r,a){var u=t(r,a,n);e(i,r,u)}),i}};w.groupBy=A(function(e,n,t){w.has(e,t)?e[t].push(n):e[t]=[n]}),w.indexBy=A(function(e,n,t){e[t]=n}),w.countBy=A(function(e,n,t){w.has(e,t)?e[t]++:e[t]=1}),w.toArray=function(e){return e?w.isArray(e)?d.call(e):E(e)?w.map(e,w.identity):w.values(e):[]},w.size=function(e){return null==e?0:E(e)?e.length:w.keys(e).length},w.partition=function(e,n,t){n=S(n,t);var r=[],i=[];return w.each(e,function(e,t,a){(n(e,t,a)?r:i).push(e)}),[r,i]},w.first=w.head=w.take=function(e,n,t){return null!=e?null==n||t?e[0]:w.initial(e,e.length-n):void 0},w.initial=function(e,n,t){return d.call(e,0,Math.max(0,e.length-(null==n||t?1:n)))},w.last=function(e,n,t){return null!=e?null==n||t?e[e.length-1]:w.rest(e,Math.max(0,e.length-n)):void 0},w.rest=w.tail=w.drop=function(e,n,t){return d.call(e,null==n||t?1:n)},w.compact=function(e){return w.filter(e,w.identity)};var T=function(e,n,t,r){for(var i=[],a=0,u=r||0,o=C(e);o>u;u++){var s=e[u];if(E(s)&&(w.isArray(s)||w.isArguments(s))){n||(s=T(s,n,t));var c=0,f=s.length;for(i.length+=f;f>c;)i[a++]=s[c++]}else t||(i[a++]=s)}return i};w.flatten=function(e,n){return T(e,n,!1)},w.without=function(e){return w.difference(e,d.call(arguments,1))},w.uniq=w.unique=function(e,n,t,r){w.isBoolean(n)||(r=t,t=n,n=!1),null!=t&&(t=S(t,r));for(var i=[],a=[],u=0,o=C(e);o>u;u++){var s=e[u],c=t?t(s,u,e):s;n?(u&&a===c||i.push(s),a=c):t?w.contains(a,c)||(a.push(c),i.push(s)):w.contains(i,s)||i.push(s)}return i},w.union=function(){return w.uniq(T(arguments,!0,!0))},w.intersection=function(e){for(var n=[],t=arguments.length,r=0,i=C(e);i>r;r++){var a=e[r];if(!w.contains(n,a)){for(var u=1;t>u&&w.contains(arguments[u],a);u++);u===t&&n.push(a)}}return n},w.difference=function(e){var n=T(arguments,!0,!0,1);return w.filter(e,function(e){return!w.contains(n,e)})},w.zip=function(){return w.unzip(arguments)},w.unzip=function(e){for(var n=e&&w.max(e,C).length||0,t=Array(n),r=0;n>r;r++)t[r]=w.pluck(e,r);return t},w.object=function(e,n){for(var t={},r=0,i=C(e);i>r;r++)n?t[e[r]]=n[r]:t[e[r][0]]=e[r][1];return t},w.findIndex=r(1),w.findLastIndex=r(-1),w.sortedIndex=function(e,n,t,r){t=S(t,r,1);for(var i=t(n),a=0,u=C(e);u>a;){var o=Math.floor((a+u)/2);t(e[o])<i?a=o+1:u=o}return a},w.indexOf=i(1,w.findIndex,w.sortedIndex),w.lastIndexOf=i(-1,w.findLastIndex),w.range=function(e,n,t){null==n&&(n=e||0,e=0),t=t||1;for(var r=Math.max(Math.ceil((n-e)/t),0),i=Array(r),a=0;r>a;a++,e+=t)i[a]=e;return i};var _=function(e,n,t,r,i){if(!(r instanceof n))return e.apply(t,i);var a=O(e.prototype),u=e.apply(a,i);return w.isObject(u)?u:a};w.bind=function(e,n){if(g&&e.bind===g)return g.apply(e,d.call(arguments,1));if(!w.isFunction(e))throw new TypeError("Bind must be called on a function");var t=d.call(arguments,2),r=function(){return _(e,r,n,this,t.concat(d.call(arguments)))};return r},w.partial=function(e){var n=d.call(arguments,1),t=function(){for(var r=0,i=n.length,a=Array(i),u=0;i>u;u++)a[u]=n[u]===w?arguments[r++]:n[u];for(;r<arguments.length;)a.push(arguments[r++]);return _(e,t,this,this,a)};return t},w.bindAll=function(e){var n,t,r=arguments.length;if(1>=r)throw new Error("bindAll must be passed function names");for(n=1;r>n;n++)t=arguments[n],e[t]=w.bind(e[t],e);return e},w.memoize=function(e,n){var t=function(r){var i=t.cache,a=""+(n?n.apply(this,arguments):r);return w.has(i,a)||(i[a]=e.apply(this,arguments)),i[a]};return t.cache={},t},w.delay=function(e,n){var t=d.call(arguments,2);return setTimeout(function(){return e.apply(null,t)},n)},w.defer=w.partial(w.delay,w,1),w.throttle=function(e,n,t){var r,i,a,u=null,o=0;t||(t={});var s=function(){o=t.leading===!1?0:w.now(),u=null,a=e.apply(r,i),u||(r=i=null)};return function(){var c=w.now();o||t.leading!==!1||(o=c);var f=n-(c-o);return r=this,i=arguments,0>=f||f>n?(u&&(clearTimeout(u),u=null),o=c,a=e.apply(r,i),u||(r=i=null)):u||t.trailing===!1||(u=setTimeout(s,f)),a}},w.debounce=function(e,n,t){var r,i,a,u,o,s=function(){var c=w.now()-u;n>c&&c>=0?r=setTimeout(s,n-c):(r=null,t||(o=e.apply(a,i),r||(a=i=null)))};return function(){a=this,i=arguments,u=w.now();var c=t&&!r;return r||(r=setTimeout(s,n)),c&&(o=e.apply(a,i),a=i=null),o}},w.wrap=function(e,n){return w.partial(n,e)},w.negate=function(e){return function(){return!e.apply(this,arguments)}},w.compose=function(){var e=arguments,n=e.length-1;return function(){for(var t=n,r=e[n].apply(this,arguments);t--;)r=e[t].call(this,r);return r}},w.after=function(e,n){return function(){return--e<1?n.apply(this,arguments):void 0}},w.before=function(e,n){var t;return function(){return--e>0&&(t=n.apply(this,arguments)),1>=e&&(n=null),t}},w.once=w.partial(w.before,2);var I=!{toString:null}.propertyIsEnumerable("toString"),D=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];w.keys=function(e){if(!w.isObject(e))return[];if(v)return v(e);var n=[];for(var t in e)w.has(e,t)&&n.push(t);return I&&a(e,n),n},w.allKeys=function(e){if(!w.isObject(e))return[];var n=[];for(var t in e)n.push(t);return I&&a(e,n),n},w.values=function(e){for(var n=w.keys(e),t=n.length,r=Array(t),i=0;t>i;i++)r[i]=e[n[i]];return r},w.mapObject=function(e,n,t){n=S(n,t);for(var r,i=w.keys(e),a=i.length,u={},o=0;a>o;o++)r=i[o],u[r]=n(e[r],r,e);return u},w.pairs=function(e){for(var n=w.keys(e),t=n.length,r=Array(t),i=0;t>i;i++)r[i]=[n[i],e[n[i]]];return r},w.invert=function(e){for(var n={},t=w.keys(e),r=0,i=t.length;i>r;r++)n[e[t[r]]]=t[r];return n},w.functions=w.methods=function(e){var n=[];for(var t in e)w.isFunction(e[t])&&n.push(t);return n.sort()},w.extend=k(w.allKeys),w.extendOwn=w.assign=k(w.keys),w.findKey=function(e,n,t){n=S(n,t);for(var r,i=w.keys(e),a=0,u=i.length;u>a;a++)if(r=i[a],n(e[r],r,e))return r},w.pick=function(e,n,t){var r,i,a={},u=e;if(null==u)return a;w.isFunction(n)?(i=w.allKeys(u),r=x(n,t)):(i=T(arguments,!1,!1,1),r=function(e,n,t){return n in t},u=Object(u));for(var o=0,s=i.length;s>o;o++){var c=i[o],f=u[c];r(f,c,u)&&(a[c]=f)}return a},w.omit=function(e,n,t){if(w.isFunction(n))n=w.negate(n);else{var r=w.map(T(arguments,!1,!1,1),String);n=function(e,n){return!w.contains(r,n)}}return w.pick(e,n,t)},w.defaults=k(w.allKeys,!0),w.create=function(e,n){var t=O(e);return n&&w.extendOwn(t,n),t},w.clone=function(e){return w.isObject(e)?w.isArray(e)?e.slice():w.extend({},e):e},w.tap=function(e,n){return n(e),e},w.isMatch=function(e,n){var t=w.keys(n),r=t.length;if(null==e)return!r;for(var i=Object(e),a=0;r>a;a++){var u=t[a];if(n[u]!==i[u]||!(u in i))return!1}return!0};var F=function(e,n,t,r){if(e===n)return 0!==e||1/e===1/n;if(null==e||null==n)return e===n;e instanceof w&&(e=e._wrapped),n instanceof w&&(n=n._wrapped);var i=p.call(e);if(i!==p.call(n))return!1;switch(i){case"[object RegExp]":case"[object String]":return""+e==""+n;case"[object Number]":return+e!==+e?+n!==+n:0===+e?1/+e===1/n:+e===+n;case"[object Date]":case"[object Boolean]":return+e===+n}var a="[object Array]"===i;if(!a){if("object"!=typeof e||"object"!=typeof n)return!1;var u=e.constructor,o=n.constructor;if(u!==o&&!(w.isFunction(u)&&u instanceof u&&w.isFunction(o)&&o instanceof o)&&"constructor"in e&&"constructor"in n)return!1}t=t||[],r=r||[];for(var s=t.length;s--;)if(t[s]===e)return r[s]===n;if(t.push(e),r.push(n),a){if(s=e.length,s!==n.length)return!1;for(;s--;)if(!F(e[s],n[s],t,r))return!1}else{var c,f=w.keys(e);if(s=f.length,w.keys(n).length!==s)return!1;for(;s--;)if(c=f[s],!w.has(n,c)||!F(e[c],n[c],t,r))return!1}return t.pop(),r.pop(),!0};w.isEqual=function(e,n){return F(e,n)},w.isEmpty=function(e){return null==e?!0:E(e)&&(w.isArray(e)||w.isString(e)||w.isArguments(e))?0===e.length:0===w.keys(e).length},w.isElement=function(e){return!(!e||1!==e.nodeType)},w.isArray=m||function(e){return"[object Array]"===p.call(e)},w.isObject=function(e){var n=typeof e;return"function"===n||"object"===n&&!!e},w.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(e){w["is"+e]=function(n){return p.call(n)==="[object "+e+"]"}}),w.isArguments(arguments)||(w.isArguments=function(e){return w.has(e,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(w.isFunction=function(e){return"function"==typeof e||!1}),w.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},w.isNaN=function(e){return w.isNumber(e)&&e!==+e},w.isBoolean=function(e){return e===!0||e===!1||"[object Boolean]"===p.call(e)},w.isNull=function(e){return null===e},w.isUndefined=function(e){return void 0===e},w.has=function(e,n){return null!=e&&h.call(e,n)},w.noConflict=function(){return u._=o,this},w.identity=function(e){return e},w.constant=function(e){return function(){return e}},w.noop=function(){},w.property=j,w.propertyOf=function(e){return null==e?function(){}:function(n){return e[n]}},w.matcher=w.matches=function(e){return e=w.extendOwn({},e),function(n){return w.isMatch(n,e)}},w.times=function(e,n,t){var r=Array(Math.max(0,e));n=x(n,t,1);for(var i=0;e>i;i++)r[i]=n(i);return r},w.random=function(e,n){return null==n&&(n=e,e=0),e+Math.floor(Math.random()*(n-e+1))},w.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},M=w.invert(B),z=function(e){var n=function(n){return e[n]},t="(?:"+w.keys(e).join("|")+")",r=RegExp(t),i=RegExp(t,"g");return function(e){return e=null==e?"":""+e,r.test(e)?e.replace(i,n):e}};w.escape=z(B),w.unescape=z(M),w.result=function(e,n,t){var r=null==e?void 0:e[n];return void 0===r&&(r=t),w.isFunction(r)?r.call(e):r};var L=0;w.uniqueId=function(e){var n=++L+"";return e?e+n:n},w.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var P=/(.)^/,q={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},R=/\\|'|\r|\n|\u2028|\u2029/g,$=function(e){return"\\"+q[e]};w.template=function(e,n,t){!n&&t&&(n=t),n=w.defaults({},n,w.templateSettings);var r=RegExp([(n.escape||P).source,(n.interpolate||P).source,(n.evaluate||P).source].join("|")+"|$","g"),i=0,a="__p+='";e.replace(r,function(n,t,r,u,o){return a+=e.slice(i,o).replace(R,$),i=o+n.length,t?a+="'+\n((__t=("+t+"))==null?'':_.escape(__t))+\n'":r?a+="'+\n((__t=("+r+"))==null?'':__t)+\n'":u&&(a+="';\n"+u+"\n__p+='"),n}),a+="';\n",n.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{var u=new Function(n.variable||"obj","_",a)}catch(o){throw o.source=a,o}var s=function(e){return u.call(this,e,w)},c=n.variable||"obj";return s.source="function("+c+"){\n"+a+"}",s},w.chain=function(e){var n=w(e);return n._chain=!0,n};var K=function(e,n){return e._chain?w(n).chain():n};w.mixin=function(e){w.each(w.functions(e),function(n){var t=w[n]=e[n];w.prototype[n]=function(){
var e=[this._wrapped];return l.apply(e,arguments),K(this,t.apply(w,e))}})},w.mixin(w),w.each(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var n=s[e];w.prototype[e]=function(){var t=this._wrapped;return n.apply(t,arguments),"shift"!==e&&"splice"!==e||0!==t.length||delete t[0],K(this,t)}}),w.each(["concat","join","slice"],function(e){var n=s[e];w.prototype[e]=function(){return K(this,n.apply(this._wrapped,arguments))}}),w.prototype.value=function(){return this._wrapped},w.prototype.valueOf=w.prototype.toJSON=w.prototype.value,w.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return w})}).call(this)},{}]},{},[1]);