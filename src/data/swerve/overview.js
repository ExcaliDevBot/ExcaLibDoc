export const SwerveOverview = {
    title: "Swerve Overview",
    updated: "june 24, 2025",
    introduction: "The Swerve is one of ExcaLib's top features, providing a comprehensive set of tools" +
        "for building and controlling swerve drive robots in FRC. ExcaLib's swerve drive is designed to be" +
        "easy to use and highly customizable, allowing teams to focus on their robot's performance with minimal setup" +
        "and ease of use.",
    sections: [
        {
            id: "Overview",
            title: "Design",
            content: [
                {
                    type: "paragraph",
                    text: "The Complete swerve driv eis made out of 3 main class with a utility class"
                },
                {
                    type: "paragraph",
                    text: "The <Swerve> class is the main class that handles the swerve drive logic, including" +
                        "the movement of the modules and the calculation of the robot's position."
                },
                {
                    type: "paragraph",
                    text: "The <SwerveModule> class represents a single swerve module, which includes a drive motor and" +
                        "a steering motor. It handles the movement of the module and the calculation of its position."
                },
                {
                    type: "paragraph",
                    text: "The <ModulesHolder> class handles the collection of swerve modules, allowing you to" +
                        "easily manage multiple modules in your robot."
                },
                {
                    type: "paragraph",
                    text: "The <SwerveAccUtils> class provides utility functions for calculating the acceleration" +
                        "and velocity of the swerve drive, making it easier to implement advanced control algorithms."
                },
            ]
        },
    ]

}