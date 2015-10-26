Tasks = new Mongo.Collection("tasks");
 
if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    tasks: function () {
      return Tasks.find({});
    }
  });

  Template.body.events({
    "submit .new-task": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
 
      // Get value from form element
      var text = event.target.text.value;
      var answer1 = event.target.answer1.value;
      var answer2 = event.target.answer2.value;
      var answer3 = event.target.answer3.value;
      var answer4 = event.target.answer4.value;
 
      // Insert a task into the collection
      Tasks.insert({
        text: text,
        answer1: answer1,
        answer2: answer2,
        answer3: answer3,
        answer4: answer4,
        createdAt: new Date() // current time
      });
      // Clear form
      event.target.text.value = "";
      event.target.answer1.value = "";
      event.target.answer2.value = "";
      event.target.answer3.value = "";
      event.target.answer4.value = "";
    }
  });

  Template.task.events({
    "click .toggle-checked": function () {
      // Set the checked property to the opposite of its current value
      Tasks.update(this._id, {
        $set: {checked: ! this.checked}
      });
    },
    "click .delete": function () {
      Tasks.remove(this._id);
    }
  });
}