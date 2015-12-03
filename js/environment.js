/* jshint undef: true */
/* global define: false, module: false */

/** @license
 * EnvironmentJS
 * Released under the MIT license
 * Author: Patrick Ashamalla
 * Version 1.1.0.3
 */

(function( window ) {
    'use strict';

    // Variable declarations to eliminate hoisting.
    var environmentProto, Environment, ns, nsObj, i, len, _vers, _self, _na;

    // Environment prototype
    environmentProto = {
        /**
         * Environment constants
         */
        VERSION         : '1.1.0.2',
        NAME            : 'Environment',
        NAMESPACE       : 'com.unended.utils.browser',

        /**
         * userAgent executes ones and assigns the navigation userAgent all lowercase
         * @type String
         */
        userAgent       : (function () {
                            return window.navigator.userAgent.toLowerCase();
                          })()
    };

    // Create Environment object
    Environment = Object.create( environmentProto );

    // Private:
    _self   = Environment;
    _vers   = ( Environment.userAgent.match( /.+(?:rv|it|ra|ie|me|ve)[\/: ]([\d.]+)/ ) || [] )[1].split('.');
    _na     = "not available";

    /**
     * Object that represents browser flags and versions for the current environment
     * @name Environment.browser
     */
    Environment.browser = {
        /**
         * Full browser version
         * @type Sring
         */
        version             : ( _self.userAgent.match( /.+(?:rv|it|ra|ie|me|ve)[\/: ]([\d.]+)/ ) || [] )[1],

        /**
         * Brower version segments
         *  major: String || N/A
         *  minor: String || N/A
         *  build: String || N/A
         *  revision: String || N/A
         */
        vers                : {
                                major       : _vers[0] || _na,
                                minor       : _vers[1] || _na,
                                build       : _vers[2] || _na,
                                revision    : _vers[3] || _na
                            },

        /**
         * Chrome test
         * @type Boolean
         */
        chrome              : /chrome/.test( _self.userAgent ) && !/edge/.test( _self.userAgent ), // Edge UA String uses Chrome's string but ends in Edge.

        /**
         * Safari test
         * @type Boolean
         */
        safari              : /webkit/.test( _self.userAgent ) && !/chrome/.test( _self.userAgent ),

        /**
         * Opera test
         * @type Boolean
         */
        opera               : /opera/.test( _self.userAgent ),

        /**
         * Firefox test
         * @type Boolean
         */
        firefox             : /firefox/.test( _self.userAgent ),

        /**
         * IE test
         * @type Boolean
         */
        msie                : /msie/.test( _self.userAgent ) && !/opera/.test( _self.userAgent ),

        /**
         * Edge test
         * @type Boolean
         */
        edge                : /edge/.test( _self.userAgent ),

        /**
         * Mozilla test (also true for Firefox)
         * @type Boolean
         */
        mozilla             : /mozilla/.test( _self.userAgent ) && !/(compatible|webkit)/.test( _self.userAgent ),

        /**
         * Android test
         * @type Boolean
         */
        android             : /android/.test( _self.userAgent ),

        /**
         * Android version check
         * @type String
         */
        androidVersion      : ( _self.userAgent.match( /.+(?:android)[\/: ]([\d.]+)/ ) || [0,0] )[1],

        /**
         * iPhone/iPod check
         * @type Boolean
         */
        iphone              : /iphone|ipod/.test( _self.userAgent ),

        /**
         * iPhone/iPod version check
         * @type String
         */
        iphoneVersion       : ( _self.userAgent.match( /.+(?:iphone\ os)[\/: ]([\d_]+)/ ) || [0,0] )[1].toString().split('_').join('.'),

        /**
         * Blackberry check
         * @type Boolean
         */
        blackberry          : /blackberry/.test( _self.userAgent ),

        /**
         * Windows Mobile check
         * @type Boolean
         */
        winMobile           : /Windows\ Phone/.test( _self.userAgent ),

        /**
         * Windows Mobile version check
         * @type String
         */
        winMobileVersion    : ( _self.userAgent.match( /.+(?:windows\ phone\ os)[\/: ]([\d_]+)/ ) || [0,0] )[1]
    };

    /*****************************************************************/
    /** *** ******* START ENVIRONMENT CAPABILITY CHECKS ******* *** **/

    /**
     * Mobile check
     * @type Boolean
     */
    Environment.mobile = ( function () {
        return (_self.browser.iphone || _self.browser.ipad || _self.browser.android || _self.browser.blackberry );
    })();

    /**
     * Geolocation check
     * @type Boolean
     */
    Environment.geolocation = ( function () {
        return window.navigator.geolocation !== undefined;
    })();

    /**
     * Device orientation check
     * @type Boolean
     */
    Environment.orientation = ( function () {
        return window.DeviceOrientationEvent !== undefined;
    })();

    /**
     * Vibrate check
     * @type Boolean
     */
    Environment.vibrate = ( function () {
        return window.navigator.vibrate !== undefined;
    })();

    /**
     * Ambient Light check
     * @type Boolean
     */
    Environment.ambientLight = ( function () {
        return 'ondevicelight' in window;
    })();

    /*****************************************************************/
    /** *** *******  START PROJECT INTEGRATION OPTIONS  ******* *** **/

    // AMD define happens at the end for compatibility with AMD loaders
    // that don't enforce next-turn semantics on modules.
    if ( typeof define === 'function' && define.amd ) { // AMD

        define( function () {
            return Environment;
        });

    } else if ( typeof module !== 'undefined' && module.exports ) { // node

        module.exports = Environment;

    } else { // browser

        // If AMD or Module isn't supported in the project,
        // then setup a fully qualified namespace for the Environment object.

        // Split up the namespace into an array.
        ns = Environment.NAMESPACE.split('.');

        // Store the length of the array.
        len = ns.length;

        // Assign the window object to the nsObj variable
        nsObj = window;

        // Loop through the ns namespace array
        for ( i = 0; i < len; i++ ) {
            // If the object doesn't exist...
            if ( !nsObj[ ns[i] ] ) {
                // ...create it.
                nsObj[ ns[i] ] = {};
            }
            // Point nsObj to the deepest point in the namespace
            nsObj = nsObj[ ns[i] ];
        }

        // Set the class name to the NAME constant and add the Environment object
        nsObj[ Environment.NAME ] = Environment;

        // Some cleanup.
        nsObj = null;

    }

})( window );