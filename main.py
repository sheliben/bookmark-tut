mag_near = False
mag_force = 0
reading_score = 0
total = 0
input.calibrate_compass()
mag_force = abs(input.magnetic_force(Dimension.STRENGTH))

def on_forever():
    global mag_near, reading_score, total
    basic.show_number(total)
    mag_near = mag_force > 100
    if input.button_is_pressed(Button.A):
        basic.show_icon(IconNames.SAD)
        basic.show_string("read")
    else:
        reading_score += 1
        basic.pause(500)
        basic.show_icon(IconNames.HEART)
    if reading_score > 600:
        total += 1
        reading_score = 0
basic.forever(on_forever)
