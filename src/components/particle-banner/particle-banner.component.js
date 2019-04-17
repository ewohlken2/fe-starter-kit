import DomComponent from "Library/DomComponent";
import "Vendor/particles";
import "./_particle-banner.component.scss";
import { each } from "../../js/utility/dom";

export default class ParticleBannerComponent extends DomComponent {
    static name = 'particle-banner';

    constructor(el) {
        super(el);


        this.planes = this.find('[data-plane]');
        debugger;
        this.updateHeight();
        window.onresize = this.updateHeight.bind(this);


        particlesJS.load('particle-plane-1', '/assets/particles.json');
        particlesJS.load('particle-plane-2', '/assets/particles2.json');

        

        setTimeout(this.loaded.bind(this));
    }

    updateHeight() {
        this.el.style.height = `${window.innerHeight}px`;

        each(this.planes, (plane) => plane.style.height = `${window.innerHeight}px`)
    }
}