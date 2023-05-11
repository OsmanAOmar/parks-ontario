// Phase 0
// 1.   Createa a new Firebase project
    // a)Configure as a real-time database
//2.    Import parks.json data into database using Firebase "import JSON file"
// 3.   Initialize the app for web usage (and get the config info)
// 4.   Create components (Form, Displayed Information, Park Badge gallery) (Stretch goal: Temperature and/or Map); import components based on DOM
// 5.   Import relevant Firebase modules into each component

// Phase 1
// 1.   Prepare state to receive "parks" data and use that state in the Form component
// 2.   Filter parks based on user selected properties via form
    // 2A.   Map through "parks" array
    // 2B.   Display resuls on the page
// 3.   Create useEffect Hook to request data (reminder: provide an empty array as the second argument to avoid infinite loop)
    // 3A.  create a variable that holds our database details
    // 3B.  Create a variable that makes reference to our database (dbRef)
    // 3C.  Add an event listener to dbRef that will fire from the databse, and call response
    // 3D.  Use Firebase's .val() method to parse our database info. Should see parks appear as an object
// 4.   Store data in state by updating useEffect
    // 4A.  Create a variable to store the new state ("newState")
    // 4B.  Create a variable called "data" to store the response from our query to Firebase
        // .val() is a Firebase method that gets us the information we want
    // 4C.  Run For...in loop, and push each park name to "newState" array
    // 4D.  Call setParks to update our component's state using the local array newState

// Phase 2
// 1.   Adding provincial parks to the page and adding visited parks to a seperate container
// 2.   Store our parks data in Firebase (json file)
// 3.   Retrieve the parks data from Firebase and display it on our page
    // 3A.  Append it to the primary <ul> already created in the HTML file
    // 3B.  Add an event listener to allow users to click a "visited" button and add the clicked park to a new location in Firebase that contains all visited parks
    // 3C.  Display the visited parks in the secondary <ul> already created in the HTML file
    // 3D.  Create a removal functionality