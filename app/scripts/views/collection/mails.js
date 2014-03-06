define([
  'backbone',
  'communicator',
  'views/item/emptyInbox',
  'views/item/simpleMail'
],
  function (Backbone, Communicator, EmptyInbox, SimpleMail) {
    'use strict';

    return Backbone.Marionette.CollectionView.extend({

      initialize: function () {
      },

      itemView: SimpleMail,

      emptyView: EmptyInbox,

      ui: {},

      events: {},

      onRender: function () {
      }
    });

  });
