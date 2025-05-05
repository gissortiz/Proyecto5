import { Grid } from "@mui/material"
import Advice from "./components/Advice"
import UserFinder from "./components/UserFinder"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <UserFinder />
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "10vh" }}
      >
        <Advice />
      </Grid>
    </ErrorBoundary>
  );
}

export default App;
