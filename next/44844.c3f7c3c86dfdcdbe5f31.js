"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[44844],{44844:(ye,x,r)=>{r.r(x),r.d(x,{ExampleTuiLineDaysChartModule:()=>Ee});var d=r(12057),E=r(23738),I=r(12021),D=r(50179),A=r(78697),s=r(40287),y=r(66187),R=r(91068),h=r(88002),e=r(74788),H=r(88331),V=r(37159),U=r(57068),T=r(64762),O=r(92483),F=r(48706),L=r(70390),M=r(87748);function Y(n,a){if(1&n&&(e.\u0275\u0275elementStart(0,"tui-axes",3),e.\u0275\u0275element(1,"tui-line-days-chart",4),e.\u0275\u0275pipe(2,"async"),e.\u0275\u0275elementEnd()),2&n){const t=a.ngIf,o=e.\u0275\u0275nextContext();e.\u0275\u0275property("verticalLines",t.length)("horizontalLines",4)("axisXLabels",t),e.\u0275\u0275advance(1),e.\u0275\u0275property("height",200)("value",o.value)("yStringify",o.yStringify)("xStringify",e.\u0275\u0275pipeBind1(2,7,o.xStringify$))}}class g{constructor(a){this.months$=a,this.range=new s.VRe(s.TU1.currentLocal(),s.TU1.currentLocal().append({year:1})),this.maxLength={month:12},this.xStringify$=this.months$.pipe((0,h.U)(t=>({month:o,day:i})=>`${t[o]}, ${i}`)),this.yStringify=t=>`${(10*t).toLocaleString("en-US",{maximumFractionDigits:0})} $`}get value(){return this.computeValue(this.range)}computeLabels$({from:a,to:t}){return this.months$.pipe((0,h.U)(o=>Array.from({length:s.qld.lengthBetween(a,t)+1},(i,l)=>o[a.append({month:l}).month])))}computeValue({from:a,to:t}){return new Array(s.TU1.lengthBetween(a,t)+1).fill(0).reduce((o,i,l)=>[...o,[a.append({day:l}),(l?o[l-1][1]:100)+10*Math.random()-5]],[])}}g.\u0275fac=function(a){return new(a||g)(e.\u0275\u0275directiveInject(y.$Rv))},g.\u0275cmp=e.\u0275\u0275defineComponent({type:g,selectors:[["tui-line-days-chart-example-1"]],decls:5,vars:5,consts:[[1,"b-form"],[3,"maxLength","ngModel","ngModelChange"],["class","axes",3,"verticalLines","horizontalLines","axisXLabels",4,"ngIf"],[1,"axes",3,"verticalLines","horizontalLines","axisXLabels"],[1,"chart",3,"height","value","yStringify","xStringify"]],template:function(a,t){1&a&&(e.\u0275\u0275elementStart(0,"p",0),e.\u0275\u0275elementStart(1,"tui-input-date-range",1),e.\u0275\u0275listener("ngModelChange",function(i){return t.range=i}),e.\u0275\u0275text(2," Range "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(3,Y,3,9,"tui-axes",2),e.\u0275\u0275pipe(4,"async")),2&a&&(e.\u0275\u0275advance(1),e.\u0275\u0275property("maxLength",t.maxLength)("ngModel",t.range),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",e.\u0275\u0275pipeBind1(4,3,t.computeLabels$(t.range))))},directives:[O.H,F.d,E.NgControlStatus,E.NgModel,d.O5,L.v,M.r],pipes:[d.Ov],styles:[".axes[_ngcontent-%COMP%]{height:12.5rem;color:#bc71c9}"],changeDetection:0}),(0,T.gn)([s.UMq],g.prototype,"computeLabels$",null),(0,T.gn)([s.UMq],g.prototype,"computeValue",null);var b=r(79121),X=r(69775),G=r(19288),J=r(58413),S=r(25917);let z=(()=>{class n{constructor(t){this.months$=t}transform({from:t,to:o}){const i=s.TU1.lengthBetween(t,o);if(i>90)return this.months$.pipe((0,h.U)(c=>Array.from({length:s.qld.lengthBetween(t,o)+1},(C,f)=>c[t.append({month:f}).month])));const l=Array.from({length:i},(c,C)=>t.append({day:C})),_=function(n){return n.filter(a=>!a.dayOfWeek()).map(String)}(l),u=l.map(String);return(0,S.of)(i>60?N(_):i>14?_:i>7?N(u):u)}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(y.$Rv,16))},n.\u0275pipe=e.\u0275\u0275definePipe({name:"labels",type:n,pure:!0}),n})();function N(n){return n.filter((a,t)=>!(t%2))}var W=r(47305),w=r(35271);function j(n,a){if(1&n&&(e.\u0275\u0275elementStart(0,"span",8),e.\u0275\u0275elementStart(1,"small",9),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&n){const t=a.index;e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1("Chart ",t+1,"")}}function K(n,a){if(1&n&&(e.\u0275\u0275element(0,"tui-line-days-chart",14),e.\u0275\u0275pipe(1,"tuiFilter")),2&n){const t=a.$implicit,o=e.\u0275\u0275nextContext(3);e.\u0275\u0275property("height",200)("value",e.\u0275\u0275pipeBind3(1,2,t,o.filter,o.range))}}function Q(n,a){if(1&n&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,K,2,6,"tui-line-days-chart",13),e.\u0275\u0275elementContainerEnd()),2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",t.days)}}function Z(n,a){if(1&n&&(e.\u0275\u0275element(0,"tui-line-chart",16),e.\u0275\u0275pipe(1,"tuiMapper"),e.\u0275\u0275pipe(2,"tuiFilter")),2&n){const t=a.$implicit,o=e.\u0275\u0275nextContext(3);e.\u0275\u0275property("height",200)("width",o.getWidth(o.range))("value",e.\u0275\u0275pipeBind3(1,3,e.\u0275\u0275pipeBind3(2,7,t,o.filter,o.range),o.toNumbers,o.range))}}function k(n,a){if(1&n&&e.\u0275\u0275template(0,Z,3,11,"tui-line-chart",15),2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("ngForOf",t.days)}}function q(n,a){if(1&n&&(e.\u0275\u0275elementStart(0,"tui-axes",10),e.\u0275\u0275template(1,Q,2,1,"ng-container",11),e.\u0275\u0275template(2,k,1,1,"ng-template",null,12,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275elementEnd()),2&n){const t=a.ngIf,o=e.\u0275\u0275reference(3),i=e.\u0275\u0275nextContext(),l=e.\u0275\u0275reference(14);e.\u0275\u0275property("verticalLines",t.length)("horizontalLines",4)("axisXLabels",t)("tuiLineChartHint",l),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.getWidth(i.show)>90)("ngIfElse",o)}}function ee(n,a){if(1&n&&(e.\u0275\u0275elementStart(0,"div",8),e.\u0275\u0275elementStart(1,"span",18),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&n){const t=a.$implicit;e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1("$",t[1].toFixed(0),"")}}function te(n,a){if(1&n&&(e.\u0275\u0275elementStart(0,"div",17),e.\u0275\u0275elementStart(1,"strong"),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div"),e.\u0275\u0275template(4,ee,3,1,"div",5),e.\u0275\u0275elementEnd()),2&n){const t=a.$implicit,o=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(o.getDate(t[0][0],o.range.from)),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngForOf",t)}}class m{constructor(){this.data=new s.VRe(s.TU1.currentLocal(),s.TU1.currentLocal().append({month:5})),this.show=this.data,this.days=this.computeArrays(this.data),this.maxLength={month:6},this.filter=([a],{from:t,to:o})=>a.daySameOrAfter(t)&&a.daySameOrBefore(o),this.toNumbers=(a,{from:t})=>a.map(([o,i])=>[s.TU1.lengthBetween(t,o),i])}get range(){return this.computeRange(this.show)}getWidth({from:a,to:t}){return s.TU1.lengthBetween(a,t)}getDate(a,t){return a instanceof s.TU1?a:t.append({day:a})}onDataChange(a){this.days=this.computeArrays(a)}computeRange(a){const{from:t,to:o}=a,i=s.TU1.lengthBetween(t,o),l=t.dayOfWeek(),_=o.dayOfWeek(),u=l?t.append({day:7-l}):t,c=_?o.append({day:7-_}):o,C=s.TU1.lengthBetween(u,c);return i>60?new s.VRe(u,c.append({day:C%14})):i>14?new s.VRe(u,c):i>7?new s.VRe(t,o.append({day:i%2})):a}computeData({from:a,to:t},o){return new Array(s.TU1.lengthBetween(a,t)+1).fill(0).reduce((i,l,_)=>[...i,[a.append({day:_}),Math.max((_?i[_-1][1]:o)+10*Math.random()-5,0)]],[]).filter(([i])=>i.dayOfWeek()<5)}computeArrays(a){return[this.computeData(a,100),this.computeData(a,75),this.computeData(a,50)]}}m.\u0275fac=function(a){return new(a||m)},m.\u0275cmp=e.\u0275\u0275defineComponent({type:m,selectors:[["tui-line-days-chart-example-2"]],decls:15,vars:10,consts:function(){let n;return n=$localize`:␟54790dc0dc9d3d244bf99ebbb89d1a8a62195075␟6846673182472139923:${"\ufffd#2\ufffd"}:START_TAG_CODE:TuiLineDaysChart${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: is used to show data of several months to simplify working with different number of days in months
`,[n,[1,"controls"],[1,"b-form",3,"maxLength","ngModel","ngModelChange"],[1,"b-form","tui-space_left-4",3,"maxLength","ngModel","ngModelChange"],[1,"legend"],["class","item",4,"ngFor","ngForOf"],["class","axes",3,"verticalLines","horizontalLines","axisXLabels","tuiLineChartHint",4,"ngIf"],["hint",""],[1,"item"],[1,"name"],[1,"axes",3,"verticalLines","horizontalLines","axisXLabels","tuiLineChartHint"],[4,"ngIf","ngIfElse"],["line",""],["class","chart",3,"height","value",4,"ngFor","ngForOf"],[1,"chart",3,"height","value"],["class","chart",3,"height","width","value",4,"ngFor","ngForOf"],[1,"chart",3,"height","width","value"],[1,"tui-space_bottom-2"],[1,"value"]]},template:function(a,t){1&a&&(e.\u0275\u0275elementStart(0,"tui-notification"),e.\u0275\u0275i18nStart(1,0),e.\u0275\u0275element(2,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"p",1),e.\u0275\u0275elementStart(4,"tui-input-date-range",2),e.\u0275\u0275listener("ngModelChange",function(i){return t.data=i})("ngModelChange",function(i){return t.onDataChange(i)}),e.\u0275\u0275text(5," Data "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"tui-input-date-range",3),e.\u0275\u0275listener("ngModelChange",function(i){return t.show=i}),e.\u0275\u0275text(7," Visible range "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"p",4),e.\u0275\u0275template(9,j,3,1,"span",5),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(10,q,4,6,"tui-axes",6),e.\u0275\u0275pipe(11,"async"),e.\u0275\u0275pipe(12,"labels"),e.\u0275\u0275template(13,te,5,2,"ng-template",null,7,e.\u0275\u0275templateRefExtractor)),2&a&&(e.\u0275\u0275advance(4),e.\u0275\u0275property("maxLength",t.maxLength)("ngModel",t.data),e.\u0275\u0275advance(2),e.\u0275\u0275property("maxLength",t.maxLength)("ngModel",t.show),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngForOf",t.days),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",e.\u0275\u0275pipeBind1(11,6,e.\u0275\u0275pipeBind1(12,8,t.show))))},directives:[b.L,O.H,F.d,E.NgControlStatus,E.NgModel,d.sg,d.O5,L.v,X.T,G.w,M.r,J.V],pipes:[d.Ov,z,W.S,w.c],styles:['.axes[_ngcontent-%COMP%]{height:12.5rem}.controls[_ngcontent-%COMP%]{display:flex}.controls[_ngcontent-%COMP%]   .b-form[_ngcontent-%COMP%]{flex:1}.legend[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.item[_ngcontent-%COMP%]{color:var(--tui-support-01);display:flex;align-items:center;margin:0 .75rem}.item[_ngcontent-%COMP%]:first-child{color:var(--tui-support-08)}.item[_ngcontent-%COMP%]:last-child{color:var(--tui-support-12)}.item[_ngcontent-%COMP%]:before{content:"";border-bottom:.125rem solid;width:1rem;margin-right:.5rem}.name[_ngcontent-%COMP%]{color:var(--tui-text-01)}.value[_ngcontent-%COMP%]{color:var(--tui-text-01-night)}.chart[_ngcontent-%COMP%]{color:var(--tui-support-01);position:absolute;top:0;left:0;width:100%;height:100%}.chart[_ngcontent-%COMP%]:first-child{color:var(--tui-support-08)}.chart[_ngcontent-%COMP%]:last-child{color:var(--tui-support-12)}'],changeDetection:0}),(0,T.gn)([s.UMq],m.prototype,"getWidth",null),(0,T.gn)([s.UMq],m.prototype,"getDate",null),(0,T.gn)([s.UMq],m.prototype,"computeRange",null),(0,T.gn)([s.UMq],m.prototype,"computeData",null);var ne=r(31823),ae=r(44051),oe=r(17023),ie=r(76349);function re(n,a){if(1&n&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275i18n(1,2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"tui-doc-example",3),e.\u0275\u0275element(3,"tui-line-days-chart-example-1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"tui-doc-example",4),e.\u0275\u0275element(5,"tui-line-days-chart-example-2"),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275property("content",t.example1),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",t.example2)}}function le(n,a){1&n&&e.\u0275\u0275i18n(0,15)}function se(n,a){1&n&&(e.\u0275\u0275i18nStart(0,16),e.\u0275\u0275element(1,"code"),e.\u0275\u0275element(2,"code"),e.\u0275\u0275i18nEnd())}function _e(n,a){1&n&&e.\u0275\u0275i18n(0,17)}function pe(n,a){1&n&&e.\u0275\u0275i18n(0,18)}function me(n,a){1&n&&e.\u0275\u0275i18n(0,19)}function ue(n,a){1&n&&e.\u0275\u0275i18n(0,20)}function ce(n,a){1&n&&e.\u0275\u0275i18n(0,21)}function de(n,a){1&n&&e.\u0275\u0275i18n(0,22)}const ge=function(){return[]};function Ce(n,a){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tui-doc-demo"),e.\u0275\u0275elementStart(1,"tui-axes",5),e.\u0275\u0275pipe(2,"async"),e.\u0275\u0275element(3,"tui-line-days-chart",6),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"tui-doc-documentation"),e.\u0275\u0275template(5,le,1,0,"ng-template",7),e.\u0275\u0275listener("documentationPropertyValueChange",function(i){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().dots=i}),e.\u0275\u0275template(6,se,3,0,"ng-template",8),e.\u0275\u0275pipe(7,"async"),e.\u0275\u0275listener("documentationPropertyValueChange",function(i){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().hintContent=i}),e.\u0275\u0275template(8,_e,1,0,"ng-template",9),e.\u0275\u0275listener("documentationPropertyValueChange",function(i){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().height=i}),e.\u0275\u0275template(9,pe,1,0,"ng-template",10),e.\u0275\u0275listener("documentationPropertyValueChange",function(i){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().y=i}),e.\u0275\u0275template(10,me,1,0,"ng-template",11),e.\u0275\u0275listener("documentationPropertyValueChange",function(i){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().smoothingFactor=i}),e.\u0275\u0275template(11,ue,1,0,"ng-template",12),e.\u0275\u0275listener("documentationPropertyValueChange",function(i){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().value=i}),e.\u0275\u0275template(12,ce,1,0,"ng-template",13),e.\u0275\u0275pipe(13,"async"),e.\u0275\u0275listener("documentationPropertyValueChange",function(i){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().xStringify=i}),e.\u0275\u0275template(14,de,1,0,"ng-template",14),e.\u0275\u0275listener("documentationPropertyValueChange",function(i){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().yStringify=i}),e.\u0275\u0275elementEnd()}if(2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("verticalLines",3)("horizontalLines",4)("axisXLabels",e.\u0275\u0275pipeBind1(2,23,t.labels$)||e.\u0275\u0275pureFunction0(29,ge)),e.\u0275\u0275advance(2),e.\u0275\u0275property("value",t.value)("y",t.y)("height",t.height)("hintContent",t.hintContent)("xStringify",t.xStringify)("yStringify",t.yStringify)("smoothingFactor",t.smoothingFactor)("dots",t.dots),e.\u0275\u0275advance(2),e.\u0275\u0275property("documentationPropertyValue",t.dots),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",e.\u0275\u0275pipeBind1(7,25,t.hintContentVariants$))("documentationPropertyValue",t.hintContent),e.\u0275\u0275advance(2),e.\u0275\u0275property("documentationPropertyValue",t.height),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.y),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.smoothingFactor),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",t.valueVariants)("documentationPropertyValue",t.value),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",e.\u0275\u0275pipeBind1(13,27,t.xStringifyVariants$))("documentationPropertyValue",t.xStringify),e.\u0275\u0275advance(2),e.\u0275\u0275property("documentationPropertyValues",t.yStringifyVariants)("documentationPropertyValue",t.yStringify)}}function he(n,a){if(1&n&&(e.\u0275\u0275elementStart(0,"ol",23),e.\u0275\u0275elementStart(1,"li"),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275i18nStart(3,24),e.\u0275\u0275element(4,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"tui-doc-code",25),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"li"),e.\u0275\u0275elementStart(7,"p"),e.\u0275\u0275i18n(8,26),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(9,"tui-doc-code",27),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("code",t.exampleModule),e.\u0275\u0275advance(4),e.\u0275\u0275property("code",t.exampleHtml)}}let Te=(()=>{class n{constructor(t){this.months$=t,this.exampleModule=r.e(83405).then(r.t.bind(r,83405,17)),this.exampleHtml=r.e(42231).then(r.t.bind(r,42231,17)),this.example1={TypeScript:r.e(18807).then(r.t.bind(r,18807,17)),HTML:r.e(23889).then(r.t.bind(r,23889,17)),LESS:r.e(43743).then(r.t.bind(r,43743,17))},this.example2={TypeScript:r.e(28904).then(r.t.bind(r,28904,17)),HTML:r.e(66161).then(r.t.bind(r,66161,17)),LESS:r.e(27918).then(r.t.bind(r,27918,17)),"pipe.ts":r.e(9361).then(r.t.bind(r,9361,17))},this.valueVariants=[new Array(91).fill(0).reduce((o,i,l)=>[...o,[new s.TU1(2020,0,1).append({day:l}),(l?o[l-1][1]:100)+20*Math.random()-10]],[]),[[new s.TU1(2020,1,10),10],[new s.TU1(2020,1,15),150],[new s.TU1(2020,1,17),10],[new s.TU1(2020,1,20),10],[new s.TU1(2020,1,25),150],[new s.TU1(2020,1,27),10]]],this.value=this.valueVariants[0],this.labels$=this.months$.pipe((0,h.U)(o=>Array.from({length:3},(i,l)=>o[l]))),this.yStringifyVariants=[o=>`${(10*o).toLocaleString("en-US",{maximumFractionDigits:0})} $`],this.xStringifyVariants$=this.months$.pipe((0,h.U)(o=>[({month:i,day:l})=>`${o[i]}, ${l}`])),this.hintContentVariants$=this.months$.pipe((0,h.U)(o=>["",({$implicit:i})=>`${o[i[0].month]}, ${i[0].day}\n${(10*i[1]).toLocaleString("en-US",{maximumFractionDigits:0})} $`])),this.yStringify=null,this.xStringify=null,this.hintContent="",this.dots=!1,this.smoothingFactor=0,this.y=0,this.height=200}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(y.$Rv))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["example-tui-line-days-chart"]],decls:4,vars:0,consts:function(){let a,t,o,i,l,_,u,c,C,f,P,v,$;return a=$localize`:␟8b3686ee0181ab81f9ff51025cf35b0a03e625e7␟590759144044987818:Line chart but for days`,t=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,o=$localize`:␟e75362b1b5b0d9038fcafc9670ef18bba17e61d0␟7049130908974374044:Complex`,i=$localize`:␟c4d83e70435953f62ccae3cbf6016420df475424␟4740076445307023096: Show dots on chart `,l=$localize`:␟bedcb3b37d5f24d2f77a8c3cb483fdf13759efd7␟6338178794566893901: Content of hint for hover. It has ${"[\ufffd#1\ufffd|\ufffd#2\ufffd]"}:START_TAG_CODE:$implicit${"[\ufffd/#1\ufffd|\ufffd/#2\ufffd]"}:CLOSE_TAG_CODE: in context with a tuple ${"[\ufffd#1\ufffd|\ufffd#2\ufffd]"}:START_TAG_CODE:[TuiDay, number]${"[\ufffd/#1\ufffd|\ufffd/#2\ufffd]"}:CLOSE_TAG_CODE:`,l=e.\u0275\u0275i18nPostprocess(l),_=$localize`:␟1148b851b9d07a503fe83074185fada4c56bc932␟4329060505650601384: Axis Y range, pixel scale is 1:1 `,u=$localize`:␟f33f8b3f2cfd7ef519194cc1ae13fc8fb91fb8d7␟9084820970498059965: Start of Y axis `,c=$localize`:␟dbcff3658adbc7241a4e120d0403b9b59203cf6f␟7622132382477188848: Smoothing factor from 0 to 99 `,C=$localize`:␟2eb20b3adec45476e892d48624603eec29f04ca7␟620827304048157009: Array of data `,f=$localize`:␟a95376fd00f2c7de89ef1205191f686e9bb93ceb␟8840512580092681625: Function to stringify a value number to a string in axis X hint `,P=$localize`:␟aa03eea8f292367391947b1ee6d45d8e5fe1c884␟8439308556823064311: Function to stringify a value number to a string in axis Y hint `,v=$localize`:␟3faf4a45d660c91f821e2f11c0184ec80a25404a␟5226796676451500758: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiLineDaysChartModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,$=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","LineDaysChart","package","ADDON-CHARTS","type","components"],["pageTab",""],a,["id","base","heading",t,3,"content"],["id","complex","heading",o,3,"content"],[1,"axes",3,"verticalLines","horizontalLines","axisXLabels"],[3,"value","y","height","hintContent","xStringify","yStringify","smoothingFactor","dots"],["documentationPropertyName","dots","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hintContent","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","height","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","y","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","smoothingFactor","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","value","documentationPropertyMode","input","documentationPropertyType","[TuiDay, number][]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","xStringify","documentationPropertyMode","input","documentationPropertyType","TuiStringHandler<TuiDay> | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","yStringify","documentationPropertyMode","input","documentationPropertyType","TuiStringHandler<number> | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],i,l,_,u,c,C,f,P,[1,"b-demo-steps"],v,["filename","myComponent.module.ts",3,"code"],$,["filename","myComponent.template.html",3,"code"]]},template:function(t,o){1&t&&(e.\u0275\u0275elementStart(0,"tui-doc-page",0),e.\u0275\u0275template(1,re,6,2,"ng-template",1),e.\u0275\u0275template(2,Ce,15,30,"ng-template",1),e.\u0275\u0275template(3,he,10,2,"ng-template",1),e.\u0275\u0275elementEnd())},directives:[H.q,V.n,U.f,g,m,ne.F,L.v,M.r,ae.z,oe.B,ie.c],pipes:[d.Ov],styles:[".axes[_ngcontent-%COMP%]{height:12.5rem;width:45.5rem;color:#bc71c9}"],changeDetection:0}),n})(),Ee=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[d.ez,E.FormsModule,D.Ep,R.Jyo,D.I2,s.I1h,y.HiG,s.pLW,D.SX,R.sR_,A.fV,I.Bz.forChild((0,A.Ve)(Te))]]}),n})()}}]);