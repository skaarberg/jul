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
      if (confirm("Er du sikker på at du vil slette hele spørsmålet? DETTE KAN IKKE OMGJØRES") == true) {
        Tasks.remove(this._id);
      } else {
    }
      
    },

    "click .changeQ": function () {
      // Set the checked property to the opposite of its current value
      var newQuestion = prompt("Legg til ny spørsmålstekst", "");
      Tasks.update(this._id, {
        $set: {text: newQuestion}
      });
    },

    "click .changeA1": function () {
      // Set the checked property to the opposite of its current value
      var newAnswer = prompt("Legg til nytt alternativ", "");
      Tasks.update(this._id, {
        $set: {answer1: newAnswer}
      });
    },

    "click .changeA2": function () {
      // Set the checked property to the opposite of its current value
      var newAnswer = prompt("Legg til nytt alternativ", "");
      Tasks.update(this._id, {
        $set: {answer2: newAnswer}
      });
    },

    "click .changeA3": function () {
      // Set the checked property to the opposite of its current value
      var newAnswer = prompt("Legg til nytt alternativ", "");
      Tasks.update(this._id, {
        $set: {answer3: newAnswer}
      });
    },

    "click .changeA4": function () {
      // Set the checked property to the opposite of its current value
      var newAnswer = prompt("Legg til nytt alternativ", "");
      Tasks.update(this._id, {
        $set: {answer4: newAnswer}
      });
    },
    
  });
}