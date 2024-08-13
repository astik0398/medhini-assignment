// App.js
import React from 'react';
import styled from 'styled-components';
import poster from './assets/Be Athah x Website Design_page-0001.jpg'
import logo from './assets/logo-removebg-preview.png'
import image_01 from './assets/Be_Athah_x_Website_Design_page-0001_01-removebg-preview.png'
import image_02 from './assets/Be_Athah_x_Website_Design_page-0001_02-removebg-preview.png'
import image_03 from './assets/Be_Athah_x_Website_Design_page-0001_03-removebg-preview.png'
import image_04 from './assets/Be_Athah_x_Website_Design_page-0001_04-removebg-preview.png'
import image_05 from './assets/Be_Athah_x_Website_Design_page-0001_05-removebg-preview.png'
import image_06 from './assets/Be_Athah_x_Website_Design_page-0001_06-removebg-preview.png'
import image_07 from './assets/Be_Athah_x_Website_Design_page-0001_07-removebg-preview.png'
import image_08 from './assets/Be_Athah_x_Website_Design_page-0001_08-removebg-preview.png'

const App = () => {
  return (
    <Container>
      <Header>
        <Logo><img width={'200px'} src={logo}/></Logo>
        <Nav>
          <NavLink href="#">About Us</NavLink>
          <NavLink href="#">Science</NavLink>
          <NavLink href="#">Sign Up</NavLink>
        </Nav>
      </Header>

      <HeroSection>
        <img width={'100%'} src={poster}/>
      </HeroSection>

      <ContentSection>
        <SectionTitle style={{color:'#854e39'}}>Calm Level Test</SectionTitle>
        <Description>
        Are you navigating through stressful times, unsure of its impact on your well-being?
Take a pause and explore your stress levels with our stress quiz. Each question offers a window into your inner
state, guiding you towards a clearer understanding of your wellness journey.
        </Description>
        <Button>Unwind and Assess</Button>
      </ContentSection>

      <ChakrasSection>
  <SectionTitle style={{color:'white'}}>The 7 Chakras</SectionTitle>
  
  <Description style={{width:'80%', marginBottom: '40px'}}>
    As you take a deep breath, feel the pure universal energy entering your body. It flows gently through your aligned chakras, from the crown at
    the top of your head to the root at the base of your spine. This serene flow creates a healthy aura around your mind, spirit, and body.
    <br />
    <p style={{marginBottom:'20px'}}>But the stress we encounter daily impacts all seven chakras. Click on each to explore and realign.</p>
  </Description>
  
  <ChakraIcons style={{position: 'relative', height: '400px', marginBottom: '40px', marginTop:'50px'}}>
    <img style={{position: 'absolute', top:'-20px', left:'50%', transform: 'translateX(-50%)'}} width={'150px'} src={image_01} />
    <img style={{position: 'absolute', top: '-30px', left:'60%'}} width={'150px'} src={image_02} />
    <img style={{position: 'absolute', top: '-20px', left:'30%'}} width={'150px'} src={image_03} />
    <img style={{position: 'absolute', top: '200px', left:'85%', border:'2px solid red'}} width={'150px'} src={image_04} />
    <img style={{position: 'absolute', top: '200px', left:'15%', border:'2px solid green'}} width={'150px'} src={image_05} />
    <img style={{position: 'absolute', top: '100px', left:'55%', border:'2px solid white'}} width={'150px'} src={image_06} />
    <img style={{position: 'absolute', top: '-180px', left:'50%',transform: 'translateX(-50%)', border:'2px solid yellow'}} width={'150px'} src={image_07} />
    <img style={{position: 'absolute', top:'100px', left:'50%', transform: 'translateX(-50%)', border:'2px solid blue'}} width={'150px'} src={image_08} />
  </ChakraIcons>

</ChakrasSection>


      <WaitlistSection>
        <SectionTitle style={{color:'#854e39'}}>Join the Waitlist</SectionTitle>
        <InputContainer>
          <EmailInput type="email" placeholder="Enter your email" />
          <SignUpButton>Sign Up</SignUpButton>
        </InputContainer>
      </WaitlistSection>

      <Footer>
        <FooterText>Made with ❤️ in India</FooterText>
        <FooterLinks>
          <FooterLink href="#">About Us</FooterLink>
          <FooterLink href="#">Blogs</FooterLink>
          <FooterLink href="#">Your Privacy</FooterLink>
          <FooterLink href="#">Terms & Conditions</FooterLink>
          <FooterLink href="#">Get in touch with us</FooterLink>
        </FooterLinks>
        <SocialLinks>
          {/* Add Social Media Icons Here */}
        </SocialLinks>
      </Footer>
    </Container>
  );
};

export default App;

const Container = styled.div`
  font-family: 'Arial, sans-serif';
  color: #543c33;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: #f7e4d4;
  height: 40px;
`;

const Logo = styled.h1`
  font-size: 24px;
  font-family: 'Cursive, sans-serif';
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #543c33;
  font-weight: bold;
`;

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroText = styled.h2`
  color: #fff;
  font-size: 28px;
  text-align: center;
`;

const ContentSection = styled.section`
  padding: 40px;
  text-align: center;
  background-color: #f7e4d4;
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  color: #d6c6ba;
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  line-height: 1.6;
  width: 50%;
  margin: auto;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #8c5c4c;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #543c33;
  }
`;

const ChakrasSection = styled.section`
  padding: 40px;
  text-align: center;
  background-color: #854e39;
  color: #f7e4d4;
`;

const ChakraIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
`;

const WaitlistSection = styled.section`
  padding: 40px;
  text-align: center;
  background-color: #f7e4d4;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

const EmailInput = styled.input`
  padding: 10px;
  border: 2px solid #8c5c4c;
  border-radius: 5px;
  font-size: 16px;
  width: 300px;
`;

const SignUpButton = styled(Button)`
  background-color: #8c5c4c;
  border: none;

  &:hover {
    background-color: #543c33;
  }
`;

const Footer = styled.footer`
  padding: 20px;
  background-color: #f7e4d4;
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: #543c33;
  font-size: 14px;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

