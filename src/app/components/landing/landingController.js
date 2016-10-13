angular.module('app-gistp').controller('LandingController',
  ['$scope', 'uiGmapGoogleMapApi', 'distritoTecnologico',
    function($scope, uiGmapGoogleMapApi, distritoTecnologico) {
      this.variable = 'hola';
      this.map = { center: { latitude: -34.6378184, longitude: -58.4104137 }, zoom: 14 };
      this.markers = [];
      this.actualCompany = null;
      this.default = true;
      this.sectors = [];
      this.companies = distritoTecnologico.companies;
      this.polygon = distritoTecnologico.distrito;
      this.actualSector = '';

      this.defaultMarker = 'assets/default-marker.png';
      this.underConstructionMarker = 'assets/working-marker.png';
      this.itbaMarker = 'assets/itba-marker.png';

      this.seeOnlySector = (sector, specificNro) => {
        this.actualSector = sector;
        this.markers.forEach(
          (m) => {
            if (specificNro && m.self.nro === specificNro) {
              m.options.icon = this.itbaMarker;
              m.options.visible = true;
            } else if (m.self.sector === sector) {
              m.options.icon = this.defaultMarker;
              m.options.visible = true;
            } else {
              m.options.visible = false;
            }
          });
        if (specificNro === null) {
          this.actualCompany = null;
        }
        this.default = false;
      }

      this.toggleHide = (arg) => {
        this.markers.forEach(
          (m) => {
            if (m.self.gradoAvance === arg) {
              m.options.visible = !m.options.visible;
            }
          });
      };

      this.showAll = () => {
        this.markers.forEach(
          (m) => {
            m.options.visible = true;
            if (m.self.empresa === 'ITBA') {
              m.options.icon = this.itbaMarker;
            } else {
              m.options.icon = m.self.gradoAvance === 'En Obra' ? this.underConstructionMarker : this.defaultMarker;
            }
          });
        this.default = true;
      };

      $scope.$watch(() => this.actualCompany, (newValue, oldValue) => {
        if (this.actualCompany !== null) {
          this.seeOnlySector(newValue.sector, newValue.nro);
        }
      });

      this.companies.forEach(
        (company, index) => {
          if (this.sectors.indexOf(company.sector)<0) {
            console.log(company.sector)
            this.sectors.push(company.sector);
          }
          let markerIcon = '';
          if (company.empresa === 'ITBA') {
            markerIcon = this.itbaMarker;
          } else {
            markerIcon = company.gradoAvance === 'En Obra' ? this.underConstructionMarker : this.defaultMarker;
          }
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
              icon: markerIcon,
              visible: true
            },
            self: company
          };
          this.markers.push(marker);
        });


    }]);
