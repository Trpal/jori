import * as bodyParser from 'body-parser';
import * as express from 'express';
import { Request, Response } from 'express';
import { query } from './db/index';

class App {

  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private routes(): void {
    const router = express.Router();

    router.get('/', (req: Request, res: Response) => {
      query('SELECT now()').then((mes) => {
        console.log(mes);
      });

      res.status(200).send({
        message: 'helloas world!',
      });
    });

    router.post('/', (req: Request, res: Response) => {
      const data = req.body;
      // query a database and save data
      res.status(200).send(data);
    });
    this.app.use('/', router);
  }

}

export default new App().app;
