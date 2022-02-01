// import { Kons } from "../Kons";
import { By } from "selenium-webdriver";
import { AutoKons } from "./AutoKons";
import { d } from "./Driver";
import { IStep } from "./Interface";

export class Jalan {

    async jalan(data: IStep[]): Promise<void> {
        console.log('jalan');
        for (let i: number = 0; i < data.length; i++) {
            let step: IStep = data[i];
            console.log(step);
            if (step.aksi == AutoKons.AC_BUKA) {
                await d.navigate(step.url);
            }
            else if (step.aksi == AutoKons.AC_KLIK) {
                await d.click(By.xpath(step.xpath));
            }
            else if (step.aksi == AutoKons.AC_BUKA_BROWSER) {
                await d.createBrowserChrome();
            }
            else {
                throw ('invalid action: ' + step.aksi);
            }
        }
    }

    buildXpath(data: IStep): string {
        let hasil: string = '';
        let text: string = "";
        let kotak: boolean = false;

        if (data.text) {
            text = data.text
            kotak = true;
        }
        else if (AutoKons.AC_KLIK == data.aksi) {

        }
        else {
            throw new Error('action not defined');
        }


        hasil = `//${data.elmType}`;
        if (kotak) {
            hasil += '[';
        }

        if (text) {
            hasil += ` contains(text(), ${text}) `;
        }

        if (kotak) {
            hasil += ']';
        }

        return hasil;   //TODO:
    }
}