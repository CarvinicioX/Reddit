import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  getResultsFromReddit: function(key) {
    var response = HTTP.call('GET', 'http://www.reddit.com/r/' + key + '/.json', {});
    var trim = response["data"];
    return trim["data"]["children"];
  }
});