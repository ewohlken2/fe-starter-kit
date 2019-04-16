import { camelize } from "Utility/string";
import { find, parseDomForOpts } from "../services/dom";

export default class DomComponent {
    el;
    opts = {};

    constructor(el, opts = {}) {
        if(!el) {
            return false;
        }

        
        this.el = el;
        this.el.classList.add('js');

        if(opts) {
            this.opts = Object.assign({}, opts, parseDomForOpts(el, Object.keys(opts).map(key => camelize(key))));
        }

        console.log(this.opts)
    }

    static fromTemplate(data) {
        const html = this.template(data);
        const div = document.createElement('div');
        div.innerHTML = html;
        const el = div.firstElementChild;

        return new this(el);
    }

    loaded() {
        this.el.classList.add('js-loaded');
    }

    find(selector) {
        return find(this.el, selector);
    }
}

DomComponent.refs = {};