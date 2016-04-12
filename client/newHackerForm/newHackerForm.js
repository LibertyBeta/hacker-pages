
import { Hackers } from "../../imports/api/hackers.js";

Template.newHackerForm.onCreated(function bodyOnCreated() {
  // this.state = new ReactiveDict();
  Meteor.subscribe('hackers');
});

Template.newHackerForm.events({
  'submit #hackerForm' : function(event, template) {

    event.preventDefault();

    const hackerName = template.find('#hackerName').value;
    const legalName = template.find('#legalName').value;
    const email = template.find('#email').value;
    const allegiance = template.find('#allegiance').value;

    const newHacker = {
      hackerName: hackerName,
      legalName: legalName,
      email: email,
      allegiance: allegiance
    }

    // console.log(newHacker);
    Meteor.call("hackers.insert", newHacker, function (error, result){
      if(error)
      {
        console.error(error);
      } else {
        console.info(result);
      }
    });
    alert(`Added: ${newHacker.legalName}(${newHacker.hackerName})`);
  }

});
