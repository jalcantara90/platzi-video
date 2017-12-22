import React from 'react'
import { render } from 'react-dom';
import Media from './src/playlist/components/media';

const app = document.getElementById('app');

render(<Media type="video" title="¿Qué es responsive design?" author="Leonidas Esteban" image="./images/covers/responsive.jpg"/>, app); // recibe dos parámetros, que renderizar y donde va a hacerlo.