(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[91196],{82880:(t,e,n)=>{n.d(e,{b:()=>s});var i=n(3497),o=n(57750);const a="Bell";class s extends o.O{constructor(){super(...arguments),this.sizeVariants=["s","m","l"],this.hintContentVariants=["","Some content"],this.hintDirectionVariants=i.TUI_HINT_DIRECTIONS,this.hintAppearanceVariants=["","error","onDark"],this.typeVariants=["text","email","password","tel","url"],this.maxLengthVariants=[10],this.autocompleteVariants=["","off","cc-name","cc-number","cc-exp-month","cc-exp-year","cc-type","given-name","additional-name","family-name","username","email","street-address","postal-code","country-name"],this.inputModeVariants=["text","numeric"],this.customContentVariants=["",a,"tuiIconSearchLarge","tuiIconCalendarLarge","tuiIconVisaMono","tuiIconMastercardMono"],this.customContentSelected=this.customContentVariants[0],this.inputMode=this.inputModeVariants[0],this.autocomplete="",this.maxLength=null,this.type=this.typeVariants[0],this.cleaner=!1,this.pseudoInvalid=null,this.success=!1,this.readOnly=!1,this.labelOutside=!1,this.size=this.sizeVariants[2],this.exampleText="",this.filler="",this.maxHeight=null,this.iconLeftVariants=["","tuiIconMailLarge","tuiIconPieChartLarge"],this.iconLeft=this.iconLeftVariants[0],this.hintContent=this.hintContentVariants[0],this.hintDirection=this.hintDirectionVariants[0],this.hintAppearance=this.hintAppearanceVariants[0],this.dropdownAlignVariants=["left","right"],this.dropdownAlign=i.TUI_DROPDOWN_DEFAULT_OPTIONS.align,this.dropdownLimitWidthVariants=["fixed","min","auto"],this.dropdownLimitWidth=this.dropdownLimitWidthVariants[0],this.dropdownDirectionVariants=["bottom","top"],this.dropdownDirection=i.TUI_DROPDOWN_DEFAULT_OPTIONS.direction,this.dropdownMinHeight=i.TUI_DROPDOWN_DEFAULT_OPTIONS.minHeight,this.dropdownMaxHeight=i.TUI_DROPDOWN_DEFAULT_OPTIONS.maxHeight,this.prefixVariants=["","$","GBP","Very long text"],this.prefix=this.prefixVariants[0],this.postfix=this.prefixVariants[0],this.dropdownOffset=i.TUI_DROPDOWN_DEFAULT_OPTIONS.offset}get customContent(){return this.customContentSelected===a?'<svg xmlns="http://www.w3.org/2000/svg"\nwidth="24px"\nheight="24px"\nviewBox="0 0 24 24">\n<path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5\n   c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3\n   s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>\n</svg>':this.customContentSelected}get disabled(){return this.control.disabled}set disabled(t){t?this.control.disable():this.control.enable()}}},57750:(t,e,n)=>{n.d(e,{O:()=>i});class i{constructor(){this.pseudoVariants=[!1,!0],this.textAlignVariants=["left","right"],this.textAlign=this.textAlignVariants[0],this.focusable=!0,this.pseudoFocused=null,this.pseudoHovered=null,this.pseudoPressed=null}}},91196:(t,e,n)=>{n.r(e),n.d(e,{ExampleTuiInputInlineModule:()=>J});var i=n(12057),o=n(24751),a=n(33982),s=n(29851),r=n(68807),u=n(3497),c=n(55908),l=n(82880),d=n(74788),p=n(88331),h=n(37159),m=n(57068),g=n(87623),f=n(76189);let x=(()=>{class t{constructor(){this.testForm=new o.cw({testValue1:new o.NI("Hello 1"),testValue2:new o.NI("Hello 2"),testValue3:new o.NI("Hello 3"),testValue4:new o.NI("")})}get toggleContent(){return this.testForm.disabled?"enable (allow editing)":"disable"}get input4Empty(){return""===this.testForm.get("testValue4").value}onToggleClick(){this.testForm.disabled?this.testForm.enable():this.testForm.disable()}}return t.ɵfac=function(e){return new(e||t)},t.ɵcmp=d.Xpm({type:t,selectors:[["tui-input-inline-example-1"]],decls:8,vars:4,consts:[[3,"formGroup"],["formControlName","testValue1",1,"input1"],["formControlName","testValue2",1,"input2"],["formControlName","testValue3",1,"input3"],["formControlName","testValue4",1,"input4"],["tuiButton","","type","button","size","m",3,"click"]],template:function(t,e){1&t&&(d.TgZ(0,"form",0),d._UZ(1,"tui-input-inline",1),d._UZ(2,"tui-input-inline",2),d._UZ(3,"tui-input-inline",3),d.TgZ(4,"tui-input-inline",4),d._uU(5," (Show placeholder if control is empty) "),d.qZA(),d.qZA(),d.TgZ(6,"button",5),d.NdJ("click",(function(){return e.onToggleClick()})),d._uU(7),d.qZA()),2&t&&(d.Q6J("formGroup",e.testForm),d.xp6(4),d.ekj("input4_empty",e.input4Empty),d.xp6(3),d.hij(" ",e.toggleContent,"\n"))},directives:[o._Y,o.JL,o.sg,g.l,o.JJ,o.u,f.v],styles:[".input1[_ngcontent-%COMP%], .input2[_ngcontent-%COMP%], .input3[_ngcontent-%COMP%]{margin-right:.625rem}.input1[_ngcontent-%COMP%]{border:2px solid var(--tui-error-fill)}.input2[_ngcontent-%COMP%]{background:var(--tui-base-09);padding:.625rem;color:var(--tui-base-01);letter-spacing:.625rem;font-size:1.25rem}.input3[_ngcontent-%COMP%]{font-family:monospace;font-weight:bold;background:var(--tui-base-04)}.input4_empty[_ngcontent-%COMP%]{opacity:.3}"],changeDetection:0}),t})();var y=n(20986);function C(t,e){if(1&t){const t=d.EpF();d.TgZ(0,"tui-input-inline",3),d.NdJ("ngModelChange",(function(e){return d.CHM(t),d.oxw().heading=e}))("focusedChange",(function(e){return d.CHM(t),d.oxw().onFocusedChange(e)}))("keydown.esc.prevent",(function(){return d.CHM(t),d.oxw().toggle()}))("keydown.enter.prevent",(function(){return d.CHM(t),d.oxw().toggle()})),d._uU(1," Type a heading "),d.qZA()}if(2&t){const t=d.oxw();d.Q6J("ngModel",t.heading)}}function b(t,e){if(1&t){const t=d.EpF();d.TgZ(0,"span"),d._uU(1),d.qZA(),d.TgZ(2,"button",4),d.NdJ("click",(function(){return d.CHM(t),d.oxw().toggle()})),d.qZA()}if(2&t){const t=d.oxw();d.xp6(1),d.Oqu(t.heading)}}let T=(()=>{class t{constructor(t){this.alerts=t,this.heading="Page heading",this.editing=!1}toggle(){this.editing=!this.editing}onFocusedChange(t){t||(this.editing=!1,this.saveHeading(this.heading))}saveHeading(t){this.alerts.open(t,{label:"New heading"}).subscribe()}}return t.ɵfac=function(e){return new(e||t)(d.Y36(u.TuiAlertService))},t.ɵcmp=d.Xpm({type:t,selectors:[["tui-input-inline-example-2"]],decls:8,vars:4,consts:[[1,"header"],["tuiAutoFocus","",3,"ngModel","ngModelChange","focusedChange","keydown.esc.prevent","keydown.enter.prevent",4,"ngIf","ngIfElse"],["text",""],["tuiAutoFocus","",3,"ngModel","ngModelChange","focusedChange","keydown.esc.prevent","keydown.enter.prevent"],["tuiIconButton","","type","button","title","Edit heading","size","xs","appearance","icon","icon","tuiIconEdit2Large",1,"tui-space_left-1",3,"click"]],template:function(t,e){if(1&t&&(d.TgZ(0,"h2",0),d.YNc(1,C,2,1,"tui-input-inline",1),d.YNc(2,b,3,1,"ng-template",null,2,d.W1O),d.qZA(),d.TgZ(4,"p"),d._uU(5," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa exercitationem, sed? Deserunt dignissimos dolorem doloribus officiis quae repellat rerum? Accusantium fuga hic nam necessitatibus non officiis perferendis repellendus tempore voluptates!\n"),d.qZA(),d.TgZ(6,"p"),d._uU(7," Accusantium adipisci blanditiis esse est et eum fugit id illum, in iste itaque iusto laborum nostrum officia quam quasi quos repellat temporibus tenetur, ullam? Blanditiis fuga iusto maiores omnis quidem!\n"),d.qZA()),2&t){const t=d.MAs(3);d.ekj("header_empty",!e.heading),d.xp6(1),d.Q6J("ngIf",e.editing)("ngIfElse",t)}},directives:[i.O5,g.l,y.k,o.JJ,o.On,f.v],styles:[".header[_ngcontent-%COMP%]{height:1.5rem;display:flex;align-items:center;line-height:1.5rem}.header_empty[_ngcontent-%COMP%]{opacity:.3}"],changeDetection:0}),t})();var _=n(46797),V=n(46782);let Z=(()=>{class t{constructor(t,e,n,i){this.cd=t,this.destroy$=e,this.zone=n,this.isCypress=i,this.count="0"}ngOnInit(){this.isCypress||(0,_.H)(0,3e3).pipe((0,r.tuiZoneOptimized)(this.zone),(0,r.tuiWatch)(this.cd),(0,V.R)(this.destroy$)).subscribe((t=>{this.count=String(t)}))}}return t.ɵfac=function(e){return new(e||t)(d.Y36(d.sBO),d.Y36(r.TuiDestroyService,2),d.Y36(d.R0b),d.Y36(r.TUI_IS_CYPRESS))},t.ɵcmp=d.Xpm({type:t,selectors:[["tui-input-inline-example-3"]],features:[d._Bn([r.TuiDestroyService])],decls:1,vars:1,consts:[[1,"input1",3,"ngModel","ngModelChange"]],template:function(t,e){1&t&&(d.TgZ(0,"tui-input-inline",0),d.NdJ("ngModelChange",(function(t){return e.count=t})),d.qZA()),2&t&&d.Q6J("ngModel",e.count)},directives:[g.l,o.JJ,o.On],styles:[".input1[_ngcontent-%COMP%]{border:2px solid var(--tui-error-fill);padding:.625rem;font-size:1.25rem;text-align:center}"],changeDetection:0}),t})();var w=n(20714),M=n(54476),A=n(17023),P=n(76349);function I(t,e){if(1&t&&(d.TgZ(0,"p"),d._uU(1,"Inline field"),d.qZA(),d.TgZ(2,"tui-doc-example",2),d._UZ(3,"tui-input-inline-example-1"),d.qZA(),d.TgZ(4,"tui-doc-example",3),d._UZ(5,"tui-input-inline-example-2"),d.qZA(),d.TgZ(6,"tui-doc-example",4),d._UZ(7,"tui-input-inline-example-3"),d.qZA()),2&t){const t=d.oxw();d.xp6(2),d.Q6J("content",t.example1),d.xp6(2),d.Q6J("content",t.example2),d.xp6(2),d.Q6J("content",t.example3)}}function v(t,e){if(1&t&&(d.TgZ(0,"tui-input-inline",10),d._uU(1," Placeholder "),d.qZA()),2&t){const t=d.oxw(2);d.Udp("float",t.textAlign),d.Q6J("formControl",t.control)("maxLength",t.maxLength)}}function O(t,e){1&t&&(d._uU(0," Disabled state (use "),d.TgZ(1,"code"),d._uU(2,"formControl.disable()"),d.qZA(),d._uU(3," ) "))}function N(t,e){1&t&&d._uU(0," Maximum number of symbols ")}function U(t,e){1&t&&d._uU(0," Custom align content by float ")}function L(t,e){if(1&t){const t=d.EpF();d.TgZ(0,"tui-doc-demo",5),d.YNc(1,v,2,4,"ng-template"),d.qZA(),d.TgZ(2,"tui-doc-documentation"),d.YNc(3,O,4,0,"ng-template",6),d.NdJ("documentationPropertyValueChange",(function(e){return d.CHM(t),d.oxw().disabled=e})),d.YNc(4,N,1,0,"ng-template",7),d.NdJ("documentationPropertyValueChange",(function(e){return d.CHM(t),d.oxw().maxLength=e})),d.qZA(),d.TgZ(5,"tui-doc-documentation",8),d.YNc(6,U,1,0,"ng-template",9),d.NdJ("documentationPropertyValueChange",(function(e){return d.CHM(t),d.oxw().textAlign=e})),d.qZA()}if(2&t){const t=d.oxw();d.Q6J("control",t.control),d.xp6(3),d.Q6J("documentationPropertyValue",t.disabled),d.xp6(1),d.Q6J("documentationPropertyValues",t.maxLengthVariants)("documentationPropertyValue",t.maxLength),d.xp6(2),d.Q6J("documentationPropertyValues",t.textAlignVariants)("documentationPropertyValue",t.textAlign)}}function q(t,e){if(1&t&&(d.TgZ(0,"ol",11),d.TgZ(1,"li"),d.TgZ(2,"p"),d._uU(3," Import "),d.TgZ(4,"code"),d._uU(5,"TuiInputInlineModule"),d.qZA(),d._uU(6," into a module where you want to use our component "),d.qZA(),d._UZ(7,"tui-doc-code",12),d.qZA(),d.TgZ(8,"li"),d.TgZ(9,"p"),d._uU(10,"Add to the template:"),d.qZA(),d._UZ(11,"tui-doc-code",13),d.qZA(),d.qZA()),2&t){const t=d.oxw();d.xp6(7),d.Q6J("code",t.exampleModule),d.xp6(4),d.Q6J("code",t.exampleHtml)}}let D=(()=>{class t extends l.b{constructor(){super(...arguments),this.exampleModule=n.e(35625).then(n.t.bind(n,35625,17)),this.exampleHtml=n.e(25662).then(n.t.bind(n,25662,17)),this.example1={TypeScript:n.e(42899).then(n.t.bind(n,42899,17)),HTML:n.e(79511).then(n.t.bind(n,79511,17)),LESS:n.e(60995).then(n.t.bind(n,60995,17))},this.example2={TypeScript:n.e(1161).then(n.t.bind(n,1161,17)),HTML:n.e(24460).then(n.t.bind(n,24460,17)),LESS:n.e(47922).then(n.t.bind(n,47922,17))},this.example3={TypeScript:n.e(71416).then(n.t.bind(n,71416,17)),HTML:n.e(95560).then(n.t.bind(n,95560,17)),LESS:n.e(30955).then(n.t.bind(n,30955,17))},this.control=new o.NI("111",o.kI.required),this.maxLengthVariants=[10],this.maxLength=null}}return t.ɵfac=function(){let e;return function(n){return(e||(e=d.n5z(t)))(n||t)}}(),t.ɵcmp=d.Xpm({type:t,selectors:[["example-tui-input-inline"]],features:[d.qOj],decls:4,vars:0,consts:[["header","InputInline","package","KIT","type","components"],["pageTab",""],["id","base","heading","Basic",3,"content"],["id","in-heading","heading","In heading",3,"content"],["id","dynamic-increment","heading","Dynamic counter increment (3 sec)",3,"content"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","maxLength","documentationPropertyMode","input","documentationPropertyType","number | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["heading","CSS customization"],["documentationPropertyMode","input","documentationPropertyType","string","documentationPropertyName","style.float",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"input",3,"formControl","maxLength"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(t,e){1&t&&(d.TgZ(0,"tui-doc-page",0),d.YNc(1,I,8,3,"ng-template",1),d.YNc(2,L,7,6,"ng-template",1),d.YNc(3,q,12,2,"ng-template",1),d.qZA())},directives:[p.q,h.n,m.f,x,T,Z,w.F,M.z,A.B,g.l,o.JJ,o.oH,P.c],styles:[".input[_ngcontent-%COMP%]{max-width:20rem;border-bottom:1px solid var(--tui-base-09)}"],changeDetection:0}),t})(),J=(()=>{class t{}return t.ɵfac=function(e){return new(e||t)},t.ɵmod=d.oAB({type:t}),t.ɵinj=d.cJS({imports:[[i.ez,o.u5,o.UX,u.TuiButtonModule,c.TuiInputInlineModule,r.TuiAutoFocusModule,s.fV,a.Bz.forChild((0,s.Ve)(D))]]}),t})()}}]);