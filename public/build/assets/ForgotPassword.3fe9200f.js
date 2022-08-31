import{u,o as r,e as m,b as s,g as t,w as o,F as c,H as _,t as f,f as p,a,n as w,m as g,i as b}from"./app.5c697fba.js";import{J as y}from"./AuthenticationCard.45c0fa3f.js";import{_ as h}from"./AuthenticationCardLogo.b5b99e2d.js";import{_ as x}from"./Button.57dba45b.js";import{_ as k,a as V}from"./InputError.3575a169.js";import{_ as v}from"./Label.8d6c5f6d.js";import"./_plugin-vue_export-helper.cdc0426e.js";const F=a("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),N={key:0,class:"mb-4 font-medium text-sm text-green-600"},$=["onSubmit"],C={class:"flex items-center justify-end mt-4"},S=b(" Email Password Reset Link "),A={__name:"ForgotPassword",props:{status:String},setup(i){const e=u({email:""}),n=()=>{e.post(route("password.email"))};return(B,l)=>(r(),m(c,null,[s(t(_),{title:"Forgot Password"}),s(y,null,{logo:o(()=>[s(h)]),default:o(()=>[F,i.status?(r(),m("div",N,f(i.status),1)):p("",!0),a("form",{onSubmit:g(n,["prevent"])},[a("div",null,[s(v,{for:"email",value:"Email"}),s(k,{id:"email",modelValue:t(e).email,"onUpdate:modelValue":l[0]||(l[0]=d=>t(e).email=d),type:"email",class:"mt-1 block w-full",required:"",autofocus:""},null,8,["modelValue"]),s(V,{class:"mt-2",message:t(e).errors.email},null,8,["message"])]),a("div",C,[s(x,{class:w({"opacity-25":t(e).processing}),disabled:t(e).processing},{default:o(()=>[S]),_:1},8,["class","disabled"])])],40,$)]),_:1})],64))}};export{A as default};
