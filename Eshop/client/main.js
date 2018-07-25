
import '../imports/ui/body.js';

import { ReactiveVar } from 'meteor/reactive-var';


Template.body.onCreated(function helloOnCreated() {
    this.list = new ReactiveVar([]);
    Meteor.call('getRestaurents', (error, result) => {
        console.log(result);
        this.list.set(result);
    });
});

Template.body.helpers({

    orders() {
         var presordersJSON = Template.instance().list.get();
         return presordersJSON.data.takingorders;
    },

});
