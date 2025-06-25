export const swerveAccUtilsApi = {
  name: 'SwerveAccUtils',
  package: 'frc.excalib.swerve',
  description: 'Utility class for handling acceleration-limited swerve motion computations.',
  methods: [
    {
      name: 'getSmartTranslationalVelocitySetPoint',
      signature: 'public static Vector2D getSmartTranslationalVelocitySetPoint(Vector2D currentVel, Vector2D velocitySetPoint)',
      description: 'Computes a velocity setpoint that respects acceleration limits.',
      parameters: [
        { name: 'currentVel', type: 'Vector2D', description: 'The current velocity of the robot.' },
        { name: 'velocitySetPoint', type: 'Vector2D', description: 'The desired target velocity setpoint.' }
      ],
      returns: {
        type: 'Vector2D',
        description: 'A new velocity setpoint respecting the acceleration limits.'
      }
    }
  ]
};
