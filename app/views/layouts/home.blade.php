<!doctype html>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    @yield('head')
</head>
<body>
    @yield('body')

    @section('scripts')
        <% HTML::script('assets/bower/angular/angular.min.js') %>
        <% HTML::script('assets/bower/angular-resource/angular-resource.min.js') %>
    @show
</body>
</html>