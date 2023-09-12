import logo from './logo.svg';
import './App.css';
import Cookies from 'universal-cookie';
import React, { useState} from 'react';
import { useEffect } from 'react';

function App() {
    const [count, setCount] = useState(0);
    const cookies = new Cookies(null, { path: '/' });
    const prev = cookies.get('cook');
    if (prev !== undefined) {
        console.log(prev);
        cookies.remove('cook', { path: '/' });
        console.log('removed');
        setCount(prev);
    }

    let incrementCount = () => {
        setCount(count + 1);
        console.log(count)
    };

    let decrementCount = () => {
        if (count < 5) return false;
        setCount(count - 5);
    };

    let resetCount = () => {
        setCount(0);
    }

    let save = () => {
        cookies.set('cook', count);
        console.log("cookies:", cookies.get('cook'));
    }

    useEffect(() => {
        console.log('useEffect setup triggered')

        const handleTabClose = event => {
            event.preventDefault();

            console.log('beforeunload event triggered')
            /*console.log('cookies', count)
            //set the cookie
            cookies.set('cook', count);
            console.log(cookies.get('cook'));*/
            return (event.returnValue = 'saving');
        };

        window.addEventListener('beforeunload', handleTabClose);

        return () => {
            window.removeEventListener('beforeunload', handleTabClose);
        };
    }, []);

    return (
        <div class="container-fluid bg-dark p-3 min-vh-100">
            <div class="row text-light text-center">
                <h2>Cookie Counter</h2>
                <div class="col-sm-6">
                    <button
                        class="btn btn-light me-1 my-1"
                        onClick={incrementCount}
                    >
                        cookie
                    </button>
                    <h5>Cookies: {count}</h5>
                    <button
                        class="btn btn-light me-1 my-1"
                        onClick={resetCount}
                    >
                        reset
                    </button>
                </div>
                <div class="col-sm-6">
                    <button
                        class="btn btn-light me-1 my-1"
                        onClick={decrementCount}
                    >
                        mouse
                    </button>
                    <h5>the mouse takes 5 cookies</h5>
                    <button
                        class="btn btn-light me-1 my-1"
                        onClick={save}
                    >
                        save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
