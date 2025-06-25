export const turretApi = {
    name: 'Turret',
    package: 'frc.excalib.mechanisms.turret',
    description: 'Represents a turret mechanism capable of rotating to a specific angle using PID control and respecting rotational limits.',
    methods: [
        {
            name: 'Turret',
            signature: 'public Turret(Motor motor, ContinuousSoftLimit rotationLimit, Gains angleGains, double PIDtolerance, DoubleSupplier positionSupplier)',
            description: 'Constructs a new Turret mechanism with a motor, angle constraints, PID control, and position feedback.',
            parameters: [
                { name: 'motor', type: 'Motor', description: 'The motor used to drive the turret.' },
                { name: 'rotationLimit', type: 'ContinuousSoftLimit', description: 'The rotational boundary for turret motion, in radians.' },
                { name: 'angleGains', type: 'Gains', description: 'PID and feedforward gains for angular control.' },
                { name: 'PIDtolerance', type: 'double', description: 'Allowed tolerance for the PID controller, in radians.' },
                { name: 'positionSupplier', type: 'DoubleSupplier', description: 'Supplies the current turret angle in radians.' }
            ],
            returns: { type: 'Turret', description: 'A new instance of the Turret class.' }
        },
        {
            name: 'setPositionCommand',
            signature: 'public Command setPositionCommand(Supplier<Rotation2d> wantedPosition, SubsystemBase... requirements)',
            description: 'Creates a command to move the turret to a desired angular position using PID control.',
            parameters: [
                { name: 'wantedPosition', type: 'Supplier<Rotation2d>', description: 'Target angle for the turret.' },
                { name: 'requirements', type: 'SubsystemBase...', description: 'Optional subsystems required by the command.' }
            ],
            returns: { type: 'Command', description: 'Command to move the turret to the given position.' }
        },
        {
            name: 'setPosition',
            signature: 'public void setPosition(Rotation2d wantedPosition)',
            description: 'Sets the turret position to the desired angle using PID control.',
            parameters: [
                { name: 'wantedPosition', type: 'Rotation2d', description: 'Target angular position for the turret.' }
            ],
            returns: { type: 'void', description: 'No return value.' }
        },
        {
            name: 'getPositionAsRotation',
            signature: 'public Rotation2d getPositionAsRotation()',
            description: 'Returns the current turret position as a Rotation2d object.',
            parameters: [],
            returns: { type: 'Rotation2d', description: 'Current angular position of the turret.' }
        },
        {
            name: 'stopTurret',
            signature: 'public Command stopTurret(SubsystemBase... requirements)',
            description: 'Creates a command to immediately stop the turret motor.',
            parameters: [
                { name: 'requirements', type: 'SubsystemBase...', description: 'Optional subsystems required by the command.' }
            ],
            returns: { type: 'Command', description: 'InstantCommand to stop turret motion.' }
        }
    ]
};
