input.onButtonPressed(Button.A, function () {
    bluetooth.uartWriteString("PHOTO/n")
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    // debug: zet tijdelijk aan als je wilt checken wat er binnenkomt
    // basic.showString(data)
    data = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (data == "1") {
        // plastic gevonden
        // servo naar plastic‑positie
        servos.P0.setAngle(90)
        basic.showIcon(IconNames.Yes)
        basic.pause(500)
        basic.clearScreen()
    } else {
        // geen plastic (of iets anders dan "1")
        // servo terug
        servos.P0.setAngle(0)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(500)
        basic.clearScreen()
    }
})
let data = ""
bluetooth.startUartService()
