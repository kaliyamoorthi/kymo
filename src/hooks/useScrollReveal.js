import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    // Initial fetch of elements
    const handleReveal = () => {
      const revealElements = document.querySelectorAll('.reveal');
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
            }
          });
        },
        { threshold: 0.1 }
      );

      revealElements.forEach((el) => {
        // Disconnect if already observed to avoid duplicates
        revealObserver.observe(el);
      });
      
      return revealObserver;
    };

    let observer = handleReveal();

    // Since React might load components later, wait for them
    const domObserver = new MutationObserver(() => {
      observer.disconnect();
      observer = handleReveal();
    });

    domObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      domObserver.disconnect();
    };
  }, []);
}
