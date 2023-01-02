import { useEffect, useState } from "react";
import "./App.css";
import ContributorsList from "./components/contributors/ContributorsList";
import axios from "axios";
import Footer from "./components/Footer";

function App() {
  const [contributors, setContributors] = useState([]);

  const fetchItems = async () => {
    const result = await axios(
      `https://leaderboard-backend-production.up.railway.app/api/v1/leaderboard`
    );
    console.log(result.data);
    setContributors(result.data);
  };
  useEffect(() => {
    fetchItems();
    console.log(contributors);
  }, []);

  return (
    <div className="App">
      <div className="flex justify-center items-center">
        <ContributorsList contributors={contributors} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
