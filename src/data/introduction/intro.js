export const introduction = {
     title: "Introduction to ExcaLib",
    updated: "2025-07-01",
        introduction: "ExcaLib is a comprehensive WpilibJ library designed to simplify robot development for FIRST Robotics Competition (FRC) teams. It provides pre-built mechanisms, custom swerve drive implementations, generic hardware wrappers and additional utilities to accelerate your robot development.",
        sections: [
            {
                id: "overview",
                title: "Overview",
                content: [
                    {
                        type: "paragraph",
                        text: "ExcaLib builds on top of WPILib, the standard library for FRC, " +
                            "adding higher-level abstractions and ready-to-use components that can save your team a lot of pre-season " +
                            "preparations and season development time. Our focus is on creating reusable and east-to-implement code that can be easily adapted to your team's specific needs."
                    },
                    {
                        type: "paragraph",
                        text: "This makes it suitable for both rookie teams looking for a quick start and experienced teams looking to leverage advanced features."
                    }
                ]
            },
            {
                id: "features",
                title: "Key Features",
                content: [
                    {
                        type: "list",
                        ordered: false,
                        items: [
                            "Pre-built mechanism classes for common robot subsystems (arms, elevators, turrets, etc.)",
                            "Complete custom swerve drive implementation with advanced features",
                            "Advanced control systems using PID, motion profiling, and feed-forward",
                            "Utilities (Leds, Field related propositions, etc.) for common tasks",
                            "Command-based programming extensions",
                            "Built in logging and telemetry using NetworkTables",
                        ]
                    }
                ]
            },
            {
                id: "philosophy",
                title: "Design Philosophy",
                content: [
                    {
                        type: "paragraph",
                        text: "ExcaLib was built with the following principles in mind:"
                    },
                    {
                        type: "list",
                        ordered: false,
                        items: [
                            "Simplicity: Making complex robot control accessible to teams of all experience levels",
                            "Flexibility: Providing customization options without sacrificing usability",
                            "Robustness: Building in safety features and error handling to prevent common issues",
                            "Documentation: Providing comprehensive documentation and examples"
                        ]
                    },
                    {
                        type: "callout",
                        calloutType: "info",
                        title: "Note for Teams",
                        text: "ExcaLib is designed to complement WPILib, not replace it. We recommend familiarizing yourself with WPILib concepts before diving into ExcaLib to better understand the foundations."
                    }
                ]
            },
            {
                id: "getting-started",
                title: "Getting Started",
                content: [
                    {
                        type: "paragraph",
                        text: "To get started with ExcaLib, check out the following resources:"
                    },
                    {
                        type: "list",
                        ordered: false,
                        items: [
                            "Installation guide: Learn how to add ExcaLib to your robot project",
                            "Quick start guide: Build a basic robot with ExcaLib in an hour",
                            "Examples: Explore example code for common robot configurations",
                            "API Reference: Detailed documentation for all ExcaLib classes and methods"
                        ]
                    }
                ]
            },
            {
                id: "contributors",
                title: "Contributors",
                content: [
                    {
                        type: "paragraph",
                        text: "ExcaLib is the result of contributions from a dedicated team members and alumni that are FRC enthusiasts."
                    },
                    {
                        type: "list",
                        ordered: false,
                        items: [
                            "Yoav Cohen",
                            "Itay Keller",
                            "Shai Grossman",
                            "Yehuda Rothstein"
                        ]
                    }
                ]
            }
        ]
};