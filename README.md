#Mettle
A sci-fi market trading game

##Technologies
- Redis
- Node.js
- Express
- React Native
- AWS Lamda
- AWS API Gateway

##Style Guide
- ES6
- Do use `function` keyword when you need to make use of `this`
- Beautify code before staging to commit

##Branch Management
###Start a feature
- Decide which feature you are working on.
- Before coding run
```
$ git checkout master
$ git pull origin master
$ git checkout -b {some_feature}
```
- To minimize merge conflicts and duplication of efforts try to work on only the
feature you've named the branch after.
- Modify only the files you need to deliver that feature.

###Pushing
- Then run `$ git add -A` before you `commit`.
- For the first push on a feature always run `$ git push -u origin {some_feature}`

###Merging
Our three core branches will be `development`, `staging`, and `master`. These
branches are not to be pushed to. They are modified through pull requests.
####The Development Branch
The development branch will contain experimental features that we may be still debugging
and troubleshooting.
####The Staging Branch
The staging branch is intended to make sure features work properly together with
all other features. When a feature is functioning properly on its own, a pull
request will be done to merge it into the staging branch.
####The Master Branch
The master branch is continuously deployed. The staging branch is merged into
this whenever all features in staging work properly together and all testing is
passed.

##Setup Virtual Devices
You'll need react native's command line tools
```
$ npm install -g react-native-cli
```
###Xcode
Make sure Xcode is installed <br />
Xcode -> Preferences... -> Locations -> Command Line Tools: Xcode 8.2.1 (8C1002)
```
$ react-native run-ios
```
###Android
Follow these guides to install Android SDK<br />
https://facebook.github.io/react-native/releases/0.23/docs/android-setup.html <br />
https://facebook.github.io/react-native/docs/getting-started.html
```
$ react-native run-android
```
