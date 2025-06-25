export const softLimitApi = {
    name: 'SoftLimit',
    package: 'frc.excalib.control.limits',
    description: 'Represents a one-dimensional allowed range for a system, defined by two dynamic limits.',
    methods: [
        {
            name: 'SoftLimit',
            signature: 'public SoftLimit(DoubleSupplier minLimit, DoubleSupplier maxLimit)',
            description: 'Constructs a SoftLimit with dynamic minimum and maximum limits.',
            parameters: [
                {name: 'minLimit', type: 'DoubleSupplier', description: 'Supplies the minimal limit of the range.'},
                {name: 'maxLimit', type: 'DoubleSupplier', description: 'Supplies the maximal limit of the range.'}
            ],
            returns: {type: 'SoftLimit', description: 'A new SoftLimit instance.'}
        },
        {
            name: 'within',
            signature: 'public boolean within(double val)',
            description: 'Checks if the given value is within the current limits.',
            parameters: [
                {name: 'val', type: 'double', description: 'The value to check.'}
            ],
            returns: {type: 'boolean', description: 'True if the value is within the limits, false otherwise.'}
        },
        {
            name: 'limit',
            signature: 'public double limit(double val)',
            description: 'Limits the given value to the current range.',
            parameters: [
                {name: 'val', type: 'double', description: 'The value to limit.'}
            ],
            returns: {type: 'double', description: 'The value clamped to the current range.'}
        },
        {
            name: 'getMaxLimit',
            signature: 'public double getMaxLimit()',
            description: 'Returns the current maximal limit of the range.',
            parameters: [],
            returns: {type: 'double', description: 'The current maximal limit.'}
        },
        {
            name: 'getMinLimit',
            signature: 'public double getMinLimit()',
            description: 'Returns the current minimal limit of the range.',
            parameters: [],
            returns: {type: 'double', description: 'The current minimal limit.'}
        }
    ]
};