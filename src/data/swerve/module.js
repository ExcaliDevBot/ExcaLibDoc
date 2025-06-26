export const SwerveModule = {
    title: "Swerve Module",
    updated: "june 24, 2025",
    introduction: "The SwerveModule class represents a single module of a swerve drive system." +
        " Each module consists of a drive wheel for linear movement and a turret for rotation." +
        " This class handles velocity and angle control, state optimization, and provides SysId capabilities.",
    sections: [
        {
            id: "Overview",
            title: "Key Components",
            content: [
                {
                    type: "paragraph",
                    text: "The /*SwerveModule*/ has four key components:"
                },
                {
                    type: "list",
                    ordered: false,
                    items: [
                        "<Drive Wheel> - Managed by a <FlyWheel> object that controls linear motion",
                        "<Turret> - Managed by a <Turret> object that controls angular positioning.",
                        "<Module Location> - The physical location of the module on the robot chassis.",
                        "<Position Tracking> - Maintains current state for odometry purposes.",
                    ]
                },
            ]
        },
        {
            id: "Overview",
            title: "Constructor Parameters",
            content: [
                {
                    type: "paragraph",
                    text: "Here are the parameters for the /*SwerveModule*/ constructor:"
                },
                {
                    type: 'table',
                    columns: ['Parameter', 'Description'],
                    rows: [
                        ['Motor driveMotor', 'Motor controller for the drive wheel, the type should be consistent throughout the four modules.'],
                        ['Motor rotationMotor', 'Motor controller for the turret rotation of the module, the type should be consistent throughout the four modules.'],
                        ['Gains angleGains', 'PID and feed-forward gains for angle control, to calibrate these gains use the SysId method provided in the class.'],
                        ['Gains velocityGains', 'PID and feed-forward gains for linear velocity control, to calibrate these gains use the SysId method provided in the class.'],
                        ['double PIDTolerance', 'Tolerance for angle PID control, used to determine when the module is at the desired angle.'],
                        ['Translation2d moduleLocation', 'Physical location of this module on the robot, in perspective to the center of the robot.'],
                        ['DoubleSupplier angleSupplier', 'Supplier for the current angle of the module, used for odometry and control. This is typically a CAN encoder or similar sensor.'],
                        ['double maxVel', 'The maximum velocity for this module.'],
                        ['double velocityConversionFactor', 'Conversion factor for velocity units.'],
                        ['double positionConversionFactor', 'Conversion factor for velocity units.'],
                        ['double rotationVelocity ConversionFactor', 'Conversion factor for velocity units.']
                    ],
                }
            ]
        },
        {
            id: "Overview",
            title: "Methods",
            content: [
                {
                    type: "paragraph",
                    text: "The /*SwerveModule*/ has four key components:"
                },
                {
                    type: "list",
                    ordered: false,
                    items: [
                        "<Drive Wheel> - Managed by a <FlyWheel> object that controls linear motion",
                        "<Turret> - Managed by a <Turret> object that controls angular positioning.",
                        "<Module Location> - The physical location of the module on the robot chassis.",
                        "<Position Tracking> - Maintains current state for odometry purposes.",
                    ]
                },
            ]
        },
    ]

}