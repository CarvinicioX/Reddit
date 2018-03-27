import React, { Component } from "react";

import Result from './Result.js';

export default class App extends Component {

	renderResults(keyword) {
    var results = Meteor.call("getResultsFromReddit", keyword, function(err, response) {
      if (response === undefined) {
        response = [{"id":1,"title":"hello","author":"me","thumbnail":"https://b.thumbs.redditmedia.com/puoolpYQR9_f80sj5IO_HZcS-v_V-1BhBVJ7i8TgnwA.jpg","num_comments":"123","ups":"12","downs":"13"}, {"id":2,"title":"hello","author":"me","thumbnail":"https://b.thumbs.redditmedia.com/jkw4U3Jk5cGXhvwJXxxOBXaSuQ6NGsGgJ3aMfKs089s.jpg","num_comments":"123","ups":"12","downs":"13"}, {"id":3,"title":"hello","author":"me","thumbnail":"https://a.thumbs.redditmedia.com/Fa021ojrZ9vqHgc60_9B6fdWvseMb2vbJM3pG9Miid4.jpg","num_comments":"123","ups":"12","downs":"13"},{"id":4,"title":"hello","author":"me","thumbnail":"https://a.thumbs.redditmedia.com/Li8IuUiXUp0B4qV3i0qXlTza1ue_fb4YJfQrhdcpkr0.jpg","num_comments":"123","ups":"12","downs":"13"}];
        //return [{"kind":"404","data":{"thumbnail":"http://www.404.agency/img/404.svg","author":"404","title":"Not Found","num_comments":"0","ups":"0","downs":"0"}}];
      }
      console.log(response);
      this.myVariable = response.map(result => (
        <Result key={result.id} result={result}/>
      ));
    });
    return ;
	}

	render() {
    var response = this.renderResults("funny");
    if (response === undefined) {
      return (
        <div className="container">
          <div id="prog"><div id="bar"></div></div>
        </div>
      );
    }
		return (
			<div className="container">
        <div className="navbar navbar-expand-lg navbar-light bg-light"><form className="form-inline my-2 my-lg-0"><input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"></input></form></div>
				{response}
			</div>
		);
	}
}
