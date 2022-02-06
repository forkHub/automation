class Step {
    private _steps: IStep[] = [];
    private _stepAktif: IStep;

    buatDefaultStep(): IStep {
        return {
            aksi: Kons.AC_BUKA,
            elmType: '',
            url: 'http://www.google.com',
            desc: ''
        }
    }

    tambahStep(step: IStep): void {
        this._steps.push(step);
        console.log('tambah steps, total: ' + this._steps.length);
    }

    hapus(): void {
        for (let i: number = 0; i < this._steps.length; i++) {
            if (this._steps[i] == this._stepAktif) {
                this._steps.splice(i, 1);
            }
        }
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

    getStepIdx(step: IStep): number {
        for (let i: number = 0; i < this._steps.length; i++) {
            if (this._steps[i] == step) return i;
        }

        return -1;
    }

    geserAtas(step: IStep): void {
        console.log('geser atas');
        if (!step) {
            console.log('tidak ada step aktif');
            return;
        }

        let idx: number = this.getStepIdx(step);
        if (idx > 0) {
            let step: IStep = this._steps[idx];
            this._steps[idx] = this._steps[idx - 1];
            this._steps[idx - 1] = step;
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