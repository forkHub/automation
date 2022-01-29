"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skenario = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
const Data_1 = require("./Data");
const Driver_1 = require("./Driver");
const Step_1 = require("./Step");
class Skenario {
    async skenarioAwalSampaiAkhir() {
        await Step_1.step.reset();
        await Driver_1.d.navigate(Data_1.data.urlMain);
        await Driver_1.d.click(selenium_webdriver_1.By.css(Data_1.Hal.halDepan.daftarTugas));
        await Driver_1.d.click(selenium_webdriver_1.By.css(Data_1.Hal.halDaftarTugas.tambah));
        //buat tugas
        console.log(">> BUAT TUGAS");
        await Driver_1.d.sendKeys(selenium_webdriver_1.By.css(Data_1.Hal.tugasBaru.judul), Data_1.data.tugas.awal.judul);
        await Driver_1.d.sendKeys(selenium_webdriver_1.By.css(Data_1.Hal.tugasBaru.deskripsi), Data_1.data.tugas.awal.isi);
        await Driver_1.d.click(selenium_webdriver_1.By.css(Data_1.Hal.tugasBaru.petugas.pertama));
        await Driver_1.d.click(selenium_webdriver_1.By.css(Data_1.Hal.tugasBaru.simpanTbl));
        await Driver_1.d.checkTeks(selenium_webdriver_1.By.css(Data_1.Hal.comp.dialog.judul), 'data berhasil disimpan');
        await Driver_1.d.click(selenium_webdriver_1.By.css(Data_1.Hal.comp.dialog.okTbl));
        //check tugas ada di daftar tugas
        console.log(">> CHECK TUGAS DI DAFTAR TUGAS");
        await Driver_1.d.checkTeks(selenium_webdriver_1.By.css(Data_1.Hal.halDaftarTugas.list.pertama.judul), Data_1.data.tugas.awal.judul);
        await Driver_1.d.click(selenium_webdriver_1.By.css(Data_1.Hal.halDaftarTugas.status));
        //check tugas ada di aktifitas
        console.log(">> CHECK TUGAS DI AKTIFITAS");
        await Driver_1.d.checkTeks(selenium_webdriver_1.By.css(Data_1.Hal.halDepan.aktifitas.pertama.el), Data_1.data.halDepan.judul.awal);
        await Driver_1.d.click(selenium_webdriver_1.By.css(Data_1.Hal.halDepan.aktifitas.pertama.el));
        await Driver_1.d.click(selenium_webdriver_1.By.css(Data_1.Hal.halLihatTugas.editTbl));
        //edit tugas
        console.log(">> EDIT TUGAS");
        await Driver_1.d.sendKeys(selenium_webdriver_1.By.css(Data_1.Hal.halEditTugas.judul), Data_1.data.tugas.edit.judul);
        await Driver_1.d.sendKeys(selenium_webdriver_1.By.css(Data_1.Hal.halEditTugas.deskripsi), Data_1.data.tugas.edit.isi);
        await Driver_1.d.click(selenium_webdriver_1.By.css(Data_1.Hal.halEditTugas.petugas.kedua));
        await Driver_1.d.click(selenium_webdriver_1.By.css(Data_1.Hal.halEditTugas.simpanTbl));
        await Driver_1.d.checkTeks(selenium_webdriver_1.By.css(Data_1.Hal.comp.dialog.judul), 'data berhasil dirubah');
        await Driver_1.d.click(selenium_webdriver_1.By.css(Data_1.Hal.comp.dialog.okTbl));
        await Driver_1.d.click(selenium_webdriver_1.By.css(Data_1.Hal.halEditTugas.nav.daftarTugasLink));
        await Driver_1.d.click(selenium_webdriver_1.By.css(Data_1.Hal.halDaftarTugas.status));
        //check tugas berubah di aktifitas
        console.log(">> CHECK TUGAS BERUBAH DI AKTIFITAS");
        await Driver_1.d.checkTeks(selenium_webdriver_1.By.css(Data_1.Hal.halDepan.aktifitas.pertama.el), Data_1.data.halDepan.judul.edit);
        await Driver_1.d.click(selenium_webdriver_1.By.css(Data_1.Hal.halDepan.daftarTugas));
        //check tugas berubah di daftar tugas
        console.log(">> CHECK TUGAS BERUBAH DI DAFTAR TUGAS");
        await Driver_1.d.checkTeks(selenium_webdriver_1.By.css(Data_1.Hal.halDaftarTugas.list.pertama.judul), Data_1.data.tugas.edit.judul);
        // await d.quit();
    }
    async buatTugas_CheckTugasAda() {
        await Step_1.step.reset();
        await Step_1.step.logout();
        await Step_1.step.buatTugas(Data_1.data.tugas.awal.judul, Data_1.data.tugas.awal.isi);
        await Step_1.step.checkTugasAda(Data_1.data.tugas.awal.judul);
    }
    async skenarioCheckNav() {
    }
}
exports.Skenario = Skenario;
