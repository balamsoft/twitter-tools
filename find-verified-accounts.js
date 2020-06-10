function findVerifiedThenScroll() {
    if (console) {
        console.info('Buscando cuentas verificadas...');
    }

    if (cycles >= maxCycles) {
        if (console) {
            console.info('-- PROCESO COMPLETADO --');
            console.info("Todas las cuentas encontradas: \n" + JSON.stringify(allFound));
        }
        return;
    } else {
        cycles++;
    }

    var found = findVerifiedAccounts();
    if (found && found.parentElement.parentElement.parentElement.lastElementChild.innerText !== lastFound) {
        lastFound = found.parentElement.parentElement.parentElement.lastElementChild.innerText;
        var fullName = found.parentElement.parentElement.innerText;
        var accountName = fullName + ' (' + lastFound + ')';
        allFound.push(accountName);
        console.info("Cuenta verificada: " + accountName);
    }

    var timer = setInterval(function () {
        clearInterval(timer);
        window.scrollTo(0, document.body.scrollHeight);

        setTimeout(function () {
            findVerifiedThenScroll();
        }, 2000);
    }, 1200);
}

function findVerifiedAccounts() {
    return jQuery('svg[aria-label="Cuenta verificada"]');
}

function stop() {
    cycles = maxCycles;
}

var cycles = 0;
var maxCycles = 1000;
var jQuery = $;
var lastFound = null;
var allFound = [];
console.log('Para detener el proceso ejecute la función ´stop()´ o recargue la página.');
findVerifiedThenScroll();
