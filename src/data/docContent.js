export const docContent = {
    "introduction": {
        title: "Introduction to ExcaLib",
        updated: "17.06.2025",
        introduction: "ExcaLib is a comprehensive WpilibJ library designed to simplify robot development for FIRST Robotics Competition (FRC) teams. It provides pre-built mechanisms, custom swerve drive implementations, generic hradware wrappers and additional utilities to accelerate your robot development.",
        sections: [
            {
                id: "overview",
                title: "Overview",
                content: [
                    {
                        type: "paragraph",
                        text: "ExcaLib builds on top of WPILib, the standard library for FRC, " +
                            "adding higher-level abstractions and ready-to-use components that can save your team a lot of pre-season " +
                            "preperations and season development time. Our focus is on creating reusable and east-to-implement code that can be easily adapted to your team's specific needs."
                    },
                    {
                        type: "paragraph",
                        text: "This makes it suitable for both rookie teams looking for a quick start and experienced teams looking to leverage advanced features."
                    }
                ]
            },
            {
                id: "features",
                title: "Key Features",
                content: [
                    {
                        type: "list",
                        ordered: false,
                        items: [
                            "Pre-built mechanism classes for common robot subsystems (arms, elevators, turrets, etc.)",
                            "Complete custom swerve drive implementation with advanced features",
                            "Advanced control systems using PID, motion profiling, and feed-forward",
                            "Utilities (Leds, Field related propositions, etc.) for common tasks",
                            "Command-based programming extensions",
                            "Built in logging and telemetry using NetworkTables",
                        ]
                    }
                ]
            },
            {
                id: "philosophy",
                title: "Design Philosophy",
                content: [
                    {
                        type: "paragraph",
                        text: "ExcaLib was built with the following principles in mind:"
                    },
                    {
                        type: "list",
                        ordered: false,
                        items: [
                            "Simplicity: Making complex robot control accessible to teams of all experience levels",
                            "Flexibility: Providing customization options without sacrificing usability",
                            "Robustness: Building in safety features and error handling to prevent common issues",
                            "Documentation: Providing comprehensive documentation and examples"
                        ]
                    },
                    {
                        type: "callout",
                        calloutType: "info",
                        title: "Note for Teams",
                        text: "ExcaLib is designed to complement WPILib, not replace it. We recommend familiarizing yourself with WPILib concepts before diving into ExcaLib to better understand the foundations."
                    }
                ]
            },
            {
                id: "getting-started",
                title: "Getting Started",
                content: [
                    {
                        type: "paragraph",
                        text: "To get started with ExcaLib, check out the following resources:"
                    },
                    {
                        type: "list",
                        ordered: false,
                        items: [
                            "Installation guide: Learn how to add ExcaLib to your robot project",
                            "Quick start guide: Build a basic robot with ExcaLib in an hour",
                            "Examples: Explore example code for common robot configurations",
                            "API Reference: Detailed documentation for all ExcaLib classes and methods"
                        ]
                    }
                ]
            },
            {
                id: "contributors",
                title: "Contributors",
                content: [
                    {
                        type: "paragraph",
                        text: "ExcaLib is the result of contributions from a dedicated team members and alumni that are FRC enthusiasts."
                    },
                    {
                        type: "list",
                        ordered: false,
                        items: [
                            "Yoav Cohen",
                            "Itay Keller",
                            "Shai Grossman",
                            "Yehuda Rothstein"
                        ]
                    }
                ]
            }
        ]
    },
    "installation": {
        title: "Installation",
        updated: "January 12, 2025",
        introduction: "This guide will walk you through the process of adding ExcaLib to your robot project.",
        sections: [
            {
                id: "prerequisites",
                title: "Prerequisites",
                content: [
                    {
                        type: "paragraph",
                        text: "Before installing ExcaLib, make sure you have the following:"
                    },
                    {
                        type: "list",
                        ordered: false,
                        items: [
                            "WPILib 2025.x.x or newer",
                            "Java 17 or newer",
                            "Gradle 7.x or newer",
                            "FRC VS Code or IntelliJ IDEA with the FRC plugins"
                        ]
                    }
                ]
            },
            {
                id: "gradle",
                title: "Adding ExcaLib to Your Project",
                content: [
                    {
                        type: "paragraph",
                        text: "ExcaLib is available through the WPILib Maven repository. To add it to your project, update your build.gradle file with the following dependencies:"
                    },
                    {
                        type: "code",
                        language: "groovy",
                        title: "build.gradle",
                        code: `dependencies {
    // WPILib dependencies
    implementation wpi.java.deps.wpilib()
    implementation wpi.java.vendor.java()
    
    // ExcaLib dependency
    implementation 'org.ExcaLib:ExcaLib:1.2.0'
    
    // If you need specific modules only, you can use:
    // implementation 'org.ExcaLib:ExcaLib-swerve:1.2.0'
    // implementation 'org.ExcaLib:ExcaLib-mechanisms:1.2.0'
    // implementation 'org.ExcaLib:ExcaLib-vision:1.2.0'
}`
                    },
                    {
                        type: "paragraph",
                        text: "After updating your build.gradle file, refresh your Gradle project to download the new dependencies."
                    }
                ]
            },
            {
                id: "vendor-deps",
                title: "Installing Vendor Dependencies",
                content: [
                    {
                        type: "paragraph",
                        text: "ExcaLib depends on several vendor libraries for hardware support. Depending on the hardware you're using, you may need to install the following vendor libraries:"
                    },
                    {
                        type: "list",
                        ordered: false,
                        items: [
                            "CTRE Phoenix (for Talon SRX, Victor SPX, CANCoder, etc.)",
                            "REV Robotics (for SparkMAX, NEO motors, etc.)",
                            "NavX (for the NavX-MXP gyro)"
                        ]
                    },
                    {
                        type: "callout",
                        calloutType: "warning",
                        title: "Important",
                        text: "Make sure your vendor library versions are compatible with the version of ExcaLib you're using. Check the compatibility matrix in the documentation for details."
                    }
                ]
            },
            {
                id: "verification",
                title: "Verifying Installation",
                content: [
                    {
                        type: "paragraph",
                        text: "To verify that ExcaLib is installed correctly, create a simple test class and import one of the ExcaLib classes:"
                    },
                    {
                        type: "code",
                        language: "java",
                        title: "TestExcaLib.java",
                        code: `package frc.robot;

import org.ExcaLib.drive.swerve.SwerveDrive;

public class TestExcaLib {
    public static void main(String[] args) {
        System.out.println("ExcaLib is installed correctly!");
    }
}`
                    },
                    {
                        type: "paragraph",
                        text: "If your project compiles without errors, ExcaLib is installed correctly."
                    }
                ]
            }
        ]
    },
    "quick-start": {
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
    },
    "mechanisms/linear": {
        title: "Linear Mechanism",
        updated: "June 20, 2025",
        introduction: "The Linear Mechanism class in ExcaLib is designed for controlling linear motion systems such as elevators or telescopic arms. It provides precise control, along with safety features like soft limits and motion profiling.",
        sections: [
            {
                id: "overview",
                title: "Overview",
                content: [
                    {
                        type: "paragraph",
                        text: "The Linear Mechanism class simplifies the control of linear motion systems by abstracting motor control, sensor feedback, and safety features into a single, easy-to-use interface."
                    }
                ]
            },
            {
                id: "example",
                title: "Basic Example",
                content: [
                    {
                        type: "code",
                        language: "java",
                        title: "Basic Linear Mechanism Example",
                        code: `LinearExtension linearMechanism;
TalonFXMotor motor;

public ExampleLinearMechanism() {
    motor = new TalonFXMotor(0); // Motor with CAN id 0

    linearMechanism = new LinearExtension(
        motor, // Motor object
        motor::getMotorPosition, // Position supplier
        () -> Math.PI / 2, // Angle of the mechanism (e.g., vertical)
        new Gains(1.0, 0.0, 0.1), // PID gains
        new TrapezoidProfile.Constraints(2.0, 1.0), // Max velocity and acceleration
        0.01 // Position tolerance
    );

    linearMechanism.extendCommand(() -> 1.0, this); // Command to extend to a setpoint
}`
                    }
                ]
            },
            {
                id: "safety",
                content: [
                    {
                        type: "callout",
                        calloutType: "warning",
                        title: "Safety Note",
                        text: "Always configure soft limits and ensure proper calibration to prevent damage to the mechanism or robot."
                    }
                ]
            }
        ]
    },
    "mechanisms/overview": {
        title: "Mechanisms Overview",
        updated: "January 20, 2025",
        introduction: "ExcaLib provides a comprehensive set of ready-to-use mechanism classes that can be easily adapted to your robot's specific needs." +
            " This page provides an overview of the available mechanisms and how to use them.",
        sections: [
            {
                id: "introduction",
                title: "Introduction to Mechanisms",
                content: [
                    {
                        type: "paragraph",
                        text: "Mechanisms in ExcaLib are high-level abstractions for common robot subsystems. " +
                            "They provide a consistent interface for controlling various types of mechanisms, handling the low-level details of motor control, sensor feedback, and safety features."
                    },
                    {
                        type: "paragraph",
                        text: "Each mechanism class follows a similar pattern, making it easy to learn and use multiple mechanisms once you understand the basic concepts."
                    },
                    {
                        type: "callout",
                        calloutType: "warning",
                        title: "Units",
                        text: "All threw the library we use meters (m) for the distance unit, and radians (rad) for angle measurements. "
                    }

                ]
            },
            {
                id: "available-mechanisms",
                title: "Available Mechanisms",
                content: [
                    {
                        type: "paragraph",
                        text: "ExcaLib includes the following mechanism classes:"
                    },
                    {
                        type: "list",
                        ordered: false,
                        items: [
                            "Arm: For controlling single or multi-joint arms",
                            "Linear Extension: For controlling linear lift mechanisms",
                            "FlyWheel: For controlling intake rollers, with optional deployment",
                            "Turret: For controlling flywheels and related components",
                            "Mechanism: A generic mechanism class that can be extended for custom mechanisms",
                        ]
                    },
                    {
                        type: "callout",
                        calloutType: "tip",
                        title: "Differential Mechanisms",
                        text: "We are currently working on adding support for differential mechanisms such as differential elevators. "
                    },
                    {
                        type: "paragraph",
                        text: "Each mechanism supports various motor controllers and sensors, and can be easily setup."
                    }
                ]
            },
            {
                id: "common-features",
                title: "Common Features",
                content: [
                    {
                        type: "paragraph",
                        text: "All mechanism classes share the following common features:"
                    },
                    {
                        type: "list",
                        ordered: false,
                        items: [
                            "Support for multiple motor controller types (TalonFX, SparkMAX, etc.)",
                            "Configurable PID control for precise positioning",
                            "Feed-forward control for improved performance",
                            "Motion profiling for smooth movement",
                            "static soft limits and continuous Soft limits for safety",
                            "SysID integration for tuning",
                            "Telemetry output for debugging and tuning"
                        ]
                    }
                ]
            },
            {
                id: "using-mechanisms",
                title: "Using Mechanisms",
                content: [
                    {
                        type: "paragraph",
                        text: "To use a mechanism, you typically follow these steps:"
                    },
                    {
                        type: "list",
                        ordered: true,
                        items: [
                            "Create a object of the mechanism class or one of its subclasses ",
                            "Create ExcaLib motors, sensors, and other hardware components",
                            "Create Wpilib Triggers and Suppliers for sensors",
                            "Configure the mechanism with the motors, sensors, and parameters",
                            "Use the mechanism's methods to control it (e.g., ExtendCommand, smartVelocityCommand, etc.)",
                        ]
                    },
                    {
                        type: "code",
                        language: "java",
                        title: "Basic Arm Mechanism",
                        code: `FlyWheel flyWheelMechanism;
TalonFXMotor flyWheelMotor;

public ExampleFlyWheel() {
    flyWheelMotor = new TalonFXMotor(0); // new TalonFXMotor with CAN ID 0
        
     flyWheelMechanism = new FlyWheel(
          flyWheelMotor, // pass threw the motor
          0.5, // set the max acceleration (rad/s^2)
          0.3, // set the max jerk (rad/s^3)
          new Gains() //empty constructor for the PID gains, you can set them later
     );
        
     flyWheelMechanism.smartVelocityCommand(
            ()-> 0.5, // set the velocity supplier (rad/s)
            this // pass the requirements to the command
        );
    }`
                    }
                ]
            }
        ]
    },
    "mechanisms/arm": {
        "title": "Arm Mechanism",
        "updated": "June 17, 2025",
        "introduction": "The Arm class in ExcaLib provides a flexible and extensible framework for controlling " +
            "rotating arms using PID and feedforward control. It is ideal for managing mechanisms like single-jointed arms," +
            " elevators with rotational pivots, and other similar systems. This page covers how to configure and use the Arm class effectively.",
        "sections": [
            {
                "id": "overview",
                "title": "Arm Overview",
                "content": [
                    {
                        "type": "paragraph",
                        "text": "The Arm mechanism class extends the generic `Mechanism` class and is designed for controlling robotic arms that rotate around a pivot point. It integrates PID control, physical modeling (mass and center of mass), and soft velocity limits to ensure safe and smooth motion."
                    },
                    {
                        "type": "list",
                        "ordered": false,
                        "items": [
                            "Supports dynamic and static setpoints",
                            "Feedforward gains",
                            "Soft velocity limiting to avoid excessive speeds",
                            "high level commands for easy and persice control",
                        ]
                    },
                    {
                        "type": "callout",
                        "calloutType": "warning",
                        "title": "Critical Note",
                        "text": "dealing with arms can be dangerous, especially if they are heavy or have a large range of motion. Therefore we recommend using " +
                            "a Continuous SoftLimit to limit the velocity and position of the arm. " +
                            "please check out the documentation for the Continuous SoftLimit class for more information on how to use it."
                    }
                ]
            },
            {
                "id": "constructor",
                "title": "Constructor and Configuration",
                "content": [
                    {
                        "type": "paragraph",
                        "text": "To instantiate an Arm, you must provide a motor, angle supplier, velocity limit, PID+feedforward gains, and mass model:"
                    },
                    {
                        "type": "code",
                        "language": "java",
                        "title": "Arm Constructor",
                        "code": "Arm arm = new Arm(\n    new FlexMotor(1),        // ExcaLib vortex motor object\n    encoder::getRadians,        // Current angle supplier\n    new SoftLimit(0.5, 1),        // Max and Min velocity in rad/s\n    new Gains(1.2, 0, 0.01 ,0 ,0.1 ,2),     // PID and FF gains\n     new Mass(()-> 1, ()-> 1, 4.2)   // mass amount and mass translation\n);"
                    },
                ]
            },
            {
                "id": "commands",
                "title": "Arm Commands",
                "content": [
                    {
                        "type": "paragraph",
                        "text": "The Arm class provides two key commands for motion control:"
                    },
                    {
                        "type": "list",
                        "ordered": false,
                        "items": [
                            "anglePositionControlCommand: Follows a dynamic setpoint using PID and feedforward.",
                            "goToAngleCommand: Moves to a fixed angle using PID and feedforward."
                        ]
                    },
                    {
                        "type": "code",
                        "language": "java",
                        "title": "Using goToAngleCommand",
                        "code": "arm.goToAngleCommand(\n    Math.PI / 2,   " +
                            "          // Target angle in radians\n    (__) - > atPositionTrigger), // is in tolerance supplier \n    0.05,                    // Tolerance in radians\n    this                      // Subsystem requirement\n);"
                    },
                    {
                        "type": "callout",
                        "calloutType": "tip",
                        "title": "Tolerance Trigger",
                        "text": "We recommend using a Wpilib Trigger to check if the arm is in tolerance, it should check if the difference between the current position and the setpoint is smaller than the tolerance."
                    }
                ]
            },
            {
                "id": "physical-modeling",
                "title": "Physical Modeling",
                "content": [
                    {
                        "type": "paragraph",
                        "text": "The arm uses a simplified physics model to apply feedforward based on mass and the gravitational pull. " +
                            "The torque required to hold or move the arm is estimated using static, velocity, and gravity gains," +
                            " which improves performance without overloading the PID loop."
                    },
                    {
                        "type": "list",
                        "ordered": false,
                        "items": [
                            "`ks` (static gain): Helps overcome initial friction",
                            "`kv` (velocity gain): Helps predict and control speed",
                            "`kg` (gravity gain): Helps hold the arm against gravity using the arm's center of mass"
                        ]
                    }
                ]
            },
            {
                "id": "velocity-limiting",
                "title": "Velocity Limiting",
                "content": [
                    {
                        "type": "paragraph",
                        "text": "Velocity limiting prevents the arm from moving too quickly, which can be dangerous or physically unrealistic. The SoftLimit is applied to the desired velocity before output is calculated."
                    },
                    {
                        "type": "code",
                        "language": "java",
                        "title": "Velocity Limiting Example",
                        "code": "SoftLimit velocityLimit = new SoftLimit(()-> -2, ()-> 2);" +
                            " // Min -2 rad/s Max 2 rad/s\ndouble unRealisticSetpoint = 1000;\n// In command \nvelocityLimit.limit(unRealisticSetpoint); // will return 2.0"
                    }
                ]
            },
            {
                "id": "telemetry",
                "title": "Telemetry and Tuning",
                "content": [
                    {
                        "type": "paragraph",
                        "text": "The Arm class is compatible with WPILib's telemetry tools. Use SmartDashboard or Shuffleboard to monitor error, output voltage, setpoint tracking, and tolerance status. You can also dynamically tune PID and feedforward values using ExcaLib’s Gains object or NetworkTables."
                    }
                ]
            }
        ]
    },
    "mechanisms/flywheel": {
        "title": "FlyWheel Mechanism",
        "updated": "June 19, 2025",
        "introduction": "the flyWheel mechanism, provides advanced velocity control using both PID and feedforward. The class supports" +
            " dynamic velocity setpoints, acceleration and jerk constraints, and provides commands for precise and" +
            " dynamic flywheel speed regulation, making it suitable for applications requiring accurate and" +
            " responsive flywheel control.",
        "sections": [
            {
                "id": "overview",
                "title": "FlyWheel Overview",
                "content": [
                    {
                        "type": "paragraph",
                        "text": "The FlyWheel mechanism gets a motor object, and physical constraints for precise profiled movement," +
                            "the FlyWheel mechanism is used for shooter rollers for example."
                    },
                    {
                        "type": "list",
                        "ordered": false,
                        "items": [
                            "Supports dynamic and static velocity setpoints",
                            "PID control for precise speed regulation",
                            "Trapazoid profile constraints for acceleration and jerk",
                        ]
                    }
                ]
            },
            {
                "id": "constructor",
                "title": "Constructor and Configuration",
                "content": [
                    {
                        "type": "paragraph",
                        "text": "To instantiate a FlyWheel, you must provide a motor, max acceleration (rad/s^2), max jerk (rad/s^3) and  gains:"
                    },
                    {
                        "type": "code",
                        "language": "java",
                        "title": "FlyWheel Constructor",
                        "code": `FlyWheel flyWheel;
FlexMotor motor;

public ExampleFlyWheelMechanism() {
    motor = new FlexMotor(13); // Motor with CAN id 13

    flyWheel = new FlyWheel(
        motor, // Motor object
        1, // Max acceleration in rad/s^2
        0.2, // Max jerk in rad/s^3
        new Gains(1.0, 0.0, 0.1, 0.0, 2, 0.3) // PID + Feedforward gains
    );
}`
                    },
                ]
            },
            {
                "id": "commands",
                "title": "FlyWheel Commands",
                "content": [
                    {
                        "type": "paragraph",
                        "text": "The FlyWheel class provides one key commands for motion control and a setter Command:"
                    },
                    {
                        "type": "list",
                        "ordered": false,
                        "items": [
                            "smartVelocityCommand: controls the FlyWheel's velocity with high precision.",
                            "setDynamicVelocityCommand: sets a dynamic velocity for control of the FlyWheel."
                        ]
                    },
                    {
                        "type": "code",
                        "language": "java",
                        "title": "Using smartVelocityCommand",
                        "code":`InterpolatingDoubleTreeMap shooterVelocityMap = new InterpolatingDoubleTreeMap();
shooterVelocityMap.put(2, 1); // two meters from the setpoint the flywheel should run at 1 rad/s
shooterVelocityMap.put(1, 2.5); // one meter from the setpoint the flywheel should run at 2.5 rad/s  

public Command warmUpShooter(){
    return flyWheel.smartVelocityCommand(                        
        () -> shooterVelocityMap.get(getDistanceFromSetpoint()), // Set the velocity supplier (rad/s)
        this // Pass the requirements to the command
    );
}` },
                    {
                        "type": "callout",
                        "calloutType": "info",
                        "title": "Using smartVelocityCommand input",
                        "text": "maximize the functionality of the smartVelocityCommand according to your needs, GO WILD!"
                    }
                ]
            }
        ]
    },
       "mechanisms/turret": {
        "title": "Turret Mechanism",
        "updated": "June 19, 2025",
        "introduction": "The Turret mechanism enables precise angular positioning using PID control, with support for" +
            " continuous input and rotational soft limits. The class allows dynamic setpoints, integrates position" +
            " feedback, and provides commands for accurate and responsive turret movement, making it ideal for" +
            " applications that demand reliable and safe turret rotation control.",
        "sections": [
            {
                "id": "constructor",
                "title": "Constructor and Configuration",
                "content": [
                    {
                        "type": "paragraph",
                        "text": "To instantiate a Turret, you must provide a motor, rotational boundary, gains, PID tolerance and position measurement."
                    },
                    {
                        "type": "code",
                        "language": "java",
                        "title": "Turret Constructor",
                        "code": `Turret turret;
SparkMaxMotor motor;

public ExampleTurretMechanism() {
    motor = new SparkMaxMotor(20); // Motor with CAN id 20

    turret = new Turret(
        motor, // Motor object
        new ContinuousSoftLimit(0, 2 * Math.PI), // Rotational boundary in radians
        new Gains(1.0, 0.0, 0.1, 0.0, 2, 0.3), // PID + Feedforward gains
        0.05, // PID tolerance in radians
        motor::getMotorPosition // Position measurement supplier
    );
}`
                    },
                    {
                        "type": "callout",
                        "calloutType": "info",
                        "title": "Unlimited Rotation",
                        "text": "The Turret class supports unlimited rotation by using a ContinuousSoftLimit, which " +
                            "allows the turret to rotate continuously without hitting hard limits. " +
                            "Use Double.POSITIVE_INFINITY and Double.NEGATIVE_INFINITY for the limits to allow full rotation."
                    },
                ]
            },
            {
                "id": "commands",
                "title": "Turret Commands",
                "content": [
                    {
                        "type": "paragraph",
                        "text": "The Turret class provides one key commands for angle position control:"
                    },
                    {
                        "type": "list",
                        "ordered": false,
                        "items": [
                            "setPositionCommand: moves the turret to the given setpoint.",
                        ]
                    },
                    {
                        "type": "code",
                        "language": "java",
                        "title": "Using setPositionCommand",
                        "code":`Turret turret = new Turret(...);
Rotation2d targetAngle = Rotation2d.fromDegrees(Math.PI / 2); // desired angle
Command moveTurretCommand = turret.setPositionCommand(() -> targetAngle, this);
// Schedule the command (e.g., in autonomous or when a button is pressed)
moveTurretCommand.schedule();
` },
                    {
                        "type": "callout",
                        "calloutType": "warning",
                        "title": "Warning",
                        "text": "Ensure that the turret's rotation limits and PID gains are configured correctly to prevent mechanical damage or unsafe operation.\n" +
                            "Improper use or configuration may result in unexpected turret movement or hardware failure."
                    }
                ]
            }
        ]
    },
    "swerve/overview": {
        title: "Swerve Drive Overview",
        updated: "January 25, 2025",
        introduction: "Swerve drive is a popular drivetrain for FRC robots that provides unparalleled maneuverability and control. ExcaLib provides a complete implementation of swerve drive that's easy to set up and use, while offering advanced features for teams looking to maximize performance.",
        sections: [
            {
                id: "introduction",
                title: "Introduction to Swerve Drive",
                content: [
                    {
                        type: "paragraph",
                        text: "Swerve drive consists of four independently controlled wheel modules, each capable of rotating to point in any direction. This allows the robot to move in any direction and rotate simultaneously, providing greater maneuverability than traditional drivetrains."
                    },
                    {
                        type: "paragraph",
                        text: "While swerve drive offers significant advantages, it's also more complex to implement and tune. ExcaLib simplifies this process by providing a well-tested, robust implementation that handles the complex math and control algorithms for you."
                    },
                    {
                        type: "callout",
                        calloutType: "warning",
                        title: "General Considerations",
                        text: "Our swerve drive implementation is designed to be flexible and adaptable, but it may not cover every possible configuration. Make sure to test your robot thoroughly and adjust the parameters as needed for your specific setup." +
                            "\nIn addition, our swerve drive is focused on easy setup and use, but it is not configured for maximum performance out of the box. You may need to adjust the PID gains, encoder offsets, and other parameters to achieve optimal performance for your robot.",
                    },
                ]
            },

            {
                id: "components",
                title: "Swerve Drive Components",
                content: [
                    {
                        type: "paragraph",
                        text: "The ExcaLib swerve drive implementation consists of several key components:"
                    },
                    {
                        type: "list",
                        ordered: false,
                        items: [
                            "SwerveDrive: The main class that coordinates the modules and provides drive methods",
                            "SwerveModule: Represents a single swerve module, including drive and steer motors",
                            "SwerveModuleConfig: Configuration for a swerve module, including motor IDs and encoder offsets",
                            "SwerveKinematics: Handles the math for converting robot motion to module states",
                            "SwerveOdometry: Tracks the robot's position on the field"
                        ]
                    }
                ]
            },
            {
                id: "setup",
                title: "Setting Up Swerve Drive",
                content: [
                    {
                        type: "paragraph",
                        text: "To set up swerve drive with ExcaLib, you need to create a configuration for each swerve module and then create the SwerveDrive object:"
                    },
                    {
                        type: "code",
                        language: "java",
                        title: "Basic Swerve Drive Setup",
                        code: `// Create swerve module configurations
SwerveModuleConfig[] moduleConfigs = new SwerveModuleConfig[] {
    new SwerveModuleConfig(
        0, // Drive Motor ID
        1, // Steer Motor ID
        2, // Encoder ID
        3, // Index Encoder ID (optional, can be -1 if not used)
        0.0 // Encoder offset in radians
    ),
    // ... configurations for the other three modules
};

// Create gyro
AHRS gyro = new AHRS(SPI.Port.kMXP);

// Create the swerve drive
SwerveDrive swerveDrive = new SwerveDrive.Builder()
    .withModuleConfigs(moduleConfigs)
    .withGyro(gyro)
    .withDriveMotorType(MotorType.FALCON)
    .withSteerMotorType(MotorType.FALCON)
    .withEncoderType(EncoderType.CANCODER)
    .withPIDConstants(
        new PIDConstants(0.5, 0.0, 0.0), // Drive PID
        new PIDConstants(1.0, 0.0, 0.1)  // Steer PID
    )
    .withDimensions(
        0.5, // Wheelbase (meters)
        0.5, // Track width (meters)
        0.1  // Wheel diameter (meters)
    )
    .build();`
                    },
                    {
                        type: "callout",
                        calloutType: "tip",
                        title: "Important",
                        text: "Make sure to adjust the motor IDs, encoder IDs, and offsets to match your robot's hardware configuration. The encoder offsets are critical for proper swerve drive operation."
                    }
                ]
            },
            {
                id: "using",
                title: "Using Swerve Drive",
                content: [
                    {
                        type: "paragraph",
                        text: "Once you've set up the swerve drive, you can use it to control your robot's movement:"
                    },
                    {
                        type: "code",
                        language: "java",
                        title: "Basic Swerve Drive Control",
                        code: `// Teleop driving
public void teleopPeriodic() {
    // Get joystick inputs
    double xSpeed = -driverController.getLeftY();
    double ySpeed = -driverController.getLeftX();
    double rotation = -driverController.getRightX();
    
    // Apply deadband
    xSpeed = Math.abs(xSpeed) > 0.1 ? xSpeed : 0.0;
    ySpeed = Math.abs(ySpeed) > 0.1 ? ySpeed : 0.0;
    rotation = Math.abs(rotation) > 0.1 ? rotation : 0.0;
    
    // Drive the robot
    swerveDrive.drive(xSpeed, ySpeed, rotation, true);
}

// Autonomous path following
public Command getAutonomousCommand() {
    // Create a path
    Path path = new Path(
        new Pose2d(0, 0, new Rotation2d(0)),
        List.of(
            new Translation2d(1, 1),
            new Translation2d(2, -1)
        ),
        new Pose2d(3, 0, new Rotation2d(Math.PI))
    );
    
    // Return a command to follow the path
    return swerveDrive.followPath(path);
}`
                    },
                    {
                        type: "paragraph",
                        text: "The drive method takes x speed (forward/backward), y speed (left/right), rotation speed, and a boolean indicating whether to use field-relative control. With field-relative control, the robot moves relative to the field, regardless of its orientation."
                    }
                ]
            }
        ]
    }
};