export const motorApi = {
    name: 'Motor',
    package: 'frc.excalib.control.motor.controllers',
    description: 'Interface representing a motor controller with methods for control, configuration, and telemetry.',
    methods: [
        {
            name: 'stopMotor',
            signature: 'void stopMotor()',
            description: 'Stops the motor by setting its output to zero.',
            parameters: [],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'setVoltage',
            signature: 'void setVoltage(double voltage)',
            description: 'Sets the motor output to a specific voltage.',
            parameters: [
                {name: 'voltage', type: 'double', description: 'The desired voltage to apply to the motor.'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'setPercentage',
            signature: 'void setPercentage(double percentage)',
            description: 'Sets the motor output as a percentage of its maximum output.',
            parameters: [
                {name: 'percentage', type: 'double', description: 'The desired output percentage (range: -1.0 to 1.0).'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'setFollower',
            signature: 'void setFollower(int mainMotorID)',
            description: 'Configures the motor to follow another motor.',
            parameters: [
                {name: 'mainMotorID', type: 'int', description: 'The device ID of the motor to follow.'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'setIdleState',
            signature: 'void setIdleState(IdleState idleMode)',
            description: 'Sets the idle state of the motor (e.g., brake or coast mode).',
            parameters: [
                {name: 'idleMode', type: 'IdleState', description: 'The desired idle state.'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'getIdleState',
            signature: 'IdleState getIdleState()',
            description: 'Retrieves the current idle state of the motor.',
            parameters: [],
            returns: {type: 'IdleState', description: 'The current idle state.'}
        },
        {
            name: 'getDeviceID',
            signature: 'int getDeviceID()',
            description: 'Retrieves the device ID of the motor.',
            parameters: [],
            returns: {type: 'int', description: 'The device ID.'}
        },
        {
            name: 'getMotorPosition',
            signature: 'double getMotorPosition()',
            description: 'Retrieves the current position of the motor.',
            parameters: [],
            returns: {type: 'double', description: 'The motor position in units defined by the position conversion factor.'}
        },
        {
            name: 'getMotorVelocity',
            signature: 'double getMotorVelocity()',
            description: 'Retrieves the current velocity of the motor.',
            parameters: [],
            returns: {type: 'double', description: 'The motor velocity in units defined by the velocity conversion factor.'}
        },
        {
            name: 'getCurrent',
            signature: 'double getCurrent()',
            description: 'Retrieves the current drawn by the motor.',
            parameters: [],
            returns: {type: 'double', description: 'The current in amperes.'}
        },
        {
            name: 'getVoltage',
            signature: 'double getVoltage()',
            description: 'Retrieves the voltage being applied to the motor.',
            parameters: [],
            returns: {type: 'double', description: 'The voltage in volts.'}
        },
        {
            name: 'getTemperature',
            signature: 'double getTemperature()',
            description: 'Retrieves the temperature of the motor.',
            parameters: [],
            returns: {type: 'double', description: 'The temperature in degrees Celsius.'}
        },
        {
            name: 'setSoftLimit',
            signature: 'void setSoftLimit(DirectionState directionState, float limit)',
            description: 'Sets a soft limit for the motor in a specific direction.',
            parameters: [
                {name: 'directionState', type: 'DirectionState', description: 'The direction (forward or reverse) for the soft limit.'},
                {name: 'limit', type: 'float', description: 'The position limit in units defined by the position conversion factor.'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'setInverted',
            signature: 'void setInverted(DirectionState mode)',
            description: 'Sets the motor\'s direction to be inverted or not.',
            parameters: [
                {name: 'mode', type: 'DirectionState', description: 'The desired direction state (inverted or not).'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'setPositionConversionFactor',
            signature: 'void setPositionConversionFactor(double conversionFactor)',
            description: 'Sets the conversion factor for motor position measurements.',
            parameters: [
                {name: 'conversionFactor', type: 'double', description: 'The factor to convert motor position to desired units.'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'setVelocityConversionFactor',
            signature: 'void setVelocityConversionFactor(double conversionFactor)',
            description: 'Sets the conversion factor for motor velocity measurements.',
            parameters: [
                {name: 'conversionFactor', type: 'double', description: 'The factor to convert motor velocity to desired units.'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'setCurrentLimit',
            signature: 'void setCurrentLimit(int stallLimit, int freeLimit)',
            description: 'Sets the current limits for the motor.',
            parameters: [
                {name: 'stallLimit', type: 'int', description: 'The current limit during stall conditions in amperes.'},
                {name: 'freeLimit', type: 'int', description: 'The current limit during free-running conditions in amperes.'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'setMotorPosition',
            signature: 'void setMotorPosition(double position)',
            description: 'Sets the motor\'s position to a specific value.',
            parameters: [
                {name: 'position', type: 'double', description: 'The desired position in units defined by the position conversion factor.'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        }
    ]
};