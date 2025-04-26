export const docContent = {
  "introduction": {
    title: "Introduction to FRCLib",
    updated: "January 15, 2025",
    introduction: "FRCLib is a comprehensive Java library designed to simplify robot development for FIRST Robotics Competition (FRC) teams. It provides pre-built mechanisms, custom swerve drive implementations, and advanced control systems to accelerate your robot development.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: [
          {
            type: "paragraph",
            text: "FRCLib builds on top of WPILib, the standard library for FRC, adding higher-level abstractions and ready-to-use components that can save your team weeks of development time. Our focus is on creating reusable, well-tested, and well-documented code that can be easily adapted to your team's specific needs."
          },
          {
            type: "paragraph",
            text: "The library is designed with a modular architecture, allowing you to use only the components you need without bringing in unnecessary dependencies. This makes it suitable for both rookie teams looking for a quick start and experienced teams looking to leverage advanced features."
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
              "Pre-built mechanism classes for common robot subsystems (arms, elevators, intakes, etc.)",
              "Complete custom swerve drive implementation with advanced features",
              "Vision processing and integration with common vision systems",
              "Path planning and following for autonomous routines",
              "Advanced control systems using PID, motion profiling, and feed-forward",
              "Command-based programming extensions",
              "Comprehensive logging and debugging tools"
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
            text: "FRCLib was built with the following principles in mind:"
          },
          {
            type: "list",
            ordered: false,
            items: [
              "Simplicity: Making complex robot control accessible to teams of all experience levels",
              "Flexibility: Providing customization options without sacrificing usability",
              "Robustness: Building in safety features and error handling to prevent common issues",
              "Performance: Optimizing critical paths for reliable real-time operation",
              "Documentation: Providing comprehensive documentation and examples"
            ]
          },
          {
            type: "callout",
            calloutType: "info",
            title: "Note for Teams",
            text: "FRCLib is designed to complement WPILib, not replace it. We recommend familiarizing yourself with WPILib concepts before diving into FRCLib to better understand the foundations."
          }
        ]
      },
      {
        id: "getting-started",
        title: "Getting Started",
        content: [
          {
            type: "paragraph",
            text: "To get started with FRCLib, check out the following resources:"
          },
          {
            type: "list",
            ordered: false,
            items: [
              "Installation guide: Learn how to add FRCLib to your robot project",
              "Quick start guide: Build a basic robot with FRCLib in minutes",
              "Examples: Explore example code for common robot configurations",
              "API Reference: Detailed documentation for all FRCLib classes and methods"
            ]
          },
          {
            type: "code",
            language: "java",
            title: "Basic Usage Example",
            code: `// Create a swerve drive controller
SwerveModuleConfig[] moduleConfigs = new SwerveModuleConfig[] {
  new SwerveModuleConfig(0, 1, 2, 3, 0.0), // Front Left
  new SwerveModuleConfig(4, 5, 6, 7, 0.0), // Front Right
  new SwerveModuleConfig(8, 9, 10, 11, 0.0), // Back Left
  new SwerveModuleConfig(12, 13, 14, 15, 0.0), // Back Right
};

SwerveDrive swerveDrive = new SwerveDrive(moduleConfigs);

// Drive the robot
swerveDrive.drive(xSpeed, ySpeed, rotation, true);`
          }
        ]
      }
    ]
  },
  "installation": {
    title: "Installation",
    updated: "January 12, 2025",
    introduction: "This guide will walk you through the process of adding FRCLib to your robot project.",
    sections: [
      {
        id: "prerequisites",
        title: "Prerequisites",
        content: [
          {
            type: "paragraph",
            text: "Before installing FRCLib, make sure you have the following:"
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
        title: "Adding FRCLib to Your Project",
        content: [
          {
            type: "paragraph",
            text: "FRCLib is available through the WPILib Maven repository. To add it to your project, update your build.gradle file with the following dependencies:"
          },
          {
            type: "code",
            language: "groovy",
            title: "build.gradle",
            code: `dependencies {
    // WPILib dependencies
    implementation wpi.java.deps.wpilib()
    implementation wpi.java.vendor.java()
    
    // FRCLib dependency
    implementation 'org.frclib:frclib:1.2.0'
    
    // If you need specific modules only, you can use:
    // implementation 'org.frclib:frclib-swerve:1.2.0'
    // implementation 'org.frclib:frclib-mechanisms:1.2.0'
    // implementation 'org.frclib:frclib-vision:1.2.0'
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
            text: "FRCLib depends on several vendor libraries for hardware support. Depending on the hardware you're using, you may need to install the following vendor libraries:"
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
            text: "Make sure your vendor library versions are compatible with the version of FRCLib you're using. Check the compatibility matrix in the documentation for details."
          }
        ]
      },
      {
        id: "verification",
        title: "Verifying Installation",
        content: [
          {
            type: "paragraph",
            text: "To verify that FRCLib is installed correctly, create a simple test class and import one of the FRCLib classes:"
          },
          {
            type: "code",
            language: "java",
            title: "TestFRCLib.java",
            code: `package frc.robot;

import org.frclib.drive.swerve.SwerveDrive;

public class TestFRCLib {
    public static void main(String[] args) {
        System.out.println("FRCLib is installed correctly!");
    }
}`
          },
          {
            type: "paragraph",
            text: "If your project compiles without errors, FRCLib is installed correctly."
          }
        ]
      }
    ]
  },
  "quick-start": {
    title: "Quick Start Guide",
    updated: "January 17, 2025",
    introduction: "This guide will help you quickly set up a basic robot with FRCLib, focusing on the most common components and features.",
    sections: [
      {
        id: "project-setup",
        title: "Creating a Robot Project",
        content: [
          {
            type: "paragraph",
            text: "Start by creating a new robot project using the WPILib VS Code extension or the WPILib New Project Creator. Choose the Command-Based Java template, as FRCLib is designed to work well with the command-based framework."
          },
          {
            type: "paragraph",
            text: "After creating the project, add FRCLib to your build.gradle file as described in the Installation guide."
          }
        ]
      },
      {
        id: "robot-container",
        title: "Setting Up RobotContainer",
        content: [
          {
            type: "paragraph",
            text: "The RobotContainer class is where you'll configure your robot's subsystems and commands. Here's an example of a basic RobotContainer with a swerve drive subsystem:"
          },
          {
            type: "code",
            language: "java",
            title: "RobotContainer.java",
            code: `package frc.robot;

import edu.wpi.first.wpilibj.XboxController;
import edu.wpi.first.wpilibj2.command.Command;
import edu.wpi.first.wpilibj2.command.RunCommand;
import frc.robot.subsystems.DriveSubsystem;

public class RobotContainer {
    // Subsystems
    private final DriveSubsystem driveSubsystem = new DriveSubsystem();
    
    // Controllers
    private final XboxController driverController = new XboxController(0);
    
    public RobotContainer() {
        configureButtonBindings();
        
        // Set default commands
        driveSubsystem.setDefaultCommand(
            new RunCommand(
                () -> driveSubsystem.drive(
                    -driverController.getLeftY(),
                    -driverController.getLeftX(),
                    -driverController.getRightX(),
                    true
                ),
                driveSubsystem
            )
        );
    }
    
    private void configureButtonBindings() {
        // Configure controller button bindings here
    }
    
    public Command getAutonomousCommand() {
        // Return the autonomous command
        return null;
    }
}`
          }
        ]
      },
      {
        id: "drive-subsystem",
        title: "Creating a Drive Subsystem",
        content: [
          {
            type: "paragraph",
            text: "Now, let's create a drive subsystem using FRCLib's SwerveDrive class:"
          },
          {
            type: "code",
            language: "java",
            title: "DriveSubsystem.java",
            code: `package frc.robot.subsystems;

import edu.wpi.first.wpilibj2.command.SubsystemBase;
import org.frclib.drive.swerve.SwerveDrive;
import org.frclib.drive.swerve.SwerveModuleConfig;
import org.frclib.util.PIDConstants;

public class DriveSubsystem extends SubsystemBase {
    private final SwerveDrive swerveDrive;
    
    public DriveSubsystem() {
        // Create swerve modules
        SwerveModuleConfig[] moduleConfigs = new SwerveModuleConfig[] {
            new SwerveModuleConfig(0, 1, 2, 3, 0.0), // Front Left
            new SwerveModuleConfig(4, 5, 6, 7, 0.0), // Front Right
            new SwerveModuleConfig(8, 9, 10, 11, 0.0), // Back Left
            new SwerveModuleConfig(12, 13, 14, 15, 0.0), // Back Right
        };
        
        // Create the swerve drive controller
        swerveDrive = new SwerveDrive(moduleConfigs);
        
        // Optional: Configure path following
        swerveDrive.configurePathFollowing(
            new PIDConstants(1.0, 0.0, 0.0), // Translation PID
            new PIDConstants(1.0, 0.0, 0.0)  // Rotation PID
        );
    }
    
    /**
     * Drive the robot
     * @param xSpeed Forward/backward speed [-1.0, 1.0]
     * @param ySpeed Left/right speed [-1.0, 1.0]
     * @param rotation Rotational speed [-1.0, 1.0]
     * @param fieldRelative Whether to use field-relative control
     */
    public void drive(double xSpeed, double ySpeed, double rotation, boolean fieldRelative) {
        swerveDrive.drive(xSpeed, ySpeed, rotation, fieldRelative);
    }
    
    /**
     * Stop the drive
     */
    public void stop() {
        swerveDrive.drive(0, 0, 0, true);
    }
    
    @Override
    public void periodic() {
        // Any periodic updates the drive system needs
    }
}`
          },
          {
            type: "callout",
            calloutType: "tip",
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
            text: "Now that you have a basic robot with swerve drive set up, you can add more features:"
          },
          {
            type: "list",
            ordered: false,
            items: [
              "Add an arm mechanism for game piece manipulation",
              "Implement autonomous routines using path following",
              "Add vision processing for tracking game elements or AprilTags",
              "Implement telemetry and dashboard output"
            ]
          },
          {
            type: "paragraph",
            text: "Check out the specific guides for each of these features in the documentation to learn how to implement them with FRCLib."
          }
        ]
      }
    ]
  },
  "mechanisms/overview": {
    title: "Mechanisms Overview",
    updated: "January 20, 2025",
    introduction: "FRCLib provides a comprehensive set of ready-to-use mechanism classes that can be easily adapted to your robot's specific needs. This page provides an overview of the available mechanisms and how to use them.",
    sections: [
      {
        id: "introduction",
        title: "Introduction to Mechanisms",
        content: [
          {
            type: "paragraph",
            text: "Mechanisms in FRCLib are high-level abstractions for common robot subsystems. They provide a consistent interface for controlling various types of mechanisms, handling the low-level details of motor control, sensor feedback, and safety features."
          },
          {
            type: "paragraph",
            text: "Each mechanism class follows a similar pattern, making it easy to learn and use multiple mechanisms once you understand the basic concepts."
          }
        ]
      },
      {
        id: "available-mechanisms",
        title: "Available Mechanisms",
        content: [
          {
            type: "paragraph",
            text: "FRCLib includes the following mechanism classes:"
          },
          {
            type: "list",
            ordered: false,
            items: [
              "ArmMechanism: For controlling single or multi-joint arms",
              "ElevatorMechanism: For controlling linear lift mechanisms",
              "IntakeMechanism: For controlling intake rollers, with optional deployment",
              "ShooterMechanism: For controlling flywheels and related components",
              "ClimberMechanism: For controlling climbing mechanisms",
              "TurretMechanism: For controlling rotating turrets"
            ]
          },
          {
            type: "paragraph",
            text: "Each mechanism supports various motor controllers and sensors, and can be configured using a builder pattern for easy setup."
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
              "Builder pattern for easy configuration",
              "Support for multiple motor controller types (TalonFX, SparkMAX, etc.)",
              "Configurable PID control for precise positioning",
              "Feed-forward control for improved performance",
              "Motion profiling for smooth movement",
              "Soft limits and hard stops for safety",
              "Preset positions for common operations",
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
              "Create the required motor controllers and sensors",
              "Configure the mechanism using the builder pattern",
              "Add the mechanism to a subsystem",
              "Create commands to control the mechanism",
              "Call the mechanism's update method in the subsystem's periodic method"
            ]
          },
          {
            type: "code",
            language: "java",
            title: "Example: Basic Arm Mechanism",
            code: `// Create motor controller
CANSparkMax motor = new CANSparkMax(1, MotorType.kBrushless);

// Configure arm mechanism
ArmMechanism arm = new ArmMechanism.Builder()
    .withMotor(motor)
    .withEncoder(motor.getEncoder())
    .withPIDConstants(new PIDConstants(0.5, 0.0, 0.02))
    .withGearRatio(100.0)
    .withArmLength(0.6) // meters
    .withLimits(0.0, Math.PI / 2) // 0 to 90 degrees
    .build();

// Add preset positions
arm.addPresetPosition("stowed", 0.0);
arm.addPresetPosition("pickup", Math.PI / 6); // 30 degrees
arm.addPresetPosition("score", Math.PI / 2); // 90 degrees

// In subsystem's periodic method
@Override
public void periodic() {
    arm.update();
}

// Control methods
public void setPosition(double angleRadians) {
    arm.setPosition(angleRadians);
}

public void setPresetPosition(String presetName) {
    arm.moveToPreset(presetName);
}`
          },
          {
            type: "callout",
            calloutType: "tip",
            title: "Extending Mechanisms",
            text: "If the built-in mechanisms don't meet your needs, you can easily extend them to add custom functionality. Check the 'Advanced Usage' section for more information."
          }
        ]
      }
    ]
  },
  "swerve/overview": {
    title: "Swerve Drive Overview",
    updated: "January 25, 2025",
    introduction: "Swerve drive is a popular drivetrain for FRC robots that provides unparalleled maneuverability and control. FRCLib provides a complete implementation of swerve drive that's easy to set up and use, while offering advanced features for teams looking to maximize performance.",
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
            text: "While swerve drive offers significant advantages, it's also more complex to implement and tune. FRCLib simplifies this process by providing a well-tested, robust implementation that handles the complex math and control algorithms for you."
          }
        ]
      },
      {
        id: "components",
        title: "Swerve Drive Components",
        content: [
          {
            type: "paragraph",
            text: "The FRCLib swerve drive implementation consists of several key components:"
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
            text: "To set up swerve drive with FRCLib, you need to create a configuration for each swerve module and then create the SwerveDrive object:"
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
            calloutType: "warning",
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