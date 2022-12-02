"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[23458],{23458:(Pe,S,o)=>{o.r(S),o.d(S,{ExampleTuiSheetModule:()=>ye});var _=o(12057),d=o(33982),m=o(11693),L=o(23121),D=o(29851),F=o(63414),r=o(72002),b=o(9488),E=o(82238),e=o(74788),I=o(88331),R=o(37159),H=o(57068),J=o(79765),G=o(59193),X=o(43190),V=o(28049),B=o(77393);class w{constructor(i,t){this.count=i,this.source=t}call(i,t){return t.subscribe(new Q(i,this.count,this.source))}}class Q extends B.L{constructor(i,t,a){super(i),this.count=t,this.source=a}error(i){if(!this.isStopped){const{source:t,count:a}=this;if(0===a)return super.error(i);a>-1&&(this.count=a-1),t.subscribe(this._unsubscribeAndRecycle())}}}var j=o(46782),T=o(76189);let q=(()=>{class n{constructor(t,a){this.stream$=new J.xQ,this.stream$.pipe((0,X.w)((u,s)=>s%2?G.E:a.open("Simple sheet",{overlay:!0}).pipe((0,V.P)())),function(n=-1){return i=>i.lift(new w(n,i))}(),(0,j.R)(t)).subscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(E.TuiDestroyService,2),e.Y36(F.TuiSheetService))},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-sheet-example-1"]],features:[e._Bn([E.TuiDestroyService])],decls:2,vars:0,consts:[["tuiButton","",3,"click"]],template:function(t,a){1&t&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return a.stream$.next()}),e._uU(1," Show/Hide\n"),e.qZA())},directives:[T.v],encapsulation:2,changeDetection:0}),n})();var c=o(77888),p=o(59113);function Y(n,i){1&n&&(e.TgZ(0,"h2",2),e._uU(1,"Alexander Inkin"),e.qZA(),e.TgZ(2,"div",3),e._UZ(3,"a",4),e._UZ(4,"a",5),e._UZ(5,"a",6),e.qZA())}let k=(()=>{class n{constructor(){this.open=!1,this.options={overlay:!0,image:"assets/images/avatar.jpg"}}toggle(){this.open=!this.open}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-sheet-example-2"]],decls:3,vars:2,consts:[["tuiButton","",3,"click"],[3,"tuiSheetOptions","tuiSheet","tuiSheetChange"],["tuiSheetHeading",""],[1,"tui-space_top-4"],["tuiIconButton","","size","m","appearance","secondary","icon","tuiIconMailLarge","title","Email","href","mailto:alexander@inkin.ru",1,"tui-space_right-2"],["tuiIconButton","","size","m","appearance","secondary","icon","tuiIconCallTransferLarge","title","Telegram","href","https://t.me/waterplea",1,"tui-space_right-2"],["tuiIconButton","","size","m","appearance","secondary","icon","tuiIconMusicLarge","title","Music","href","https://waterplea.bandcamp.com/"]],template:function(t,a){1&t&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return a.toggle()}),e._uU(1," Show/Hide\n"),e.qZA(),e.YNc(2,Y,6,0,"ng-template",1),e.NdJ("tuiSheetChange",function(s){return a.open=s})),2&t&&(e.xp6(2),e.Q6J("tuiSheetOptions",a.options)("tuiSheet",a.open))},directives:[T.v,c.o,p.ui],encapsulation:2,changeDetection:0}),n})();var W=o(79121),O=o(88135),K=o(16996);function ee(n,i){1&n&&(e.TgZ(0,"h2",2),e.TgZ(1,"label",3),e._uU(2,"And the Holy Grail"),e.qZA(),e.qZA(),e.TgZ(3,"p",4),e.TgZ(4,"button",5),e._uU(5," Buy "),e._UZ(6,"tui-money",6),e.qZA(),e.TgZ(7,"button",7),e._uU(8," Rent "),e._UZ(9,"tui-money",6),e.qZA(),e.qZA(),e.TgZ(10,"button",8),e._uU(11," Add to Watch List "),e.qZA(),e.TgZ(12,"h3",9),e._uU(13,"Cast:"),e.qZA(),e.TgZ(14,"p"),e._uU(15,"John Cleese"),e.qZA(),e.TgZ(16,"p"),e._uU(17,"Eric Idle"),e.qZA(),e.TgZ(18,"p"),e._uU(19,"Michael Palin"),e.qZA(),e.TgZ(20,"p"),e._uU(21,"Graham Chapman"),e.qZA(),e.TgZ(22,"p"),e._uU(23,"Terry Gilliam"),e.qZA(),e.TgZ(24,"p"),e._uU(25,"Terry Jones"),e.qZA(),e.TgZ(26,"p"),e._uU(27,"Carol Cleveland"),e.qZA(),e._UZ(28,"hr"),e.TgZ(29,"h3"),e._uU(30,"Directed by:"),e.qZA(),e.TgZ(31,"p"),e._uU(32,"Terry Gilliam"),e.qZA(),e.TgZ(33,"p"),e._uU(34,"Terry Jones"),e.qZA(),e._UZ(35,"hr"),e.TgZ(36,"h3"),e._uU(37,"Produced by:"),e.qZA(),e.TgZ(38,"p"),e._uU(39,"Mark Forstater"),e.qZA(),e.TgZ(40,"p"),e._uU(41,"Michael White"),e.qZA(),e._UZ(42,"hr"),e.TgZ(43,"h3"),e._uU(44,"Written by:"),e.qZA(),e.TgZ(45,"p"),e._uU(46,"John Cleese"),e.qZA(),e.TgZ(47,"p"),e._uU(48,"Eric Idle"),e.qZA(),e.TgZ(49,"p"),e._uU(50,"Michael Palin"),e.qZA(),e.TgZ(51,"p"),e._uU(52,"Graham Chapman"),e.qZA(),e.TgZ(53,"p"),e._uU(54,"Terry Gilliam"),e.qZA(),e.TgZ(55,"p"),e._uU(56,"Terry Jones"),e.qZA(),e._UZ(57,"hr"),e.TgZ(58,"h3"),e._uU(59,"Budget:"),e.qZA(),e.TgZ(60,"p"),e._UZ(61,"tui-money",10),e.qZA(),e._UZ(62,"hr"),e.TgZ(63,"h3"),e._uU(64,"Box office:"),e.qZA(),e.TgZ(65,"p"),e._UZ(66,"tui-money",10),e.qZA(),e._UZ(67,"hr"),e.TgZ(68,"h3"),e._uU(69,"Release date"),e.qZA(),e.TgZ(70,"p"),e._uU(71,"April 3, 1975"),e.qZA(),e._UZ(72,"hr"),e.TgZ(73,"h3"),e._uU(74,"Running time"),e.qZA(),e.TgZ(75,"p"),e._uU(76,"92 minutes"),e.qZA(),e.TgZ(77,"footer",11),e._uU(78,"\xa9 EMI Films"),e.qZA()),2&n&&(e.xp6(6),e.Q6J("value",12.99),e.xp6(3),e.Q6J("value",4.99),e.xp6(52),e.Q6J("value",4e5),e.xp6(5),e.Q6J("value",5e6))}let te=(()=>{class n{constructor(){this.open=!1,this.options={stops:["calc(5rem + 74vw)","calc(9rem + 74vw)"],image:"https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/10/IMG_0323-1024x756.jpeg"}}toggle(){this.open=!this.open}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-sheet-example-3"]],decls:3,vars:2,consts:[["tuiButton","",3,"click"],[3,"tuiSheetOptions","tuiSheet","tuiSheetChange"],["tuiSheetHeading",""],["tuiLabel","Monty Python"],[1,"buttons"],["tuiButton","","size","m","appearance","secondary",1,"tui-space_right-2"],["currency","USD",1,"tui-space_left-1",3,"value"],["tuiButton","","size","m","appearance","secondary"],["tuiButton","","size","m",1,"action"],[1,"cast"],["currency","USD",3,"value"],[1,"footer"]],template:function(t,a){1&t&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return a.toggle()}),e._uU(1," Show/Hide\n"),e.qZA(),e.YNc(2,ee,79,4,"ng-template",1),e.NdJ("tuiSheetChange",function(s){return a.open=s})),2&t&&(e.xp6(2),e.Q6J("tuiSheetOptions",a.options)("tuiSheet",a.open))},directives:[T.v,c.o,p.ui,O.A,K.o],styles:[".buttons[_ngcontent-%COMP%]{display:flex;margin:.3rem 0 1rem}.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex:1}.action[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:calc(100% - 4rem);width:100%;display:block;z-index:1}.cast[_ngcontent-%COMP%]{margin-top:-2rem}.footer[_ngcontent-%COMP%]{margin:0 -1rem -1rem;padding:1rem 1rem 5rem;background:var(--tui-base-02)}"],changeDetection:0}),n})();var ne=o(98599),M=o(66596);function oe(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"h2",2),e.NdJ("tuiElasticSticky",function(u){return e.CHM(t),e.oxw().onElastic(u)}),e._UZ(1,"img",3),e._uU(2," Web APIs for Angular "),e.qZA(),e.TgZ(3,"p"),e._uU(4,"Our goal is to provide high quality lightweight wrappers for various native Web APIs to use with Angular."),e.qZA(),e.TgZ(5,"h3"),e._uU(6,"Our libraries"),e.qZA(),e.TgZ(7,"p"),e.TgZ(8,"a",4),e._uU(9," Common "),e.qZA(),e.qZA(),e.TgZ(10,"p"),e.TgZ(11,"a",5),e._uU(12," Universal "),e.qZA(),e.qZA(),e.TgZ(13,"p"),e.TgZ(14,"a",6),e._uU(15," Audio "),e.qZA(),e.qZA(),e.TgZ(16,"p"),e.TgZ(17,"a",7),e._uU(18," Canvas "),e.qZA(),e.qZA(),e.TgZ(19,"p"),e.TgZ(20,"a",8),e._uU(21," Geolocation "),e.qZA(),e.qZA(),e.TgZ(22,"p"),e.TgZ(23,"a",9),e._uU(24," Intersection Observer "),e.qZA(),e.qZA(),e.TgZ(25,"p"),e.TgZ(26,"a",10),e._uU(27," MIDI "),e.qZA(),e.qZA(),e.TgZ(28,"p"),e.TgZ(29,"a",11),e._uU(30," Mutation Observer "),e.qZA(),e.qZA(),e.TgZ(31,"p"),e.TgZ(32,"a",12),e._uU(33," Payment Request "),e.qZA(),e.qZA(),e.TgZ(34,"p"),e.TgZ(35,"a",13),e._uU(36," Permissions "),e.qZA(),e.qZA(),e.TgZ(37,"p"),e.TgZ(38,"a",14),e._uU(39," Resize Observer "),e.qZA(),e.qZA(),e.TgZ(40,"p"),e.TgZ(41,"a",15),e._uU(42," Speech "),e.qZA(),e.qZA(),e.TgZ(43,"p"),e.TgZ(44,"a",16),e._uU(45," Storage "),e.qZA(),e.qZA(),e.TgZ(46,"p"),e.TgZ(47,"a",17),e._uU(48," Workers "),e.qZA(),e.qZA(),e.TgZ(49,"h3"),e._uU(50,"Sponsor"),e.qZA(),e.TgZ(51,"p"),e.TgZ(52,"a",18),e._uU(53," Open Collective "),e.qZA(),e.qZA()}if(2&n){const t=e.oxw();e.xp6(1),e.Udp("opacity",t.elastic*t.elastic*t.elastic)("transform",t.transform)}}let ie=(()=>{class n{constructor(){this.open=!1,this.elastic=1,this.options={stops:["12rem"]}}get transform(){return`scale(${this.elastic*this.elastic})`}toggle(){this.elastic=1,this.open=!this.open}onElastic(t){this.elastic=t}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-sheet-example-4"]],decls:3,vars:2,consts:[["tuiButton","",3,"click"],[3,"tuiSheetOptions","tuiSheet","tuiSheetChange"],["tuiSheetHeading","",1,"heading",3,"tuiElasticSticky"],["src","assets/images/angular.svg","alt","Angular logo",1,"image"],["tuiLink","","href","https://github.com/ng-web-apis/common"],["tuiLink","","href","https://github.com/ng-web-apis/universal"],["tuiLink","","href","https://github.com/ng-web-apis/audio"],["tuiLink","","href","https://github.com/ng-web-apis/canvas"],["tuiLink","","href","https://github.com/ng-web-apis/geolocation"],["tuiLink","","href","https://github.com/ng-web-apis/intersection-observer"],["tuiLink","","href","https://github.com/ng-web-apis/midi"],["tuiLink","","href","https://github.com/ng-web-apis/mutation-observer"],["tuiLink","","href","https://github.com/ng-web-apis/payment-request"],["tuiLink","","href","https://github.com/ng-web-apis/permissions"],["tuiLink","","href","https://github.com/ng-web-apis/resize-observer"],["tuiLink","","href","https://github.com/ng-web-apis/speech"],["tuiLink","","href","https://github.com/ng-web-apis/storage"],["tuiLink","","href","https://github.com/ng-web-apis/workers"],["tuiLink","","href","https://opencollective.com/ng-web-apis"]],template:function(t,a){1&t&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return a.toggle()}),e._uU(1," Show/Hide\n"),e.qZA(),e.YNc(2,oe,54,4,"ng-template",1),e.NdJ("tuiSheetChange",function(s){return a.open=s})),2&t&&(e.xp6(2),e.Q6J("tuiSheetOptions",a.options)("tuiSheet",a.open))},directives:[T.v,c.o,p.ui,ne.X,M.V],styles:[".heading[_ngcontent-%COMP%]{height:12rem;top:-8rem;display:flex;align-items:flex-end;flex-direction:row-reverse;justify-content:space-between;background:var(--tui-support-03)}.image[_ngcontent-%COMP%]{position:absolute;height:8rem;width:100%;top:1rem;left:0;transform-origin:bottom;pointer-events:none}"],changeDetection:0}),n})();function ae(n,i){if(1&n&&(e.TgZ(0,"div",3),e.TgZ(1,"h2",4),e._uU(2," Planet Earth "),e.qZA(),e.TgZ(3,"div",5),e._UZ(4,"img",6),e.ALo(5,"async"),e.qZA(),e.TgZ(6,"p"),e._uU(7," Earth is the third planet from the Sun and the only astronomical object known to harbour and support life. About 29.2% of Earth's surface is land consisting of continents and islands. The remaining 70.8% is covered with water, mostly by oceans, seas, gulfs, and other salt-water bodies, but also by lakes, rivers, and other freshwater, which together constitute the hydrosphere. Much of Earth's polar regions are covered in ice. Earth's outer layer is divided into several rigid tectonic plates that migrate across the surface over many millions of years, while its interior remains active with a solid iron inner core, a liquid outer core that generates Earth's magnetic field, and a convective mantle that drives plate tectonics. "),e.qZA(),e.qZA()),2&n){const t=i.scroll$,a=e.oxw();e.xp6(4),e.Udp("transform",a.getTransform(e.lcZ(5,2,t)))}}let ue=(()=>{class n{constructor(){this.open=!1,this.options={overlay:!0,stops:["4.5rem"]}}toggle(){this.open=!this.open}getTransform(t){return`translate3d(0, -${100/166*(Math.round((t||0)/2)%166)}%, 0)`}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-sheet-example-5"]],decls:4,vars:2,consts:[["tuiButton","",3,"click"],["src","assets/images/earth.jpg","alt","",1,"preload"],[3,"tuiSheetOptions","tuiSheet","tuiSheetChange"],[1,"wrapper"],["tuiSheetHeading","",1,"heading"],[1,"earth"],["src","assets/images/earth.jpg","alt","",1,"image"]],template:function(t,a){1&t&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return a.toggle()}),e._uU(1," Show/Hide\n"),e.qZA(),e._UZ(2,"img",1),e.YNc(3,ae,8,4,"ng-template",2),e.NdJ("tuiSheetChange",function(s){return a.open=s})),2&t&&(e.xp6(3),e.Q6J("tuiSheetOptions",a.options)("tuiSheet",a.open))},directives:[T.v,c.o,p.ui],pipes:[_.Ov],styles:[".wrapper[_ngcontent-%COMP%]{color:#fff;background:#000;box-shadow:0 5rem 0 1rem #000}.heading[_ngcontent-%COMP%]{background:inherit}.preload[_ngcontent-%COMP%]{position:absolute;height:1px;width:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0,0,0,0);-webkit-clip-path:inset(0);clip-path:inset(0)}.earth[_ngcontent-%COMP%]{position:relative;width:50%;height:50%;margin:1rem auto;overflow:hidden}.image[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%}"],changeDetection:0}),n})();function se(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"img",6,7),e.NdJ("waIntersectionObservee",function(u){e.CHM(t);const s=e.MAs(1);return e.oxw(2).onIntersection(u,s)}),e.qZA()}2&n&&e.Q6J("src",i.$implicit,e.LSH)}function le(n,i){if(1&n&&(e.ynx(0,2),e.TgZ(1,"h2",3),e.TgZ(2,"label",4),e._uU(3,"And the Holy Grail"),e.qZA(),e.qZA(),e.YNc(4,se,2,1,"img",5),e.BQk()),2&n){const t=e.oxw();e.xp6(4),e.Q6J("ngForOf",t.images)}}let Fe=(()=>{class n{constructor(){this.open=!1,this.options={overlay:!0,stops:["5rem"]},this.images=["https://m.media-amazon.com/images/M/MV5BOTEzOTMzNzcwNF5BMl5BanBnXkFtZTgwNDcxODUyMjI@._V1_FMjpg_UX1280_.jpg","https://m.media-amazon.com/images/M/MV5BNzg0MzEwNDgwN15BMl5BanBnXkFtZTgwNTcxODUyMjI@._V1_FMjpg_UX1024_.jpg","https://m.media-amazon.com/images/M/MV5BOTE0MTMxMTY3NF5BMl5BanBnXkFtZTgwNDc3NjIwMjE@._V1_FMjpg_UX1024_.jpg","https://m.media-amazon.com/images/M/MV5BNjc4ODAyMDg3NF5BMl5BanBnXkFtZTgwOTY3NjIwMjE@._V1_FMjpg_UX600_.jpg","https://m.media-amazon.com/images/M/MV5BMTU3NDY1MTk3M15BMl5BanBnXkFtZTgwMjc3NjIwMjE@._V1_FMjpg_UX1024_.jpg"]}toggle(){this.open=!this.open}onIntersection([{isIntersecting:t}],{classList:a}){a.toggle("_visible",t)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-sheet-example-6"]],decls:3,vars:2,consts:[["tuiButton","",3,"click"],[3,"tuiSheetOptions","tuiSheet","tuiSheetChange"],["waIntersectionObserver",""],["tuiSheetHeading",""],["tuiLabel","Monty Python"],["alt","","class","image",3,"src","waIntersectionObservee",4,"ngFor","ngForOf"],["alt","",1,"image",3,"src","waIntersectionObservee"],["img",""]],template:function(t,a){1&t&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return a.toggle()}),e._uU(1," Show/Hide\n"),e.qZA(),e.YNc(2,le,5,1,"ng-template",1),e.NdJ("tuiSheetChange",function(s){return a.open=s})),2&t&&(e.xp6(2),e.Q6J("tuiSheetOptions",a.options)("tuiSheet",a.open))},directives:[T.v,c.o,m.Z7,p.ui,O.A,_.sg,m.AY],styles:[".image[_ngcontent-%COMP%]{transition-property:transform,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:100%;display:block;margin:1rem 0;transform:translate(-5rem);opacity:0}.image._visible[_ngcontent-%COMP%]{transform:none;opacity:1}"],changeDetection:0}),n})();var Te=o(31823),ce=o(20546),pe=o(17023),_e=o(44124),re=o(76349);const ge=["template"];function me(n,i){1&n&&(e.tHW(0,2,1),e._UZ(1,"tui-notification",6),e.N_p())}function Ee(n,i){if(1&n&&(e.tHW(0,2),e.YNc(1,me,2,0,"tui-notification",3),e.TgZ(2,"tui-doc-example",4),e._UZ(3,"tui-sheet-example-1"),e.qZA(),e.TgZ(4,"tui-doc-example",5),e._UZ(5,"tui-sheet-example-2"),e.TgZ(6,"tui-notification",6),e._UZ(7,"code"),e.qZA(),e.qZA(),e.TgZ(8,"tui-doc-example",7),e._UZ(9,"tui-sheet-example-3"),e.qZA(),e.TgZ(10,"tui-doc-example",8),e._UZ(11,"tui-sheet-example-4"),e.TgZ(12,"tui-notification",6),e.TgZ(13,"a",9),e._UZ(14,"code"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(15,"tui-doc-example",10),e._UZ(16,"tui-sheet-example-5"),e.qZA(),e.TgZ(17,"tui-doc-example",11),e._UZ(18,"tui-sheet-example-6"),e.qZA(),e.N_p()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",!t.isMobile),e.xp6(1),e.Q6J("content",t.example1),e.xp6(2),e.Q6J("content",t.example2),e.xp6(4),e.Q6J("content",t.example3),e.xp6(2),e.Q6J("content",t.example4),e.xp6(5),e.Q6J("content",t.example5),e.xp6(2),e.Q6J("content",t.example6)}}function he(n,i){1&n&&(e.TgZ(0,"div",22),e._UZ(1,"tui-avatar",23),e.TgZ(2,"h2"),e._uU(3,"Karl Gambolputty"),e.qZA(),e.qZA()),2&n&&(e.xp6(1),e.Q6J("rounded",!0))}function Se(n,i){if(1&n){const t=e.EpF();e._uU(0," Karl Gambolputty de von Ausfern-schplenden-schlitter-crasscrenbon-fried-digger-dingle-dangle-dongle-dungle-burstein-von-knacker-thrasher-apple-banger-horowitz-ticolensic-grander-knotty-spelltinkle-grandlich-grumblemeyer-spelterwasser-kurstlich-himbleeisen-bahnwagen-gutenabend-bitte-ein-n\xfcrnburger-bratwustle-gerspurten-mitzweimache-luber-hundsfut-gumberaber-sh\xf6nendanker-kalbsfleisch-mittler-aucher von Hautkopft of Ulm was the last-surviving relative of Johann Gambolputty de von Ausfern-schplenden-schlitter-crasscrenbon-fried-digger-dingle-dangle-dongle-dungle-burstein-von-knacker-thrasher-apple-banger-horowitz-ticolensic-grander-knotty-spelltinkle-grandlich-grumblemeyer-spelterwasser-kurstlich-himbleeisen-bahnwagen-gutenabend-bitte-ein-n\xfcrnburger-bratwustle-gerspurten-mitzweimache-luber-hundsfut-gumberaber-sh\xf6nendanker-kalbsfleisch-mittler-aucher von Hautkopft of Ulm. "),e.TgZ(1,"div",6),e.TgZ(2,"button",12),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).toggle()}),e._uU(3," Close "),e.qZA(),e.qZA()}}function de(n,i){1&n&&e.SDv(0,24)}function De(n,i){1&n&&e.SDv(0,25)}function Oe(n,i){1&n&&e.SDv(0,26)}function Me(n,i){1&n&&e.SDv(0,27)}function Ce(n,i){1&n&&e.SDv(0,28)}function fe(n,i){1&n&&(e.tHW(0,29),e._UZ(1,"code"),e.N_p())}function Ae(n,i){1&n&&e.SDv(0,30)}function Ne(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"tui-doc-demo"),e.TgZ(1,"button",12),e.NdJ("click",function(){return e.CHM(t),e.oxw().toggle()}),e._uU(2," Toggle "),e.qZA(),e.YNc(3,he,4,1,"ng-template",null,13,e.W1O),e.YNc(5,Se,4,0,"ng-template",14),e.NdJ("tuiSheetChange",function(u){return e.CHM(t),e.oxw().open=u}),e.qZA(),e.TgZ(6,"tui-doc-documentation"),e.YNc(7,de,1,0,"ng-template",15),e.NdJ("documentationPropertyValueChange",function(u){return e.CHM(t),e.oxw().closeable=u}),e.YNc(8,De,1,0,"ng-template",16),e.YNc(9,Oe,1,0,"ng-template",17),e.NdJ("documentationPropertyValueChange",function(u){return e.CHM(t),e.oxw().image=u}),e.YNc(10,Me,1,0,"ng-template",18),e.NdJ("documentationPropertyValueChange",function(u){return e.CHM(t),e.oxw().imageSlide=u}),e.YNc(11,Ce,1,0,"ng-template",19),e.NdJ("documentationPropertyValueChange",function(u){return e.CHM(t),e.oxw().stops=u}),e.YNc(12,fe,2,0,"ng-template",20),e.NdJ("documentationPropertyValueChange",function(u){return e.CHM(t),e.oxw().initial=u}),e.YNc(13,Ae,1,0,"ng-template",21),e.NdJ("documentationPropertyValueChange",function(u){return e.CHM(t),e.oxw().overlay=u}),e.qZA()}if(2&n){const t=e.oxw();e.xp6(5),e.Q6J("tuiSheetOptions",t.options)("tuiSheet",t.open),e.xp6(2),e.Q6J("documentationPropertyValue",t.closeable),e.xp6(2),e.Q6J("documentationPropertyValues",t.imageVariants)("documentationPropertyValue",t.image),e.xp6(1),e.Q6J("documentationPropertyValue",t.imageSlide),e.xp6(1),e.Q6J("documentationPropertyValues",t.stopsVariants)("documentationPropertyValue",t.stops),e.xp6(1),e.Q6J("documentationPropertyValue",t.initial),e.xp6(1),e.Q6J("documentationPropertyValue",t.overlay)}}function Ze(n,i){if(1&n&&(e.TgZ(0,"ol",31),e.TgZ(1,"li"),e.TgZ(2,"p"),e.tHW(3,32),e._UZ(4,"code"),e.N_p(),e.qZA(),e._UZ(5,"tui-doc-code",33),e.qZA(),e.TgZ(6,"li"),e.TgZ(7,"p"),e.tHW(8,34),e._UZ(9,"code"),e.N_p(),e.qZA(),e._UZ(10,"tui-doc-code",35),e.qZA(),e.TgZ(11,"li"),e.TgZ(12,"p"),e.SDv(13,36),e.qZA(),e.qZA(),e.qZA()),2&n){const t=e.oxw();e.xp6(5),e.Q6J("code",t.exampleModule),e.xp6(5),e.Q6J("code",t.exampleHtml)}}let xe=(()=>{class n{constructor(t){this.isMobile=t,this.templateRef="",this.example1={TypeScript:o.e(27980).then(o.t.bind(o,27980,17)),HTML:o.e(14065).then(o.t.bind(o,14065,17))},this.example2={TypeScript:o.e(56393).then(o.t.bind(o,56393,17)),HTML:o.e(80701).then(o.t.bind(o,80701,17))},this.example3={TypeScript:o.e(20075).then(o.t.bind(o,20075,17)),HTML:o.e(12601).then(o.t.bind(o,12601,17)),LESS:o.e(46823).then(o.t.bind(o,46823,17))},this.example4={TypeScript:o.e(13242).then(o.t.bind(o,13242,17)),HTML:o.e(18247).then(o.t.bind(o,14792,17)),LESS:o.e(14582).then(o.t.bind(o,14582,17))},this.example5={TypeScript:o.e(86695).then(o.t.bind(o,86695,17)),HTML:o.e(35781).then(o.t.bind(o,35781,17)),LESS:o.e(95952).then(o.t.bind(o,95952,17))},this.example6={TypeScript:o.e(78946).then(o.t.bind(o,78946,17)),HTML:o.e(19116).then(o.t.bind(o,19116,17)),LESS:o.e(80217).then(o.t.bind(o,80217,17))},this.exampleModule=o.e(37086).then(o.t.bind(o,37086,17)),this.exampleHtml=o.e(44694).then(o.t.bind(o,44694,17)),this.closeable=F.TUI_SHEET_DEFAULT_OPTIONS.closeable,this.image=F.TUI_SHEET_DEFAULT_OPTIONS.image,this.imageSlide=F.TUI_SHEET_DEFAULT_OPTIONS.imageSlide,this.initial=F.TUI_SHEET_DEFAULT_OPTIONS.initial,this.overlay=F.TUI_SHEET_DEFAULT_OPTIONS.overlay,this.stops=F.TUI_SHEET_DEFAULT_OPTIONS.stops,this.open=!1,this.imageVariants=[this.image,"/assets/images/avatar.jpg","Template"],this.stopsVariants=[this.stops,["100px"],["10rem","20rem"]]}get computedImage(){return"Template"===this.image?this.templateRef:this.image}get options(){return{closeable:this.closeable,image:this.computedImage,imageSlide:this.imageSlide,stops:this.stops,initial:this.initial,overlay:this.overlay}}toggle(){this.open=!this.open}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(E.TUI_IS_MOBILE))},n.\u0275cmp=e.Xpm({type:n,selectors:[["example-sheet"]],viewQuery:function(t,a){if(1&t&&e.Gf(ge,5),2&t){let u;e.iGM(u=e.CRH())&&(a.templateRef=u.first)}},decls:4,vars:0,consts:function(){let i,t,a,u,s,h,g,f,A,N,Z,x,y,P,U,$,v;return i=$localize`:␟7b320cfede5dfb62207fd258205dec29002ded0b␟367530706575500574:String`,t=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,a=$localize`:␟bc2e854e111ecf2bd7db170da5e3c2ed08181d88␟6201638315245239510:Advanced`,u=$localize`:␟878055125cb8179b9acca778e8058e4c37d7931c␟4224425564565570136:Elastic sticky`,s=$localize`:␟c4f3865ea4353ffabaa13269d848a15589c33294␟410395238023660102:Scroll`,h=$localize`:␟12fcf30268b4593c4ea4460d54ce762d89865908␟6340245878091220905:IntersectionObserver`,g=$localize`:␟17df46c279c3811bee96b6af37e46e760d333ae8␟544235089504012978: A mobile draggable sheet popup ${"\ufffd*1:1\ufffd\ufffd#1:1\ufffd"}:START_TAG_TUI_NOTIFICATION: This component only works on mobile devices. Enable emulation in DevTools ${"[\ufffd/#1:1\ufffd\ufffd/*1:1\ufffd|\ufffd/#6\ufffd|\ufffd/#12\ufffd]"}:CLOSE_TAG_TUI_NOTIFICATION:${"\ufffd#2\ufffd"}:START_TAG_TUI_DOC_EXAMPLE:${"\ufffd#3\ufffd"}:START_TAG_TUI_SHEET_EXAMPLE_1:${"\ufffd/#3\ufffd"}:CLOSE_TAG_TUI_SHEET_EXAMPLE_1:${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd|\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#15\ufffd|\ufffd/#17\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\ufffd#4\ufffd"}:START_TAG_TUI_DOC_EXAMPLE_1:${"\ufffd#5\ufffd"}:START_TAG_TUI_SHEET_EXAMPLE_2:${"\ufffd/#5\ufffd"}:CLOSE_TAG_TUI_SHEET_EXAMPLE_2:${"[\ufffd#6\ufffd|\ufffd#12\ufffd]"}:START_TAG_TUI_NOTIFICATION_1: Note ${"[\ufffd#7\ufffd|\ufffd#14\ufffd]"}:START_TAG_CODE:SheetHeading${"[\ufffd/#7\ufffd|\ufffd/#14\ufffd]"}:CLOSE_TAG_CODE: component that styles the heading and adds close button if sheet is closeable. ${"[\ufffd/#1:1\ufffd\ufffd/*1:1\ufffd|\ufffd/#6\ufffd|\ufffd/#12\ufffd]"}:CLOSE_TAG_TUI_NOTIFICATION:${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd|\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#15\ufffd|\ufffd/#17\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\ufffd#8\ufffd"}:START_TAG_TUI_DOC_EXAMPLE_2:${"\ufffd#9\ufffd"}:START_TAG_TUI_SHEET_EXAMPLE_3:${"\ufffd/#9\ufffd"}:CLOSE_TAG_TUI_SHEET_EXAMPLE_3:${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd|\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#15\ufffd|\ufffd/#17\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\ufffd#10\ufffd"}:START_TAG_TUI_DOC_EXAMPLE_3:${"\ufffd#11\ufffd"}:START_TAG_TUI_SHEET_EXAMPLE_4:${"\ufffd/#11\ufffd"}:CLOSE_TAG_TUI_SHEET_EXAMPLE_4:${"[\ufffd#6\ufffd|\ufffd#12\ufffd]"}:START_TAG_TUI_NOTIFICATION_1: Using ${"\ufffd#13\ufffd"}:START_LINK:${"[\ufffd#7\ufffd|\ufffd#14\ufffd]"}:START_TAG_CODE:ElasticSticky${"[\ufffd/#7\ufffd|\ufffd/#14\ufffd]"}:CLOSE_TAG_CODE:${"\ufffd/#13\ufffd"}:CLOSE_LINK: directive. ${"[\ufffd/#1:1\ufffd\ufffd/*1:1\ufffd|\ufffd/#6\ufffd|\ufffd/#12\ufffd]"}:CLOSE_TAG_TUI_NOTIFICATION:${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd|\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#15\ufffd|\ufffd/#17\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\ufffd#15\ufffd"}:START_TAG_TUI_DOC_EXAMPLE_4:${"\ufffd#16\ufffd"}:START_TAG_TUI_SHEET_EXAMPLE_5:${"\ufffd/#16\ufffd"}:CLOSE_TAG_TUI_SHEET_EXAMPLE_5:${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd|\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#15\ufffd|\ufffd/#17\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\ufffd#17\ufffd"}:START_TAG_TUI_DOC_EXAMPLE_5:${"\ufffd#18\ufffd"}:START_TAG_TUI_SHEET_EXAMPLE_6:${"\ufffd/#18\ufffd"}:CLOSE_TAG_TUI_SHEET_EXAMPLE_6:${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd|\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#15\ufffd|\ufffd/#17\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:`,g=e.Zx4(g),f=$localize`:␟b39d63fa1b474671b52726de98d807fac8efdd14␟789026922885983016: Whether or not a sheet can be closed by user. `,A=$localize`:␟248c35c478eb41deba7c1d911749b794c6c93a03␟1564494239753492654: Optional data to be passed to the sheet. `,N=$localize`:␟3bc21c6c63ea366375de22b440d0456ca472fe47␟209822900321825176: A content to show above the sheet. `,Z=$localize`:␟5ad027d74e7ea30ad40e20e74d20867cadcdda33␟3583507394866888478: Should image slide as the sheet is dragged. `,x=$localize`:␟7e1f605b14271a9c2835c1625c805803c1fb4e0f␟3215748703455516929: An array of stop points in any units for the sheet. `,y=$localize`:␟669747bf72f03b8c3febb2d4fd6092243df752fd␟4013392256564511269: Initial stop index to open on. Indices exceeding ${"\ufffd#1\ufffd"}:START_TAG_CODE:stops${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: are treated as stop on image then stop on top of the sheet's content. `,P=$localize`:␟b3bd625e4722dd3bf642785886aaf10746acf0ad␟9103217685047430070: Show overlay under the sheet. `,U=$localize`:␟2bc15979415c542520702c4ca36c2ef49ee5b960␟2103370040640569894: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiSheetModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into main module of your app `,$=$localize`:␟7b57d41c144bff421e69fdaf640fd91f25ad7ca8␟5411998498342604928: Add ${"\ufffd#9\ufffd"}:START_TAG_CODE:tui-sheets-host${"\ufffd/#9\ufffd"}:CLOSE_TAG_CODE: to the main template like this: `,v=$localize`:␟64e1b80a8fc848d8e0d252f5168f92c64af4d1ca␟4154707475615926903:Use directive or service as shown in examples.`,[["header","Sheet","package","ADDON-MOBILE","type","components"],["pageTab",""],g,["class","tui-space_top-4",4,"ngIf"],["id","string","heading",i,3,"content"],["id","basic","heading",t,3,"content"],[1,"tui-space_top-4"],["id","advanced","heading",a,3,"content"],["id","elastic","heading",u,3,"content"],["tuiLink","","routerLink","directives/elastic-sticky"],["id","scroll","heading",s,"description","Modifying content using scroll stream from the context",3,"content"],["id","intersection","heading",h,"description","Modifying content with IntersectionObserver",3,"content"],["tuiButton","",3,"click"],["template",""],[3,"tuiSheetOptions","tuiSheet","tuiSheetChange"],["documentationPropertyName","closeable","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","data","documentationPropertyType","I"],["documentationPropertyName","image","documentationPropertyType","PolymorpheusContent<TuiSheetOptions<I>>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","imageSlide","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","stops","documentationPropertyType","string[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","initial","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","overlay","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],[1,"top"],["text","Karl Gambolputty","size","l",3,"rounded"],f,A,N,Z,x,y,P,[1,"b-demo-steps"],U,["filename","myComponent.module.ts",3,"code"],$,["filename","myComponent.template.html",3,"code"],v]},template:function(t,a){1&t&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,Ee,19,7,"ng-template",1),e.YNc(2,Ne,14,10,"ng-template",1),e.YNc(3,Ze,14,2,"ng-template",1),e.qZA())},directives:[I.q,R.n,_.O5,H.f,q,k,W.L,te,ie,M.V,d.yS,ue,Fe,Te.F,T.v,c.o,ce.z,pe.B,_e.J,re.c],styles:[".top[_ngcontent-%COMP%]{background:var(--tui-accent);padding:1rem;display:flex;flex-direction:column;align-items:center}"],changeDetection:0}),n})(),ye=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[_.ez,r.TuiButtonModule,r.TuiLabelModule,L.TuiMoneyModule,b.TuiAvatarModule,r.TuiNotificationModule,r.TuiLinkModule,F.TuiElasticStickyModule,F.TuiSheetModule,m.$v,D.fV,d.Bz.forChild((0,D.Ve)(xe))]]}),n})()}}]);