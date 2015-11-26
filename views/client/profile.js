var data = new Mongo.Collection('data');
var msg = new Mongo.Collection('msg');
var tplname = 'profile';

var tpl = Template[tplname];

var map;

tpl.helpers({
    'schList': function () {
        return data.find();
    },
    'msgList': function () {
        return msg.find();
    },
    'isLike': function () {
      return this.liked;
    }
});

tpl.events({
    'click .action-like': function (event, tpl) {
        var target = event.currentTarget;
        var id = target.getAttribute('data-id');
        var old_value = data.findOne(id).liked;
        if (old_value){
            data.update(id, {$set: {liked: false}});
        }
        else {
            data.update(id, {$set: {liked: true}});
        }

    },
    'dblclick .action-delete': function (event, tpl){
        var target = event.currentTarget;
        var id = target.getAttribute('data-id');
        data.remove(id);
    }

});

tpl.onRendered(function() {
    $(".house_preference_tag").tagsManager();


    $('#google_maps').on('shown.bs.modal', function (e) {
        console.log("test");
        var mapOptions = {
            center: new google.maps.LatLng("53.488188","-2.373019"),
            zoom: 8
        };
        map = new google.maps.Map(document.getElementById("map"), mapOptions);

    });
});



show_map = function() {
    $('#google_maps').modal({show:true})
}


drop_pin = function() {
    var input = document.getElementById("drop_loc").value;
    var parts = input.split(",");
    console.log(parts);
    var myLatLng = {lat: parseFloat(parts[0]), lng: parseFloat(parts[1])};
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Here!'
    });
    var new_loc_html =  '<span id="'+input+'" class="tm-tag tm-input-base tm-tag-success">'+input+'<a href="#" class="tm-tag-remove" tagidtoremove="'+input+'">x</a></span>';
    $(".freq_location_tags").append(new_loc_html);
}