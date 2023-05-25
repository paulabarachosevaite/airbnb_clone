"use client";
// Fixes the dehydration error
import {useEffect, useState} from "react";

interface ClientOnlyProps {
  children: React.ReactNode;
}

// This component will be used to check if other components are
//use client. We will wrap use client component inside this component
const ClientOnly: React.FC<ClientOnlyProps> = ({children}) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;
  return <>{children}</>;
};

export default ClientOnly;
