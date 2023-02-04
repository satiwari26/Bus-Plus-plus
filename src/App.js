import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {Routes, Route} from 'react-router-dom';
import Topbar from './scenes/global/Topbar.js';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard/Index.jsx';
import ProfileForm from './scenes/contacts/ProfileForm.js';
/*import Team from './scenes/team';
import Invoice from './scenes/invoices';
import Bar from './scenes/bar';
import Line from './scenes/line';
import Pie from './scenes/pie';
import FAQ from './scenes/faq';
import Geography from './scenes/geaography';
import Calendar from "./scenes/calendar";*/

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
        {/*<Route path = "/team" element = {<Team/>}/>
        <Route path = "/contacts" element = {<Contacts/>}/>
        <Route path = "/invoices" element = {<Invoices/>}/>
        <Route path = "/bar" element = {<Bar/>}/>
        <Route path = "/pie" element = {<Pie/>}/>
        <Route path = "/line" element = {<Line/>}/>
        <Route path = "/faq" element = {<FAQ/>}/>
        <Route path = "/geography" element = {<Geography/>}/>
        <Route path = "/calendar" element = {<Calendar/>}/>*/}

      </Routes>
      </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
