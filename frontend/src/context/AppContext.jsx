import { createContext, useState } from "react";

export const AppContext = createContext();

function AppProvider({ children }) {

  const [loading, setLoading] = useState(false);

  const [theme, setTheme] = useState("dark");

  const [user, setUser] = useState(null);

  const [services, setServices] = useState([]);

  const [portfolio, setPortfolio] = useState([]);

  const [testimonials, setTestimonials] = useState([]);

  const [faqs, setFaqs] = useState([]);

  const [pricingPlans, setPricingPlans] = useState([]);

  const toggleTheme = () => {

    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }

  };

  const contextValue = {
    loading,
    setLoading,

    theme,
    setTheme,
    toggleTheme,

    user,
    setUser,

    services,
    setServices,

    portfolio,
    setPortfolio,

    testimonials,
    setTestimonials,

    faqs,
    setFaqs,

    pricingPlans,
    setPricingPlans
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;