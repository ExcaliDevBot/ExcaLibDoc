import {intoduction} from './introduction/intro.js';
import {installation} from './introduction/installation.jsx';
import {quickStart} from "./introduction/quick-start.js";
import {overview} from "./mechanisims/overview.js";
import {arm} from "./mechanisims/arm.js";
import {flywheel} from "./mechanisims/flywheel.js";
import {turret} from "./mechanisims/turret.js";
import {linear} from "./mechanisims/linear.js";
import {mechanism} from "./mechanisims/mechanism.js";
import {wrapperOverview} from "./wrappers/overview.js";
import {motors} from "./wrappers/motors.js";
import {imu} from "./wrappers/imu.js";
import {sysid} from "./wrappers/sysid.jsx";

export const docContent = {
    "introduction":
    intoduction,
    "installation":
    installation,
    "quick-start":
    quickStart,
    "mechanisms/overview":
    overview,
    "mechanisms/arm":
    arm,
    "mechanisms/flywheel":
    flywheel,
    "mechanisms/turret":
    turret,
    "mechanisms/linear":
    linear,
    "mechanisms/mechanism":
    mechanism,
    "wrappers/overview":
    wrapperOverview,
    "wrappers/motors":
    motors,
    "wrappers/imu":
    imu,
    "wrappers/sysid":
    sysid

};