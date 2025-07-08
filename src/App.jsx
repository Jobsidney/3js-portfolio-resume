import {
  Loader,
  NavBar,
  Sidebar,
  Hero,
  About,
  TechStack,
  Projects,
  Testimonials,
  Footer,
  Contact,
} from "./sections";

const App = () => {
  return (
    <div className="bg-black-100">
      <Loader />
      <div className="content-wrapper h-full overflow-y-auto">
        <NavBar />
        <Sidebar />
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
