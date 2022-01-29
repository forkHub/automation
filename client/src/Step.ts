import { Automation } from "./Automation.js";
import { IStep } from "./Interface.js";

export class Step {
    private _steps: IStep[] = [];
    private _stepAktif: IStep;

    buatDefaultStep(): IStep {
        return {
            aksi: Automation.AC_BUKA,
            elmType: '',
            url: 'http://www.google.com',
            desc: ''
        }
    }

    tambahStep(step: IStep): void {
        this._steps.push(step);
        console.log('tambah steps, total: ' + this._steps.length);
    }

    toString(): string {
        let dataStr: string = JSON.stringify(this._steps);
        return dataStr;
    }

    simpan(): void {
        let dataStr: string = this.toString();
        window.localStorage.setItem('ha.automation.data', dataStr);
    }

    load(): void {
        try {
            let dataStr: string = window.localStorage.getItem('ha.automation.data');
            this._steps = JSON.parse(dataStr);
            this._steps = this._steps || [];
        }
        catch (e) {
            console.error(e);
        }
    }

    public get stepAktif(): IStep {
        return this._stepAktif;
    }
    public set stepAktif(value: IStep) {
        this._stepAktif = value;
    }

    public get steps(): IStep[] {
        return this._steps;
    }
}