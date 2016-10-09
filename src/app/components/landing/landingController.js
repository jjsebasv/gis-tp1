angular.module('app-gistp').controller('LandingController',
  ['uiGmapGoogleMapApi', 'distritoTecnologico',
    function(uiGmapGoogleMapApi, distritoTecnologico) {
      this.variable = 'hola';
      this.map = { center: { latitude: -34.6378184, longitude: -58.4104137 }, zoom: 14 };
      this.markers = [];
      this.actualCompany = null;

      this.defaultMarker = 'assets/default-marker.png';
      this.underConstructionMarker = 'assets/working-marker.png';

      this.toggleHide = (arg) => {
        this.markers.forEach(
          (m) => {
              if (m.self.gradoAvance === arg) {
                m.options.visible = !m.options.visible;
              }
          })
      };

      this.showAll = () => {
        this.markers.forEach(
          (m) => {
            m.options.visible = true;
          })
      };

      distritoTecnologico.companies.forEach(
        (company, index) => {
          const marker = {
            id: index,
            coords: {
              latitude: company.latitud,
              longitude: company.longitud
            },
            events: {
              click: () => {
                this.actualCompany = company;
              }
            },
            options: {
              icon: company.gradoAvance === 'En Obra' ? this.underConstructionMarker : this.defaultMarker,
              visible: true
            },
            self: company
          };
          this.markers.push(marker);
        });

      uiGmapGoogleMapApi.then((maps) => {
        console.log(maps);
      });


    }]);
