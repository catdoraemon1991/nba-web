import '../styles/App.css';
import { TopNavBar } from './TopNavBar';
import React, { Component } from 'react';
import { Main } from './Main';

export class App extends Component {
    render() {
        return (
            <div className="App">
                    <TopNavBar/>
                    <Main />
            </div>
        );
    }
}


