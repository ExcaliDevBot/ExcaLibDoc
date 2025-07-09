export const SwerveOverview = {
    title: "Swerve Overview",
    updated: "2025-07-01",
    introduction: "The Swerve is one of ExcaLib's top features, providing a comprehensive set of tools" +
        "for building and controlling swerve drive robots in FRC. ExcaLib's swerve drive is designed to be" +
        "easy to use and highly customizable, allowing teams to focus on their robot's performance with minimal setup" +
        "and ease of use.",
    sections: [
        {
            id: "Overview",
            title: "What Is a Swerve Drive?",
            content: [
                {
                    type: "paragraph",
                    text: "A swerve drive (also known as a crab drive or independent wheel module drive) " +
                        "is an advanced drivetrain that gives a robot independent control of each wheel's angle and speed.\n" +
                        "\n" +
                        "Unlike simpler drivetrains like tank or mecanum, swerve allows true omnidirectional movement, meaning the robot can:"
                },
                {
                    type: "list",
                    ordered: false,
                    items: [
                        "Move in any direction (translation) while",
                        "Rotating (angular velocity) independently."
                    ]
                },
            ]
        },
        {
            id: "Overview",
            title: " Prerequisites Before Building Swerve",
            content: [
                {
                    type: "paragraph",
                    text: "Before diving into implementation, certain things need to be understood and prepared:"
                },
                {
                    type: "paragraph",
                    text: "Mechanical Hardware - Each swerve module typically includes:"
                },
                {
                    type: "list",
                    ordered: false,
                    items: [
                        "Drive motor: Controls wheel speed (often brushless like NEO or KrakenX44)",
                        "Steer motor: Controls the rotation angle of the wheel",
                        "Absolute encoder (e.g., CANcoder): Gives the wheel's steering position on boot",
                        "Wheel & gear system: Used for driving and rotating",
                    ]
                },
                {
                    type: "paragraph",
                    text: "Sensors & Electronics:"
                },
                {
                    type: "list",
                    ordered: false,
                    items: [
                        "Gyro (NavX, Pigeon2, etc.) for field-relative control",
                        "CAN bus setup for motors and encoders",
                    ]
                },
                {
                    "type": "callout",
                    "calloutType": "warning",
                    "title": "Wiring",
                    "text": "Be sure to wire your motors and encoders correctly and responsively. Having a " +
                        "good wiring setup by the modules is very important."
                },
            ]
        },
        {
            id: "Overview",
            title: "What Is a Swerve Drive?",
            content: [
                {
                    type: "paragraph",
                    text: "The Complete swerve drive is made out of 3 main class with a utility class"
                },
                {
                    type: "paragraph",
                    text: "The <Swerve> class is the main class that handles the swerve drive logic, including" +
                        "the movement of the modules and the calculation of the robot's position."
                },
                {
                    type: "paragraph",
                    text: "The <SwerveModule> class represents a single swerve module, which includes a drive motor and" +
                        "a steering motor. It handles the movement of the module and the calculation of its position."
                },
                {
                    type: "paragraph",
                    text: "The <ModulesHolder> class handles the collection of swerve modules, allowing you to" +
                        "easily manage multiple modules in your robot."
                },
                {
                    type: "paragraph",
                    text: "The <SwerveAccUtils> class provides utility functions for calculating the acceleration" +
                        "and velocity of the swerve drive, making it easier to implement advanced control algorithms."
                },
            ]
        },
        {
            id: "Overview",
            title: "Steps Review",
            content: [
                {
                    type: "list",
                    ordered: true,
                    items: [
                        "Zero Absolute Encoders - each encoder should be zerod when the module is toward the front of the robot",
                        "Gyro Reset - toward the front of the robot, this is important for field-relative control",
                        "Feedforward & PID Setup - configure the drive and steer motors with appropriate feedforward and PID values using SysId or manual tuning",
                        "ChassisSpeeds Input - as a vector, this will probably be provided by a joystick or other input device",

                    ]
                }, {
                    "type": "callout",
                    "calloutType": "warning",
                    "title": "Gyro Calibration",
                    "text": "Please celebrate your gyro before using the swerve drive, this is important for accurate measurments."
                },
            ]
        },
        {
            id: "Overview",
            title: "Stuff to Know Before Using Swerve",
            content: [
                {
                    type: "paragraph",
                    text: "Before using the swerve drive, there are a few things you should know for the setup:"
                },
                {
                    type: 'table',
                    columns: ['Parameter', 'Description'],
                    rows: [
                        ['Drive Gear Ratio', 'The Drive Gear Ratio represents how many times the drive motor shaft must rotate for the wheel to make one full revolution. This information is typically provided on the product page of the purchased swerve module.'],
                        ['Steer Gear Ratio', 'The Drive Gear Ratio represents how many times the steering motor shaft must rotate for the wheel to make one full revolution. This information is typically provided on the product page of the purchased swerve module.'],
                        ['CAN Bus Name', 'If you are using a custom CAN bus name for your motors with a CANivore, you need to provide it here.'],
                        ['Absolute Encoder Offset', 'PID and feed-forward gains for linear velocity control, to calibrate these gains use the SysId method provided in the class.'],
                        ['double PIDTolerance', 'Tolerance for angle PID control, used to determine when the module is at the desired angle.'],
                        ['Translation2d moduleLocation', 'Physical location of this module on the robot, in perspective to the center of the robot.'],
                    ],
                }
            ]
        },
        {
            id: "Overview",
            title: "End Goal",
            content: [
                {
                    type: "paragraph",
                    text: "In the end, to connect the swerve drive command to the controller, you will need to" +
                        " use the <Swerve> class to create a swerve drive object, and then use the" +
                        " <driveCommand()> method to drive the robot. "
                },
                {
                    type: "paragraph",
                    text: "We recommend to create a <createSwerve()> method that returns a <Swerve> object, and then use that object to drive the robot." +
                        " This method should be placed where all of the constants are available, such as in the <Constants> class."
                },
                {
                    type: "paragraph",
                    text: "In the examples tab there is a full configured swerve drive that you can use as a reference."
                },
            ]
        },
        {
            id: "Overview",
            title: "Driving the Swerve ",
            content: [
                {
                    type: "paragraph",
                    text: "Use the <driveCommand()> method to create a command that drives the robot. The method is simple to use and takes" +
                        " a <Vector2d> as the velocityMPS. This vector represents the velocity of the robot in meters per second." +
                        " The <driveCommand()> method also takes a <DoubleSupplier> as the rotation, which represents the rotation of the robot in radians per second." +
                        "Finally, the method takes a <BooleanSupplier> to determine if the robot should drive in field-relative mode or not."
                },
                {
                    type: "paragraph",
                    text: "This is a example of how to use the <driveCommand()> method:"
                },
                {
                    "type": "code",
                    "language": "java",
                    "title": "Drive Command Example",
                    "code": `Swerve swerve = SwerveConstants.configureSwerve(new Pose2d()); // takes an initial pose
CommandPS5Controller driveController = new CommandPS5Controller(0);

// set the default command for the swerve drive
swerve.setDefaultCommand(
        swerve.driveCommand(
                // joystick position (-1 to 1) times the max velocity for getting the correct values
                () -> new Vector2D(
                        -driveController.getLeftY() * MAX_VEL, // x factor of the joystick
                        -driveController.getLeftX() * MAX_VEL // y factor of the joystick
                ),
                // joystick value (-1 to 1) times the max rotation for getting the correct values
                () -> driveController.getRightX() * MAX_OMEGA_RAD_PER_SEC,
                // driving field orianted
                () -> true
        )
);`
                },
                {
                    type: "paragraph",
                    text: "This is a example of how we used the <driveCommand()> method, you can change the" +
                        " joystick values to match your controller's layout. The <MAX_VEL> and <MAX_OMEGA_RAD_PER_SEC>" +
                        " are constants that represent the maximum velocity and rotation of the robot, respectively."
                },
            ]
        },
        {
            id: "Overview",
            title: "Extra Features",
            content: [
                {
                    type: "paragraph",
                    text: "We recommend using a decelerator to make your joystick position smoother, this can be done by using the" +
                        " <InterpolatingDoubleTreeMap> class. This class allows you to set a deceleration rate and a minimum value, which will" +
                        " make the joystick position smoother and more responsive."
                },
                {
                    type: "paragraph",
                    text: "Here is an example of how to use the <InterpolatingDoubleTreeMap> class:"
                },
                                {
                    "type": "code",
                    "language": "java",
                    "title": "Drive Command Example",
                    "code": `InterpolatingDoubleTreeMap driverInterpolation = new InterpolatingDoubleTreeMap();

driverInterpolation.put(0.0, 1.0); // if the L2 axis is fully extended, the robot will drive at full speed
driverInterpolation.put(1.0, 0.25); // if the L2 axis is fully closed, the robot will drive up to 25% speed

swerve.driveCommand(
    () -> new Vector2D(
        // depending on the L2 axis, the robot will drive at a different speed
        -driveController.getLeftY() * MAX_VEL * driverInterpolation.get(driveController.getL2Axis()), 
        -driveController.getLeftX() * MAX_VEL * driverInterpolation.get(driveController.getL2Axis())
    ),
    () -> driveController.getRightX() * MAX_ANGLE * driverInterpolation.get(driveController.getL2Axis()),
    () -> true
)

`
                },

            ]
        },
    ]

}