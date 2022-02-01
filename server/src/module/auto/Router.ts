import express from "express";
import { util } from "../Util";
import { IStep } from "./Interface";
import { Jalan } from "./Jalan";
import { step } from "./Step";
// import { step } from "./Step";

class Router {
	readonly router = express.Router();
	readonly jalan: Jalan = new Jalan();

	mapRouter(): void {
		console.debug('api router 2');

		this.router.get("/api/auto/test", (req: express.Request, resp: express.Response) => {
			try {
				console.log(req.body.step);
				step.buatTugas("test", "isi").then(() => {
					console.log('buat tugas selesai');
				}).catch((e) => {
					console.log('buat tugas error:');
					console.error(e);
				})
				resp.status(200).send('');
			}
			catch (e) {
				util.respError(resp, e);
			}
		});


		this.router.post("/api/auto/run", (req: express.Request, resp: express.Response) => {
			try {
				console.log(req.body);
				let bodyObj: IStep[] = JSON.parse(req.body.step);
				this.jalan.jalan(bodyObj).then(() => {
					resp.status(200).send('');
				}).catch((e) => {
					util.respError(resp, e);
				})
			}
			catch (e) {
				util.respError(resp, e);
			}
		});
	}
}

export var routerAuto: Router = new Router();

