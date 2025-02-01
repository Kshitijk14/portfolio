"use client";

import { useEffect, useState } from 'react';

const SafeHydrate: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {!isClient ? null : children}
    </>
  );
};

export default SafeHydrate;
