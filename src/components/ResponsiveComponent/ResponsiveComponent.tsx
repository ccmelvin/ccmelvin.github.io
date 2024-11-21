import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';

const ResponsiveComponent: React.FC = () => {
  const { width, height } = useWindowSize();

  return (
    <div>
      <h1>Window Size</h1>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>

      {width && width > 768 ? (
        <p>The window is wider than 768px. Displaying desktop layout.</p>
      ) : (
        <p>The window is narrower than 768px. Displaying mobile layout.</p>
      )}
    </div>
  );
};

export default ResponsiveComponent;
