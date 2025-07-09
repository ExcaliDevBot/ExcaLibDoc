export const turret = {
     "title": "Turret Mechanism",
    updated: "2025-07-01",
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
                        "code": `Turret turret = new Turret(...);
Rotation2d targetAngle = Rotation2d.fromDegrees(Math.PI / 2); // desired angle
Command moveTurretCommand = turret.setPositionCommand(() -> targetAngle, this);
// Schedule the command (e.g., in autonomous or when a button is pressed)
moveTurretCommand.schedule();
`
                    },
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
}