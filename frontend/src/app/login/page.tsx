'use client'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Image } from 'react-bootstrap';
import axiosClient from '@/api/axiosClient';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignIn() {
    const [error, setError] = React.useState('')
    const [isError, setIsError] = React.useState(false)
    const [open, setOpen] = React.useState(false)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        try {
            const response = await axiosClient.post('/login', {
                email: data.get('email'),
                password: data.get('password'),
            })
        } catch (error: any) {
            setError(
                error.response?.data?.error
            )
            setIsError(true)
            setOpen(true);
        }
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Image src='logo2.png' width={60} height={60}></Image>
                    <Typography component="h1" variant="h5">
                        Đăng nhập
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            error={isError}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            error={isError}
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Snackbar
                            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            message="I love snacks"
                            key={'top center'}
                            autoHideDuration={4000}
                        >
                            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                                {error}
                            </Alert>
                        </Snackbar>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Bạn chưa có tài khoản? Đăng ký thôi!
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Container>
            <Button onClick={async () => {
                try {
                    const response = await axiosClient.post('/product/search', {
                        pageIndex: 1,
                        pageSize: 10,
                    })
                } catch (error: any) {
                    setError(
                        ''
                    )
                    console.log(error);

                    setIsError(true)
                    setOpen(true);
                }
            }}>asd</Button>
        </ThemeProvider>
    );
}