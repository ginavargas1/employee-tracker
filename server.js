const sequalize = require('./config/connection');

//add PORT
const PORT = process.env.PORT || 3001;

// add app. 





// Force false so data doesn't get dropped on every sync
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
  