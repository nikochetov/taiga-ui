(window.webpackJsonp=window.webpackJsonp||[]).push([[507],{"4pBD":function(o,s,n){"use strict";n.r(s),s.default='<h6 i18n class="description">Single color</h6>\n<p>\n    Use\n    <code>&lt;progress /&gt;</code>\n    \'s CSS-property\n    <code>color</code>\n    to set solid color of progress indicator.\n</p>\n\n<progress\n    tuiProgressBar\n    max="100"\n    class="progress"\n    [value]="fastValue$ | async"\n></progress>\n\n<h6 i18n class="description">With fancy color gradient</h6>\n<p>\n    Set component\'s input property\n    <code>color</code>\n    to get more complex color combinations.\n</p>\n\n<progress\n    tuiProgressBar\n    max="100"\n    color="linear-gradient(to right, var(--tui-support-02), var(--tui-support-14), var(--tui-support-12))"\n    class="progress"\n    [value]="fastValue$ | async"\n></progress>\n\n<h6 i18n class="description">Multicolor segments</h6>\n<p>\n    Set component\'s input property\n    <code>color</code>\n    via\n    <code>tuiProgressColorSegmentsAsync</code>\n    pipe to to get multicolor segments.\n</p>\n\n<progress\n    tuiProgressBar\n    max="100"\n    class="progress"\n    [value]="fastValue$ | async"\n    [color]="colors | tuiProgressColorSegmentsAsync | async"\n></progress>\n\n<progress\n    tuiProgressBar\n    class="progress"\n    [value]="slowValue$ | async"\n    [max]="colors.length"\n    [color]="colors | tuiProgressColorSegmentsAsync | async"\n></progress>\n'}}]);