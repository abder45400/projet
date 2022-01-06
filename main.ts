bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . . .
        . # # # .
        . . . . .
        `)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showLeds(`
        . . . # .
        . . . # .
        . # # # .
        . # . # .
        . # # # .
        `)
})
blockytalky.onReceivedString(function (key, receivedString) {
    if (receivedString == "avant") {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
    if (receivedString == "stop") {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    if (receivedString == "droite") {
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
    if (receivedString == "gauche") {
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
})
basic.showIcon(IconNames.Yes)
let allumer = 0
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P2, 0)
