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
    if (reverseCount == 0) {
        maqueen.motorStop(maqueen.Motors.All)
    }
    if (timerReverse >= 5) {
    	
    }
}
let d = 0
let timerReverse = 0
let reverse = false
let reverseCount = 0
reverseCount = 0
reverse = false
timerReverse = 0
lineTracking()
loops.everyInterval(1000, function () {
    if (reverse == true) {
        reverseCount += 1
    }
})
basic.forever(function () {
    d = maqueen.Ultrasonic()
    if (d < 5) {
        funcReverse()
    }
})
