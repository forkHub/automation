"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Driver_1 = require("./Driver");
const Skenario_1 = require("./Skenario");
class Auto {
    s = new Skenario_1.Skenario();
    async run() {
        await Driver_1.d.createBrowserChrome();
        await this.s.buatTugas_CheckTugasAda();
    }
}
(new Auto()).run().then(() => {
}).catch((e) => {
    console.debug(e.message);
    console.debug("##################");
    // d.quit();
    // console.error(e);
});
