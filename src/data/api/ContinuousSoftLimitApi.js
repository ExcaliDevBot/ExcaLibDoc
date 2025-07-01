export const continuousSoftLimitApi = {
    name: 'ContinuousSoftLimit',
    package: 'frc.excalib.control.limits',
    description: 'Represents a one-dimensional range for systems with continuous input, defined by two dynamic limits.',
    parentClasses: [
        {
            name: "SoftLimit",
            description: "A class representing the allowed one dimensional range for the state of a system."
        }
    ],
    methods: [
        {
            name: 'ContinuousSoftLimit',
            signature: 'public ContinuousSoftLimit(DoubleSupplier minLimit, DoubleSupplier maxLimit)',
            description: 'Constructs a ContinuousSoftLimit with dynamic minimum and maximum limits.',
            parameters: [
                {name: 'minLimit', type: 'DoubleSupplier', description: 'Supplies the minimal limit of the range.'},
                {name: 'maxLimit', type: 'DoubleSupplier', description: 'Supplies the maximal limit of the range.'}
            ],
            returns: {type: 'ContinuousSoftLimit', description: 'A new ContinuousSoftLimit instance.'}
        },
        {
            name: 'getOptimizedSetpoint',
            signature: 'public double getOptimizedSetpoint(double measurement, double wantedSetpoint)',
            description: 'Returns the optimized setpoint for the system, considering the continuous limits.',
            parameters: [
                {name: 'measurement', type: 'double', description: 'The current state of the system.'},
                {name: 'wantedSetpoint', type: 'double', description: 'The desired state of the system.'}
            ],
            returns: {type: 'double', description: 'The optimized setpoint within the allowed range.'}
        },
        {
            name: 'getUnoptimizedSetpoint',
            signature: 'public double getUnoptimizedSetpoint(double measurement, double wantedSetpoint)',
            description: 'Returns the unoptimized setpoint for the system, considering the continuous limits.',
            parameters: [
                {name: 'measurement', type: 'double', description: 'The current state of the system.'},
                {name: 'wantedSetpoint', type: 'double', description: 'The desired state of the system.'}
            ],
            returns: {type: 'double', description: 'The unoptimized setpoint within the allowed range.'}
        }
    ]
};