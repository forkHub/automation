import { Automation } from "./Automation.js";
export class Step {
    _steps = [];
    _stepAktif;
    buatDefaultStep() {
        return {
            aksi: Automation.AC_BUKA,
            elmType: '',
            url: 'http://www.google.com',
            desc: ''
        };
    }
    tambahStep(step) {
        this._steps.push(step);
        console.log('tambah steps, total: ' + this._steps.length);
    }
    toString() {
        let dataStr = JSON.stringify(this._steps);
        return dataStr;
    }
    simpan() {
        let dataStr = this.toString();
        window.localStorage.setItem('ha.automation.data', dataStr);
    }
    load() {
        try {
            let dataStr = window.localStorage.getItem('ha.automation.data');
            this._steps = JSON.parse(dataStr);
            this._steps = this._steps || [];
        }
        catch (e) {
            console.error(e);
        }
    }
    get stepAktif() {
        return this._stepAktif;
    }
    set stepAktif(value) {
        this._stepAktif = value;
    }
    get steps() {
        return this._steps;
    }
}
