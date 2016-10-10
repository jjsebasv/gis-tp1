'use strict';

angular.module('app-gistp').controller('LandingController', ['uiGmapGoogleMapApi', 'distritoTecnologico', function (uiGmapGoogleMapApi, distritoTecnologico) {
  var _this = this;

  this.variable = 'hola';
  this.map = { center: { latitude: -34.6378184, longitude: -58.4104137 }, zoom: 14 };
  this.markers = [];
  this.actualCompany = null;

  this.defaultMarker = 'assets/default-marker.png';
  this.underConstructionMarker = 'assets/working-marker.png';

  this.toggleHide = function (arg) {
    _this.markers.forEach(function (m) {
      if (m.self.gradoAvance === arg) {
        m.options.visible = !m.options.visible;
      }
    });
  };

  this.showAll = function () {
    _this.markers.forEach(function (m) {
      m.options.visible = true;
    });
  };

  distritoTecnologico.companies.forEach(function (company, index) {
    var marker = {
      id: index,
      coords: {
        latitude: company.latitud,
        longitude: company.longitud
      },
      events: {
        click: function click() {
          _this.actualCompany = company;
        }
      },
      options: {
        icon: company.gradoAvance === 'En Obra' ? _this.underConstructionMarker : _this.defaultMarker,
        visible: true
      },
      self: company
    };
    _this.markers.push(marker);
  });

  uiGmapGoogleMapApi.then(function (maps) {
    console.log(maps);
  });
}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2xhbmRpbmcvbGFuZGluZ0NvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbnRyb2xsZXIiLCJ1aUdtYXBHb29nbGVNYXBBcGkiLCJkaXN0cml0b1RlY25vbG9naWNvIiwidmFyaWFibGUiLCJtYXAiLCJjZW50ZXIiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInpvb20iLCJtYXJrZXJzIiwiYWN0dWFsQ29tcGFueSIsImRlZmF1bHRNYXJrZXIiLCJ1bmRlckNvbnN0cnVjdGlvbk1hcmtlciIsInRvZ2dsZUhpZGUiLCJhcmciLCJmb3JFYWNoIiwibSIsInNlbGYiLCJncmFkb0F2YW5jZSIsIm9wdGlvbnMiLCJ2aXNpYmxlIiwic2hvd0FsbCIsImNvbXBhbmllcyIsImNvbXBhbnkiLCJpbmRleCIsIm1hcmtlciIsImlkIiwiY29vcmRzIiwibGF0aXR1ZCIsImxvbmdpdHVkIiwiZXZlbnRzIiwiY2xpY2siLCJpY29uIiwicHVzaCIsInRoZW4iLCJtYXBzIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsUUFBUUMsTUFBUixDQUFlLFdBQWYsRUFBNEJDLFVBQTVCLENBQXVDLG1CQUF2QyxFQUNFLENBQUMsb0JBQUQsRUFBdUIscUJBQXZCLEVBQ0UsVUFBU0Msa0JBQVQsRUFBNkJDLG1CQUE3QixFQUFrRDtBQUFBOztBQUNoRCxPQUFLQyxRQUFMLEdBQWdCLE1BQWhCO0FBQ0EsT0FBS0MsR0FBTCxHQUFXLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxDQUFDLFVBQWIsRUFBeUJDLFdBQVcsQ0FBQyxVQUFyQyxFQUFWLEVBQTZEQyxNQUFNLEVBQW5FLEVBQVg7QUFDQSxPQUFLQyxPQUFMLEdBQWUsRUFBZjtBQUNBLE9BQUtDLGFBQUwsR0FBcUIsSUFBckI7O0FBRUEsT0FBS0MsYUFBTCxHQUFxQiwyQkFBckI7QUFDQSxPQUFLQyx1QkFBTCxHQUErQiwyQkFBL0I7O0FBRUEsT0FBS0MsVUFBTCxHQUFrQixVQUFDQyxHQUFELEVBQVM7QUFDekIsVUFBS0wsT0FBTCxDQUFhTSxPQUFiLENBQ0UsVUFBQ0MsQ0FBRCxFQUFPO0FBQ0gsVUFBSUEsRUFBRUMsSUFBRixDQUFPQyxXQUFQLEtBQXVCSixHQUEzQixFQUFnQztBQUM5QkUsVUFBRUcsT0FBRixDQUFVQyxPQUFWLEdBQW9CLENBQUNKLEVBQUVHLE9BQUYsQ0FBVUMsT0FBL0I7QUFDRDtBQUNKLEtBTEg7QUFNRCxHQVBEOztBQVNBLE9BQUtDLE9BQUwsR0FBZSxZQUFNO0FBQ25CLFVBQUtaLE9BQUwsQ0FBYU0sT0FBYixDQUNFLFVBQUNDLENBQUQsRUFBTztBQUNMQSxRQUFFRyxPQUFGLENBQVVDLE9BQVYsR0FBb0IsSUFBcEI7QUFDRCxLQUhIO0FBSUQsR0FMRDs7QUFPQWxCLHNCQUFvQm9CLFNBQXBCLENBQThCUCxPQUE5QixDQUNFLFVBQUNRLE9BQUQsRUFBVUMsS0FBVixFQUFvQjtBQUNsQixRQUFNQyxTQUFTO0FBQ2JDLFVBQUlGLEtBRFM7QUFFYkcsY0FBUTtBQUNOckIsa0JBQVVpQixRQUFRSyxPQURaO0FBRU5yQixtQkFBV2dCLFFBQVFNO0FBRmIsT0FGSztBQU1iQyxjQUFRO0FBQ05DLGVBQU8saUJBQU07QUFDWCxnQkFBS3JCLGFBQUwsR0FBcUJhLE9BQXJCO0FBQ0Q7QUFISyxPQU5LO0FBV2JKLGVBQVM7QUFDUGEsY0FBTVQsUUFBUUwsV0FBUixLQUF3QixTQUF4QixHQUFvQyxNQUFLTix1QkFBekMsR0FBbUUsTUFBS0QsYUFEdkU7QUFFUFMsaUJBQVM7QUFGRixPQVhJO0FBZWJILFlBQU1NO0FBZk8sS0FBZjtBQWlCQSxVQUFLZCxPQUFMLENBQWF3QixJQUFiLENBQWtCUixNQUFsQjtBQUNELEdBcEJIOztBQXNCQXhCLHFCQUFtQmlDLElBQW5CLENBQXdCLFVBQUNDLElBQUQsRUFBVTtBQUNoQ0MsWUFBUUMsR0FBUixDQUFZRixJQUFaO0FBQ0QsR0FGRDtBQUtELENBckRILENBREYiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvbGFuZGluZy9sYW5kaW5nQ29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdhcHAtZ2lzdHAnKS5jb250cm9sbGVyKCdMYW5kaW5nQ29udHJvbGxlcicsXG4gIFsndWlHbWFwR29vZ2xlTWFwQXBpJywgJ2Rpc3RyaXRvVGVjbm9sb2dpY28nLFxuICAgIGZ1bmN0aW9uKHVpR21hcEdvb2dsZU1hcEFwaSwgZGlzdHJpdG9UZWNub2xvZ2ljbykge1xuICAgICAgdGhpcy52YXJpYWJsZSA9ICdob2xhJztcbiAgICAgIHRoaXMubWFwID0geyBjZW50ZXI6IHsgbGF0aXR1ZGU6IC0zNC42Mzc4MTg0LCBsb25naXR1ZGU6IC01OC40MTA0MTM3IH0sIHpvb206IDE0IH07XG4gICAgICB0aGlzLm1hcmtlcnMgPSBbXTtcbiAgICAgIHRoaXMuYWN0dWFsQ29tcGFueSA9IG51bGw7XG5cbiAgICAgIHRoaXMuZGVmYXVsdE1hcmtlciA9ICdhc3NldHMvZGVmYXVsdC1tYXJrZXIucG5nJztcbiAgICAgIHRoaXMudW5kZXJDb25zdHJ1Y3Rpb25NYXJrZXIgPSAnYXNzZXRzL3dvcmtpbmctbWFya2VyLnBuZyc7XG5cbiAgICAgIHRoaXMudG9nZ2xlSGlkZSA9IChhcmcpID0+IHtcbiAgICAgICAgdGhpcy5tYXJrZXJzLmZvckVhY2goXG4gICAgICAgICAgKG0pID0+IHtcbiAgICAgICAgICAgICAgaWYgKG0uc2VsZi5ncmFkb0F2YW5jZSA9PT0gYXJnKSB7XG4gICAgICAgICAgICAgICAgbS5vcHRpb25zLnZpc2libGUgPSAhbS5vcHRpb25zLnZpc2libGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgfTtcblxuICAgICAgdGhpcy5zaG93QWxsID0gKCkgPT4ge1xuICAgICAgICB0aGlzLm1hcmtlcnMuZm9yRWFjaChcbiAgICAgICAgICAobSkgPT4ge1xuICAgICAgICAgICAgbS5vcHRpb25zLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgIH0pXG4gICAgICB9O1xuXG4gICAgICBkaXN0cml0b1RlY25vbG9naWNvLmNvbXBhbmllcy5mb3JFYWNoKFxuICAgICAgICAoY29tcGFueSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBtYXJrZXIgPSB7XG4gICAgICAgICAgICBpZDogaW5kZXgsXG4gICAgICAgICAgICBjb29yZHM6IHtcbiAgICAgICAgICAgICAgbGF0aXR1ZGU6IGNvbXBhbnkubGF0aXR1ZCxcbiAgICAgICAgICAgICAgbG9uZ2l0dWRlOiBjb21wYW55LmxvbmdpdHVkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3R1YWxDb21wYW55ID0gY29tcGFueTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgaWNvbjogY29tcGFueS5ncmFkb0F2YW5jZSA9PT0gJ0VuIE9icmEnID8gdGhpcy51bmRlckNvbnN0cnVjdGlvbk1hcmtlciA6IHRoaXMuZGVmYXVsdE1hcmtlcixcbiAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbGY6IGNvbXBhbnlcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMubWFya2Vycy5wdXNoKG1hcmtlcik7XG4gICAgICAgIH0pO1xuXG4gICAgICB1aUdtYXBHb29nbGVNYXBBcGkudGhlbigobWFwcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhtYXBzKTtcbiAgICAgIH0pO1xuXG5cbiAgICB9XSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
