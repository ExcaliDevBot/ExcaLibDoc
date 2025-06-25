export const armApi = {
  name: "Arm",
  package: "frc.excalib.mechanisms.arm",
  description: "Represents a robotic arm mechanism with PID control and physical constraints.",
  methods: [
    {
      name: "Arm",
      signature: "public Arm(Motor motor, DoubleSupplier angleSupplier, SoftLimit velocityLimit, Gains gains, Mass mass)",
      description: "Constructs the Arm mechanism with the given motor, angle supplier, velocity limits, gains, and mass.",
      parameters: [
        { name: "motor", type: "Motor", description: "The motor controller for the arm." },
        { name: "angleSupplier", type: "DoubleSupplier", description: "Supplies the current angle of the arm in radians." },
        { name: "velocityLimit", type: "SoftLimit", description: "Velocity constraints applied to the motor." },
        { name: "gains", type: "Gains", description: "PID and feedforward gains." },
        { name: "mass", type: "Mass", description: "Mass properties of the arm." }
      ],
      returns: { type: "void", description: "Constructs a new instance of the Arm class." }
    },
    {
      name: "anglePositionControlCommand",
      signature: "public Command anglePositionControlCommand(DoubleSupplier setpointSupplier, Consumer<Boolean> toleranceConsumer, double maxOffSet, SubsystemBase... requirements)",
      description: "Creates a command to move the arm to a dynamic angle setpoint using PID and feedforward control.",
      parameters: [
        { name: "setpointSupplier", type: "DoubleSupplier", description: "Supplies the target angle setpoint (radians)." },
        { name: "toleranceConsumer", type: "Consumer<Boolean>", description: "Receives whether the arm is within the specified tolerance." },
        { name: "maxOffSet", type: "double", description: "Maximum allowed error (radians)." },
        { name: "requirements", type: "SubsystemBase...", description: "Subsystems required by this command." }
      ],
      returns: { type: "Command", description: "Command that moves the arm to the dynamic setpoint." }
    },
    {
      name: "goToAngleCommand",
      signature: "public Command goToAngleCommand(double angle, Consumer<Boolean> toleranceConsumer, double maxOffSet, SubsystemBase... requirements)",
      description: "Creates a command to move the arm to a fixed angle using PID and feedforward control.",
      parameters: [
        { name: "angle", type: "double", description: "Target angle in radians." },
        { name: "toleranceConsumer", type: "Consumer<Boolean>", description: "Receives whether the arm is within the specified tolerance." },
        { name: "maxOffSet", type: "double", description: "Maximum allowed error (radians)." },
        { name: "requirements", type: "SubsystemBase...", description: "Subsystems required by this command." }
      ],
      returns: { type: "Command", description: "Command that moves the arm to the fixed setpoint." }
    }
  ]
};
