export const motors = {
    title: 'Motor Controllers',
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
            title: 'Commands and Functions',
            id: 'controller-commands',
            content: [
                {
                    type: 'paragraph',
                    text: 'Here is a list of the most commonly used commands and functions for the motor wrappers in ExcaLib:',
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
    ]
}