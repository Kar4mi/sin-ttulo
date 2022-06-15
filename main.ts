let izquierda = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
let derecha = maqueen.readPatrol(maqueen.Patrol.PatrolRight)
basic.forever(function () {
    izquierda = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
    derecha = maqueen.readPatrol(maqueen.Patrol.PatrolRight)
})
basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 88)
    if (!(izquierda)) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 125)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 14)
    }
    if (!(derecha)) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 125)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 14)
    }
})
