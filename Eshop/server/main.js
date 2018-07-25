import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  getRestaurents: function () {
    
    var Future = require('fibers/future');
    const future = new Future();

    const curl = new (require( 'curl-request' ))();

    curl.get('http://77.68.80.27:4010/marketplaceapi/landingrestaurantlist?&lat=51.7354&long=-0.315091&pageindex=1&pagesize=30')
    // curl.get('https://bit.ly/2HIh7jU')

    .then(({statusCode, body, headers}) => {
        // console.log(statusCode, body, headers);
        future.return(body);
    })
    .catch((e) => {
        console.log("Error:");
        console.log(e);
    });

    const ret = future.wait(); 
    return ret;
  }
});
