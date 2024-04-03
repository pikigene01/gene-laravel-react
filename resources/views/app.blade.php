<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" data-app-env="{{ env('APP_ENV') }}">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Gene Laravel React Music App</title>

        @viteReactRefresh

        @vite("resources/app/index.tsx")

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="{{ asset('assets/js/jPlayer/jplayer.flat.css') }}" type="text/css" />
        <link rel="stylesheet" href="{{ asset('assets/css/app.v1.css') }}" type="text/css" />

    </head>

    <body>
        <div id="root"></div>

    <script src="{{ asset('assets/js/app.v1.js') }}"></script>
    <script src="{{ asset('assets/js/app.plugin.js') }}"></script>
    <script
      type="text/javascript"
      src="{{ asset('assets/js/jPlayer/jquery.jplayer.min.js') }}"
    ></script>
    <script
      type="text/javascript"
      src="{{ asset('assets/js/jPlayer/add-on/jplayer.playlist.min.js') }}"
    ></script>
    <script type="text/javascript" src="{{ asset('assets/js/jPlayer/demo.js') }}"></script>
    </body>

</html>
