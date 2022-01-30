import { auto } from "./Automation.js";
import { BaseComponent } from "./comp/BaseComponent.js";
import { Kons } from "./Kons.js";

export class HalTambah extends BaseComponent {
    private event: EventHandler = new EventHandler();

    constructor() {
        super();

        this._template = `
            <form class='tambah-step'>
                
                <div class='form-control'>
                    <label>Action:</label> 
                    <select name='aksi'>
                        <option value='${Kons.AC_BUKA}'>open url</option>
                        <option value='${Kons.AC_KLIK}'>click</option>
                        <option value='${Kons.AC_BUKA_BROWSER}'>open browser</option>
                        <option value='${Kons.AC_TUTUP}'>close</option>
                    </select>
                </div>

                <div class='form-control url'>
                    <label>Url:</label>
                    <input type='text' name='url'/>
                </div>
                
                <div class='form-control elm-type display-none'>
                    <label>element type:</label>
                    <select name='elm-type'>
                        <option>Button</option>
                        <option>Link</option>
                    </select>
                </div>

                <div class='form-control xpath display-none'>
                    <label>xpath:</label>
                    <input type='text' name='xpath' value=''/>
                    <button class='browse' type='button'>browse ...</button>
                </div>

                <div class='form-control submit'>
                    <button class='kirim' type='submit'>OK</button>
                </div>

            </form>
        `;

        this.build();

        this.event.init();
    }

    get browseTbl(): HTMLButtonElement {
        return this.getEl('form button.browse') as HTMLButtonElement;
    }

    get xpathInput(): HTMLInputElement {
        return this.getEl('form input[name=xpath]') as HTMLInputElement;
    }

    get xpathFormControl(): HTMLDivElement {
        return this.getEl('form div.form-control.xpath') as HTMLDivElement;
    }

    get form(): HTMLFormElement {
        return this.elHtml as HTMLFormElement;
    }

    get aksiSelect(): HTMLSelectElement {
        return this.getEl('form select[name=aksi]') as HTMLSelectElement;
    }

    get elmTypeSelect(): HTMLSelectElement {
        return this.getEl('div.form-control.elm-type select') as HTMLSelectElement;
    }

    get urlFormControl(): HTMLDivElement {
        return this.getEl('div.form-control.url') as HTMLDivElement;
    }

    get urlInput(): HTMLInputElement {
        return this.getEl('div.form-control.url input') as HTMLInputElement;
    }

    get elmTypeFormControl(): HTMLDivElement {
        return this.getEl('div.form-control.elm-type') as HTMLDivElement;
    }

    get tblKirim(): HTMLButtonElement {
        return this.getEl('button[type=submit]') as HTMLButtonElement;
    }

}

class EventHandler {
    private _view: HalTambah;
    public get view(): HalTambah {
        return this._view;
    }
    public set view(value: HalTambah) {
        this._view = value;
    }

    constructor() {

    }

    init(): void {

        this.view.browseTbl.onclick = (e: MouseEvent) => {
            e.stopPropagation();
            e.preventDefault();
        }

        this.view.aksiSelect.onclick = (e: MouseEvent) => {
            e.stopPropagation();
            console.log('aksi klik: ' + this.view.aksiSelect.selectedIndex);
            let index: number = this.view.aksiSelect.selectedIndex;

            if (index == 0) {   //select url
                this.view.urlFormControl.style.display = 'block';
                this.view.elmTypeFormControl.style.display = 'none';
                this.view.xpathFormControl.style.display = 'none';
            }
            else if (1 == index) {  //click
                this.view.urlFormControl.style.display = 'none';
                this.view.elmTypeFormControl.style.display = 'none';
                this.view.xpathFormControl.style.display = 'block';
            }
            else if (2 == index) {  //buka browser
                this.view.urlFormControl.style.display = 'none';
                this.view.elmTypeFormControl.style.display = 'none';
                this.view.xpathFormControl.style.display = 'none';
            }
            else {
                throw Error('');
            }

            auto.step.stepAktif.aksi = this.view.aksiSelect.value;

            console.log('step aktif:')
            console.log(auto.step.stepAktif);
        }

        this.view.elmTypeSelect.onclick = (e: MouseEvent) => {
            e.stopPropagation();
            console.log('elm type select klik');

            auto.step.stepAktif.elmType = this.view.elmTypeSelect.value;
            console.log('step aktif:')
            console.log(auto.step.stepAktif);
        }

        this.view.urlInput.onchange = (e: Event) => {
            e.stopPropagation();
            auto.step.stepAktif.url = this.view.urlInput.value;
        }

        this.view.form.onsubmit = (): boolean => {
            try {
                auto.step.tambahStep(auto.step.stepAktif);
                auto.step.stepAktif = null;
                this.view.detach();
                this.view.finish();
            }
            catch (e) {
                console.error(e);
            }
            return false;
        }
    }


}