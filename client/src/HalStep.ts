import { auto } from "./Automation.js";
import { BaseComponent } from "./comp/BaseComponent.js";
import { dialog } from "./comp/Dialog.js";
import { Util } from "./comp/Util.js";
import { IStep } from "./Interface.js";
import { Kons } from "./Kons.js";

export class HalStep extends BaseComponent {
    private menu: Menu = new Menu()

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

    init(): void {
        this.menu.init();
    }

    render(): void {
        this.listCont.innerHTML = '';
        auto.step.steps.forEach((item: IStep) => {
            // console.log(item);
            let view: StepItem = new StepItem(item);
            view.attach(this.listCont);
            if (auto.step.stepAktif == item) {
                view.dipilih();
            }
        });
    }

    get listCont(): HTMLDivElement {
        return this.getEl('div.list-cont') as HTMLDivElement;
    }

    get tblCont(): HTMLButtonElement {
        return this.getEl('div.btn-cont') as HTMLButtonElement;
    }
}

class Menu extends BaseComponent {
    private handler: MenuHandler = new MenuHandler();

    constructor() {
        super();
        this._template = `
            <div class='btn-comp'>
                <button class='jalan display-block'>Run</button>
                <button class='tambah display-block'>Add</button>
                <button class='delete display-block'>Delete</button>
                <button class='edit display-block'>Edit</button>
                <button class='edit display-block'>Save</button>
                <button class='geser-atas display-block'>Up</button>
                <button class='geser-bawah display-block'>Down</button>
            </div>
        `;
        this.build();
    }

    init(): void {
        this.handler.view = this;
        this.handler.init();
    }

    get jalanTbl(): HTMLButtonElement {
        return this.getEl('button.jalan') as HTMLButtonElement;
    }

    get tambahTbl(): HTMLButtonElement {
        return this.getEl('button.tambah') as HTMLButtonElement;
    }

    get hapusTbl(): HTMLButtonElement {
        return this.getEl('button.delete') as HTMLButtonElement;
    }

    get geserAtasTbl(): HTMLButtonElement {
        return this.getEl('button.geser-atas') as HTMLButtonElement;
    }

    get geserBawahTbl(): HTMLButtonElement {
        return this.getEl("button.geser-bawah") as HTMLButtonElement;
    }

}

class MenuHandler {
    private _view: Menu;
    public set view(value: Menu) {
        this._view = value;
    }

    init(): void {
        this._view.tambahTbl.onclick = () => {
            console.log('tombol tambah klik');
            let step: IStep = auto.step.buatDefaultStep();
            auto.step.stepAktif = step;
            auto.halTambah.attach(document.body);
            auto.halTambah.finish = () => {
                auto.halStep.render();
                auto.step.simpan();
            }
        }

        this._view.jalanTbl.onclick = () => {
            console.log('jalan tombol klik');
            let steps: any = {
                step: auto.step.toString()
            }

            Util.Ajax2('post', '/api/auto/run', JSON.stringify(steps)).then((s: string) => {
                console.log('complete: ' + s);
            }).catch((e) => {
                console.error(e);
                dialog.tampil(e.message);
            });
        }

        this._view.hapusTbl.onclick = () => {
            console.log('hapus click');
            auto.step.hapus();
            auto.halStep.render();
            auto.step.simpan();
        }

        this._view.geserAtasTbl.onclick = () => {
            console.log('geser atas');
            auto.step.geserAtas(auto.step.stepAktif);
            auto.halStep.render();
            auto.step.simpan();
        }
    }
}

class StepItem extends BaseComponent {
    private _step: IStep;

    constructor(step: IStep) {
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
            this.dipilih();
        }

        // console.log(step);
    }

    dipilih(): void {
        document.body.querySelectorAll('div.row.step-item.comp.dipilih').forEach((item: Element) => {
            item.classList.remove('dipilih');
        });

        auto.step.stepAktif = this._step;
        this._elHtml.classList.add('dipilih');
    }

    getInfo(): string {
        if (Kons.AC_BUKA == this._step.aksi) {
            return "open url: " + this._step.url;
        }
        else {
            return this._step.aksi;
        }

    }

    public get step(): IStep {
        return this._step;
    }
    public set step(value: IStep) {
        this._step = value;
    }

    get aksi(): HTMLSpanElement {
        return this.getEl('div.aksi span.aksi') as HTMLSpanElement;
    }

    get info(): HTMLSpanElement {
        return this.getEl('div.aksi span.info') as HTMLSpanElement;
    }
}