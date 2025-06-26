export const mechanism = {
    title: "The Generic Mechanism",
    updated: "june 20, 2025",
    introduction: "The Mechanism Class is a high-level abstraction for controlling various robot subsystems. Designed to be flexible and extensible",
    sections: [
        {
            id: "Overview",
            title: "Overview",
            content: [
                {
                    type: "paragraph",
                    text: "Mechanism serves as a foundation for building specific robot mechanisms by providing:"
                },
                {
                    "type": "list",
                    "ordered": false,
                    "items": [
                        "Basic motor control methods (voltage and percentage output)",
                        "Command-based control patterns",
                        "Telemetry logging",
                        "System identification utilities",
                    ]
                },
            ]
        },
        {
            id: "Overview",
            title: "Class Variables",
            content: [
                {
                    type: "paragraph",
                    text: "Here is a list of the protected variables in the /*Mechanism*/ class:"
                },
                {
                    "type": "list",
                    "ordered": false,
                    "items": [
                        "<m_motor> - The motor controlling the mechanism.",
                        "<m_appliedVoltage> - Mutable voltage value.",
                        "<m_radians> - Mutable angle value in radians.",
                        "<m_meter> - Mutable distance value in meters.",
                        "<m_LinearVelocity> - Mutable linear velocity value.",
                        "<m_DEFAULT_IDLE_STATE> - The default idle state of the motor.",
                    ]
                },
            ]
        },
        {
            id: "Overview",
            title: "Construction and Usage",
            content: [
                {
                    type: "paragraph",
                    text: "The /*Mechanism*/ class is designed to be extended for specific mechanisms. " +
                        "You can also create a simple basic mechanism by instantiating the class directly. "
                },
                {
                    type: "paragraph",
                    text: "/*Mechanism*/ has a simple constructor that takes a single parameter, a <Motor> which represents the motor controlling the mechanism."
                },
                {
                    type: "paragraph",
                    text: "Here is a list of the available methods in the /*Mechanism*/ class:"
                },
                {
                    "type": "list",
                    "ordered": false,
                    "items": [
                        "<setOutput(double output)> - Sets the motor output to a specific value (-1.0 to 1.0).",
                        "<setVoltage(double voltage)> - Sets the motor voltage to a specific value.",
                        "<stopMotorCommand(SubsystemBase... requirements)> - Returns an InstantCommand that stops the motor.",
                        "<manualCommand(DoubleSupplier outputSupplier, SubsystemBase... requirements)> - Returns a Command that allows manual control of the mechanism using a DoubleSupplier.",
                        "<coastCommand(SubsystemBase... requirements)> - Returns a Command that toggles the motor to coast mode.",
                    ]
                },
            ]
        },
        {
            id: "Overview",
            title: "System Identification Methods",
            content: [
                {
                    type: "paragraph",
                    text: "We embedded system identification methods in the /*Mechanism*/ class to help you, this apply to all mechanisms that extend the /*Mechanism*/ class. "
                },
                {
                    type: "callout",
                    calloutType: "tip",
                    title: "System Identification Methods",
                    text: "You should check out the SysId documentation for more information on how to use these methods."
                },
                {
                    type: "paragraph",
                    text: "Each mechanism has 2 SysId method:"
                },
                {
                    "type": "list",
                    "ordered": false,
                    "items": [
                        "<sysIdQuasistatic> - creates a command for running a quasistatic system identification test.",
                        "<sysIdDynamic> - creates a command for running a dynamic system identification test.",
                    ]
                },
            ]
        },

    ]
}