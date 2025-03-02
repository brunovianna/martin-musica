input.onButtonPressed(Button.A, function () {
    led.stopAnimation()
    basic.showIcon(IconNames.Happy)
    basic.showString("martin")
})
input.onButtonPressed(Button.AB, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("C G C5 F G A D F ", 120), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    basic.showString("martin")
    basic.showIcon(IconNames.Sword)
})
