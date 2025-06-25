export const linearExtensionApi = {
    name: 'LinearExtension',
    package: 'frc.excalib.mechanisms.linear_extension',
    description: 'Represents a linear extension mechanism with PID and feedforward control, using motion profiling to smoothly reach a target extension length.',
    methods: [
        {
            name: 'LinearExtension',
            signature: 'public LinearExtension(Motor motor, DoubleSupplier positionSupplier, DoubleSupplier angleSupplier, Gains gains, TrapezoidProfile.Constraints constraints, double tolerance)',
            description: 'Constructs a LinearExtension mechanism with position and angle feedback, and motion profile constraints.',
            parameters: [
                { name: 'motor', type: 'Motor', description: 'Motor controller for the extension mechanism.' },
                { name: 'positionSupplier', type: 'DoubleSupplier', description: 'Supplies the current extension position in meters.' },
                { name: 'angleSupplier', type: 'DoubleSupplier', description: 'Supplies the current angle of the mechanism in radians.' },
                { name: 'gains', type: 'Gains', description: 'PID and feedforward control gains.' },
                { name: 'constraints', type: 'TrapezoidProfile.Constraints', description: 'Constraints for trapezoidal motion profiling (max velocity and acceleration).' },
                { name: 'tolerance', type: 'double', description: 'Acceptable tolerance for reaching the target position in meters.' }
            ],
            returns: { type: 'LinearExtension', description: 'A new instance of the LinearExtension class.' }
        },
        {
            name: 'extendCommand',
            signature: 'public Command extendCommand(DoubleSupplier lengthSetpoint, SubsystemBase... requirements)',
            description: 'Creates a command to extend the mechanism to a given length using motion profiling, PID, and feedforward control.',
            parameters: [
                { name: 'lengthSetpoint', type: 'DoubleSupplier', description: 'Target extension length in meters.' },
                { name: 'requirements', type: 'SubsystemBase...', description: 'Optional subsystems required by the command.' }
            ],
            returns: { type: 'Command', description: 'Command that runs the extension mechanism to the target length.' }
        },
        {
            name: 'getVoltage',
            signature: 'public double getVoltage()',
            description: 'Returns the current voltage being applied to the extension motor.',
            parameters: [],
            returns: { type: 'double', description: 'Motor voltage in volts.' }
        },
        {
            name: 'getVelocity',
            signature: 'public double getVelocity()',
            description: 'Returns the current velocity of the extension motor.',
            parameters: [],
            returns: { type: 'double', description: 'Motor velocity in meters per second.' }
        },
        {
            name: 'getPosition',
            signature: 'public double getPosition()',
            description: 'Returns the current position of the linear extension.',
            parameters: [],
            returns: { type: 'double', description: 'Extension position in meters.' }
        }
    ]
};
