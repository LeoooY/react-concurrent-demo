import logo from './logo.svg';
import './App.css';
import { useState, unstable_useDeferredValue } from 'react';
import { unstable_scheduleCallback } from "scheduler";
import Clock from "./Clock";
import SlowList from './SlowList';

function App() {
    const [value, setValue] = useState('');
    const onChange = e => {
        setValue(e.target.value)
    }
    
    const deferredValue = unstable_useDeferredValue(value, { timeoutMs: 500 });
    return (
        <div className="App">
            <header className="App-header">
                <h1>React With Concurrent Mode</h1>
                <input type="text" onChange={onChange} value={value} />

                <Clock />

                <SlowList text={deferredValue}/>
            </header>
        </div>
    );
}

export default App;
