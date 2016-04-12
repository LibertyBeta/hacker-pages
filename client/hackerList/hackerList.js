import { Hackers } from "../../imports/api/hackers.js";

Template.hackerList.onCreated(function bodyOnCreated() {
  Meteor.subscribe('hackers');
});

Template.hackerList.helpers({
  'Hackers': function() {
    return Hackers.find();
  },
  'createdByUser': function(){
    return this.createdBy === Meteor.userId();
  }
});
