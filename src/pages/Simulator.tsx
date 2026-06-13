import { useState, useEffect } from 'react';
import { Smartphone, Zap, MapPin } from 'lucide-react';

const MOCK_ADS = [
  {
    id: 1,
    title: "Morning Brew Special",
    advertiser: "Joe's Coffee",
    bg: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    color: "#f59e0b",
    duration: 5000
  },
  {
    id: 2,
    title: "Weekend Sale - 50% OFF",
    advertiser: "Urban Outfit",
    bg: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=80",
    color: "#a855f7",
    duration: 5000
  },
  {
    id: 3,
    title: "Fresh Local Produce",
    advertiser: "City Market",
    bg: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
    color: "#10b981",
    duration: 5000
  }
];

const Simulator = () => {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [retargetingActive, setRetargetingActive] = useState(false);

  useEffect(() => {
    const currentAd = MOCK_ADS[currentAdIndex];
    
    // Simulate retargeting ping after 1.5 seconds
    const pingTimer = setTimeout(() => {
      setRetargetingActive(true);
    }, 1500);

    const nextAdTimer = setTimeout(() => {
      setRetargetingActive(false);
      setCurrentAdIndex((prev) => (prev + 1) % MOCK_ADS.length);
    }, currentAd.duration);

    return () => {
      clearTimeout(pingTimer);
      clearTimeout(nextAdTimer);
    };
  }, [currentAdIndex]);

  const ad = MOCK_ADS[currentAdIndex];

  return (
    <div className="flex gap-16 h-full items-center justify-center animate-fade-in max-w-6xl mx-auto mobile-col mobile-no-center">
      
      {/* The Digital Screen Simulator */}
      <div className="flex flex-col items-center">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-extrabold flex items-center gap-2 justify-center">
             <MapPin className="text-[var(--accent-primary)]" /> Downtown Ave. Screen
          </h2>
          <p className="text-muted tracking-widest uppercase text-sm mt-1 font-semibold flex items-center justify-center gap-2">
             ID: SCR-1042 <span className="w-2 h-2 rounded-full bg-[var(--success)] shadow-[0_0_10px_var(--success)] animate-pulse"></span> Live
          </p>
        </div>
        
        <div className="relative w-[380px] h-[680px] bg-black rounded-3xl border-[8px] border-[#111] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),0_0_50px_rgba(168,85,247,0.1)] overflow-hidden">
          {/* Bezel inner shadow */}
          <div className="absolute inset-0 border-2 border-white/5 rounded-2xl pointer-events-none z-20 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]"></div>
          
          {/* Ad Content */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 z-0 scale-105"
            style={{ backgroundImage: `url(${ad.bg})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/10"></div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-10 z-10 flex flex-col items-center text-center animate-fade-in" key={ad.id}>
            <div 
              className="px-5 py-1.5 rounded-full text-xs font-extrabold tracking-widest uppercase mb-6 shadow-2xl"
              style={{ backgroundColor: ad.color, color: '#fff', boxShadow: `0 4px 20px ${ad.color}80` }}
            >
              {ad.advertiser}
            </div>
            <h1 className="text-4xl font-extrabold text-white mb-4 leading-tight drop-shadow-2xl">{ad.title}</h1>
            <div className="w-20 h-1.5 mt-4 rounded-full" style={{ backgroundColor: ad.color, boxShadow: `0 0 15px ${ad.color}` }}></div>
          </div>

          {/* Progress bar at the top */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-black/50 z-10">
            <div 
              className="h-full bg-white transition-all ease-linear shadow-[0_0_10px_white]"
              style={{ width: '100%', transitionDuration: `${ad.duration}ms` }}
              key={`progress-${ad.id}`}
            ></div>
          </div>
        </div>
        
        <div className="mt-8 w-32 h-6 bg-gradient-to-b from-[#222] to-[#0a0a0a] rounded-t-xl shadow-2xl border-x border-t border-white/10"></div>
        <div className="w-56 h-3 bg-gradient-to-b from-[#111] to-[#000] rounded-full mt-0 shadow-2xl border border-white/10"></div>
      </div>

      {/* Retargeting Simulation */}
      <div className="w-[380px] flex flex-col gap-6 pl-12 border-l border-[rgba(255,255,255,0.05)]">
        <div className="flex items-center gap-4 mb-2">
           <div className="p-3 bg-[rgba(168,85,247,0.1)] rounded-2xl border border-[rgba(168,85,247,0.3)]">
              <Zap size={28} className="text-[var(--accent-primary)]" />
           </div>
           <div>
              <h3 className="text-2xl font-extrabold">AdLoop AI</h3>
              <p className="text-sm text-muted font-semibold tracking-wide uppercase">Geofencing Engine</p>
           </div>
        </div>
        
        <p className="text-[15px] text-muted bg-[rgba(255,255,255,0.02)] p-5 rounded-2xl leading-relaxed border border-[rgba(255,255,255,0.05)]">
          When an ad plays on the screen, AdLoop automatically retargets mobile devices within a 50m radius, creating a multi-channel impression.
        </p>

        <div className={`mt-4 p-6 rounded-3xl border-2 transition-all duration-700 relative overflow-hidden ${retargetingActive ? 'border-[var(--accent-primary)] bg-[rgba(168,85,247,0.05)] shadow-[0_0_40px_rgba(168,85,247,0.15)]' : 'border-[rgba(255,255,255,0.05)] bg-[rgba(0,0,0,0.3)]'}`}>
          {retargetingActive && (
             <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-primary)] opacity-20 blur-3xl rounded-full"></div>
          )}
          
          <div className="flex items-center gap-4 mb-6">
            <div className={`p-3 rounded-xl transition-colors duration-500 ${retargetingActive ? 'bg-[rgba(168,85,247,0.2)] text-[var(--accent-primary)]' : 'bg-[rgba(255,255,255,0.05)] text-muted'}`}>
              <Smartphone size={24} />
            </div>
            <div>
               <span className="font-bold text-lg block text-white">Nearby Device</span>
               <span className="text-xs font-semibold text-muted tracking-widest uppercase">Target Acquired</span>
            </div>
          </div>
          
          {retargetingActive ? (
            <div className="bg-[rgba(10,15,25,0.9)] p-5 rounded-2xl border border-[rgba(255,255,255,0.1)] shadow-2xl animate-fade-in relative z-10 backdrop-blur-md">
              <div className="flex items-center justify-between mb-3">
                 <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-md flex items-center justify-center bg-gradient-to-br from-white to-gray-300 shadow-[0_0_10px_white]">
                       <Zap size={10} className="text-black" />
                    </span>
                    <p className="text-[10px] font-extrabold text-[var(--accent-primary)] tracking-widest uppercase animate-pulse">Notification</p>
                 </div>
                 <span className="text-[10px] text-muted font-semibold">Just now</span>
              </div>
              <p className="text-base font-bold text-white mb-1">{ad.title}</p>
              <p className="text-sm font-medium" style={{ color: ad.color }}>Tap for directions to {ad.advertiser}</p>
            </div>
          ) : (
            <div className="bg-[rgba(0,0,0,0.4)] p-5 rounded-2xl border border-dashed border-[rgba(255,255,255,0.1)] opacity-60 flex flex-col items-center justify-center h-[120px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent opacity-10 radar-sweep blur-md w-[200%] h-[200%] -top-[50%] -left-[50%]"></div>
              <Zap size={24} className="text-[var(--accent-primary)] mb-2 opacity-30 animate-pulse" />
              <p className="text-sm font-semibold text-[rgba(255,255,255,0.4)] text-center tracking-widest uppercase">Scanning Area...</p>
            </div>
          )}
        </div>
        
      </div>

    </div>
  );
};

export default Simulator;
