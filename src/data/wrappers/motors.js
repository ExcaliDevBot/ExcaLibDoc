export const motors = {
    title: 'Motor Controllers',
    updated: "2025-07-01",
    sections: [
        {
            id: 'motors-overview',
            content: [
                {
                    type: 'paragraph',
                    text: 'ExcaLib provides a set of wrapper classes that simplify the integration and control of various' +
                        ' motors in your robot. These wrappers abstract the complexities of low-level hardware ' +
                        'interactions, allowing you to focus on high-level logic and control strategies.'
                },
                {
                    type: 'paragraph',
                    text: 'we provide the following motor wrappers:',
                },
                {
                    type: 'list',
                    ordered: false,
                    items: [
                        'REV SparkMax Controller Wrapper',
                        'REV SparkFlex Wrapper',
                        'CTRE TalonFX Wrapper',
                        'Motor Group Wrapper'
                    ]
                },
                {
                    "type": "callout",
                    "calloutType": "success",
                    "title": "Using Motor Wrappers",
                    "text": "To use these wrappers, you need to include the relevant hardware classes and library" +
                        " from the ExcaLib library. Each wrapper class is designed to encapsulate specific motor" +
                        " functionality."
                },
                {
                    type: 'paragraph',
                    text: 'All of our motor wrappers are designed to be used inside the ExcaLib framework.',
                },
            ]
        },
        {
            title: 'Design Philosophy',
            id: 'Design Philosophy',
            content: [
                {
                    type: 'paragraph',
                    text: 'The design philosophy of the motor wrappers in ExcaLib is centered around simplicity, flexibility, abstraction, and' +
                        ' ease of use. The goal is to provide a consistent and intuitive interface for controlling various' +
                        ' types of motors, while also allowing for customization and advanced control strategies when needed.'
                },
                {
                    type: 'paragraph',
                    text: 'Key principles include:',
                },
                {
                    type: 'list',
                    ordered: false,
                    items: [
                        'Abstraction of low-level hardware details',
                        'Support for multiple motor types and configurations',
                        'Integration with the ExcaLib framework',
                        'Extensibility for advanced users who need more control',
                        'easy to switch between different motor controllers',
                    ]
                }
            ]
        },
        {
            title: 'Using a single Motor Wrapper',
            id: 'Usage',
            content: [
                {
                    type: 'paragraph',
                    text: 'The design philosophy of the motor wrappers in ExcaLib is centered around simplicity, flexibility, abstraction, and' +
                        ' ease of use. The goal is to provide a consistent and intuitive interface for controlling various' +
                        ' types of motors, while also allowing for customization and advanced control strategies when needed.'
                },
                {
                    type: 'paragraph',
                    text: 'Key principles include:',
                },
                {
                    type: 'list',
                    ordered: false,
                    items: [
                        'Abstraction of low-level hardware details',
                        'Support for multiple motor types and configurations',
                        'Integration with the ExcaLib framework',
                        'Extensibility for advanced users who need more control',
                        'easy to switch between different motor controllers',
                    ]
                },
                {
                    "type": "callout",
                    "calloutType": "warning",
                    "title": "Important Note",
                    "text": "You’re welcome to use any of our examples with the motor-related classes. If these classes" +
                        " don’t fully meet your needs, you can either create your own class or extend the provided one" +
                        " and customize it however you'd like."
                },
                {
                    type: 'paragraph',
                    text: 'Using a motor wrapper in ExcaLib is straightforward. You typically need to create an instance of the' +
                        ' specific motor wrapper class you want to use, configure it with the necessary parameters.' +
                        ' Then, you can call methods to control the motor, such as setting speed, position, or' +
                        ' applying voltage. The wrappers handle the underlying hardware communication and provide a' +
                        ' consistent interface for motor control.'
                },
                {
                    type: 'paragraph',
                    text: 'Example:',
                },
                {
                    "type": "code",
                    "language": "java",
                    "title": "Using a Motor Wrapper",
                    "code": `public class ExampleProgram {
    TalonFXMotor exampleMotor;
    SparkMaxMotor secondExampleMotor;

    public ExampleProgram() {
        exampleMotor = new TalonFXMotor(0); // the CAN id
        secondExampleMotor = new SparkMaxMotor(11, SparkLowLevel.MotorType.kBrushless);

        exampleMotor.setFollower(secondExampleMotor.getDeviceID());
        secondExampleMotor.setCurrentLimit(15, 30);
    }

    public void applyCustomVoltage(double secondMotorVoltage){
        secondExampleMotor.setVoltage(secondMotorVoltage * 0.5);
    }
}`
                },
            ]
        },
        {
            title: 'Available Functions',
            id: 'controller-commands',
            content: [
                {
                    type: 'paragraph',
                    text: 'Here is a list of the most commonly used functions for the motor wrappers in ExcaLib:',
                },
                {
                    type: 'table',
                    columns: ['Name', 'Description'],
                    rows: [
                        ['setVoltage', 'Sets the voltage of the motor'],
                        ['setPercentage', 'Sets the percentage of the motor (- 1.0 - 1.0)'],
                        ['setFollower', 'Causes this controller\'s output to mirror the provided leader.'],
                        ['setIdleState', 'Sets the idle mode setting for the motor (BRAKE / COAST).'],
                        ['getDeviceID', 'Returns the device ID of the motor controller.'],
                        ['getMotorPosition', 'Gets the current position of the motor.'],
                        ['getMotorVelocity', 'Gets the current velocity of the motor.'],
                        ['getCurrent', 'Gets the current draw of the motor.'],
                        ['getVoltage', 'Gets the current voltage applied to the motor.'],
                        ['getTemperature', 'Gets the current temperature of the motor.'],
                        ['setSoftLimit', 'Sets the soft limit for the motor.'],
                        ['setInverted', 'Sets whether the motor is inverted.'],
                        ['setPositionConversionFactor', 'Sets the position conversion factor for the motor.'],
                        ['setVelocityConversionFactor', 'Sets the velocity conversion factor for the motor.'],
                        ['setCurrentLimit', 'Sets the current limit for the motor.'],
                        ['setMotorPosition', 'Sets the position of the motor'],

                    ],
                }
            ]
        },
        {
            title: 'The Motor Interface',
            id: 'Design Philosophy',
            content: [
                {
                    type: 'paragraph',
                    text: 'All mechanisms in ExcaLib are required to use one of the implementations of the <Motor' +
                        ' interface>. If you download the skeleton version of ExcaLib, you\'ll need to provide ' +
                        'your own implementation of Motor within your mechanism.',
                },
                {
                    type: 'paragraph',
                    text: 'required functions for a custom interface:',
                },
                {
                    type: 'table',
                    columns: ['Name', 'Parameters', 'return type'],
                    rows: [
                        ['stopMotor', '-', 'void'],
                        ['setVoltage', 'double voltage', 'void'],
                        ['setPercentage', 'double percentage', 'void'],
                        ['setFollower', 'int leaderID', 'void'],
                        ['setIdleState', 'IdleState idleMode', 'void'],
                        ['getDeviceID', '-', 'int'],
                        ['getMotorPosition', '-', 'double'],
                        ['getMotorVelocity', '-', 'double'],
                        ['getCurrent', '-', 'double'],
                        ['getVoltage', '-', 'double'],
                        ['getTemperature', '-', 'double'],
                        ['getIdleState', '-', 'IdleState'],
                        ['setSoftLimit', 'DirectionState directionState, float limit', 'void'],
                        ['setInverted', 'DirectionState mode', 'void'],
                        ['setPositionConversionFactor', 'double conversionFactor', 'void'],
                        ['setVelocityConversionFactor', 'double conversionFactor', 'void'],
                        ['setCurrentLimit', 'int stallLimit, int freeLimit', 'void'],
                        ['setMotorPosition', 'double position', 'void'],

                    ],
                }
            ]
        },
    ]
}