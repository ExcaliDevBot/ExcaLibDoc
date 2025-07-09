import {Link} from "react-router-dom";

export let installation;
installation = {
    title: "Installation",
    updated: "2025-07-01",
    introduction: "This guide will walk you through the process of adding ExcaLib to your robot project.",
    sections: [
        {
            id: "prerequisites",
            title: "Prerequisites",
            content: [
                {
                    type: "paragraph",
                    text: "Before installing ExcaLib, make sure you have the following:"
                },
                {
                    type: "list",
                    ordered: false,
                    items: [
                        "WPILib 2025.x.x or newer",
                        "Java 17 or newer",
                        "WpiLib VS Code or IntelliJ IDEA with the FRC plugins",
                        "project set up with WPILib the following libraries",
                    ]
                }
            ]
        },
        /*{
            id: "choose-version",
            title: "Choose Your Version",
            content: [
                {
                    type: "paragraph",
                    text: "Select the version of ExcaLib you want to use:"
                },
                {
                    type: "paragraph",
                    text: "<All-in-one Version:>"
                },
                {
                    type: "paragraph",
                    jsx: (
                        <>
                            A version that includes all ExcaLib features and is suitable for most teams, it
                            includes" +
                            " default implementations of the {"  "}
                            <Link
                                to="/docs/wrappers/motors"
                                style={{textDecoration: "underline"}}
                            >
                                Motor.java
                            </Link>
                            {" "} and {""}
                            <Link
                                to="/docs/wrappers/imu"
                                style={{textDecoration: "underline"}}
                            >
                                IMU.java
                            </Link>
                            {" "} interfaces.
                        </>
                    )
                },
                {
                    type: "code",
                    language: "markdown",
                    title: "Move… Version",
                    code: `https://raw.githubusercontent.com/ExcaliburFRC/ExcaLIB/v0.1.0-full/ExcaLIB.json`
                },
                {
                    type: "paragraph",
                    text: "*!/!*This version requires additional libraries, see below.*!/"
                },
                {
                    type: "paragraph",
                    text: "<Skeleton Version:>"
                },
                {
                    type: "paragraph",
                    text: "This version enables custom implementation for the <Motor.java> and the <IMU.java> interfaces"
                },
                {
                    type: "code",
                    language: "markdown",
                    title: "Skeleton Version",
                    code: `https://raw.githubusercontent.com/ExcaliburFRC/ExcaLIB/v0.1.0-skeleton/ExcaLIB.json`
                }
            ]
        },*/
        {
            id: "gradle",
            title: "Adding the All-in-one Version to Your Project",
            content: [
                {
                    type: "paragraph",
                    text: "The All-in-one version of ExcaLib requires additional libraries to function properly. Please ensure you have the following libraries installed in your project:"
                },
                {
                    type: "list",
                    ordered: false,
                    items: [
                        "REVLib - <https://software-metadata.revrobotics.com/REVLib-2025.json>",
                        "Studica  - <https://dev.studica.com/releases/2025/Studica-2025.0.1.json>",
                        "Phoenix6 (CTRE) - <https://maven.ctr-electronics.com/release/com/ctre/phoenix6/latest/Phoenix6-frc2025-latest.json>",
                    ]
                },
            ]
        },
        {
            id: "gradle",
            title: "Adding ExcaLib to Your Project",
            content: [
                {
                    type: "paragraph",
                    text: "ExcaLib is available as a Vendor dependency for WPILib. To add ExcaLib to your project, follow these steps:"
                },
                {
                    type: "list",
                    ordered: false,
                    items: [
                        "Open your robot project in VS Code.",
                        "Press ctrl+shift+p (or click the WPILib icon in the top right) to open the WPILib Command Palette.",
                        "select `Manage Vendor Libraries` from the menu.",
                        "select `Install new libraries (online)` from the menu.",
                        "Paste the following json URL"
                    ]
                },
                {
                    type: "code",
                    language: "markdown",
                    title: "link",
                    code: `https://raw.githubusercontent.com/ExcaliburFRC/ExcaLib/pre-release/ExcaLib.json`
                },
                {
                    type: "paragraph",
                    jsx: (
                        <>
                            For further information, check out the {"  "}
                            <a
                                href="https://docs.wpilib.org/en/stable/docs/software/vscode-overview/3rd-party-libraries.html#installing-libraries"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{textDecoration: "underline"}}
                            >
                                WPILib docs
                            </a>
                            .
                        </>
                    )
                },
                {
                    "type": "callout",
                    "calloutType": "warning",
                    "title": "Warning",
                    "text": "You MUST install the Monologue library to use ExcaLIB. Monologue enables annotation-based" +
                        " telemetry and data logging, and is used extensively throughout ExcaLIB."
                }
            ]
        },
        {
            id: "gradle",
            title: "Installing Monologue",
            content: [
                 {
                    "type": "callout",
                    "calloutType": "info",
                    "title": "Migration",
                    "text": "We are currently migrating from Monologue to the built in Epilogue."
                },
                {
                    type: "paragraph",
                    text: "In order to install Monologue, you can follow theses steps:"
                },
                {
                    type: "list",
                    ordered: false,
                    items: [
                        "Copy this line to your build.gradle file:",
                    ]
                },
                {
                    type: "code",
                    language: "markdown",
                    title: "link",
                    code: `repositories { maven { url 'https://jitpack.io' } }`
                },
                {
                    type: "list",
                    ordered: false,
                    items: [
                        "Copy this line to the dependencies block in your build.gradle:",
                    ]
                },
                {
                    type: "code",
                    language: "markdown",
                    title: "link",
                    code: `implementation 'com.github.shueja:Monologue:v1.0.0-beta6'`
                },
                {
                    type: "list",
                    ordered: false,
                    items: [
                        "build your project to download the Monologue library."
                    ]
                },
                {
                    type: "paragraph",
                    text: "After updating your build.gradle file, refresh your Gradle project to download the new dependencies."
                }
            ]
        },
        {
            id: "gradle",
            title: "Using Monologue",
            content: [

                {
                    type: "paragraph",
                    text: "This is a simple example of how to use Monologue in your robot code:"
                },
                {
                    type: "list",
                    ordered: false,
                    items: [
                        "implement the Monologue 'Logged' interface in your Robot.java or RobotContainer.java classes",
                        "Copy the following code to your Robot.java robotInit() method or Robot constructor:"
                    ]
                },
                {
                    type: "code",
                    language: "java",
                    title: "Robot.java",
                    code: `public Robot() {
    boolean fileOnly = false;
    boolean lazyLogging = false;
    Monologue.setupMonologue(this, "Robot", fileOnly, lazyLogging);
}`
                },
                {
                    type: "list",
                    ordered: false,
                    items: [
                        "add this line to robotPeriodic() method:",
                    ]
                },
                {
                    type: "code",
                    language: "java",
                    title: "Robot.java",
                    code: `Monologue.updateAll();`
                },
                {
                    type: "list",
                    ordered: false,
                    items: [
                        "in every class you want to log, add 'implements Logged' to its declaration.",
                        "to log a method’s return value, add the following annotation above it:"
                    ]
                },
                {
                    type: "code",
                    language: "markdown",
                    title: "Example.java",
                    code: `@Log.NT(key = “output name”)
`
                },
                {
                    "type": "callout",
                    "calloutType": "tip",
                    "title": "Annotation Keys",
                    "text": "The key is optional, if omitted, Monologue will use the method name as the key."
                },
                {
                    type: "paragraph",
                    text: 'To visualize the data, you can simply open Advantage Scope (or a similar application for NetworkTable dava visualization) and connect to your robot.\n'
                },
                {
                    type: "paragraph",
                    jsx: (
                        <>
                            Check out {" "}
                            <a
                                href="https://github.com/shueja/Monologue/wiki#1-installation"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{textDecoration: "underline"}}
                            >
                                Monologue docs
                            </a>
                            {" "} and {" "}
                            <a
                                href="https://docs.advantagescope.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{textDecoration: "underline"}}
                            >
                                Advantage Scope Docs
                            </a>
                            {" "}for more information.
                        </>
                    )
                },

            ]
        }
    ]
};