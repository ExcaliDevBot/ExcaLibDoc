import {lineApi} from './api/lineApi.js';
import {circleApi} from "./api/circleApi.js";
import {mathUtilsApi} from "./api/mathApi.js";
import {vector2DApi} from "./api/vectorApi.js";
import {massApi} from "./api/mass.js";
import {continuousSoftLimitApi} from "./api/ContinuousSoftLimitApi.js";
import {softLimitApi} from "./api/softLimitApi.js";
import {imuApi} from "./api/imu.js";
import {navXApi} from "./api/navXApi.js";
import {pigeonApi} from "./api/pigeonApi.js";
import {gainsApi} from "./api/gainsApi.js";
import {sysidConfigApi} from "./api/SysidConfigApi.js";
import {flexMotorApi} from "./api/flexMotorApi.js";
import {sparkMaxMotorApi} from "./api/sprakMaxMotorApi.js";
import {motorGroupApi} from "./api/motorGroupApi.js";
import {talonFXMotorApi} from "./api/TalonFxApi.js";
import {motorApi} from "./api/motorApi.js";
import {directionStateApi} from "./api/DirectionStateApi.js";
import {idleStateApi} from "./api/IdleState.js";
import {allianceUtilsApi} from "./api/allianceUtilsApi.js";
import {alliancePoseApi} from "./api/alliancePoseApi.js";
import {odometryApi} from "./api/odometryApi.js";
import {modulesHolderApi} from "./api/modulesHolderApi.js";
import {swerveApi} from "./api/SwerveApi.js";
import {swerveAccUtilsApi} from "./api/swerveAccUtilsApi.js";
import {swerveModuleApi} from "./api/swerveModuleApi.js";
import {armApi} from "./api/armApi.js";
import {flyWheelApi} from "./api/flyWheelApi.js";
import {linearExtensionApi} from "./api/linearExtensionApi.js";
import {turretApi} from "./api/turretApi.js";
import {mechanismApi} from "./api/mechanismApi.js";

export const apiClasses = [
    alliancePoseApi,
    allianceUtilsApi,
    armApi,
    circleApi,
    continuousSoftLimitApi,
    directionStateApi,
    flexMotorApi,
    flyWheelApi,
    gainsApi,
    idleStateApi,
    imuApi,
    linearExtensionApi,
    lineApi,
    massApi,
    mathUtilsApi,
    mechanismApi,
    modulesHolderApi,
    motorApi,
    motorGroupApi,
    navXApi,
    odometryApi,
    pigeonApi,
    softLimitApi,
    sparkMaxMotorApi,
    swerveAccUtilsApi,
    swerveApi,
    swerveModuleApi,
    sysidConfigApi,
    talonFXMotorApi,
    turretApi,
    vector2DApi
];