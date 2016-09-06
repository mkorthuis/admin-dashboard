'use strict';

import angular from 'angular';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';

import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';

import {
  routeConfig
} from './app.config';

import navbar from './common/navbar/navbar.component';
import footer from './common/footer/footer.component';
import main from './components/main/index';
import message from './components/message/index';
import constants from './app.constants';
import util from './common/util/util.module';

import './app.scss';

angular.module('app', [ngCookies, ngResource, ngSanitize, uiRouter, uiBootstrap,
    navbar, footer, main, message, constants, util
  ])
  .config(routeConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['app'], {
      strictDi: true
    });
  });
