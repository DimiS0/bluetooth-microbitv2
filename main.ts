input.onButtonPressed(Button.A, function () {
    bluetooth.uartWriteString("PHOTO/n")
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {

    data = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (data == "1") {

        servos.P0.setAngle(90)
        basic.showIcon(IconNames.Yes)
        basic.pause(500)
        basic.clearScreen()
    } else {

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
