export const idleStateApi = {
    name: 'IdleState',
    package: 'frc.excalib.control.motor.motor_specs',
    description: 'Enum representing the idle state of a motor, specifying whether the motor is coasting or braking when idle.',
    values: [
        {
            name: 'COAST',
            description: 'Indicates that the motor is in a coasting state, allowing free movement.'
        },
        {
            name: 'BRAKE',
            description: 'Indicates that the motor is in a braking state, resisting movement.'
        }
    ]
};