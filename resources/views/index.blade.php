<!DOCTYPE html>
<html lang="cs">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Otevírám dveře vzdělání se koná v prostorách VOŠ a SPŠE Plzeň. Velkolepá prezentace více než 60 známých firem.">

        <meta property="og:title" content="Otevíráme dveře vzdělání | VOŠ a SPŠE Plzeň">
        <meta property="og:description" content="Tento „veletrh“ se koná  v prostorách VOŠ a SPŠE Plzeň, jednotlivé společnosti se prezentují ve třídách i na chodbách školy. Všechny expozice jsou volně přístupné.">
        <meta property="og:url" content="{{ \Illuminate\Support\Facades\URL::to("/") }}">
        <meta property="og:image" content="{{ \Illuminate\Support\Facades\URL::to("/images/odv_og_img.png") }}">

        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="Otevíráme dveře vzdělání | VOŠ a SPŠE Plzeň">
        <meta name="twitter:description" content="Tento „veletrh“ se koná  v prostorách VOŠ a SPŠE Plzeň, jednotlivé společnosti se prezentují ve třídách i na chodbách školy. Všechny expozice jsou volně přístupné.">
        <meta name="twitter:image" content="{{ \Illuminate\Support\Facades\URL::to("/images/odv_og_img.png") }}">

        <title>Otevíráme dveře vzdělání</title>

        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet" type="text/css">
        <link rel="canonical" href="{{ \Illuminate\Support\Facades\URL::to("/") }}" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v2.1.9/css/unicons.css">
        <link rel="shortcut icon" href="https://www.spseplzen.cz/wp-content/uploads/2017/09/logo_1.png" type="image/gif" />
    </head>
    <body>
        <noscript>
            <strong>We're sorry but ODV doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
        </noscript>
        <div id="app"></div>

        <script src="{{ asset('js/main.js') }}"></script>
    </body>
</html>
