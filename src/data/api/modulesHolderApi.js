export const modulesHolderApi = {
    name: 'ModulesHolder',
    package: 'frc.excalib.swerve',
    description: 'Holds and manages all four swerve modules, providing utility methods for velocity, state management, and kinematics.',
    fields: [
        {
            name: 'm_frontLeft',
            type: 'SwerveModule',
            description: 'The front-left swerve module.'
        },
        {
            name: 'm_frontRight',
            type: 'SwerveModule',
            description: 'The front-right swerve module.'
        },
        {
            name: 'm_backLeft',
            type: 'SwerveModule',
            description: 'The back-left swerve module.'
        },
        {
            name: 'm_backRight',
            type: 'SwerveModule',
            description: 'The back-right swerve module.'
        }
    ],
    constructors: [
        {
            signature: 'public ModulesHolder(SwerveModule frontLeft, SwerveModule frontRight, SwerveModule backLeft, SwerveModule backRight)',
            description: 'Initializes the ModulesHolder with four swerve modules.'
        }
    ],
    methods: [
        {
            name: 'stop',
            signature: 'public void stop()',
            description: 'Stops all swerve modules.',
            parameters: [],
            returns: {type: 'void', description: ''}
        },
        {
            name: 'getVelocity',
            signature: 'public Vector2D getVelocity()',
            description: 'Gets the robot\'s average velocity based on all modules.',
            parameters: [],
            returns: {type: 'Vector2D', description: 'The average velocity vector.'}
        },
        {
            name: 'getOmegaRadPerSec',
            signature: 'public double getOmegaRadPerSec()',
            description: 'Returns the robot\'s angular velocity in radians per second.',
            parameters: [],
            returns: {type: 'double', description: 'Angular velocity in radians per second.'}
        },
        {
            name: 'getVelocityDistance',
            signature: 'public double getVelocityDistance()',
            description: 'Returns the magnitude of the robot\'s velocity.',
            parameters: [],
            returns: {type: 'double', description: 'Velocity magnitude.'}
        },
        {
            name: 'setVelocitiesCommand',
            signature: 'public Command setVelocitiesCommand(Supplier<Vector2D> translationalVel, DoubleSupplier omega)',
            description: 'Sets the velocities of all modules based on desired translation and rotation.',
            parameters: [
                {name: 'translationalVel', type: 'Supplier<Vector2D>', description: 'Supplier for translation velocity.'},
                {name: 'omega', type: 'DoubleSupplier', description: 'Supplier for rotation rate.'}
            ],
            returns: {type: 'Command', description: 'A command to set the velocities.'}
        },
        {
            name: 'coastCommand',
            signature: 'public Command coastCommand()',
            description: 'Sets all modules to coast mode.',
            parameters: [],
            returns: {type: 'Command', description: 'A command to set all modules to coast.'}
        },
        {
            name: 'setModulesStates',
            signature: 'public void setModulesStates(SwerveModuleState[] states)',
            description: 'Sets the desired states for all modules.',
            parameters: [
                {name: 'states', type: 'SwerveModuleState[]', description: 'Array of desired module states.'}
            ],
            returns: {type: 'void', description: ''}
        },
        {
            name: 'logStates',
            signature: 'public SwerveModuleState[] logStates()',
            description: 'Logs and returns the states of all modules.',
            parameters: [],
            returns: {type: 'SwerveModuleState[]', description: 'Array of module states.'}
        },
        {
            name: 'logSetPointStates',
            signature: 'public SwerveModuleState[] logSetPointStates()',
            description: 'Logs and returns the setpoint states of all modules.',
            parameters: [],
            returns: {type: 'SwerveModuleState[]', description: 'Array of setpoint states.'}
        },
        {
            name: 'getSwerveDriveKinematics',
            signature: 'public SwerveDriveKinematics getSwerveDriveKinematics()',
            description: 'Returns the swerve drive kinematics instance.',
            parameters: [],
            returns: {type: 'SwerveDriveKinematics', description: 'The kinematics instance.'}
        },
        {
            name: 'getModulesPositions',
            signature: 'public SwerveModulePosition[] getModulesPositions()',
            description: 'Returns the positions of all modules.',
            parameters: [],
            returns: {type: 'SwerveModulePosition[]', description: 'Array of module positions.'}
        },
        {
            name: 'periodic',
            signature: 'public void periodic()',
            description: 'Calls the periodic method on all modules.',
            parameters: [],
            returns: {type: 'void', description: ''}
        }
    ]
};