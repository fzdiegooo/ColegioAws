import{a as x}from"./chunk-Z6OPTKIW.js";import{d as y}from"./chunk-SKDPH5QL.js";import{a as v,b as C,c as S,d as _,e as M,f as k,j as E,k as L}from"./chunk-JVU275UU.js";import"./chunk-6VLQCZNJ.js";import{h as b}from"./chunk-YR3GNGTJ.js";import{Ba as d,Ca as s,Va as e,Wa as t,Xa as m,Za as h,_ as f,cb as l,fb as u,gb as c,hb as g,jb as w}from"./chunk-PQFGVKFM.js";var D=(()=>{class a{authService;router;correo="";password="";constructor(n,i){this.authService=n,this.router=i}login(){this.authService.login(this.correo,this.password).subscribe({next:()=>this.router.navigate(["/dashboard"]),error:n=>console.error("login failed",n)})}static \u0275fac=function(i){return new(i||a)(s(x),s(y))};static \u0275cmp=f({type:a,selectors:[["app-login"]],standalone:!0,features:[w],decls:19,vars:2,consts:[[1,"flex","justify-start","h-screen","max-w-"],[1,"hidden","md:block","overflow-hidden"],[1,""],["src","https://st.depositphotos.com/1075946/1393/i/450/depositphotos_13937489-stock-photo-teacher-helping-young-boy-with.jpg","alt","",1,"h-screen","max-w-screen-xl","rounded-r-3xl"],[1,"flex","flex-col","justify-center","w-96","m-auto","items-center","p-6"],["href","#"],["src","Logo-colegio.png","alt","",1,"w-80","pb-4"],[1,"w-80","flex","flex-col"],[1,"mb-6"],["for","email",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["name","email","type","email","id","email","placeholder","john.doe@company.com","required","",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-red-500","focus:border-red-500","block","w-full","p-2.5",3,"ngModelChange","ngModel"],["for","password",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["name","password","type","password","id","password","placeholder","\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022","required","",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-red-500","focus:border-red-500","block","w-full","p-2.5",3,"ngModelChange","ngModel"],[1,"flex","justify-center"],["type","submit",1,"text-white","bg-red-800","hover:bg-red-900","focus:ring-4","focus:outline-none","focus:ring-blue-300","font-medium","rounded-lg","text-sm","w-full","sm:w-auto","px-5","py-2.5","text-center",3,"click"]],template:function(i,o){i&1&&(e(0,"div",0)(1,"div",1)(2,"div",2),m(3,"img",3),t()(),e(4,"div",4)(5,"a",5),m(6,"img",6),t(),e(7,"form",7)(8,"div",8)(9,"label",9),l(10,"Correo Electr\xF3nico"),t(),e(11,"input",10),g("ngModelChange",function(r){return c(o.correo,r)||(o.correo=r),r}),t()(),e(12,"div",8)(13,"label",11),l(14,"Contrase\xF1a"),t(),e(15,"input",12),g("ngModelChange",function(r){return c(o.password,r)||(o.password=r),r}),t()(),e(16,"div",13)(17,"button",14),h("click",function(){return o.login()}),l(18,"Ingresar"),t()()()()()),i&2&&(d(11),u("ngModel",o.correo),d(4),u("ngModel",o.password))},dependencies:[L,k,v,C,S,E,M,_,b]})}return a})();export{D as default};
