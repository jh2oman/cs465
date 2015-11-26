var data = new Mongo.Collection('data');
//data.remove({});
if (data.find().count() === 0) {
    data.insert({"Date":"2014-10-12","Title":"2B2B TownHouse","Location":"1002 W Clark ST"});
    data.insert({"Date":"2015-01-23","Title":"1B1B Condo","Location":"1005 E Main ST"}),
    data.insert({"Date":"2015-05-13","Title":"Double Room Penthouse","Location":"1100 N Neil ST"}),
    data.insert({"Date":"2015-10-10","Title":"3B2B Apt","Location":"304 E John ST"}),
     data.insert({"Date":"2015-12-14","Title":"Private Room in the Loft","Location":"908 S Green ST"});
}



var msg = new Mongo.Collection('msg');
//msg.remove({});
if (msg.find().count() === 0) {
    msg.insert({"Name":"Scott","Content":"TownHouse Inquiry","Date":"2014-10-12"});
    msg.insert({"Name":"Kevin","Content":"Condo Showing","Date":"2014-10-12"}),
        msg.insert({"Name":"Jerry","Content":"Penthouse Rent","Date":"2014-10-12"}),
        msg.insert({"Name":"Tim","Content":"Apt Complain","Date":"2014-10-12"}),
        msg.insert({"Name":"Steve","Content":"Loft Showing","Date":"2014-10-12"});
}