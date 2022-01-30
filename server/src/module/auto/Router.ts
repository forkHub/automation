import express from "express";
import { util } from "../Util";
// import { step } from "./Step";

class Router {
	readonly router = express.Router();

	mapRouter(): void {
		console.debug('api router 2');

		// this.router.get("/api/auto/", (req: express.Request, resp: express.Response) => {
		// 	try {
		// 		console.log(req.body.step);
		// 		step.buatTugas("test", "isi").then(() => {
		// 			console.log('buat tugas selesai');
		// 		}).catch((e) => {
		// 			console.log('buat tugas error:');
		// 			console.error(e);
		// 		})
		// 		resp.status(200).send('');
		// 	}
		// 	catch (e) {
		// 		util.respError(resp, e);
		// 	}
		// });


		this.router.post("/api/auto/run", (req: express.Request, resp: express.Response) => {
			try {
				console.log(req.body);
				resp.status(200).send('');
			}
			catch (e) {
				util.respError(resp, e);
			}
		});
	}
}

export var routerAuto: Router = new Router();

