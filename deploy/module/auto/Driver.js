"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.d = void 0;
const selenium_webdriver_1 = __importStar(require("selenium-webdriver"));
class WebdriverWrapper {
    until = selenium_webdriver_1.default.until;
    _driver;
    get driver() {
        return this._driver;
    }
    _driverList = [];
    get driverList() {
        return this._driverList;
    }
    _lastEl;
    constructor() {
    }
    async createBrowserChrome() {
        this._driver = await (new selenium_webdriver_1.default.Builder()
            .forBrowser('chrome')
            .withCapabilities(selenium_webdriver_1.Capabilities.chrome().set("acceptInsecureCerts", true).setAlertBehavior('dismiss')))
            .build();
        console.debug('# create browser chrome');
        console.debug("# this driver " + this.driver);
        this.driverList.push(this._driver);
    }
    async createBrowserFirefox() {
        this._driver = await (new selenium_webdriver_1.default.Builder()
            .forBrowser('firefox')
            .withCapabilities(selenium_webdriver_1.Capabilities.firefox().set("acceptInsecureCerts", true).setAlertBehavior('dismiss'))
            .build());
        this.driverList.push(this.driver);
    }
    async getTeks(l) {
        await this.jeda();
        console.debug("# get teks " + l);
        let el = (this.driver).findElement(l);
        let teksEl = await (await el).getText();
        return teksEl;
    }
    async checkTeksTidakSama(l, teks) {
        try {
            await this.checkTeks(l, teks);
        }
        catch (e) {
            return;
        }
        throw Error('Teks Sama: el ' + (await this.getTeks(l)) + '/teks tes ' + teks);
    }
    async checkTeks(l, teks) {
        let teksEl = await this.getTeks(l);
        console.debug("# check teks: " + teks);
        await this.jeda(1000);
        if (teksEl.toLowerCase() == teks.toLowerCase()) {
            return;
        }
        else {
            console.debug('# Error: ');
            console.debug('#########');
            throw Error('teksEl: ' + teksEl + '/teks: ' + teks);
        }
    }
    getCurrentDriver() {
        return this.driver;
    }
    switchDriverByIdx(idx) {
        this._driver = this.driverList[idx];
        console.log("swicht driver, idx " + idx + "/total " + this.driverList.length);
    }
    async jeda(n = 1000, debug = false) {
        if (debug) {
            console.log("# delay, n: " + n);
        }
        return new Promise((resolve, _reject) => {
            setTimeout(() => {
                // let _date: Date = new Date();
                resolve();
            }, n);
        });
    }
    async switchTo(idx) {
        await this.driver.switchTo().frame(idx);
    }
    async navigate(url) {
        console.debug("# navigate " + url);
        await this.jeda(1000);
        await this.driver.get(url).catch((e) => {
            console.log('navigate error');
            console.log(e);
        });
    }
    async checkElementTidakAda(l) {
        try {
            await this.waitElement(l, 2000);
        }
        catch (e) {
            return;
        }
        throw Error('Element ditemukan: ' + l.toString());
    }
    async sendKeys(locator, str) {
        await this.jeda(1000);
        await this.waitElement(locator, 1000);
        console.debug("# send keys, loc " + locator + "/str " + str);
        await (await (await this.driver).findElement(locator)).clear();
        await this.driver.findElement(locator).sendKeys(str);
    }
    async waitElementInvisible(locator, timeOut) {
        console.log("wait elemetn invisible");
        let el = await this.driver.wait(this.until.elementLocated(locator), timeOut);
        await this.driver.wait(this.until.elementIsNotVisible(el), timeOut);
    }
    async waitElementEnable(locator, timeOut) {
        let el = await this.driver.wait(this.until.elementsLocated(locator), timeOut);
        await this.driver.wait(this.until.elementIsEnabled(el[0]));
    }
    async waitElementVisible(locator, timeOut) {
        let el = await this.driver.wait(this.until.elementsLocated(locator), timeOut);
        await this.driver.wait(this.until.elementIsVisible(el[0]), timeOut);
    }
    async waitElement(locator, timeOut) {
        console.log("# tunggu element, locator " + locator);
        await (await this.driver).wait(this.until.elementsLocated(locator), timeOut);
    }
    async click(locator) {
        console.log("# click, locator : " + locator);
        await this.jeda(1000);
        await (await (this.driver).findElement(locator)).click();
    }
    async quit() {
        console.log("quit " + this.driver);
        await (await this.driver).quit();
    }
    get lastEl() {
        return this._lastEl;
    }
}
exports.d = new WebdriverWrapper();
