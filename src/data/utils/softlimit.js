export const softlimit = {
    title: "Soft Limits",
    updated: "june 24, 2025",
    introduction: "Soft limits are used to prevent a motor from moving beyond a certain point. " +
        "This is useful for preventing damage to the robot or its components or to ensure that the robot operates within a safe range.",
    sections: [
        {
            id: "Design",
            title: "Design",
            content: [
                {
                    type: "paragraph",
                    text: "Soft limits are similar in name to hard limits, but unlike hard limits which are physical " +
                        "constraints, soft limits are enforced by the software — hence the name /*soft limit*/."
                },
                {
                    type: "paragraph",
                    text: "The soft limit system is designed to be flexible and easy to use and implement" +
                        "in any situation or mechanism. Different mechanisms may have different ways" +
                        " of implementing a soft limits."
                },
                {
                    type: "paragraph",
                    text: "Soft limits can be applied to any functionality that has a measurement and setpoint." +
                        " It is not limited to just motor positioning, but can also be used for other measurements like angles, distances, velocities etc."
                },
                {
                    type: "paragraph",
                    text: "There are two types of soft limits:"
                },
                {
                    type: 'list',
                    ordered: false,
                    items: [
                        '<SoftLimit.java> - A simple soft limit that can be used to limit, and has a dynamic minimum and maximum limit.',
                        '<ContinuousSoftLimit.java> - A continuous soft limit defines a dynamic, wrap-around range for a system\'s state, allowing values to cycle smoothly within specified minimum and maximum bounds.',
                    ]
                },
            ]

        },
        {
            id: "usage",
            title: "Using SoftLimit",
            content: [
                {
                    type: "paragraph",
                    text: "Using a /*SoftLimit*/ object is quite simple, it includes a setup with a dynamic minimum limit and dynamic maximum limit." +
                        " Limiting the actual setpoint to the limits is done by wrapping the setpoint with the <limit()> method."
                },
                {
                    type: "paragraph",
                    text: "Here is a simple example of a static limit for an elevator:"
                },
                {
                    "type": "code",
                    "language": "java",
                    "title": "Elevator Subsystem with SoftLimit",
                    "code": `public class ExampleProgram extends SubsystemBase {
    private final SoftLimit elevatorLimit;
    private final LinearExtension elevator;

    public ExampleProgram() {
        elevator = new LinearExtension(/* elevator setup */);
         // the minimum limit is 0 centimeters and the maximum limit is 95 centimeters
        elevatorLimit = new SoftLimit(() -> 0, () -> 0.95);
    }

    // This method sets the elevator to a specific height, ensuring it does not exceed the limits
    public Command setHeightCommand(double setpoint) {
        return elevator.extendCommand(() -> elevatorLimit.limit(setpoint), this);
    }
}
`
                },
            ]

        },
        {
            id: "usage-continuous",
            title: "Using Continuous SoftLimit",
            content: [
                {
                    type: "paragraph",
                    text: "The /*ContinuousSoftLimit*/ class defines a dynamic, continuous range for a system's state" +
                        " (such as a rotating turret) where the input can wrap around (e.g., angles from 0 to 360 degrees)." +
                        " It uses two DoubleSupplier instances to provide dynamic minimum and maximum limits." +
                        " The class ensures that setpoints (target values) for the system stay within these limits," +
                        " handling wrap-around logic for continuous systems.\n"
                },
                {
                    type: "list",
                    ordered: false,
                    items: [
                        "Used to constrain and optimize setpoints for systems with continuous input (like angles).",
                        "Ensures the system's state remains within a valid, dynamic range.",
                        "Handles wrap-around cases, so the system can take the shortest path to a target setpoint."
                    ]
                },
                {
                    type: "paragraph",
                    text: "When using /*ContinuousSoftLimit*/, you will use the <getOptimizedSetpoint()> method to get the setpoint that is within the limits, " +
                        "in a way that the system can move to the setpoint in the shortest path possible."
                },
                {
                    type: "paragraph",
                    text: "This is a simple example of a continuous soft limit for an arm mechanism that rotates between -2π and π radians:"
                },
                {
                    "type": "callout",
                    "calloutType": "warning",
                    "title": "Important Note",
                    "text": "This code is incomplete and has many variables, parameters and imports missing." +
                        " This is for demonstration purposes only.   "
                },
                {
                    "type": "code",
                    "language": "java",
                    "title": "Elevator Subsystem with SoftLimit",
                    "code": `public class ExampleProgram extends SubsystemBase {
    private final Arm arm;
    private final ContinuousSoftLimit armAngleLimit;
    private final DoubleSupplier angleSupplier;

    public ExampleProgram() {
        arm = new Arm(/* arm setup */);
        angleSupplier = ()-> encoder.getAbsolutePosition().getValueAsDouble();
        armAngleLimit = new ContinuousSoftLimit(() -> -2 * PI, () -> PI);
    }

    public Command setAngleCommand(double angle) {
        return arm.goToAngleCommand(
                armAngleLimit.getOptimizedSetpoint(
                        angle,
                        angleSupplier.getAsDouble()
                ),
                /* rest of the functions paraments */
        );
    }
}
`
                },
            ]
        },
    ]
}