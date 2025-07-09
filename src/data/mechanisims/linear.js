export const linear = {
    title: "Linear Mechanism",
    updated: "2025-07-01",
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
}