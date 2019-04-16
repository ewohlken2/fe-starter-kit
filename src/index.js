import "Scss/styles.scss";
import "Library/polyfills";

import { onLoad } from 'Utility/browser-events';
import { loadEntryComponents } from "./js/services/dom";
import ExampleWidget from "./widgets/example.widget";

// list of components that will fire conditionally depending on whether
// the static selector property on them matches any dom elements
const components = [
    // RangeSelectComponent,
    // DropdownComponent
    ExampleWidget
];

init();

function init() {
    var touchsupport = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)
    if (touchsupport){ // browser doesn't support touch
        document.documentElement.classList.add('js-touch');
    }

    var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
    var isEdge = window.navigator.userAgent.indexOf("Edge") > -1
    if (isIE11 || isEdge) {
        document.documentElement.classList.add('js-ie');
    }

    onLoad(() => {
        // GoogleService.init();
        loadEntryComponents(components);
    })
}