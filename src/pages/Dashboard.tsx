import { Activity, Clock, MapPin, TrendingUp, ArrowUpRight, BarChart2, Zap, Monitor } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { useTilt } from '../hooks/useTilt';
import { useToast } from '../hooks/useToast';

const StatCard = ({ title, value, icon, badge, bgClass, textClass, hasGlow = false }: any) => {
  const tiltRef = useTilt();
  
  return (
    <div ref={tiltRef as any} className="glass-panel p-6 glass-panel-hover relative overflow-hidden" style={{ transition: 'box-shadow 0.3s ease' }}>
      {hasGlow && <div className={`absolute -right-4 -top-4 w-24 h-24 ${textClass} opacity-10 rounded-full blur-2xl pointer-events-none`}></div>}
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl border ${bgClass} ${textClass}`}>
          {icon}
        </div>
        {badge && <span className="badge" style={{ background: 'rgba(16,185,129,0.1)', color: 'var(--success)' }}>{badge}</span>}
      </div>
      <h3 className="font-semibold text-muted mb-1 text-sm md:text-base">{title}</h3>
      <p className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-md">{value}</p>
    </div>
  );
};

const Dashboard = () => {
  const navigate = useNavigate();
  const toast = useToast();

  return (
    <div className="animate-fade-in max-w-6xl mx-auto px-4 md:px-0">
      <div className="flex justify-between items-end mb-8 md:mb-10 mobile-col mt-2 md:mt-0">
        <div>
          <p className="text-[var(--accent-secondary)] font-semibold mb-1 uppercase tracking-wider text-xs md:text-sm animate-pulse">Advertiser Portal</p>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 drop-shadow-lg">Welcome back, Joe's Coffee</h1>
        </div>
        <button className="btn-primary group" onClick={() => navigate('/campaign-builder')}>
          <span className="relative z-10 flex items-center gap-2">New Campaign <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></span>
        </button>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Active Campaigns" value="2" badge="+12%" 
          icon={<Activity size={24} />} bgClass="bg-[rgba(168,85,247,0.1)] border-[rgba(168,85,247,0.2)]" textClass="text-[var(--accent-primary)]" 
        />
        <StatCard 
          title="Est. Impressions" value="12,450" badge="+24%" hasGlow={true}
          icon={<TrendingUp size={24} />} bgClass="bg-[rgba(6,182,212,0.1)] border-[rgba(6,182,212,0.2)]" textClass="text-[var(--accent-secondary)]" 
        />
        <StatCard 
          title="Slots Booked" value="84" 
          icon={<Clock size={24} />} bgClass="bg-[rgba(16,185,129,0.1)] border-[rgba(16,185,129,0.2)]" textClass="text-[var(--success)]" 
        />
        <StatCard 
          title="Active Locations" value="3" 
          icon={<MapPin size={24} />} bgClass="bg-[rgba(245,158,11,0.1)] border-[rgba(245,158,11,0.2)]" textClass="text-[#f59e0b]" 
        />
      </div>

      <div className="grid grid-cols-3 gap-8 mb-8">
        <div className="col-span-2 glass-panel p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold flex items-center gap-2"><BarChart2 className="text-[var(--accent-secondary)]"/> Performance Overview</h2>
            <select className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-3 py-1 text-sm text-muted outline-none focus:border-[var(--accent-primary)]">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          
          {/* Mock Chart Area */}
          <div className="h-64 w-full relative flex items-end">
            <div className="absolute inset-0 flex flex-col justify-between border-b border-l border-[rgba(255,255,255,0.05)] pb-4 pl-4">
              {[4,3,2,1,0].map(n => (
                <div key={n} className="w-full border-t border-[rgba(255,255,255,0.05)] relative text-xs text-muted">
                  <span className="absolute -left-8 -top-2">{n}k</span>
                </div>
              ))}
            </div>
            
            {/* Chart line (SVG mock) */}
            <svg className="absolute inset-0 h-full w-full pt-4 pl-4" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--accent-primary)" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="var(--accent-primary)" stopOpacity="0" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              <path d="M0,200 L100,150 L200,180 L300,100 L400,120 L500,50 L600,80 L700,20 L800,200 Z" fill="url(#chart-gradient)" />
              <path className="animate-draw" d="M0,200 L100,150 L200,180 L300,100 L400,120 L500,50 L600,80 L700,20" fill="none" stroke="var(--accent-primary)" strokeWidth="3" filter="url(#glow)" />
              
              <circle className="animate-fade-in delay-500" cx="700" cy="20" r="5" fill="white" stroke="var(--accent-primary)" strokeWidth="2" filter="url(#glow)"/>
            </svg>
            <div className="absolute bottom-[-20px] w-full flex justify-between px-4 text-xs text-muted">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
          </div>
        </div>
        
        <div className="glass-panel p-8 flex flex-col">
           <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
           <div className="flex-1 flex flex-col gap-6">
              {[
                { time: '2 hrs ago', title: 'Ad "Morning Brew" played 15 times', icon: <Monitor size={16} />, color: 'var(--accent-secondary)' },
                { time: '5 hrs ago', title: 'Geofence pinged 42 devices', icon: <Zap size={16} />, color: 'var(--accent-primary)' },
                { time: '1 day ago', title: 'New campaign "Weekend Sale" scheduled', icon: <Clock size={16} />, color: 'var(--success)' },
              ].map((act, i) => (
                <div key={i} className={`flex gap-4 items-start animate-fade-in delay-${(i+1)*100} cursor-pointer hover:opacity-80 transition-opacity`} onClick={() => toast(`Opening log details...`)}>
                  <div className="mt-1 p-2 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)]" style={{ color: act.color }}>
                    {act.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{act.title}</p>
                    <p className="text-xs text-muted mt-1">{act.time}</p>
                  </div>
                </div>
              ))}
           </div>
           <button onClick={() => toast('Loading all logs...')} className="btn-secondary w-full mt-auto">View All Logs</button>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-4">Current Campaigns</h2>
      <div className="glass-panel overflow-hidden overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="border-b" style={{ borderColor: 'var(--border-color)' }}>
              <th className="p-4 font-semibold text-muted uppercase tracking-wider text-xs">Campaign Name</th>
              <th className="p-4 font-semibold text-muted uppercase tracking-wider text-xs">Location</th>
              <th className="p-4 font-semibold text-muted uppercase tracking-wider text-xs">Status</th>
              <th className="p-4 font-semibold text-muted uppercase tracking-wider text-xs">Slots/Day</th>
              <th className="p-4 font-semibold text-muted uppercase tracking-wider text-xs text-right">Daily Spend</th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={() => toast('Opening Campaign: Morning Brew Special')} className="border-b hover:bg-[rgba(255,255,255,0.02)] transition-colors animate-fade-in delay-200 cursor-pointer" style={{ borderColor: 'var(--border-color)' }}>
              <td className="p-4">
                <div className="font-semibold text-lg">Morning Brew Special</div>
                <div className="text-sm text-muted">10 sec image ad</div>
              </td>
              <td className="p-4">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-muted" /> Downtown Ave. Screen
                </div>
              </td>
              <td className="p-4">
                <span className="badge" style={{ background: 'rgba(16,185,129,0.15)', color: 'var(--success)', border: '1px solid rgba(16,185,129,0.3)' }}>Active</span>
              </td>
              <td className="p-4 font-medium">30 slots</td>
              <td className="p-4 font-bold text-right text-lg">$15.00</td>
            </tr>
            <tr onClick={() => toast('Opening Campaign: Weekend Happy Hour')} className="hover:bg-[rgba(255,255,255,0.02)] transition-colors animate-fade-in delay-300 cursor-pointer">
              <td className="p-4">
                <div className="font-semibold text-lg">Weekend Happy Hour</div>
                <div className="text-sm text-muted">15 sec video ad</div>
              </td>
              <td className="p-4">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-muted" /> Main St. Station
                </div>
              </td>
              <td className="p-4">
                <span className="badge" style={{ background: 'rgba(6,182,212,0.15)', color: 'var(--accent-secondary)', border: '1px solid rgba(6,182,212,0.3)' }}>Scheduled</span>
              </td>
              <td className="p-4 font-medium">20 slots</td>
              <td className="p-4 font-bold text-right text-lg">$12.50</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
