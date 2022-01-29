import { auto, Automation } from "./Automation.js";
import { BaseComponent } from "./comp/BaseComponent.js";
export class HalTambah extends BaseComponent {
    constructor() {
        super();
        this._template = `
            <form class='tambah-step'>
                
                <div class='form-control'>
                    <label>Action:</label>
                    <select name='aksi'>
                        <option value='${Automation.AC_BUKA}'>open url</option>
                        <option value='${Automation.AC_KLIK}'>click</option>
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

                <div class='form-control submit'>
                    <button class='kirim' type='submit'>OK</button>
                </div>

            </form>
        `;
        this.build();
        this.aksiSelect.onclick = (e) => {
            e.stopPropagation();
            console.log('aksi klik: ' + this.aksiSelect.selectedIndex);
            let index = this.aksiSelect.selectedIndex;
            if (index == 0) {
                this.urlFormControl.style.display = 'block';
                this.elmTypeFormControl.style.display = 'none';
            }
            else if (1 == index) {
                this.urlFormControl.style.display = 'none';
                this.elmTypeFormControl.style.display = 'block';
            }
            else {
                throw Error('');
            }
            auto.step.stepAktif.aksi = this.aksiSelect.value;
            console.log('step aktif:');
            console.log(auto.step.stepAktif);
        };
        this.elmTypeSelect.onclick = (e) => {
            e.stopPropagation();
            console.log('elm type select klik');
            auto.step.stepAktif.elmType = this.elmTypeSelect.value;
            console.log('step aktif:');
            console.log(auto.step.stepAktif);
        };
        this.urlInput.onchange = (e) => {
            e.stopPropagation();
            auto.step.stepAktif.url = this.urlInput.value;
        };
        this.form.onsubmit = () => {
            try {
                auto.step.tambahStep(auto.step.stepAktif);
                auto.step.stepAktif = null;
                this.detach();
                this.finish();
            }
            catch (e) {
                console.error(e);
            }
            return false;
        };
    }
    get form() {
        return this.elHtml;
    }
    get aksiSelect() {
        return this.getEl('form select[name=aksi]');
    }
    get elmTypeSelect() {
        return this.getEl('div.form-control.elm-type select');
    }
    get urlFormControl() {
        return this.getEl('div.form-control.url');
    }
    get urlInput() {
        return this.getEl('div.form-control.url input');
    }
    get elmTypeFormControl() {
        return this.getEl('div.form-control.elm-type');
    }
    get tblKirim() {
        return this.getEl('button[type=submit]');
    }
}
