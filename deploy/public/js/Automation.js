import { HalStep } from "./HalStep.js";
import { HalTambah } from "./HalTambah.js";
import { Step } from "./Step.js";
export class Automation {
    _halStep = new HalStep();
    _halTambah = new HalTambah();
    _step = new Step();
    static AC_BUKA = 'buka';
    static AC_KLIK = 'klik';
    init() {
        this.halStep.attach(this.cont);
        this.step.load();
        this.halStep.render();
    }
    get cont() {
        return document.body.querySelector('div.cont-utama');
    }
    get halTambah() {
        return this._halTambah;
    }
    set halTambah(value) {
        this._halTambah = value;
    }
    get halStep() {
        return this._halStep;
    }
    get step() {
        return this._step;
    }
}
export var auto;
window.onload = () => {
    auto = new Automation();
    auto.init();
};
