// tslint:disable-next-line: eofline
import * as dotenv from 'dotenv';

dotenv.config();

let path;
switch (process.env.NODE_ENV) {
  case 'test':
    path = `${__dirname}/../../.env.test`;
    break;
  case 'production':
    path = `${__dirname}/../../.env.production`;
    break;
  default:
    path = `${__dirname}/../../.env.development`;
}
dotenv.config({ path });
// tslint:disable-next-line: class-name
export class config {
    host;
    user;
    password;
    database;
    constructor(host = process.env.host, user = process.env.user, password = process.env.password, database = process.env.database){
      this.host = host;
      this.user = user;
      this.password = password;
      this.database = database;
    }
  }