Router.configure({
    layoutTemplate: 'layout' // here we say that layout template will be our main layout
});

Router.route('/endre', {
    template: 'changequiz'
  });

/*
Router.route('/', function () {
     this.render('taquiz');
  });
  */