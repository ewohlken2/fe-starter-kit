import DomComponent from "../js/lib/DomComponent";
import { each } from "../js/utility/dom";

export default class ExampleWidget extends DomComponent {
    static name = 'example';

    constructor(el) {
        super(el, {color: null});

        this.paragraphs = this.find('p');

        each(this.paragraphs, (p) => {
            p.style.color = this.opts.color;
        });

        setTimeout(this.loaded.bind(this));
    }
}