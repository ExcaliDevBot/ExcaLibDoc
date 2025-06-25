export const odometryApi = {
    name: 'Odometry',
    package: 'frc.excalib.slam.mapper',
    description: 'A wrapper class for the WPILib SwerveDrivePoseEstimator, providing simplified odometry management for swerve drive robots.',
    extends: 'SwerveDrivePoseEstimator',
    constructors: [
        {
            signature: 'public Odometry(SwerveDriveKinematics swerveDriveKinematics, SwerveModulePosition[] modulesPositions, Supplier<Rotation2d> angleSupplier, Pose2d initialPose)',
            description: 'Initializes the odometry with the given kinematics, module positions, angle supplier, and initial pose.'
        }
    ],
    fields: [
        {
            name: 'm_YAW_SUPPLIER',
            type: 'Supplier<Rotation2d>',
            description: 'Supplies the current yaw (rotation) of the robot.'
        },
        {
            name: 'm_robotPose',
            type: 'Pose2d',
            description: 'Stores the current estimated robot pose.'
        }
    ],
    methods: [
        {
            name: 'getRobotPose',
            signature: 'public Pose2d getRobotPose()',
            description: 'Returns the current estimated robot position.',
            parameters: [],
            returns: {type: 'Pose2d', description: 'The current robot pose.'}
        },
        {
            name: 'updateOdometry',
            signature: 'public void updateOdometry(SwerveModulePosition[] modulesPositions)',
            description: 'Updates the odometry. Should be called periodically.',
            parameters: [
                {name: 'modulesPositions', type: 'SwerveModulePosition[]', description: 'An array of the module positions.'}
            ],
            returns: {type: 'void', description: ''}
        },
        {
            name: 'resetOdometry',
            signature: 'public void resetOdometry(SwerveModulePosition[] modulesPositions, Pose2d newInitialPose)',
            description: 'Resets the odometry to a specified position.',
            parameters: [
                {name: 'modulesPositions', type: 'SwerveModulePosition[]', description: 'An array of the module positions.'},
                {name: 'newInitialPose', type: 'Pose2d', description: 'The new initial position of the robot.'}
            ],
            returns: {type: 'void', description: ''}
        }
    ]
};