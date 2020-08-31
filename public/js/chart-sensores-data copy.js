/* eslint-disable max-classes-per-file */
/* eslint-disable no-restricted-globals */

/* eslint-disable no-undef */
$(document).ready(() => {
  // if deployed to a site supporting SSL, use wss://
  const protocol = document.location.protocol.startsWith('https') ? 'wss://' : 'ws://';
  const webSocket = new WebSocket(protocol + location.host);

  let paquetes = 0
  let start = new Date()

  /*


  //chart3
  var ctx3 = document.getElementById('chart3').getContext('2d')
  var data3 = {
    labels: [0],
    datasets: [{
      data: [0],
      label: 'lux',
      // backgroundColor: '#ff6600'
borderColor: '#F44436',
      pointBackgroundColor: '#F44440'
    }]
  }
  var chart3 = new Chart(ctx3, {
    type: 'line',
    data: data3,
    options: optionsAnimations
  })*/



    var ctx2 = document.getElementById('grafUV').getContext('2d')
    var data2 = {
    labels: [0],
    datasets: [{
      data: [0],
      label: 'lux',
      // backgroundColor: '#ff6600'
      borderColor: '#F44436',
      pointBackgroundColor: '#F44438'
    }]
  }
  var chart2 = new Chart(ctx2, {
    type: 'line',
    data: data2,
    options: optionsAnimations
  })

  // When a web socket message arrives:
  // 1. Unpack it
  // 2. Validate it has date/time and temperature
  // 3. Find or create a cached device to hold the telemetry data
  // 4. Append the telemetry data
  // 5. Update the chart UI
  webSocket.onmessage = function onMessage(message) {
    try {
      var messageData = JSON.parse(message.data);
      console.log(messageData);
      
     
		//código para el sensor UV
   
        var length = data2.labels.length
        if (length >= 20) {
          data2.datasets[0].data.shift()
          data2.labels.shift()  
        }

        data2.labels.push(moment().format('HH:mm:ss'))
        data2.datasets[0].data.push(messageData.IotData.Lora)
      
      
     /* var length = data.labels.length
      if (length >= 20) {
        data.datasets[0].data.shift()
        data.labels.shift()
      }

      data.labels.push(moment().format('HH:mm:ss'))
      data.datasets[0].data.push(messageData.IotData.Bluetooth)


        //código para particle
   
          var length = data3.labels.length
          if (length >= 20) {
            data3.datasets[0].data.shift()
            data3.labels.shift()
          }
  
          data3.labels.push(moment().format('HH:mm:ss'))
          data3.datasets[0].data.push(messageData.IotData.Particle)*/
    //código para rssi
   
    
    //chart1.update()
    chart2.update()
    //chart3.update()
   // chart4.update()
   
     
      
    } catch (err) {
      console.error(err);
    }
  };

});
