export const vector2DApi = {
    name: 'Vector2D',
    package: 'frc.excalib.control.math',
    description: 'Represents a 2D vector defined by x and y components, with operations for vector math and geometry.',
    methods: [
        {
            name: 'Vector2D',
            signature: 'public Vector2D(double x, double y)',
            description: 'Constructs a Vector2D with specified x and y components.',
            parameters: [
                {name: 'x', type: 'double', description: 'The x component of the vector.'},
                {name: 'y', type: 'double', description: 'The y component of the vector.'}
            ],
            returns: {type: 'Vector2D', description: 'A new Vector2D instance.'}
        },
        {
            name: 'Vector2D',
            signature: 'public Vector2D(double magnitude, Rotation2d direction)',
            description: 'Constructs a Vector2D from a magnitude and direction.',
            parameters: [
                {name: 'magnitude', type: 'double', description: 'The distance from the origin.'},
                {name: 'direction', type: 'Rotation2d', description: 'The angle of the vector.'}
            ],
            returns: {type: 'Vector2D', description: 'A new Vector2D instance.'}
        },
        {
            name: 'getX',
            signature: 'public double getX()',
            description: 'Returns the x component of the vector.',
            parameters: [],
            returns: {type: 'double', description: 'The x component.'}
        },
        {
            name: 'getY',
            signature: 'public double getY()',
            description: 'Returns the y component of the vector.',
            parameters: [],
            returns: {type: 'double', description: 'The y component.'}
        },
        {
            name: 'getDistance',
            signature: 'public double getDistance()',
            description: 'Returns the magnitude (distance from origin) of the vector.',
            parameters: [],
            returns: {type: 'double', description: 'The magnitude of the vector.'}
        },
        {
            name: 'getDirection',
            signature: 'public Rotation2d getDirection()',
            description: 'Returns the direction (angle) of the vector.',
            parameters: [],
            returns: {type: 'Rotation2d', description: 'The direction as a Rotation2d.'}
        },
        {
            name: 'plus',
            signature: 'public Vector2D plus(Vector2D other)',
            description: 'Adds another vector to this vector.',
            parameters: [
                {name: 'other', type: 'Vector2D', description: 'The vector to add.'}
            ],
            returns: {type: 'Vector2D', description: 'A new vector representing the sum.'}
        },
        {
            name: 'mul',
            signature: 'public Vector2D mul(double scalar)',
            description: 'Multiplies the vector by a scalar.',
            parameters: [
                {name: 'scalar', type: 'double', description: 'The scalar to multiply by.'}
            ],
            returns: {type: 'Vector2D', description: 'A new scaled vector.'}
        },
        {
            name: 'rotate',
            signature: 'public Vector2D rotate(Rotation2d deltaDirection)',
            description: 'Rotates the vector by a given angle.',
            parameters: [
                {name: 'deltaDirection', type: 'Rotation2d', description: 'The angle to rotate by.'}
            ],
            returns: {type: 'Vector2D', description: 'A new rotated vector.'}
        },
        {
            name: 'setX',
            signature: 'public void setX(double x)',
            description: 'Sets the x component of the vector.',
            parameters: [
                {name: 'x', type: 'double', description: 'The new x component.'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'setY',
            signature: 'public void setY(double y)',
            description: 'Sets the y component of the vector.',
            parameters: [
                {name: 'y', type: 'double', description: 'The new y component.'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'setMagnitude',
            signature: 'public void setMagnitude(double magnitude)',
            description: 'Sets the magnitude of the vector while keeping its direction.',
            parameters: [
                {name: 'magnitude', type: 'double', description: 'The new magnitude.'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'setDirection',
            signature: 'public void setDirection(Rotation2d direction)',
            description: 'Sets the direction of the vector while keeping its magnitude.',
            parameters: [
                {name: 'direction', type: 'Rotation2d', description: 'The new direction.'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'limit',
            signature: 'public Vector2D limit(Vector2D limit)',
            description: 'Limits the size of the vector to the limit vector size in the limit vector axis.',
            parameters: [
                {name: 'limit', type: 'Vector2D', description: 'The vector to limit to.'}
            ],
            returns: {type: 'Vector2D', description: 'The limited vector.'}
        }
    ]
};