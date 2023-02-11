import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {Routes, Route} from 'react-router-dom';
import Topbar from './scenes/global/Topbar.js';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard/Index.jsx';
import ProfileForm from './scenes/contacts/ProfileForm.js';
import FAQ from './scenes/FAQ/FAQ.js';
import ScanScene from "./scenes/Scan/ScanScene.js";
import PopularPlacesScenes from "./scenes/popularPlaces/PopularPlacesScenes";
import Rights from "./scenes/global/Rights";
//import Calendar from "./scenes/calendar/Calendar.js";
/*import Team from './scenes/team';
import Invoice from './scenes/invoices';
import Bar from './scenes/bar';
import Line from './scenes/line';
*/

function App() {

  const [theme, colorMode] = useMode();


  return (
    <ColorModeContext.Provider value = {colorMode}>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <div className="app">
    <Sidebar/>
      <main className="content">
      <Topbar />
      <Routes>
        <Route path = "/" element = {<Dashboard/>}/>
        <Route path = "/contacts" element = {<ProfileForm/>}/>
        <Route path = "/FAQ" element = {<FAQ/>}/>
        <Route path = "/Scan" element = {<ScanScene/>}/>
        <Route path = "/popularPlaces" element = {<PopularPlacesScenes/>}/>
        {/*<Route path = "/team" element = {<Team/>}/>
        <Route path = "/calendar" element = {<Calendar/>}/>
        <Route path = "/contacts" element = {<Contacts/>}/>
        <Route path = "/invoices" element = {<Invoices/>}/>
        <Route path = "/bar" element = {<Bar/>}/>
        <Route path = "/line" element = {<Line/>}/>
        <Route path = "/geography" element = {<Geography/>}/>
        */}

      </Routes>
      <Rights/>
      </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
