Setup Instructions:

1. Download/Install Meteor
 	https://www.meteor.com/
2. Clone cs465 Repository using git command line
	git clone https://github.com/jh2oman/cs465
3. Start the environment in the command line
	cd cs465
	meteor
   The project should now be running at http://localhost:3000/

The Files:

	.meteor folder - packages, don't worry about it

	bootstrap folder - where all of the bootstrap code is

		bootstrap.import.less - file is for changing all the variables in bootstrap such as default colors, fonts, etc. If at all possible avoid changing these (we will do it at the end) and instead make changes in style.less

	views folder - This is where the html pages for each of the different pages are, and the ones you will be editing. Keep all code that you write inside of the template tags. 

	index.html - Where the top bar code is, we can just edit it at the end so don't mess with it too much

	script.js - Javascript code

	styles.less - LESS code (backwards compatible with CSS so you can just write plain CSS as well)

Notes on Meteor Functionality

1. Interpretting the routes (shouldn't need to edit these) - first one
	if url == '/' then load the template named 'outer' and where it says {{>yield}} inject the template 'home'

2. Keep all javascript/jquery code that you write within the if(Meteor.isClient) statement

3. Interpretting the events in Template.outer.events - first one
	when an element with class="goToHome" is clicked run the anonymous function function(){Router.go('/home')} which changes the url to '/home'

