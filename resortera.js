/*
 * Blocks all twitter accounts shown in the screen, one by one.
 * It will only block accounts you are not following.
 * 
 * Author: @GatoProgramador
 */

 function blockVisibleThenScroll(){
    if(console){
        console.info("Looking for more accounts to be blocked...");
    }

    if(findBlockButtons().length === 0){
        if(console){
            console.info("-- PROCESS COMPLETE --");
        }
        return;
    }

    var blockButtons = findBlockButtons(),
        i = 0,
        timer = setInterval(function(){
            blockIt(blockButtons[i]);
            i++
            if (i === blockButtons.length) {
                clearInterval(timer);
                $("html, body").animate({ scrollTop: $(document).height() }, 1200);

                setTimeout(function(){
                    blockVisibleThenScroll();
                }, 8000);
            }
        }, 
        1200
     );
}

function findBlockButtons(){
    return $(".user-actions.not-following").find(".not-blocked button");
}

function blockIt(btn){
    $(btn).click(); 
    setTimeout(function () { 
        $(".block-button").click(); 
    }, 800); 
}

blockVisibleThenScroll();
