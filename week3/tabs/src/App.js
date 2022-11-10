import './App.css';
import Tabs from './components/Tabs';
import React, {useState} from 'react';

function App() {

  const allTabs = [
    {header: "Tab 1", content: "Tab 1 content is showing here" },
    {header: "Tab 2", content: "Tab 2 content is showing here" },
    {header: "Tab 3", content: "Tab 3 content is showing here" }
  ]

  const [tabs, setTabs] = useState(allTabs)
  const [shownTab, setShownTab] = useState(0)


  return (
    <div className="App">
      <Tabs tabs={tabs} setTabs={setTabs} shownTab={shownTab} setShownTab={setShownTab} />
    </div>
  );
}

export default App;
