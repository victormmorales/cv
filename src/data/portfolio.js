// Images:
import mern from '../img/portfolios/mern.png';
import simpson from '../img/portfolios/simpson.png';
import trivago from '../img/portfolios/trivago.png';
import toyhacker from '../img/portfolios/toyhacker.png';

const portfolios = [
    {
        id: 1,
        category: 'MERN',
        image: mern,
        link1: 'https://github.com/militroncho7/tus-proyectos',
        link2: 'https://tusproyectos.netlify.app/',
        title: 'Admin de Proyectos 📝',
        text: 'Mongo - Express - Node - React'
    },
    {
        id: 2,
        category: 'ReactJS',
        image: simpson,
        link1: 'https://github.com/militroncho7/simpsons',
        link2: 'https://tender-curie-6812b3.netlify.app/',
        title: 'Simpson API 📺',
        text: 'React - API - Hooks - CSS'
    },
    {
        id: 3,
        category: 'Gatsby',
        image: trivago,
        link1: 'https://github.com/militroncho7/trivago',
        link2: 'https://trivago-hotel.netlify.app/',
        title: 'Trivago Page ✈️',
        text: 'Gatsby - React - Hooks - CMS'
    },
    {
        id: 4,
        category: 'Javascript',
        image: toyhacker,
        link1: 'https://github.com/militroncho7/toy-hacker-videogame',
        link2: 'https://militroncho7.github.io/toy-hacker-videogame/',
        title: 'Toy Hacker 🕹 🦖',
        text: 'HTML - CSS _ JavaScript'
    }
]

export default portfolios;