export const apiClasses = [
  {
    name: 'SwerveDrive',
    package: 'org.frclib.drive.swerve',
    description: 'Main class for controlling a swerve drive system.',
    methods: [
      {
        name: 'drive',
        signature: 'public void drive(double xSpeed, double ySpeed, double rotation, boolean fieldRelative)',
        description: 'Drives the robot using the specified x, y, and rotational speeds.',
        parameters: [
          { name: 'xSpeed', type: 'double', description: 'Speed of the robot in the x direction (forward/backwards).' },
          { name: 'ySpeed', type: 'double', description: 'Speed of the robot in the y direction (left/right).' },
          { name: 'rotation', type: 'double', description: 'Rotational speed of the robot.' },
          { name: 'fieldRelative', type: 'boolean', description: 'Whether the drive is field-relative.' }
        ],
        returns: { type: 'void', description: 'No return value.' }
      },
      {
        name: 'followPath',
        signature: 'public Command followPath(Path path, boolean resetPose)',
        description: 'Creates a command to follow the specified path.',
        parameters: [
          { name: 'path', type: 'Path', description: 'The path to follow.' },
          { name: 'resetPose', type: 'boolean', description: 'Whether to reset the robot pose to the start of the path.' }
        ],
        returns: { type: 'Command', description: 'A command that will follow the specified path.' }
      },
      {
        name: 'setPose',
        signature: 'public void setPose(Pose2d pose)',
        description: 'Sets the pose of the robot.',
        parameters: [
          { name: 'pose', type: 'Pose2d', description: 'The pose to set.' }
        ],
        returns: { type: 'void', description: 'No return value.' }
      },
      {
        name: 'getPose',
        signature: 'public Pose2d getPose()',
        description: 'Gets the current pose of the robot.',
        parameters: [],
        returns: { type: 'Pose2d', description: 'The current pose of the robot.' }
      },
      {
        name: 'stop',
        signature: 'public void stop()',
        description: 'Stops all swerve modules.',
        parameters: [],
        returns: { type: 'void', description: 'No return value.' }
      }
    ]
  },
  {
    name: 'SwerveModule',
    package: 'org.frclib.drive.swerve',
    description: 'Represents a single swerve module with drive and steer motors.',
    methods: [
      {
        name: 'setDesiredState',
        signature: 'public void setDesiredState(SwerveModuleState desiredState, boolean optimize)',
        description: 'Sets the desired state for this swerve module.',
        parameters: [
          { name: 'desiredState', type: 'SwerveModuleState', description: 'The desired state of the module.' },
          { name: 'optimize', type: 'boolean', description: 'Whether to optimize the module state to minimize rotation.' }
        ],
        returns: { type: 'void', description: 'No return value.' }
      },
      {
        name: 'getState',
        signature: 'public SwerveModuleState getState()',
        description: 'Gets the current state of the swerve module.',
        parameters: [],
        returns: { type: 'SwerveModuleState', description: 'The current state of the module.' }
      },
      {
        name: 'resetEncoders',
        signature: 'public void resetEncoders()',
        description: 'Resets the drive and steer encoders.',
        parameters: [],
        returns: { type: 'void', description: 'No return value.' }
      }
    ]
  },
  {
    name: 'ArmMechanism',
    package: 'org.frclib.mechanisms',
    description: 'A mechanism for controlling a robot arm with multiple joints.',
    methods: [
      {
        name: 'setPosition',
        signature: 'public void setPosition(double angleRadians)',
        description: 'Sets the target position of the arm.',
        parameters: [
          { name: 'angleRadians', type: 'double', description: 'The desired angle of the arm in radians.' }
        ],
        returns: { type: 'void', description: 'No return value.' }
      },
      {
        name: 'getCurrentPosition',
        signature: 'public double getCurrentPosition()',
        description: 'Gets the current position of the arm.',
        parameters: [],
        returns: { type: 'double', description: 'The current angle of the arm in radians.' }
      },
      {
        name: 'isAtTargetPosition',
        signature: 'public boolean isAtTargetPosition()',
        description: 'Checks if the arm is at the target position.',
        parameters: [],
        returns: { type: 'boolean', description: 'True if the arm is at the target position, false otherwise.' }
      },
      {
        name: 'addPresetPosition',
        signature: 'public void addPresetPosition(String name, double position)',
        description: 'Adds a preset position to the arm.',
        parameters: [
          { name: 'name', type: 'String', description: 'The name of the preset position.' },
          { name: 'position', type: 'double', description: 'The position in radians.' }
        ],
        returns: { type: 'void', description: 'No return value.' }
      },
      {
        name: 'moveToPreset',
        signature: 'public void moveToPreset(String name)',
        description: 'Moves the arm to a preset position.',
        parameters: [
          { name: 'name', type: 'String', description: 'The name of the preset position.' }
        ],
        returns: { type: 'void', description: 'No return value.' }
      }
    ]
  },
  {
    name: 'VisionSystem',
    package: 'org.frclib.vision',
    description: 'A class for processing vision data from cameras and other vision sensors.',
    methods: [
      {
        name: 'processFrame',
        signature: 'public void processFrame(Frame frame)',
        description: 'Processes a vision frame to detect targets.',
        parameters: [
          { name: 'frame', type: 'Frame', description: 'The vision frame to process.' }
        ],
        returns: { type: 'void', description: 'No return value.' }
      },
      {
        name: 'getDetectedTags',
        signature: 'public List<AprilTagDetection> getDetectedTags()',
        description: 'Gets a list of detected AprilTags.',
        parameters: [],
        returns: { type: 'List<AprilTagDetection>', description: 'A list of detected AprilTags.' }
      },
      {
        name: 'estimateRobotPose',
        signature: 'public Pose2d estimateRobotPose(AprilTagDetection detection)',
        description: 'Estimates the robot pose based on a detected AprilTag.',
        parameters: [
          { name: 'detection', type: 'AprilTagDetection', description: 'The detected AprilTag.' }
        ],
        returns: { type: 'Pose2d', description: 'The estimated robot pose.' }
      }
    ]
  }
];