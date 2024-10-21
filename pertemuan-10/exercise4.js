//Array exercise

let people = ["Greg", "Mary", "Devon", "James"];

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

people.forEach(person => {
    console.log(person);
  });

people = people.filter(person => person !== "Greg"); // filter untuk remove the name in the string

people = people.filter(person => person !== "James");

people.unshift("Matt"); //to add name to the front of the array code

people.push("Carol"); //menambahkan nama sendiri

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Mary") {
      break;
    }
  }

let peopleCopy = people.slice();
peopleCopy = peopleCopy.filter(person => person !== "Mary" && person !== "Matt");

people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth", "Artie");
people.unshift("Matt");
people.push("Carol");

let withBob = people.concat(["Bob"]);

console.log(withBob); // Output: ["Matt", "Mary", "Elizabeth", "Artie", "Carol", "Bob"]




//Objective exercise

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

programming.languages.push("Go");

programming["difficulty"] = 7;

delete programming.jokes; // menghapus keyword jokes

programming.isFun = true;

let updatedLanguages = programming.languages.map(function(language, index) {
    return index + " - " + language;
  });
  console.log(updatedLanguages); // Output: ["0 - JavaScript", "1 - Python", "2 - Ruby", "3 - Go"]