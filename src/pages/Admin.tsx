import { Network, DollarSign, Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';

import { useTilt } from '../hooks/useTilt';
import { useToast } from '../hooks/useToast';

const StatCard = ({ title, value, icon, badge, bgClass, textClass, subtitle }: any) => {
  const tiltRef = useTilt();
  
  return (
    <div ref={tiltRef as any} className="glass-panel p-8 glass-panel-hover relative overflow-hidden group" style={{ transition: 'box-shadow 0.3s ease' }}>
      <div className={`absolute right-0 top-0 w-32 h-32 ${textClass} opacity-10 blur-3xl pointer-events-none group-hover:opacity-20 transition-opacity`}></div>
      <div className="flex items-center justify-between mb-6">
        <div className={`p-4 rounded-2xl border ${bgClass} ${textClass}`}>
          {icon}
        </div>
        <span className="badge" style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-main)' }}>{badge}</span>
      </div>
      <p className="text-4xl md:text-5xl font-extrabold mb-2 text-white drop-shadow-md">{value}</p>
      <div className="flex justify-between items-end">
         <h3 className="font-semibold text-muted text-sm md:text-base">{title}</h3>
         {subtitle && <p className="text-xs md:text-sm font-bold text-muted">{subtitle}</p>}
      </div>
    </div>
  );
};

const Admin = () => {
  const toast = useToast();
  return (
    <div className="animate-fade-in max-w-6xl mx-auto px-4 md:px-0">
      <div className="mb-8 md:mb-10 mt-2 md:mt-0">
        <p className="text-[var(--accent-primary)] font-semibold mb-1 uppercase tracking-wider text-xs md:text-sm animate-pulse">Aggregator Panel</p>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 drop-shadow-lg">Network Overview</h1>
      </div>

      <div className="grid grid-cols-3 gap-8 mb-10">
        <StatCard 
          title="Connected Screens" value="142" badge="Active" 
          icon={<Network size={28} />} bgClass="bg-[rgba(168,85,247,0.1)] border-[rgba(168,85,247,0.2)]" textClass="text-[var(--accent-primary)]" 
          subtitle="+12 this month"
        />
        <StatCard 
          title="Network Revenue" value="$42.5k" badge="+18%" 
          icon={<DollarSign size={28} />} bgClass="bg-[rgba(16,185,129,0.1)] border-[rgba(16,185,129,0.2)]" textClass="text-[var(--success)]" 
          subtitle="vs last month"
        />
        <StatCard 
          title="Slot Utilization" value="87%" badge="Target: 90%" 
          icon={<Layers size={28} />} bgClass="bg-[rgba(6,182,212,0.1)] border-[rgba(6,182,212,0.2)]" textClass="text-[var(--accent-secondary)]" 
        />
      </div>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Top Performing Assets</h2>
        <button onClick={() => toast('Exporting Report to CSV...', 'success')} className="btn-secondary text-sm px-4 py-2">Export Report</button>
      </div>

      <div className="glass-panel overflow-hidden overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="border-b border-[rgba(255,255,255,0.05)] bg-[rgba(0,0,0,0.2)]">
              <th className="p-5 font-bold text-muted uppercase tracking-widest text-xs">Screen Location</th>
              <th className="p-5 font-bold text-muted uppercase tracking-widest text-xs">Owner</th>
              <th className="p-5 font-bold text-muted uppercase tracking-widest text-xs">Utilization</th>
              <th className="p-5 font-bold text-muted uppercase tracking-widest text-xs text-right">Revenue</th>
              <th className="p-5 font-bold text-muted uppercase tracking-widest text-xs text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.02)] transition-colors">
              <td className="p-5">
                <div className="font-extrabold text-lg">Downtown Ave.</div>
                <div className="text-sm font-semibold text-[var(--accent-primary)] mt-1">ID: SCR-1042</div>
              </td>
              <td className="p-5 font-medium text-muted">City Properties Inc.</td>
              <td className="p-5 w-48">
                <div className="flex items-center justify-between mb-1 text-sm font-bold">
                   <span className="text-[var(--success)]">98%</span>
                </div>
                <div className="w-full bg-[rgba(255,255,255,0.05)] h-2.5 rounded-full overflow-hidden">
                  <div className="bg-[var(--success)] h-full rounded-full shadow-[0_0_10px_var(--success)]" style={{ width: '98%' }}></div>
                </div>
              </td>
              <td className="p-5 font-extrabold text-2xl text-right text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">$3,240</td>
              <td className="p-5 text-center">
                <span className="inline-flex items-center justify-center p-2 rounded-full bg-[rgba(16,185,129,0.1)] text-[var(--success)]" title="Online">
                  <CheckCircle2 size={20} />
                </span>
              </td>
            </tr>
            <tr className="border-b border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.02)] transition-colors">
              <td className="p-5">
                <div className="font-extrabold text-lg">Mall Entrance</div>
                <div className="text-sm font-semibold text-[var(--accent-secondary)] mt-1">ID: SCR-0891</div>
              </td>
              <td className="p-5 font-medium text-muted">Simon Malls</td>
              <td className="p-5 w-48">
                <div className="flex items-center justify-between mb-1 text-sm font-bold">
                   <span className="text-[var(--accent-secondary)]">85%</span>
                </div>
                <div className="w-full bg-[rgba(255,255,255,0.05)] h-2.5 rounded-full overflow-hidden">
                  <div className="bg-[var(--accent-secondary)] h-full rounded-full shadow-[0_0_10px_var(--accent-secondary)]" style={{ width: '85%' }}></div>
                </div>
              </td>
              <td className="p-5 font-extrabold text-2xl text-right text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">$2,800</td>
              <td className="p-5 text-center">
                <span className="inline-flex items-center justify-center p-2 rounded-full bg-[rgba(16,185,129,0.1)] text-[var(--success)]" title="Online">
                  <CheckCircle2 size={20} />
                </span>
              </td>
            </tr>
            <tr className="hover:bg-[rgba(255,255,255,0.02)] transition-colors">
              <td className="p-5">
                <div className="font-extrabold text-lg">Bus Stop 42</div>
                <div className="text-sm font-semibold text-[#f59e0b] mt-1">ID: SCR-2204</div>
              </td>
              <td className="p-5 font-medium text-muted">Metro Transit</td>
              <td className="p-5 w-48">
                <div className="flex items-center justify-between mb-1 text-sm font-bold">
                   <span className="text-[#f59e0b]">45%</span>
                </div>
                <div className="w-full bg-[rgba(255,255,255,0.05)] h-2.5 rounded-full overflow-hidden">
                  <div className="bg-[#f59e0b] h-full rounded-full shadow-[0_0_10px_#f59e0b]" style={{ width: '45%' }}></div>
                </div>
              </td>
              <td className="p-5 font-extrabold text-2xl text-right text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">$850</td>
              <td className="p-5 text-center">
                <span className="inline-flex items-center justify-center p-2 rounded-full bg-[rgba(245,158,11,0.1)] text-[#f59e0b]" title="Warning">
                  <CheckCircle2 size={20} />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
