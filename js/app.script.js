function doPost(e) {
  // Get spreadsheet by URL
  let app = SpreadsheetApp.openByUrl(
    "https://docs.google.com/spreadsheets/d/1ROvb-hMYtCXnncGFJr7sijlLyvsylxV-MkgJBZRDLTo/edit?gid=0#gid=0"
  );
  let sheet = app.getSheetByName("Sheet1"); // Get sheet by name

  try {
    let obj = JSON.parse(e.postData.contents);

    // Validate required fields
    if (!obj.username || !obj.email || !obj.phone) {
      return ContentService.createTextOutput(
        "Error: Missing username, email, or phone."
      );
    }

    // Upload PDF to Drive
    let decode = Utilities.base64Decode(obj.base64);
    let blob = Utilities.newBlob(decode, obj.type, obj.name);
    let newFile = DriveApp.createFile(blob);
    newFile.setSharing(
      DriveApp.Access.ANYONE_WITH_LINK,
      DriveApp.Permission.VIEW
    );

    // Get preview URL for PDF
    let fileId = newFile.getId();
    let pdfUrl = `https://drive.google.com/file/d/${fileId}/preview`;

    // Determine starting row (assume row 1 if no data, or after last row)
    let lastRow = sheet.getLastRow();
    let startRow = lastRow > 0 ? lastRow + 1 : 1;

    // Insert data into columns A-D
    sheet.getRange(startRow, 1).setValue(obj.username); // A: Username
    sheet.getRange(startRow, 2).setValue(obj.email); // B: Email
    sheet.getRange(startRow, 3).setValue(obj.phone); // C: Phone
    sheet
      .getRange(startRow, 4)
      .setFormula(`=HYPERLINK("${pdfUrl}", "${obj.name}")`); // D: PDF Link

    return ContentService.createTextOutput(
      "PDF and user details saved successfully"
    );
  } catch (error) {
    return ContentService.createTextOutput("Error: " + error.toString());
  }
}
