!function(t){var e={};function r(n){if(e[n])return e[n].exports;var u=e[n]={i:n,l:!1,exports:{}};return t[n].call(u.exports,u,u.exports,r),u.l=!0,u.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var u in t)r.d(n,u,function(e){return t[e]}.bind(null,u));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";function n(t){return t.conversions/t.hits}function u(t,e){var r=n(e)-n(t),u=n(e)*(1-n(e))/e.hits+n(t)*(1-n(t))/t.hits;return r/Math.sqrt(u)}function o(t){var e=.31938153,r=-.356563782,n=1.781477937,u=-1.821255978,o=1.330274429,i=.2316419,c=.39894228;if(t>=0){let f=1/(1+i*t);return 1-c*Math.exp(-t*t/2)*f*(f*(f*(f*(f*o+u)+n)+r)+e)}{let f=1/(1-i*t);return c*Math.exp(-t*t/2)*f*(f*(f*(f*(f*o+u)+n)+r)+e)}}function i(t){for(var e=[],r=[.0625,.0225,.0025],n=r.length,u=0;u<n;u++)e.push(3.84145882689*(1-t)/(r[u]*t));return e}r.r(e),r.d(e,"cr",(function(){return n})),r.d(e,"calcZScore",(function(){return u})),r.d(e,"cumNorDist",(function(){return o})),r.d(e,"sampleSize",(function(){return i}))}]);