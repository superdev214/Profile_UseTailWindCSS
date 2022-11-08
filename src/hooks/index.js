import { useEffect, useState } from "react";

export const useGlobalVariables = () => {
  const [activeNavItem, setClassActive] = useState("Home");
  return { 
    activeNavItem, setClassActive,
  };
};