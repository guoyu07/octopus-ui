/**
 * Created by meathill on 16/4/20.
 */

import * as Backbone from 'backbone';

var Router = Backbone.Router.extend({
  routes: {
    ':page': 'loadPage'
  },
  loadPage: function (page) {
    $('#container').load('view/' + page + '.html?ts=' + Date.now());
  }
});

export default Router;