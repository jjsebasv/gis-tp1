angular.module('app-gistp', ['uiGmapgoogle-maps']).config([
  'RestangularProvider', 'configuration', 'localStorageServiceProvider', 'uiGmapGoogleMapApiProvider',
  function (RestangularProvider, configuration, localStorageServiceProvider, uiGmapGoogleMapApiProvider) {

    // Restangular Setup
    RestangularProvider.setBaseUrl(configuration.apiUrl);
    RestangularProvider.setDefaultHeaders({ 'Content-Type': 'application/json' });

    // Local Storage Setup
    localStorageServiceProvider.setPrefix(window.btoa('app-/* @echo environment */'));

    // Google maps
    uiGmapGoogleMapApiProvider.configure({
      v: '3.20',
      libraries: 'weather,geometry,visualization'
    });
  }
]);
