export const allianceUtilsApi = {
    name: 'AllianceUtils',
    package: 'frc.excalib.additional_utilities',
    description: 'Provides utility functions for handling field-relative operations and pose transformations based on the current FRC alliance (blue or red).',
    methods: [
        {
            name: 'isBlueAlliance',
            signature: 'public static boolean isBlueAlliance()',
            description: 'Returns whether the robot is on the blue alliance. Reports an error if the alliance is not set.',
            parameters: [],
            returns: {type: 'boolean', description: 'True if on blue alliance, false otherwise.'}
        },
        {
            name: 'isRedAlliance',
            signature: 'public static boolean isRedAlliance()',
            description: 'Returns whether the robot is on the red alliance.',
            parameters: [],
            returns: {type: 'boolean', description: 'True if on red alliance, false otherwise.'}
        },
        {
            name: 'rotateToAlliancePose',
            signature: 'public static Pose2d rotateToAlliancePose(Pose2d pose)',
            description: 'Converts a pose to the current alliance by rotating it if needed (for red alliance).',
            parameters: [
                {name: 'pose', type: 'Pose2d', description: 'The pose in blue alliance coordinates.'}
            ],
            returns: {type: 'Pose2d', description: 'The pose relative to the current alliance.'}
        },
        {
            name: 'mirrorToAlliancePose',
            signature: 'public static Pose2d mirrorToAlliancePose(Pose2d pose)',
            description: 'Converts a pose to the current alliance by mirroring it if needed (for red alliance).',
            parameters: [
                {name: 'pose', type: 'Pose2d', description: 'The pose in blue alliance coordinates.'}
            ],
            returns: {type: 'Pose2d', description: 'The pose relative to the current alliance.'}
        }
    ],
    fields: [
        {
            name: 'FIELD_LENGTH_METERS',
            type: 'double',
            description: 'The length of the field in meters.'
        },
        {
            name: 'FIELD_WIDTH_METERS',
            type: 'double',
            description: 'The width of the field in meters.'
        }
    ]
};