function lineTracking () {
    if (reverse == false) {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
            basic.pause(50)
        } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            basic.pause(50)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
            maqueen.motorStop(maqueen.Motors.M2)
        } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            basic.pause(50)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 20)
            maqueen.motorStop(maqueen.Motors.M1)
        } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
        }
        basic.pause(200)
        lineTracking()
    }
}
function funcReverse () {
    reverse = true
    if (reverseCount == 0) {
        reverseCount += 1
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 20)
    } else if (reverseCount >= 1) {
        if (timerReverse >= 2) {
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
            basic.pause(1000)
            reverse = false
            lineTracking()
        }
    }
}
let d = 0
let reverseCount = 0
let timerReverse = 0
let reverse = false
reverse = false
timerReverse = 0
reverseCount = 0
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
loops.everyInterval(500, function () {
    basic.showNumber(timerReverse)
    basic.pause(500)
    if (reverse == true) {
        timerReverse += 1
        funcReverse()
    }
})
basic.forever(function () {
    d = maqueen.Ultrasonic()
    if (d < 5) {
        funcReverse()
    }
})
