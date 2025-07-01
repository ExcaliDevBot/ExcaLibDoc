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
    ]

}