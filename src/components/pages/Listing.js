import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

function Listing() {    
    const [dragons, setDragons] = useState();
    
    useEffect(() => {
        api
          .get("/dragons")
          .then((dragons) => setDragons(dragons.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);

      function Item(props) {
        const { sx, ...other } = props;
        return (
                <Box
                    sx={{
                        display: 'flex',
                        p: 1,
                        m: 1,
                        bgcolor: '#A52A2A',
                        color: 'grey.300',
                        border: '1px solid',
                        borderColor: 'grey.800',
                        borderRadius: 2,
                        fontSize: '0.875rem',
                        fontWeight: '700',
                        ...sx,
                    }}
                    {...other}
                />
        );
    }

    return(
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    p: 1,
                    m: 1,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                    justifyContent: 'center'
                }}
            >
                {dragons?.sort((a, b) => a.name.localeCompare(b.name)).map((dragon) => (
                    <Item>
                        <Link style={{ textDecoration: "none", color: "white" }} to={`/ShowDragon/${dragon.id}`}>
                            {dragon.name}
                        </Link>
                    </Item>
                ))}
            </Box>
        </>
    )
}

export default Listing