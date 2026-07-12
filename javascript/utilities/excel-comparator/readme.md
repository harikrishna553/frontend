# Excel Data Comparison Script

This project compares data between two Excel sheets (`src` and `target`). The `src` sheet contains the source data, and the `target` sheet contains the reference data. The columns in the source sheet are mapped to the columns in the target sheet, as defined in the `columnMapping` object in `index.js`.

## Steps to Use

### 1. Prepare the Excel File
Ensure you have an Excel file with two sheets:
- **`src`**: This sheet contains the source data.
- **`target`**: This sheet contains the data you want to compare the source data against.

The first row of both sheets should contain the column headers.

### 2. Configure Column Mapping
The `columnMapping` object defines how columns from the `src` sheet map to columns in the `target` sheet. You can modify the `columnMapping` object in `index.js` to meet your requirements. For example:

```javascript
const columnMapping = {
  id: "id",
  name: "myName",
  age: "age",
};
