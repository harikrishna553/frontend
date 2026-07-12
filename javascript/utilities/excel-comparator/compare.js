const ExcelJS = require("exceljs");
const fs = require("fs");

// Column name mapping from src to target
const columnMapping = {
  id: "id", // Mapping column 'id' (src) to column 'id' (target)
  name: "myName", // Mapping column 'name' (src) to column 'myName' (target)
  age: "age", // Mapping column 'age' (src) to column 'age' (target)
};

/**
 * Reads an Excel sheet and converts it to an array of objects
 * where each object represents a row in the sheet, with keys
 * corresponding to the column names (headers).
 * 
 * @param {Object} sheet - The Excel sheet object to read.
 * @returns {Array} rows - An array of objects representing the rows in the sheet.
 */
const readSheet = (sheet) => {
  const headerRow = sheet.getRow(1); // Get the first row (header)
  const columnNames = headerRow.values.slice(1); // Skip the first index (ExcelJS 1-based index)

  let rows = [];
  let count = 0;
  
  // Loop through each row in the sheet starting from row 2 (skip header)
  sheet.eachRow({ includeEmpty: false }, (row) => {
    count++;
    if (count !== 1) { // Skip the header row
      let rowData = {};
      columnNames.forEach((colName, index) => {
        rowData[colName] = row.getCell(index + 1).value; // Use column name as key for values
      });
      rows.push(rowData);
    }
  });
  return rows;
};

/**
 * Compares the source collection (srcCollection) with the target collection (targetCollection)
 * by matching records based on column mappings. It checks for mismatches and returns
 * the results as an array of mismatch descriptions.
 * 
 * @param {Array} srcCollection - The source collection of objects.
 * @param {Array} targetCollection - The target collection of objects.
 * @param {Object} columnMapping - A mapping of source column names to target column names.
 * @returns {Array} mismatches - An array of mismatch descriptions.
 */
const compareCollectionsBruteForce = (srcCollection, targetCollection, columnMapping) => {
  let mismatches = [];

  // Loop through each item in the srcCollection
  srcCollection.forEach((srcItem, srcIndex) => {
    // Check if any item in the target collection matches the srcItem based on columnMapping
    const matchFound = targetCollection.some((targetItem) => {
      return Object.keys(columnMapping).every((key) => srcItem[key] === targetItem[columnMapping[key]]);
    });

    // If no match is found, log it as a mismatch
    if (!matchFound) {
      mismatches.push(`Mismatch found at src index ${srcIndex + 1}: ${JSON.stringify(srcItem)}`);
    }
  });

  return mismatches;
};

/**
 * Prints the mismatches to the console.
 * If no mismatches are found, it logs "No mismatches found."
 * 
 * @param {Array} mismatches - An array of mismatch descriptions.
 */
const printMismatches = (mismatches) => {
  if (mismatches.length > 0) {
    mismatches.forEach((mismatch) => {
      console.log(mismatch); // Log each mismatch to the console
    });
  } else {
    console.log("No mismatches found.");
  }
};

// Read and process the Excel file
const filePath = "./files/input.xlsx"; // Path to the input Excel file
const outputFilePath = "comparison_report.txt"; // Path to the output file where mismatches will be written

// Load the workbook and process the sheets
const workbook = new ExcelJS.Workbook();
workbook.xlsx.readFile(filePath).then(() => {
  const srcSheet = workbook.getWorksheet("src"); // Get the source sheet
  const targetSheet = workbook.getWorksheet("target"); // Get the target sheet

  // Check if both sheets exist
  if (!srcSheet || !targetSheet) {
    console.error("Source or target sheet is missing.");
    return;
  }

  // Read both sheets into internal arrays of objects
  const srcRows = readSheet(srcSheet);
  console.log("Source Rows:", srcRows);

  const targetRows = readSheet(targetSheet);
  console.log("Target Rows:", targetRows);

  // Compare the two collections based on column mappings
  const mismatches = compareCollectionsBruteForce(srcRows, targetRows, columnMapping);

  // Print mismatches to the console
  printMismatches(mismatches);
});
