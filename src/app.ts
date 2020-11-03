import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import IndexRoutes from './routes/indexRoutes';
import HomeRoutes from './routes/home/homeRoutes';
import UsertRoutes from './routes/user/userRoutes';

class App {

  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(morgan('dev'));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: false}));
  }

  public routes(): void {
    this.app.use('/', IndexRoutes);
    this.app.use('/home', HomeRoutes);
    this.app.use('/users', UsertRoutes)
  }

}

export default new App().app;