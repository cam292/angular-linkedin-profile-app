# angular-linkedin-profile-app
A web application that utilizes AngularJS in order to authenticate with linkedIn and show a user's profile. 

#Set up
In order to use, you need to have a valid API key from linkedIn by registering your application with them, then supply a valid SDK domain in order to use linkedIn's JavaScript SDK for authentication.  The API key you recieve can be placed in index.html under the commented section "Init linkedIn's JavaScript SDK." 

#Installation
To launch:
1. npm install 
2. node app.js
3. open browser and load http://localhost:8080

#How it works
-index.html supplies a static web-page template. In index, the ng:view element is the dynamic portion of the page.
-app.js controls the ng:view element of index.html. It selects the html template according to $routeProvider (whether that be login or profile). 
-linkedInFuncs.js supplies the application with event handlers for linkedIn
-profileCtrl.js will set profile elements according to data returned from getLinkedInData().
