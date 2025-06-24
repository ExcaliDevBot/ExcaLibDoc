export const imu = {
    title: 'IMU Wrapper',
    sections: [
        {
            id: 'imu-overview',
            content: [
                {
                    type: 'paragraph',
                    text: 'ExcaLib provides a set of IMU (Inertial Measurement Unit) wrappers that simplify the integration' +
                        ' and control of two of the IMU hardware components in your robot.' +
                        ' We provide the wrappers for the CTRE Pigeon2 and the KauaiLabs NavX.'
                },
                {
                    type: 'paragraph',
                    text: 'We let you to use these IMU wrappers so we can handle the low-level interactions'
                }
            ]
        },
        {
            title: 'Configuration and Usage',
            id: 'imd',
            content: [
                {
                    type: 'paragraph',
                    text: 'To use the IMU wrappers, you need to configure them in your robot code. This typically involves a offset angle and a CAN ID for the IMU device.'
                },
                {
                    type: 'paragraph',
                    text: 'here is an example of how to configure and use the CTRE Pigeon2 IMU wrapper:'
                },
                {
                    "type": "code",
                    "language": "java",
                    "title": "Using a Pigeon2 Wrapper",
                    "code": `public class ExampleProgram {
    private final IMU gyro;
    private final Swerve swerve;
    private final double ANGLE_BALANCING_TOLERANCE = 2.0;

    public ExampleProgram() {
        swerve = Swerve.configureSwerve(); // Assuming you fill this method with your swerve configuration
        gyro = new Pigeon(10, new Rotation3d(/*  offset values  */)); // Pigeon2 IMU with CAN ID 10
    }
    
    // This command is a very simple auto-balancing command that uses the IMU wrapper
    private Command balanceOnRamp() {
        return new ConditionalCommand(
                new RunCommand(
                        // drive forward at a slow speed if the robot is tilted forward
                        ()-> swerve.driveRobotRelativeChassisSpeeds(new ChassisSpeeds(0.1, 0, 0))),
                new RunCommand(
                        // drive backward at a slow speed if the robot is tilted backward
                        ()-> swerve.driveRobotRelativeChassisSpeeds(new ChassisSpeeds(-0.1, 0, 0))),
                // if the robot is tilted forward, drive forward, otherwise drive backward
                ()-> gyro.getYRotation().getDegrees() > 0
        ).until(() -> Math.abs(gyro.getYRotation().getDegrees()) < ANGLE_BALANCING_TOLERANCE);
        // This command will run until the robot is balanced on the ramp
    }
}`
                },
            ]
        },
        {
            title: 'Available IMU Wrapper Functions',
            id: 'available-functions',
            content: [
                {
                    type: 'paragraph',
                    text: 'Here is a list of the most commonly used functions for the IMU wrappers in ExcaLib:',
                },
                {
                    type: 'table',
                    columns: ['Function', 'Description', 'Return Type'],
                    rows: [
                        ['getZRotation()', 'Retrieves the current Z-axis rotation (yaw) as a Rotation2d object.', 'Rotation2d'],
                        ['getXRotation()', 'Retrieves the current X-axis rotation (roll) as a Rotation2d object.', 'Rotation2d'],
                        ['getYRotation()', 'Retrieves the current Y-axis rotation (pitch) as a Rotation2d object.', 'Rotation2d'],
                        ['getAccX()', 'Retrieves the current acceleration along the X-axis in meters per second squared.', 'double'],
                        ['getAccY()', 'Retrieves the current acceleration along the Y-axis in meters per second squared.', 'double'],
                        ['getAccZ()', 'Retrieves the current acceleration along the Z-axis in meters per second squared.', 'double'],
                        ['resetIMU()', 'Resets the IMU\'s orientation to its default state.', 'void'],
                        ['setRotation(Rotation3d rotation)', 'Sets the IMU\'s rotation using a Rotation3d object.', 'void'],
                        ['setRotation(Rotation2d rotation)', 'Sets the IMU\'s rotation using a Rotation2d object.', 'void']
                    ],
                }
            ]
        },
        {
            id: 'footer',
            content: [
                {
                    "type": "callout",
                    "calloutType": "success",
                    "title": "Using IMU Wrappers",
                    "text": "To use these IMU wrappers, you need to include the relevant hardware classes and library" +
                        " from the ExcaLib library. Each wrapper class is designed to encapsulate specific hardware functionality."
                },
                {
                    type: 'paragraph',
                    text: '* All of the IMU wrappers are designed to be used inside the ExcaLib framework.',
                },
            ]
        },
    ]
}