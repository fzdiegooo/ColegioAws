import{a}from"./chunk-6VLQCZNJ.js";import{l as s}from"./chunk-YR3GNGTJ.js";import{S as n,X as o}from"./chunk-PQFGVKFM.js";var m=(()=>{class e{httpClient;url=a.local+"/api/alumnos";constructor(t){this.httpClient=t}getAlumnos(t="",i=""){let r={};return t&&(r.grado=t),i&&(r.seccion=i),this.httpClient.get(this.url,{params:r})}getAlumnosById(t=""){return this.httpClient.get(`${this.url}/${t}`)}static \u0275fac=function(i){return new(i||e)(o(s))};static \u0275prov=n({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();export{m as a};
