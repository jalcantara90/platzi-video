import React from 'react'
import { render } from 'react-dom';
import Media from './src/playlist/components/media';

const app = document.getElementById('app');

render(<Media />, app); // recibe dos parámetros, que renderizar y donde va a hacerlo.