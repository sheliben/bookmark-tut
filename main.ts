let mag_near = false
let mag_force = 0
let reading_score = 0
let total = 0
input.calibrateCompass()
mag_force = Math.abs(input.magneticForce(Dimension.Strength))
basic.forever(function on_forever() {
    
    basic.showNumber(total)
    mag_near = mag_force > 100
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Sad)
        basic.showString("read")
    } else {
        reading_score += 1
        basic.pause(500)
        basic.showIcon(IconNames.Heart)
    }
    
    if (reading_score > 600) {
        total += 1
        reading_score = 0
    }
    
})
