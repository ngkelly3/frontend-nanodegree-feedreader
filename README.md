# Project Overview

This project tests application functionality using Jasmine for a web-based application that reads RSS feeds.

## Quickstart

1. Clone the Github repository and open index.html with the browser of your choice.
2. Specs are found in js/lib/feedreader.js

## Tests

### The Menu
Tests if the menu is hidden by default.  If the menu icon is clicked, the menu should be toggled (visible/not visible).

### Initial Entries
Tests if the feedList was populated using the API.  Checks the length of feedList once data is loaded.  API is an async call and therefore test does not run until async is complete.

### New Feed Selection
Tests if a new feed was populated on screen when a link is clicked.  Checks the first element of the feed before and after a link is clicked.  If the first element has changed, then the content has changed.  API is an async call; test does not run until async is complete.

## Future Tests
These tests will fail when running the application.  They are defined for future testing functionality.

### Change Header Color to Red
Tests if the header color changed to red.  Compares the css background-color attribute of the header class before and after clicking on a "change color" icon to be defined in the future.

### Sort Alphabetical
Tests if the displayed feedlist has been sorted alphabetically.  Checks if the jQuery sort() function activated on allFeeds and then compares the first element of allFeeds before and after clicking the button that is linked to sort().