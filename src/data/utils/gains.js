export const gains = {
    title: "Gains",
    updated: "june 24, 2025",
    introduction: "Working with gains is a common task in FRC, especially when tuning PID controllers or other control systems. Dealing with all these values can " +
        "be hard to bundle together, and make your code less readable. ExcaLib provides a simple way to manage gains using This class.",
    sections: [
        {
            id: "using-gains",
            title: "Using Gains",
            content: [
                {
                    type: "paragraph",
                    text: "The /*Gains*/ class is a utility for bundling together control system gains, specifically PID" +
                        " (Proportional, Integral, Derivative) and feedforward gains" +
                        " (static, gravity, velocity, acceleration). It provides multiple constructors for flexibility," +
                        " allowing you to create gain sets with only PID, only feedforward, both," +
                        " or by copying/combining existing Gains objects."
                },
                {
                    type: "paragraph",
                    text: " The class exposes all gain values as public fields and provides setter methods for updating PID or feedforward gains."
                },
                {
                    "type": "callout",
                    "calloutType": "success",
                    "title": "In ExcaLib",
                    "text": "Passing threw a Gains object is not a rare occurrence in ExcaLib. Familiarizing yourself with the class is very important."
                },
                {
                    type: "paragraph",
                    text: "The /*Gains*/ class includes the following fields:"
                },
                {
                    type: 'list',
                    ordered: false,
                    items: [
                        '<kP> - Proportional gain',
                        '<kI> - Integral gain',
                        '<kD> - Derivative gain',
                        '<ks> - Static friction feedforward gain',
                        '<kg> - Gravity feedforward gain',
                        '<kv> - Velocity feedforward gain',
                        '<ka> - Acceleration feedforward gain'
                    ]
                },
            ]

        },
        {
            id: "available-constructors",
            title: "Available Constructors",
            content: [
                {
                    type: "paragraph",
                    text: "As mentioned, the /*Gains*/ class provides multiple constructors for flexibility. "
                },
                {
                    type: "paragraph",
                    text: "Here are the available constructors:"
                },
                {
                    type: 'list',
                    ordered: false,
                    items: [
                        '<Gains(double kP, double kI, double kD)> - Creates a Gains object with only PID gains.',
                        '<Gains(double ks, double kg, double kv, double ka)> - Creates a Gains object with only feedforward gains.',
                        '<Gains(double kP, double kI, double kD, double ks, double kg, double kv, double ka)> - Creates a Gains object with both PID and feedforward gains.',
                        '<Gains(Gains other)> - Copies an existing Gains object.',
                        '<Gains(Gains PIDgains, Gains FFgains)> - Gets the PID gains from one object, and feedforward gains from another.'
                    ]
                },
            ]

        },
        {
            id: "examples",
            title: "Example",
            content: [
                {
                    type: "paragraph",
                    text: "Here is a example of how to use a /*Gains*/ object in your code, this is runed-down version " +
                        "for a flywheel of a shooter that has precise control over its speed, acceleration, and jerk."
                },
                {
                    "type": "code",
                    "language": "java",
                    "title": "Gains Example",
                    "code": `public class ExampleProgram extends SubsystemBase {
    private final FlyWheel flyWheel;
    private final SparkMaxMotor shooterMotor;
    private final Gains shooterGains = new Gains(
            1.0, //kP
            0.2, //kI
            0.33 //kP
    );
    
    public ExampleProgram() {
        // Initialize the shooter motor with the CAN Id 10 and brushless motor type
        shooterMotor = new SparkMaxMotor(10, kBrushless);
        // Flywheel with the shooter motor, max acceleration of 0.5, max jerk of 0.3, and the shooter gains
        flyWheel = new FlyWheel(shooterMotor, 0.5, 0.3, shooterGains);
    }
    // rest of the code...
}`
                },
                {
                    "type": "callout",
                    "calloutType": "tip",
                    "title": "Occurs often",
                    "text": "Passing threw a gains object appears nearly in every mechanism in ExcaLib."
                },
            ]
        },
    ]
}