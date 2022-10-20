/// Ciclo sexagenario chino
/// Función que dado un año indica el elemento y animal correspondiente

const elements = [
    "madera",
    "madera",
    "fuego",
    "fuego",
    "tierra",
    "tierra",
    "metal",
    "metal",
    "agua",
    "agua",
];

const animales = [
    "rata",
    "buey",
    "tigre",
    "conejo",
    "dragon",
    "serpiente",
    "caballo",
    "mono",
    "oveja",
    "gallo",
    "perro",
    "cerdo",
];

function positionCicle(year) {
    const preCicle = Math.floor(year % 50) - 3;

    switch (preCicle) {
        case -3:
            return 57;
        case -2:
            return 58;
        case -1:
            return 59;
        case 0:
            return 60;
        default:
            return Math.floor(year % 60) - 3;
    }
}

function signoChino(element, animal) {
    return `Su signo chino es: ${animal} ${element}`;
}

function cicleSexagenary(year) {
    const cicle = positionCicle(year);
    const indexElements = Math.floor(cicle % 10) - 1;
    const indexAnimals = Math.floor(cicle % 12) - 1;

    console.log(signoChino(elements[indexElements], animales[indexAnimals]));
    console.log(cicle);
}

cicleSexagenary(1997);