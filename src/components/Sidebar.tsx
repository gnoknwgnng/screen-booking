import { NavLink } from 'react-router-dom';
import { LayoutDashboard, PlusCircle, MonitorPlay, Settings, BarChart3, Layers } from 'lucide-react';
import { useToast } from '../hooks/useToast';

const Sidebar = () => {
  const toast = useToast();
  return (
    <aside className="sidebar">
      <div className="flex items-center gap-4 mb-12 px-2 mobile-hide">
        <div className="w-10 h-10 rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.5)] flex items-center justify-center relative overflow-hidden" style={{ background: 'var(--accent-gradient)' }}>
           <Layers className="text-white relative z-10" size={24} />
           <div className="absolute inset-0 bg-white/20 z-0 rotate-45 transform scale-150"></div>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-white">AdLoop<span className="text-[var(--accent-secondary)]">.</span></h1>
      </div>
      
      <nav className="flex flex-col gap-2 mobile-row w-full justify-around">
        <p className="text-xs font-bold text-[rgba(255,255,255,0.4)] mb-3 px-4 uppercase tracking-widest mobile-hide">Advertiser Portal</p>
        <NavLink 
          to="/" 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          end
        >
          <LayoutDashboard size={22} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink 
          to="/campaign-builder" 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
        >
          <PlusCircle size={22} />
          <span>Launch Campaign</span>
        </NavLink>
        
        <div className="my-6 border-t border-[rgba(255,255,255,0.05)] w-full mobile-hide"></div>
        
        <p className="text-xs font-bold text-[rgba(255,255,255,0.4)] mb-3 px-4 uppercase tracking-widest mobile-hide">Public Display</p>
        <NavLink 
          to="/simulator" 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
        >
          <MonitorPlay size={22} />
          <span>Screen Simulator</span>
        </NavLink>

        <div className="my-6 border-t border-[rgba(255,255,255,0.05)] w-full mobile-hide"></div>
        
        <p className="text-xs font-bold text-[rgba(255,255,255,0.4)] mb-3 px-4 uppercase tracking-widest mobile-hide">Platform Admin</p>
        <NavLink 
          to="/admin" 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
        >
          <BarChart3 size={22} />
          <span>Aggregator</span>
        </NavLink>
      </nav>

      <div className="mt-auto pt-6 border-t border-[rgba(255,255,255,0.05)] flex flex-col gap-2 mobile-hide">
        <button onClick={() => toast('Opening Account Settings...')} className="nav-item w-full justify-start text-muted bg-transparent border-none cursor-pointer hover:bg-[rgba(255,255,255,0.02)] mb-4">
          <Settings size={22} />
          <span className="font-semibold">Account Settings</span>
        </button>
        
        <div onClick={() => toast('User Profile Menu')} className="flex items-center gap-3 p-3 rounded-2xl bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.05)] cursor-pointer hover:border-[rgba(255,255,255,0.1)] transition-colors">
           <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80" alt="User" className="w-10 h-10 rounded-full border-2 border-[var(--accent-primary)] object-cover" />
           <div className="flex-1 overflow-hidden">
              <p className="text-sm font-bold text-white truncate">Joe's Coffee</p>
              <p className="text-xs text-muted truncate">joe@coffee.local</p>
           </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
