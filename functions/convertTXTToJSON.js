const fs = require("fs");

// Read the raw text file containing the list
fs.readFile("./functions/input.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    // Split the text by newlines to create an array of data
    const jsonData = data
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.length > 0);

    // Write the JSON data to an output file
    fs.writeFile("converted.json", JSON.stringify(jsonData, null, 2), (err) => {
        if (err) {
            console.error("Error writing file:", err);
        } else {
            console.log("File saved as converted.json");
        }
    });
});
