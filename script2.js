const words = ["Wonderful", "Joyful", "Happiness", "Time", "Task", "Apple"];
const regex = /\b[^Aa]{6,}\b/;

words.forEach(word => {
    console.log(`${word}: ${regex.test(word)}`);
});
