// FACEBOOK REEL SEARCH
console.clear();
let AskReelLnk = prompt("Enter Facebook Reel URL to Search.", "");
var ReelLnk = "";
var BorderColor = "#0866ff";
var Style = 'border: 3px solid #000; font-size: 16px; padding: 10px; font-weight: bold; color: #fff; ';
var StyleFound = Style + 'background: #00a12b;';
var StyleNotFound = Style + 'background: #f00;';
var StyleNotFound2 = Style + 'background: #ffa200; color: #000;';
var Dots = ".";
var PgScroll = '';

if (AskReelLnk != null) {
    var match = AskReelLnk.match(/\/reel\/([a-zA-Z0-9]+)/);    
    if (match) {
        console.warn(match[1]);
        ReelLnk = match[1];
        // Clear All
        window.scrollTo({top: 0});
        document.querySelectorAll(".x9f619").forEach(function (parent) {
            parent.querySelectorAll(":scope > div").forEach(function (child) {
                child.style.border = "0px dashed " + BorderColor;
            });
        });
        // Clear All
        FindReel();
    }
}else{
    alert("Please enter Facebook Reel URL.");
}

function FindReel(){
	// FIND REEL & MAKE A BODER AND SCROLL TO IT
	console.clear();
	var ReelFound = false;
	document.querySelectorAll(".x9f619").forEach(function (parent) {
		parent.querySelectorAll(":scope > div").forEach(function (child) {
			var lnk = child
				.querySelector("div > a")
				?.getAttribute("href");
			//console.log(lnk);
			if (!lnk) return;
			var result = lnk.match(new RegExp(ReelLnk, "gi"));
			if (result) {
				//console.warn(result);
				console.log("%c REEL FOUND!", StyleFound);
				ReelFound = true;
				child.style.border = "10px ridge " + BorderColor;
				child.style.borderRadius = "20px";
				window.scrollTo({
					top: (parent.getBoundingClientRect().top + window.scrollY) - 140,
					behavior: "smooth"
				});
			}
		});
	});
	if (ReelFound) {
        return;
    }
    console.log( "%c REEL NOT FOUND - SCROLLING FOR MORE" + Dots, StyleNotFound );
	Dots = Dots + ".";

    var CurrentScroll = document.documentElement.scrollHeight;
    if (PgScroll == CurrentScroll) {
        //console.warn("Reached Bottom");
        console.clear();
        console.log( "%c SORRY REEL NOT FOUND! ", StyleNotFound2 );
        return; // STOP FindReel completely
    }
    PgScroll = CurrentScroll;
    window.scrollTo({
        top: document.documentElement.scrollHeight
    });
    setTimeout(FindReel, 5000);
}
// FACEBOOK REEL SEARCH