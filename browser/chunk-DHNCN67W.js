import{a}from"./chunk-53HZMJ3F.js";import{l as n}from"./chunk-YR3GNGTJ.js";import{S as e,X as s}from"./chunk-PQFGVKFM.js";var f=(()=>{class r{http;url=a.apiUrl+"/api/asistencia";constructor(t){this.http=t}getAsistencias(t=""){let i={};return t&&(i.fecha=t),this.http.get(this.url,{params:i})}registrarAsistencia(t){return this.http.post(this.url,{id:t})}static \u0275fac=function(i){return new(i||r)(s(n))};static \u0275prov=e({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();export{f as a};
