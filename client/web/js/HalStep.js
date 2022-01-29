import { auto, Automation } from "./Automation.js";
import { BaseComponent } from "./comp/BaseComponent.js";
export class HalStep extends BaseComponent {
    menu = new Menu();
    constructor() {
        super();
        this._template = `<div class='hal-step row comp'>
            <div class='list-cont col-9'>

            </div>

            <div class='btn-cont col-3'>

            </div>

        </div>`;
        this.build();
        this.menu.attach(this.tblCont);
    }
    render() {
        this.listCont.innerHTML = '';
        auto.step.steps.forEach((item) => {
            console.log(item);
            let view = new StepItem(item);
            view.attach(this.listCont);
        });
    }
    get listCont() {
        return this.getEl('div.list-cont');
    }
    get tblCont() {
        return this.getEl('div.btn-cont');
    }
}
class Menu extends BaseComponent {
    constructor() {
        super();
        this._template = `
            <div class='btn-comp'>
                <button class='tambah display-block'>Add</button>
                <button class='delete display-block'>Delete</button>
                <button class='edit display-block'>Edit</button>
                <button class='edit display-block'>Save</button>
                <button class='geser-atas display-block'>Up</button>
                <button class='geser-bawah display-block'>Down</button>
            </div>            
        `;
        this.build();
        this.tambahTbl.onclick = () => {
            console.log('tombol tambah klik');
            let step = auto.step.buatDefaultStep();
            auto.step.stepAktif = step;
            auto.halTambah.attach(document.body);
            auto.halTambah.finish = () => {
                auto.halStep.render();
                auto.step.simpan();
            };
        };
    }
    get tambahTbl() {
        return this.getEl('button.tambah');
    }
}
class StepItem extends BaseComponent {
    _step;
    constructor(step) {
        super();
        this._template = `
            <div class='row step-item comp'>
                <div class='aksi'>
                    <span class='aksi'></span>
                    <span class='info'></span>
                </div>
            </div>
        `;
        this.build();
        this._step = step;
        this.info.innerHTML = this.getInfo();
        this._elHtml.onclick = () => {
            console.log('dipilih');
            document.body.querySelectorAll('div.row.step-item.comp.dipilih').forEach((item) => {
                item.classList.remove('dipilih');
            });
            auto.step.stepAktif = this._step;
            this._elHtml.classList.add('dipilih');
        };
        console.log(step);
    }
    getInfo() {
        if (Automation.AC_BUKA == this._step.aksi) {
            return "open url: " + this._step.url;
        }
        else {
            return this._step.aksi;
        }
    }
    get step() {
        return this._step;
    }
    set step(value) {
        this._step = value;
    }
    get aksi() {
        return this.getEl('div.aksi span.aksi');
    }
    get info() {
        return this.getEl('div.aksi span.info');
    }
}
