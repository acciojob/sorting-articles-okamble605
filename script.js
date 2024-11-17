// Data for the band names
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// Function to remove "a", "an", "the" from the start of the band name and return the sorted list
function sortBands(bands) {
    const wordsToRemove = ["a", "an", "the"];

    // Sort the band names, considering the words to remove
    return bands.sort((a, b) => {
        // Function to remove leading words from each band name for sorting
        const removeLeadingWords = (str) => {
            let words = str.split(" ");
            while (wordsToRemove.includes(words[0].toLowerCase())) {
                words.shift(); // Remove the first word if it matches any in wordsToRemove
            }
            return words.join(" ");
        };

        return removeLeadingWords(a).localeCompare(removeLeadingWords(b));
    });
}

// Create the HTML structure dynamically
function displaySortedBands() {
    const sortedBands = sortBands(bands);
    const ul = document.getElementById("band");

    sortedBands.forEach(band => {
        const li = document.createElement("li");
        li.textContent = band;
        ul.appendChild(li);
    });
}

// Call the function to display the sorted bands when the page loads
displaySortedBands();
//your JS code here. If required.
// Data for the band names
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// Function to remove "a", "an", "the" from the start of the band name and return the sorted list
function sortBands(bands) {
    const wordsToRemove = ["a", "an", "the"];

    // Sort the band names, considering the words to remove
    return bands.sort((a, b) => {
        // Function to remove leading words from each band name for sorting
        const removeLeadingWords = (str) => {
            let words = str.split(" ");
            while (wordsToRemove.includes(words[0].toLowerCase())) {
                words.shift(); // Remove the first word if it matches any in wordsToRemove
            }
            return words.join(" ");
        };

        return removeLeadingWords(a).localeCompare(removeLeadingWords(b));
    });
}

// Create the HTML structure dynamically
function displaySortedBands() {
    const sortedBands = sortBands(bands);
    const ul = document.getElementById("band");

    sortedBands.forEach(band => {
        const li = document.createElement("li");
        li.textContent = band;
        ul.appendChild(li);
    });
}

// Call the function to display the sorted bands when the page loads
displaySortedBands();
