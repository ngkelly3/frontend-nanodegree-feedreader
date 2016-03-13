/* feedreader.js */
$(function() {

    describe('RSS Feeds', function() {

        // checks if allFeeds array was defined and not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // checks URL content of allFeeds array is defined and not empty
        it('URLs defined', function() {
        	allFeeds.forEach(function(feed) {
        		expect(feed.url).toBeDefined();
        		expect(feed.url.length).not.toBe(0);
        	});
        });

        // checks names content of allFeeds array is defined and not empty
        it('names defined', function() {
            allFeeds.forEach(function(feed) {
        		expect(feed.name).toBeDefined();
        		expect(feed.name.length).not.toBe(0);
        	});
        });
    });

    // checks menu
    describe('The menu', function() {

        // menu element hidden by default
        it('is hidden', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });


        // menu changes visibility when clicked
        it('visible when clicked', function() {

            // checks if menu-hidden class disappears upon click
            var menuLink = $('.menu-icon-link');
            menuLink.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            // checks if menu-hidden class reappears after click
            menuLink.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    // checks initial entries of feed
    describe('Initial Entries', function() {

        // checks container after async function complete for content
        var feedContainer;
        // wait for data to load
        beforeEach(function(done) {
            loadFeed(0, function() {
            	feedContainer = $('.feed');
                // loads one feed element into the container
                done();
            });
        });
        it('at least one entry in feed', function() {
            expect(feedContainer.length).not.toBe(0);
        });
    });

    // New Feed Selection, checks if loadFeed changes when new selection occurs
    describe('New Feed Selection', function() {
    // check if loadFeed (id = 0) matches loadFeed (id = 1)

        var feedOne;
        var feedZero;

        // wait for data to load, beforeEach for each var
        beforeEach(function(done) {
            loadFeed(0, function() {

                // assign current feed element to feedZero
                feedZero = $('.feed').html();
                done();
            });
        });

        beforeEach(function(done) {
            loadFeed(1, function() {

                // assign current feed element to feedZero
                feedOne = $('.feed').html();
                done();
            });
        });

        it('content changes', function() {
            expect(feedZero).not.toEqual(feedOne);
        });
    });

    /* Additional Test - Change header background color to red */
    describe('Header background color', function() {
        it('changed', function() {
            var red = 'rgb(255, 0, 0)';

            // colorIcon clicked (undefined)
            var colorLink = $('.color-icon-link');
            colorLink.click();

            // color changed to red
            currentColor = $(".header").css('background-color');
            expect(currentColor).toBe(red);
        });
        // would like to expand this test so that it detects any color change at all
    });

    /* Additional Future Test - Sort Alphabetical Functionality */
    describe('Sort alphabetical', function() {
        it('content changed', function() {
            var arrayBefore = allFeeds[0];
            var arrayAfter;

            // sortIcon clicked (undefined)
            var sortLink = $('.sort-icon-link');
            sortLink.click();
            expect(allFeeds.sort.calls.any()).toEqual(true);

            // sort() was called
            arrayAfter = allFeeds[0];

            // checks first position of allFeeds to see if it changed
            expect(arrayBefore).not.toEqual(arrayAfter);
        });
    });
}());