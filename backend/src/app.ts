import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import { query } from './db';

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
    this.app.use(cors());
  }

  private routes(): void {
    const router = express.Router();

    router.get('/', async (req: express.Request, res: express.Response) => {
      const { rows } = await query('SELECT now()');
      res.status(200).send(rows[0]);
    });

    router.post('/', (req: express.Request, res: express.Response) => {
      const data = req.body;
      // query a database and save data
      res.status(200).send(data);
    });
    this.app.use('/', router);
  }
}

export default new App().app;
