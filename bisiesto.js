/// Año bisiesto
/// Función que imprime los proximos años bisiestos siguientes a uno dado

function yearLeap(year) {
    let currentYear = year + 1;
    let yearCount = 0;

    while (yearCount < 30) {
        if (
            currentYear % 4 == 0 &&
            (currentYear % 100 != 0 || currentYear % 400 == 0)
        ) {
            console.log(currentYear);
            yearCount++;
        }
        currentYear++;
    }
}

yearLeap(1999);
