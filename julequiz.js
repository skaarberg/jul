Tasks = new Mongo.Collection("tasks");
Questions = new Mongo.Collection("questions");
 
if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    questions: function () {
      return Questions.find({});
    },
  });

  Template.changelist.helpers({  
    questions: function () {
      return Questions.find({});
    }
  });

  Template.newquestion.events({
    "submit .new-question": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
 
      // Get value from form element
      var text = event.target.text.value;
      var answer1 = event.target.answer1.value;
      var answer2 = event.target.answer2.value;
      var answer3 = event.target.answer3.value;
      var answer4 = event.target.answer4.value;
 
      // Insert a task into the collection
      Questions.insert({
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

  Template.change.events({
    "click .changeBtn": function () {
      // Set the checked property to the opposite of its current value
      console.log("Ting og tang");
    },
  });

  Template.question.events({
    "click .toggle-checked": function () {
      // Set the checked property to the opposite of its current value
      Questions.update(this._id, {
        $set: {checked: ! this.checked}
      });
    },

    "click .delete": function () {
      if (confirm("Er du sikker på at du vil slette hele spørsmålet? DETTE KAN IKKE OMGJØRES") == true) {
        Questions.remove(this._id);
      } else {
    }
      
    },

    "click .changeQ": function () {
      // Set the checked property to the opposite of its current value
      var newQuestion = prompt("Legg til ny spørsmålstekst", "");
      Questions.update(this._id, {
        $set: {text: newQuestion}
      });
    },

    "click .changeA1": function () {
      // Set the checked property to the opposite of its current value
      var newAnswer = prompt("Legg til nytt alternativ", "");
      Questions.update(this._id, {
        $set: {answer1: newAnswer}
      });
    },

    "click .changeA2": function () {
      // Set the checked property to the opposite of its current value
      var newAnswer = prompt("Legg til nytt alternativ", "");
      Questions.update(this._id, {
        $set: {answer2: newAnswer}
      });
    },

    "click .changeA3": function () {
      // Set the checked property to the opposite of its current value
      var newAnswer = prompt("Legg til nytt alternativ", "");
      Questions.update(this._id, {
        $set: {answer3: newAnswer}
      });
    },

    "click .changeA4": function () {
      // Set the checked property to the opposite of its current value
      var newAnswer = prompt("Legg til nytt alternativ", "");
      Questions.update(this._id, {
        $set: {answer4: newAnswer}
      });
    },
  });
}