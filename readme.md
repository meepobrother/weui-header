```ts
import { WeuiHeaderPreviewComponent, WeuiHeaderDefault } from './weui-header-preview/weui-header-preview';
import { WeuiHeaderSettingComponent } from './weui-header-setting/weui-header-setting';

export const both = {
    'weui-header': {
        setting: WeuiHeaderSettingComponent,
        view: WeuiHeaderPreviewComponent,
        default: WeuiHeaderDefault
    }
};

export const preview = {
    'weui-header': WeuiHeaderPreviewComponent
};

export const entrys = [
    WeuiHeaderSettingComponent,
    WeuiHeaderPreviewComponent
];

export { WeuiHeaderDefault } from './weui-header-preview/weui-header-preview';
```