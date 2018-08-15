# the-land-chaos-seed-game
A game engine built with the rules of The Land

The goal is to create a simulated environment to play or run the world of "The Land - Chaos Seed" that Author Aleron Kong created.
Part of this goal is to make the engine easily modifyable to add more "features" that is presented in The Land, allowing people to contribute 
as well as create their own stories, quests, objects and characters.

# References
## The Land Wiki
https://chaos-seeds-series.wikia.com/wiki/Chaos_Seeds:_The_Land_Wiki

## Compendium
https://docs.google.com/document/d/1pl0B9-PzEustXanCjwebbpB8FkAUvewrJhI_QM-vwO4/edit?usp=sharing


# Technical Stuff
This section will address how to run the app

## Platform
The current version of this is running HTML with Phaser JS 3.0 game engine on a Python 3 backend.

# Phaser JS 3
https://github.com/photonstorm/phaser

CDN Version used:
cdn.jsdelivr.net/npm/phaser@3.11/dist/phaser.js

# How to set up
First make sure you have installed Python3, This was built running on python 3.4.3 
Once you have Python set up in the targeted environment run the pip command to install the requirements.txt packages

``` pip install -r requirements.txt ```

Note: you may need to run as an elevated account i.e. sudo

# How to run
Once everything is installed, note what ip/port you want to run the app from.  By default, the app will choose based on the os 
environment variables IP and PORT to run off of the respective IP and PORT that is set up as an enviroment variable.  If not, 
it will default to 0.0.0.0:8080 as the IP and Port

Simply run the command below to start up the server

``` python3 app.py ```

Then open up a webbrowser and run the app on the ip/port you set up
