import { savePokemonToFile, loadPokemonFromFile } from "./pokemondb";

// Define the Pokemon type
type Pokemon = {
    name: string,
    hp: number,
    type?: string
};

// Define the Array of Pokemon (my database of pokemons)
let myPokemons :Pokemon[] = [];

// Utility function to create pokemon objects
function createPokemon(name: string, hp: number, type?:string): Pokemon {   
    return { 
        name: name,
        hp: hp,
        type: type
    };
}

// Create two pokemon's and add them to the database
myPokemons.push(createPokemon('Helge', 50, 'Comedian'));
myPokemons.push(createPokemon('PewdiePie', 1, 'Time Waster'));
console.log(myPokemons);

// Save my pokemon database to a file
savePokemonToFile('minapokemons.json', JSON.stringify(myPokemons));

// A search pokemon function
function searchPokemon(searchName: string, database: Pokemon[]): Pokemon | null {
    let searchResults: Pokemon[] = database.filter(( p ) => p.name === searchName); // Use filter to find all matching pokemons
    if (searchResults.length > 0) {
        return searchResults[0];    // Return only the first result
    }
    return null;    // or null if no result are found
}

let poke = searchPokemon('PewdiePie', myPokemons);  // Search for PewdiePie
if (typeof poke == null) {
    console.log('No Pokemon was found!');
} else {
    console.log('Pokemon: ', poke);
}

poke = searchPokemon('Jocke&Jonna', myPokemons);    // Search for Jocke&Jonna
if (typeof poke == null) {
    console.log('No Pokemon was found!');
} else {
    console.log('Pokemon: ', poke);
}

let loadedFile:string | Error = loadPokemonFromFile('extra.json');
if(loadedFile instanceof Error) {
    console.log("We couldn't load the file: " + loadedFile.message);
} else {
    let extraDB:Pokemon[] = JSON.parse(loadedFile);
    poke = searchPokemon('Eva zu Beck', extraDB);
    console.log('Eva zu Beck: ', poke);
}