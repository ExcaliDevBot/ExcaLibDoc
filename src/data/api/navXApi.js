export const navXApi = {
    name: 'NavX',
    package: 'frc.excalib.control.imu',
    description: 'Implementation of the IMU interface using the NavX sensor, providing orientation and acceleration data with support for rotation offsets and logging.',
    methods: [
        {
            name: 'NavX',
            signature: 'public NavX(Rotation3d offsetRotation)',
            description: 'Constructs a new NavX instance with a specified offset rotation.',
            parameters: [
                {name: 'offsetRotation', type: 'Rotation3d', description: 'The initial offset rotation to apply.'}
            ],
            returns: {type: 'NavX', description: 'A new NavX instance.'}
        },
        {
            name: 'getZRotation',
            signature: 'public Rotation2d getZRotation()',
            description: 'Gets the current Z-axis rotation (yaw), adjusted by the offset.',
            parameters: [],
            returns: {type: 'Rotation2d', description: 'The Z-axis rotation as a Rotation2d.'}
        },
        {
            name: 'getXRotation',
            signature: 'public Rotation2d getXRotation()',
            description: 'Gets the current X-axis rotation (roll), adjusted by the offset.',
            parameters: [],
            returns: {type: 'Rotation2d', description: 'The X-axis rotation as a Rotation2d.'}
        },
        {
            name: 'getYRotation',
            signature: 'public Rotation2d getYRotation()',
            description: 'Gets the current Y-axis rotation (pitch), adjusted by the offset.',
            parameters: [],
            returns: {type: 'Rotation2d', description: 'The Y-axis rotation as a Rotation2d.'}
        },
        {
            name: 'getAccX',
            signature: 'public double getAccX()',
            description: 'Gets the current acceleration along the X-axis.',
            parameters: [],
            returns: {type: 'double', description: 'The X-axis acceleration in meters per second squared.'}
        },
        {
            name: 'getAccY',
            signature: 'public double getAccY()',
            description: 'Gets the current acceleration along the Y-axis.',
            parameters: [],
            returns: {type: 'double', description: 'The Y-axis acceleration in meters per second squared.'}
        },
        {
            name: 'getAccZ',
            signature: 'public double getAccZ()',
            description: 'Gets the current acceleration along the Z-axis.',
            parameters: [],
            returns: {type: 'double', description: 'The Z-axis acceleration in meters per second squared.'}
        },
        {
            name: 'resetIMU',
            signature: 'public void resetIMU()',
            description: 'Resets the IMU\'s orientation to its default state.',
            parameters: [],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'setRotation',
            signature: 'public void setRotation(Rotation3d rotation)',
            description: 'Sets the IMU\'s rotation using a Rotation3d object and resets angle adjustment.',
            parameters: [
                {name: 'rotation', type: 'Rotation3d', description: 'The new rotation to set as offset.'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'setRotation',
            signature: 'public void setRotation(Rotation2d rotation)',
            description: 'Sets the IMU\'s Z-axis rotation using a Rotation2d object and resets angle adjustment.',
            parameters: [
                {name: 'rotation', type: 'Rotation2d', description: 'The new Z-axis rotation to set as offset.'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        }
    ]
};