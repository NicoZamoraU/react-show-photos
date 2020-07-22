import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {
  useHistory,
  Switch,
  Route,
} from "react-router-dom";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { ShowPhotos } from './views'
import { Header } from './components'
import App from './App'
import './App.css';

const colorMode = 'dark'

const getPhotos = async (setData) => {
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')

    setData(data)
  } catch (error) {
    setData([])
  }
}

function Routes() {
  const history = useHistory()
  const [dataPhotos, setDataPhotos] = useState([])
  const [switchDarkMode, setDarkMode] = useState(false)

  useEffect(() => {
    getPhotos(setDataPhotos)
  }, [dataPhotos.length]);

  const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: ${colorMode})`);

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: !switchDarkMode ? 'light' : 'dark',
        },
      }),
    [prefersDarkMode, switchDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header
        switchDarkMode={switchDarkMode}
        setDarkMode={setDarkMode}
      />
      <Switch>
        <Route path="/detail/:id">
          <ShowPhotos data={dataPhotos} />
        </Route>
        <Route path="/">
          <App data={dataPhotos} history={history} />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default Routes;
