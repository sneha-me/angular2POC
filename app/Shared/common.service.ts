import { Instance } from 'JsStore';
declare var JsStore: any;

export class CommonService {
  _connection: Instance;

  constructor() {
    this._connection = new JsStore.Instance();
    let That = this,
      DatabaseName = 'TestDB';
    
    JsStore.isDbExist(DatabaseName).then(isExist => {
      if (isExist) {
        That._connection.openDb(DatabaseName, () => console.log("db open success"), (error) => console.log("db open  error", error));
      }
      else {
        const DataBase = That.getDatabase();
        That._connection.createDb(DataBase, () => console.log("db create success"), (error) => console.log("db create error", error));
      }
    }).catch(err => {
      // this will be fired when indexedDB is not supported.
      alert(err.Message);
    });
}

  private getDatabase = function () {
    const TblUser = {
      Name: 'User',
      Columns: [{
        Name: 'Id',
        PrimaryKey: true,
        AutoIncrement: true
      },
      {
        Name: 'Name',
        NotNull: true,
        DataType: 'string'
      },
      {
        Name: 'Email',
        DataType: 'string'
      },
      {
        Name: 'Country',
        NotNull: true,
        DataType: 'string'
      },
      {
        Name: 'Query',
		DataType: 'string'
      }
      ]
    };
    const DataBase = {
      Name: 'TestDB',
      Tables: [TblUser]
    };

    return DataBase as any;
  }
}