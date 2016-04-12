import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Hackers = new Mongo.Collection('hackers');


if(Meteor.isServer){
  Meteor.publish('hackers', function hackersPublication() {
    return Hackers.find({allegiance:"White Hat"});
  });
}

Meteor.methods({
  'hackers.insert'(object){
      return Hackers.insert(object);
  }
});
