magNear = False
magForce = 0
readingScore = 0
Total = 0
input.calibrate_compass()
magForce = abs(input.magnetic_force(Dimension.STRENGTH))

def on_forever():
    global magNear, readingScore, Total
    basic.show_number(Total)
    magNear = magForce > 100
    if input.button_is_pressed(Button.A):
        basic.show_icon(IconNames.SAD)
        basic.show_string("read")
    else:
        readingScore += 1
        basic.pause(500)
        basic.show_icon(IconNames.HEART)
    if readingScore > 600:
        Total += 1
        readingScore = 0
basic.forever(on_forever)
