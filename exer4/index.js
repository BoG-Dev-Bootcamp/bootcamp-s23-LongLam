import figlet from "figlet";
import axios from 'axios';

let endpoint = Math.floor(Math.random() * 1008 + 1);
axios.get("https://pokeapi.co/api/v2/pokemon/"+endpoint)
    .then(function (response) {
        console.log(figlet.textSync(response.data.name, {
            font: 'Caligraphy',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 200,
            whitespaceBreak: true
        }));
    })
    .catch(function (error) {
        console.log(error)
    })