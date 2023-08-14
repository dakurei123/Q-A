'use client'

import Button from "@mui/material/Button/Button"
import { useRouter } from "next/navigation";
import { Container, Image } from 'react-bootstrap';

const Principal = (props: { isLogin: string; }) => {
    const router = useRouter()
    const isLogin = props.isLogin;
    console.log(isLogin);
    
    if (isLogin === 'false') {
        return (
            <Container style={{minWidth: 220}}>
                <Button onClick={() => router.push('/login')} variant="outlined" style={{ marginLeft: 20, color: '#fff', borderColor: '#fff' }}>Login</Button>
                <Button onClick={() => router.push('/signup')} variant="outlined" style={{ marginLeft: 10, color: '#fff', borderColor: '#fff' }}>Signup</Button>
            </Container>
        )
    }
    else if (isLogin === 'true') {
        return (
            <Container style={{minWidth: 220}}>
                <Image src="logo.jpg" roundedCircle style={{ marginLeft: 20, width: '60px', height: '60px' }} />
            </Container>
        )
    } else {
        return(
            <Container style={{minWidth: 220}}></Container>
        )
    }
}
export default Principal