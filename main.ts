let magNear = false
let magForce = 0
let readingScore = 0
let Total = 0
input.calibrateCompass()
magForce = Math.abs(input.magneticForce(Dimension.Strength))
basic.forever(function on_forever() {
    
    basic.showNumber(Total)
    magNear = magForce > 100
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Sad)
        basic.showString("read")
    } else {
        readingScore += 1
        basic.pause(500)
        basic.showIcon(IconNames.Heart)
    }
    
    if (readingScore > 600) {
        Total += 1
        readingScore = 0
    }
    
})
