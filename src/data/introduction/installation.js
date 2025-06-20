export const installation = {
    title: "Installation",
    updated: "January 12, 2025",
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
                        "Gradle 7.x or newer",
                        "FRC VS Code or IntelliJ IDEA with the FRC plugins"
                    ]
                }
            ]
        },
        {
            id: "gradle",
            title: "Adding ExcaLib to Your Project",
            content: [
                {
                    type: "paragraph",
                    text: "ExcaLib is available through the WPILib Maven repository. To add it to your project, update your build.gradle file with the following dependencies:"
                },
                {
                    type: "code",
                    language: "groovy",
                    title: "build.gradle",
                    code: `dependencies {
    // WPILib dependencies
    implementation wpi.java.deps.wpilib()
    implementation wpi.java.vendor.java()
    
    // ExcaLib dependency
    implementation 'org.ExcaLib:ExcaLib:1.2.0'
    
    // If you need specific modules only, you can use:
    // implementation 'org.ExcaLib:ExcaLib-swerve:1.2.0'
    // implementation 'org.ExcaLib:ExcaLib-mechanisms:1.2.0'
    // implementation 'org.ExcaLib:ExcaLib-vision:1.2.0'
}`
                },
                {
                    type: "paragraph",
                    text: "After updating your build.gradle file, refresh your Gradle project to download the new dependencies."
                }
            ]
        },
        {
            id: "vendor-deps",
            title: "Installing Vendor Dependencies",
            content: [
                {
                    type: "paragraph",
                    text: "ExcaLib depends on several vendor libraries for hardware support. Depending on the hardware you're using, you may need to install the following vendor libraries:"
                },
                {
                    type: "list",
                    ordered: false,
                    items: [
                        "CTRE Phoenix (for Talon SRX, Victor SPX, CANCoder, etc.)",
                        "REV Robotics (for SparkMAX, NEO motors, etc.)",
                        "NavX (for the NavX-MXP gyro)"
                    ]
                },
                {
                    type: "callout",
                    calloutType: "warning",
                    title: "Important",
                    text: "Make sure your vendor library versions are compatible with the version of ExcaLib you're using. Check the compatibility matrix in the documentation for details."
                }
            ]
        },
        {
            id: "verification",
            title: "Verifying Installation",
            content: [
                {
                    type: "paragraph",
                    text: "To verify that ExcaLib is installed correctly, create a simple test class and import one of the ExcaLib classes:"
                },
                {
                    type: "code",
                    language: "java",
                    title: "TestExcaLib.java",
                    code: `package frc.robot;

import org.ExcaLib.drive.swerve.SwerveDrive;

public class TestExcaLib {
    public static void main(String[] args) {
        System.out.println("ExcaLib is installed correctly!");
    }
}`
                },
                {
                    type: "paragraph",
                    text: "If your project compiles without errors, ExcaLib is installed correctly."
                }
            ]
        }
    ]
};