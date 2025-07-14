  import React from 'react';
  import NavbarMain from './assets/components/navbar/navbarMain';
  import HeroMain from './assets/components/herosection/HeroMian';
  import SubheroSection from './assets/components/herosection/SubheroSection';
  import AboutMeMain from './assets/components/AboutSection/AboutMeMain';
  import HelperSection from './assets/components/HelperSection';
  import SkillMain from './assets/components/SkillSection/SkillMain';
  import SubSkillSection from './assets/components/SkillSection/SubSkillSection';  
  import ExperienceMain from './assets/components/ExperienceSection/ExperienceMain';
import ProjectMain from './assets/components/ProjectSection/ProjectMain';
import ContactMeMain from './assets/components/ContactsSection/ContactMeMain';
import FooterMain from './assets/components/Footer/FooterMain';


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