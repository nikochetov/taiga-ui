"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[29268],{29268:(Me,A,o)=>{o.r(A),o.d(A,{ExampleTuiAlertsModule:()=>Re});var d=o(12057),C=o(23738),E=o(12021),_=o(55970),h=o(78697),s=o(66187),f=o(91068),c=o(89570),e=o(74788),g=o(43190),R=o(16996),O=o(30644),m=o(76189),M=o(66596);let L=(()=>{class n{constructor(t){this.context=t,this.value=this.context.data}increaseBalance(){this.value+=10}submit(){this.context.completeWith(this.value)}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(c.yf))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-notifications-service-example-with-data"]],decls:9,vars:2,consts:[[1,"text"],[3,"value"],["tuiMode","onLight",1,"controls","tui-space_top-3"],["tuiButton","","type","button","appearance","outline","size","m",1,"tui-space_right-3",3,"click"],["tuiLink","","type","button",3,"pseudo","click"]],template:function(t,l){1&t&&(e.\u0275\u0275elementStart(0,"span",0),e.\u0275\u0275text(1,"Your balance:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(2,"\n\xa0\n"),e.\u0275\u0275element(3,"tui-money",1),e.\u0275\u0275elementStart(4,"div",2),e.\u0275\u0275elementStart(5,"button",3),e.\u0275\u0275listener("click",function(){return l.submit()}),e.\u0275\u0275text(6," Submit "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"button",4),e.\u0275\u0275listener("click",function(){return l.increaseBalance()}),e.\u0275\u0275text(8," Increase "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275advance(3),e.\u0275\u0275property("value",l.value),e.\u0275\u0275advance(4),e.\u0275\u0275property("pseudo",!0))},directives:[R.o,O.w,m.v,M.V],styles:[".text[_ngcontent-%COMP%]{font-style:italic}.controls[_ngcontent-%COMP%]{display:flex;align-items:center}"],changeDetection:0}),n})();var W=o(88331),B=o(37159),H=o(57068);let Y=(()=>{class n{constructor(t){this.alertService=t}showNotification(){this.alertService.open("A simple option",{label:"With a heading!"}).subscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(s.J9F))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-alerts-example-1"]],decls:2,vars:0,consts:[["tuiButton","","type","button","size","m",3,"click"]],template:function(t,l){1&t&&(e.\u0275\u0275elementStart(0,"button",0),e.\u0275\u0275listener("click",function(){return l.showNotification()}),e.\u0275\u0275text(1," Show\n"),e.\u0275\u0275elementEnd())},directives:[m.v],encapsulation:2,changeDetection:0}),n})();const Q=["withdrawTemplate"],K=["depositTemplate"];function Z(n,F){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275i18n(1,4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275text(3," Your balance: "),e.\u0275\u0275element(4,"tui-money",0),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"button",5),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().withdraw()}),e.\u0275\u0275text(6," Withdraw\xa0 "),e.\u0275\u0275element(7,"tui-money",0),e.\u0275\u0275elementEnd()}if(2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(4),e.\u0275\u0275property("value",t.money),e.\u0275\u0275advance(3),e.\u0275\u0275property("value",100)}}function k(n,F){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275i18nStart(1,6),e.\u0275\u0275element(2,"code"),e.\u0275\u0275element(3,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"p"),e.\u0275\u0275text(5," Your balance: "),e.\u0275\u0275element(6,"tui-money",0),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"button",5),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().deposit()}),e.\u0275\u0275text(8," Add\xa0 "),e.\u0275\u0275element(9,"tui-money",0),e.\u0275\u0275elementEnd()}if(2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(6),e.\u0275\u0275property("value",t.money),e.\u0275\u0275advance(3),e.\u0275\u0275property("value",100)}}let q=(()=>{class n{constructor(t){this.alertService=t,this.money=1e3}showWithdrawAlert(){this.alertService.open(this.withdrawTemplate||"",{label:"A template sample",status:"warning",autoClose:!1}).subscribe()}showDepositAlert(){this.alertService.open(this.depositTemplate||"",{label:"A template sample",status:"success",autoClose:!1}).subscribe()}withdraw(){this.money-=100}deposit(){this.money+=100}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(s.J9F))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-alerts-example-2"]],viewQuery:function(t,l){if(1&t&&(e.\u0275\u0275viewQuery(Q,5),e.\u0275\u0275viewQuery(K,5)),2&t){let a;e.\u0275\u0275queryRefresh(a=e.\u0275\u0275loadQuery())&&(l.withdrawTemplate=a.first),e.\u0275\u0275queryRefresh(a=e.\u0275\u0275loadQuery())&&(l.depositTemplate=a.first)}},decls:14,vars:2,consts:function(){let F,t;return F=$localize`:␟8d3c5771978973f774594800055ea9d9f9187731␟1511830455526270445:Notifications can be shown with template`,t=$localize`:␟89d0371fa85a88f37afe5840ebc452e9ff9bdc34␟7003116325745007663: If there are many templates, you can use ${"[\ufffd#2\ufffd|\ufffd#3\ufffd]"}:START_TAG_CODE:ViewChildren${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_TAG_CODE: instead of ${"[\ufffd#2\ufffd|\ufffd#3\ufffd]"}:START_TAG_CODE:ViewChild${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_TAG_CODE: or set them IDs with "#" (see code of this sample) `,t=e.\u0275\u0275i18nPostprocess(t),[[3,"value"],["tuiButton","","type","button","size","m",1,"tui-space_right-3",3,"click"],["withdrawTemplate",""],["depositTemplate",""],F,["tuiButton","","type","button","tuiMode","onLight","appearance","outline","size","m",3,"click"],t]},template:function(t,l){1&t&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275text(1," Your balance: "),e.\u0275\u0275element(2,"tui-money",0),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"button",1),e.\u0275\u0275listener("click",function(){return l.showWithdrawAlert()}),e.\u0275\u0275text(4," Withdraw\n"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"button",1),e.\u0275\u0275listener("click",function(){return l.showDepositAlert()}),e.\u0275\u0275text(6," Add\n"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"button",1),e.\u0275\u0275listener("click",function(){return l.withdraw()}),e.\u0275\u0275text(8," Withdraw\xa0 "),e.\u0275\u0275element(9,"tui-money",0),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(10,Z,8,2,"ng-template",null,2,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275template(12,k,10,2,"ng-template",null,3,e.\u0275\u0275templateRefExtractor)),2&t&&(e.\u0275\u0275advance(2),e.\u0275\u0275property("value",l.money),e.\u0275\u0275advance(7),e.\u0275\u0275property("value",100))},directives:[R.o,m.v,O.w],encapsulation:2,changeDetection:0}),n})();var p=o(46782);let ee=(()=>{class n{constructor(t){this.context=t}ok(){this.context.completeWith(!0)}cancel(){this.context.completeWith(!1)}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(c.yf))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-notifications-service-example"]],decls:7,vars:0,consts:[["tuiMode","onLight"],["tuiButton","","type","button","appearance","outline","size","s",3,"click"],["tuiButton","","type","button","appearance","outline","size","s",1,"tui-space_left-1",3,"click"]],template:function(t,l){1&t&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275text(1,"Yes?"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"div",0),e.\u0275\u0275elementStart(3,"button",1),e.\u0275\u0275listener("click",function(){return l.ok()}),e.\u0275\u0275text(4," Yes "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"button",2),e.\u0275\u0275listener("click",function(){return l.cancel()}),e.\u0275\u0275text(6," No "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd())},directives:[O.w,m.v],encapsulation:2,changeDetection:0}),n})(),te=(()=>{class n{constructor(t,l,a){this.injector=a,this.notification=t.open(new c.Al(ee,this.injector),{label:"Question",status:"error",autoClose:!1}).pipe((0,g.w)(u=>t.open(`Got a value \u2014 ${u}`,{label:"Information"})),(0,p.R)(l.events))}showNotification(){this.notification.subscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(s.J9F),e.\u0275\u0275directiveInject(E.F0),e.\u0275\u0275directiveInject(e.Injector))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-alerts-example-3"]],decls:4,vars:0,consts:function(){let F;return F=$localize`:␟8263fd5f4e59612e4fde19ba3a13cba5e6b5af73␟8127611195136646297:This notification will be removed after router change (see component sample)`,[F,["tuiButton","","type","button","size","m",3,"click"]]},template:function(t,l){1&t&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275i18n(1,0),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"button",1),e.\u0275\u0275listener("click",function(){return l.showNotification()}),e.\u0275\u0275text(3," Show\n"),e.\u0275\u0275elementEnd())},directives:[m.v],encapsulation:2,changeDetection:0}),n})(),ne=(()=>{class n{constructor(t,l,a){this.injector=a,this.notification=t.open(new c.Al(L,this.injector),{label:"Heading is so long that it should be shown in two lines of text",data:237,status:"warning",autoClose:!1}).pipe((0,g.w)(u=>t.open(`Got a value \u2014 ${u}`,{label:"Information"})),(0,p.R)(l.events))}showNotification(){this.notification.subscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(s.J9F),e.\u0275\u0275directiveInject(E.F0),e.\u0275\u0275directiveInject(e.Injector))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-alerts-example-4"]],decls:2,vars:0,consts:[["tuiButton","","type","button","size","m",3,"click"]],template:function(t,l){1&t&&(e.\u0275\u0275elementStart(0,"button",0),e.\u0275\u0275listener("click",function(){return l.showNotification()}),e.\u0275\u0275text(1," Show\n"),e.\u0275\u0275elementEnd())},directives:[m.v],encapsulation:2,changeDetection:0}),n})();var x=o(64762),y=o(40287);function oe(n,F){if(1&n&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275text(1),e.\u0275\u0275elementContainerEnd()),2&n){const t=F.polymorpheusOutlet;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",t,"\n")}}const Fe=function(n){return{$implicit:n}};class r{constructor(F){this.context=F}get label(){return this.context.label}get status(){return this.context.status}}r.\u0275fac=function(F){return new(F||r)(e.\u0275\u0275directiveInject(c.yf))},r.\u0275cmp=e.\u0275\u0275defineComponent({type:r,selectors:[["tui-notifications-service-example-with-custom-label"]],decls:5,vars:4,consts:[[4,"polymorpheusOutlet","polymorpheusOutletContext"]],template:function(F,t){1&F&&(e.\u0275\u0275elementStart(0,"h4"),e.\u0275\u0275text(1,"Start content"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(2,oe,2,1,"ng-container",0),e.\u0275\u0275elementStart(3,"h4"),e.\u0275\u0275text(4,"End content"),e.\u0275\u0275elementEnd()),2&F&&(e.\u0275\u0275advance(2),e.\u0275\u0275property("polymorpheusOutlet",t.label)("polymorpheusOutletContext",e.\u0275\u0275pureFunction1(2,Fe,t.status)))},directives:[c.Li],encapsulation:2,changeDetection:0}),(0,x.gn)([y.UMq],r.prototype,"label",null),(0,x.gn)([y.UMq],r.prototype,"status",null);var le=o(34880);let ae=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-notifications-service-example-custom-label"]],decls:4,vars:0,consts:[[1,"label"],[1,"text"],["src","tuiIconHeart"]],template:function(t,l){1&t&&(e.\u0275\u0275elementStart(0,"label",0),e.\u0275\u0275elementStart(1,"span",1),e.\u0275\u0275text(2,"From custom label component with"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(3,"tui-svg",2),e.\u0275\u0275elementEnd())},directives:[le.P],styles:[".label[_ngcontent-%COMP%]{display:flex;align-items:center}.text[_ngcontent-%COMP%]{font-weight:normal;font-style:italic}"],changeDetection:0}),n})(),ue=(()=>{class n{constructor(t,l,a){this.injector=a,this.notification=t.open(new c.Al(r,this.injector),{label:({$implicit:u})=>"error"===u?"Error label from function":"Info label from function",status:"info",autoClose:!1}).pipe((0,p.R)(l.events)),this.notificationWithCustomLabel=t.open(new c.Al(r,this.injector),{label:new c.Al(ae,this.injector),status:"warning",autoClose:!1}).pipe((0,p.R)(l.events))}showNotification(){this.notification.subscribe()}showNotificationWithCustomLabel(){this.notificationWithCustomLabel.subscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(s.J9F),e.\u0275\u0275directiveInject(E.F0),e.\u0275\u0275directiveInject(e.Injector))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-alerts-example-5"]],decls:4,vars:0,consts:[["tuiButton","","type","button","size","m",3,"click"],["tuiButton","","type","button","size","m",1,"tui-space_left-3",3,"click"]],template:function(t,l){1&t&&(e.\u0275\u0275elementStart(0,"button",0),e.\u0275\u0275listener("click",function(){return l.showNotification()}),e.\u0275\u0275text(1," With custom label function\n"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"button",1),e.\u0275\u0275listener("click",function(){return l.showNotificationWithCustomLabel()}),e.\u0275\u0275text(3," With custom label component\n"),e.\u0275\u0275elementEnd())},directives:[m.v],encapsulation:2,changeDetection:0}),n})();var ie=o(76349),se=o(44051),ce=o(17023);function me(n,F){if(1&n&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275i18n(1,2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275i18nStart(3,3),e.\u0275\u0275element(4,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"p"),e.\u0275\u0275i18nStart(6,4),e.\u0275\u0275element(7,"strong"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"tui-doc-example",5),e.\u0275\u0275element(9,"tui-alerts-example-1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"tui-doc-example",6),e.\u0275\u0275element(11,"tui-alerts-example-2"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"tui-doc-example",7),e.\u0275\u0275element(13,"tui-alerts-example-3"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"tui-doc-example",8),e.\u0275\u0275element(15,"tui-alerts-example-4"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"tui-doc-example",9),e.\u0275\u0275element(17,"tui-alerts-example-5"),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(8),e.\u0275\u0275property("content",t.example1),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",t.example2),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",t.example3),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",t.example4),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",t.example5)}}function re(n,F){1&n&&e.\u0275\u0275i18n(0,22)}function de(n,F){1&n&&e.\u0275\u0275i18n(0,23)}function Ee(n,F){1&n&&e.\u0275\u0275i18n(0,24)}function pe(n,F){1&n&&e.\u0275\u0275i18n(0,25)}function De(n,F){1&n&&e.\u0275\u0275i18n(0,26)}function Te(n,F){1&n&&e.\u0275\u0275i18n(0,27)}function Se(n,F){1&n&&e.\u0275\u0275i18n(0,28)}function Ce(n,F){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"button",10),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().showNotification()}),e.\u0275\u0275text(1," Show "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"div",11),e.\u0275\u0275i18nStart(3,12),e.\u0275\u0275element(4,"p"),e.\u0275\u0275element(5,"tui-doc-code",13),e.\u0275\u0275element(6,"code"),e.\u0275\u0275element(7,"code"),e.\u0275\u0275element(8,"code"),e.\u0275\u0275element(9,"code"),e.\u0275\u0275elementStart(10,"p"),e.\u0275\u0275element(11,"code"),e.\u0275\u0275element(12,"code"),e.\u0275\u0275element(13,"code"),e.\u0275\u0275elementEnd(),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"tui-doc-documentation"),e.\u0275\u0275template(15,re,1,0,"ng-template",14),e.\u0275\u0275listener("documentationPropertyValueChange",function(a){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().content=a}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"p"),e.\u0275\u0275i18nStart(17,15),e.\u0275\u0275element(18,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(19,"tui-doc-documentation"),e.\u0275\u0275template(20,de,1,0,"ng-template",16),e.\u0275\u0275listener("documentationPropertyValueChange",function(a){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().status=a}),e.\u0275\u0275template(21,Ee,1,0,"ng-template",17),e.\u0275\u0275listener("documentationPropertyValueChange",function(a){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().label=a}),e.\u0275\u0275template(22,pe,1,0,"ng-template",18),e.\u0275\u0275listener("documentationPropertyValueChange",function(a){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().data=a}),e.\u0275\u0275template(23,De,1,0,"ng-template",19),e.\u0275\u0275listener("documentationPropertyValueChange",function(a){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().autoClose=a}),e.\u0275\u0275template(24,Te,1,0,"ng-template",20),e.\u0275\u0275listener("documentationPropertyValueChange",function(a){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().hasCloseButton=a}),e.\u0275\u0275template(25,Se,1,0,"ng-template",21),e.\u0275\u0275listener("documentationPropertyValueChange",function(a){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().hasIcon=a}),e.\u0275\u0275elementEnd()}if(2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("code",t.method),e.\u0275\u0275advance(10),e.\u0275\u0275property("documentationPropertyValues",t.contentVariants)("documentationPropertyValue",t.content),e.\u0275\u0275advance(5),e.\u0275\u0275property("documentationPropertyValues",t.statusVariants)("documentationPropertyValue",t.status),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.label),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.data),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",t.autoCloseVariants)("documentationPropertyValue",t.autoClose),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.hasCloseButton),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.hasIcon)}}function _e(n,F){if(1&n&&(e.\u0275\u0275elementStart(0,"ol",29),e.\u0275\u0275elementStart(1,"li"),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275i18nStart(3,30),e.\u0275\u0275element(4,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"tui-doc-code",31),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"li"),e.\u0275\u0275elementStart(7,"p"),e.\u0275\u0275i18nStart(8,32),e.\u0275\u0275element(9,"code"),e.\u0275\u0275element(10,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(11,"tui-doc-code",33),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"li"),e.\u0275\u0275i18nStart(13,34),e.\u0275\u0275elementStart(14,"a",35),e.\u0275\u0275element(15,"code"),e.\u0275\u0275elementEnd(),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"li"),e.\u0275\u0275elementStart(17,"p"),e.\u0275\u0275i18nStart(18,36),e.\u0275\u0275element(19,"code"),e.\u0275\u0275element(20,"code"),e.\u0275\u0275element(21,"code"),e.\u0275\u0275element(22,"code"),e.\u0275\u0275element(23,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(24,"tui-doc-code",37),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(25,"li"),e.\u0275\u0275elementStart(26,"p"),e.\u0275\u0275i18nStart(27,38),e.\u0275\u0275element(28,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(29,"tui-doc-code",33),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(30,"li"),e.\u0275\u0275elementStart(31,"p"),e.\u0275\u0275i18nStart(32,39),e.\u0275\u0275element(33,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(34,"tui-doc-code",40),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(35,"li"),e.\u0275\u0275elementStart(36,"p"),e.\u0275\u0275i18nStart(37,41),e.\u0275\u0275element(38,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(39,"tui-doc-code",40),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(40,"li"),e.\u0275\u0275elementStart(41,"p"),e.\u0275\u0275i18nStart(42,42),e.\u0275\u0275element(43,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(44,"tui-doc-code",31),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("code",t.exampleModule),e.\u0275\u0275advance(6),e.\u0275\u0275property("code",t.exampleServiceUsage),e.\u0275\u0275advance(13),e.\u0275\u0275property("code",t.exampleImportModuleComponent),e.\u0275\u0275advance(5),e.\u0275\u0275property("code",t.exampleServiceUsageComponent),e.\u0275\u0275advance(5),e.\u0275\u0275property("code",t.exampleCustomAlert),e.\u0275\u0275advance(5),e.\u0275\u0275property("code",t.exampleLazyModule),e.\u0275\u0275advance(5),e.\u0275\u0275property("code",t.exampleOptions)}}let fe=(()=>{class n{constructor(t,l){this.alertService=t,this.method=o.e(22864).then(o.t.bind(o,22864,17)),this.exampleImportModuleComponent=o.e(57102).then(o.t.bind(o,57102,17)),this.exampleServiceUsage=o.e(21779).then(o.t.bind(o,21779,17)),this.exampleServiceUsageComponent=o.e(47317).then(o.t.bind(o,47317,17)),this.exampleCustomAlert=o.e(89081).then(o.t.bind(o,89081,17)),this.exampleLazyModule=o.e(23040).then(o.t.bind(o,23040,17)),this.exampleModule=o.e(44780).then(o.t.bind(o,44780,17)),this.exampleOptions=o.e(44623).then(o.t.bind(o,44623,17)),this.example1={TypeScript:o.e(71703).then(o.t.bind(o,71703,17)),HTML:o.e(60849).then(o.t.bind(o,60849,17))},this.example2={TypeScript:o.e(76701).then(o.t.bind(o,76701,17)),HTML:o.e(23996).then(o.t.bind(o,23996,17))},this.example3={TypeScript:o.e(11885).then(o.t.bind(o,11885,17)),HTML:o.e(19597).then(o.t.bind(o,19597,17)),"alert-example/alert-example.component.ts":o.e(35010).then(o.t.bind(o,35010,17)),"alert-example/alert-example.template.html":o.e(99889).then(o.t.bind(o,99889,17)),"alert-example/alert-example.module.ts":o.e(41177).then(o.t.bind(o,41177,17))},this.example4={TypeScript:o.e(67005).then(o.t.bind(o,67005,17)),HTML:o.e(56103).then(o.t.bind(o,56103,17)),"alert-example-with-data/alert-example-with-data.component.ts":o.e(47368).then(o.t.bind(o,47368,17)),"alert-example-with-data/alert-example-with-data.template.html":o.e(52399).then(o.t.bind(o,52399,17)),"alert-example-with-data/alert-example-with-data.style.less":o.e(54926).then(o.t.bind(o,54926,17)),"alert-example-with-data/alert-example-with-data.module.ts":o.e(34124).then(o.t.bind(o,34124,17))},this.example5={TypeScript:o.e(73037).then(o.t.bind(o,73037,17)),HTML:o.e(24149).then(o.t.bind(o,24149,17)),"custom-label/custom-label.module.ts":o.e(68510).then(o.t.bind(o,68510,17)),"custom-label/custom-label.component.ts":o.e(62580).then(o.t.bind(o,62580,17)),"custom-label/custom-label.style.less":o.e(6664).then(o.t.bind(o,6664,17)),"custom-label/custom-label.template.html":o.e(23866).then(o.t.bind(o,23866,17)),"alert-example-with-custom-label/alert-example-with-custom-label.module.ts":o.e(49668).then(o.t.bind(o,49668,17)),"alert-example-with-custom-label/alert-example-with-custom-label.component.ts":o.e(95001).then(o.t.bind(o,95001,17)),"alert-example-with-custom-label/alert-example-with-custom-label.template.html":o.e(36561).then(o.t.bind(o,36561,17))},this.data=100,this.label="Heading",this.statusVariants=["info","success","error","warning"],this.status=this.statusVariants[0],this.contentVariants=["String","Component"],this.content=this.contentVariants[0],this.autoCloseVariants=[!0,!1,5e3,1e3,500],this.autoClose=this.autoCloseVariants[0],this.hasCloseButton=!0,this.hasIcon=!0,this.component=new c.Al(L,l)}get selectedContent(){return"String"===this.content?this.content:this.component}showNotification(){this.alertService.open(this.selectedContent,{label:this.label,data:this.data,status:this.status,autoClose:this.autoClose,hasCloseButton:this.hasCloseButton,hasIcon:this.hasIcon}).pipe((0,g.w)(t=>this.alertService.open(t,{label:"Notification responded with:"}))).subscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(s.J9F),e.\u0275\u0275directiveInject(e.Injector))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["example-tui-alerts"]],decls:4,vars:0,consts:function(){let F,t,l,a,u,D,$,N,P,I,v,b,V,G,U,T,X,S,J,z,j,w;return F=$localize`:␟1bc7f6b64817783f73d7fa20dacc10347f5dc0a9␟5275394011225250882:Service to show notifications`,t=$localize`:␟f9c768272ef2129e75edad899c468746678c8252␟4524286694660863035: Do not forget to add ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiAlertModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into your app.module to use it `,l=$localize`:␟06634cafb8d09a8709af1c3b2f329d5d2a9e62de␟4498461250311742014:${"\ufffd#7\ufffd"}:START_TAG_STRONG:Singleton${"\ufffd/#7\ufffd"}:CLOSE_TAG_STRONG: you do not need to provide a service. It is just available to inject `,a=$localize`:␟0daf8614496e10971564a28775e074876405031d␟3087369671149412391:Component with data`,u=$localize`:␟51f3f834f095165ec2607a17213c7aa0bc5e4ba3␟1211513920026771159:Component with custom label`,D=$localize`:␟6867a837818a55e0f70764a5e68062bd01ab7163␟7317498188483132876:${"[\ufffd#4\ufffd|\ufffd#10\ufffd]"}:START_PARAGRAPH:To show notification, use method${"[\ufffd/#4\ufffd|\ufffd/#10\ufffd]"}:CLOSE_PARAGRAPH:${"\ufffd#5\ufffd"}:START_TAG_TUI_DOC_CODE:${"\ufffd/#5\ufffd"}:CLOSE_TAG_TUI_DOC_CODE: of ${"[\ufffd#6\ufffd|\ufffd#7\ufffd|\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:TuiAlertService${"[\ufffd/#6\ufffd|\ufffd/#7\ufffd|\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE: , where ${"[\ufffd#6\ufffd|\ufffd#7\ufffd|\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:O${"[\ufffd/#6\ufffd|\ufffd/#7\ufffd|\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE: is output data type and ${"[\ufffd#6\ufffd|\ufffd#7\ufffd|\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:I${"[\ufffd/#6\ufffd|\ufffd/#7\ufffd|\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE: is input data type. If content does not need input data, the second argument is optional. In the sample above the both of them are ${"[\ufffd#6\ufffd|\ufffd#7\ufffd|\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:number${"[\ufffd/#6\ufffd|\ufffd/#7\ufffd|\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE: . ${"[\ufffd#4\ufffd|\ufffd#10\ufffd]"}:START_PARAGRAPH: You can also just unsubscribe from a stream to hide a notification (this observable is returned from ${"[\ufffd#6\ufffd|\ufffd#7\ufffd|\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:open${"[\ufffd/#6\ufffd|\ufffd/#7\ufffd|\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE: method). You can save a subscription for that or use ${"[\ufffd#6\ufffd|\ufffd#7\ufffd|\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:takeUntil${"[\ufffd/#6\ufffd|\ufffd/#7\ufffd|\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE: like tools from ${"[\ufffd#6\ufffd|\ufffd#7\ufffd|\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:RxJs${"[\ufffd/#6\ufffd|\ufffd/#7\ufffd|\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#4\ufffd|\ufffd/#10\ufffd]"}:CLOSE_PARAGRAPH:`,D=e.\u0275\u0275i18nPostprocess(D),$=$localize`:␟07844fabcae9dbc5fe46cba91e975d09f6d9ce2a␟3466418148583049497:${"\ufffd#18\ufffd"}:START_TAG_CODE:TuiNotificationOptionsWithData${"\ufffd/#18\ufffd"}:CLOSE_TAG_CODE: interface: `,N=$localize`:␟ee84d3c7de163b96c6606f2d0af612463026e07d␟741899295101860675: Content `,P=$localize`:␟054f7afbbdc6ffea0fc80d8039aba9a2d5dba955␟435210747077371139: Status `,I=$localize`:␟5fb70b9672bd3114da4cc91ecf05bb7d571ea807␟9208464206964786295: Heading `,v=$localize`:␟f271223d9bb6bb62e01b785f8a9b0fefc37ab76e␟2636705087580276181: Input data of notification, type <I> `,b=$localize`:␟a96e2773c11aaa18bb3e8c5da1ebb43c9f750f02␟3778304849595610845: Autoclose after 3 seconds `,V=$localize`:␟12b3111611486481901517499f89b963c39f0e24␟8491523700308437284: Has close button `,G=$localize`:␟62b895a2a597c60a6ac9e4c819904b8eac08dbd5␟149058290855307515: Has icon `,U=$localize`:␟1429eb9bd9237455d53e9b7c4cef0d095719ab81␟2697985294473194370: Add ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiAlertModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into your app.module `,T=$localize`:␟f895bd0c51111cb2c8e68ceead5ada137ab6d5b2␟7179047044375359280: Use service ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:show${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: method and subscribe to ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:Observable${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE:`,T=e.\u0275\u0275i18nPostprocess(T),X=$localize`:␟6a766c93a51fcb02bf26ecacd479951c8f4b71fb␟8405226284519292539: To pass notification with custom content, you can use ${"\ufffd#14\ufffd"}:START_LINK:${"\ufffd#15\ufffd"}:START_TAG_CODE:your template${"\ufffd/#15\ufffd"}:CLOSE_TAG_CODE:${"\ufffd/#14\ufffd"}:CLOSE_LINK: . `,S=$localize`:␟b5030ce649b5c1e3eed72243728a574deb50a808␟5635433899377563977: You can also customize notification logic with a component. Use ${"[\ufffd#19\ufffd|\ufffd#20\ufffd|\ufffd#21\ufffd|\ufffd#22\ufffd|\ufffd#23\ufffd]"}:START_TAG_CODE:POLYMORPHEUS_CONTEXT${"[\ufffd/#19\ufffd|\ufffd/#20\ufffd|\ufffd/#21\ufffd|\ufffd/#22\ufffd|\ufffd/#23\ufffd]"}:CLOSE_TAG_CODE: into the component to get context input data and to output results. It has the following interface: ${"[\ufffd#19\ufffd|\ufffd#20\ufffd|\ufffd#21\ufffd|\ufffd#22\ufffd|\ufffd#23\ufffd]"}:START_TAG_CODE:TuiDialog<TuiAlertOptions<I>, O>${"[\ufffd/#19\ufffd|\ufffd/#20\ufffd|\ufffd/#21\ufffd|\ufffd/#22\ufffd|\ufffd/#23\ufffd]"}:CLOSE_TAG_CODE: , where ${"[\ufffd#19\ufffd|\ufffd#20\ufffd|\ufffd#21\ufffd|\ufffd#22\ufffd|\ufffd#23\ufffd]"}:START_TAG_CODE:O${"[\ufffd/#19\ufffd|\ufffd/#20\ufffd|\ufffd/#21\ufffd|\ufffd/#22\ufffd|\ufffd/#23\ufffd]"}:CLOSE_TAG_CODE: is output data type and ${"[\ufffd#19\ufffd|\ufffd#20\ufffd|\ufffd#21\ufffd|\ufffd#22\ufffd|\ufffd#23\ufffd]"}:START_TAG_CODE:I${"[\ufffd/#19\ufffd|\ufffd/#20\ufffd|\ufffd/#21\ufffd|\ufffd/#22\ufffd|\ufffd/#23\ufffd]"}:CLOSE_TAG_CODE: is input data type. Do not forget to add notification component into ${"[\ufffd#19\ufffd|\ufffd#20\ufffd|\ufffd#21\ufffd|\ufffd#22\ufffd|\ufffd#23\ufffd]"}:START_TAG_CODE:entryComponents${"[\ufffd/#19\ufffd|\ufffd/#20\ufffd|\ufffd/#21\ufffd|\ufffd/#22\ufffd|\ufffd/#23\ufffd]"}:CLOSE_TAG_CODE: of your module: `,S=e.\u0275\u0275i18nPostprocess(S),J=$localize`:␟ec507827c245a3395d58e897109309b8e3a99ac7␟1436172444558827801: Use ${"\ufffd#28\ufffd"}:START_TAG_CODE:new PolymorpheusComponent(CustomNotificationComponent)${"\ufffd/#28\ufffd"}:CLOSE_TAG_CODE: to show notification component with a service: `,z=$localize`:␟fd68ca58ffb42f8e63cf860073e9f9b9b30c0c70␟8335780216628034342: Use ${"\ufffd#33\ufffd"}:START_TAG_CODE:completeWith${"\ufffd/#33\ufffd"}:CLOSE_TAG_CODE: method to control notification from itself: `,j=$localize`:␟72bdc03d46093beeafa58136204fab3ed68241ec␟7759900700350680332: If you use it from lazy loading modules, do not forget to use ${"\ufffd#38\ufffd"}:START_TAG_CODE:new TuiComponentContent Injector${"\ufffd/#38\ufffd"}:CLOSE_TAG_CODE: of component where you call it `,w=$localize`:␟bad4e5730bd20ce05150c175f3923390d3e8bbf7␟8849888545184271088: Optionally use the ${"\ufffd#43\ufffd"}:START_TAG_CODE:TUI_NOTIFICATION_OPTIONS${"\ufffd/#43\ufffd"}:CLOSE_TAG_CODE: injection token to override the default options (works only in app.module.ts). `,[["header","AlertService","package","CORE","path","core/components/alert/alert.service.ts"],["pageTab",""],F,t,l,["id","text","heading","Text",3,"content"],["id","template","heading","Template",3,"content"],["id","component","heading","Component",3,"content"],["id","data","heading",a,3,"content"],["id","label","heading",u,3,"content"],["tuiButton","","type","button","size","m",3,"click"],[1,"b-full-width"],D,[1,"tui-space_bottom-4",3,"code"],["documentationPropertyName","content","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],$,["documentationPropertyName","status","documentationPropertyType","TuiNotification",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","label","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","data","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","autoClose","documentationPropertyType","boolean | number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hasCloseButton","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hasIcon","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],N,P,I,v,b,V,G,[1,"b-demo-steps"],U,["filename","app.module.ts",3,"code"],T,["filename","myComponent.component.ts",3,"code"],X,["routerLink","/services/alert-service","fragment","example-template","tuiLink",""],S,["filename","myComponent.module.ts",3,"code"],J,z,["filename","customNotification.component.ts",3,"code"],j,w]},template:function(t,l){1&t&&(e.\u0275\u0275elementStart(0,"tui-doc-page",0),e.\u0275\u0275template(1,me,18,5,"ng-template",1),e.\u0275\u0275template(2,Ce,26,11,"ng-template",1),e.\u0275\u0275template(3,_e,45,7,"ng-template",1),e.\u0275\u0275elementEnd())},directives:[W.q,B.n,H.f,Y,q,te,ne,ue,m.v,ie.c,se.z,ce.B,E.yS,M.V],styles:[".label[_ngcontent-%COMP%]{width:6.25rem}"],changeDetection:0}),n})(),ge=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[d.ez,C.FormsModule,s.fNO,s.zw7,f.Jyo,_.DC]]}),n})(),Oe=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[d.ez,C.FormsModule,s.zw7,s.fNO,s.jzK,_.DC]]}),n})(),Ae=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[d.ez,c.wq]]}),n})(),he=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[d.ez,s.EIu]]}),n})(),Re=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[d.ez,s.fNO,s.zw7,_.DC,c.wq,Ae,Oe,ge,he,f.Ltw,f.QfL,s.jzK,C.FormsModule,h.fV,E.Bz.forChild((0,h.Ve)(fe))]]}),n})()}}]);