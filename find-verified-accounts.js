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

    var lastFound = null;
    var found = findVerifiedAccounts();
    if (found && found !== lastFound) {
        lastFound = found.parentElement.parentElement.nextElementSibling.firstElementChild.firstElementChild.innerText;
        var name = found.parentElement.previousElementSibling.firstElementChild.innerText;
        console.info("Cuenta verificada: " + name + " (" + lastFound + ")");
    }

    var timer = setInterval(function () {
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
findVerifiedThenScroll();
