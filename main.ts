function lineTracking () {
    if (reverse == false) {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
            basic.pause(200)
        } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
            basic.pause(100)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 20)
        } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
            basic.pause(100)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 20)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 20)
        } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.motorStop(maqueen.Motors.All)
        }
        lineTracking()
    }
}
function funcReverse () {
    reverse = true
    if (reverseCount == 0) {
        reverseCount += 1
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 20)
    } else if (reverseCount >= 1) {
        if (timerReverse >= 3) {
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
            basic.pause(1250)
            reverse = false
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
            basic.pause(1250)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 20)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 20)
            basic.pause(500)
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
