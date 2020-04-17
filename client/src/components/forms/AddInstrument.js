import React, { Fragment, useState } from 'react'

import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';

import RemoveArtist from '../buttons/RemoveArtist'
import DisplayCard from '../cards/DisplayCard'



const AddInstrument = () => {

  

  return (
    <Container>

          <TextField id="outlined-basic" label="year" variant="outlined" />
          <TextField id="outlined-basic" label="Brand" variant="outlined" />
          <TextField id="outlined-basic" label="Type" variant="outlined" />
          <TextField id="outlined-basic" label="Price" variant="outlined" />
          <TextField id="outlined-basic" label="Artist" variant="outlined" />

      
    </Container>
  )
}

export default AddInstrument
