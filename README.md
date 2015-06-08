## practicalmeteor:wkwebview

Switches your meteor ios app to WKWeb​View on iOS 8+, which is significantly faster and better than the old, clunky, memory leaking UIWebView.

## Installation

Due to a meteor [bug](https://github.com/meteor/meteor/issues/4486), installation includes two steps:

```
# This replaces the default meteor cordova plugin with a version
# that can allow the use of the wkwebview cordova plugin
meteor add cordova:com.meteor.cordova-update@https://github.com/practicalmeteor/com.meteor.cordova-update/tarball/a7e98f27a26b727288da81dcfd8047eccb5f6036

# This package simply includes the wkwebview cordova plugin
meteor add practicalmeteor:wkwebview
```

## Important note about filling issues

This package is using a fork of Telerik's wkwebview cordova plugin. If you have non-meteor related iOS issues, please check in [their repo](https://github.com/Telerik-Verified-Plugins/WKWebView) first if a similar issue has been filed, and once the issue is fixed, I will merge the fix into my fork. So, please only create "please merge" issues here after they have been fixed in their repo.
