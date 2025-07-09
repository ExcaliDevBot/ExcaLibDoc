export const overview = {
    title: "Mechanisms Overview",
    updated: "2025-07-01",
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
                    text: "All throughout the library we use meters (m) for the distance unit, and radians (rad) for angle measurements. "
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
          flyWheelMotor, // pass through the motor
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
}