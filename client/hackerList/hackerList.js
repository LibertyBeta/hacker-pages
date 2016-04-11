import { Hackers } from "../../imports/api/hackers.js";

Template.hackerList.helpers({
  'Hackers': function() {
    return Hackers.find();
  }
});
