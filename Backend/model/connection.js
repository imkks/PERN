import sequelize from  'sequelize'
const dbconn = new sequelize.Sequelize(
    {
        host:'localhost',
        port:5432,
        database:'myapp',
        username:'krishna',
        password:'1234',
        dialect:'postgres'
        
    }
)
// try {
//     await dbconn.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// (async ()=>{
    dbconn.sync({alter:true});
    console.log("All models were synchronized successfully.");
// })()
export default dbconn