(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[36378],{36378:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiArcChartModule:()=>Q});var a=n(12057),o=n(24751),i=n(33982),u=n(50179),r=n(23121),c=n(29851),m=n(55908),l=n(74788),p=n(88331),d=n(37159),s=n(57068),x=n(65009),h=n(10383),v=n(48001),g=n(16996);let y=(()=>{class e{constructor(){this.value=[40,30,20,10],this.activeItemIndex=NaN}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=l.Xpm({type:e,selectors:[["tui-arc-chart-example-1"]],decls:13,vars:8,consts:[[1,"b-form",3,"ngModel","ngModelChange"],[1,"wrapper"],["size","m",1,"tui-space_right-4",3,"value","activeItemIndex","activeItemIndexChange"],["size","l",1,"tui-space_right-4",3,"value","activeItemIndex","activeItemIndexChange"],["size","xl",1,"tui-space_right-4",3,"value","activeItemIndex","activeItemIndexChange"],[3,"value"]],template:function(e,t){1&e&&(l.TgZ(0,"tui-input-count",0),l.NdJ("ngModelChange",(function(e){return t.activeItemIndex=e})),l._uU(1," activeItemIndex\n"),l.qZA(),l.TgZ(2,"div",1),l.TgZ(3,"tui-arc-chart",2),l.NdJ("activeItemIndexChange",(function(e){return t.activeItemIndex=e})),l._uU(4," Total value "),l.qZA(),l.TgZ(5,"tui-arc-chart",3),l.NdJ("activeItemIndexChange",(function(e){return t.activeItemIndex=e})),l._uU(6," Total value "),l.TgZ(7,"div"),l._uU(8,"Label"),l.qZA(),l.qZA(),l.TgZ(9,"tui-arc-chart",4),l.NdJ("activeItemIndexChange",(function(e){return t.activeItemIndex=e})),l._UZ(10,"tui-money",5),l.TgZ(11,"div"),l._uU(12,"Not bad!"),l.qZA(),l.qZA(),l.qZA()),2&e&&(l.Q6J("ngModel",t.activeItemIndex),l.xp6(3),l.Q6J("value",t.value)("activeItemIndex",t.activeItemIndex),l.xp6(2),l.Q6J("value",t.value)("activeItemIndex",t.activeItemIndex),l.xp6(4),l.Q6J("value",t.value)("activeItemIndex",t.activeItemIndex),l.xp6(1),l.Q6J("value",123456))},directives:[x.E,h.a,o.JJ,o.On,v.O,g.o],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;margin-top:1rem;--tui-chart-0: var(--tui-support-12);--tui-chart-1: var(--tui-support-01);--tui-chart-2: var(--tui-support-03);--tui-chart-3: var(--tui-support-09)}"],changeDetection:0}),e})();var I=n(68807);const f=function(){return[40]},P=function(){return[20]};let Z=(()=>{class e{constructor(){this.labels=["Food","Cafe","Open Source","Taxi","other"],this.value=[13769,12367,10172,3018,2592],this.sum=(0,I.tuiSum)(...this.value)}getValue(e){return Number.isNaN(e)?this.sum:this.value[e]}getLabel(e){return Number.isNaN(e)?"Total":this.labels[e]}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=l.Xpm({type:e,selectors:[["tui-arc-chart-example-2"]],decls:6,vars:4,consts:[[1,"wrapper"],["size","l",3,"value"],["size","l","minLabel","","maxLabel","",1,"stacked",3,"value"]],template:function(e,t){1&e&&(l.TgZ(0,"div",0),l._UZ(1,"tui-arc-chart",1),l.TgZ(2,"tui-arc-chart",2),l._uU(3," +20% "),l.TgZ(4,"div"),l._uU(5,"For filling in last name"),l.qZA(),l.qZA(),l.qZA()),2&e&&(l.xp6(1),l.Q6J("value",l.DdM(2,f)),l.xp6(1),l.Q6J("value",l.DdM(3,P)))},directives:[v.O],styles:[".wrapper[_ngcontent-%COMP%]{position:relative;--tui-chart-0: var(--tui-support-03)}.stacked[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;--tui-secondary: transparent;--tui-chart-0: var(--tui-support-04)}"],changeDetection:0}),e})();var C=n(20714),T=n(54476),V=n(17023),b=n(76349);function N(e,t){if(1&e&&(l.TgZ(0,"tui-doc-example",2),l._UZ(1,"tui-arc-chart-example-1"),l.qZA(),l.TgZ(2,"tui-doc-example",3),l._UZ(3,"tui-arc-chart-example-2"),l.qZA()),2&e){const e=l.oxw();l.Q6J("content",e.example1),l.xp6(2),l.Q6J("content",e.example2)}}function _(e,t){1&e&&l._uU(0," Maximum value ")}function M(e,t){1&e&&l._uU(0," Label for maximum value ")}function J(e,t){1&e&&l._uU(0," Label for minimum value ")}function A(e,t){1&e&&l._uU(0," Size ")}function L(e,t){1&e&&l._uU(0," Value ")}function q(e,t){1&e&&l._uU(0," Index of selected arc ")}function w(e,t){if(1&e){const e=l.EpF();l.TgZ(0,"tui-doc-demo"),l.TgZ(1,"tui-arc-chart",4),l.NdJ("activeItemIndexChange",(function(t){return l.CHM(e),l.oxw().activeItemIndex=t})),l.qZA(),l.qZA(),l.TgZ(2,"tui-doc-documentation"),l.YNc(3,_,1,0,"ng-template",5),l.NdJ("documentationPropertyValueChange",(function(t){return l.CHM(e),l.oxw().max=t})),l.YNc(4,M,1,0,"ng-template",6),l.NdJ("documentationPropertyValueChange",(function(t){return l.CHM(e),l.oxw().maxLabel=t})),l.YNc(5,J,1,0,"ng-template",7),l.NdJ("documentationPropertyValueChange",(function(t){return l.CHM(e),l.oxw().minLabel=t})),l.YNc(6,A,1,0,"ng-template",8),l.NdJ("documentationPropertyValueChange",(function(t){return l.CHM(e),l.oxw().size=t})),l.YNc(7,L,1,0,"ng-template",9),l.NdJ("documentationPropertyValueChange",(function(t){return l.CHM(e),l.oxw().value=t})),l.YNc(8,q,1,0,"ng-template",10),l.NdJ("documentationPropertyValueChange",(function(t){return l.CHM(e),l.oxw().activeItemIndex=t})),l.qZA()}if(2&e){const e=l.oxw();l.xp6(1),l.Q6J("max",e.max)("maxLabel",e.maxLabel)("minLabel",e.minLabel)("size",e.size)("value",e.value)("activeItemIndex",e.activeItemIndex),l.xp6(2),l.Q6J("documentationPropertyValues",e.maxVariants)("documentationPropertyValue",e.max),l.xp6(1),l.Q6J("documentationPropertyValue",e.maxLabel),l.xp6(1),l.Q6J("documentationPropertyValue",e.minLabel),l.xp6(1),l.Q6J("documentationPropertyValues",e.sizeVariants)("documentationPropertyValue",e.size),l.xp6(1),l.Q6J("documentationPropertyValues",e.valueVariants)("documentationPropertyValue",e.value),l.xp6(1),l.Q6J("documentationPropertyValue",e.activeItemIndex)}}function z(e,t){if(1&e&&(l.TgZ(0,"ol",11),l.TgZ(1,"li"),l.TgZ(2,"p"),l._uU(3," Import "),l.TgZ(4,"code"),l._uU(5,"TuiArcChartModule"),l.qZA(),l._uU(6," into a module where you want to use our component "),l.qZA(),l._UZ(7,"tui-doc-code",12),l.qZA(),l.TgZ(8,"li"),l.TgZ(9,"p"),l._uU(10,"Add to the template:"),l.qZA(),l._UZ(11,"tui-doc-code",13),l.qZA(),l.qZA()),2&e){const e=l.oxw();l.xp6(7),l.Q6J("code",e.exampleModule),l.xp6(4),l.Q6J("code",e.exampleHtml)}}let U=(()=>{class e{constructor(){this.exampleModule=n.e(85776).then(n.t.bind(n,85776,17)),this.exampleHtml=n.e(1557).then(n.t.bind(n,1557,17)),this.example1={TypeScript:n.e(96278).then(n.t.bind(n,96278,17)),HTML:n.e(57749).then(n.t.bind(n,57749,17)),LESS:n.e(63570).then(n.t.bind(n,63570,17))},this.example2={TypeScript:n.e(6726).then(n.t.bind(n,66156,17)),HTML:n.e(35868).then(n.t.bind(n,35868,17)),LESS:n.e(36077).then(n.t.bind(n,36077,17))},this.valueVariants=[[42],[40,30,20,10],[13769,10172,3018,2592]],this.value=this.valueVariants[0],this.maxVariants=[100,1e4,5e4],this.max=this.maxVariants[0],this.sizeVariants=["m","l","xl"],this.size=this.sizeVariants[0],this.minLabel="0%",this.maxLabel="100%",this.activeItemIndex=NaN}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=l.Xpm({type:e,selectors:[["example-tui-arc-chart"]],decls:4,vars:0,consts:[["header","ArcChart","package","ADDON-CHARTS","type","components"],["pageTab",""],["id","sizes","heading","Sizes",3,"content"],["id","stacked","heading","Stacked",3,"content"],[1,"chart",3,"max","maxLabel","minLabel","size","value","activeItemIndex","activeItemIndexChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","maxLabel","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","minLabel","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeXL",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","value","documentationPropertyMode","input","documentationPropertyType","readonly number[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","activeItemIndex","documentationPropertyMode","input-output","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(l.TgZ(0,"tui-doc-page",0),l.YNc(1,N,4,2,"ng-template",1),l.YNc(2,w,9,15,"ng-template",1),l.YNc(3,z,12,2,"ng-template",1),l.qZA())},directives:[p.q,d.n,s.f,y,Z,C.F,v.O,T.z,V.B,b.c],styles:[".chart[_ngcontent-%COMP%]{margin:0 auto}"],changeDetection:0}),e})(),Q=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=l.oAB({type:e}),e.ɵinj=l.cJS({imports:[[a.ez,i.Bz,o.u5,m.TuiInputCountModule,u.TuiArcChartModule,r.TuiMoneyModule,c.fV,i.Bz.forChild((0,c.Ve)(U))]]}),e})()}}]);