function findVerifiedThenScroll() {
    if (console) {
        console.info("Looking for more verified accounts...");
    }

    if (cycles >= maxCycles) {
        if (console) {
            console.info("-- PROCESS COMPLETE --");
        }
        return;
    } else {
        cycles++;
    }

    var found = findVerifiedAccounts();
    var timer = setInterval(function () {
        if (found && lastFound !== found) {
            lastFound = found.parentElement.previousElementSibling.innerHTML;
            console.info("Cuenta verificada: " + lastFound);
        }
        clearInterval(timer);
        window.scrollTo(0, document.body.scrollHeight);

        setTimeout(function () {
            findVerifiedThenScroll();
        }, 2500);

    }, 1200);
}

function findVerifiedAccounts() {
    return jQuery('svg[aria-label="Cuenta verificada"]');
}

var cycles = 0;
var maxCycles = 1000;
var jQuery = $;
var lastFound = null;
findVerifiedThenScroll();
