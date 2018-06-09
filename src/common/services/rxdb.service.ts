import {SuperloginService} from "./superlogin.service";
import 'babel-polyfill';
import 'rxjs';
import RxDB, { RxDatabase } from "rxdb";
import pouchdbAdatperIdb from 'pouchdb-adapter-idb';
RxDB.plugin(pouchdbAdatperIdb);

class RxDBServiceClass {
  private initialized: boolean = false;
  private authorsDB: RxDatabase;

  constructor() {}
  init = async() => {
    if (this.initialized) {
      return true;
    }
    this.initialized = true;
    const remoteName = SuperloginService.getDbUrl('authors');
    this.authorsDB = await RxDB.create({
      name: remoteName,
      password: 'myPassword',
      adapter: 'idb',
      multiInstance: false
    });
    console.log(this.authorsDB);
    return true;
  };

  createAuthor(id, name) {
    return this.authorsDB.insertLocal(id, { name });
  }
}

export const RxDBService = new RxDBServiceClass();
