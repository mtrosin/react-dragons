import { styled } from '@mui/material/styles';
import { Box, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SimpleDateTime from 'react-simple-timestamp-to-date';
import api from '../../services/api';

function ShowDragon() {
    const { id } = useParams()
    const [dense, setDense] = useState()
    const [dragon, setDragon] = useState()

    const Demo = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
    }));
    
    useEffect(() => {
        api
          .get(`/dragons/${id}`)
          .then((dragon) => setDragon(dragon.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);

      return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                        {dragon?.name}
                    </Typography>
                    <Demo>
                        <List dense={dense}>
                            <ListItem>
                                <ListItemText
                                    primary="ID: "
                                    secondary={dragon?.id}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Name: "
                                    secondary={dragon?.name}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Type: "
                                    secondary={dragon?.type}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Histories: "
                                    secondary={dragon?.histories}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Created at: "
                                    secondary={(<SimpleDateTime dateFormat="DMY" dateSeparator="/"  timeSeparator=":">{dragon?.createdAt}</SimpleDateTime>)}
                                />
                            </ListItem>
                        </List>
                    </Demo>
                </Grid>
                </Grid>

            </Box>
        </div>
      )
}

export default ShowDragon