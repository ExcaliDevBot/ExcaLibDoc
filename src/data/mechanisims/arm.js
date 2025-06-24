export const arm = {
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
                            "high level commands for easy and precise control",
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
};