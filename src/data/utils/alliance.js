export const alliance = {
    title: "Alliance Utilities",
    updated: "june 24, 2025",
    introduction: "While writing code for your robot, you may find yourself needing to depend on the alliance you are on. " +
        "Therefore, ExcaLib provides a simple utility to help you determine and use the alliance your robot.",
    sections: [
        {
            id: "Overview",
            title: "Design",
            content: [
                {
                    type: "paragraph",
                    text: "The /*AllianceUtils*/ class provides utility functions for handling robot field positions" +
                        " and orientations that depend on the current FRC alliance (Blue or Red)." +
                        " It helps convert poses and coordinates between alliance-relative and field-relative frames," +
                        " ensuring your robot code works correctly regardless of which side of the field you start on."
                },
                {
                    "type": "callout",
                    "calloutType": "credit",
                    "title": "Credits",
                    "text": "This Utility Class was inspired by FRC Team #5990 Trigon. "
                },
            ]

        },
        {
            id: "Overview",
            title: "Functionality",
            content: [
                {
                    type: "paragraph",
                    text: "/*AllianceUtils*/ has static constants and static methods relevant to the current FRC season."
                },
                {
                    type: "list",
                    ordered: false,
                    items: [
                        "<AllianceUtils.FIELD_LENGTH_METERS> - The length of the FRC field in meters <(17.548)>.",
                        "<AllianceUtils.FIELD_WIDTH_METERS> -  The width of the FRC field in meters <(8.052)>.",
                        "<AllianceUtils.isBlueAlliance()> - Returns <true> if the robot is currently on the Blue alliance, otherwise <false>.",
                        "<AllianceUtils.isRedAlliance()> - Returns <true> if the robot is currently on the Red alliance, otherwise <false>.",
                        "<AllianceUtils.rotateToAlliancePose(Pose2d pose)> - Converts a pose to a new pose relative to the current driver station alliance by rotating it if needed.",
                        "<AllianceUtils.mirrorToAlliancePose(Pose2d pose)> - Converts a pose to a new pose relative to the current driver station alliance by mirroring it if needed.",
                    ]
                },
            ]
        },
        {
            id: "Overview",
            title: "AlliancePose",
            content: [
                {
                    "type": "callout",
                    "calloutType": "warning",
                    "title": "Initialization",
                    "text": "This class egt the current alliance from the initial alliance on the robot's DriverStation. Please ensure that " +
                        "you select the correct alliance before using this class. Later on, we will make the alliance to change dynamically. "
                },
                {
                    type: "paragraph",
                    text: "The /*AllianceUtils*/ class has a nested class called /*AlliancePose*/ that represents a Pose2d pose " +
                        "relative to the current alliance. It includes methods for converting between alliance-relative and field-relative poses."
                },
                {
                    type: "paragraph",
                    text: "These are the constructors of the /*AlliancePose*/ class:"
                },
                {
                    type: "list",
                    ordered: false,
                    items: [
                        "<AlliancePose(Translation2d translation, Rotation2d rotation)>",
                        "<AlliancePose(double x, double y, double rotationRadians)>",
                        "<AlliancePose(Pose2d pose)>",
                        "<AlliancePose(double rotationRadians)> - empty position, only rotation.",
                        "<AlliancePose()> - empty position and empty rotation.",
                    ]
                },
                {
                    type: "paragraph",
                    text: "/*AlliancePose*/ has the following methods:"
                },
                {
                    type: "list",
                    ordered: false,
                    items: [
                        "<Pose2d getRotated()> - Returns the pose rotated for the current alliance.",
                        "<getFieldPose()> - Returns the pose mirrored for the current alliance.",
                    ]
                },
                {
                    "type": "callout",
                    "calloutType": "tip",
                    "title": "Usage",
                    "text": "Using the AlliancePose class is recommended especially when defining Pose2d constants on the field."
                },
            ]
        },
    ]
}