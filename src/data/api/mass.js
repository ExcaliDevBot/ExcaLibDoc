export const massApi = {
    name: 'Mass',
    package: 'frc.excalib.control.math.physics',
    description: 'Represents the mass of an object, including its size, center, and utility functions for mass operations.',
    methods: [
        {
            name: 'Mass',
            signature: 'public Mass(DoubleSupplier xSupplier, DoubleSupplier ySupplier, double mass)',
            description: 'Constructs a Mass object with suppliers for x and y positions and a mass value.',
            parameters: [
                {name: 'xSupplier', type: 'DoubleSupplier', description: 'Supplies the x position of the mass (meters).'},
                {name: 'ySupplier', type: 'DoubleSupplier', description: 'Supplies the y position of the mass (meters).'},
                {name: 'mass', type: 'double', description: 'The mass value (kilograms).'}
            ],
            returns: {type: 'Mass', description: 'A new Mass instance.'}
        },
        {
            name: 'getCenterOfMass',
            signature: 'public Translation2d getCenterOfMass()',
            description: 'Returns the center of mass as a Translation2d object.',
            parameters: [],
            returns: {type: 'Translation2d', description: 'The center of mass.'}
        },
        {
            name: 'add',
            signature: 'public Mass add(Mass other)',
            description: 'Returns a new Mass representing the combined mass and center of mass of this and another Mass.',
            parameters: [
                {name: 'other', type: 'Mass', description: 'The other Mass to add.'}
            ],
            returns: {type: 'Mass', description: 'A new Mass representing the combined system.'}
        }
    ]
};