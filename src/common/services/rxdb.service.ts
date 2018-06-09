import {SuperloginService} from "./superlogin.service";
import 'babel-polyfill';
// import 'rxjs';
import uuidv4 from 'uuid/v4';

import RxDB, {RxDatabase, QueryChangeDetector, RxCollection, RxDocument} from "rxdb";
QueryChangeDetector.enable();
QueryChangeDetector.enableDebugging();

import pouchdbAdatperIdb from 'pouchdb-adapter-idb';
import pouchAdapterHttp from 'pouchdb-adapter-http';
RxDB.plugin(pouchdbAdatperIdb);
RxDB.plugin(pouchAdapterHttp);

import {AuthorsSchema} from "../config/rxdb/authors.schema";
import {AuthorModel} from "../classes/rxdb-models/author.model";

class RxDBServiceClass {
  private initialized: boolean = false;
  private db: RxDatabase;
  private authorCol: RxCollection<AuthorModel, {}>;
  public allAuthors: RxDocument<AuthorModel, {}>[];
  constructor() {}
  init = async() => {
    if (this.initialized) {
      return true;
    }
    this.initialized = true;
    const authorsUrl = SuperloginService.getDbUrl('authors');
    this.db = await RxDB.create({
      name: 'pwa',
      // password: 'myPassword',
      adapter: 'idb',
      multiInstance: false
    });
    this.authorCol = await this.db.collection({ name: 'authors', schema: AuthorsSchema});
    this.authorCol.sync({ remote: authorsUrl });
    this.allAuthors = await this.authorCol.find().exec();
    return true;
  };

  createAuthor(name) {
    const id: string = uuidv4();
    return this.authorCol.insert({ id, name });
  }
}
export const RxDBService = new RxDBServiceClass();
