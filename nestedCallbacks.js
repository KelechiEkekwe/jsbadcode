var fs = require('fs');

function readFiles(filePaths) {
    filePaths.forEach(function (filePath) {
        fs.readFile(filePath, 'utf8', function (err, data) {
            if (err) {
                console.log("Error reading file:", err);
            }
            else {
                processFile(data);
                if (data.includes("error")) {
                    console.log("File contains error");
                } else console.log("File processed successfully");
            }
        });
    });
}

function processFile(content) {
    console.log("Processing file...");
    // Do something with the content
}

readFiles(['file1.txt', 'file2.txt']);
