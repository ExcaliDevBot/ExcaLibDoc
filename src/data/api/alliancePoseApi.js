export const alliancePoseApi = {
    name: 'AlliancePose',
    package: 'frc.excalib.additional_utilities',
    description: 'Represents a pose in the current alliance, providing methods to get the pose rotated or mirrored for the alliance.',
    constructors: [
        {
            signature: 'public AlliancePose(Translation2d translation, Rotation2d rotation)',
            description: 'Creates an AlliancePose from translation and rotation.'
        },
        {
            signature: 'public AlliancePose(double x, double y, double rotationRadians)',
            description: 'Creates an AlliancePose from x, y, and rotation in radians.'
        },
        {
            signature: 'public AlliancePose(Pose2d pose)',
            description: 'Creates an AlliancePose from a Pose2d.'
        },
        {
            signature: 'public AlliancePose(double rotationRadians)',
            description: 'Creates an AlliancePose at (0,0) with the given rotation in radians.'
        },
        {
            signature: 'public AlliancePose()',
            description: 'Creates an AlliancePose at (0,0,0).'
        }
    ],
    methods: [
        {
            name: 'getRotated',
            signature: 'public Pose2d getRotated()',
            description: 'Returns the pose rotated for the current alliance (rotated for red, unchanged for blue).',
            parameters: [],
            returns: {type: 'Pose2d', description: 'The rotated pose.'}
        },
        {
            name: 'getMirrored',
            signature: 'public Pose2d getMirrored()',
            description: 'Returns the pose mirrored for the current alliance (mirrored for red, unchanged for blue).',
            parameters: [],
            returns: {type: 'Pose2d', description: 'The mirrored pose.'}
        }
    ]
};