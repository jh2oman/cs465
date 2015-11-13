Router.route('/', function(){
  this.layout('outer');
  this.render('home');
})
Router.route('/home', function(){
  this.layout('outer');
  this.render('home');
})
Router.route('/profile', function(){
  this.layout('outer');
  this.render('profile');
})
Router.route('/listView', function(){
  this.layout('outer');
  this.render('listView');
})
Router.route('/details', function(){
  this.layout('outer');
  this.render('details');
})
Router.route('/addListing', function(){
  this.layout('outer');
  this.render('addListing');
})





if (Meteor.isClient) {
  
  Template.outer.events({
    //Anyting that has class="goToHome" will go to home when clicked
    'click .goToHome': function () {
      Router.go('/home');
    },

    'click .goToProfile': function () {
      Router.go('/profile');
    },


    'click .goToDetails': function () {
      Router.go('/details');
    },

    'click .goToAddListing': function () {
      Router.go('/addListing');
    },

    'click .goToListView': function () {
      Router.go('/listView');
    }
  });

  //Other Javascript Here





}

