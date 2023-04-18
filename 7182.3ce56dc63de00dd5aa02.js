(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[7182],{7182:e=>{e.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiKeySteps} from '@taiga-ui/kit';\n\n@Component({\n    selector: 'tui-range-example-4',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiRangeExample4 {\n    readonly ticksLabels = ['0', '10K', '100K', '500k', '1000K'];\n    readonly segments = this.ticksLabels.length - 1;\n\n    // 12.5% (of total distance) per step\n    readonly stepPercentage = 100 / (2 * this.segments);\n\n    value = [0, 100_000];\n\n    readonly keySteps: TuiKeySteps = [\n        // [percent, value]\n        [0, 0],\n        [25, 10_000],\n        [50, 100_000],\n        [75, 500_000],\n        [100, 1_000_000],\n    ];\n}\n"}}]);