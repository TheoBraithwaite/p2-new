function lineTracking () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
        maqueen.motorStop(maqueen.Motors.M2)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 20)
        maqueen.motorStop(maqueen.Motors.M1)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
}
function funcReverse () {
    reverse = true
    reverseCount += 1
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 20)
    if (reverseCount == 1) {
        if (timerReverse >= 3) {
            maqueen.motorStop(maqueen.Motors.All)
        }
    }
}
let d = 0
let reverseCount = 0
let timerReverse = 0
let reverse = false
reverse = false
timerReverse = 0
lineTracking()
reverseCount = 0
basic.forever(function () {
    d = maqueen.Ultrasonic()
    if (d < 5) {
        funcReverse()
    }
})
basic.forever(function () {
    basic.pause(1000)
    if (reverse == true) {
        timerReverse += 1
    }
})
