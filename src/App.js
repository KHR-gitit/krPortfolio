import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Feature from './components/Feature'
import Skills from './components/Skills'

function App() {
  return (
    <div className='dark:bg-indigo-600 dark:text-gray-200'>
      <Header/>
      <Hero/>
      <Feature/>
      <Skills/>
      <Portfolio/>
    </div>
  );
}

export default App;
