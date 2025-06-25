export const mathUtilsApi = {
    name: 'MathUtils',
    package: 'frc.excalib.control.math',
    description: 'Utility class for mathematical operations and geometry-related calculations.',
    methods: [
        {
            name: 'minSize',
            signature: 'public static double minSize(double value, double sizeLimit)',
            description: 'Ensures that the absolute value of the given number does not exceed the specified limit.',
            parameters: [
                {name: 'value', type: 'double', description: 'The value to be limited.'},
                {name: 'sizeLimit', type: 'double', description: 'The maximum allowable absolute value.'}
            ],
            returns: {type: 'double', description: 'The value limited to the specified maximum absolute value, preserving its sign.'}
        },
        {
            name: 'limitTo',
            signature: 'public static double limitTo(double value, double limit)',
            description: 'Limits the given value to the specified limit. If the value exceeds the limit, it is clamped to the limit.',
            parameters: [
                {name: 'value', type: 'double', description: 'The value to be limited.'},
                {name: 'limit', type: 'double', description: 'The maximum allowable value (positive or negative).'}
            ],
            returns: {type: 'double', description: 'The value clamped to the specified limit.'}
        },
        {
            name: 'continuousLimit',
            signature: 'public static Optional<Pair<Double, Double>> continuousLimit(double value, double referencePoint)',
            description: 'Limits a value in a continuous system to within ±π (180 degrees) of a reference point.',
            parameters: [
                {name: 'value', type: 'double', description: 'The value to limit.'},
                {name: 'referencePoint', type: 'double', description: 'The point around which to constrain the value.'}
            ],
            returns: {type: 'Optional<Pair<Double, Double>>', description: 'Empty if value equals referencePoint; otherwise, the limited values within ±π of the reference.'}
        },
        {
            name: 'getTargetPose',
            signature: 'public static Translation2d getTargetPose(Translation2d robot, Translation2d target, Translation2d obstacleCenter)',
            description: 'Calculates the optimal target position for a robot to reach a target while avoiding a circular obstacle.',
            parameters: [
                {name: 'robot', type: 'Translation2d', description: 'The current position of the robot.'},
                {name: 'target', type: 'Translation2d', description: 'The target position.'},
                {name: 'obstacleCenter', type: 'Translation2d', description: 'The center of the obstacle.'}
            ],
            returns: {type: 'Translation2d', description: 'The optimal target position as a Translation2d.'}
        }
    ]
};