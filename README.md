## practicalmeteor:wkwebview

Switches your meteor ios app to WKWeb​View on iOS 8+, which is significantly faster and better than the old, clunky, memory leaking UIWebView.

## Installation

Due to a meteor [bug](https://github.com/meteor/meteor/issues/4486), installation includes two steps:

```
# This replaces the default meteor cordova plugin with a version
# that can allow the use of the wkwebview cordova plugin
meteor add cordova:com.meteor.cordova-update@https://github.com/practicalmeteor/com.meteor.cordova-update/tarball/a7e98f27a26b727288da81dcfd8047eccb5f6036

# This package simply includes the wkwebview cordova plugin
meteor add pracitalmeteor:wkwebview
```
