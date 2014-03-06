define([
  'backbone',
  'models/mail'
],
  function (Backbone, Mail) {
    'use strict';

    return Backbone.Collection.extend({
      model: Mail
    });
  });
