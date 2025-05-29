
import { AppBar, Toolbar, styled, Button, Typography } from '@mui/material'; 
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';


const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
`;

const Container = styled(Toolbar)`
    justify-content: center;
    & > a {
        padding: 20px;
        color: #000;
        text-decoration: none;
    }
`
const Logo =styled(Typography)`
    font-size: 20px;
    font-weight: 600;
    color: #00BFFF;
    margin-right: 20px;
    text-decoration: none;
    margin-left: 40px;
    margin-top: 10px;
    margin-bottom: -40px;`

const Header = () => {

    const navigate = useNavigate();

    const logout = async () => navigate('/account');
        
    return (
        <Component>
             <Logo> Word Wave</Logo>
            <Container>
               
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>
                <Link to='/account'>LOGOUT</Link>
            </Container>
        </Component>
    )
}

export default Header;