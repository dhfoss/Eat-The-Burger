# Eat-The-Burger

## Table of Contents
[Description](https://github.com/dhfoss/Eat-The-Burger/#description)  
[Installation](https://github.com/dhfoss/Eat-The-Burger/#installation)  
[Usage](https://github.com/dhfoss/Eat-The-Burger/#usage)  
[Questions](https://github.com/dhfoss/Eat-The-Burger/#questions)

### Description
https://sheltered-hamlet-62801.herokuapp.com/  
Eat the Burger is an app for ordering and devouring mouth watering veggie burgers.  While it is an undoubtedly silly app on the surface, the goal was to provide me with practice in designing a full stack website with a Model View Controller (MVC) framework, Object Relational Mappers (ORM), and a dynamic HTML rendering engine (in this case, Handlebars.js). Enjoy!

### Installation
Eat the Burger uses express, express-handlebars, and mysql to run.  To install the app, run `npm install` in the command line.

### Usage
If locally hosting the app, the first step is to set up the SQL database.  Run the code in the  schema.sql file to set up a database and table.  If seed data is needed, it is provided in the seed.sql file.  
![Schema](/screen-shots/1-schema.png?raw=true "Sample Note")

Next, enter  `node server.js` to get the server running. From there it is rather straightforward, just enter in a burger name to place an order.  The burger is stored in the database, along with the auto generated id number, and default value of "devoured = false". Handlebars.js renders the data, checks if the burger is devoured or not, and puts it in the corresponding column.  
![Place Order](/screen-shots/2-place_order.png?raw=true "Sample Note")  
![Render Order](/screen-shots/3-render_order.png?raw=true "Sample Note")

To eat the burger, click the devour button.  This executes a post method, which updates the corresponding burger and sets "devoured = true".  Handlebars then once again renders the data, now placing the burger in the right hand column.  
![Eat Burger](/screen-shots/4-eat_burger.png?raw=true "Sample Note")

### Questions
For questions contact me at:  
Email: dhfoss89@gmail.com  
https://github.com/dhfoss

Thank you!  
-DHF
