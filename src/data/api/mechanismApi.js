export const mechanismApi = {
  name: 'Mechanism',
  package: 'frc.excalib.mechanisms',
  description: 'A generic mechanism class representing a motor-driven subsystem with support for manual control, voltage control, telemetry, and system identification routines.',
  methods: [
    {
      name: 'Mechanism',
      signature: 'public Mechanism(Motor motor)',
      description: 'Constructs a Mechanism with the specified motor controller.',
      parameters: [
        { name: 'motor', type: 'Motor', description: 'The motor controlling the mechanism.' }
      ],
      returns: { type: 'Mechanism', description: 'A new instance of Mechanism.' }
    },
    {
      name: 'setOutput',
      signature: 'public void setOutput(double output)',
      description: 'Sets the motor output as a duty cycle percentage.',
      parameters: [
        { name: 'output', type: 'double', description: 'Duty cycle output value (percentage).' }
      ],
      returns: { type: 'void', description: 'No return value.' }
    },
    {
      name: 'setVoltage',
      signature: 'public void setVoltage(double voltage)',
      description: 'Sets the motor output as a voltage value.',
      parameters: [
        { name: 'voltage', type: 'double', description: 'Voltage to apply to the motor.' }
      ],
      returns: { type: 'void', description: 'No return value.' }
    },
    {
      name: 'manualCommand',
      signature: 'public Command manualCommand(DoubleSupplier outputSupplier, SubsystemBase... requirements)',
      description: 'Creates a command that runs the mechanism manually by setting output dynamically from the supplier.',
      parameters: [
        { name: 'outputSupplier', type: 'DoubleSupplier', description: 'Supplier providing dynamic output values.' },
        { name: 'requirements', type: 'SubsystemBase...', description: 'Subsystems required by the command.' }
      ],
      returns: { type: 'Command', description: 'A command for manual control of the mechanism.' }
    },
    {
      name: 'stopMotorCommand',
      signature: 'public Command stopMotorCommand(SubsystemBase... requirements)',
      description: 'Creates an instant command to stop the motor output immediately.',
      parameters: [
        { name: 'requirements', type: 'SubsystemBase...', description: 'Subsystems required by the command.' }
      ],
      returns: { type: 'Command', description: 'An instant command that stops the motor.' }
    },
    {
      name: 'getVelocity',
      signature: 'public double getVelocity()',
      description: 'Returns the current motor velocity.',
      parameters: [],
      returns: { type: 'double', description: 'Motor velocity measurement.' }
    },
    {
      name: 'getPosition',
      signature: 'public double getPosition()',
      description: 'Returns the current motor position.',
      parameters: [],
      returns: { type: 'double', description: 'Motor position measurement.' }
    },
    {
      name: 'getVoltage',
      signature: 'public double getVoltage()',
      description: 'Returns the current motor voltage.',
      parameters: [],
      returns: { type: 'double', description: 'Motor voltage measurement.' }
    },
    {
      name: 'getCurrent',
      signature: 'public double getCurrent()',
      description: 'Returns the current motor current draw.',
      parameters: [],
      returns: { type: 'double', description: 'Motor current measurement.' }
    },
    {
      name: 'coastCommand',
      signature: 'public Command coastCommand(SubsystemBase... requirements)',
      description: 'Creates a command to put the motor in coast mode while running and restore the default idle state afterwards.',
      parameters: [
        { name: 'requirements', type: 'SubsystemBase...', description: 'Subsystems required by the command.' }
      ],
      returns: { type: 'Command', description: 'Command that switches motor to coast mode during execution.' }
    },
    {
      name: 'sysIdQuasistatic',
      signature: 'public Command sysIdQuasistatic(Direction direction, SubsystemBase subsystem, DoubleSupplier positionSupplier, SysidConfig config, boolean isLinear)',
      description: 'Creates a command to perform a quasistatic system identification test on the mechanism.',
      parameters: [
        { name: 'direction', type: 'Direction', description: 'Direction of the test (forward or backward).' },
        { name: 'subsystem', type: 'SubsystemBase', description: 'The subsystem associated with this mechanism.' },
        { name: 'positionSupplier', type: 'DoubleSupplier', description: 'Supplier for the mechanism position measurement.' },
        { name: 'config', type: 'SysidConfig', description: 'Configuration settings for the system identification routine.' },
        { name: 'isLinear', type: 'boolean', description: 'True if the mechanism is linear, false if angular.' }
      ],
      returns: { type: 'Command', description: 'Command performing a quasistatic system ID test.' }
    },
    {
      name: 'sysIdDynamic',
      signature: 'public Command sysIdDynamic(Direction direction, SubsystemBase subsystem, DoubleSupplier positionSupplier, SysidConfig config, boolean isLinear)',
      description: 'Creates a command to perform a dynamic system identification test on the mechanism.',
      parameters: [
        { name: 'direction', type: 'Direction', description: 'Direction of the test (forward or backward).' },
        { name: 'subsystem', type: 'SubsystemBase', description: 'The subsystem associated with this mechanism.' },
        { name: 'positionSupplier', type: 'DoubleSupplier', description: 'Supplier for the mechanism position measurement.' },
        { name: 'config', type: 'SysidConfig', description: 'Configuration settings for the system identification routine.' },
        { name: 'isLinear', type: 'boolean', description: 'True if the mechanism is linear, false if angular.' }
      ],
      returns: { type: 'Command', description: 'Command performing a dynamic system ID test.' }
    }
  ]
};
