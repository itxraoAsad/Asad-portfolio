  import React from 'react';
  import NavbarMain from './components/navbar/navbarMain';
  import HeroMain from './components/herosection/HeroMian';
  import SubheroSection from './components/herosection/SubheroSection';
  import AboutMeMain from './components/AboutSection/AboutMeMain';
  import HelperSection from './components/HelperSection';
  import SkillMain from './components/SkillSection/SkillMain';
  import SubSkillSection from './components/SkillSection/SubSkillSection';  
  import ExperienceMain from './components/ExperienceSection/ExperienceMain';
import ProjectMain from './components/ProjectSection/ProjectMain';
import ContactMeMain from './components/ContactsSection/ContactMeMain';
import FooterMain from './components/Footer/FooterMain';


function App() {
  return (
    <main className='font-[josefin sans]'>
      <NavbarMain />
      <HeroMain />
      <SubheroSection />
      <AboutMeMain /> 
      <HelperSection/> 
      <SkillMain/> 
      <SubSkillSection/>
      <ExperienceMain/>
      <ProjectMain/>
      <ContactMeMain/>
      <FooterMain/>


    </main>
  );
}
export default App;