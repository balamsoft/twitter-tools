var allAccountsCSV = '';

function findBlockableUsers(){
    return $(".user-actions.not-following");
}

function findBlockableThenScroll(){
    console.error("To stop the process simply refresh the page.");

    var blockableUsers = findBlockableUsers();
    if(!blockableUsers || blockableUsers.length === 0){
        console.error("-- PROCESS COMPLETE --");
        console.error(allAccountsCSV);
        return;
    }
    
    for(var x=0; x < blockableUsers.length; x++){ 
        allAccountsCSV = allAccountsCSV + '\n' + blockableUsers[x].dataset.userId;
    }
    
    $("html, body").animate({ scrollTop: $(document).height() }, 1200);

    setTimeout(function(){
        console.error("Progress so far: ");
        console.error(allAccountsCSV);
        findBlockableThenScroll();
    }, 2500);
}

findBlockableThenScroll();
