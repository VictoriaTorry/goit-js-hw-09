function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var i=o("7Y9D8");function u(t,n){return e(i).Notify.init({}),new Promise(((r,o)=>{const u=Math.random()>.3;setTimeout((()=>{u?e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`):e(i).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)}),n)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const t=new FormData(e.currentTarget);let n=Number(t.get("delay"));const r=Number(t.get("step")),o=Number(t.get("amount"));for(let e=0;e<o;e+=1)u(e,n),n+=r}));
//# sourceMappingURL=03-promises.21ac2557.js.map
