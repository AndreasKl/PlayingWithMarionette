define([
  'backbone',
  'hbs!tmpl/item/emptyinbox'
],
  function (Backbone, EmptyInboxTmp) {
    'use strict';

    return Backbone.Marionette.ItemView.extend({

      initialize: function () {
        console.log('Initialize a emptyInbox ItemView');
      },

      template: EmptyInboxTmp,

      ui: {},

      events: {},

      onRender: function () {
      }
    });

  });
