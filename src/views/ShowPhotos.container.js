import React from 'react'
import _ from 'lodash'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'fixed',
    height: '90%',
    width: '100%',
    boxSizing: 'border-box',
    overflowY: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default (props) => {
  const classes = useStyles()
  const { id } = useParams()
  const { data } = props

  const selectedImage = _.filter(data, x => x.id.toString() === id)

  return (
    <div className={classes.container}>
      {
        selectedImage.length !== 0
          ?
            <div>
              <img alt={id} src={selectedImage[0].url} />
              <p>{selectedImage[0].title}</p>
            </div>
          : 
            <div>
              <p>Sin datos para mostrar</p>
            </div>
      }
    </div>
  )
}
