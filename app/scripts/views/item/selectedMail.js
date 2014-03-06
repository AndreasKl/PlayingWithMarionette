define([
  'backbone',
  'hbs!tmpl/item/selectedmail'
],
  function (Backbone, MailTmpl) {
    'use strict';

    return Backbone.Marionette.ItemView.extend({

      modelEvents: {
        'change': function () {
          this.render();
        }
      },

      template: MailTmpl

    });
  });
