"use strict";(()=>{var e={};e.id=450,e.ids=[450],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},2461:(e,t,a)=>{a.r(t),a.d(t,{headerHooks:()=>u,originalPathname:()=>p,requestAsyncStorage:()=>i,routeModule:()=>r,serverHooks:()=>_,staticGenerationAsyncStorage:()=>s,staticGenerationBailout:()=>d});var o={};a.r(o),a.d(o,{GET:()=>GET});var n=a(884),c=a(6132);async function GET(e,{params:t}){let a=await fetch(`https://mhadri-final-database-af023718fb18.herokuapp.com/teaching_mechanism_counts_by_code/${t.country_code}/`),o=await a.json();return Response.json({data:o})}let r=new n.AppRouteRouteModule({definition:{kind:c.x.APP_ROUTE,page:"/api/teaching_mechanism_counts_by_code/[country_code]/route",pathname:"/api/teaching_mechanism_counts_by_code/[country_code]",filename:"route",bundlePath:"app/api/teaching_mechanism_counts_by_code/[country_code]/route"},resolvedPagePath:"C:\\Users\\User\\Desktop\\mhadri-final-nextjs\\app\\api\\teaching_mechanism_counts_by_code\\[country_code]\\route.js",nextConfigOutput:"",userland:o}),{requestAsyncStorage:i,staticGenerationAsyncStorage:s,serverHooks:_,headerHooks:u,staticGenerationBailout:d}=r,p="/api/teaching_mechanism_counts_by_code/[country_code]/route"}};var t=require("../../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),a=t.X(0,[729],()=>__webpack_exec__(2461));module.exports=a})();