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
Router.route('/addListing1', function(){
  this.layout('outer');
  this.render('addListing1');
})
Router.route('/addListing2', function(){
  this.layout('outer');
  this.render('addListing2');
})

Router.route('/addListing3', function(){
  this.layout('outer');
  this.render('addListing3');
})






if (Meteor.isClient) {

  /*
 * Initialize all game variables and the map
 */
 initMap = function() {
  var sv =  new google.maps.StreetViewService();
  var marker1, marker2, marker3, marker4;
  // Set up the map.
  var map = new google.maps.Map(document.getElementById('result-maps'), {
    zoom: 17,
    streetViewControl: false,
    disableDefaultUI: true
  });
  var location0 = new google.maps.LatLng(40.109269, -88.234859);
  var location1 = new google.maps.LatLng(40.110456,-88.236668);
  var location2 = new google.maps.LatLng(40.107351, -88.237311);
  var location3 = new google.maps.LatLng(40.108320, -88.235035);
  var location4 = new google.maps.LatLng(40.111154, -88.234262);
  
  var bounds = new google.maps.LatLngBounds();
  bounds.extend(location0);
  bounds.extend(location1);
  bounds.extend(location2);
  bounds.extend(location3);
  bounds.extend(location4);
map.fitBounds(bounds);
  
  marker0 = new google.maps.Marker({
        position: location0,
        icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
        animation: google.maps.Animation.DROP,
        map: map
      });

  marker1 = new google.maps.Marker({
        position: location1,
        icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
        animation: google.maps.Animation.DROP,
        map: map
      });
  marker2 = new google.maps.Marker({
        position: location2,
        icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
        animation: google.maps.Animation.DROP,
        map: map
      });
  marker3 = new google.maps.Marker({
        position: location3,
        icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
        animation: google.maps.Animation.DROP,
        map: map
      });
  marker4 = new google.maps.Marker({
        position: location4,
        icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
        animation: google.maps.Animation.DROP,
        map: map
      });
  var result0 = $('#result0');
 var result1 = $('#result1');
 var result2 = $('#result2');
 var result3 = $('#result3');
 var result4 = $('#result4');

  //add event listener for guessLocation
  result0.hover(function(event) {
      marker0.setIcon("http://maps.google.com/mapfiles/ms/icons/green-dot.png")
    }, 
    function(event) {
      marker0.setIcon("http://maps.google.com/mapfiles/ms/icons/red-dot.png")
    }
    );
  result1.hover(function(event) {
      marker1.setIcon("http://maps.google.com/mapfiles/ms/icons/green-dot.png")
    }, 
    function(event) {
      marker1.setIcon("http://maps.google.com/mapfiles/ms/icons/red-dot.png")
    });
  result2.hover( function(event) {
      marker2.setIcon("http://maps.google.com/mapfiles/ms/icons/green-dot.png")
    }, 
    function(event) {
      marker2.setIcon("http://maps.google.com/mapfiles/ms/icons/red-dot.png")
    });
  result3.hover(function(event) {
      marker3.setIcon("http://maps.google.com/mapfiles/ms/icons/green-dot.png")
    }, 
    function(event) {
      marker3.setIcon("http://maps.google.com/mapfiles/ms/icons/red-dot.png")
    });
  result4.hover(function(event) {
      marker4.setIcon("http://maps.google.com/mapfiles/ms/icons/green-dot.png")
    }, 
    function(event) {
      marker4.setIcon("http://maps.google.com/mapfiles/ms/icons/red-dot.png")
    });



  }
  
  Template.outer.events({
    //Anyting that has class="goToHome" will go to home when clicked
    'click .goToHome': function (event) {
      event.preventDefault();
      window.scroll(0, 0);
      Router.go('/home');
    },

    'click .goToProfile': function () {
      event.preventDefault();
      window.scroll(0, 0);
      Router.go('/profile');
    },


    'click .goToDetails': function () {
      event.preventDefault();
      window.scroll(0, 0);
      Router.go('/details');
    },

    'click .goToAddListing1': function () {
      event.preventDefault();
      window.scroll(0, 0);
      Router.go('/addListing1');
    },
    'click .goToAddListing2': function () {
      event.preventDefault();
      window.scroll(0, 0);
      Router.go('/addListing2');
    },
    'click .goToAddListing3': function () {
      event.preventDefault();
      window.scroll(0, 0);
      Router.go('/addListing3');
    },

    'click .goToListView': function () {
      event.preventDefault();
      window.scroll(0, 0);
      Router.go('/listView');
    }
  });

  //Other Javascript Here





}

