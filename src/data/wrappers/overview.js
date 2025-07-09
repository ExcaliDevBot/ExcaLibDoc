export const wrapperOverview = {
    title: 'Wrapper Overview',
    updated: "2025-07-01",
    sections: [
        {
            id: 'mechanisms-overview',
            content: [
                {
                    type: 'paragraph',
                    text: 'ExcaLib provides a set of wrapper classes that simplify the integration and control of various' +
                        ' hardware components in your robot. These wrappers abstract the complexities of low-level hardware' +
                        ' interactions, allowing you to focus on high-level logic and control strategies.'
                },
                {
                    type: 'paragraph',
                    text: 'we provide the following wrappers:',
                },
                {
                    type: 'list',
                    ordered: false,
                    items: [
                        'REV SparkMax Controller Wrapper',
                        'REV SparkFlex Wrapper',
                        'CTRE TalonFX Wrapper',
                        'Motor Group Wrapper',
                        'KauaiLabs NavX Wrapper',
                        'CTRE Pigeon2 Wrapper',
                        'SysId Implementation Wrapper',
                        'Vector2D Wrapper',
                        'Circle and Line Wrappers',
                    ]
                },
                {
                    "type": "callout",
                    "calloutType": "success",
                    "title": "Using Hardware Wrappers",
                    "text": "To use these wrappers, you need to include the relevant hardware classes and library" +
                        " from the ExcaLib library. Each wrapper class is designed to encapsulate specific hardware" +
                        " functionality."
                },
                {
                    type: 'paragraph',
                    text: 'All of out wrappers are designed to be used inside the ExcaLib framework.',
                },
            ]
        }
    ]
}