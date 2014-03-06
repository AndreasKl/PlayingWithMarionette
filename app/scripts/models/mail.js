define([
  'backbone'
],
  function (Backbone) {
    'use strict';

    return Backbone.Model.extend({

      defaults: {
        from: '',
        to: '',
        title: '',
        content: '',
        selected: false
      }

    });

  });
