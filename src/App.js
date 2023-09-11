import logo from './logo.svg';
import './App.css';
import Cookies from 'universal-cookie';
import React, { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    let incrementCount = () => {
        setCount(count + 1);
    };

    let decrementCount = () => {
        if (count < 5) return false;
        setCount(count - 5);
    };

    let resetCount = () => {
        setCount(0);
    }

    return (
        <div class="container-fluid bg-dark p-3 min-vh-100">
            <div class="row text-light text-center">
                <h2>Cookie Counter</h2>
                <div class="col-sm-6">
                    <button onClick={incrementCount}>cookie</button>
                    <h5>Cookies: {count}</h5>
                    <button onClick={resetCount}>reset</button>
                </div>
                <div class="col-sm-6">
                    <button onClick={decrementCount}>mouse</button>
                    <h5>the mouse takes 5 cookies</h5>
                </div>
            </div>
        </div>
    );
}

export default App;
