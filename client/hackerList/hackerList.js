import { Hackers } from "../../imports/api/hackers.js";

Template.hackerList.onCreated(function bodyOnCreated() {
  // this.state = new ReactiveDict();
  Meteor.subscribe('hackers');
});

Template.hackerList.helpers({
  'Hackers': function() {
    return Hackers.find();
  }
});
