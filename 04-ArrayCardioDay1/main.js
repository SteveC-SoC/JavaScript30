     //Get your short on - this is an array workout!
      // ## Array Cardio Day 1

      // Some data we can work with

      //an array of objects
      const inventors = [
        { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
        { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
        { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
        { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
        { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
        { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
        { first: "Max", last: "Planck", year: 1858, passed: 1947 },
        { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
        { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
        { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
        { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
        { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
      ];
      //array of strings
      const people = [
        "Bernhard, Sandra",
        "Bethea, Erin",
        "Becker, Carl",
        "Bentsen, Lloyd",
        "Beckett, Samuel",
        "Blake, William",
        "Berger, Ric",
        "Beddoes, Mick",
        "Beethoven, Ludwig",
        "Belloc, Hilaire",
        "Begin, Menachem",
        "Bellow, Saul",
        "Benchley, Robert",
        "Blair, Robert",
        "Benenson, Peter",
        "Benjamin, Walter",
        "Berlin, Irving",
        "Benn, Tony",
        "Benson, Leana",
        "Bent, Silas",
        "Berle, Milton",
        "Berry, Halle",
        "Biko, Steve",
        "Beck, Glenn",
        "Bergman, Ingmar",
        "Black, Elk",
        "Berio, Luciano",
        "Berne, Eric",
        "Berra, Yogi",
        "Berry, Wendell",
        "Bevan, Aneurin",
        "Ben-Gurion, David",
        "Bevel, Ken",
        "Biden, Joseph",
        "Bennington, Chester",
        "Bierce, Ambrose",
        "Billings, Josh",
        "Birrell, Augustine",
        "Blair, Tony",
        "Beecher, Henry",
        "Biondo, Frank",
      ];

      // Array.prototype.filter()
      // 1. Filter the list of inventors for those who were born in the 1500's

      //initially put this in an if statement and then refactored to an implicit return Bool
      const fifteen = inventors.filter(
        (inventor) => inventor.year >= 1500 && inventor.year < 1600
      );
      console.table(fifteen);

      // Array.prototype.map()
      // 2. Give us an array of the inventors first and last names
      //using backtick (template Strings)
      const fullNames = inventors.map(
        (inventor) => `${inventor.first} ${inventor.last}`
      );
      console.log(fullNames);

      // Array.prototype.sort()
      // 3. Sort the inventors by birthdate, oldest to youngest

      // const ordered = inventors.sort(function(a,b){
      //     if(a.year > b.year){
      //         return 1;
      //     } else {
      //         return -1;
      //     }
      // });

      //refactored - Ternary
      const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : 2));
      console.table(ordered);

      // Array.prototype.reduce()
      // 4. How many years did all the inventors live all together?
      const totalYears = inventors.reduce((total, inventor) => {
        return total + (inventor.passed - inventor.year);
      }, 0);

      console.log(totalYears);

      // 5. Sort the inventors by years lived
      const oldest = inventors.sort(function (a, b) {
        const lastGuy = a.passed - a.year; //this provides the ages when died
        const nextGuy = b.passed - b.year;

        return lastGuy > nextGuy ? -1 : 1;
      });
      console.table(oldest);

      // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
      // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
      //unsing the above link

      /*COMMENTED OUT AS IT AFFECTS THE OTHER EXERCISES    
    const category = document.querySelector(' .mw-category');


    /*const links = category.querySelectorAll('a'); // this returns a nodeList. 'a' are the links, an anchor tag
    //TWO WAYS TO MAKE IT INTO AN ARRAY
    //const links = [...category.querySelectorAll('a')]; //spread the nodelist objects 
    //const links = Array.from(category.querySelectorAll('a')); // use the Array.from method to convert it
    
    const links = Array.from(category.querySelectorAll('a'));

    const de = links
                .map(link => link.textContent) //first we map over and return the text
                .filter(streetName => streetName.includes('de')); // then we filter to only the ones with 'de'
       */

      // 7. sort Exercise
      // Sort the people alphabetically by last name
      const alpha = people.sort((lastOne, nextOne) => {
        const [aLast, aFirst] = lastOne.split(", ");
        const [bLast, bFirst] = nextOne.split(", ");
        return aLast > bLast ? 1 : -1;
      });
      console.log(alpha);

      // 8. Reduce Exercise
      // Sum up the instances of each of these
      const data = [
        "car",
        "car",
        "truck",
        "truck",
        "bike",
        "walk",
        "car",
        "van",
        "bike",
        "walk",
        "car",
        "van",
        "car",
        "truck",
      ];

      /*
        we want to create a tally of the instances
        we start with a blank object at the end of the function
        */
      const transportation = data.reduce(function(obj, item) {
        //if there is no entry for the item, we create it with a key value of zero
        if(!obj[item]){
          obj[item] = 0;
        }
        //we cycle through the data array and increase key value each time we meet an item
        obj[item]++;
        return obj;
      }, {});
      //this ABOVE is the blank object


      console.log(transportation);