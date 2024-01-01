import { useEffect, useState } from "react";
import "./App.css";
import MainLayout from "./Layouts/MainLayout";
import Spinner from "./components/Spinner/Spinner";

function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  if (loader) {
    return <Spinner />;
  }

  return (
    <>
      <MainLayout />
    </>
  );
}

export default App;
