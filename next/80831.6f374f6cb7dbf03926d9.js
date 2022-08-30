"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[80831],{80831:(E,a,t)=>{t.r(a),t.d(a,{JestModule:()=>p});var i=t(12057),r=t(12021),d=t(78697),m=t(66187),e=t(74788),c=t(88331),u=t(76349);let f=(()=>{class n{constructor(){this.jestConfigJs=t.e(32033).then(t.t.bind(t,32033,17)),this.packageJson=t.e(91173).then(t.t.bind(t,91173,17)),this.setupJestJs=t.e(83380).then(t.t.bind(t,83380,17))}}return n.\u0275fac=function(l){return new(l||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["jest"]],decls:67,vars:3,consts:function(){let o;return o=$localize`:␟1c96647f8f7cd3dc5f81a447e9fd714d3fd48ee3␟6404088366042352039:Jest`,[["header",o],[1,"tui-list"],[1,"tui-list__item"],["filename","jest.config.js",3,"code"],["filename","package.json",3,"code"],["filename","setup-jest.js",3,"code"]]},template:function(l,s){1&l&&(e.\u0275\u0275elementStart(0,"tui-doc-page",0),e.\u0275\u0275elementStart(1,"p"),e.\u0275\u0275text(2," If you use Jest to run your tests, you need additional configuration because Jest is running on a Node.js emulator. "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"p"),e.\u0275\u0275text(4," Taiga UI uses "),e.\u0275\u0275elementStart(5,"code"),e.\u0275\u0275text(6,"@ng-web-apis/common"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(7," to avoid accessing global variables like "),e.\u0275\u0275elementStart(8,"code"),e.\u0275\u0275text(9,"window"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(10," or "),e.\u0275\u0275elementStart(11,"code"),e.\u0275\u0275text(12,"navigator"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(13," directly. Which requires Server Side Rendering (SSR) with the help of its sister library "),e.\u0275\u0275elementStart(14,"code"),e.\u0275\u0275text(15,"@ng-web-apis/universal"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(16," for Jest to run properly. "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"p"),e.\u0275\u0275text(18," Otherwise, you're gonna face errors like "),e.\u0275\u0275elementStart(19,"code"),e.\u0275\u0275text(20,"ReferenceError: IntersectionObserver is not defined"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(21,"h2"),e.\u0275\u0275text(22," Using "),e.\u0275\u0275elementStart(23,"code"),e.\u0275\u0275text(24,"@angular-builders/jest"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(25," or "),e.\u0275\u0275elementStart(26,"code"),e.\u0275\u0275text(27,"jest-preset-angular"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(28,"p"),e.\u0275\u0275text(29,"If you're using one of these libraries. You can follow the following steps :"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(30,"ol",1),e.\u0275\u0275elementStart(31,"li",2),e.\u0275\u0275text(32," Install "),e.\u0275\u0275elementStart(33,"code"),e.\u0275\u0275text(34,"npm i @ng-web-apis/universal --save-dev"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(35," (install it as a devDependency only if you will use it for Jest, otherwise install it as a regular dependency). Install 2.0 and above for Taiga UI 3.0 and above, otherwise install 1.x.x. "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(36,"li",2),e.\u0275\u0275text(37," Add a "),e.\u0275\u0275elementStart(38,"code"),e.\u0275\u0275text(39,"setupFilesAfterEnv"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(40," property to your "),e.\u0275\u0275elementStart(41,"code"),e.\u0275\u0275text(42,"jest.config.js"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(43," or "),e.\u0275\u0275elementStart(44,"code"),e.\u0275\u0275text(45,"package.json"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(46," jest configuration (depending on where your configuration is) with the path to "),e.\u0275\u0275elementStart(47,"code"),e.\u0275\u0275text(48,"setup-jest.js"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(49," if you have not already. "),e.\u0275\u0275element(50,"tui-doc-code",3),e.\u0275\u0275text(51," or "),e.\u0275\u0275element(52,"tui-doc-code",4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(53,"li",2),e.\u0275\u0275text(54," Create the file "),e.\u0275\u0275elementStart(55,"code"),e.\u0275\u0275text(56,"setup-jest.js"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(57," (wherever you want as long as it's at the path referenced above) if you have not already. For example here at the root of the project. "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(58,"li",2),e.\u0275\u0275text(59," Add the following line to the "),e.\u0275\u0275elementStart(60,"code"),e.\u0275\u0275text(61,"setup-jest.js"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(62," : "),e.\u0275\u0275elementStart(63,"code"),e.\u0275\u0275text(64,"import '@ng-web-apis/universal/mocks';"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(65," . "),e.\u0275\u0275element(66,"tui-doc-code",5),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&l&&(e.\u0275\u0275advance(50),e.\u0275\u0275property("code",s.jestConfigJs),e.\u0275\u0275advance(2),e.\u0275\u0275property("code",s.packageJson),e.\u0275\u0275advance(14),e.\u0275\u0275property("code",s.setupJestJs))},directives:[c.q,u.c],encapsulation:2,changeDetection:0}),n})(),p=(()=>{class n{}return n.\u0275fac=function(l){return new(l||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[i.ez,d.fV,m.jzK,r.Bz.forChild((0,d.Ve)(f))]]}),n})()}}]);