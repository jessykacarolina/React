import React from 'react';
import './Home.css';
import { Grid, Paper, Button } from '@material-ui/core'
import { Box } from '@mui/material'

let nome = 'Jay Karol'

function Home() {
    return (
        <>
            {/* <Paper>
                <Box p={2}>
                    <Box display='flex' justifyContent='center'>
                        <h1>Meu Título</h1>
                    </Box>
                    <img src="https://i.pinimg.com/originals/b5/2c/81/b52c81ebca353aaea2cf999b32fb1dbf.jpg" alt="Caveira" style={{width: "100%", height: "100%"}}/>
                    <Box display="flex" justifyContent="center" p={2}>
                        <Button variant='contained' color="primary">Texto 1</Button>
                        <Button variant='contained' color="secondary">Texto 2</Button>
                    </Box>


            </Box>
            </Paper> */}
        </>
    );
}

export default Home;