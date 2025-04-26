import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Documentation = () => {
  const location = useLocation();
  
  return (
    <div className="flex min-h-[calc(100vh-64px)]">
      <Sidebar />
      
      <main className="flex-1 lg:ml-64 pt-6 pb-16 px-4 md:px-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Documentation;