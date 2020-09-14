import React from 'react';
import ReactDom from 'react-dom';

const h1 = React.createElement('h1', null, 'Hello, React');
const div = document.getElementById('root');
ReactDom.render(h1, div);
