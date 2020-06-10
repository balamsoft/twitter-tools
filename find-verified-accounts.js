function findVerifiedThenScroll() {
    if (console) {
        console.info("Buscando cuentas verificadas...");
    }

    if (cycles >= maxCycles) {
        if (console) {
            console.info("-- PROCESS COMPLETE --");
            console.info("All accounts found: " + JSON.stringify(allFound));
        }
        return;
    } else {
        cycles++;
    }

    var found = findVerifiedAccounts();
    if (found && found.parentElement.parentElement.parentElement.lastElementChild.innerText !== lastFound) {
        lastFound = found.parentElement.parentElement.parentElement.lastElementChild.innerText;
        var fullName = found.parentElement.parentElement.innerText;
        allFound.push(fullName + ' (' + lastFound + ')');
        console.info("Cuenta verificada: " + fullName + " (" + lastFound + ")");
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
console.log("To stop the script just type ´stop()´ or reload the page.");
findVerifiedThenScroll();
