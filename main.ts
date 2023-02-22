input.onSound(DetectedSound.Loud, function () {
    basic.showString("Hi, How are you?")
    basic.showIcon(IconNames.Sword)
    music.playSoundEffect(music.createSoundEffect(
    WaveShape.Square,
    3386,
    0,
    255,
    0,
    900,
    SoundExpressionEffect.Vibrato,
    InterpolationCurve.Linear
    ), SoundExpressionPlayMode.UntilDone)
})
basic.forever(function () {
    if (input.logoIsPressed()) {
        basic.showNumber(input.temperature())
    } else if (input.isGesture(Gesture.Shake)) {
        music.playSoundEffect(music.createSoundEffect(
        WaveShape.Square,
        5000,
        0,
        255,
        0,
        9999,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), SoundExpressionPlayMode.UntilDone)
    } else if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Ghost)
    }
})
