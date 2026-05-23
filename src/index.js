const apiRoutes = require('./routes'); 

const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const ApiRoutes = require("./routes/index");

const db = require("./models/index");
const { City, Airport,Airplane} = require("./models/index");

const setupAndStartServer = async () => {
  // create the express object
  const app = express();    

 app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);
     
  app.listen(PORT, async () => {
    console.log(`Server started at ${PORT}`);
    if (process.env.SYNC_DB) {
      db.sequelize.sync({ alter: true });
    }
  });   
};
 
setupAndStartServer();   

// db.City.bulkCreate([{ name: 'mp1' }, { name: 'u1p' }]);//array of object
// const city = db.City.findByPk(1, {
//    include: Airport
// });

// console.log(city);


// async function test(){

//    const city = await City.findOne({
//       where: {
//          name: "cawnpore"
//       },

//       include: Airport
//    });

// console.log(JSON.stringify(city.toJSON(), null, 2));
// }
// test();

 Airplane.create({modelNumber:'Bombardier CRJ'});