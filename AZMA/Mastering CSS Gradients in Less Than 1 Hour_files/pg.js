(function (window, undefined) {
    window.ptReady = window.ptReady || [];
    var pt_loaded = new Date().getTime();
    ptReady.push(function(){
        PT.perf._tick('pub', 'pt.loaded', pt_loaded);
    });

    var Loader, loader;

    if (!window.PT) {
        window.PT = {};
    }

    // We don't support IE7
    var ie = (function() {
        var undef,
            v = 3,
            div = document.createElement('div'),
            all = div.getElementsByTagName('i');

        while (
            div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
            all[0]
        );

        return v > 4 ? v : undef;
    }());

    if (ie && ie <= 7) {
        return;
    }

    var giveaway_widgets,
        bundles = {};
    bundles['default'] = 'bundles/giveaway.packed.789f592c.js';
    // INSERT_I18N_BUNDLES
    function getBundle(){
        var bundle;
        if (window._punchtab_settings && _punchtab_settings.language){
            bundle = bundles[_punchtab_settings.language];
        }
        return bundle || bundles['default'];
    }

    if (!Loader) {
        Loader = function () {
            this.counter = 0;
            this.urls = [];
            this.callbacks = [];

            this.registerScript = function (url) {
                this.counter += 1;
                this.urls.push(url);
            };

            this.registerCallback = function (callback) {
                this.callbacks.push(callback);
            };

            this._scriptLoaded = function () {
                var i;
                this.counter -= 1;
                if (this.counter === 0 && this.callbacks.length) {
                    for(i=0;i<this.callbacks.length;i+=1){
                        this.callbacks[i].call();
                    }
                }
            };

            this._loadScript = function (url) {
                var head, script, obj;
                obj = this;
                head = document.getElementsByTagName('head')[0];
                script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = url;

                // then bind the event to the callback function
                // there are several events for cross browser compatibility
                if (script.addEventListener) {
                    script.addEventListener("load", function () {
                        obj._scriptLoaded.apply(obj);
                    }, false);
                } else if (script.readyState) {
                    script.onreadystatechange = function () {
                        if (this.readyState == 'loaded' || this.readyState == 'complete') {
                            obj._scriptLoaded.apply(obj);
                        }
                    };
                }

                // fire the loading
                head.appendChild(script);
            };

            this.go = function () {
                var i;
                for (i = 0; i < this.urls.length; i += 1) {
                    this._loadScript(this.urls[i]);
                }
            };
        };
    }

    function gup( name ){
        name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
        var regexS = "[\\?&]"+name+"=([^&#]*)";
        var regex = new RegExp( regexS );
        var results = regex.exec( window.location.href );
        if( results == null )
            return "";
        else
            return results[1];
    }

    function main_load() {
        var all_requested = new Date().getTime(), all_loaded;
        loader = new Loader();
        if (gup('pt_language') && window._punchtab_settings) {
            window._punchtab_settings.language = gup('pt_language');
        }

        // Load scripts
        loader.registerScript('//d3brdqgnb3d1f5.cloudfront.net/' + getBundle());
        if (window._punchtab_settings && window._punchtab_settings.bundles) {
            for (var i = 0; i < window._punchtab_settings.bundles.length; i += 1) {
                var bundle = window._punchtab_settings.bundles[i];
                if (bundles[bundle] !== undefined) {
                    loader.registerScript('//d3brdqgnb3d1f5.cloudfront.net/' + bundles[bundle]);
                }
            }
        }

        loader.registerCallback(function () {
            if (gup('pt_test')){
                PT.load.script(['//d3brdqgnb3d1f5.cloudfront.net/js/pt/test.js'], [function(){
                    PT.test.init(gup('pt_unsafe_test'));
                }]);
            } else {
                all_loaded = new Date().getTime();
                ptReady.push(function(){
                    PT.perf._tick('pub', 'all.loaded', all_loaded);
                });
                PT.dom.init();
                PT.widget.giveaway.init();
            }
        });
        ptReady.push(function(){
            PT.perf._tick('pub', 'all.requested', all_requested);
        });
        loader.go();
    }

    main_load();
}(window));

