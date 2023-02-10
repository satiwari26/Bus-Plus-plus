import {Box} from '@mui/material';
import Header from '../../components/Header';
import PopularPlaces from '../../components/PopularPlaces.js';
import {tokens} from '../../theme.js';
import { useTheme } from '@mui/material';


function PopularPlacesScenes() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box m='20px'>
    <Header title = 'Most visited and popular places' subtitle = "Places you might be interested in." />
    <Box height='75vh' border= {`1px solid ${colors.grey[100]}`} borderRadius = "4px">
    <PopularPlaces/>
    </Box>
    </Box>
  )
}

export default PopularPlacesScenes