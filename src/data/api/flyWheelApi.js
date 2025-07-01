export const flyWheelApi = {
    name: 'FlyWheel',
    package: 'frc.excalib.mechanisms.fly_wheel',
    description: 'Represents a FlyWheel mechanism with velocity control using PID and feedforward logic.',
     parentClasses: [
        {
            name: "Mechanism",
            description: "A ExcaLib class representing a generic Mechanism."
        }
    ],
    methods: [
        {
            name: 'FlyWheel',
            signature: 'public FlyWheel(Motor motor, double maxAcceleration, double maxJerk, Gains gains)',
            description: 'Constructor for the FlyWheel mechanism.',
            parameters: [
                { name: 'motor', type: 'Motor', description: 'The FlyWheel motor controller.' },
                { name: 'maxAcceleration', type: 'double', description: 'Maximum allowed acceleration.' },
                { name: 'maxJerk', type: 'double', description: 'Maximum allowed jerk (rate of change of acceleration).' },
                { name: 'gains', type: 'Gains', description: 'The PID and feedforward gain constants.' }
            ],
            returns: { type: 'FlyWheel', description: 'A new instance of the FlyWheel class.' }
        },
        {
            name: 'smartVelocityCommand',
            signature: 'public Command smartVelocityCommand(DoubleSupplier velocitySupplier, SubsystemBase... requirements)',
            description: 'Generates a command to control the FlyWheel\'s velocity using a trapezoidal motion profile for smooth transitions.',
            parameters: [
                { name: 'velocitySupplier', type: 'DoubleSupplier', description: 'Supplier of the target velocity.' },
                { name: 'requirements', type: 'SubsystemBase...', description: 'Optional subsystem dependencies.' }
            ],
            returns: { type: 'Command', description: 'Command to run the FlyWheel at a smart velocity setpoint.' }
        },
        {
            name: 'setDynamicVelocityCommand',
            signature: 'public Command setDynamicVelocityCommand(DoubleSupplier velocity, SubsystemBase... requirements)',
            description: 'Creates a command to dynamically control the FlyWheel\'s velocity using feedforward and PID.',
            parameters: [
                { name: 'velocity', type: 'DoubleSupplier', description: 'Supplier of the target velocity.' },
                { name: 'requirements', type: 'SubsystemBase...', description: 'Optional subsystem dependencies.' }
            ],
            returns: { type: 'Command', description: 'Command to dynamically control the FlyWheel velocity.' }
        },
        {
            name: 'setDynamicVelocity',
            signature: 'public void setDynamicVelocity(double velocity)',
            description: 'Sets the FlyWheel\'s velocity dynamically using PID and feedforward.',
            parameters: [
                { name: 'velocity', type: 'double', description: 'The target velocity.' }
            ],
            returns: { type: 'void', description: 'No return value.' }
        },
        {
            name: 'periodic',
            signature: 'public void periodic()',
            description: 'Updates the internal timing and velocity values for use in acceleration calculations.',
            parameters: [],
            returns: { type: 'void', description: 'No return value.' }
        },
        {
            name: 'getVelocity',
            signature: 'public double getVelocity()',
            description: 'Returns the current velocity of the FlyWheel.',
            parameters: [],
            returns: { type: 'double', description: 'Current FlyWheel velocity.' }
        }
    ]
};
