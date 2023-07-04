
export function nomeComNumeroAleatorio(name : string){
    const numberRandom = Math.floor(Math.random() * 999999);
    const nameWithRandom = numberRandom.toString() + name;
    return nameWithRandom;
}