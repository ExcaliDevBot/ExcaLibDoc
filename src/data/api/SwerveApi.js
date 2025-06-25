export const swerveApi = {
    name: 'Swerve',
    package: 'frc.excalib.swerve',
    description: 'Represents the swerve subsystem, managing drive commands, pose estimation, angle control, and auto path following.',
    methods: [
        {
            name: 'Swerve',
            signature: 'public Swerve(ModulesHolder modules, IMU imu, Pose2d initialPosition)',
            description: 'Constructs the Swerve subsystem, initializing modules, odometry, and control systems.',
            parameters: [
                {name: 'modules', type: 'ModulesHolder', description: 'The holder for all swerve modules.'},
                {name: 'imu', type: 'IMU', description: 'The inertial measurement unit.'},
                {name: 'initialPosition', type: 'Pose2d', description: 'The initial pose of the robot.'}
            ],
            returns: {type: 'Swerve', description: 'A new instance of the Swerve subsystem.'}
        },
        {
            name: 'driveCommand',
            signature: 'public Command driveCommand(Supplier<Vector2D> velocityMPS, DoubleSupplier omegaRadPerSec, BooleanSupplier fieldOriented)',
            description: 'Creates a field-relative or robot-relative drive command for manual control.',
            parameters: [
                {name: 'velocityMPS', type: 'Supplier<Vector2D>', description: 'Desired linear velocity supplier.'},
                {name: 'omegaRadPerSec', type: 'DoubleSupplier', description: 'Desired angular velocity supplier.'},
                {name: 'fieldOriented', type: 'BooleanSupplier', description: 'Indicates if the drive should be field-oriented.'}
            ],
            returns: {type: 'Command', description: 'A command to drive the robot.'}
        },
        {
            name: 'driveRobotRelativeChassisSpeeds',
            signature: 'public void driveRobotRelativeChassisSpeeds(ChassisSpeeds speeds)',
            description: 'Drives the robot with specified chassis speeds relative to the robot frame.',
            parameters: [
                {name: 'speeds', type: 'ChassisSpeeds', description: 'Desired robot-relative speeds.'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'turnToAngleCommand',
            signature: 'public Command turnToAngleCommand(Supplier<Vector2D> velocityMPS, Supplier<Rotation2d> angleSetpoint)',
            description: 'Returns a command that turns the robot to a specified angle while optionally moving.',
            parameters: [
                {name: 'velocityMPS', type: 'Supplier<Vector2D>', description: 'Velocity input during turning.'},
                {name: 'angleSetpoint', type: 'Supplier<Rotation2d>', description: 'The target angle to reach.'}
            ],
            returns: {type: 'Command', description: 'A command to rotate to a given angle.'}
        },
        {
            name: 'pidToPoseCommand',
            signature: 'public Command pidToPoseCommand(Supplier<Pose2d> poseSetpoint)',
            description: 'Returns a command that uses PID controllers to drive to a given pose.',
            parameters: [
                {name: 'poseSetpoint', type: 'Supplier<Pose2d>', description: 'Target pose for the robot.'}
            ],
            returns: {type: 'Command', description: 'A command to move to the target pose using PID.'}
        },
        {
            name: 'resetAngleCommand',
            signature: 'public Command resetAngleCommand()',
            description: 'Returns a command that resets the IMU angle.',
            parameters: [],
            returns: {type: 'Command', description: 'The reset command.'}
        },
        {
            name: 'coastCommand',
            signature: 'public Command coastCommand()',
            description: 'Returns a command that sets all modules to coast mode.',
            parameters: [],
            returns: {type: 'Command', description: 'The coast mode command.'}
        },
        {
            name: 'resetOdometry',
            signature: 'public void resetOdometry(Pose2d newPose)',
            description: 'Resets the robot odometry to a specific pose.',
            parameters: [
                {name: 'newPose', type: 'Pose2d', description: 'The new pose to reset odometry to.'}
            ],
            returns: {type: 'void', description: 'No return value.'}
        },
        {
            name: 'getRotation2D',
            signature: 'public Rotation2d getRotation2D()',
            description: 'Gets the current rotation of the robot.',
            parameters: [],
            returns: {type: 'Rotation2d', description: 'The current robot rotation.'}
        },
        {
            name: 'getPose2D',
            signature: 'public Pose2d getPose2D()',
            description: 'Gets the robot pose from odometry.',
            parameters: [],
            returns: {type: 'Pose2d', description: 'The current pose of the robot.'}
        },
        {
            name: 'getVelocity',
            signature: 'public Vector2D getVelocity()',
            description: 'Returns the current translational velocity of the robot.',
            parameters: [],
            returns: {type: 'Vector2D', description: 'Robot\'s translational velocity vector.'}
        },
        {
            name: 'getAccelerationDistance',
            signature: 'public double getAccelerationDistance()',
            description: 'Returns the magnitude of the robot\'s acceleration.',
            parameters: [],
            returns: {type: 'double', description: 'Current acceleration magnitude.'}
        },
        {
            name: 'getRobotRelativeSpeeds',
            signature: 'public ChassisSpeeds getRobotRelativeSpeeds()',
            description: 'Returns robot-relative chassis speeds from module states.',
            parameters: [],
            returns: {type: 'ChassisSpeeds', description: 'The chassis speeds in robot frame.'}
        },
        {
            name: 'getDesiredChassisSpeeds',
            signature: 'public ChassisSpeeds getDesiredChassisSpeeds()',
            description: 'Gets the last commanded chassis speeds.',
            parameters: [],
            returns: {type: 'ChassisSpeeds', description: 'Last commanded chassis speeds.'}
        },
        {
            name: 'stopCommand',
            signature: 'public Command stopCommand()',
            description: 'Returns a command to stop all robot motion.',
            parameters: [],
            returns: {type: 'Command', description: 'Stop command.'}
        },
        {
            name: 'driveSysId',
            signature: 'public Command driveSysId(int module, Direction dir, SysidConfig sysidConfig, boolean dynamic)',
            description: 'Returns a command to run system ID on a module\'s drive motor.',
            parameters: [
                {name: 'module', type: 'int', description: 'Index of the swerve module.'},
                {name: 'dir', type: 'Direction', description: 'Direction of the sysid routine.'},
                {name: 'sysidConfig', type: 'SysidConfig', description: 'Sysid configuration data.'},
                {name: 'dynamic', type: 'boolean', description: 'Whether the test is dynamic or quasi-static.'}
            ],
            returns: {type: 'Command', description: 'Sysid routine command for drive motor.'}
        },
        {
            name: 'angleSysId',
            signature: 'public Command angleSysId(int module, Direction dir, SysidConfig sysidConfig, boolean dynamic)',
            description: 'Returns a command to run system ID on a module\'s angle motor.',
            parameters: [
                {name: 'module', type: 'int', description: 'Index of the swerve module.'},
                {name: 'dir', type: 'Direction', description: 'Direction of the sysid routine.'},
                {name: 'sysidConfig', type: 'SysidConfig', description: 'Sysid configuration data.'},
                {name: 'dynamic', type: 'boolean', description: 'Whether the test is dynamic or quasi-static.'}
            ],
            returns: {type: 'Command', description: 'Sysid routine command for angle motor.'}
        },
        {
            name: 'configureSwerve',
            signature: 'public static Swerve configureSwerve(Pose2d initialPose, Object o, Object object)',
            description: 'Factory method to configure and return a full Swerve subsystem.',
            parameters: [
                {name: 'initialPose', type: 'Pose2d', description: 'The initial robot pose.'},
            ],
            returns: {type: 'Swerve', description: 'A fully configured Swerve instance.'}
        }
    ]
};
