export const lineApi = {
    name: 'Line',
    package: 'frc.excalib.control.math',
    description: 'Represents a line in a 2D plane, defined by the equation ax + by + c = 0.',
    methods: [
        {
            name: 'Line',
            signature: 'public Line(double a, double b, double c)',
            description: 'Constructs a Line object with the specified coefficients.',
            parameters: [
                {name: 'a', type: 'double', description: 'The coefficient of x in the line equation.'},
                {name: 'b', type: 'double', description: 'The coefficient of y in the line equation.'},
                {name: 'c', type: 'double', description: 'The constant term in the line equation.'}
            ],
            returns: {type: 'Line', description: 'A new Line instance.'}
        },
        {
            name: 'Line',
            signature: 'public Line(Point pointA, Point pointB)',
            description: 'Constructs a Line object with two given points.',
            parameters: [
                {name: 'pointA', type: 'Point', description: 'The first point.'},
                {name: 'pointB', type: 'Point', description: 'The second point.'}
            ],
            returns: {type: 'Line', description: 'A new Line instance.'}
        },
        {
            name: 'findIntersection',
            signature: 'public Translation2d findIntersection(Line other)',
            description: 'Finds the intersection point of this line with another line.',
            parameters: [
                {name: 'other', type: 'Line', description: 'The other line to find the intersection with.'}
            ],
            returns: {
                type: 'Translation2d',
                description: 'A Translation2d object representing the intersection point. If the lines are parallel, the result may be undefined.'
            }
        },
        {
            name: 'toString',
            signature: 'public String toString()',
            description: 'Returns a string representation of the line in the format "a: [a], b: [b], c: [c]".',
            parameters: [],
            returns: {type: 'String', description: 'A string representation of the line.'}
        }
    ]
};