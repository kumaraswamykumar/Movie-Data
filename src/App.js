import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Popular from "./pages/Popular/Popular";
import TopRated from "./pages/TopRated/TopRated";
import Upcoming from "./pages/Upcoming/Upcoming";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import SearchResults from "./pages/SearchResults/SearchResults";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/popular" element={<Popular />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/search" element={<SearchResults />} />

        {/* Redirect */}
        <Route path="*" element={<Navigate to="/popular" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
