export const physics = {
    title: 'Physics Wrappers',
    "introduction": "ExcaLib provides a set of Physics Wrappers for various components.",
    sections: [
        {
            id: 'physics-overview',
            content: [
                {
                    type: 'paragraph',
                    text: 'We provide the following wrappers:',
                },
                {
                    type: 'list',
                    ordered: false,
                    items: [
                        'Circle.java - Represents a circle in a 2D plane, defined by its center and radius.',
                        'Line.java - Represents a line segment in a 2D plane, defined by two points.',
                        'Vector2D.java - Represents a 2D vector with x and y components, providing methods for vector operations.',
                        'Mass.java - Represents a mass with a value and provides methods for mass-related calculations.',
                    ]
                },
                {
                    "type": "callout",
                    "calloutType": "success",
                    "title": "Using Hardware Wrappers",
                    "text": "To use these wrappers, you need to include the relevant hardware classes and library" +
                        " from the ExcaLib library. Each wrapper class is designed to encapsulate specific hardware" +
                        " functionality."
                }
            ]
        }
    ]
}