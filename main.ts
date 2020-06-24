let readingscore = 0
let magnear = false
let totalscore = 0
input.calibrateCompass()
let magforce = Math.abs(input.magneticForce(Dimension.Strength))
basic.forever(function () {
    let magforce2 = 0
    basic.showNumber(totalscore)
    magnear = magforce2 > 100
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Sad)
        basic.showString("read")
    } else {
        readingscore += 1
        basic.pause(500)
        basic.showIcon(IconNames.Heart)
    }
    if (readingscore > 600) {
        totalscore += 1
        readingscore = 0
    }
})
