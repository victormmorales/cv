import { v4 as uuidv4 } from 'uuid';
// Images:
import mern from '../img/portfolios/mern.png';
import simpson from '../img/portfolios/simpson.png';
import trivago from '../img/portfolios/trivago.png';
import toyhacker from '../img/portfolios/toyhacker.png';
import netflix from '../img/portfolios/netflix.png';
import clima from '../img/portfolios/clima.png';
import veterinario from '../img/portfolios/veterinario.png';
import redux from '../img/portfolios/redux.png';
import presupuesto from '../img/portfolios/presupuesto.png';
import breaking from '../img/portfolios/breaking.png';

 
const portfolios = [
    {
        id: uuidv4(),
        category: 'MERN',
        image: mern,
        link1: 'https://github.com/militroncho7/tus-proyectos',
        link2: 'https://tusproyectos.netlify.app/',
        title: 'Admin de Proyectos 📝',
        text: 'Mongo - Express - Node - React'
    },
    {
        id: uuidv4(),
        category: 'ReactJS',
        image: simpson,
        link1: 'https://github.com/militroncho7/simpsons',
        link2: 'https://tender-curie-6812b3.netlify.app/',
        title: 'Simpson API 📺',
        text: 'React - API - Hooks - CSS'
    },
    {
        id: uuidv4(),
        category: 'Gatsby',
        image: trivago,
        link1: 'https://github.com/militroncho7/trivago',
        link2: 'https://trivago-hotel.netlify.app/',
        title: 'Trivago Page ✈️',
        text: 'Gatsby - React - Hooks - CMS'
    },
    {
        id: uuidv4(),
        category: 'Javascript',
        image: toyhacker,
        link1: 'https://github.com/militroncho7/toy-hacker-videogame',
        link2: 'https://militroncho7.github.io/toy-hacker-videogame/',
        title: 'Toy Hacker 🕹 🦖',
        text: 'HTML - CSS - JavaScript'
    },
    {
        id: uuidv4(),
        category: 'Redux',
        image: netflix,
        link1: 'https://github.com/militroncho7/netflix-clone',
        link2: 'https://netlfix-clone.netlify.app/',
        title: 'Netflix Clone 🍿',
        text: 'React - Redux - Firebase'
    },
    {
        id: uuidv4(),
        category: 'ReactJS',
        image: clima,
        link1: 'https://github.com/militroncho7/clima',
        link2: 'https://practical-bell-6b3f44.netlify.app/',
        title: 'App Clima 🌦',
        text: 'React - API - Hooks - CSS'
    },
    {
        id: uuidv4(),
        category: 'ReactJS',
        image: veterinario,
        link1: 'https://github.com/militroncho7/veterinario-citas',
        link2: 'https://ecstatic-jennings-eb4ec2.netlify.app/',
        title: 'Veterinario 🐶',
        text: 'React - API - Hooks - CSS'
    },
    {
        id: uuidv4(),
        category: 'Redux',
        image: redux,
        link1: 'https://github.com/militroncho7/redux',
        link2: 'https://proyecto-redux.netlify.app/',
        title: 'Redux Crud 📲',
        text: 'Redux - React - Axios'
    },
    {
        id: uuidv4(),
        category: 'ReactJS',
        image: presupuesto,
        link1: 'https://github.com/militroncho7/presupuesto',
        link2: 'https://elegant-montalcini-a0e495.netlify.app/',
        title: 'Redux Crud 📲',
        text: 'React - API - Hooks - CSS'
    },
    {
        id: uuidv4(),
        category: 'ReactJS',
        image: breaking,
        link1: 'https://github.com/militroncho7/breaking-bad',
        link2: 'https://eloquent-lalande-3bf23b.netlify.app/',
        title: 'Breaking Bad 👨🏻‍🔬',
        text: 'React - API - Hooks - CSS'
    }
]

export default portfolios;