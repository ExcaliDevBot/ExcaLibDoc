export const pigeonApi = {
    name: 'Pigeon',
    package: 'frc.excalib.control.imu',
    description: 'Implementation of the IMU interface using the Pigeon2 sensor. Provides orientation and acceleration data, with support for rotation offsets.',
     parentClasses: [
        {
            name: "Pigeon2",
            description: "Class description for the Pigeon 2 IMU sensor that measures orientation."
        }
    ],
    methods: [
        {
            name: 'Pigeon',
            signature: 'public Pigeon(int deviceId, Rotation3d offsetRotation)',
            description: 'Constructs a new Pigeon instance with a specified device ID and offset rotation.',
            parameters: [
                {name: 'deviceId', type: 'int', description: 'The CAN device ID of the Pigeon2 sensor.'},
                {name: 'offsetRotation', type: 'Rotation3d', description: 'The initial offset rotation to apply.'}
            ],
            returns: {type: 'Pigeon', description: 'A new Pigeon instance.'}
        },
        {
            name: 'Pigeon',
            signature: 'public Pigeon(int deviceId, String canbus, Rotation3d offsetRotation)',
            description: 'Constructs a new Pigeon instance with a specified device ID, CAN bus, and offset rotation.',
            parameters: [
                {name: 'deviceId', type: 'int', description: 'The CAN device ID of the Pigeon2 sensor.'},
                {name: 'canbus', type: 'String', description: 'The CAN bus name.'},
                {name: 'offsetRotation', type: 'Rotation3d', description: 'The initial offset rotation to apply.'}
            ],
            returns: {type: 'Pigeon', description: 'A new Pigeon instance.'}
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
            description: 'Sets the IMU\'s rotation using a Rotation3d object and resets yaw.',
            parameters: [
                {name: 'rotation', type: 'Rotation3d', description: 'The new rotation to set as offset.'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'setRotation',
            signature: 'public void setRotation(Rotation2d rotation)',
            description: 'Sets the IMU\'s Z-axis rotation using a Rotation2d object and resets yaw.',
            parameters: [
                {name: 'rotation', type: 'Rotation2d', description: 'The new Z-axis rotation to set as offset.'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'getZRotationVelocity',
            signature: 'public double getZRotationVelocity()',
            description: 'Gets the current angular velocity around the Z-axis.',
            parameters: [],
            returns: {type: 'double', description: 'The Z-axis angular velocity in degrees per second.'}
        },
        {
            name: 'getXRotationVelocity',
            signature: 'public double getXRotationVelocity()',
            description: 'Gets the current angular velocity around the X-axis.',
            parameters: [],
            returns: {type: 'double', description: 'The X-axis angular velocity in degrees per second.'}
        },
        {
            name: 'getYRotationVelocity',
            signature: 'public double getYRotationVelocity()',
            description: 'Gets the current angular velocity around the Y-axis.',
            parameters: [],
            returns: {type: 'double', description: 'The Y-axis angular velocity in degrees per second.'}
        }
    ]
};