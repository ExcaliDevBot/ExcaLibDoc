export const quickStart = {
     title: "Quick Start Guide",
        updated: "January 17, 2025",
        introduction: "This guide will help you quickly set up a basic robot with ExcaLib, focusing on the most common components and features.",
        sections: [
            {
                id: "project-setup",
                title: "Creating a Robot Project",
                content: [
                    {
                        type: "paragraph",
                        text: "Start by creating a new robot project using the WPILib VS Code extension. Choose the Command-Based Java template, as ExcaLib is designed to work exclusively with the command-based framework."
                    },
                    {
                        type: "paragraph",
                        text: "After creating the project, add ExcaLib to your build.gradle file as described in the Installation guide."
                    }
                ]
            },
            {
                id: "robot-container",
                title: "Setting Up A Subsystem Class",
                content: [
                    {
                        type: "paragraph",
                        text: "incorporating the ExcaLib mechanisms, requires you to do it threw a subsystem class. " +
                            "Each subsystem class should extend the `SubsystemBase` class from WPILib and contain the logic for controlling your robot's hardware. " +
                            "We recommand writing all you motor and control logic in the subsystem class."
                    },
                    {
                        type: "paragraph",
                        text: "Here's a very basic example of a subsystem representing a simple elevator:"
                    },
                    {
                        type: "code",
                        language: "java",
                        title: "RobotContainer.java",
                        code: `package frc.robot;

public class ExampleElevator extends SubsystemBase {
    LinearExtension elevatorMechanism;
    TalonFXMotor firstMotor, secondMotor;
    MotorGroup elevatorMotors;

    public ExampleElevator() {
        // create two motor controllers, and pass threw the CAN id
        firstMotor = new TalonFXMotor(FIRST_MOTOR_ID);
        secondMotor = new TalonFXMotor(SECOND_MOTOR_ID);


        // our elevator has two motors,
        // so for applying functions on both motors, we will put them inside a MotorGroup
        elevatorMotors = new MotorGroup(firstMotor, secondMotor);

        // apply conversion factor - to get the elevators position based on motor position.
        elevatorMotors.setPositionConversionFactor(ROTATIONS_TO_METERS);

        elevatorMechanism = new LinearExtension(
         
                elevatorMotors,// pass threw any motor that inherites from Motor.java
                firstMotor::getMotorPosition, // get the elevator's position
                // let's say our elevator is straight-up and is not angled
                () -> Math.PI / 2, 
                 // later - when we calibrate out elevator we will add values (this is a empty constructor)
                new Gains(),
                new TrapezoidProfile.Constraints(MAX_VELOCITY, MAX_ACCELERATION), //elevator constraints
                0.01 // set the elevators position tolerance (meters)
        );
    }

    public Command setPositionCommand(double setpoint) {
        return elevatorMechanism.extendCommand(() -> setpoint, this); // YES - it's that easy!
    }
}
`
                    }
                ]
            },
            {
                id: "drive-subsystem",
                title: "Creating a Swerve Drive Subsystem",
                content: [
                    {
                        type: "paragraph",
                        text: "Before creating a swerve drive subsystem, lets see how to build to configuration:"
                    },
                    {
                        type: "paragraph",
                        text: "In your Constants.java (or any other appropriate class)," +
                            " define all hardware IDs, CAN bus names, PID gains, and geometry for your swerve modules." +
                            " This includes drive and rotation motor IDs, encoder IDs, translations, and PID constants."
                    },
                    {
                        type: "paragraph",
                        text: "Each swerve module is constructed with:"
                    },
                    {
                        type: "list",
                        ordered: false,
                        items: [
                            "A drive motor (e.g., TalonFXMotor)",
                            "A rotation motor (e.g., SparkMaxMotor)",
                            "PID gains for both drive and rotation",
                            "A translation (position on the robot)",
                            "An absolute encoder supplier for module angle",
                            "Velocity and position conversion factors"
                        ]
                    },
                    {
                        type: "code",
                        language: "java",
                        title: "Constructing a Front Left Swerve Module",
                        code: 'new SwerveModule(\n' +
                            '    // (if your team uses a second CAN bus - you can set it in the motor\'s costructor) \n' +
                            '    new TalonFXMotor(FRONT_LEFT_DRIVE_ID, SWERVE_CANBUS), \n' +
                            '    new SparkMaxMotor(FRONT_LEFT_ROTATION_ID, SWERVE_CANBUS),\n' +
                            '    new Gains(...), // drive PID\n' +
                            '    new Gains(...), // rotation PID\n' +
                            '    PID_TOLERANCE,\n' +
                            '    new Translation2d(TRACK_WIDTH / 2, TRACK_WIDTH / 2); \n' +
                            '    () -> FRONT_LEFT_ABS_ENCODER.getAbsolutePosition().getValueAsDouble() * 2 * Math.PI,\n' +
                            '    MAX_MODULE_VEL,\n' +
                            '    VELOCITY_CONVERSION_FACTOR,\n' +
                            '    POSITION_CONVERSION_FACTOR,\n' +
                            '    ROTATION_VELOCITY_CONVERSION_FACTOR\n' +
                            ')'
                    },
                    {
                        type: "paragraph",
                        text: "To group all swerve modules together, you can create a ModulesHolder object." +
                            "This object gets four modules and provides methods to control them collectively. "

                    },
                    {
                        type: "paragraph",
                        text: "let's create a ModulesHolder object for our swerve drive, so we will pass threw four modules (like the one we created above):"
                    },
                    {
                        type: "code",
                        language: "java",
                        title: "Constructing a ModulesHolder",
                        code: 'new ModulesHolder(\n' +
                            '       new SwerveModule(\n' +
                            '           // values of the front left SwerveModule\n' +
                            '       ),\n' +
                            '       new SwerveModule(\n' +
                            '           // values of the front right SwerveModule\n' +
                            '       ),\n' +
                            '       new SwerveModule(\n' +
                            '           // values of the back left SwerveModule\n' +
                            '       ),\n' +
                            '       new SwerveModule(\n' +
                            '           // values of the back right SwerveModule\n' +
                            '       ),\n' +
                            ');'
                    },
                    {
                        type: "paragraph",
                        text: "Finally, constructing swerve subsystem is very simple, you will need to pass threw three arguments :"
                    },
                    {
                        type: "list",
                        ordered: false,
                        items: [
                            "ModulesHolder: The ModulesHolder object containing all swerve modules",
                            "IMU / Gyro: An IMU or gyro ExcaLib object for orientation (e.g., NavX, Pigeon)",
                            "Pose2d: The initial pose of the robot on the field, which can be set to (0, 0, 0) if not known"
                        ]
                    },
                    {
                        type: "paragraph",
                        text: "Now, let's create a swerve drive subsystem using ExcaLib's Swerve class:"
                    },
                    {
                        type: "code",
                        language: "java",
                        title: "SwerveConstants.java",
                        code: `public static Swerve configureSwerve() {
            return new Swerve(
                    new ModulesHolder(/* four modules are set here */),
                    new Pigeon(GYRO_ID, SWERVE_CANBUS, new Rotation3d()),
                    new Pose2d() // start from (0,0,0)
            );
        }`
                    },
                    {
                        type: "code",
                        language: "java",
                        title: "RobotContainer.java",
                        code: `private final Swerve swerve = Constants.SwerveConstants.configureSwerve();`
                    },
                    {
                        type: "callout",
                        calloutType: "warning",
                        title: "Module Configuration",
                        text: "The SwerveModuleConfig constructor takes the drive motor ID, steer motor ID, encoder ID, and offset for each module. Make sure to adjust these values to match your robot's hardware configuration."
                    }
                ]
            },
            {
                id: "next-steps",
                title: "Next Steps",
                content: [
                    {
                        type: "paragraph",
                        text: "Now that you have a basic robot swerve in-mind you can try the following:"
                    },
                    {
                        type: "list",
                        ordered: false,
                        items: [
                            "Incoporate the DriveCommand into your robot's teleop period",
                            "Add a joystick or controller to control the swerve drive",
                            "Implement autonomous commands using the swerve drive"
                        ]
                    },
                    {
                        type: "callout",
                        calloutType: "info",
                        title: "Stuck?",
                        text: "If you run into any issues or have questions, check out the ExcaLib post on CheifDelphi. The ExcaLib team is always happy to assist teams in getting started and making the most of the library. You can also " +
                            "visit the corresponding documentation pages for more detailed information on specific features and components so as example projects."
                    },
                    {
                        type: "paragraph",
                        text: "Check out the specific guides for each of these features in the documentation to learn how to implement them with ExcaLib."
                    }
                ]
            },

        ]
};