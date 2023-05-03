// Arrays for return sentences are below
const food = ["pizza", "lasagna", "fried chicken", "sea bass", "bolognese"];
const exercise = ["deadlift", "benchpress", "squats", "back row", "lunges"];
const quote = ["limit", "stars", "highest height"];

// The below function will select a random index from the given array
const randomizer = (array) => {
    return Math.floor(Math.random() * array.length);
};

const inspirationMessage = () => {
    // Select random indices for each array
    const foodRandom = randomizer(food);
    const exerciseRandom = randomizer(exercise);
    const quoteRandom = randomizer(quote);

    // Define a function to generate the message
    const messageGenerator = () => {
        const messageFood = `Today's food of the day is ${food[foodRandom]}`;
        const messageExercise = `Today's exercise of the day is ${exercise[exerciseRandom]}`;
        const messageQuote = `Reach for the ${quote[quoteRandom]}, you can do it!`;

        // Combine the three messages into one string and return it
        return `${messageFood}\n${messageExercise}\n${messageQuote}`;
    };

    // Call the messageGenerator function and log the result
    console.log(messageGenerator());
};

// Call the inspirationMessage function to generate and log a new message
inspirationMessage();
