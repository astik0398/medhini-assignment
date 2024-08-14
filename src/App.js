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
import heart from './assets/heart.svg'
import './App.css'

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

      <ChakrasSection >
  <SectionTitle style={{color:'white'}}>The 7 Chakras</SectionTitle>
  
  <Description style={{width:'80%', marginBottom: '40px'}}>
    As you take a deep breath, feel the pure universal energy entering your body. It flows gently through your aligned chakras, from the crown at
    the top of your head to the root at the base of your spine. This serene flow creates a healthy aura around your mind, spirit, and body.
    <br />
    <p style={{marginBottom:'20px'}}>But the stress we encounter daily impacts all seven chakras. Click on each to explore and realign.</p>
  </Description>

  <div
  className='main-chakra'
      style={{
        position: "relative",
        width: "400px",
        height: "400px",
        margin: "0 auto",
       borderRadius:'50%'
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: "-30px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <img className='chakras' width={'120px'} height={'120px'} src={image_02}/>
      </div>
      <div
        style={{
          position: "absolute",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: "8%",
          right: "10px",
        }}
      >
        <img className='chakras' width={'120px'} height={'120px'} src={image_03}/>
      </div>
      <div
        style={{
          position: "absolute",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: "50%",
          right: "-30px",
          transform: "translateY(-50%)",
        }}
      >
        <img className='chakras' width={'150px'} height={'120px'} src={image_04}/>
      </div>
      <div
        style={{
          position: "absolute",
          width: "80px",
          height: "80px",
          backgroundColor: "#e3c3b5",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bottom: "5%",
          right: "10px",
        }}
      >
         <img className='chakras' width={'150px'} height={'120px'} src={image_05}/>
      </div>
      <div
        style={{
          position: "absolute",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bottom: "-30px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <img className='chakras' width={'150px'} height={'120px'} src={image_06}/>
      </div>
      <div
        style={{
          position: "absolute",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bottom: "5%",
          left: "10px",
        }}
      >
        <img className='chakras' width={'150px'} height={'120px'} src={image_07}/>
      </div>
      <div
        style={{
          position: "absolute",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: "50%",
          left: "-50px",
          transform: "translateY(-50%)",
        }}
      >
        <img className='chakras' width={'150px'} height={'120px'} src={image_08}/>
      </div>
      <div
        style={{
          position: "absolute",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: "8%",
          left: "10px",
        }}
      >
        <img className='chakras' width={'150px'} height={'120px'} src={image_03}/>
      </div>
      <div
        style={{
          position: "absolute",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <img width={'150px'} height={'120px'} src={image_01}/>
      </div>
    </div>

</ChakrasSection>


      <WaitlistSection>
        <SectionTitle style={{color:'#854e39'}}>Join the Waitlist</SectionTitle>
        <InputContainer>
          <EmailInput type="email" placeholder="Enter your email" />
          <SignUpButton>Sign Up</SignUpButton>
        </InputContainer>
        <p>That means if you order now.</p>
      </WaitlistSection>

      <hr/>
      <FooterContainer style={{display:'flex', justifyContent:'space-evenly'}}>
      <Logo><img width={'200px'} src={logo}/></Logo>
      <FooterRow>
        <FooterColumn>
          <ColumnTitle>Why Be Athah</ColumnTitle>
          <ColumnLink href="#">About Us</ColumnLink>
        </FooterColumn>
        <FooterColumn>
          <ColumnTitle>Resources</ColumnTitle>
          <ColumnLink href="#">Blogs</ColumnLink>
        </FooterColumn>
        <FooterColumn>
          <ColumnTitle>Company</ColumnTitle>
          <ColumnLink href="#">Your Privacy</ColumnLink>
          <ColumnLink href="#">Terms & Conditions</ColumnLink>
          <ColumnLink href="#">Get in touch with us</ColumnLink>
        </FooterColumn>
        <FooterColumn>
          <ColumnTitle>Follow Us: Be_Atha</ColumnTitle>
          <SocialIcons>
            <SocialIcon href="#">
              <i className="fab fa-facebook-f"></i>
            </SocialIcon>
            <SocialIcon href="#">
              <i className="fab fa-twitter"></i>
            </SocialIcon>
            <SocialIcon href="#">
              <i className="fab fa-youtube"></i>
            </SocialIcon>
            <SocialIcon href="#">
              <i className="fab fa-linkedin-in"></i>
            </SocialIcon>
            <SocialIcon href="#">
              <i className="fab fa-instagram"></i>
            </SocialIcon>
          </SocialIcons>
        </FooterColumn>
      </FooterRow>
    </FooterContainer>
      <hr/>

      <Footer>
        <FooterText style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'5px'}}>Made with <img  width={'15px'} src={heart}/> in India</FooterText>
        <SocialLinks>
        </SocialLinks>
        <FooterText>© Yauvanchakra Pvt. Ltd. All right reserved.</FooterText>
      </Footer>
    </Container>
  );
};

export default App;

const Container = styled.div`
  font-family: 'Roboto';
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
  font-family: 'Roboto';
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #543c33;
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
  width: 55%;
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

const FooterContainer = styled.footer`
  background-color: #d4c4b5;
  padding: 2rem;
  text-align: center;
`;

const Subtitle = styled.div`
  font-family: 'Serif';
  font-size: 0.875rem;
  color: #8b5d4a;
  margin-bottom: 2rem;
`;

const FooterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  gap: 50px;
`;

const FooterColumn = styled.div`
  flex: 1;
  min-width: 150px;
  margin-bottom: 1rem;
`;

const ColumnTitle = styled.h4`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 1rem;
  color: #8b5d4a;
  margin-bottom: 0.75rem;
`;

const ColumnLink = styled.a`
  display: block;
  font-family: 'Roboto';
  font-size: 0.875rem;
  color: #8b5d4a;
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: #8b5d4a;
  font-size: 1.5rem;
  margin: 0 0.5rem;
  text-decoration: none;

  &:hover {
    color: #5c3f34;
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

