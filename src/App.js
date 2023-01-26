import './App.css';
import InputWithDropDown from './components/InputWithDropDown';
import { useState, useEffect } from 'react';
import CardWithPopup from './components/CardWithPopup';
import Banner from './components/Banner';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [initialData, setInitialData] = useState([]);
  const [capsules, setCapsules] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('status');

  useEffect(() => {
    fetchCapsules()
  }, []);

  const searchCapsules = () => {
    let filteredResults = capsules.filter(capsule => capsule[filter].includes(input));
    setCapsules(filteredResults);
  }

  const fetchCapsules = async () => {
    const response = await fetch(`https://api.spacexdata.com/v3/capsules`);
    const capsuleData = await response.json();
    setCapsules(capsuleData);
    setInitialData(capsuleData);
  }

  const clearfilters = () => {
    setInput('')
    setFilter('')
    setCapsules(initialData);
  }

  return (
    <div className="App">
      <Header />
      <Banner />
      <div className='main'>
        <div className='input-wrapper m-4'>
          <InputWithDropDown input={input} setInput={setInput} filter={filter} setFilter={setFilter} searchCapsules={searchCapsules} />
          <button onClick={searchCapsules} className="ml-2 text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          <button onClick={clearfilters} className="ml-2 text-white right-2.5 bottom-2.5 bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">Clear All</button>
        </div>
        <div className='flex mt-12'>
          {capsules.map(capsule => <CardWithPopup capsule={capsule} />)}
          {capsules.length === 0 && <h3 className='text-center' style={{ width: '100%' }}>No matching results, clear the search & try again</h3>}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
