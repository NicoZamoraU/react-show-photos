import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import _ from 'lodash'

import './App.css';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'fixed',
    height: '90%',
    width: '100%',
    boxSizing: 'border-box',
    overflowY: 'auto',
    justifyContent: 'center',
  },
  imageContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.down('768')]: {
      width: '400px',
    },
    [theme.breakpoints.up('768')]: {
      width: '550px',
    },
    [theme.breakpoints.up('1024')]: {
      width: '750px',
    },
  },
  image: {
    margin: 15,
    cursor: 'pointer',
  },
  text: {
    textAlign: 'center',
  },
}))

const goTo = (history, id) => {
  history.push(`/detail/${id}`)
}

const editTitle = (title) => _.slice(title, 0, 15)

const App = props => {
  const classes = useStyles()

  const { data, history } = props

  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        {
          data.length
            ? data.map((image, i) => (
                <div
                  key={i.toString()}
                  onClick={() => goTo(history, image.id)}
                  className={classes.image}
                >
                  <img alt={image.id} src={image.thumbnailUrl} />
                  <p className={classes.text}>{editTitle(image.title)}...</p>
                </div>
            ))
            : <div>Sin datos para mostrar</div>
        }
      </div>
    </div>
  )
}

export default App
