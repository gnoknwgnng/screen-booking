export const useToast = () => {
  return (message: string, type: 'success' | 'info' = 'info') => {
    const el = document.createElement('div');
    
    // Add styling for a premium toast
    const bg = type === 'success' ? 'rgba(16, 185, 129, 0.9)' : 'rgba(10, 15, 25, 0.95)';
    const border = type === 'success' ? 'rgba(16, 185, 129, 0.5)' : 'rgba(255, 255, 255, 0.1)';
    const shadow = type === 'success' ? '0 0 20px rgba(16, 185, 129, 0.4)' : '0 10px 40px rgba(0, 0, 0, 0.5)';
    
    el.style.position = 'fixed';
    el.style.bottom = '100px';
    el.style.left = '50%';
    el.style.transform = 'translateX(-50%) translateY(20px)';
    el.style.background = bg;
    el.style.color = 'white';
    el.style.padding = '12px 24px';
    el.style.borderRadius = '50px';
    el.style.boxShadow = shadow;
    el.style.zIndex = '9999';
    el.style.border = `1px solid ${border}`;
    el.style.fontWeight = '600';
    el.style.fontSize = '14px';
    el.style.backdropFilter = 'blur(10px)';
    el.style.opacity = '0';
    el.style.transition = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
    el.style.display = 'flex';
    el.style.alignItems = 'center';
    el.style.gap = '8px';
    
    el.innerHTML = `
      ${type === 'success' 
        ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>'
        : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>'
      }
      ${message}
    `;

    document.body.appendChild(el);
    
    // Trigger animation
    requestAnimationFrame(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateX(-50%) translateY(0)';
    });

    setTimeout(() => {
      el.style.opacity = '0';
      el.style.transform = 'translateX(-50%) translateY(-20px)';
      setTimeout(() => el.remove(), 400);
    }, 3000);
  };
};
