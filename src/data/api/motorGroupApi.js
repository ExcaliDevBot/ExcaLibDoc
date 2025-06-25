export const motorGroupApi = {
    name: 'MotorGroup',
    package: 'frc.excalib.control.motor.controllers',
    description: 'Represents a group of motors that can be controlled together as a single unit. Implements the Motor interface to provide unified control and telemetry for multiple motors.',
    methods: [
        {
            name: 'MotorGroup',
            signature: 'public MotorGroup(Motor... motors)',
            description: 'Constructs a MotorGroup with the specified motors.',
            parameters: [
                {name: 'motors', type: 'Motor[]', description: 'The motors to be grouped together.'}
            ],
            returns: {type: 'MotorGroup', description: 'A new MotorGroup instance.'}
        },
        {
            name: 'stopMotor',
            signature: 'public void stopMotor()',
            description: 'Stops all motors in the group.',
            parameters: [],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'setVoltage',
            signature: 'public void setVoltage(double voltage)',
            description: 'Sets the voltage for all motors in the group.',
            parameters: [
                {name: 'voltage', type: 'double', description: 'The voltage to set.'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'setPercentage',
            signature: 'public void setPercentage(double percentage)',
            description: 'Sets the percentage output for all motors in the group.',
            parameters: [
                {name: 'percentage', type: 'double', description: 'The percentage output to set.'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'setFollower',
            signature: 'public void setFollower(int mainMotorID)',
            description: 'Sets a follower mode for all motors except the main motor.',
            parameters: [
                {name: 'mainMotorID', type: 'int', description: 'The ID of the main motor.'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'setIdleState',
            signature: 'public void setIdleState(IdleState idleMode)',
            description: 'Sets the idle state for all motors in the group.',
            parameters: [
                {name: 'idleMode', type: 'IdleState', description: 'The idle state to set.'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'getIdleState',
            signature: 'public IdleState getIdleState()',
            description: 'Gets the idle state of the first motor in the group.',
            parameters: [],
            returns: {type: 'IdleState', description: 'The idle state of the first motor.'}
        },
        {
            name: 'getDeviceID',
            signature: 'public int getDeviceID()',
            description: 'Gets the device ID of the first motor in the group, or -1 if no motors are present.',
            parameters: [],
            returns: {type: 'int', description: 'The device ID of the first motor, or -1 if none.'}
        },
        {
            name: 'getMotorPosition',
            signature: 'public double getMotorPosition()',
            description: 'Gets the average position of all motors in the group.',
            parameters: [],
            returns: {type: 'double', description: 'The average motor position.'}
        },
        {
            name: 'getMotorVelocity',
            signature: 'public double getMotorVelocity()',
            description: 'Gets the average velocity of all motors in the group.',
            parameters: [],
            returns: {type: 'double', description: 'The average motor velocity.'}
        },
        {
            name: 'getCurrent',
            signature: 'public double getCurrent()',
            description: 'Gets the average current of all motors in the group.',
            parameters: [],
            returns: {type: 'double', description: 'The average motor current.'}
        },
        {
            name: 'getVoltage',
            signature: 'public double getVoltage()',
            description: 'Gets the average voltage of all motors in the group.',
            parameters: [],
            returns: {type: 'double', description: 'The average motor voltage.'}
        },
        {
            name: 'getTemperature',
            signature: 'public double getTemperature()',
            description: 'Gets the maximum temperature among all motors in the group.',
            parameters: [],
            returns: {type: 'double', description: 'The maximum motor temperature.'}
        },
        {
            name: 'setSoftLimit',
            signature: 'public void setSoftLimit(DirectionState directionState, float limit)',
            description: 'Sets a soft limit for all motors in the group.',
            parameters: [
                {name: 'directionState', type: 'DirectionState', description: 'The direction state for the limit.'},
                {name: 'limit', type: 'float', description: 'The soft limit value.'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'setInverted',
            signature: 'public void setInverted(DirectionState mode)',
            description: 'Sets the inversion state for all motors in the group.',
            parameters: [
                {name: 'mode', type: 'DirectionState', description: 'The inversion state to set.'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'setPositionConversionFactor',
            signature: 'public void setPositionConversionFactor(double conversionFactor)',
            description: 'Sets the position conversion factor for all motors in the group.',
            parameters: [
                {name: 'conversionFactor', type: 'double', description: 'The position conversion factor to set.'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'setVelocityConversionFactor',
            signature: 'public void setVelocityConversionFactor(double conversionFactor)',
            description: 'Sets the velocity conversion factor for all motors in the group.',
            parameters: [
                {name: 'conversionFactor', type: 'double', description: 'The velocity conversion factor to set.'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'setCurrentLimit',
            signature: 'public void setCurrentLimit(int stallLimit, int freeLimit)',
            description: 'Sets the current limits for all motors in the group.',
            parameters: [
                {name: 'stallLimit', type: 'int', description: 'The stall current limit.'},
                {name: 'freeLimit', type: 'int', description: 'The free current limit.'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'setMotorPosition',
            signature: 'public void setMotorPosition(double position)',
            description: 'Sets the position of all motors in the group.',
            parameters: [
                {name: 'position', type: 'double', description: 'The position to set.'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        }
    ]
};