Package.describe({
  name: 'clinical:modals',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('meteor-platform');
  api.use('less');

  api.addFiles('components/confirmModal/confirmModal.js', 'client');
  api.addFiles('components/confirmModal/confirmModal.html', 'client');
  api.addFiles('components/confirmModal/confirmModal.less', 'client');

  api.addFiles('lib/modals.js');

  api.export('Modals');
  api.export('confirmModal');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('clinical:modals');
  api.addFiles('modals-tests.js');
});
