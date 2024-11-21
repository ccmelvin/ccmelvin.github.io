import { useEffect } from 'react';

const usePageLeave = (onExitIntent: () => void) => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Check if the mouse is near the top of the window
      if (event.clientY < 50) {
        onExitIntent();
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [onExitIntent]);
};

export default usePageLeave;
