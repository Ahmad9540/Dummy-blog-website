import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RedirectOnRefresh = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    
    const navType = window.performance?.getEntriesByType("navigation")[0]?.type;

    if (navType === "reload" && location.pathname !== "/") {
      navigate("/", { replace: true }); 
    }
  }, [location, navigate]);

  return null;
};

export default RedirectOnRefresh;
