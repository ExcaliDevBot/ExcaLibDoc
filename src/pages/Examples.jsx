import { useState } from 'react';
import CodeBlock from '../components/CodeBlock';
import { motion } from 'framer-motion';

const examples = [
  {
    id: 'swerve-drive',
    name: 'SwerveDriveExample',
    description: 'A complete example of a robot with swerve drive.',
    code: `package frc.robot;

import com.ctre.phoenix6.hardware.CANcoder;
import com.pathplanner.lib.path.PathConstraints;
import edu.wpi.first.math.geometry.Pose2d;
import edu.wpi.first.math.geometry.Rotation3d;
import edu.wpi.first.math.geometry.Translation2d;
import frc.excalib.control.gains.Gains;
import frc.excalib.control.imu.IMU;
import frc.excalib.control.imu.Pigeon;
import frc.excalib.control.motor.controllers.SparkMaxMotor;
import frc.excalib.control.motor.controllers.TalonFXMotor;
import frc.excalib.swerve.ModulesHolder;
import frc.excalib.swerve.Swerve;
import frc.excalib.swerve.SwerveModule;

import static com.revrobotics.spark.SparkLowLevel.MotorType.kBrushless;
public static class SwerveConstants {
    public static final int FRONT_LEFT_DRIVE_ID = 0;
    public static final int FRONT_RIGHT_DRIVE_ID = 0;
    public static final int BACK_RIGHT_DRIVE_ID = 0;
    public static final int BACK_LEFT_DRIVE_ID = 0;

    public static final int FRONT_LEFT_ROTATION_ID = 0;
    public static final int FRONT_RIGHT_ROTATION_ID = 0;
    public static final int BACK_RIGHT_ROTATION_ID = 0;
    public static final int BACK_LEFT_ROTATION_ID = 0;

    public static final int GYRO_ID = 0;
    public static final String SWERVE_CANBUS = "CTRESwerve";

    private static final double PID_TOLERANCE = 0;

    public static final double TRACK_WIDTH = 0; // meters

    public static final Translation2d FRONT_LEFT_TRANSLATION = new Translation2d(TRACK_WIDTH / 2, TRACK_WIDTH / 2);
    public static final Translation2d FRONT_RIGHT_TRANSLATION = new Translation2d(TRACK_WIDTH / 2, -TRACK_WIDTH / 2);
    public static final Translation2d BACK_LEFT_TRANSLATION = new Translation2d(-TRACK_WIDTH / 2, TRACK_WIDTH / 2);
    public static final Translation2d BACK_RIGHT_TRANSLATION = new Translation2d(-TRACK_WIDTH / 2, -TRACK_WIDTH / 2);

    public static final double MAX_MODULE_VEL = 0;
    public static final double MAX_FRONT_ACC = 0;
    public static final double MAX_SIDE_ACC = 0;
    public static final double MAX_SKID_ACC = 0;
    public static final double MAX_FORWARD_ACC = 0;
    public static final double MAX_VEL = 0;
    public static final double MAX_OMEGA_RAD_PER_SEC = 0;
    public static final double MAX_OMEGA_RAD_PER_SEC_SQUARE = 0;

    public static final PathConstraints MAX_PATH_CONSTRAINTS = new PathConstraints(
            MAX_VEL,
            MAX_SKID_ACC,
            MAX_OMEGA_RAD_PER_SEC,
            MAX_OMEGA_RAD_PER_SEC_SQUARE,
            12.0,
            false
    );

    private static final CANcoder FRONT_LEFT_ABS_ENCODER = new CANcoder(0, SWERVE_CANBUS);
    public static final CANcoder FRONT_RIGHT_ABS_ENCODER = new CANcoder(0, SWERVE_CANBUS);
    private static final CANcoder BACK_RIGHT_ABS_ENCODER = new CANcoder(0, SWERVE_CANBUS);
    private static final CANcoder BACK_LEFT_ABS_ENCODER = new CANcoder(0, SWERVE_CANBUS);

    private static final double VELOCITY_CONVERSION_FACTOR = 0;
    private static final double POSITION_CONVERSION_FACTOR = 0;
    private static final double ROTATION_VELOCITY_CONVERSION_FACTOR = 0;

    private static final IMU GYRO = new Pigeon(GYRO_ID, SWERVE_CANBUS, new Rotation3d());

    public static Swerve configureSwerve(Pose2d initialPose) {
        return new Swerve(
                new ModulesHolder(
                        new SwerveModule(
                                new TalonFXMotor(FRONT_LEFT_DRIVE_ID, SWERVE_CANBUS),
                                new SparkMaxMotor(FRONT_LEFT_ROTATION_ID, kBrushless),
                                new Gains(),
                                new Gains(),
                                PID_TOLERANCE,
                                FRONT_LEFT_TRANSLATION,
                                () -> FRONT_LEFT_ABS_ENCODER.getAbsolutePosition().getValueAsDouble() * 2 * Math.PI,
                                MAX_MODULE_VEL,
                                VELOCITY_CONVERSION_FACTOR,
                                POSITION_CONVERSION_FACTOR,
                                ROTATION_VELOCITY_CONVERSION_FACTOR
                        ),
                        new SwerveModule(
                                new TalonFXMotor(FRONT_RIGHT_DRIVE_ID, SWERVE_CANBUS),
                                new SparkMaxMotor(FRONT_RIGHT_ROTATION_ID, kBrushless),
                                new Gains(),
                                new Gains(),
                                PID_TOLERANCE,
                                FRONT_RIGHT_TRANSLATION,
                                () -> FRONT_RIGHT_ABS_ENCODER.getAbsolutePosition().getValueAsDouble() * 2 * Math.PI,
                                MAX_MODULE_VEL,
                                VELOCITY_CONVERSION_FACTOR,
                                POSITION_CONVERSION_FACTOR,
                                ROTATION_VELOCITY_CONVERSION_FACTOR
                        ),
                        new SwerveModule(
                                new TalonFXMotor(BACK_LEFT_DRIVE_ID, SWERVE_CANBUS),
                                new SparkMaxMotor(BACK_LEFT_ROTATION_ID, kBrushless),
                                new Gains(),
                                new Gains(),
                                PID_TOLERANCE,
                                BACK_LEFT_TRANSLATION,
                                () -> BACK_LEFT_ABS_ENCODER.getAbsolutePosition().getValueAsDouble() * 2 * Math.PI,
                                MAX_MODULE_VEL,
                                VELOCITY_CONVERSION_FACTOR,
                                POSITION_CONVERSION_FACTOR,
                                ROTATION_VELOCITY_CONVERSION_FACTOR
                        ),
                        new SwerveModule(
                                new TalonFXMotor(BACK_RIGHT_DRIVE_ID, SWERVE_CANBUS),
                                new SparkMaxMotor(BACK_RIGHT_ROTATION_ID, kBrushless),
                                new Gains(),
                                new Gains(),
                                PID_TOLERANCE,
                                BACK_RIGHT_TRANSLATION,
                                () -> BACK_RIGHT_ABS_ENCODER.getAbsolutePosition().getValueAsDouble() * 2 * Math.PI,
                                MAX_MODULE_VEL,
                                VELOCITY_CONVERSION_FACTOR,
                                POSITION_CONVERSION_FACTOR,
                                ROTATION_VELOCITY_CONVERSION_FACTOR
                        )),
                GYRO,
                initialPose
        );
    }
}`
  },
  {
    id: 'arm-mechanism',
    name: 'Arm Mechanism Example',
    description: 'Using the arm mechanism to control a robot arm with position control.',
    code: `package frc.robot.subsystems;

import edu.wpi.first.wpilibj2.command.SubsystemBase;
import com.revrobotics.CANSparkMax;
import com.revrobotics.CANSparkMaxLowLevel.MotorType;
import org.frclib.mechanisms.ArmMechanism;
import org.frclib.util.PIDConstants;

public class ArmSubsystem extends SubsystemBase {
  private final ArmMechanism arm;
  
  public ArmSubsystem() {
    // Create motor controller
    CANSparkMax motor = new CANSparkMax(1, MotorType.kBrushless);
    
    // Create arm mechanism
    arm = new ArmMechanism.Builder()
      .withMotor(motor)
      .withEncoder(motor.getEncoder())
      .withPIDConstants(new PIDConstants(0.5, 0.0, 0.02))
      .withGearRatio(100.0)
      .withArmLength(0.6) // meters
      .withLimits(0.0, Math.PI / 2) // 0 to 90 degrees
      .build();
      
    // Add preset positions
    arm.addPresetPosition("stowed", 0.0);
    arm.addPresetPosition("pickup", Math.PI / 6); // 30 degrees
    arm.addPresetPosition("score", Math.PI / 2); // 90 degrees
  }
  
  /**
   * Set the arm position
   * @param angleRadians The target angle in radians
   */
  public void setPosition(double angleRadians) {
    arm.setPosition(angleRadians);
  }
  
  /**
   * Move to a preset position
   * @param presetName The name of the preset position
   */
  public void setPresetPosition(String presetName) {
    arm.moveToPreset(presetName);
  }
  
  /**
   * @return Current angle of the arm in radians
   */
  public double getCurrentAngle() {
    return arm.getCurrentPosition();
  }
  
  /**
   * @return Whether the arm is at the target position
   */
  public boolean isAtTargetPosition() {
    return arm.isAtTargetPosition();
  }
  
  @Override
  public void periodic() {
    // Update the mechanism (handles control loops and safety checks)
    arm.update();
  }
}`
  },
  {
    id: 'vision-tracking',
    name: 'Vision Tracking Example',
    description: 'Using the vision system to track and align with AprilTags.',
    code: `package frc.robot.subsystems;

import edu.wpi.first.wpilibj2.command.SubsystemBase;
import edu.wpi.first.math.geometry.Pose2d;
import edu.wpi.first.math.geometry.Rotation2d;
import org.frclib.vision.VisionSystem;
import org.frclib.vision.AprilTagDetection;
import java.util.List;

public class VisionSubsystem extends SubsystemBase {
  private final VisionSystem visionSystem;
  private final SwerveDrive swerveDrive;
  
  public VisionSubsystem(SwerveDrive swerveDrive) {
    this.swerveDrive = swerveDrive;
    
    // Initialize the vision system with camera parameters
    visionSystem = new VisionSystem.Builder()
      .withCameraResolution(640, 480)
      .withCameraMatrix(/* camera calibration matrix */)
      .withDistortionCoefficients(/* distortion coefficients */)
      .withAprilTagFamily(VisionSystem.AprilTagFamily.TAG_36H11)
      .build();
  }
  
  /**
   * Process the latest vision frame and update robot pose
   */
  public void processFrame() {
    // Get detected AprilTags from the vision system
    List<AprilTagDetection> detections = visionSystem.getDetectedTags();
    
    if (!detections.isEmpty()) {
      // Filter for the tag we care about (e.g., ID 1)
      AprilTagDetection targetTag = detections.stream()
        .filter(tag -> tag.getId() == 1)
        .findFirst()
        .orElse(null);
      
      if (targetTag != null) {
        // Get the pose of the robot relative to the detected tag
        Pose2d robotPose = visionSystem.estimateRobotPose(targetTag);
        
        // Update the swerve drive's pose estimation
        swerveDrive.addVisionPoseMeasurement(robotPose, System.currentTimeMillis() / 1000.0);
      }
    }
  }
  
  /**
   * Get a command to align the robot with a specific AprilTag
   * @param tagId The ID of the tag to align with
   * @param distance The desired distance from the tag
   * @return A command that will align the robot with the tag
   */
  public Command alignWithTag(int tagId, double distance) {
    return new FunctionalCommand(
      // Initialize
      () -> {},
      
      // Execute
      () -> {
        List<AprilTagDetection> detections = visionSystem.getDetectedTags();
        
        AprilTagDetection targetTag = detections.stream()
          .filter(tag -> tag.getId() == tagId)
          .findFirst()
          .orElse(null);
        
        if (targetTag != null) {
          // Calculate the error in angle and distance
          double angleError = targetTag.getXAngle();
          double distanceError = targetTag.getDistance() - distance;
          
          // Calculate drive commands
          double xSpeed = -0.5 * distanceError;  // Drive toward/away from target
          double ySpeed = 0;                     // No lateral movement
          double rotation = -0.5 * angleError;   // Rotate to face target
          
          swerveDrive.drive(xSpeed, ySpeed, rotation, true);
        }
      },
      
      // End
      interrupted -> swerveDrive.stop(),
      
      // IsFinished
      () -> {
        List<AprilTagDetection> detections = visionSystem.getDetectedTags();
        
        AprilTagDetection targetTag = detections.stream()
          .filter(tag -> tag.getId() == tagId)
          .findFirst()
          .orElse(null);
        
        if (targetTag != null) {
          double angleError = Math.abs(targetTag.getXAngle());
          double distanceError = Math.abs(targetTag.getDistance() - distance);
          
          // Finish when close enough to target
          return angleError < 2.0 && distanceError < 0.05;
        }
        
        return false;
      }
    );
  }
  
  @Override
  public void periodic() {
    processFrame();
  }
}`
  }
];

const Examples = () => {
  const [activeExample, setActiveExample] = useState(examples[0].id);
  
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-primary-900 dark:text-white mb-6">
        Example Code
      </h1>
      
      <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
        Ready-to-use code examples to help you get started with the FRCLib library.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow border border-slate-200 dark:border-slate-700 p-4">
            <h2 className="text-xl font-semibold text-primary-900 dark:text-white mb-4">
              Examples
            </h2>
            
            <nav className="space-y-1">
              {examples.map((example) => (
                <button
                  key={example.id}
                  onClick={() => setActiveExample(example.id)}
                  className={`w-full px-3 py-2 text-left rounded-md text-sm ${
                    activeExample === example.id
                      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-900 dark:text-white font-medium'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  {example.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
        
        <div className="lg:col-span-3">
          {examples.map((example) => (
            activeExample === example.id && (
              <motion.div
                key={example.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-primary-900 dark:text-white mb-2">
                  {example.name}
                </h2>
                <p className="text-slate-700 dark:text-slate-300 mb-6">
                  {example.description}
                </p>
                <CodeBlock language="java" title={`${example.name}.java`}>
                  {example.code}
                </CodeBlock>
              </motion.div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default Examples;