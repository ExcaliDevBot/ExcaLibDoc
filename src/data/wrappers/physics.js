export const physics = {
    title: 'Physics Wrappers',
    updated: "2025-07-01",
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
        },
        {
            title: 'Line',
            id: 'physics-overview',
            content: [
                {
                    type: 'paragraph',
                    text: 'The Line class models a straight line in a 2D plane using the general equation ' +
                        '<ax + by + c = 0>. It provides constructors for creating a line either from its' +
                        ' coefficients or from two points, and includes a method to find' +
                        ' the intersection with another line.',
                },
                {
                    type: 'paragraph',
                    text: 'Class Fields:',
                },
                {
                    type: 'list',
                    ordered: false,
                    items: [
                        'a - coefficient for x in the line equation',
                        'b - coefficient for y in the line equation',
                        'c - constant term in the line equation',
                    ]
                },
            ]
        }, {
            title: 'Line Constructors and Methods',
            id: 'line-constructors',
            content: [
                {
                    type: 'paragraph',
                    text: 'The /*Line*/ class provides two constructors to create and manipulate lines:',
                },
                {
                    type: 'paragraph',
                    text: 'Creates a /*Line*/ using the specified coefficients for the general line equation.',
                },
                {
                    type: "code",
                    language: "java",
                    title: "Constructor by Coefficients",
                    code: `Line(double a, double b, double c)`
                },
                {
                    type: 'paragraph',
                    text: 'Constructs a /*Line*/ that passes through two given points. The coefficients are calculated so the resulting line passes through both points.',
                },
                {
                    type: "code",
                    language: "java",
                    title: "Constructor by Coefficients",
                    code: `Line(Point pointA, Point pointB)`
                },
                {
                    type: 'paragraph',
                    text: 'The <findIntersection(Line other)> method finds the intersection point of this line with' +
                        ' another line. if the lines are parallel it may return null. The method returns a Translation2D object representing the intersection point.',
                },
                {
                    type: 'paragraph',
                    text: 'The <toString()> method returns a string representation of the line with the format <a: [a], b: [b], c: [c]>.',
                },
            ]
        },
        {
            title: 'Circle',
            id: 'circle-overview',
            content: [
                {
                    type: 'paragraph',
                    text: 'The Circle class represents a circle in a 2D plane, defined by its center point and radius.' +
                        ' It provides methods for geometric operations such as finding tangent ' +
                        'lines and intersection points with other circles.',
                },
                {
                    type: 'paragraph',
                    text: 'Class Fields:',
                },
                {
                    type: 'list',
                    ordered: false,
                    items: [
                        'r - The radius of the circle.',
                        'b -  The center of the circle, represented as a <Translation2d> object.',
                    ]
                },
            ]
        },
        {
            title: 'Circle Constructors and Methods',
            id: 'line-constructors',
            content: [
                {
                    type: 'paragraph',
                    text: 'The /*Circle*/ class provides two constructors to create and manipulate circles:',
                },
                {
                    type: 'paragraph',
                    text: 'Creates a new circle with its center at coordinates <(a, b)> and a specified radius <r>.',
                },
                {
                    type: "code",
                    language: "java",
                    title: "Constructor by center coordinates and radius",
                    code: `Circle(double a, double b, double r)`
                },
                {
                    type: 'paragraph',
                    text: 'Constructs a /*Circle*/ using a <Point> object for the center and a double for the radius.',
                },
                {
                    type: "code",
                    language: "java",
                    title: "Constructor by Coefficients",
                    code: `Line(Point center, double r)`
                },
                {
                    type: "list",
                    ordered: false,
                    items: [
                        'The <getTangent(Translation2d pointOnCircle)> method calculates the tangent line to the circle at a given point on its circumference. returns a Line object representing the tangent line.',
                        'The <getTangents(Translation2d point)> method calculates the tangent lines from a given external point to the circle. returns an array of Line objects representing the tangent lines. returns an empty array if the point is inside the circle.',
                        'The <getInterSections(Circle other)> method calculates the intersection points between this circle and another circle. returns an array of Translation2d objects representing the intersection points. Returns an empty array if there are no intersections',
                    ]
                },

            ]
        },
        {
            title: 'Vector2d',
            id: 'circle-overview',
            content: [
                {
                    type: 'paragraph',
                    text: 'The Vector2D class represents a two-dimensional vector using X and Y components.' +
                        ' It provides functionality for working with vectors in both Cartesian and polar coordinates' +
                        ' (using Rotation2d for angles), allowing common vector operations such as addition,' +
                        ' scaling, rotation, limiting, and conversion between magnitude and direction.',
                },
                {
                    type: 'callout',
                    calloutType: 'info',
                    title: 'Note',
                    text: 'This class is useful for applications where direction and magnitude need to be manipulated precisely.',
                },
                {
                    type: 'paragraph',
                    text: 'Class Fields:',
                },
                {
                    type: 'list',
                    ordered: false,
                    items: [
                        'x - The x component of the Vector.',
                        'y - The y component of the Vector.',
                    ]
                },
            ]
        },
        {
            title: 'Vector2d Constructors and Methods',
            id: 'Vector2d-constructors',
            content: [
                {
                    type: 'paragraph',
                    text: 'The /*Vector*/ class provides two constructors to create and manipulate Vectors:',
                },
                {
                    type: 'paragraph',
                    text: 'Initializes a new vector with given X and Y components (Cartesian form).',
                },
                {
                    type: "code",
                    language: "java",
                    title: "Cartesian form vector",
                    code: `Vector2D(double x, double y)`
                },
                {
                    type: 'paragraph',
                    text: 'Initializes a new vector using polar form.'
                },
                {
                    type: "code",
                    language: "java",
                    title: "Polar form vector",
                    code: `Vector2D(double magnitude, Rotation2d direction)`
                },
                {
                    type: "list",
                    ordered: false,
                    items: [
                        'The <getX()> method returns the x component of the vector.',
                        'The <getY()> method returns the y component of the vector.',
                        'The <getDistance()> method Returns the magnitude (length) of the vector from the origin.',
                        'The <getDirection()> method returns the direction of the vector as a Rotation2d object.',
                        'The <plus(Vector2D other)> method returns a new Vector2D that is the sum of this vector and another vector.',
                        'The <mul(double scalar)> method returns a new Vector2D that is the result of scaling the current vector by a scalar value.',
                        'The <rotate(Rotation2d deltaDirection)> method returns the current vector rotated by the given angle.',
                        'The <limit(Vector2D limit)> method returns a new vector that is limited in its magnitude along the axis defined by another vector.',
                    ]
                },
                {
                    type: 'callout',
                    calloutType: 'tip',
                    title: 'Setters',
                    text: 'Per each getter method, there is a corresponding setter method that allows you to modify the vector\'s components directly.',
                },
            ]
        }
    ]
}