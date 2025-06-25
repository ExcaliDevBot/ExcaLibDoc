export const circleApi = {
    name: 'Circle',
    package: 'frc.excalib.control.math',
    description: 'Represents a circle in a 2D plane, defined by its center and radius.',
    methods: [
        {
            name: 'Circle',
            signature: 'public Circle(double a, double b, double r)',
            description: 'Constructs a Circle object with the specified center coordinates and radius.',
            parameters: [
                {name: 'a', type: 'double', description: 'The x-coordinate of the circle\'s center.'},
                {name: 'b', type: 'double', description: 'The y-coordinate of the circle\'s center.'},
                {name: 'r', type: 'double', description: 'The radius of the circle.'}
            ],
            returns: {type: 'Circle', description: 'A new Circle instance.'}
        },
        {
            name: 'Circle',
            signature: 'public Circle(Point center, double r)',
            description: 'Constructs a Circle object with a Point and radius.',
            parameters: [
                {name: 'center', type: 'Point', description: 'The coordinates of the circle\'s center.'},
                {name: 'r', type: 'double', description: 'The radius of the circle.'}
            ],
            returns: {type: 'Circle', description: 'A new Circle instance.'}
        },
        {
            name: 'getTangent',
            signature: 'public Line getTangent(Translation2d pointOnCircle)',
            description: 'Calculates the tangent line to the circle at a given point on its circumference.',
            parameters: [
                {name: 'pointOnCircle', type: 'Translation2d', description: 'A point on the circle\'s circumference.'}
            ],
            returns: {type: 'Line', description: 'A Line object representing the tangent line.'}
        },
        {
            name: 'getTangents',
            signature: 'public Line[] getTangents(Translation2d point)',
            description: 'Calculates the tangent lines from a given external point to the circle.',
            parameters: [
                {name: 'point', type: 'Translation2d', description: 'A point outside or on the circle.'}
            ],
            returns: {type: 'Line[]', description: 'Array of Line objects representing the tangent lines. Empty if the point is inside the circle.'}
        },
        {
            name: 'getInterSections',
            signature: 'public Translation2d[] getInterSections(Circle other)',
            description: 'Calculates the intersection points between this circle and another circle.',
            parameters: [
                {name: 'other', type: 'Circle', description: 'The other circle to find intersections with.'}
            ],
            returns: {type: 'Translation2d[]', description: 'Array of intersection points. Empty if there are no intersections.'}
        }
    ]
};