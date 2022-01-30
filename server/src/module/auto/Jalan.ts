// import { Kons } from "../Kons";
import { AutoKons } from "./AutoKons";
import { IStep } from "./Interface";

export class Jalan {

    async jalan(data: IStep[]): Promise<void> {
        for (let i: number = 0; i < data.length; i++) {
            let step: IStep = data[i];
            step; //TODO
            if (step.aksi == AutoKons.AC_BUKA) {

            }
            else if (step.aksi == AutoKons.AC_KLIK) {

            }
            else if (step.aksi == AutoKons.AC_BUKA_BROWSER) {

            }
            else {

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