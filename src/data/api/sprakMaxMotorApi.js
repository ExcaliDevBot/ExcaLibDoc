export const sparkMaxMotorApi = {
    name: 'SparkMaxMotor',
    package: 'frc.excalib.control.motor.controllers',
    description: 'Implementation of the Motor interface using the Spark Max motor controller, providing methods for motor control, configuration, and telemetry.',
    methods: [
        {
            name: 'SparkMaxMotor',
            signature: 'public SparkMaxMotor(int deviceId, MotorType type)',
            description: 'Constructs a new SparkMaxMotor instance with the specified device ID and motor type.',
            parameters: [
                {name: 'deviceId', type: 'int', description: 'The CAN device ID of the Spark Max motor controller.'},
                {name: 'type', type: 'MotorType', description: 'The type of motor.'}
            ],
            returns: {type: 'SparkMaxMotor', description: 'A new SparkMaxMotor instance.'}
        },
        {
            name: 'stopMotor',
            signature: 'public void stopMotor()',
            description: 'Stops the motor output.',
            parameters: [],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'setVoltage',
            signature: 'public void setVoltage(double voltage)',
            description: 'Sets the output voltage of the motor.',
            parameters: [
                {name: 'voltage', type: 'double', description: 'The voltage to apply to the motor.'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'setPercentage',
            signature: 'public void setPercentage(double percentage)',
            description: 'Sets the output as a percentage of the maximum output.',
            parameters: [
                {name: 'percentage', type: 'double', description: 'The output percentage (-1.0 to 1.0).'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'setFollower',
            signature: 'public void setFollower(int mainMotorID)',
            description: 'Configures this motor to follow another motor by device ID.',
            parameters: [
                {name: 'mainMotorID', type: 'int', description: 'The device ID of the main motor to follow.'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'setIdleState',
            signature: 'public void setIdleState(IdleState idleMode)',
            description: 'Sets the idle state (brake or coast) of the motor.',
            parameters: [
                {name: 'idleMode', type: 'IdleState', description: 'The desired idle state.'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'getIdleState',
            signature: 'public IdleState getIdleState()',
            description: 'Gets the current idle state (brake or coast) of the motor.',
            parameters: [],
            returns: {type: 'IdleState', description: 'The current idle state.'}
        },
        {
            name: 'getDeviceID',
            signature: 'public int getDeviceID()',
            description: 'Returns the CAN device ID of the motor controller.',
            parameters: [],
            returns: {type: 'int', description: 'The device ID.'}
        },
        {
            name: 'getMotorPosition',
            signature: 'public double getMotorPosition()',
            description: 'Gets the current position of the motor encoder.',
            parameters: [],
            returns: {type: 'double', description: 'The motor position.'}
        },
        {
            name: 'getMotorVelocity',
            signature: 'public double getMotorVelocity()',
            description: 'Gets the current velocity of the motor in rotations per second.',
            parameters: [],
            returns: {type: 'double', description: 'The motor velocity in RPS.'}
        },
        {
            name: 'getCurrent',
            signature: 'public double getCurrent()',
            description: 'Gets the current output of the motor in amperes.',
            parameters: [],
            returns: {type: 'double', description: 'The output current.'}
        },
        {
            name: 'getVoltage',
            signature: 'public double getVoltage()',
            description: 'Gets the applied voltage to the motor.',
            parameters: [],
            returns: {type: 'double', description: 'The applied voltage.'}
        },
        {
            name: 'getTemperature',
            signature: 'public double getTemperature()',
            description: 'Gets the current temperature of the motor.',
            parameters: [],
            returns: {type: 'double', description: 'The motor temperature.'}
        },
        {
            name: 'setSoftLimit',
            signature: 'public void setSoftLimit(DirectionState directionState, float limit)',
            description: 'Sets a soft limit for the motor in the specified direction.',
            parameters: [
                {name: 'directionState', type: 'DirectionState', description: 'The direction for the soft limit (FORWARD or REVERSE).'},
                {name: 'limit', type: 'float', description: 'The position limit.'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'setInverted',
            signature: 'public void setInverted(DirectionState mode)',
            description: 'Sets the inversion state of the motor.',
            parameters: [
                {name: 'mode', type: 'DirectionState', description: 'The desired direction state.'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'setPositionConversionFactor',
            signature: 'public void setPositionConversionFactor(double conversionFactor)',
            description: 'Sets the conversion factor for encoder position.',
            parameters: [
                {name: 'conversionFactor', type: 'double', description: 'The position conversion factor.'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'setVelocityConversionFactor',
            signature: 'public void setVelocityConversionFactor(double conversionFactor)',
            description: 'Sets the conversion factor for encoder velocity.',
            parameters: [
                {name: 'conversionFactor', type: 'double', description: 'The velocity conversion factor.'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'setCurrentLimit',
            signature: 'public void setCurrentLimit(int stallLimit, int freeLimit)',
            description: 'Sets the current limits for the motor.',
            parameters: [
                {name: 'stallLimit', type: 'int', description: 'The stall current limit.'},
                {name: 'freeLimit', type: 'int', description: 'The free current limit.'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'setMotorPosition',
            signature: 'public void setMotorPosition(double position)',
            description: 'Sets the encoder position of the motor.',
            parameters: [
                {name: 'position', type: 'double', description: 'The new encoder position.'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        }
    ]
};