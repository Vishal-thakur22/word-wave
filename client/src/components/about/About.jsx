
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://med-tips.com/wp-content/uploads/2019/01/Med-Tips-About.png);
    width: 100%;
    height: 480px;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h4">WORD WAVE</Typography>
                <Text variant="h5"><br />
                    Word Wave is a platform that allows users to share their thoughts and ideas through words.<br/>
                    Check out my GitHub for more projects and contributions.
                    
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/vishal-thakur22" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    Need something built or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/vishalthakur2_2" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        or send me an Email 
                        <Link href="vishalthakur220103@gmail.com" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;