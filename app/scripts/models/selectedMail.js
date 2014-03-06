define([
  'backbone',
  'models/mail'
],
  function (Backbone, Mail) {
    'use strict';

    return Backbone.Model.extend({

      defaults: {
        mail: new Mail()
      }

    });

  });
