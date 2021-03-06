class Automation {
    private _halStep: HalStep = new HalStep();
    private _halTambah: HalTambah = new HalTambah();
    private _step: Step = new Step();


    init(): void {
        this.halStep.attach(this.cont);
        this.step.load();
        this.halStep.init();
        this.halStep.render();
        this.halTambah.init();
    }

    public get cont(): HTMLDivElement {
        return document.body.querySelector('div.cont-utama') as HTMLDivElement;
    }

    public get halTambah(): HalTambah {
        return this._halTambah;
    }

    public set halTambah(value: HalTambah) {
        this._halTambah = value;
    }

    public get halStep(): HalStep {
        return this._halStep;
    }

    public get step(): Step {
        return this._step;
    }


}

var auto: Automation;

window.onload = () => {
    auto = new Automation();
    auto.init();
}