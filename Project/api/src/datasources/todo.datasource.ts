const dotenv = require('dotenv').config();
import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

//postgres://username:password@localhost:port/database
//mysql://user:pass@host:port/db


const config = {
   name: process.env.name,
   connector: process.env.connector,
   url :process.env.url,

  //  name: 'todo',
  //  connector: 'postgresql',
  // url: 'postgres://postgres:0@localhost:5432/todo',
  // host: 'localhost',
  // port: 5432,
  // user: 'postgres',
  // password: '0',
  // database: 'todo'
};



// const config = {

//   name: process.env.name2,
//   connector: process.env.connector2,
//   url: process.env.url2,


//   // name: 'todo2',
//   // connector: 'mysql',
//   // url: '',
//   // host: 'localhost',
//   // port: 3306,
//   // user: 'root',
//   // password: 'abcd@1234',
//   // database: 'todo2'
// };

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class TodoDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'todo';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.todo', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
