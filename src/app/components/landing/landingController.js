angular.module('app-gistp').controller('LandingController',
  ['uiGmapGoogleMapApi', 'distritoTecnologico',
    function(uiGmapGoogleMapApi, distritoTecnologico) {
      this.variable = 'hola';
      this.map = { center: { latitude: -34.6378184, longitude: -58.4104137 }, zoom: 14 };
      this.markers = [];
      this.actualCompany = null;

      distritoTecnologico.companies.forEach(
        (company, index) => {
          console.log(company.empresa);
          const marker = {
            id: index,
            coords: {
              latitude: company.latitud,
              longitude: company.longitud
            },
            events: {
              click: (marker, eventName, args) => {
                  this.actualCompany = company;
              }
            }
          };
          this.markers.push(marker);
        });

      uiGmapGoogleMapApi.then((maps) => {
        console.log(maps);
      });


    }]);
