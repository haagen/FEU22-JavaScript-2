import { readFileSync, writeFileSync } from 'fs'; // Hämta in node.js moduler för synkron läsning och skrivning

function savePokemonToFile(filename: string, pokemonJSON: string): boolean | Error {
    try {
        writeFileSync(filename, pokemonJSON);
    } catch (err: any) {
        return new Error(err?.message);
    }
    return true;
}

function loadPokemonFromFile(filename: string): string | Error {
    let data:string;
    try {
        data = readFileSync(filename).toString();
    } catch (err: any) {
        return new Error(err.message);
    }
    return data;
}

export { savePokemonToFile, loadPokemonFromFile };