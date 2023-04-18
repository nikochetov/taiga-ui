(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[83173],{83173:(e,t,i)=>{i.r(t),i.d(t,{ExampleTuiSwipeModule:()=>T});var n=i(12057),o=i(33982),c=i(29851),u=i(39210),p=i(68807),s=i(74788),d=i(88331),a=i(37159),r=i(57068),l=i(99021);let g=(()=>{class e{constructor(){this.swiped="default"}onSwipe(e){this.swiped=e.direction}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=s.Xpm({type:e,selectors:[["tui-swipe-example-1"]],hostVars:2,hostBindings:function(e,t){2&e&&s.Tol(t.swiped)},decls:2,vars:2,consts:[[1,"box","tui-text_body-l",3,"ngClass","tuiSwipe"]],template:function(e,t){1&e&&(s.TgZ(0,"div",0),s.NdJ("tuiSwipe",(function(e){return t.onSwipe(e)})),s._uU(1),s.qZA()),2&e&&(s.Q6J("ngClass",t.swiped),s.xp6(1),s.hij(" Swiped ",t.swiped,"\n"))},directives:[n.mk,l.W],styles:[".box[_ngcontent-%COMP%]{width:200px;height:200px;background-color:var(--tui-primary);transition:all .5s ease-out;display:flex;justify-content:center;align-items:center;touch-action:none}.box.left[_ngcontent-%COMP%]{background-color:var(--tui-support-12)}.box.right[_ngcontent-%COMP%]{background-color:var(--tui-support-03)}.box.top[_ngcontent-%COMP%]{background-color:var(--tui-support-08)}.box.bottom[_ngcontent-%COMP%]{background-color:var(--tui-support-10)}"],changeDetection:0}),e})();var h=i(79765),m=i(83628);function Z(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"div",2),s.NdJ("tuiSwipe",(function(t){return s.CHM(e),s.oxw().onSwipe(t)})),s._uU(1," Swipe right to close "),s.qZA()}}let w=(()=>{class e{constructor(){this.open$=new h.xQ}toggle(e){this.open$.next(e)}onSwipe(e){console.info(e.direction),"left"===e.direction&&this.toggle(!0),"right"===e.direction&&this.toggle(!1)}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=s.Xpm({type:e,selectors:[["tui-swipe-example-2"]],decls:4,vars:4,consts:[[1,"container","tui-text_body-l",3,"tuiSwipe"],["class","sidebar tui-text_body-l",3,"tuiSwipe",4,"tuiSidebar","tuiSidebarDirection"],[1,"sidebar","tui-text_body-l",3,"tuiSwipe"]],template:function(e,t){1&e&&(s.TgZ(0,"div",0),s.NdJ("tuiSwipe",(function(e){return t.onSwipe(e)})),s._uU(1," Swipe left to open "),s.YNc(2,Z,2,0,"div",1),s.ALo(3,"async"),s.qZA()),2&e&&(s.xp6(2),s.Q6J("tuiSidebar",!!s.lcZ(3,2,t.open$))("tuiSidebarDirection","right"))},directives:[l.W,m.B],pipes:[n.Ov],styles:[".container[_ngcontent-%COMP%]{width:200px;height:200px}.sidebar[_ngcontent-%COMP%]{width:100%;height:100%}.container[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}"],changeDetection:0}),e})();var b=i(76349);function x(e,t){if(1&e&&(s.TgZ(0,"p"),s.TgZ(1,"code"),s._uU(2,"tuiSwipe"),s.qZA(),s._uU(3," directive allows detecting swipes on mobile devices. "),s.qZA(),s.TgZ(4,"p"),s._uU(5," You can configure the directive with "),s.TgZ(6,"code"),s._uU(7,"TUI_SWIPE_OPTIONS"),s.qZA(),s._uU(8," token. "),s._UZ(9,"br"),s._uU(10," Allowed options: "),s.qZA(),s.TgZ(11,"dl"),s.TgZ(12,"dt"),s.TgZ(13,"strong"),s._uU(14,"timeout:"),s.qZA(),s.qZA(),s.TgZ(15,"dd"),s._uU(16,"max time between touchstart and touchend"),s.qZA(),s.TgZ(17,"dt"),s.TgZ(18,"strong"),s._uU(19,"threshold"),s.qZA(),s._uU(20," : "),s.qZA(),s.TgZ(21,"dd"),s._uU(22,"min distance between touchstart and touchend."),s.qZA(),s.qZA(),s.TgZ(23,"tui-doc-example",3),s._UZ(24,"tui-swipe-example-1"),s.qZA(),s.TgZ(25,"tui-doc-example",4),s._UZ(26,"tui-swipe-example-2"),s.qZA()),2&e){const e=s.oxw();s.xp6(23),s.Q6J("content",e.example1),s.xp6(2),s.Q6J("content",e.example2)}}function _(e,t){if(1&e&&(s.TgZ(0,"ol",5),s.TgZ(1,"li"),s.TgZ(2,"p"),s._uU(3," Import "),s.TgZ(4,"code"),s._uU(5,"TuiSwipeModule"),s.qZA(),s._uU(6," into a module where you want to use our directive "),s.qZA(),s._UZ(7,"tui-doc-code",6),s.qZA(),s.TgZ(8,"li"),s.TgZ(9,"p"),s._uU(10,"Add to the template:"),s.qZA(),s._UZ(11,"tui-doc-code",7),s.qZA(),s.qZA()),2&e){const e=s.oxw();s.xp6(7),s.Q6J("code",e.exampleModule),s.xp6(4),s.Q6J("code",e.exampleHtml)}}let f=(()=>{class e{constructor(){this.exampleModule=i.e(72030).then(i.t.bind(i,72030,17)),this.exampleHtml=i.e(68817).then(i.t.bind(i,68817,17)),this.example1={TypeScript:i.e(67610).then(i.t.bind(i,67610,17)),HTML:i.e(69445).then(i.t.bind(i,69445,17)),LESS:i.e(83914).then(i.t.bind(i,83914,17))},this.example2={TypeScript:i.e(62531).then(i.t.bind(i,62531,17)),HTML:i.e(34473).then(i.t.bind(i,34473,17)),LESS:i.e(60499).then(i.t.bind(i,60499,17))}}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=s.Xpm({type:e,selectors:[["example-tui-swipe"]],decls:3,vars:0,consts:[["header","Swipe","package","CDK","type","directives"],["pageTab",""],["pageTab","Setup"],["id","base","heading","Basic",3,"content"],["id","sidebar","heading","With sidebar",3,"content"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(s.TgZ(0,"tui-doc-page",0),s.YNc(1,x,27,2,"ng-template",1),s.YNc(2,_,12,2,"ng-template",2),s.qZA())},directives:[d.q,a.n,r.f,g,w,b.c],encapsulation:2,changeDetection:0}),e})(),T=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=s.oAB({type:e}),e.ɵinj=s.cJS({imports:[[n.ez,p.TuiSwipeModule,c.fV,u.TuiSidebarModule,p.TuiActiveZoneModule,o.Bz.forChild((0,c.Ve)(f))]]}),e})()}}]);