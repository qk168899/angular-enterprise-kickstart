/**
 * bootstraps angular onto the window.document node
 */
define([
    'require',
    'angular',
    'app'
], function (require, ng, app) {
    'use strict';

    require(['domReady!'], function (document) {
        //ng.bootstrap(document, ['app']);
        ng.resumeBootstrap([app.name]);
    });
});