export const Swerve = {
    title: "Swerve Class",
    updated: "July 1, 2025",
    introduction: "The Swerve class represents a complete swerve drive system." +
        " It manages multiple swerve modules, providing methods for driving, turning, and controlling the overall robot movement." +
        " This class is designed to work with the SwerveModule class, which represents individual swerve modules.",
    sections: [
        {
            id: "Overview",
            title: "Key Components",
            content: [
                {
                    type: "paragraph",
                    text: "The /*Swerve*/ class has five key components:"
                },
                {
                    type: "list",
                    ordered: false,
                    items: [
                        "<modules> - <ModulesHolder> managing the individual swerve modules",
                        "<imu> - <IMU> sensor for orientation tracking",
                        "<odometry> - The physical location of the module on the robot chassis.",
                        "<desiredChassisSpeeds> - Current target movement speeds",
                        "<field> - <Field2d> visualization for simulation and debugging",
                    ]
                },
            ]
        },
        {
            id: "Overview",
            title: "Constructor",
            content: [
                {
                    type: "paragraph",
                    text: "Here is a brief overview of the /*Swerve*/ constructor:"
                },
                {
                    "type": "code",
                    "language": "java",
                    "title": "Creating a SwerveModule",
                    "code": ` Swerve swerve = new Swerve(
    ModulesHolder modules, // Holder for all swerve modules
    IMU imu, // IMU sensor for orientation tracking
    Pose2d initialPosition // Initial position of the robot on the field
);`
                },
                {
                    type: "paragraph",
                    text: "Because the /*Swerve*/ constructor includes many parts and sub-parts, we recommend creating a class named " +
                        "/*SwerveConstants*/ to hold all the constants and parameters needed for the constructor. You" +
                        " can also add a createSwerve() method with parameters the suit you, we have a example in the 'examples' tab"
                },
            ]
        },
    ]
}