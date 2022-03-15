---
title: 'YourWines'
date: '2022-03-13'
image: getting-started-nextjs.gif
excerpt: This is my largest project and was made using EJS, Node, Express, MongoDB and the Cloudindary and MapBox APIs.
isFeatured: true
---
[Link](https://infinite-basin-55644.herokuapp.com) | [GitHub](https://github.com/kyleb12345/YourWines)

'YourWines' is a site that used Yelp as inspiration, but focuses specifically on vineyards and wineries. 

The landing page uses a parallax effect on large enough media sizes by changing the speeds at which the clouds, title, and foreground move while you scroll down.

I created authentication and authorization on the site to allow visiters to register in order to leave reviews and upload new locations. A user cannot edit or delete any other user's review and only the admin account or original user can edit or delete a review or location. Cookies for a user are stored for two days on their browser. Passwords are hashed and encrypted. 

When a new location is added, its own page and unique ID is created and using the mapbox API it is added to a clustermap on the homepage and to a location specific map on its own new page.