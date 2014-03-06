define([
  'backbone',
  'communicator',
  'hbs!tmpl/item/simplemail'
],
  function (Backbone, Communicator, SimpleMailTmpl) {
    'use strict';

    return Backbone.Marionette.ItemView.extend({

      initialize: function () {
        console.log('Initialize a Mail ItemView');
      },

      template: SimpleMailTmpl,

      ui: {
        row: '.row'
      },

      events: {
        'click .row': function () {
          this.model.collection.each(function(model){
            model.set('selected', false);
          });
          this.model.set('selected', !this.model.get('selected'));
          this.trigger('mail:selected', { mail: this.model });
        }
      },

      modelEvents: {
        'change:selected': function (model, selected) {
          if (selected) {
            this.ui.row.addClass('lead');
          } else {
            this.ui.row.removeClass('lead');
          }
        }
      }

    });

  });
