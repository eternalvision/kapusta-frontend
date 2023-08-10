"use strict";(self.webpackChunkfrontend_kapusta=self.webpackChunkfrontend_kapusta||[]).push([[143],{3338:function(e,n,t){t.d(n,{r8:function(){return f},hE:function(){return T},_u:function(){return S}});var a=t(8909),s=t(2791),c=t(5607),r="Logo_container__xT4eC",o="Logo_text__8lfDX",i=t(8206),l=t(184);function m(){return(0,l.jsxs)("div",{className:r,children:[(0,l.jsx)(c.Z,{queries:{small:"(max-width: 767px)",medium:"(min-width: 768px) and (max-width: 1279px)",large:"(min-width: 1280px)"},children:function(e){return(0,l.jsxs)(s.Fragment,{children:[e.small&&(0,l.jsx)(i.Z,{iconName:"logo-mobile"}),e.medium&&(0,l.jsx)(i.Z,{iconName:"logo-tablet"}),e.large&&(0,l.jsx)(i.Z,{iconName:"logo"})]})}}),(0,l.jsx)("p",{className:o,children:"SMART FINANCE"})]})}var u="BackgroundAuth_wrapper__NRDbq",d="BackgroundAuth_decorSection__FYBvq",_="BackgroundAuth_loginSection__tQwEq",h="BackgroundAuth_container_mobile__NwxzO",p="BackgroundAuth_decorImageTop__Q8AGF",x="BackgroundAuth_decorImageBottom__-8iLn",b="BackgroundAuth_inner__RqJOk",j="BackgroundAuth_bounce__iN-D5",f=function(e){var n=e.children;return(0,l.jsx)("div",{className:u,children:(0,l.jsxs)("div",{className:d,children:[(0,l.jsx)("div",{className:p}),(0,l.jsxs)(a.Z,{children:[(0,l.jsxs)("div",{className:b,children:[(0,l.jsx)("div",{className:h,children:(0,l.jsx)(m,{})}),(0,l.jsx)("div",{className:_,children:n})]}),(0,l.jsx)("div",{className:"".concat(j," ").concat(x)})]})]})})},g="BackgroundMobile_section__w9vlE",T=function(e){var n=e.children;return(0,l.jsx)("section",{className:g,children:n})},N="BackgroundReport_wrapper__DYLL1",v="BackgroundReport_decorSection__-cxhr",y="BackgroundReport_decorImageBottom__gLQ7X",S=function(e){var n=e.children;return(0,l.jsxs)("div",{className:N,children:[(0,l.jsx)("div",{className:v}),(0,l.jsx)(a.Z,{children:n}),(0,l.jsx)("div",{className:y})]})}},8685:function(e,n,t){t.d(n,{Z:function(){return h}});var a=t(885),s=t(2791),c=t(6030),r=t(6871),o={balance_form:"Balance_balance_form__bLBW1",balance_container:"Balance_balance_container__Z6J4+",balance_text:"Balance_balance_text__z-oYi",balance_input:"Balance_balance_input__QQjjc",balance_input_active:"Balance_balance_input_active__Hr5Mi",balance_input_report:"Balance_balance_input_report__Tcurf",balance_button:"Balance_balance_button__5gsk5",balance_button_active:"Balance_balance_button_active__Ctqus"},i="Notification_commentBubble__2KWlX",l="Notification_bubbleText__FBhZ8",m=t(184),u=function(e){var n=e.onClose;return(0,m.jsxs)("div",{className:i,onClick:function(e){e.currentTarget===e.target&&n()},children:["\u041f\u0440\u0438\u0432\u0435\u0442! \u0414\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0440\u0430\u0431\u043e\u0442\u044b \u0432\u043d\u0435\u0441\u0438 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0431\u0430\u043b\u0430\u043d\u0441 \u0441\u0432\u043e\u0435\u0433\u043e \u0441\u0447\u0435\u0442\u0430!",(0,m.jsx)("p",{className:l,children:"\u0422\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u0448\u044c \u0442\u0440\u0430\u0442\u0438\u0442\u044c \u0434\u0435\u043d\u044c\u0433\u0438 \u043f\u043e\u043a\u0430 \u0438\u0445 \u0443 \u0442\u0435\u0431\u044f \u043d\u0435\u0442 :)"})]})},d=t(2015),_=t(3553);function h(e){var n=e.style,t=e.hide,i=(0,c.I0)(),l=(0,r.TH)(),h=(0,c.v9)(d.um.n3),p=(0,s.useState)(h),x=(0,a.Z)(p,2),b=x[0],j=x[1],f=(0,c.v9)(_.V),g=(0,s.useState)(!0),T=(0,a.Z)(g,2),N=T[0],v=T[1];(0,s.useEffect)((function(){i(d.r5.getUserBalance()),j(h)}),[f,i]);return(0,m.jsxs)("form",{className:"".concat(o.balance_form," ").concat(n),children:[(0,m.jsx)("label",{className:o.balance_text,children:"\u0411\u0430\u043b\u0430\u043d\u0441:"}),(0,m.jsxs)("div",{className:o.balance_container,children:[(0,m.jsx)("input",{onChange:function(e){var n=e.target.value;j(Number(n))},placeholder:h?"".concat(h,".00 UAH"):"00.00 UAH",className:"".concat(0===h?o.balance_input_active:o.balance_input," ").concat("/report"===l.pathname&&o.balance_input_report),disabled:0!==h&&"disabled"}),0===h&&N&&(0,m.jsx)(u,{onClose:function(){v((function(e){return!e}))}}),(0,m.jsx)("button",{type:"submit",onClick:function(e){if(e.preventDefault(),!b||0===b)return console.log("\u0421\u0443\u043c\u043c\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u0430\u043b\u0430\u043d\u0441\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0443\u043b\u044f");i(d.r5.setUserBalance(b))},className:"".concat(0===h?o.balance_button_active:o.balance_button," ").concat(t),disabled:0!==h&&"disabled",children:"\u041f\u041e\u0414\u0422\u0412\u0415\u0420\u0414\u0418\u0422\u042c"})]})]})}},8909:function(e,n,t){t.d(n,{Z:function(){return c}});var a="Container_container__s6ZpQ",s=t(184);var c=function(e){var n=e.children;return(0,s.jsx)("div",{className:a,children:n})}},9049:function(e,n,t){t.r(n),t.d(n,{default:function(){return we}});var a=t(885),s=t(2791),c=t(6030),r=t(5607),o="CommonPage_tableSummaryWrapper__ukCj4",i="CommonPage_bigWrapper__ovx1-",l="CommonPage_balanceReportWrapper__ks1Vx",m="CommonPage_dateFormWrapper__i7pfs",u=function(e,n){var t=(0,s.useState)((function(){var t;return null!==(t=JSON.parse(window.localStorage.getItem(e)))&&void 0!==t?t:n})),c=(0,a.Z)(t,2),r=c[0],o=c[1];return(0,s.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(r))}),[e,r]),[r,o]},d=t(3553),_=t(5861),h=t(7757),p=t.n(h),x=t(4569),b=t.n(x),j=t(5649);b().defaults.baseURL="https://kapusta-backend-node-js.herokuapp.com/api/";var f={getTransactions:function(){return function(){var e=(0,_.Z)(p().mark((function e(n){var t,a;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(j.Z.getTransactionsRequest()),e.prev=1,e.next=4,b().get("/transaction");case 4:t=e.sent,a=t.data,n(j.Z.getTransactionsSuccess(a)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(j.Z.getTransactionsError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(n){return e.apply(this,arguments)}}()},addTransaction:function(e){return function(){var n=(0,_.Z)(p().mark((function n(t){var a,s;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(j.Z.addTransactionRequest()),n.prev=1,n.next=4,b().post("/transaction",e);case 4:a=n.sent,s=a.data,t(j.Z.addTransactionSuccess(s)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),t(j.Z.addTransactionError(n.t0.message));case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()},deleteTransaction:function(e){return function(){var n=(0,_.Z)(p().mark((function n(t){return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t(j.Z.deleteTransactionRequest());try{b().delete("/transaction/".concat(e._id)),t(j.Z.deleteTransactionSuccess(e._id))}catch(a){t(j.Z.deleteTransactionError(a.message))}case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}},g=f,T=t(8909),N=t(3504),v=t(8206),y="SwitchToReport_linkContainer__Eclzo",S="SwitchToReport_text__T4UMJ",I=t(184);function C(){return(0,I.jsx)("div",{children:(0,I.jsxs)(N.OL,{to:"/report",className:y,children:[(0,I.jsx)("p",{className:S,children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043e\u0442\u0447\u0435\u0442\u0430\u043c"}),(0,I.jsx)(v.Z,{iconName:"goToReport"})]})})}var w=t(8685),Z=t(3338),k=JSON.parse('["\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442","\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b","\u0417\u0434\u043e\u0440\u043e\u0432\u044c\u0435","\u0410\u043b\u043a\u043e\u0433\u043e\u043b\u044c","\u0420\u0430\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f","\u0412\u0441\u0451 \u0434\u043b\u044f \u0434\u043e\u043c\u0430","\u0422\u0435\u0445\u043d\u0438\u043a\u0430","\u041a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u043a\u0430, \u0441\u0432\u044f\u0437\u044c","\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435","\u0421\u043f\u043e\u0440\u0442, \u0445\u043e\u0431\u0431\u0438","\u041f\u0440\u043e\u0447\u0435\u0435"]'),F=JSON.parse('["\u0417\u0430\u0440\u0430\u0431\u043e\u0442\u043d\u0430\u044f \u043f\u043b\u0430\u0442\u0430","\u0414\u043e\u043f.\u0434\u043e\u0445\u043e\u0434"]'),B=t(1315),O=(t(209),{buttons:"IncomeOutcomeForm_buttons__tJ2Yu",form:"IncomeOutcomeForm_form__LJdXT",ul:"IncomeOutcomeForm_ul__EFhrb",nameLi:"IncomeOutcomeForm_nameLi__E+GJQ",dropdownLi:"IncomeOutcomeForm_dropdownLi__4ZLnE",nameField:"IncomeOutcomeForm_nameField__7l3G5",nameInput:"IncomeOutcomeForm_nameInput__xzmYU",categoryInput:"IncomeOutcomeForm_categoryInput__ii8NT",summInput:"IncomeOutcomeForm_summInput__QUtTC",numberField:"IncomeOutcomeForm_numberField__e0m2h",summInputinput:"IncomeOutcomeForm_summInputinput__pF4Ei",summField:"IncomeOutcomeForm_summField__eYUZu",summWrapper:"IncomeOutcomeForm_summWrapper__ler--",summButton:"IncomeOutcomeForm_summButton__2-UiY",uah:"IncomeOutcomeForm_uah__JMA5w",enterButton:"IncomeOutcomeForm_enterButton__1qVfI",clearButton:"IncomeOutcomeForm_clearButton__fMftT",summIcon:"IncomeOutcomeForm_summIcon__MCwUo",backButton:"IncomeOutcomeForm_backButton__Vhqm1",goBack:"IncomeOutcomeForm_goBack__bA-3X",categoriesRoot:"IncomeOutcomeForm_categoriesRoot__zMjSK",categoriesControll:"IncomeOutcomeForm_categoriesControll__sw2Jh",categoriesArrow:"IncomeOutcomeForm_categoriesArrow__eN+DT",categoriesPlaceholder:"IncomeOutcomeForm_categoriesPlaceholder__p7ess",categoriesMenu:"IncomeOutcomeForm_categoriesMenu__an1D+"}),D={"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b":"food","\u0420\u0430\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f":"activities","\u0417\u0434\u043e\u0440\u043e\u0432\u044c\u0435":"health","\u0410\u043b\u043a\u043e\u0433\u043e\u043b\u044c":"alcohol","\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442":"transport","\u0412\u0441\u0451 \u0434\u043b\u044f \u0434\u043e\u043c\u0430":"home_stuff","\u0422\u0435\u0445\u043d\u0438\u043a\u0430":"gadgets","\u041a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u043a\u0430, \u0441\u0432\u044f\u0437\u044c":"utility_bills","\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435":"education","\u0421\u043f\u043e\u0440\u0442, \u0445\u043e\u0431\u0431\u0438":"hobbies","\u041f\u0440\u043e\u0447\u0435\u0435":"others","\u0417\u0430\u0440\u0430\u0431\u043e\u0442\u043d\u0430\u044f \u043f\u043b\u0430\u0442\u0430":"salary","\u0414\u043e\u043f.\u0434\u043e\u0445\u043e\u0434":"additional_income"},E=function(e){var n=e.transactionType,t=e.showMobileAddView,o=(0,s.useState)((new Date).getDate()),i=(0,a.Z)(o,1)[0],l=(0,s.useState)((new Date).getMonth()+1),m=(0,a.Z)(l,1)[0],u=(0,s.useState)((new Date).getFullYear()),d=(0,a.Z)(u,1)[0],_=n,h=(0,c.I0)(),p=(0,s.useState)(""),x=(0,a.Z)(p,2),b=x[0],j=x[1],f=(0,s.useState)(""),T=(0,a.Z)(f,2),N=T[0],v=T[1],y=(0,s.useState)(""),S=(0,a.Z)(y,2),C=S[0],w=S[1],Z=function(e){var n=e.currentTarget,t=n.name,a=n.value;switch(t){case"name":j(a);break;case"category":v(a);break;case"summ":w(a);break;default:return}},E=function(e){e.preventDefault();var n={type:_,description:b,category:D[N.value],amount:Number(C),day:i.toString(),month:m.toString(),year:d.toString()};h(g.addTransaction(n)),j(""),v(""),w("")},A=function(e){e.preventDefault();var n={type:_,description:b,category:D[N.value],amount:Number(C),day:i.toString(),month:m.toString(),year:d.toString()};console.log(n),h(g.addTransaction(n)),j(""),v(""),w(""),t()},M=function(){j(""),v(""),w("")},L=(0,s.useRef)(null),R=function(){L.current.focus()},q="consumption"===_?k:F,W=function(e){v(e)},V=function(){t()};return(0,I.jsx)(r.Z,{queries:{small:"(max-width: 767px)",medium:"(min-width: 768px)"},children:function(e){return(0,I.jsxs)(s.Fragment,{children:[e.small&&(0,I.jsxs)(s.Fragment,{children:[(0,I.jsx)("button",{className:"".concat(O.backButton),type:"button",onClick:V}),(0,I.jsxs)("form",{className:O.form,onSubmit:A,children:[(0,I.jsxs)("ul",{className:O.ul,children:[(0,I.jsx)("li",{className:O.nameLi,children:(0,I.jsx)("label",{className:O.nameField,children:(0,I.jsx)("input",{className:O.nameInput,type:"text",name:"name",placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u041c\u0430\u043d\u043d\u0430\u044f \u043a\u0430\u0448\u0430, \u041f\u0440\u043e\u0435\u0437\u0434 \u043d\u0430 \u043c\u0435\u0442\u0440\u043e \u0438 \u0442. \u0434.",value:b,onChange:Z,required:!0})})}),(0,I.jsx)("li",{className:O.dropdownLi,children:(0,I.jsx)(B.Z,{className:O.categoriesRoot,controlClassName:O.categoriesControll,arrowClassName:O.categoriesArrow,placeholderClassName:O.categoriesPlaceholder,menuClassName:O.categoriesMenu,optionsClassName:O.categoriesOption,placeholder:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u0442\u043e\u0432\u0430\u0440\u0430",type:"text",name:"category",options:q,onChange:W,value:N,defaultValue:""})}),(0,I.jsx)("li",{className:O.summField,children:(0,I.jsxs)("div",{className:O.summWrapper,children:[(0,I.jsx)("label",{className:O.numberField,children:(0,I.jsx)("input",{className:O.summInput,inputMode:"numeric",type:"number",name:"summ",title:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443",value:C,onChange:Z,ref:L,placeholder:"00.00",required:!0})}),(0,I.jsx)("p",{className:O.uah,children:(0,I.jsx)("span",{children:"UAH"})}),(0,I.jsx)("button",{onClick:R,className:O.summButton,type:"button"})]})})]}),(0,I.jsxs)("div",{className:O.buttons,children:[(0,I.jsx)("button",{className:O.enterButton,type:"submit",children:"\u0412\u0412\u041e\u0414"}),(0,I.jsx)("button",{className:O.clearButton,type:"button",onClick:M,children:"\u041e\u0427\u0418\u0421\u0422\u0418\u0422\u042c"})]})]})]}),e.medium&&(0,I.jsxs)("form",{className:O.form,onSubmit:E,children:[(0,I.jsxs)("ul",{className:O.ul,children:[(0,I.jsx)("li",{className:O.nameLi,children:(0,I.jsx)("label",{className:O.nameField,children:(0,I.jsx)("input",{className:O.nameInput,type:"text",name:"name",placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u041c\u0430\u043d\u043d\u0430\u044f \u043a\u0430\u0448\u0430, \u041f\u0440\u043e\u0435\u0437\u0434 \u043d\u0430 \u043c\u0435\u0442\u0440\u043e \u0438 \u0442. \u0434.",value:b,onChange:Z,required:!0})})}),(0,I.jsx)("li",{className:O.dropdownLi,children:(0,I.jsx)(B.Z,{className:O.categoriesRoot,controlClassName:O.categoriesControll,arrowClassName:O.categoriesArrow,placeholderClassName:O.categoriesPlaceholder,menuClassName:O.categoriesMenu,optionsClassName:O.categoriesOption,placeholder:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u0442\u043e\u0432\u0430\u0440\u0430",type:"text",name:"category",options:q,onChange:W,value:N,defaultValue:""})}),(0,I.jsx)("li",{className:O.summField,children:(0,I.jsxs)("div",{className:O.summWrapper,children:[(0,I.jsx)("label",{className:O.numberField,children:(0,I.jsx)("input",{className:O.summInput,inputMode:"numeric",type:"number",name:"summ",title:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443",value:C,onChange:Z,ref:L,placeholder:"00.00",required:!0})}),(0,I.jsx)("p",{className:O.uah,children:(0,I.jsx)("span",{children:"UAH"})}),(0,I.jsx)("button",{onClick:R,className:O.summButton,type:"button"})]})})]}),(0,I.jsxs)("div",{className:O.buttons,children:[(0,I.jsx)("button",{className:O.enterButton,type:"submit",children:"\u0412\u0412\u041e\u0414"}),(0,I.jsx)("button",{className:O.clearButton,type:"button",onClick:M,children:"\u041e\u0427\u0418\u0421\u0422\u0418\u0422\u042c"})]})]})]})}})},A=t(9483);b().defaults.baseURL="https://kapusta-backend-node-js.herokuapp.com/api/";var M={getSummary:function(e,n){return function(){var t=(0,_.Z)(p().mark((function t(a){var s,c;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(A.Z.getSummaryRequest()),t.prev=1,t.next=4,b().get("/transaction/summary/".concat(e,"/").concat(n));case 4:s=t.sent,c=s.data,a(A.Z.getSummarySuccess(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),a(A.Z.getSummaryError(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}},L=M,R="IncomeOutcomeButtons_typeButton__bgKqj",q="IncomeOutcomeButtons_incomeOutcomeButtons__fqwYr",W="IncomeOutcomeButtons_isActive__W7HpA",V=function(e){var n=e.transactionType,t=e.setTransactionTypeIncome,o=e.setTransactionTypeConsumption,i=e.showMobileAddView,l=n,m=(0,s.useState)(!0),u=(0,a.Z)(m,2),d=(u[0],u[1],(0,s.useState)(!1)),_=(0,a.Z)(d,2),h=(_[0],_[1],(0,c.I0)(),(0,s.useState)(2022)),p=(0,a.Z)(h,2),x=(p[0],p[1],function(){o(),i()}),b=function(){t(),i()};return(0,I.jsx)(r.Z,{queries:{small:"(max-width: 767px)",medium:"(min-width: 768px)"},children:function(e){return(0,I.jsxs)(s.Fragment,{children:[e.small&&(0,I.jsxs)("div",{className:q,children:[(0,I.jsx)("button",{className:R,type:"button",onClick:x,children:"\u0420\u0410\u0421\u0425\u041e\u0414"}),(0,I.jsx)("button",{className:R,type:"button",onClick:b,children:"\u0414\u041e\u0425\u041e\u0414"})]}),e.medium&&(0,I.jsxs)(s.Fragment,{children:[(0,I.jsx)("button",{className:"".concat(R,"\n               ").concat("consumption"===l&&W),type:"button",onClick:o,children:"\u0420\u0410\u0421\u0425\u041e\u0414"}),(0,I.jsx)("button",{className:"".concat(R,"\n               ").concat("income"===l&&W),type:"button",onClick:t,children:"\u0414\u041e\u0425\u041e\u0414"})]})]})}})},P="CommonPageWrapper_wrapperSection__O-zbV",J="CommonPageWrapper_fourthElement__DmW8+",z="CommonPageWrapper_tableDesc__WiVy1",U="CommonPageWrapper_firstElement__iLusL",Y="CommonPageWrapper_secondElement__vJlSq",Q="CommonPageWrapper_thirdElement__bIITm",H=function(e){var n=e.children;return(0,I.jsxs)("ul",{className:P,children:[(0,I.jsx)("li",{className:U,children:n[0]}),(0,I.jsx)("li",{className:Y,children:n[1]}),(0,I.jsx)("li",{className:Q,children:n[2]}),(0,I.jsx)("li",{className:J,children:n[3]}),(0,I.jsx)("li",{className:z,children:n[4]})]})},X=t(1807),G={bodyTable:"TransactionsTable_bodyTable__WO5G0",bodyTableScroll:"TransactionsTable_bodyTableScroll__bQ-BS",main:"TransactionsTable_main__SjRCY",mainTbody:"TransactionsTable_mainTbody__OQyRF",theadTable:"TransactionsTable_theadTable__Ku0ma",th:"TransactionsTable_th__SKTup",td:"TransactionsTable_td__R25tn",thData:"TransactionsTable_thData__Ddktc",thDesc:"TransactionsTable_thDesc__1j+EO",thSum:"TransactionsTable_thSum__jUzDz",tdSum:"TransactionsTable_tdSum__PbqJ3",tdSumExpense:"TransactionsTable_tdSumExpense__nsxrV",tdDesc:"TransactionsTable_tdDesc__y41w6",thIcon:"TransactionsTable_thIcon__DRZo6",thCateg:"TransactionsTable_thCateg__78494",thEmpty:"TransactionsTable_thEmpty__coaj7",deleteBtn:"TransactionsTable_deleteBtn__yIYwE",deleteBtnIcon:"TransactionsTable_deleteBtnIcon__mqMD7"},K=t(6460),$={food:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b",alcohol:"\u0410\u043b\u043a\u043e\u0433\u043e\u043b\u044c",activities:"\u0420\u0430\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u0435",health:"\u0417\u0434\u043e\u0440\u043e\u0432\u044c\u0435",transport:"\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442",home_stuff:"\u0412\u0441\u0451 \u0434\u043b\u044f \u0434\u043e\u043c\u0430",gadgets:"\u0422\u0435\u0445\u043d\u0438\u043a\u0430",utility_bills:"\u041a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u043a\u0430, \u0421\u0432\u044f\u0437\u044c",hobbies:"\u0421\u043f\u043e\u0440\u0442, \u0425\u043e\u0431\u0431\u0438",education:"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435",others:"\u041f\u0440\u043e\u0447\u0435\u0435",additional_income:"\u0414\u043e\u043f.\u0434\u043e\u0445\u043e\u0434",salary:"\u0417\u0430\u0440\u0430\u0431\u043e\u0442\u043d\u0430\u044f \u043f\u043b\u0430\u0442\u0430"},ee=function(e){var n=e,t=(0,c.I0)(),r=n.transactionType,o=(0,c.v9)(d.f),i=(0,c.v9)(d.V),l=o.filter((function(e){return e.type===n.transactionType})),m=(0,s.useState)(!1),u=(0,a.Z)(m,2),_=u[0],h=u[1],p=(0,s.useState)(""),x=(0,a.Z)(p,2),b=x[0],j=x[1],f=(0,s.useState)(2022),T=(0,a.Z)(f,2),N=T[0];T[1];(0,s.useEffect)((function(){t(g.getTransactions()),t(L.getSummary(r,N))}),[t,r]),(0,s.useEffect)((function(){if(i)return t(g.getTransactions()),void t(L.getSummary(r,N))}),[i,t,r]);var v=function(){j(""),h(!1)};return(0,I.jsxs)(I.Fragment,{children:[_&&(0,I.jsx)(K.Z,{modalTitle:"\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u0442\u0443 \u0437\u0430\u043f\u0438\u0441\u044c?",handleClickRight:v,handleClickLeft:function(){h(!1);var e=o.find((function(e){return e._id===b}));t(g.deleteTransaction(e)),t(g.getTransactions()),t(L.getSummary(r,N)),j("")},onClose:v}),(0,I.jsxs)("div",{className:G.bodyTable,children:[(0,I.jsx)("table",{className:G.main,children:(0,I.jsx)("thead",{className:G.theadTable,children:(0,I.jsxs)("tr",{children:[(0,I.jsx)("th",{className:"".concat(G.th," ").concat(G.thData),children:(0,I.jsx)("span",{children:"\u0414\u0430\u0442\u0430"})}),(0,I.jsx)("th",{className:"".concat(G.th," ").concat(G.thDesc),children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),(0,I.jsx)("th",{className:"".concat(G.th," ").concat(G.thCateg),children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"}),(0,I.jsx)("th",{className:"".concat(G.th," ").concat(G.thSum),children:"\u0421\u0443\u043c\u043c\u0430"}),(0,I.jsx)("th",{className:"".concat(G.th," ").concat(G.thEmpty)})]})})}),(0,I.jsx)("div",{className:G.bodyTableScroll,children:(0,I.jsx)("table",{className:"".concat(G.main," ").concat(G.mainTbody),children:(0,I.jsx)("tbody",{className:G.tbodyTable,children:l.map((function(e){return(0,I.jsxs)("tr",{className:G.td,children:[(0,I.jsx)("td",{className:G.thData,children:"".concat(e.day,".").concat(e.month,".").concat(e.year)}),(0,I.jsx)("td",{className:G.tdDesc,children:(0,I.jsx)(X.default,{text:e.description,length:15})}),(0,I.jsx)("td",{className:G.thCateg,children:$[e.category]}),(0,I.jsx)("td",{className:"".concat("income"!==e.type?G.tdSumExpense:G.tdSum),children:(0,I.jsx)(X.default,{text:"income"===e.type?"".concat(e.amount.toLocaleString("ru"),".00 \u0433\u0440\u043d."):"-".concat(e.amount.toLocaleString("ru"),".00 \u0433\u0440\u043d."),length:14})}),(0,I.jsx)("td",{className:G.thIcon,onClick:function(){return function(e){h(!0),j(e._id)}(e)},children:(0,I.jsx)("button",{className:G.deleteBtn})})]},e._id)})).reverse()})})})]})]})},ne="MobileTable_tsList__container__zS63g",te="MobileTable_mobileTable__WOx7Z",ae="MobileTable_listItem__EnzcG",se="MobileTable_listItem__wrapper__gnp1-",ce="MobileTable_dateCategory__wrapper__tfW5P",re="MobileTable_listItem__subCategory__bxm2b",oe="MobileTable_listItem__date__rOkQP",ie="MobileTable_listItem__category__irVQW",le="MobileTable_listItem__sumWrapper__aB-cR",me="MobileTable_tdSum__qwqE1",ue="MobileTable_tdSumExpense__vZYTv",de="MobileTable_buttonDelMobile__xp93m",_e=function(){var e=(0,c.I0)(),n=(0,c.v9)(d.f),t=(0,c.v9)(d.V),r=(0,s.useState)(!1),o=(0,a.Z)(r,2),i=o[0],l=o[1],m=(0,s.useState)(""),u=(0,a.Z)(m,2),_=u[0],h=u[1];(0,s.useEffect)((function(){e(g.getTransactions())}),[e]),(0,s.useEffect)((function(){t&&e(g.getTransactions())}),[t,e]);var p=function(){h(""),l(!1)};return(0,I.jsxs)(I.Fragment,{children:[i&&(0,I.jsx)(K.Z,{modalTitle:"\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u0442\u0443 \u0437\u0430\u043f\u0438\u0441\u044c?",handleClickRight:p,handleClickLeft:function(){l(!1);var t=n.find((function(e){return e._id===_}));e(g.deleteTransaction(t)),h("")},onClose:p}),(0,I.jsx)("div",{className:ne,children:(0,I.jsx)("ul",{className:te,children:n.map((function(e){return(0,I.jsxs)("li",{className:ae,children:[(0,I.jsxs)("div",{className:se,children:[(0,I.jsx)("p",{className:re,children:e.description}),(0,I.jsxs)("div",{className:ce,children:[(0,I.jsx)("p",{className:oe,children:"".concat(e.day,".").concat(e.month,".").concat(e.year,"\n                    ")}),(0,I.jsx)("p",{className:ie,children:e.category})]})]}),(0,I.jsx)("div",{className:le,children:(0,I.jsx)("p",{className:"".concat("income"!==e.type?ue:me),children:(0,I.jsx)(X.default,{text:"income"===e.type?"".concat(e.amount,".00 \u0433\u0440\u043d."):"-".concat(e.amount,".00 \u0433\u0440\u043d."),length:10})})}),(0,I.jsx)("button",{className:de,onClick:function(){return function(e){l(!0),h(e._id)}(e)}})]},e._id)})).reverse()})})]})},he="Date_dateContainer__eXPLT",pe="Date_dateIcon__JDtHj",xe="Date_date__yeJXn",be=function(){var e=(0,s.useState)(+(new Date).getDate()),n=(0,a.Z)(e,2),t=n[0],c=(n[1],(0,s.useState)(+(new Date).getMonth()+1)),r=(0,a.Z)(c,2),o=r[0],i=r[1],l=(0,s.useState)(+(new Date).getFullYear()),m=(0,a.Z)(l,2),u=m[0];m[1];return(0,s.useEffect)((function(){o<10&&i("0".concat(o))}),[]),(0,I.jsxs)("div",{className:he,children:[(0,I.jsx)("p",{className:pe}),(0,I.jsxs)("p",{className:xe,children:[t,".",o,".",u]})]})},je="Summary_summaryContainer__Tn83q",fe="Summary_summaryTitle__IWPOh",ge="Summary_summaryList__7-TJi",Te="Summary_summaryItem__y9OE7",Ne="Summary_summaryDescription__Y9r-x",ve=JSON.parse('[{"id":1,"name":"\u042f\u043d\u0432\u0430\u0440\u044c"},{"id":2,"name":"\u0424\u0435\u0432\u0440\u0430\u043b\u044c"},{"id":3,"name":"\u041c\u0430\u0440\u0442 "},{"id":4,"name":"\u0410\u043f\u0440\u0435\u043b\u044c"},{"id":5,"name":"\u041c\u0430\u0439"},{"id":6,"name":"\u0418\u044e\u043d\u044c"},{"id":7,"name":"\u0418\u044e\u043b\u044c"},{"id":8,"name":"\u0410\u0432\u0433\u0443\u0441\u0442"},{"id":9,"name":"\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c"},{"id":10,"name":"\u041e\u043a\u0442\u044f\u0431\u0440\u044c"},{"id":11,"name":"\u041d\u043e\u044f\u0431\u0440\u044c"},{"id":12,"name":"\u0414\u0435\u043a\u0430\u0431\u0440\u044c"}]'),ye=function(e){return e.summaryReducer},Se=function(){var e=(0,c.v9)(ye);return(0,I.jsxs)("div",{className:je,children:[(0,I.jsx)("h4",{className:fe,children:"\u0421\u0432\u043e\u0434\u043a\u0430"}),(0,I.jsx)("ul",{className:ge,children:e&&e.filter((function(e){return e.value>0})).map((function(e){var n=e.monthIdex,t=e.value;return(0,I.jsxs)("li",{className:Te,children:[(0,I.jsx)("p",{className:Ne,children:ve.find((function(e){return e.id===n})).name}),(0,I.jsxs)("p",{className:Ne,children:[t.toLocaleString(),".00"]})]},n)}))})]})},Ie="AddTransactionView_wrapper__pF5gI",Ce=function(e){var n=e.showMobileAddView,t=e.transactionType,a=e.setTransactionTypeIncome,s=e.setTransactionTypeConsumption;return(0,I.jsx)(Z.hE,{children:(0,I.jsx)(T.Z,{children:(0,I.jsx)("div",{className:Ie,children:(0,I.jsx)(E,{showMobileAddView:n,transactionType:t,setTransactionTypeIncome:a,setTransactionTypeConsumption:s})})})})},we=function(){var e=(0,c.I0)(),n=(0,s.useState)(2022),t=(0,a.Z)(n,2),_=t[0],h=(t[1],u("mobileAddView",!1)),p=(0,a.Z)(h,2),x=p[0],b=p[1],j=(0,c.v9)(d.f),f=function(){b(!x)},N=(0,s.useState)("consumption"),v=(0,a.Z)(N,2),y=v[0],S=v[1],k=function(){"consumption"!==y||S("income")},F=function(){"income"!==y||S("consumption")};return(0,s.useEffect)((function(){e(g.getTransactions()),e(L.getSummary(y,_))}),[y,e]),console.log(y),(0,I.jsx)(r.Z,{queries:{small:"(max-width: 767px)",medium:"(min-width: 768px) and (max-width: 1279px)",large:"(min-width: 1280px)"},children:function(e){return(0,I.jsxs)(s.Fragment,{children:[e.small&&(0,I.jsx)(I.Fragment,{children:x&&j?(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(Ce,{showMobileAddView:f,transactionType:y,setTransactionTypeIncome:k,setTransactionTypeConsumption:F})}):(0,I.jsxs)(s.Fragment,{children:[(0,I.jsx)(Z.hE,{children:(0,I.jsx)(T.Z,{children:(0,I.jsxs)(H,{children:[(0,I.jsx)(C,{}),(0,I.jsx)(w.Z,{}),(0,I.jsx)(be,{}),(0,I.jsx)(_e,{})]})})}),(0,I.jsx)(V,{setTransactionTypeIncome:k,setTransactionTypeConsumption:F,showMobileAddView:f})]})}),e.medium&&(0,I.jsx)(Z._u,{children:(0,I.jsxs)(H,{children:[(0,I.jsxs)("div",{className:l,children:[(0,I.jsx)(w.Z,{}),(0,I.jsx)(C,{})]}),(0,I.jsx)(V,{setTransactionTypeIncome:k,setTransactionTypeConsumption:F,transactionType:y}),(0,I.jsxs)("div",{className:i,children:[(0,I.jsxs)("div",{className:m,children:[(0,I.jsx)(be,{}),(0,I.jsx)(E,{transactionType:y})]}),(0,I.jsx)(ee,{transactionType:y})]}),(0,I.jsx)(Se,{})]})}),e.large&&(0,I.jsx)(Z._u,{children:(0,I.jsxs)(H,{children:[(0,I.jsxs)("div",{className:l,children:[(0,I.jsx)(w.Z,{}),(0,I.jsx)(C,{})]}),(0,I.jsx)(V,{setTransactionTypeIncome:k,setTransactionTypeConsumption:F,transactionType:y}),(0,I.jsxs)("div",{className:i,children:[(0,I.jsxs)("div",{className:m,children:[(0,I.jsx)(be,{}),(0,I.jsx)(E,{transactionType:y})]}),(0,I.jsxs)("div",{className:o,children:[(0,I.jsx)(ee,{transactionType:y}),(0,I.jsx)(Se,{})]})]})]})})]})}})}},3553:function(e,n,t){t.d(n,{f:function(){return a},V:function(){return s}});var a=function(e){return e.transactions.transactionsReducer},s=function(e){return e.transactions.isLoading}}}]);
//# sourceMappingURL=main-page.851d8e79.chunk.js.map