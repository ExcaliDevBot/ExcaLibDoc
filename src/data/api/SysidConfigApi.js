export const sysidConfigApi = {
    name: 'SysidConfig',
    package: 'frc.excalib.control.gains',
    description: 'Extends SysIdRoutine.Config to configure system identification routines with parameters for ramp rate, step voltage, and timeout duration.',
    parentClasses: [
        {
            name: "SysIdRoutine.Config",
            description: "Hardware-independent configuration for a SysId test routine"
        }
    ],
    methods: [
        {
            name: 'SysidConfig',
            signature: 'public SysidConfig(double rampRate, double stepVoltage, double timeOut)',
            description: 'Constructs a SysidConfig object with the specified ramp rate, step voltage, and timeout duration.',
            parameters: [
                {
                    name: 'rampRate',
                    type: 'double',
                    description: 'The rate at which the voltage ramps up, in volts per second.'
                },
                {
                    name: 'stepVoltage',
                    type: 'double',
                    description: 'The step voltage to apply during the system identification routine, in volts.'
                },
                {
                    name: 'timeOut',
                    type: 'double',
                    description: 'The timeout duration for the system identification routine, in seconds.'
                }
            ],
            returns: {type: 'SysidConfig', description: 'A new SysidConfig instance.'}
        }
    ]
};