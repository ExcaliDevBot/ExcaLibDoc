export const swerveModuleApi = {
  name: 'SwerveModule',
  package: 'frc.excalib.swerve',
  description: 'Represents a single swerve drive module, combining a drive motor and a turret for full 2D motion control.',
  methods: [
    {
      name: 'isOptimizable',
      signature: 'public boolean isOptimizable(Vector2D moduleVelocitySetPoint)',
      description: 'Determines if the module can optimize its velocity by reversing wheel direction.',
      parameters: [
        { name: 'moduleVelocitySetPoint', type: 'Vector2D', description: 'Desired velocity vector for the module.' }
      ],
      returns: { type: 'boolean', description: 'True if reversing direction is beneficial for optimization.' }
    },
    {
      name: 'setVelocityCommand',
      signature: 'public Command setVelocityCommand(Supplier<Vector2D> moduleVelocity)',
      description: 'Creates a command to set the velocity of the module.',
      parameters: [
        { name: 'moduleVelocity', type: 'Supplier<Vector2D>', description: 'Velocity vector supplier for the module.' }
      ],
      returns: { type: 'Command', description: 'Command that sets velocity on the drive and turret.' }
    },
    {
      name: 'setVelocityCommand',
      signature: 'public Command setVelocityCommand(Supplier<Vector2D> translationVelocity, DoubleSupplier omegaRadPerSec, DoubleSupplier velocityRatioLimit)',
      description: 'Creates a command to set the velocity using translation, rotation, and a scaling limit.',
      parameters: [
        { name: 'translationVelocity', type: 'Supplier<Vector2D>', description: 'Supplier of translation velocity.' },
        { name: 'omegaRadPerSec', type: 'DoubleSupplier', description: 'Rotational velocity in rad/s.' },
        { name: 'velocityRatioLimit', type: 'DoubleSupplier', description: 'Velocity ratio limit.' }
      ],
      returns: { type: 'Command', description: 'Command to control the module velocity.' }
    },
    {
      name: 'coastCommand',
      signature: 'public Command coastCommand()',
      description: 'Returns a command to set the module into coast mode.',
      parameters: [],
      returns: { type: 'Command', description: 'Command to set both drive and turret to coast.' }
    },
    {
      name: 'setDesiredState',
      signature: 'public void setDesiredState(SwerveModuleState wantedState)',
      description: 'Sets the desired speed and direction of the module.',
      parameters: [
        { name: 'wantedState', type: 'SwerveModuleState', description: 'Desired module state (speed and direction).' }
      ],
      returns: { type: 'void', description: 'No return value.' }
    },
    {
      name: 'getModulePosition',
      signature: 'public SwerveModulePosition getModulePosition()',
      description: 'Returns the module position for odometry.',
      parameters: [],
      returns: { type: 'SwerveModulePosition', description: 'Current position of the module.' }
    },
    {
      name: 'logState',
      signature: 'public SwerveModuleState logState()',
      description: 'Logs the module\'s current physical state.',
      parameters: [],
      returns: { type: 'SwerveModuleState', description: 'Measured velocity and direction.' }
    },
    {
      name: 'logSetpointState',
      signature: 'public SwerveModuleState logSetpointState()',
      description: 'Logs the module\'s current setpoint state.',
      parameters: [],
      returns: { type: 'SwerveModuleState', description: 'Setpoint velocity and direction.' }
    },
    {
      name: 'driveSysIdDynamic',
      signature: 'public Command driveSysIdDynamic(SysIdRoutine.Direction direction, Swerve swerve, SysidConfig sysidConfig)',
      description: 'Creates a SysId dynamic test command for the drive motor.',
      parameters: [
        { name: 'direction', type: 'SysIdRoutine.Direction', description: 'SysId test direction.' },
        { name: 'swerve', type: 'Swerve', description: 'Swerve subsystem.' },
        { name: 'sysidConfig', type: 'SysidConfig', description: 'SysId configuration object.' }
      ],
      returns: { type: 'Command', description: 'Dynamic test command for drive motor.' }
    },
    {
      name: 'driveSysIdQuas',
      signature: 'public Command driveSysIdQuas(SysIdRoutine.Direction direction, Swerve swerve, SysidConfig sysidConfig)',
      description: 'Creates a SysId quasistatic test command for the drive motor.',
      parameters: [
        { name: 'direction', type: 'SysIdRoutine.Direction', description: 'SysId test direction.' },
        { name: 'swerve', type: 'Swerve', description: 'Swerve subsystem.' },
        { name: 'sysidConfig', type: 'SysidConfig', description: 'SysId configuration object.' }
      ],
      returns: { type: 'Command', description: 'Quasistatic test command for drive motor.' }
    },
    {
      name: 'angleSysIdDynamic',
      signature: 'public Command angleSysIdDynamic(SysIdRoutine.Direction direction, Swerve swerve, SysidConfig sysidConfig)',
      description: 'Creates a SysId dynamic test command for the turret.',
      parameters: [
        { name: 'direction', type: 'SysIdRoutine.Direction', description: 'SysId test direction.' },
        { name: 'swerve', type: 'Swerve', description: 'Swerve subsystem.' },
        { name: 'sysidConfig', type: 'SysidConfig', description: 'SysId configuration object.' }
      ],
      returns: { type: 'Command', description: 'Dynamic test command for turret.' }
    },
    {
      name: 'angleSysIdQuas',
      signature: 'public Command angleSysIdQuas(SysIdRoutine.Direction direction, Swerve swerve, SysidConfig sysidConfig)',
      description: 'Creates a SysId quasistatic test command for the turret.',
      parameters: [
        { name: 'direction', type: 'SysIdRoutine.Direction', description: 'SysId test direction.' },
        { name: 'swerve', type: 'Swerve', description: 'Swerve subsystem.' },
        { name: 'sysidConfig', type: 'SysidConfig', description: 'SysId configuration object.' }
      ],
      returns: { type: 'Command', description: 'Quasistatic test command for turret.' }
    },
    {
      name: 'periodic',
      signature: 'public void periodic()',
      description: 'Periodic update function, updates the internal state for odometry and logging.',
      parameters: [],
      returns: { type: 'void', description: 'No return value.' }
    }
  ]
};
