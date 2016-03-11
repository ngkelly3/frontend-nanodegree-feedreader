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
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        // checks names content of allFeeds array is defined and not empty
        it('names defined', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
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

        // checks feedList after async function complete for content
        var feedList = $('.feed-list');
        // wait for data to load
        beforeEach(function(done) {
            for (i = 0; i < allFeeds.length; i++) {
                loadFeed(i, function() {
                    // tests length of allfeeds
                });
            }
            done();
        });
        it('at least one entry in feed', function(done) {
            expect(feedList.length).not.toBe(0);
            done();
        });
    });


    // New Feed Selection, checks if loadFeed changes when new selection occurs
    describe('New Feed Selection', function() {

        // check if loadFeed (id = 0) matches loadFeed (id = 1)
        var feedOne;

        // wait for data to load
        beforeEach(function(done) {
            loadFeed(1, function() {

                // assign current feed element to feedOne
                feedOne = $('.feed').html();
                done();
            });
        });

        it('content changes', function(done) {
            loadFeed(0, function() {

                // compare feedOne with current feed element to see if they are different
                expect($('.feed').html()).not.toEqual(feedOne);
                done();
            });
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