input.onPinPressed(TouchPin.P2, function () {
    basic.showIcon(IconNames.Sad)
    music.playTone(392, music.beat(BeatFraction.Whole))
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.Angry)
    music.playTone(349, music.beat(BeatFraction.Whole))
})
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
