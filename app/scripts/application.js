define([
  'backbone',
  'communicator',
  'controller/mails',
  'models/mail',
  'collections/mailList',
  'views/item/selectedMail',
  'views/collection/mails'
],

  function (Backbone, Communicator, MailController, Mail, MailList) {
    'use strict';

    // Prepare sample data...
    var mailList = new MailList(
      [
        {
          from: 'Andreas',
          to: 'Scott',
          title: 'Can I haz cheezburgerz',
          content: 'Need more and more cheez'
        },
        {
          from: 'Peter',
          to: 'Marry',
          title: 'Can I haz crypto',
          content: 'Nope Nope NSA is there.'
        }
      ]
    );

    var app = new Backbone.Marionette.Application();

    app.addRegions({
      master: '.master',
      detail: '.detail'
    });

    app.addInitializer(function () {
      Backbone.history.start({ pushState: true });
      var mailController = new MailController({master: this.master, detail: this.detail, mails: mailList });
    });

    return app;
  });
