import{l as t}from"./vendor.d30754fc.js";self.addEventListener("message",(async a=>{const{imageData:e,config:s}=a.data,n=await(async(a,e)=>{const s=(t=>{const a={};for(let e=0;e<t.data.length;e+=4){const s=t.data[e],n=t.data[e+1],o=t.data[e+2],r=t.data[e+3];if(0===r)continue;const c=`${s},${n},${o},${r}`;a[c]?a[c].push(e):a[c]=[e]}return a})(a);let n="",o="",r="";for(const[c,d]of Object.entries(s)){const s=new ImageData(a.width,a.height);s.data.fill(255);const i=d.length;if(i<=e.turdsize)continue;for(let t=0;t<i;t++){const a=d[t];s.data[a]=0,s.data[a+1]=0,s.data[a+2]=0,s.data[a+3]=255}let l=await t(s.data,s.width,s.height,e);l=l.replace('fill="#000000"',`fill="rgba(${c})" stroke="rgba(${c})"`),n||(n=l.replace(/(.*?<svg[^>]+>)(.*?)(<\/svg>)/,"$1"),o=l.replace(/(.*?<svg[^>]+>)(.*?)(<\/svg>)/,"$3"),r=n),r+=l.replace(/(.*?<svg[^>]+>)(.*?)(<\/svg>)/,"$2")}return r+o})(e,s);a.ports[0].postMessage({result:n})}));
