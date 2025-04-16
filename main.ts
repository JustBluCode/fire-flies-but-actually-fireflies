input.onButtonPressed(Button.A, function () {
    radio.sendString("flash")
})
input.onGesture(Gesture.TiltLeft, function () {
    radio2 += -1
    radio.setGroup(radio2)
    basic.showNumber(radio2)
})
function flash () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    bright += -25
    led.setBrightness(bright)
    basic.pause(5)
    basic.showLeds(`
        . # # # #
        . # # # #
        . # # # #
        . # # # #
        . # # # #
        `)
    bright += -25
    led.setBrightness(bright)
    basic.pause(5)
    basic.showLeds(`
        . # # # #
        . # # # #
        . # # # #
        . # # # #
        . . . . .
        `)
    bright += -25
    led.setBrightness(bright)
    basic.pause(5)
    basic.showLeds(`
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    bright += -25
    led.setBrightness(bright)
    basic.pause(5)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    bright += -25
    led.setBrightness(bright)
    basic.pause(5)
    basic.showLeds(`
        . . . . .
        . . # # .
        . . # # .
        . . # # .
        . . . . .
        `)
    bright += -25
    led.setBrightness(bright)
    basic.pause(5)
    basic.showLeds(`
        . . . . .
        . . # # .
        . . # # .
        . . . . .
        . . . . .
        `)
    bright += -25
    led.setBrightness(bright)
    basic.pause(5)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        `)
    bright += -25
    led.setBrightness(bright)
    basic.pause(5)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    bright = 250
    led.setBrightness(bright)
    basic.pause(5)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(1)
    bright = 250
    led.setBrightness(bright)
    basic.showLeds(`
        . . . . .
        . . # # .
        . . # # .
        . . . . .
        . . . . .
        `)
    basic.pause(1)
    basic.showLeds(`
        . . . . .
        . . # # .
        . . # # .
        . . # # .
        . . . . .
        `)
    basic.pause(1)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.pause(1)
    basic.showLeds(`
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.pause(1)
    basic.showLeds(`
        . # # # #
        . # # # #
        . # # # #
        . # # # #
        . . . . .
        `)
    basic.pause(1)
    basic.showLeds(`
        . # # # #
        . # # # #
        . # # # #
        . # # # #
        . # # # #
        `)
    basic.pause(1)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    bright = 225
    led.setBrightness(bright)
    basic.pause(1)
    bright = 200
    led.setBrightness(bright)
    basic.pause(1)
    bright = 175
    led.setBrightness(bright)
    basic.pause(1)
    bright = 150
    led.setBrightness(bright)
    basic.pause(1)
    bright = 125
    led.setBrightness(bright)
    basic.pause(1)
    bright = 100
    led.setBrightness(bright)
    basic.pause(1)
    bright = 75
    led.setBrightness(bright)
    basic.pause(1)
    bright = 50
    led.setBrightness(bright)
    basic.pause(1)
    bright = 25
    led.setBrightness(bright)
    basic.pause(1)
    bright = 0
    led.setBrightness(bright)
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "flash") {
        basic.pause(randint(50, 350))
        flash()
        if (randint(0, 9) == 0) {
            basic.pause(500)
            radio.sendString("flash")
        }
    }
})
input.onGesture(Gesture.TiltRight, function () {
    radio2 += 1
    radio.setGroup(radio2)
    basic.showNumber(radio2)
})
let bright = 0
let radio2 = 0
radio2 = 1
radio.setGroup(radio2)
bright = 255
