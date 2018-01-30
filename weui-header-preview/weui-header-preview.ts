import {
    Component, KeyValueDiffers,
    ElementRef, Renderer2, HostListener
} from '@angular/core';
import { ReactComponent } from 'ng-react-component';
export interface WeuiHeaderProps {
    left: {},
    right: {}
}

export class WeuiHeaderDefault {
    left = {};
    right = {};
}

@Component({
    selector: 'weui-header-preview',
    templateUrl: './weui-header-preview.html',
    styleUrls: ['./weui-header-preview.scss']
})
export class WeuiHeaderPreviewComponent extends ReactComponent<any, any> {
    constructor(
        _differs: KeyValueDiffers,
        _ele: ElementRef,
        _render: Renderer2
    ) {
        super(_differs, _ele, _render);
    }

    onPropsChange() { }

    onStateChange() {
        console.log(this.state);
    }
}
