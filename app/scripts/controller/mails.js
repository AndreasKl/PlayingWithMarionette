define([
  'backbone',
  'communicator',
  'views/collection/mails',
  'views/item/selectedMail',
  'models/selectedMail',
  'models/mail'
],
  function (Backbone, Communicator, MailCollectionView, SelectedMailItemView, SelectedMail) {
    'use strict';

    return Backbone.Marionette.Controller.extend({

      master: {},
      detail: {},
      selectedMail: {},
      mailCollectionView: {},
      mailItemView: {},

      initialize: function (options) {
        var self = this;
        self.master = options.master;
        self.detail = options.detail;
        self.mailCollectionView = new MailCollectionView({collection: options.mails});
        self.selectedMail = new SelectedMail();
        self.mailItemView = new SelectedMailItemView({model: self.selectedMail});
        self.master.show(self.mailCollectionView);
        self.detail.show(self.mailItemView);
        self.mailCollectionView.on('itemview:mail:selected', function (event) {
          self.selectedMail.set('mail', event.model);
        });
      }

    });
  });
