import { Grid } from "@mui/material"
import Advice from "./components/Advice"
import UserFinder from "./components/UserFinder"

function App() {
  return (
    <>
      <UserFinder />
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "10vh" }}
      >
        <Advice />
      </Grid>
    </>
  );
}

export default App;
