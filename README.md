## practicalmeteor:wkwebview

Switches your meteor ios app to WKWeb​View on iOS 8+, which is significantly faster and better than the old, clunky, memory leaking UIWebView.

## Installation

Due to a meteor [bug](https://github.com/meteor/meteor/issues/4486), installation includes two steps:

```
# This replaces the default meteor cordova plugin with a version
# that can allow the use of the wkwebview cordova plugin
meteor add cordova:com.telerik.plugins.wkwebview@https://github.com/practicalmeteor/WKWebView/tarball/4a1d577dc790cd8e2156c389a73506d22deff98c

# This package simply includes the wkwebview cordova plugin
meteor add pracitalmeteor:wkwebview
```
