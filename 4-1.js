var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://broker.emqx.io', {
    clientId: "mqtt_andrew_sample_id_1",
    clean: false
})

client.on('connect', function (connack) {
    console.log(`return code: ${connack.returnCode}, sessionPresent: ${connack.sessionPresent}`)
    client.end()
})