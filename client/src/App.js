import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import leanbean from './images/leanbean.png';
import useStyles from './styles';

const App = () => {
    const styleClasses = useStyles();

    return (
        <Container maxidth="lg">
            <AppBar className={ styleClasses.appBar } position="static" color="inherit">
                <Typography className={ styleClasses.heading } variant="h2" align="center">LeanBean</Typography>
                <img className={ styleClasses.image } src={leanbean} alt="leanbean" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;
