import { useState } from 'react';
import { MapPin, Monitor, Clock, UploadCloud, CheckCircle2, ArrowRight, ArrowLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTilt } from '../hooks/useTilt';
import { useToast } from '../hooks/useToast';

const ScreenCard = ({ screen, onClick }: any) => {
  const tiltRef = useTilt();
  return (
    <div ref={tiltRef as any} onClick={onClick} className="p-5 md:p-6 border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] backdrop-blur-md rounded-2xl md:rounded-3xl cursor-pointer hover:border-[var(--accent-primary)] hover:bg-[rgba(168,85,247,0.05)] transition-all duration-300 group relative overflow-hidden shadow-lg">
      <div className={`absolute top-4 right-4 text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-full tracking-widest uppercase ${screen.tag === 'Premium' ? 'bg-[var(--accent-primary)] text-white shadow-[0_0_10px_rgba(168,85,247,0.4)]' : 'bg-[rgba(255,255,255,0.1)] text-white'}`}>
        {screen.tag}
      </div>
      <h3 className="text-lg md:text-xl font-bold mb-2 pr-20 text-white tracking-tight group-hover:text-[var(--accent-primary)] transition-colors">{screen.name}</h3>
      <p className="text-xs md:text-sm text-[rgba(255,255,255,0.5)] mb-6">{screen.res}</p>
      <div className="flex items-end gap-1">
        <span className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">{screen.price}</span>
        <span className="text-[rgba(255,255,255,0.4)] text-xs md:text-sm pb-1">/ slot</span>
      </div>
    </div>
  );
};

const CampaignBuilder = () => {
  const [step, setStep] = useState(1);
  const [duration, setDuration] = useState('10 Seconds');
  const navigate = useNavigate();
  const toast = useToast();

  const handleNext = () => setStep(s => Math.min(s + 1, 4));
  const handlePrev = () => setStep(s => Math.max(s - 1, 1));
  const handleSubmit = () => {
    toast('Campaign Launched Successfully!', 'success');
    navigate('/');
  };

  return (
    <div className="animate-fade-in max-w-6xl mx-auto px-4 md:px-0">
      
      {/* Premium Header */}
      <div className="mb-6 md:mb-10 mt-2 md:mt-4 text-center md:text-left">
        <h1 className="text-2xl md:text-4xl font-extrabold mb-2 text-white drop-shadow-lg tracking-tight">Create Campaign</h1>
        <p className="text-sm md:text-base text-[rgba(255,255,255,0.6)]">Target your audience precisely, block by block.</p>
      </div>

      {/* Mobile Progress Bar (Sleek) */}
      <div className="md:hidden mb-6">
        <div className="flex justify-between items-end mb-3">
          <span className="text-[var(--accent-primary)] font-bold text-xs uppercase tracking-widest">Step {step} of 4</span>
          <span className="text-white font-bold text-sm">{['Location', 'Screen', 'Slots', 'Creative'][step-1]}</span>
        </div>
        <div className="h-2 bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden border border-[rgba(255,255,255,0.05)]">
          <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" style={{ width: `${(step / 4) * 100}%` }}></div>
        </div>
      </div>

      {/* Desktop Progress Bar */}
      <div className="mobile-hide flex items-center justify-between mb-12 relative px-4">
        <div className="absolute left-10 right-10 top-1/2 h-1.5 bg-[rgba(255,255,255,0.05)] -z-10 rounded-full"></div>
        <div 
          className="absolute left-10 top-1/2 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 -z-10 rounded-full transition-all duration-700 ease-in-out shadow-[0_0_15px_rgba(168,85,247,0.5)]"
          style={{ width: `calc(${((step - 1) / 3) * 100}% - 2.5rem)` }}
        ></div>
        
        {[1, 2, 3, 4].map((num, idx) => {
          const labels = ['Targeting Area', 'Digital Screen', 'Time & Budget', 'Visual Creative'];
          const isActive = step >= num;
          const isCurrent = step === num;
          
          return (
            <div key={num} className="flex flex-col items-center gap-3">
              <div 
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold border-4 transition-all duration-500 ${
                  isActive 
                    ? 'bg-[var(--bg-dark)] border-[var(--accent-primary)] text-[var(--accent-primary)] shadow-[0_0_20px_rgba(168,85,247,0.4)] scale-110' 
                    : 'bg-[var(--bg-dark)] border-[rgba(255,255,255,0.1)] text-[rgba(255,255,255,0.3)]'
                }`}
              >
                {step > num ? <CheckCircle2 size={24} className="animate-fade-in" /> : num}
              </div>
              <span className={`text-sm font-bold transition-colors duration-300 ${isCurrent ? 'text-white' : isActive ? 'text-[rgba(255,255,255,0.7)]' : 'text-[rgba(255,255,255,0.3)]'}`}>
                {labels[idx]}
              </span>
            </div>
          );
        })}
      </div>

      {/* Main Content Area - Beautiful Glass Panel */}
      <div className="glass-panel p-5 md:p-10 min-h-[450px] flex flex-col relative overflow-hidden rounded-[24px] md:rounded-[40px] shadow-2xl border border-[rgba(255,255,255,0.1)]">
        
        {/* Subtle background glow based on step */}
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-[var(--accent-primary)] opacity-10 blur-[80px] pointer-events-none transition-all duration-1000"
             style={{ transform: `translate(${(step-1)*20}%, ${(step-1)*10}%)` }}></div>

        {step === 1 && (
          <div className="animate-fade-in flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-white tracking-tight flex items-center gap-3">
              <MapPin className="text-[var(--accent-primary)] w-6 h-6 md:w-8 md:h-8" />
              Select Location
            </h2>
            
            <div className="flex gap-8 flex-col md:flex-row">
              <div className="flex-1 flex flex-col gap-3 md:gap-4">
                {[
                  { name: 'Downtown Commercial', traffic: '15k daily', desc: 'High business foot traffic.' },
                  { name: 'Main Street Mall', traffic: '25k daily', desc: 'Shoppers and weekend crowds.' },
                  { name: 'University District', traffic: '18k daily', desc: 'Students and young adults.' },
                ].map((area) => (
                  <div key={area.name} onClick={() => { setStep(2); toast('Area selected: ' + area.name, 'success'); }} className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(168,85,247,0.05)] hover:border-[var(--accent-primary)] cursor-pointer transition-all duration-300 group flex items-center justify-between shadow-lg">
                    <div>
                       <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-base md:text-lg font-bold text-white group-hover:text-[var(--accent-primary)] transition-colors">{area.name}</h3>
                          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded-full text-white">{area.traffic}</span>
                       </div>
                       <p className="text-xs md:text-sm text-[rgba(255,255,255,0.5)]">{area.desc}</p>
                    </div>
                    <ChevronRight className="text-[rgba(255,255,255,0.2)] group-hover:text-[var(--accent-primary)] transition-colors" size={24} />
                  </div>
                ))}
              </div>
              
              {/* Premium Map - Desktop Only */}
              <div className="mobile-hide flex-1 border border-[rgba(255,255,255,0.1)] rounded-[30px] bg-[rgba(0,0,0,0.4)] relative overflow-hidden flex items-center justify-center shadow-inner">
                 <div className="absolute inset-0 radar-sweep opacity-20 border-r-2 border-[var(--accent-primary)] rounded-full mix-blend-screen" style={{ transformOrigin: 'center' }}></div>
                 <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                 <div className="relative w-64 h-64 border border-[rgba(255,255,255,0.1)] rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(168,85,247,0.1)]">
                    <div className="absolute w-48 h-48 border border-[rgba(255,255,255,0.1)] rounded-full"></div>
                    <div className="absolute w-32 h-32 border border-[rgba(168,85,247,0.3)] rounded-full"></div>
                    <div className="absolute w-16 h-16 bg-[rgba(168,85,247,0.2)] rounded-full flex items-center justify-center backdrop-blur-md border border-[var(--accent-primary)] shadow-[0_0_30px_rgba(168,85,247,0.4)] animate-pulse">
                       <MapPin className="text-[var(--accent-primary)]" size={24} />
                    </div>
                 </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-fade-in flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-white tracking-tight flex items-center gap-3">
               <Monitor className="text-[var(--accent-secondary)] w-6 h-6 md:w-8 md:h-8" />
               Available Screens
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {[
                { name: 'Corner Billboard A', price: '$0.50', res: '1080x1920 HD', tag: 'Premium' },
                { name: 'Bus Stop Display', price: '$0.20', res: '1080x1920 HD', tag: 'Standard' },
                { name: 'Mall Entrance Vertical', price: '$0.75', res: '4K Ultra', tag: 'Premium' },
                { name: 'Subway Station Board', price: '$0.40', res: '1080x1920 HD', tag: 'Standard' }
              ].map(screen => (
                <ScreenCard key={screen.name} screen={screen} onClick={() => { setStep(3); toast('Screen selected: ' + screen.name, 'success'); }} />
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-fade-in flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-white tracking-tight flex items-center gap-3">
               <Clock className="text-[var(--success)] w-6 h-6 md:w-8 md:h-8" />
               Time & Budget
            </h2>
            <div className="space-y-8 md:space-y-10 max-w-xl">
              
              <div>
                <label className="block text-xs md:text-sm font-bold mb-3 md:mb-4 uppercase tracking-widest text-[rgba(255,255,255,0.5)]">Duration per slot</label>
                <div className="flex flex-col md:flex-row gap-3 bg-[rgba(255,255,255,0.05)] p-2 rounded-2xl border border-[rgba(255,255,255,0.1)]">
                  {['5 Seconds', '10 Seconds', '15 Seconds'].map((dur) => (
                    <button key={dur} onClick={() => setDuration(dur)} className={`flex-1 py-3 text-sm md:text-base font-bold rounded-xl transition-all duration-300 ${duration === dur ? 'bg-[var(--accent-primary)] text-white shadow-[0_4px_15px_rgba(168,85,247,0.4)] scale-[1.02]' : 'text-[rgba(255,255,255,0.6)] hover:bg-[rgba(255,255,255,0.05)] hover:text-white'}`}>{dur}</button>
                  ))}
                </div>
              </div>
              
              <div className="p-5 md:p-6 bg-[rgba(255,255,255,0.05)] rounded-2xl border border-[rgba(255,255,255,0.1)]">
                <div className="flex justify-between items-end mb-4">
                   <label className="block text-xs md:text-sm font-bold uppercase tracking-widest text-[rgba(255,255,255,0.5)]">Daily Frequency</label>
                   <span className="text-xl md:text-2xl font-bold text-white bg-[rgba(255,255,255,0.1)] px-3 py-1 rounded-lg border border-[rgba(255,255,255,0.1)]">30 Plays</span>
                </div>
                <input type="range" min="10" max="100" defaultValue="30" className="w-full accent-[var(--accent-primary)] h-2 bg-[rgba(255,255,255,0.1)] rounded-full appearance-none cursor-pointer" />
                <div className="flex justify-between mt-2 text-xs font-semibold text-[rgba(255,255,255,0.3)]">
                   <span>10 min</span>
                   <span>100 max</span>
                </div>
              </div>
              
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[rgba(16,185,129,0.15)] to-[rgba(16,185,129,0.05)] border border-[rgba(16,185,129,0.3)] flex justify-between items-center shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                <div>
                  <span className="text-sm md:text-base font-bold text-[var(--success)] block mb-1">Estimated Daily Cost</span>
                  <span className="text-xs text-[rgba(255,255,255,0.5)]">Based on screen & frequency</span>
                </div>
                <span className="text-4xl md:text-5xl font-extrabold text-[var(--success)] drop-shadow-md">$15.00</span>
              </div>

            </div>
          </div>
        )}

        {step === 4 && (
          <div className="animate-fade-in flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-white tracking-tight flex items-center gap-3">
               <UploadCloud className="text-[#f59e0b] w-6 h-6 md:w-8 md:h-8" />
               Upload Creative
            </h2>
            <div onClick={() => toast('Opening file browser...', 'info')} className="border-2 border-dashed border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.02)] rounded-[24px] md:rounded-[32px] p-10 md:p-20 text-center flex flex-col items-center justify-center cursor-pointer hover:border-[var(--accent-primary)] hover:bg-[rgba(168,85,247,0.05)] transition-all duration-300 group shadow-inner">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-500 border border-[rgba(255,255,255,0.1)]">
                <UploadCloud className="w-8 h-8 md:w-10 md:h-10 text-[rgba(255,255,255,0.6)] group-hover:text-[var(--accent-primary)] transition-colors" strokeWidth={2} />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 text-white">Drag & Drop Visual Asset</h3>
              <p className="text-xs md:text-sm text-[rgba(255,255,255,0.4)] mb-6">High-Res MP4, JPG, PNG (Max 50MB)</p>
              <button className="bg-[rgba(255,255,255,0.1)] hover:bg-white hover:text-black text-white px-6 py-2 rounded-full text-sm font-bold transition-all border border-[rgba(255,255,255,0.2)]">Browse Files</button>
            </div>
          </div>
        )}

        {/* Navigation Footer */}
        <div className="mt-8 pt-6 border-t border-[rgba(255,255,255,0.1)] flex justify-between items-center relative z-10">
          <button 
            className="btn-secondary px-4 py-2 text-sm md:text-base" 
            onClick={handlePrev}
            disabled={step === 1}
            style={{ opacity: step === 1 ? 0 : 1, pointerEvents: step === 1 ? 'none' : 'auto' }}
          >
            <ArrowLeft size={16} /> <span className="hidden sm:inline">Back</span>
          </button>
          
          {step < 4 ? (
            <button className="btn-primary px-8 py-2 md:py-3 text-sm md:text-base font-bold shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:scale-[1.02]" onClick={handleNext}>
              Continue <ArrowRight size={18} />
            </button>
          ) : (
            <button className="btn-primary bg-[var(--success)] px-8 py-2 md:py-3 text-sm md:text-base font-bold shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:scale-[1.02]" onClick={handleSubmit} style={{ background: 'var(--success)' }}>
              Launch Campaign <ArrowRight size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CampaignBuilder;
