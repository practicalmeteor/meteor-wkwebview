log = loglevel.createPackageLogger('practicalmeteor:wkwebview')

if Meteor.isCordova
    Meteor.startup ->
      if device.platform is 'iOS'
        if window.wkwebview
          log.info 'Success: wkwebview is the cordova web view.'
        else
          log.warn 'Error: wkwebview is not the cordova web view.'
