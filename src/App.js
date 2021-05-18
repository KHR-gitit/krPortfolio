import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <div className='dark:bg-indigo-600 dark:text-gray-200'>
      <Header/>
      <Hero/>
      <Portfolio/>
    </div>
  );
}

export default App;
