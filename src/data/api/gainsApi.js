export const gainsApi = {
    name: 'Gains',
    package: 'frc.excalib.control.gains',
    description: 'Bundles together multiple types of gains, including PID and feedforward gains, for control systems.',
    methods: [
        {
            name: 'Gains',
            signature: 'public Gains(double kp, double ki, double kd, double ks, double kv, double ka, double kg)',
            description: 'Constructs a Gains object with specified PID and feedforward gains.',
            parameters: [
                {name: 'kp', type: 'double', description: 'The proportional gain.'},
                {name: 'ki', type: 'double', description: 'The integral gain.'},
                {name: 'kd', type: 'double', description: 'The derivative gain.'},
                {name: 'ks', type: 'double', description: 'The static gain.'},
                {name: 'kv', type: 'double', description: 'The velocity gain.'},
                {name: 'ka', type: 'double', description: 'The acceleration gain.'},
                {name: 'kg', type: 'double', description: 'The gravity gain.'}
            ],
            returns: {type: 'Gains', description: 'A new Gains instance.'}
        },
        {
            name: 'Gains',
            signature: 'public Gains(double kp, double ki, double kd)',
            description: 'Constructs a Gains object with only PID gains. Feedforward gains are set to 0.',
            parameters: [
                {name: 'kp', type: 'double', description: 'The proportional gain.'},
                {name: 'ki', type: 'double', description: 'The integral gain.'},
                {name: 'kd', type: 'double', description: 'The derivative gain.'}
            ],
            returns: {type: 'Gains', description: 'A new Gains instance.'}
        },
        {
            name: 'Gains',
            signature: 'public Gains(double ks, double kg, double kv, double ka)',
            description: 'Constructs a Gains object with only feedforward gains. PID gains are set to 0.',
            parameters: [
                {name: 'ks', type: 'double', description: 'The static gain.'},
                {name: 'kg', type: 'double', description: 'The gravity gain.'},
                {name: 'kv', type: 'double', description: 'The velocity gain.'},
                {name: 'ka', type: 'double', description: 'The acceleration gain.'}
            ],
            returns: {type: 'Gains', description: 'A new Gains instance.'}
        },
        {
            name: 'Gains',
            signature: 'public Gains(Gains PIDgains, Gains FFgains)',
            description: 'Constructs a Gains object by combining PID gains and feedforward gains from two separate Gains objects.',
            parameters: [
                {name: 'PIDgains', type: 'Gains', description: 'The Gains object containing PID gains.'},
                {name: 'FFgains', type: 'Gains', description: 'The Gains object containing feedforward gains.'}
            ],
            returns: {type: 'Gains', description: 'A new Gains instance.'}
        },
        {
            name: 'Gains',
            signature: 'public Gains()',
            description: 'Constructs a Gains object with all gains set to 0.',
            parameters: [],
            returns: {type: 'Gains', description: 'A new Gains instance.'}
        },
        {
            name: 'Gains',
            signature: 'public Gains(Gains gains)',
            description: 'Constructs a Gains object by copying the values from another Gains object.',
            parameters: [
                {name: 'gains', type: 'Gains', description: 'The Gains object to copy.'}
            ],
            returns: {type: 'Gains', description: 'A new Gains instance.'}
        },
        {
            name: 'setPIDgains',
            signature: 'public void setPIDgains(double kp, double ki, double kd)',
            description: 'Sets the PID gains.',
            parameters: [
                {name: 'kp', type: 'double', description: 'The proportional gain.'},
                {name: 'ki', type: 'double', description: 'The integral gain.'},
                {name: 'kd', type: 'double', description: 'The derivative gain.'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'setFeedForwardGains',
            signature: 'public void setFeedForwardGains(double ks, double kg, double kv, double ka)',
            description: 'Sets the feedforward gains.',
            parameters: [
                {name: 'ks', type: 'double', description: 'The static gain.'},
                {name: 'kg', type: 'double', description: 'The gravity gain.'},
                {name: 'kv', type: 'double', description: 'The velocity gain.'},
                {name: 'ka', type: 'double', description: 'The acceleration gain.'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        }
    ]
};