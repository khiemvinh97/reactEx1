import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fontawesome-free-5.12.1-web/css/all.css';
import 'react-widgets/dist/css/react-widgets.css'
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
