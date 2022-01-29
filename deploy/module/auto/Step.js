"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.step = exports.Step = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
const Data_1 = require("./Data");
const Driver_1 = require("./Driver");
// import { configDB } from "./share/ConfigDB";
class Step {
    async reset() {
        // await d.navigate(data.urlHapus + configDB.admin.pass);
    }
    async buatTugas(judul, isi) {
        console.log("data:");
        console.log(Data_1.data);
        await Driver_1.d.createBrowserChrome();
        await Driver_1.d.navigate(Data_1.data.urlMain);
        await this.isiLogin('test', 'test');
        await Driver_1.d.click(selenium_webdriver_1.By.css(Data_1.Hal.halDepan.daftarTugas));
        await Driver_1.d.click(selenium_webdriver_1.By.css(Data_1.Hal.halDaftarTugas.tambah));
        //halaman tugas
        await Driver_1.d.sendKeys(selenium_webdriver_1.By.css(Data_1.Hal.tugasBaru.judul), judul);
        await Driver_1.d.sendKeys(selenium_webdriver_1.By.css(Data_1.Hal.tugasBaru.deskripsi), isi);
        await Driver_1.d.click(selenium_webdriver_1.By.css(Data_1.Hal.tugasBaru.petugas.pertama));
        await Driver_1.d.click(selenium_webdriver_1.By.css(Data_1.Hal.tugasBaru.simpanTbl));
        await Driver_1.d.checkTeks(selenium_webdriver_1.By.css(Data_1.Hal.comp.dialog.judul), 'data berhasil disimpan');
        await Driver_1.d.click(selenium_webdriver_1.By.css(Data_1.Hal.comp.dialog.okTbl));
    }
    async checkTugasAda(judul) {
        console.log(">> CHECK TUGAS DI DAFTAR TUGAS");
        await Driver_1.d.navigate(Data_1.data.urlMain);
        await Driver_1.d.click(selenium_webdriver_1.By.css(Data_1.Hal.halDepan.daftarTugas));
        //check tugas ada di daftar tugas
        await Driver_1.d.checkTeks(selenium_webdriver_1.By.css(Data_1.Hal.halDaftarTugas.list.pertama.judul), judul);
    }
    async isiLogin(user, pass) {
        await Driver_1.d.sendKeys(selenium_webdriver_1.By.css(Data_1.Hal.halLogin.user), user);
        await Driver_1.d.sendKeys(selenium_webdriver_1.By.css(Data_1.Hal.halLogin.pass), pass);
        await Driver_1.d.click(selenium_webdriver_1.By.css(Data_1.Hal.halLogin.btnLogin));
    }
    async logout() {
        await Driver_1.d.navigate(Data_1.data.urlLogout);
    }
}
exports.Step = Step;
exports.step = new Step();
