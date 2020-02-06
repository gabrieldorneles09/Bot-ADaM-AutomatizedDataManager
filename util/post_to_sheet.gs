function doPost(e) { // change to doPost(e) if you are recieving POST data
  var ss = SpreadsheetApp.openById('1We5srJJ2-kqeY7gJGOYXRVKyWPFlHSdKZm4GXFuKGjc');
  var sheet = ss.getSheetByName("GTS");
  var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]; //read headers
  var nextRow = sheet.getLastRow(); // get next row
  var cell = sheet.getRange('a1');
  var col = 0;
  for (i in headers){ // loop through the headers and if a parameter name matches the header name insert the value
    if (headers[i] == "Timestamp"){
      val = new Date();
    } else {
      val = e.parameter[headers[i]]; 
    }
    cell.offset(nextRow, col).setValue(val);
    col++;
  }
  //http://www.google.com/support/forum/p/apps-script/thread?tid=04d9d3d4922b8bfb&hl=en
  return undefined;
}
//http://www.google.sc/support/forum/p/apps-script/thread?tid=345591f349a25cb4&hl=en
function setUp() {
  ScriptProperties.setProperty('active', SpreadsheetApp.getActiveSpreadsheet().getId());
}