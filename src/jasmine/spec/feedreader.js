/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('URLs defined', function() {
            for (var i=0; i<allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
         });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('names defined', function() {
            for (var i=0; i<allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });

    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        it('is hidden', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

        it('toggles visibility when clicked', function() {
            var menuLink = $('.menu-icon-link');
            menuLink.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            menuLink.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
            // incorporate transform limitation
        });

    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        var feedList = $('.feed-list');
        // wait for data to load
        beforeEach(function(done) {
            for(i=0; i<allFeeds.length; i++){
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


    /* TODO: Write a new test suite named "New Feed Selection"*/
    describe('New Feed Selection', function() {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.*/

        // does loadFeed(id = 0) match loadFeed(id = 1)?
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
        it ('changed', function() {
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
