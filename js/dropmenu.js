/*
*
* Mjduniverse.com Dropmenu Script
* Copyright 2018-2019 Mjduniverse.com
* 
* Note: No longer used, will be using CSS implemented drop down menu. Keeping just because I might need it in the future though.
*
*/

window.addEventListener("load",function(){

	var menuItems = document.querySelectorAll(".menu-item");
	var subMenus = document.querySelectorAll(".sub-menu");

	var mw = 800; // Mobile Minimum Value
	var mobile_activated = false; // Set mobile activation link to "false";
	var mnb = false; // This variable is set to true when the mobile navigation button is pressed.

	for(var i = 0; i < menuItems.length; i++) {

		menuItems[i].addEventListener("mouseover",function() {
			if(this.querySelector(".sub-menu") != undefined && window.innerWidth > mw) {
				this.querySelector(".sub-menu").style.visibility = "visible";
				this.querySelector(".sub-menu").style.opacity = "1";
			}
		});

		menuItems[i].addEventListener("mouseout",function() {
			if(this.querySelector(".sub-menu") != undefined && window.innerWidth > mw) {
				this.querySelector(".sub-menu").style.visibility = "hidden";
				this.querySelector(".sub-menu").style.opacity = "0";
			}
		});

	};

	document.querySelector(".mobile-navigation-button").addEventListener("click", function() {
		document.querySelector("#navigation").style.display = "block";
		document.querySelector(".mobile-navigation-close-button").style.display = "block";
		document.querySelector("body").style["overflow-y"] = "hidden";
		mnb = true;
	}); 

	document.querySelector(".mobile-navigation-close-button").addEventListener("click", function() {
		document.querySelector("#navigation").style.display = "none";
		document.querySelector(".mobile-navigation-close-button").style.display = "none";
		document.querySelector("body").style["overflow-y"] = "scroll";	
	});

	

	window.addEventListener("resize",function() {
		
		if(window.innerWidth < mw) {

			for(var i = 0; i < menuItems.length; i++) {
				if(menuItems[i].querySelector(".sub-menu")) {
					menuItems[i].querySelector(".sub-menu").style.visibility = "visible";
					menuItems[i].querySelector(".sub-menu").style.opacity = "1";
				}
			};

			document.querySelector("#navigation").style.display = "none";

		}
		
		// Force submenus to be hidden if not in mobile version.
		
		if(window.innerWidth > mw) {

			for(var i = 0; i < menuItems.length; i++) {
				if(menuItems[i].querySelector(".sub-menu")) {
					menuItems[i].querySelector(".sub-menu").style.visibility = "hidden";
					menuItems[i].querySelector(".sub-menu").style.opacity = "0";
				}
			};

			document.querySelector("#navigation").style.display = "inline-block";

			console.log("resize-1");

		}
		
	});


});

/*

jQuery(window).ready(function() {
	
	var mw = 800; // Mobile Minimum Value
	var mobile_activated = false; // Set mobile activation link to "false";
	var mnb = false; // This variable is set to true when the mobile navigation button is pressed.
	
	// Attach a submenu show function to each element that is a member of the class "menu-item". 
	
	jQuery(".menu-item").on("mouseover", function() {
		if(this.querySelector(".sub-menu") != undefined && window.innerWidth > mw) {
		  this.querySelector(".sub-menu").style.display = "block";
		}
	});
	
	// Attach a submenu hide function to each element that is a member of the class "menu-item". 

	jQuery("#head .menu-item").on("mouseout", function() {
		if(this.querySelector(".sub-menu") != undefined && window.innerWidth > mw) {
		  this.querySelector(".sub-menu").style.display = "none";
		}
	});
	
	jQuery(".mobile-navigation-button").on("click", function() {
		document.querySelector("#navigation").style.display = "block";
		document.querySelector(".mobile-navigation-close-button").style.display = "block";
		document.querySelector("body").style.overflow = "hidden";
		mnb = true;
	}); 
	
	jQuery(".mobile-navigation-close-button").on("click", function() {
		document.querySelector("#navigation").style.display = "none";
		document.querySelector(".mobile-navigation-close-button").style.display = "none";
		if (mnb === true) {
		}
		document.querySelector("body").style.overflow = "scroll";	
	});
	
	jQuery(window).resize(function() {

    // Force Submenus to be non-hidden. That is, make the submenus visable when someone activates the navigation frame on mobile.

    if(window.innerWidth < mw) {
		document.querySelector("#head .sub-menu").style.display = "block";
		document.querySelector("#navigation").style.display = "none";
		if(mnb === true) {
			mnb = false;
		}
	}
	
	// Force submenus to be hidden if not in mobile version.
	
	if(window.innerWidth > mw) {
        document.querySelector("#head .sub-menu").style.display = "none";
		document.querySelector("#navigation").style.display = "inline-block";
		if(mnb === true) {
			mnb = false;
		}
	}
	
	});
	
	jQuery(".user-links-toggle").on("click", function() {
		
		if(document.querySelector(".adminLinks").style.display === "inline-block") {
		    document.querySelector(".adminLinks").style.display = "none";
		}
		
		else {
		    document.querySelector(".adminLinks").style.display = "inline-block";
		}
		
	});
	
});

*/