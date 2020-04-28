class mapa {
   estado= true;
   constructor(){
}
   inicial(){
        let initialCoordinates = [43.2945782, 5.0843522]; // mapa do Brasil
        //latitude e a longitude
     var initialZoomLevel = 4;
// create a map in the "map" div, set the view to a given place and zoom
    this.map =  L.map("map").setView(initialCoordinates, initialZoomLevel);
// add an OpenStreetMap tile layer
     L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
         attribution: '&copy; Contribuidores do <a href="http://osm.org/copyright">OpenStreetMap</a>'
     }).addTo(this.map);
     m.estado = false;
     s.mudar_voz([m.estado])
    }
    ponto_inicial(latitude,longitude){
        var parte_1 = [parseInt(latitude), parseInt(longitude),"1348", "porto de Marselha"]
        return parte_1;
    }
    circle(latitude,longitude,Local){
        if(Local != "porto de Marselha")
        var posicao = [ latitude.toFixed(2),longitude.toFixed(2),"1349",Local];
        return posicao;
    }
}

const m = new mapa();
self.addEventListener("message",event=>{
    var tipo = event.data[0];
    var circulo  = null;
    switch(tipo){
        case "ponto inicial":
           var inicial = m.ponto_inicial(43.2945782,5.0843522);
           postMessage({dados:inicial});
            self.close();
        break;
        case "aumentar circulo":
            var latitude = event.data[2];
            var longitude = event.data[3];
            circulo = m.circle(latitude,longitude,tipo);
            postMessage({dados:circulo});
            self.close();
        break;
        case "norte da Itália":
            var latitude = event.data[2];
            var longitude = event.data[3];
            circulo = m.circle(latitude,longitude,tipo);
            postMessage({dados:circulo});
            self.close();
        break;
        case "toda a europa":
            var latitude = event.data[2];
            var longitude = event.data[3];
            circulo = m.circle(latitude,longitude,tipo);
            postMessage({dados:circulo});
            self.close();
        break;
    }
})
