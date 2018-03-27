import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/App.js'

Meteor.startup(() => {
  var response = HTTP.call('GET', 'http://www.reddit.com/r/funny/.json', {});
  var trim = response["data"]["data"]["children"];
  render(<App />, document.getElementById('render-target'));

});

Meteor.methods({
  move : function() {
    var bar = document.getElementById('bar'); 
    console.log(bar);
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++; 
            bar.style.width = width + '%'; 
        }
    }
  }
});