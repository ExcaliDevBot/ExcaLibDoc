export const sysid = {
        title: 'SysId Overview',
        updated: "2025-07-01",
        sections: [
            {
                id: 'sysid-functions',
                content: [
                    {
                        type: 'heading',
                        level: 2,
                        text: 'SysId Functions Documentation'
                    },
                    {
                        type: 'paragraph',
                        text: 'The SysId functions in the <Mechanism> class help automate system identification (SysId) ' +
                            'tests for both linear and angular mechanisms.' +
                            ' These tests are used to characterize mechanisms for feedforward and control tuning.'
                    },
                ]
            },
            {
                title: 'SysId Functions',
                id: 'sysid-functions',
                content: [
                    {
                        type: 'heading',
                        level: 3,
                        text: 'sysIdQuasistatic'
                    },
                    {
                        type: 'paragraph',
                        text: '<sysIdQuasistatic> Creates a command to run a quasistatic SysId test, where the mechanism' +
                            ' is gradually sped up by slowly increasing the voltage in a specified direction.' +
                            ' This ensures that the voltage corresponding to acceleration is negligible, simulating a near-static condition.'
                    },
                    {
                        type: 'code',
                        "title": "sysIdQuasistatic Command",
                        language: 'java',
                        code: `public Command sysIdQuasistatic(
    Direction direction,
    SubsystemBase subsystem,
    DoubleSupplier positionSupplier,
    SysidConfig config,
    boolean isLinear
)`
                    },
                    {
                        type: 'paragraph',
                        text: '<sysIdDynamic> Creates a command to run a dynamic SysId test, where a constant step voltage is applied to the mechanism in a specified direction. This test is used to analyze the mechanism\'s behavior during acceleration.'
                    },
                    {
                        type: 'code',
                        "title": "sysIdDynamic Command",
                        language: 'java',
                        code: `public Command sysIdDynamic(
    Direction direction,
    SubsystemBase subsystem,
    DoubleSupplier positionSupplier,
    SysidConfig config,
    boolean isLinear
)`
                    },
                    {
                        type: 'list',
                        ordered: false,
                        items: [
                            '<direction>: The test direction (<Direction.kForward> or <Direction.kReverse>).',
                            '<subsystem>: The subsystem associated with the mechanism.',
                            '<positionSupplier>: Supplies the current position (meters or radians).',
                            '<config>: SysId configuration object.',
                            '<isLinear>: <true> for linear mechanisms, <false> for angular.'
                        ]
                    },
                ]
            },
            {
                title: 'Usage Example',
                id: 'sysid-usage-examples',
                content: [
                    {
                        type: 'code',
                        language: 'java',
                        code: `Command test = mechanism.sysIdDynamic(
    Direction.kReverse,
    mySubsystem,
    () -> encoder.getDistance(),
    mySysidConfig,
    false // angular
);
-------
controller.triangle().onTrue(test.schedule());`
                    },
                    {
                        type: "paragraph",
                        jsx: (
                            <>
                                Please familiarize yourself with the {" "}
                                <a
                                    href="https://docs.wpilib.org/en/stable/docs/software/advanced-controls/system-identification/introduction.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{textDecoration: "underline"}}
                                >
                                    SysId Wpilib docs
                                </a>
                                {" "} before using this implementation.
                            </>
                        )
                    }
                ]
            }
        ]
    }
;