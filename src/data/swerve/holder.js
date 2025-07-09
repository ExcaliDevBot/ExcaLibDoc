export const SwerveHolder = {
    title: "Swerve Overview",
    updated: "2025-07-01",
    introduction: "A class that manages and coordinates the operation of four swerve drive modules " +
        "(front-left, front-right, back-left, back-right) for a swerve drive robot.",
    sections: [
        {
            id: "Overview",
            title: "Fields and Constructor",
            content: [
                {
                    type: "paragraph",
                    text: "Here is a list of the fields in the SwerveHolder class:"
                },
                {
                    type: "list",
                    ordered: false,
                    items: [
                        "m_frontLeft - <SwerveModule> representing the front-left module",
                        "m_frontRight - <SwerveModule> representing the front-right module",
                        "m_backLeft - <SwerveModule> representing the nack-left module",
                        "m_backRight - <SwerveModule> representing the back-right module",
                        "m_swerveDriveKinematics - <SwerveDriveKinematics> instance for the swerve drive",
                        "m_modulePositions - <SwerveModulePosition[]> for all modules",
                    ]
                },
                {
                    type: "paragraph",
                    text: "The constructor initializes these fields with the provided module instances and kinematics."
                },
                {
                    "type": "code",
                    "language": "java",
                    "code": `public ModulesHolder(SwerveModule frontLeft, SwerveModule frontRight, SwerveModule backLeft, SwerveModule backRight)`
                },
                {
                    type: "paragraph",
                    text: "Initializes the ModulesHolder with four swerve modules and sets up the kinematics."
                }
            ]
        },
        {
            id: "Overview",
            title: "Methods",
            content: [
                {
                    type: "paragraph",
                    text: "Here is a list of the methods in the /*SwerveHolder*/ class:"
                },
                {
                    type: 'table',
                    columns: ['Parameter', 'Description'],
                    rows: [
                        ['stop()', 'Stops all swerve modules.'],
                        ['getVelocity()', 'Calculates the robot\'s average velocity based on all module velocities.'],
                        ['getOmegaRadPerSec()', 'Gets the robot\'s angular velocity in radians per second.'],
                        ['getVelocityDistance()', 'Gets the magnitude of the robot\'s velocity.'],
                        ['calcVelocityRatioLimit(Vector2D translationVelocity, double omegaRadPerSec)', 'Calculates the minimum velocity ratio limit among all modules.'],
                        ['setVelocitiesCommand(Supplier<Vector2D> translationalVel, DoubleSupplier omega)', 'Creates a command to set velocities of all modules based on desired translation and rotation.'],
                        ['coastCommand()', 'Creates a command to set all modules to coast mode.'],
                        ['setModulesStates(SwerveModuleState[] states)', 'Sets the desired states for all swerve modules with speed desaturation.'],
                        ['logStates()', 'Returns and logs the current states of all modules.'],
                        ['logSetpointStates()', 'Returns and logs the setpoint states of all modules.'],
                        ['getSwerveDriveKinematics()', 'Gets the SwerveDriveKinematics instance for the drive.'],
                        ['getModulesPositions()', 'Gets the positions of all swerve modules.'],
                        ['periodic()', 'Executes the periodic function for all modules, typically called in the robot\'s periodic method.'],
                    ],
                }
            ]
        },
    ]
}