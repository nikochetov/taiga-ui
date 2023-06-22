(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[46948],{46948:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiMonth} from '@taiga-ui/cdk';\nimport {tuiInputDateOptionsProvider} from '@taiga-ui/kit';\n\n@Component({\n    selector: 'input-month-example-3',\n    templateUrl: './index.html',\n    providers: [tuiInputDateOptionsProvider({nativePicker: true})],\n    changeDetection,\n    encapsulation,\n})\nexport class InputMonthExample3 {\n    readonly control = new FormControl();\n    readonly min = TuiMonth.currentLocal().append({month: -12});\n    readonly max = TuiMonth.currentLocal().append({month: 12});\n}\n"}}]);