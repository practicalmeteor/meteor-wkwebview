Tinytest.addAsync 'wkwebview - test it is the cordova web view on ios', (test, done)->
  if not Meteor.isCordova
    done()
    return
    Meteor.startup ->
      try
        if device.platform is 'iOS'
          expect(window.wkwebview, 'window.wkwebview').to.be.ok
          done()
      catch ex
        test.exception(ex)
