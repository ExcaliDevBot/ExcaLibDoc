export const flywheel = {
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
                        "code": `InterpolatingDoubleTreeMap shooterVelocityMap = new InterpolatingDoubleTreeMap();
shooterVelocityMap.put(2, 1); // two meters from the setpoint the flywheel should run at 1 rad/s
shooterVelocityMap.put(1, 2.5); // one meter from the setpoint the flywheel should run at 2.5 rad/s  

public Command warmUpShooter(){
    return flyWheel.smartVelocityCommand(                        
        () -> shooterVelocityMap.get(getDistanceFromSetpoint()), // Set the velocity supplier (rad/s)
        this // Pass the requirements to the command
    );
}`
                    },
                    {
                        "type": "callout",
                        "calloutType": "info",
                        "title": "Using smartVelocityCommand input",
                        "text": "maximize the functionality of the smartVelocityCommand according to your needs, GO WILD!"
                    }
                ]
            }
        ]
}