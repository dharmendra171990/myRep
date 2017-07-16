<!doctype html>
<html ng-app="myApp">
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.7/angular.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.7/angular-route.min.js"></script>
  </head>
  <body>
    <script type="text/ng-template" id="/home.html">
      <h1>Home</h1>
      <h3>{{message}}</h3>
    </script>
    <script type="text/ng-template" id="/blog.html">
      <h1>Blog</h1>
      <h3>{{message}}</h3>
    </script>
    <script type="text/ng-template" id="pages/about.html">
      <h1>About</h1>
      <h3>{{message}}</h3>
    </script>
	 <script type="text/ng-template" id="pages/contact.html">
      <h1>contact</h1>
      <h3>{{message}}</h3>
    </script>

    <a href="#/">Home</a>
    <a href="#/blog">Blog</a>
    <a href="#/about">About</a>
	
	<a href="#/contact">Contact</a>

    <div ng-view></div>

    <script src="app.js"></script>
  </body>
</html>