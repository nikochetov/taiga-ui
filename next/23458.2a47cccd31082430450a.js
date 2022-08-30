"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[23458],{23458:($e,g,o)=>{o.r(g),o.d(g,{ExampleTuiSheetModule:()=>ve});var p=o(12057),h=o(12021),d=o(11693),R=o(55970),D=o(78697),m=o(36518),E=o(66187),I=o(91068),S=o(40287),e=o(74788),H=o(88331),G=o(37159),U=o(57068),X=o(79765),V=o(59193),J=o(43190),z=o(28049),B=o(77393);class j{constructor(a,t){this.count=a,this.source=t}call(a,t){return t.subscribe(new k(a,this.count,this.source))}}class k extends B.L{constructor(a,t,i){super(a),this.count=t,this.source=i}error(a){if(!this.isStopped){const{source:t,count:i}=this;if(0===i)return super.error(a);i>-1&&(this.count=i-1),t.subscribe(this._unsubscribeAndRecycle())}}}var W=o(46782),u=o(76189);let K=(()=>{class n{constructor(t,i){this.stream$=new X.xQ,this.stream$.pipe((0,J.w)((l,s)=>s%2?V.E:i.open("Simple sheet",{overlay:!0}).pipe((0,z.P)())),function(n=-1){return a=>a.lift(new j(n,a))}(),(0,W.R)(t)).subscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(S.a31),e.\u0275\u0275directiveInject(m.KQ))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-sheet-example-1"]],features:[e.\u0275\u0275ProvidersFeature([S.a31])],decls:2,vars:0,consts:[["tuiButton","",3,"click"]],template:function(t,i){1&t&&(e.\u0275\u0275elementStart(0,"button",0),e.\u0275\u0275listener("click",function(){return i.stream$.next()}),e.\u0275\u0275text(1," Show/Hide\n"),e.\u0275\u0275elementEnd())},directives:[u.v],encapsulation:2,changeDetection:0}),n})();var F=o(77888),c=o(59113);function Q(n,a){1&n&&(e.\u0275\u0275elementStart(0,"h2",2),e.\u0275\u0275text(1,"Alexander Inkin"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"div",3),e.\u0275\u0275element(3,"a",4),e.\u0275\u0275element(4,"a",5),e.\u0275\u0275element(5,"a",6),e.\u0275\u0275elementEnd())}let Z=(()=>{class n{constructor(){this.open=!1,this.options={overlay:!0,image:"assets/images/avatar.jpg"}}toggle(){this.open=!this.open}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-sheet-example-2"]],decls:3,vars:2,consts:[["tuiButton","",3,"click"],[3,"tuiSheetOptions","tuiSheet","tuiSheetChange"],["tuiSheetHeading",""],[1,"tui-space_top-4"],["tuiIconButton","","size","m","appearance","secondary","icon","tuiIconMailLarge","title","Email","href","mailto:alexander@inkin.ru",1,"tui-space_right-2"],["tuiIconButton","","size","m","appearance","secondary","icon","tuiIconCallTransferLarge","title","Telegram","href","https://t.me/waterplea",1,"tui-space_right-2"],["tuiIconButton","","size","m","appearance","secondary","icon","tuiIconMusicLarge","title","Music","href","https://waterplea.bandcamp.com/"]],template:function(t,i){1&t&&(e.\u0275\u0275elementStart(0,"button",0),e.\u0275\u0275listener("click",function(){return i.toggle()}),e.\u0275\u0275text(1," Show/Hide\n"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(2,Q,6,0,"ng-template",1),e.\u0275\u0275listener("tuiSheetChange",function(s){return i.open=s})),2&t&&(e.\u0275\u0275advance(2),e.\u0275\u0275property("tuiSheetOptions",i.options)("tuiSheet",i.open))},directives:[u.v,F.o,c.ui],encapsulation:2,changeDetection:0}),n})();var Y=o(79121),C=o(88135),q=o(16996);function ee(n,a){1&n&&(e.\u0275\u0275elementStart(0,"h2",2),e.\u0275\u0275elementStart(1,"label",3),e.\u0275\u0275text(2,"And the Holy Grail"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"p",4),e.\u0275\u0275elementStart(4,"button",5),e.\u0275\u0275text(5," Buy "),e.\u0275\u0275element(6,"tui-money",6),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"button",7),e.\u0275\u0275text(8," Rent "),e.\u0275\u0275element(9,"tui-money",6),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"button",8),e.\u0275\u0275text(11," Add to Watch List "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"h3",9),e.\u0275\u0275text(13,"Cast:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"p"),e.\u0275\u0275text(15,"John Cleese"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"p"),e.\u0275\u0275text(17,"Eric Idle"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(18,"p"),e.\u0275\u0275text(19,"Michael Palin"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(20,"p"),e.\u0275\u0275text(21,"Graham Chapman"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(22,"p"),e.\u0275\u0275text(23,"Terry Gilliam"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(24,"p"),e.\u0275\u0275text(25,"Terry Jones"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(26,"p"),e.\u0275\u0275text(27,"Carol Cleveland"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(28,"hr"),e.\u0275\u0275elementStart(29,"h3"),e.\u0275\u0275text(30,"Directed by:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(31,"p"),e.\u0275\u0275text(32,"Terry Gilliam"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(33,"p"),e.\u0275\u0275text(34,"Terry Jones"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(35,"hr"),e.\u0275\u0275elementStart(36,"h3"),e.\u0275\u0275text(37,"Produced by:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(38,"p"),e.\u0275\u0275text(39,"Mark Forstater"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(40,"p"),e.\u0275\u0275text(41,"Michael White"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(42,"hr"),e.\u0275\u0275elementStart(43,"h3"),e.\u0275\u0275text(44,"Written by:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(45,"p"),e.\u0275\u0275text(46,"John Cleese"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(47,"p"),e.\u0275\u0275text(48,"Eric Idle"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(49,"p"),e.\u0275\u0275text(50,"Michael Palin"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(51,"p"),e.\u0275\u0275text(52,"Graham Chapman"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(53,"p"),e.\u0275\u0275text(54,"Terry Gilliam"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(55,"p"),e.\u0275\u0275text(56,"Terry Jones"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(57,"hr"),e.\u0275\u0275elementStart(58,"h3"),e.\u0275\u0275text(59,"Budget:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(60,"p"),e.\u0275\u0275element(61,"tui-money",10),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(62,"hr"),e.\u0275\u0275elementStart(63,"h3"),e.\u0275\u0275text(64,"Box office:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(65,"p"),e.\u0275\u0275element(66,"tui-money",10),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(67,"hr"),e.\u0275\u0275elementStart(68,"h3"),e.\u0275\u0275text(69,"Release date"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(70,"p"),e.\u0275\u0275text(71,"April 3, 1975"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(72,"hr"),e.\u0275\u0275elementStart(73,"h3"),e.\u0275\u0275text(74,"Running time"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(75,"p"),e.\u0275\u0275text(76,"92 minutes"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(77,"footer",11),e.\u0275\u0275text(78,"\xa9 EMI Films"),e.\u0275\u0275elementEnd()),2&n&&(e.\u0275\u0275advance(6),e.\u0275\u0275property("value",12.99),e.\u0275\u0275advance(3),e.\u0275\u0275property("value",4.99),e.\u0275\u0275advance(52),e.\u0275\u0275property("value",4e5),e.\u0275\u0275advance(5),e.\u0275\u0275property("value",5e6))}let te=(()=>{class n{constructor(){this.open=!1,this.options={stops:["calc(5rem + 74vw)","calc(9rem + 74vw)"],image:"https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/10/IMG_0323-1024x756.jpeg"}}toggle(){this.open=!this.open}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-sheet-example-3"]],decls:3,vars:2,consts:[["tuiButton","",3,"click"],[3,"tuiSheetOptions","tuiSheet","tuiSheetChange"],["tuiSheetHeading",""],["tuiLabel","Monty Python"],[1,"buttons"],["tuiButton","","size","m","appearance","secondary",1,"tui-space_right-2"],["currency","USD",1,"tui-space_left-1",3,"value"],["tuiButton","","size","m","appearance","secondary"],["tuiButton","","size","m",1,"action"],[1,"cast"],["currency","USD",3,"value"],[1,"footer"]],template:function(t,i){1&t&&(e.\u0275\u0275elementStart(0,"button",0),e.\u0275\u0275listener("click",function(){return i.toggle()}),e.\u0275\u0275text(1," Show/Hide\n"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(2,ee,79,4,"ng-template",1),e.\u0275\u0275listener("tuiSheetChange",function(s){return i.open=s})),2&t&&(e.\u0275\u0275advance(2),e.\u0275\u0275property("tuiSheetOptions",i.options)("tuiSheet",i.open))},directives:[u.v,F.o,c.ui,C.A,q.o],styles:[".buttons[_ngcontent-%COMP%]{display:flex;margin:.3rem 0 1rem}.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex:1}.action[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:calc(100% - 4rem);width:100%;display:block;z-index:1}.cast[_ngcontent-%COMP%]{margin-top:-2rem}.footer[_ngcontent-%COMP%]{margin:0 -1rem -1rem;padding:1rem 1rem 5rem;background:var(--tui-base-02)}"],changeDetection:0}),n})();var ne=o(98599),O=o(66596);function oe(n,a){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"h2",2),e.\u0275\u0275listener("tuiElasticSticky",function(l){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().onElastic(l)}),e.\u0275\u0275element(1,"img",3),e.\u0275\u0275text(2," Web APIs for Angular "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"p"),e.\u0275\u0275text(4,"Our goal is to provide high quality lightweight wrappers for various native Web APIs to use with Angular."),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"h3"),e.\u0275\u0275text(6,"Our libraries"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"p"),e.\u0275\u0275elementStart(8,"a",4),e.\u0275\u0275text(9," Common "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"p"),e.\u0275\u0275elementStart(11,"a",5),e.\u0275\u0275text(12," Universal "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(13,"p"),e.\u0275\u0275elementStart(14,"a",6),e.\u0275\u0275text(15," Audio "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"p"),e.\u0275\u0275elementStart(17,"a",7),e.\u0275\u0275text(18," Canvas "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(19,"p"),e.\u0275\u0275elementStart(20,"a",8),e.\u0275\u0275text(21," Geolocation "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(22,"p"),e.\u0275\u0275elementStart(23,"a",9),e.\u0275\u0275text(24," Intersection Observer "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(25,"p"),e.\u0275\u0275elementStart(26,"a",10),e.\u0275\u0275text(27," MIDI "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(28,"p"),e.\u0275\u0275elementStart(29,"a",11),e.\u0275\u0275text(30," Mutation Observer "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(31,"p"),e.\u0275\u0275elementStart(32,"a",12),e.\u0275\u0275text(33," Payment Request "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(34,"p"),e.\u0275\u0275elementStart(35,"a",13),e.\u0275\u0275text(36," Permissions "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(37,"p"),e.\u0275\u0275elementStart(38,"a",14),e.\u0275\u0275text(39," Resize Observer "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(40,"p"),e.\u0275\u0275elementStart(41,"a",15),e.\u0275\u0275text(42," Speech "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(43,"p"),e.\u0275\u0275elementStart(44,"a",16),e.\u0275\u0275text(45," Storage "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(46,"p"),e.\u0275\u0275elementStart(47,"a",17),e.\u0275\u0275text(48," Workers "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(49,"h3"),e.\u0275\u0275text(50,"Sponsor"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(51,"p"),e.\u0275\u0275elementStart(52,"a",18),e.\u0275\u0275text(53," Open Collective "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()}if(2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275styleProp("opacity",t.elastic*t.elastic*t.elastic)("transform",t.transform)}}let ae=(()=>{class n{constructor(){this.open=!1,this.elastic=1,this.options={stops:["12rem"]}}get transform(){return`scale(${this.elastic*this.elastic})`}toggle(){this.elastic=1,this.open=!this.open}onElastic(t){this.elastic=t}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-sheet-example-4"]],decls:3,vars:2,consts:[["tuiButton","",3,"click"],[3,"tuiSheetOptions","tuiSheet","tuiSheetChange"],["tuiSheetHeading","",1,"heading",3,"tuiElasticSticky"],["src","assets/images/angular.svg","alt","Angular logo",1,"image"],["tuiLink","","href","https://github.com/ng-web-apis/common"],["tuiLink","","href","https://github.com/ng-web-apis/universal"],["tuiLink","","href","https://github.com/ng-web-apis/audio"],["tuiLink","","href","https://github.com/ng-web-apis/canvas"],["tuiLink","","href","https://github.com/ng-web-apis/geolocation"],["tuiLink","","href","https://github.com/ng-web-apis/intersection-observer"],["tuiLink","","href","https://github.com/ng-web-apis/midi"],["tuiLink","","href","https://github.com/ng-web-apis/mutation-observer"],["tuiLink","","href","https://github.com/ng-web-apis/payment-request"],["tuiLink","","href","https://github.com/ng-web-apis/permissions"],["tuiLink","","href","https://github.com/ng-web-apis/resize-observer"],["tuiLink","","href","https://github.com/ng-web-apis/speech"],["tuiLink","","href","https://github.com/ng-web-apis/storage"],["tuiLink","","href","https://github.com/ng-web-apis/workers"],["tuiLink","","href","https://opencollective.com/ng-web-apis"]],template:function(t,i){1&t&&(e.\u0275\u0275elementStart(0,"button",0),e.\u0275\u0275listener("click",function(){return i.toggle()}),e.\u0275\u0275text(1," Show/Hide\n"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(2,oe,54,4,"ng-template",1),e.\u0275\u0275listener("tuiSheetChange",function(s){return i.open=s})),2&t&&(e.\u0275\u0275advance(2),e.\u0275\u0275property("tuiSheetOptions",i.options)("tuiSheet",i.open))},directives:[u.v,F.o,c.ui,ne.X,O.V],styles:[".heading[_ngcontent-%COMP%]{height:12rem;top:-8rem;display:flex;align-items:flex-end;flex-direction:row-reverse;justify-content:space-between;background:var(--tui-support-03)}.image[_ngcontent-%COMP%]{position:absolute;height:8rem;width:100%;top:1rem;left:0;transform-origin:bottom;pointer-events:none}"],changeDetection:0}),n})();function ie(n,a){if(1&n&&(e.\u0275\u0275elementStart(0,"div",3),e.\u0275\u0275elementStart(1,"h2",4),e.\u0275\u0275text(2," Planet Earth "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",5),e.\u0275\u0275element(4,"img",6),e.\u0275\u0275pipe(5,"async"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"p"),e.\u0275\u0275text(7," Earth is the third planet from the Sun and the only astronomical object known to harbour and support life. About 29.2% of Earth's surface is land consisting of continents and islands. The remaining 70.8% is covered with water, mostly by oceans, seas, gulfs, and other salt-water bodies, but also by lakes, rivers, and other freshwater, which together constitute the hydrosphere. Much of Earth's polar regions are covered in ice. Earth's outer layer is divided into several rigid tectonic plates that migrate across the surface over many millions of years, while its interior remains active with a solid iron inner core, a liquid outer core that generates Earth's magnetic field, and a convective mantle that drives plate tectonics. "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&n){const t=a.scroll$,i=e.\u0275\u0275nextContext();e.\u0275\u0275advance(4),e.\u0275\u0275styleProp("transform",i.getTransform(e.\u0275\u0275pipeBind1(5,2,t)))}}let le=(()=>{class n{constructor(){this.open=!1,this.options={overlay:!0,stops:["4.5rem"]}}toggle(){this.open=!this.open}getTransform(t){return`translate3d(0, -${100/166*(Math.round((t||0)/2)%166)}%, 0)`}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-sheet-example-5"]],decls:4,vars:2,consts:[["tuiButton","",3,"click"],["src","assets/images/earth.jpg","alt","",1,"preload"],[3,"tuiSheetOptions","tuiSheet","tuiSheetChange"],[1,"wrapper"],["tuiSheetHeading","",1,"heading"],[1,"earth"],["src","assets/images/earth.jpg","alt","",1,"image"]],template:function(t,i){1&t&&(e.\u0275\u0275elementStart(0,"button",0),e.\u0275\u0275listener("click",function(){return i.toggle()}),e.\u0275\u0275text(1," Show/Hide\n"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(2,"img",1),e.\u0275\u0275template(3,ie,8,4,"ng-template",2),e.\u0275\u0275listener("tuiSheetChange",function(s){return i.open=s})),2&t&&(e.\u0275\u0275advance(3),e.\u0275\u0275property("tuiSheetOptions",i.options)("tuiSheet",i.open))},directives:[u.v,F.o,c.ui],pipes:[p.Ov],styles:[".wrapper[_ngcontent-%COMP%]{color:#fff;background:#000;box-shadow:0 5rem 0 1rem #000}.heading[_ngcontent-%COMP%]{background:inherit}.preload[_ngcontent-%COMP%]{position:absolute;height:1px;width:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0,0,0,0);-webkit-clip-path:inset(0);clip-path:inset(0)}.earth[_ngcontent-%COMP%]{position:relative;width:50%;height:50%;margin:1rem auto;overflow:hidden}.image[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%}"],changeDetection:0}),n})();function se(n,a){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"img",6,7),e.\u0275\u0275listener("waIntersectionObservee",function(l){e.\u0275\u0275restoreView(t);const s=e.\u0275\u0275reference(1);return e.\u0275\u0275nextContext(2).onIntersection(l,s)}),e.\u0275\u0275elementEnd()}2&n&&e.\u0275\u0275property("src",a.$implicit,e.\u0275\u0275sanitizeUrl)}function re(n,a){if(1&n&&(e.\u0275\u0275elementContainerStart(0,2),e.\u0275\u0275elementStart(1,"h2",3),e.\u0275\u0275elementStart(2,"label",4),e.\u0275\u0275text(3,"And the Holy Grail"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(4,se,2,1,"img",5),e.\u0275\u0275elementContainerEnd()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(4),e.\u0275\u0275property("ngForOf",t.images)}}let me=(()=>{class n{constructor(){this.open=!1,this.options={overlay:!0,stops:["5rem"]},this.images=["https://m.media-amazon.com/images/M/MV5BOTEzOTMzNzcwNF5BMl5BanBnXkFtZTgwNDcxODUyMjI@._V1_FMjpg_UX1280_.jpg","https://m.media-amazon.com/images/M/MV5BNzg0MzEwNDgwN15BMl5BanBnXkFtZTgwNTcxODUyMjI@._V1_FMjpg_UX1024_.jpg","https://m.media-amazon.com/images/M/MV5BOTE0MTMxMTY3NF5BMl5BanBnXkFtZTgwNDc3NjIwMjE@._V1_FMjpg_UX1024_.jpg","https://m.media-amazon.com/images/M/MV5BNjc4ODAyMDg3NF5BMl5BanBnXkFtZTgwOTY3NjIwMjE@._V1_FMjpg_UX600_.jpg","https://m.media-amazon.com/images/M/MV5BMTU3NDY1MTk3M15BMl5BanBnXkFtZTgwMjc3NjIwMjE@._V1_FMjpg_UX1024_.jpg"]}toggle(){this.open=!this.open}onIntersection([{isIntersecting:t}],{classList:i}){i.toggle("_visible",t)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-sheet-example-6"]],decls:3,vars:2,consts:[["tuiButton","",3,"click"],[3,"tuiSheetOptions","tuiSheet","tuiSheetChange"],["waIntersectionObserver",""],["tuiSheetHeading",""],["tuiLabel","Monty Python"],["alt","","class","image",3,"src","waIntersectionObservee",4,"ngFor","ngForOf"],["alt","",1,"image",3,"src","waIntersectionObservee"],["img",""]],template:function(t,i){1&t&&(e.\u0275\u0275elementStart(0,"button",0),e.\u0275\u0275listener("click",function(){return i.toggle()}),e.\u0275\u0275text(1," Show/Hide\n"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(2,re,5,1,"ng-template",1),e.\u0275\u0275listener("tuiSheetChange",function(s){return i.open=s})),2&t&&(e.\u0275\u0275advance(2),e.\u0275\u0275property("tuiSheetOptions",i.options)("tuiSheet",i.open))},directives:[u.v,F.o,d.Z7,c.ui,C.A,p.sg,d.AY],styles:[".image[_ngcontent-%COMP%]{transition-property:transform,opacity;transition-duration:.3s;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:100%;display:block;margin:1rem 0;transform:translate(-5rem);opacity:0}.image._visible[_ngcontent-%COMP%]{transform:none;opacity:1}"],changeDetection:0}),n})();var ue=o(31823),Fe=o(44051),ce=o(17023),pe=o(44124),Ee=o(76349);const Te=["template"];function de(n,a){1&n&&(e.\u0275\u0275i18nStart(0,2,1),e.\u0275\u0275element(1,"tui-notification",6),e.\u0275\u0275i18nEnd())}function Se(n,a){if(1&n&&(e.\u0275\u0275i18nStart(0,2),e.\u0275\u0275template(1,de,2,0,"tui-notification",3),e.\u0275\u0275elementStart(2,"tui-doc-example",4),e.\u0275\u0275element(3,"tui-sheet-example-1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"tui-doc-example",5),e.\u0275\u0275element(5,"tui-sheet-example-2"),e.\u0275\u0275elementStart(6,"tui-notification",6),e.\u0275\u0275element(7,"code"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"tui-doc-example",7),e.\u0275\u0275element(9,"tui-sheet-example-3"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"tui-doc-example",8),e.\u0275\u0275element(11,"tui-sheet-example-4"),e.\u0275\u0275elementStart(12,"tui-notification",6),e.\u0275\u0275elementStart(13,"a",9),e.\u0275\u0275element(14,"code"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(15,"tui-doc-example",10),e.\u0275\u0275element(16,"tui-sheet-example-5"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"tui-doc-example",11),e.\u0275\u0275element(18,"tui-sheet-example-6"),e.\u0275\u0275elementEnd(),e.\u0275\u0275i18nEnd()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!t.isMobile),e.\u0275\u0275advance(1),e.\u0275\u0275property("content",t.example1),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",t.example2),e.\u0275\u0275advance(4),e.\u0275\u0275property("content",t.example3),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",t.example4),e.\u0275\u0275advance(5),e.\u0275\u0275property("content",t.example5),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",t.example6)}}function _e(n,a){1&n&&(e.\u0275\u0275elementStart(0,"div",22),e.\u0275\u0275element(1,"tui-avatar",23),e.\u0275\u0275elementStart(2,"h2"),e.\u0275\u0275text(3,"Karl Gambolputty"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&n&&(e.\u0275\u0275advance(1),e.\u0275\u0275property("rounded",!0))}function ge(n,a){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275text(0," Karl Gambolputty de von Ausfern-schplenden-schlitter-crasscrenbon-fried-digger-dingle-dangle-dongle-dungle-burstein-von-knacker-thrasher-apple-banger-horowitz-ticolensic-grander-knotty-spelltinkle-grandlich-grumblemeyer-spelterwasser-kurstlich-himbleeisen-bahnwagen-gutenabend-bitte-ein-n\xfcrnburger-bratwustle-gerspurten-mitzweimache-luber-hundsfut-gumberaber-sh\xf6nendanker-kalbsfleisch-mittler-aucher von Hautkopft of Ulm was the last-surviving relative of Johann Gambolputty de von Ausfern-schplenden-schlitter-crasscrenbon-fried-digger-dingle-dangle-dongle-dungle-burstein-von-knacker-thrasher-apple-banger-horowitz-ticolensic-grander-knotty-spelltinkle-grandlich-grumblemeyer-spelterwasser-kurstlich-himbleeisen-bahnwagen-gutenabend-bitte-ein-n\xfcrnburger-bratwustle-gerspurten-mitzweimache-luber-hundsfut-gumberaber-sh\xf6nendanker-kalbsfleisch-mittler-aucher von Hautkopft of Ulm. "),e.\u0275\u0275elementStart(1,"div",6),e.\u0275\u0275elementStart(2,"button",12),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext(2).toggle()}),e.\u0275\u0275text(3," Close "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()}}function he(n,a){1&n&&e.\u0275\u0275i18n(0,24)}function De(n,a){1&n&&e.\u0275\u0275i18n(0,25)}function Ce(n,a){1&n&&e.\u0275\u0275i18n(0,26)}function Oe(n,a){1&n&&e.\u0275\u0275i18n(0,27)}function Me(n,a){1&n&&e.\u0275\u0275i18n(0,28)}function fe(n,a){1&n&&(e.\u0275\u0275i18nStart(0,29),e.\u0275\u0275element(1,"code"),e.\u0275\u0275i18nEnd())}function xe(n,a){1&n&&e.\u0275\u0275i18n(0,30)}function ye(n,a){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tui-doc-demo"),e.\u0275\u0275elementStart(1,"button",12),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().toggle()}),e.\u0275\u0275text(2," Toggle "),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(3,_e,4,1,"ng-template",null,13,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275template(5,ge,4,0,"ng-template",14),e.\u0275\u0275listener("tuiSheetChange",function(l){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().open=l}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"tui-doc-documentation"),e.\u0275\u0275template(7,he,1,0,"ng-template",15),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().closeable=l}),e.\u0275\u0275template(8,De,1,0,"ng-template",16),e.\u0275\u0275template(9,Ce,1,0,"ng-template",17),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().image=l}),e.\u0275\u0275template(10,Oe,1,0,"ng-template",18),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().imageSlide=l}),e.\u0275\u0275template(11,Me,1,0,"ng-template",19),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().stops=l}),e.\u0275\u0275template(12,fe,2,0,"ng-template",20),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().initial=l}),e.\u0275\u0275template(13,xe,1,0,"ng-template",21),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().overlay=l}),e.\u0275\u0275elementEnd()}if(2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("tuiSheetOptions",t.options)("tuiSheet",t.open),e.\u0275\u0275advance(2),e.\u0275\u0275property("documentationPropertyValue",t.closeable),e.\u0275\u0275advance(2),e.\u0275\u0275property("documentationPropertyValues",t.imageVariants)("documentationPropertyValue",t.image),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.imageSlide),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",t.stopsVariants)("documentationPropertyValue",t.stops),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.initial),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.overlay)}}function Ne(n,a){if(1&n&&(e.\u0275\u0275elementStart(0,"ol",31),e.\u0275\u0275elementStart(1,"li"),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275i18nStart(3,32),e.\u0275\u0275element(4,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"tui-doc-code",33),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"li"),e.\u0275\u0275elementStart(7,"p"),e.\u0275\u0275i18nStart(8,34),e.\u0275\u0275element(9,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(10,"tui-doc-code",35),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"li"),e.\u0275\u0275elementStart(12,"p"),e.\u0275\u0275i18n(13,36),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("code",t.exampleModule),e.\u0275\u0275advance(5),e.\u0275\u0275property("code",t.exampleHtml)}}let Pe=(()=>{class n{constructor(t){this.isMobile=t,this.templateRef="",this.example1={TypeScript:o.e(27980).then(o.t.bind(o,27980,17)),HTML:o.e(14065).then(o.t.bind(o,14065,17))},this.example2={TypeScript:o.e(56393).then(o.t.bind(o,56393,17)),HTML:o.e(80701).then(o.t.bind(o,80701,17))},this.example3={TypeScript:o.e(20075).then(o.t.bind(o,20075,17)),HTML:o.e(12601).then(o.t.bind(o,12601,17)),LESS:o.e(46823).then(o.t.bind(o,46823,17))},this.example4={TypeScript:o.e(13242).then(o.t.bind(o,13242,17)),HTML:o.e(18247).then(o.t.bind(o,18247,17)),LESS:o.e(14582).then(o.t.bind(o,14582,17))},this.example5={TypeScript:o.e(86695).then(o.t.bind(o,86695,17)),HTML:o.e(35781).then(o.t.bind(o,35781,17)),LESS:o.e(95952).then(o.t.bind(o,95952,17))},this.example6={TypeScript:o.e(78946).then(o.t.bind(o,78946,17)),HTML:o.e(19116).then(o.t.bind(o,19116,17)),LESS:o.e(80217).then(o.t.bind(o,80217,17))},this.exampleModule=o.e(37086).then(o.t.bind(o,37086,17)),this.exampleHtml=o.e(44694).then(o.t.bind(o,44694,17)),this.closeable=m.JX.closeable,this.image=m.JX.image,this.imageSlide=m.JX.imageSlide,this.initial=m.JX.initial,this.overlay=m.JX.overlay,this.stops=m.JX.stops,this.open=!1,this.imageVariants=[this.image,"/assets/images/avatar.jpg","Template"],this.stopsVariants=[this.stops,["100px"],["10rem","20rem"]]}get computedImage(){return"Template"===this.image?this.templateRef:this.image}get options(){return{closeable:this.closeable,image:this.computedImage,imageSlide:this.imageSlide,stops:this.stops,initial:this.initial,overlay:this.overlay}}toggle(){this.open=!this.open}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(S.fLQ))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["example-sheet"]],viewQuery:function(t,i){if(1&t&&e.\u0275\u0275viewQuery(Te,5),2&t){let l;e.\u0275\u0275queryRefresh(l=e.\u0275\u0275loadQuery())&&(i.templateRef=l.first)}},decls:4,vars:0,consts:function(){let a,t,i,l,s,_,T,f,x,y,N,P,v,$,b,A,L;return a=$localize`:␟7b320cfede5dfb62207fd258205dec29002ded0b␟367530706575500574:String`,t=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,i=$localize`:␟bc2e854e111ecf2bd7db170da5e3c2ed08181d88␟6201638315245239510:Advanced`,l=$localize`:␟878055125cb8179b9acca778e8058e4c37d7931c␟4224425564565570136:Elastic sticky`,s=$localize`:␟c4f3865ea4353ffabaa13269d848a15589c33294␟410395238023660102:Scroll`,_=$localize`:␟12fcf30268b4593c4ea4460d54ce762d89865908␟6340245878091220905:IntersectionObserver`,T=$localize`:␟17df46c279c3811bee96b6af37e46e760d333ae8␟544235089504012978: A mobile draggable sheet popup ${"\ufffd*1:1\ufffd\ufffd#1:1\ufffd"}:START_TAG_TUI_NOTIFICATION: This component only works on mobile devices. Enable emulation in DevTools ${"[\ufffd/#1:1\ufffd\ufffd/*1:1\ufffd|\ufffd/#6\ufffd|\ufffd/#12\ufffd]"}:CLOSE_TAG_TUI_NOTIFICATION:${"\ufffd#2\ufffd"}:START_TAG_TUI_DOC_EXAMPLE:${"\ufffd#3\ufffd"}:START_TAG_TUI_SHEET_EXAMPLE_1:${"\ufffd/#3\ufffd"}:CLOSE_TAG_TUI_SHEET_EXAMPLE_1:${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd|\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#15\ufffd|\ufffd/#17\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\ufffd#4\ufffd"}:START_TAG_TUI_DOC_EXAMPLE_1:${"\ufffd#5\ufffd"}:START_TAG_TUI_SHEET_EXAMPLE_2:${"\ufffd/#5\ufffd"}:CLOSE_TAG_TUI_SHEET_EXAMPLE_2:${"[\ufffd#6\ufffd|\ufffd#12\ufffd]"}:START_TAG_TUI_NOTIFICATION_1: Note ${"[\ufffd#7\ufffd|\ufffd#14\ufffd]"}:START_TAG_CODE:SheetHeading${"[\ufffd/#7\ufffd|\ufffd/#14\ufffd]"}:CLOSE_TAG_CODE: component that styles the heading and adds close button if sheet is closeable. ${"[\ufffd/#1:1\ufffd\ufffd/*1:1\ufffd|\ufffd/#6\ufffd|\ufffd/#12\ufffd]"}:CLOSE_TAG_TUI_NOTIFICATION:${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd|\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#15\ufffd|\ufffd/#17\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\ufffd#8\ufffd"}:START_TAG_TUI_DOC_EXAMPLE_2:${"\ufffd#9\ufffd"}:START_TAG_TUI_SHEET_EXAMPLE_3:${"\ufffd/#9\ufffd"}:CLOSE_TAG_TUI_SHEET_EXAMPLE_3:${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd|\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#15\ufffd|\ufffd/#17\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\ufffd#10\ufffd"}:START_TAG_TUI_DOC_EXAMPLE_3:${"\ufffd#11\ufffd"}:START_TAG_TUI_SHEET_EXAMPLE_4:${"\ufffd/#11\ufffd"}:CLOSE_TAG_TUI_SHEET_EXAMPLE_4:${"[\ufffd#6\ufffd|\ufffd#12\ufffd]"}:START_TAG_TUI_NOTIFICATION_1: Using ${"\ufffd#13\ufffd"}:START_LINK:${"[\ufffd#7\ufffd|\ufffd#14\ufffd]"}:START_TAG_CODE:ElasticSticky${"[\ufffd/#7\ufffd|\ufffd/#14\ufffd]"}:CLOSE_TAG_CODE:${"\ufffd/#13\ufffd"}:CLOSE_LINK: directive. ${"[\ufffd/#1:1\ufffd\ufffd/*1:1\ufffd|\ufffd/#6\ufffd|\ufffd/#12\ufffd]"}:CLOSE_TAG_TUI_NOTIFICATION:${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd|\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#15\ufffd|\ufffd/#17\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\ufffd#15\ufffd"}:START_TAG_TUI_DOC_EXAMPLE_4:${"\ufffd#16\ufffd"}:START_TAG_TUI_SHEET_EXAMPLE_5:${"\ufffd/#16\ufffd"}:CLOSE_TAG_TUI_SHEET_EXAMPLE_5:${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd|\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#15\ufffd|\ufffd/#17\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\ufffd#17\ufffd"}:START_TAG_TUI_DOC_EXAMPLE_5:${"\ufffd#18\ufffd"}:START_TAG_TUI_SHEET_EXAMPLE_6:${"\ufffd/#18\ufffd"}:CLOSE_TAG_TUI_SHEET_EXAMPLE_6:${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd|\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#15\ufffd|\ufffd/#17\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:`,T=e.\u0275\u0275i18nPostprocess(T),f=$localize`:␟b39d63fa1b474671b52726de98d807fac8efdd14␟789026922885983016: Whether or not a sheet can be closed by user. `,x=$localize`:␟248c35c478eb41deba7c1d911749b794c6c93a03␟1564494239753492654: Optional data to be passed to the sheet. `,y=$localize`:␟3bc21c6c63ea366375de22b440d0456ca472fe47␟209822900321825176: A content to show above the sheet. `,N=$localize`:␟5ad027d74e7ea30ad40e20e74d20867cadcdda33␟3583507394866888478: Should image slide as the sheet is dragged. `,P=$localize`:␟7e1f605b14271a9c2835c1625c805803c1fb4e0f␟3215748703455516929: An array of stop points in any units for the sheet. `,v=$localize`:␟669747bf72f03b8c3febb2d4fd6092243df752fd␟4013392256564511269: Initial stop index to open on. Indices exceeding ${"\ufffd#1\ufffd"}:START_TAG_CODE:stops${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: are treated as stop on image then stop on top of the sheet's content. `,$=$localize`:␟b3bd625e4722dd3bf642785886aaf10746acf0ad␟9103217685047430070: Show overlay under the sheet. `,b=$localize`:␟2bc15979415c542520702c4ca36c2ef49ee5b960␟2103370040640569894: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiSheetModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into main module of your app `,A=$localize`:␟7b57d41c144bff421e69fdaf640fd91f25ad7ca8␟5411998498342604928: Add ${"\ufffd#9\ufffd"}:START_TAG_CODE:tui-sheets-host${"\ufffd/#9\ufffd"}:CLOSE_TAG_CODE: to the main template like this: `,L=$localize`:␟64e1b80a8fc848d8e0d252f5168f92c64af4d1ca␟4154707475615926903:Use directive or service as shown in examples.`,[["header","Sheet","package","ADDON-MOBILE","type","components"],["pageTab",""],T,["class","tui-space_top-4",4,"ngIf"],["id","string","heading",a,3,"content"],["id","basic","heading",t,3,"content"],[1,"tui-space_top-4"],["id","advanced","heading",i,3,"content"],["id","elastic","heading",l,3,"content"],["tuiLink","","routerLink","directives/elastic-sticky"],["id","scroll","heading",s,"description","Modifying content using scroll stream from the context",3,"content"],["id","intersection","heading",_,"description","Modifying content with IntersectionObserver",3,"content"],["tuiButton","",3,"click"],["template",""],[3,"tuiSheetOptions","tuiSheet","tuiSheetChange"],["documentationPropertyName","closeable","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","data","documentationPropertyType","I"],["documentationPropertyName","image","documentationPropertyType","PolymorpheusContent<TuiSheetOptions<I>>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","imageSlide","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","stops","documentationPropertyType","string[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","initial","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","overlay","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],[1,"top"],["text","Karl Gambolputty","size","l",3,"rounded"],f,x,y,N,P,v,$,[1,"b-demo-steps"],b,["filename","myComponent.module.ts",3,"code"],A,["filename","myComponent.template.html",3,"code"],L]},template:function(t,i){1&t&&(e.\u0275\u0275elementStart(0,"tui-doc-page",0),e.\u0275\u0275template(1,Se,19,7,"ng-template",1),e.\u0275\u0275template(2,ye,14,10,"ng-template",1),e.\u0275\u0275template(3,Ne,14,2,"ng-template",1),e.\u0275\u0275elementEnd())},directives:[H.q,G.n,p.O5,U.f,K,Z,Y.L,te,ae,O.V,h.yS,le,me,ue.F,u.v,F.o,Fe.z,ce.B,pe.J,Ee.c],styles:[".top[_ngcontent-%COMP%]{background:var(--tui-accent);padding:1rem;display:flex;flex-direction:column;align-items:center}"],changeDetection:0}),n})(),ve=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[p.ez,E.fNO,E.U8r,R.DC,I.JmR,E.HiG,E.jzK,m.TL,m.M$,d.$v,D.fV,h.Bz.forChild((0,D.Ve)(Pe))]]}),n})()}}]);