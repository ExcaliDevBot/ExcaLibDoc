export const imuApi = {
    name: 'IMU',
    package: 'frc.excalib.control.imu',
    description: 'Interface representing an Inertial Measurement Unit (IMU) for robotics control, providing access to orientation and acceleration data, as well as methods to reset or set the IMU\'s rotation.',
    methods: [
        {
            name: 'getZRotation',
            signature: 'Rotation2d getZRotation()',
            description: 'Gets the current Z-axis rotation (yaw) as a Rotation2d.',
            parameters: [],
            returns: {type: 'Rotation2d', description: 'The Z-axis rotation.'}
        },
        {
            name: 'getXRotation',
            signature: 'Rotation2d getXRotation()',
            description: 'Gets the current X-axis rotation (roll) as a Rotation2d.',
            parameters: [],
            returns: {type: 'Rotation2d', description: 'The X-axis rotation.'}
        },
        {
            name: 'getYRotation',
            signature: 'Rotation2d getYRotation()',
            description: 'Gets the current Y-axis rotation (pitch) as a Rotation2d.',
            parameters: [],
            returns: {type: 'Rotation2d', description: 'The Y-axis rotation.'}
        },
        {
            name: 'getAccX',
            signature: 'double getAccX()',
            description: 'Gets the current acceleration along the X-axis.',
            parameters: [],
            returns: {type: 'double', description: 'The X-axis acceleration in meters per second squared.'}
        },
        {
            name: 'getAccY',
            signature: 'double getAccY()',
            description: 'Gets the current acceleration along the Y-axis.',
            parameters: [],
            returns: {type: 'double', description: 'The Y-axis acceleration in meters per second squared.'}
        },
        {
            name: 'getAccZ',
            signature: 'double getAccZ()',
            description: 'Gets the current acceleration along the Z-axis.',
            parameters: [],
            returns: {type: 'double', description: 'The Z-axis acceleration in meters per second squared.'}
        },
        {
            name: 'resetIMU',
            signature: 'void resetIMU()',
            description: 'Resets the IMU\'s orientation to its default state.',
            parameters: [],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'setRotation',
            signature: 'void setRotation(Rotation3d rotation)',
            description: 'Sets the IMU\'s rotation using a Rotation3d object.',
            parameters: [
                {name: 'rotation', type: 'Rotation3d', description: 'The new rotation to set.'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'setRotation',
            signature: 'void setRotation(Rotation2d rotation)',
            description: 'Sets the IMU\'s rotation using a Rotation2d object.',
            parameters: [
                {name: 'rotation', type: 'Rotation2d', description: 'The new rotation to set.'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        }
    ]
};