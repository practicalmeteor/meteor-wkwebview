Package.describe({
  name: 'wkwebview',
  version: '0.1.0',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Cordova.depends({
  // the cordova plugin built by Meteor Core team that "emulates a server" on
  // the mobile device. Serving the files and checking for the HCP updates.
  //'com.meteor.cordova-update': 'https://github.com/practicalmeteor/com.meteor.cordova-update/tarball/a7e98f27a26b727288da81dcfd8047eccb5f6036',
  'com.telerik.plugins.wkwebview': 'https://github.com/practicalmeteor/WKWebView/tarball/4a1d577dc790cd8e2156c389a73506d22deff98c'
});

//meteor add cordova:com.meteor.cordova-update@https://github.com/practicalmeteor/com.meteor.cordova-update/tarball/a7e98f27a26b727288da81dcfd8047eccb5f6036

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use(['coffeescript', 'practicalmeteor:loglevel']);

  api.addFiles('wkwebview.coffee');
});

Package.onTest(function(api) {
  api.use(['coffeescript', 'practicalmeteor:loglevel', 'tinytest', 'wkwebview']);

  api.addFiles('wkwebview-tests.coffee', 'client');
});
