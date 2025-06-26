import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Documentation from './pages/Documentation';
import ApiReference from './pages/ApiReference';
import Examples from './pages/Examples';
import NotFound from './pages/NotFound';
import DocContent from './pages/DocContent';
import {alliance} from "./data/utils/alliance.js";
import QA from "./pages/QA.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="docs" element={<Documentation/>}>
                    <Route index element={<DocContent docPath="introduction"/>}/>
                    <Route path="installation" element={<DocContent docPath="installation"/>}/>
                    <Route path="quick-start" element={<DocContent docPath="quick-start"/>}/>

                    <Route path="mechanisms" element={<DocContent docPath="mechanisms/overview"/>}/>
                    <Route path="mechanisms/mechanism" element={<DocContent docPath="mechanisms/mechanism"/>}/>
                    <Route path="mechanisms/arm" element={<DocContent docPath="mechanisms/arm"/>}/>
                    <Route path="mechanisms/flywheel" element={<DocContent docPath="mechanisms/flywheel"/>}/>
                    <Route path="mechanisms/turret" element={<DocContent docPath="mechanisms/turret"/>}/>
                    <Route path="mechanisms/linear" element={<DocContent docPath="mechanisms/linear"/>}/>

                    <Route path="wrappers" element={<DocContent docPath="wrappers/overview"/>}/>
                    <Route path="wrappers/motors" element={<DocContent docPath="wrappers/motors"/>}/>
                    <Route path="wrappers/physics" element={<DocContent docPath="wrappers/physics"/>}/>
                    <Route path="wrappers/imu" element={<DocContent docPath="wrappers/imu"/>}/>
                    <Route path="wrappers/sysid" element={<DocContent docPath="wrappers/sysid"/>}/>

                    <Route path="utils" element={<DocContent docPath="utils/overview"/>}/>
                    <Route path="utils/soft-limits" element={<DocContent docPath="utils/soft-limits"/>}/>
                    <Route path="utils/gains" element={<DocContent docPath="utils/gains"/>}/>
                    <Route path="utils/alliance" element={<DocContent docPath="utils/alliance"/>}/>
                    <Route path="utils/math" element={<DocContent docPath="utils/math"/>}/>

                    <Route path="swerve" element={<DocContent docPath="swerve/overview"/>}/>
                    <Route path="swerve/module" element={<DocContent docPath="swerve/module"/>}/>
                    <Route path="swerve/drive" element={<DocContent docPath="swerve/drive"/>}/>
                    <Route path="swerve/path-following" element={<DocContent docPath="swerve/path-following"/>}/>
                    <Route path="swerve/kinematics" element={<DocContent docPath="swerve/kinematics"/>}/>

                    <Route path="advanced/pose-estimation" element={<DocContent docPath="advanced/pose-estimation"/>}/>
                    <Route path="advanced/auto-balance" element={<DocContent docPath="advanced/auto-balance"/>}/>
                    <Route path="advanced/vision" element={<DocContent docPath="advanced/vision"/>}/>
                    <Route path="advanced/command-based" element={<DocContent docPath="advanced/command-based"/>}/>
                </Route>
                <Route path="api-reference" element={<ApiReference/>}/>
                <Route path="examples" element={<Examples/>}/>
                <Route path="questions" element={<QA/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    );
}

export default App;