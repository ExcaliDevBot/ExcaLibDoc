export const math = {
    title: "Math Utilities",
    updated: "2025-07-01",
    introduction: "Efficient and precise mathematical operations geometry-related calculations are crucial for control applications." +
        " This class outlines the math utilities provided by the library.",
    sections: [
        {
            id: "Overview",
            title: "Overview",
            content: [
                {
                    type: "paragraph",
                    text: ""
                },
                {
                    "type": "callout",
                    "calloutType": "tip",
                    "title": "",
                    "text": " "
                },
                {
                    type: "list",
                    ordered: false,
                    items: [
                        "",
                    ]
                },
                {
                    "type": "code",
                    "language": "java",
                    "title": "",
                    "code": ``
                },
            ]
        },
        {
            id: "Overview",
            title: "Minimun Size",
            content: [
                {
                    type: "paragraph",
                    text: "minSize is a static method that ensures that the absolute value of the given number does not exceed the specified limit. " +
                        "The method takes two parameters: the value to be limited and the maximum allowable absolute value." +
                        "the method returns value limited to the specified maximum absolute value, preserving its sign."
                },
                {
                    "type": "code",
                    "language": "java",
                    "title": "minSize example",
                    "code": `double value = -8.0;
double sizeLimit = 5.0;
double result = MathUtils.minSize(value, sizeLimit);
// result will be 5.0, since Math.abs(-8.0) exceeds the limit and is clamped to 5.0`
                },
            ]
        },
        {
            id: "Overview",
            title: "Limit To",
            content: [
                {
                    type: "paragraph",
                    text: "minSize is a static method that limits the given value to the specified limit. If the value exceeds the limit, it is clamped to the limit." +
                        "This method takes two parameters: the value to be limited. and the maximum allowable absolute value  (positive or negative)." +
                        " The method returns the value clamped to the specified limit."
                },
                {
                    "type": "code",
                    "language": "java",
                    "title": "limitTo example",
                    "code": `public static double[] limitAllTo(double[] values, double limit) {
    double[] result = new double[values.length];
    for (int i = 0; i < values.length; i++) {
        result[i] = limitTo(values[i], limit);
    }
    return result;
}`
                },
            ]
        },
        {
            id: "Overview",
            title: "Continuous Limit",
            content: [
                {
                    type: "paragraph",
                    text: "continuousLimit is a static method that limits a value in continuous system. If the value exceeds the limit, it is clamped to the limit." +
                        " This method takes two parameters:"
                },
                {
                    type: "list",
                    ordered: false,
                    items: [
                        "<value> - the value to be limited.",
                        "<referencePoint> - the point around which to constrain the value within ±π (180 degrees)."
                    ]
                },
                {
                    type: "paragraph",
                    text: " If the value and the current position are equals, the method will return an empty <Optional>." +
                        " Else, the method returns the limited values in range of" +
                        " maximum 180 degrees (in every direction), from the current position."
                },
                {
                    "type": "code",
                    "language": "java",
                    "title": "continuousLimit signature",
                    "code": `public static Optional<Pair<Double, Double>> continuousLimit(double value, double referencePoint)`
                },
                {
                    "type": "callout",
                    "calloutType": "tip",
                    "title": "Usage",
                    "text": "This method is used in the ContinuousSoftLimit class to ensure that the value remains within a specified range, "
                },
            ]
        },
        {
            id: "Overview",
            title: "Target Pose",
            content: [
                {
                    type: "paragraph",
                    text: "continuousLimit is a static method that calculates the optimal target position for a robot to reach a target while avoiding a circular obstacle." +
                        " This method takes in three parameters:"
                },
                {
                    type: "list",
                    ordered: false,
                    items: [
                        "<robot> - The current position of the robot as a Translation2d",
                        "<target> - The target position as a Translation2d",
                        "<obstacleCenter> - he center of the obstacle as a Translation2d."
                    ]
                },
                {
                    type: "paragraph",
                    text: "This method returns the optimal target position as a Translation2d."
                },
                {
                    "type": "callout",
                    "calloutType": "info",
                    "title": "Implementation",
                    "text": "This method is writen using the ExcaLib Circle class, and an array of Line objects."
                },
                {
                    type: "paragraph",
                    text: "Here is the implementation of the method:"
                },
                {
                    "type": "code",
                    "language": "java",
                    "title": "continuousLimit signature",
                    "code": `public static Translation2d getTargetPose(
                    Translation2d robot, Translation2d target, Translation2d obstacleCenter) {
        double radius = obstacleCenter.getDistance(target);
        Circle c = new Circle(obstacleCenter.getX(), obstacleCenter.getY(), radius);
        Line[] tangents = c.getTangents(robot);
        Rotation2d alpha = target.minus(obstacleCenter).getAngle();
        Rotation2d theta = robot.minus(obstacleCenter).getAngle();

        // If the angle between the target and robot is less than 60 degrees, return the target directly.
        if (Math.abs(alpha.minus(theta).getRadians()) < Math.PI / 3) {
            return target;
        }

        // If no tangents exist, calculate a point on the obstacle perimeter and find the intersection.
        if (tangents.length == 0) {
            Translation2d onPerimeter = obstacleCenter.plus(
            new Translation2d(radius, robot.minus(obstacleCenter).getAngle()));
            Line tangent = c.getTangent(onPerimeter);
            return tangent.findIntersection(c.getTangent(target));
        }

        // If tangents exist, find the intersection of the target tangent with the robot tangents.
        Line targetTangent = c.getTangent(target);
        if (tangents.length == 1) {
            return targetTangent.findIntersection(tangents[0]);
        }

        // Calculate the two possible intersection points and return the closer one to the target.
        Translation2d translation1 = targetTangent.findIntersection(tangents[0]);
        Translation2d translation2 = targetTangent.findIntersection(tangents[1]);

        if (target.getDistance(translation1) < target.getDistance(translation2)) {
            return translation1;
        }
        return translation2;
    }`
                },
            ]
        },
    ]
}