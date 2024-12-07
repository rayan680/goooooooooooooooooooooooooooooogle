input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    Maqueen_V5.motorRun(Maqueen_V5.Motors.M1, Maqueen_V5.Dir.CW, 100)
    basic.clearScreen()
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.West)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # . # #
        # # . # #
        `)
    basic.showArrow(ArrowNames.West)
    basic.showArrow(ArrowNames.East)
})
