
    (function(exports) {
        "use strict";
        const protocolA = document.location.protocol.startsWith('https') ? 'wss://' : 'ws://';
        const webSocketA = new WebSocket(protocolA + location.host);
        var latitud=41.40338 , longitud=2.17403
        var image ="/img/footprints.png" 
        
        function initMap() {
          exports.map = new google.maps.Map(document.getElementById("map"), {
            center: {
              lat: latitud,
              lng: longitud
            },
            zoom: 15
          });
          var marker = new google.maps.Marker({
            position: {lat: latitud, lng:longitud},
            map: map,
             title: 'Aca estoy'
          });
        }

        function writemap (data) {
          // nothing todo
         
          var pos = {
            lat: data.lat,
            lng: data.lng
          };
            
             var marker = new google.maps.Marker({
                position: pos,
                title:"Aca estoy",
                icon: image
            });
            
            map.setCenter(pos);
            marker.setMap(map);
           // document.getElementById("quetel").innerHTML = "Operador:"+data.operador
           // +",    Tecnología: "+ data.tecnologia+" ,    Fabricante Chip: " +data.fabricante +",     Modelo Chip: " +data.modelo
          

        
        }








        exports.writemap = writemap;
        exports.initMap = initMap;
     
      })((this.window = this.window || {}));
