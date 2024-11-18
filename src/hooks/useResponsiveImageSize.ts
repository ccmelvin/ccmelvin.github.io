import { useState, useEffect } from 'react';

const useResponsiveImageSize = (src: string) => {
  const [style, setStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const updateImageSize = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      const img = new Image();
      img.src = src;

      img.onload = () => {
        const imageAspectRatio = img.width / img.height;
        const viewportAspectRatio = viewportWidth / viewportHeight;

        if (viewportAspectRatio > imageAspectRatio) {
          // Viewport is wider than the image, so fit by height
          setStyle({
            width: 'auto',
            height: '100vh',
          });
        } else {
          // Viewport is taller than the image, so fit by width
          setStyle({
            width: '100vw',
            height: 'auto',
          });
        }
      };
    };

    updateImageSize();
    window.addEventListener('resize', updateImageSize);

    return () => {
      window.removeEventListener('resize', updateImageSize);
    };
  }, [src]);

  return style;
};

export default useResponsiveImageSize;