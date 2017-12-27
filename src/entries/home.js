import React from 'react'
import { render } from 'react-dom';
import Home from '../pages/containers/home';
import data from '../api.json';
const homeContainer = document.getElementById('home-container');

render(<Home data={data} />, homeContainer); // recibe dos parámetros, que renderizar y donde va a hacerlo.