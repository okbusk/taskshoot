function newtask() {
  var sheet = SpreadsheetApp.openById("").getSheetByName('メイン');　
  var sheetdata = SpreadsheetApp.openById("").getSheetByName('data');
  const columnBVals = sheet.getRange('A8:A').getValues(); // A列の値を配列で取得
  const LastRow = columnBVals.filter(String).length; //空白を除き、配列の数を取得
  var copy = LastRow + 8;
  sheetdata.getRange(1, 1, 1, 14).copyTo(sheet.getRange(copy, 1)) //getRange(開始行, 開始列, 何行選択するか, 何列選択するか)
}

function repeat() {
  var sheet = SpreadsheetApp.openById("").getSheetByName('メイン');　
  var sheetdata = SpreadsheetApp.openById("").getSheetByName('repeat');
  const columnBVals = sheet.getRange('A8:A').getValues(); // A列の値を配列で取得
  const LastRow = columnBVals.filter(String).length; //空白を除き、配列の数を取得
  const count　 = sheetdata.getRange('A:A').getValues(); // A列の値を配列で取得
  const LastRowsrepeat = count.filter(String).length; //空白を除き、配列の数を取得
  var copy = LastRow + 8;
  sheetdata.getRange(1, 1, LastRowsrepeat, 14).copyTo(sheet.getRange(copy, 1)) //getRange(開始行, 開始列, 何行選択するか, 何列選択するか)
}

function holydayrepeat() {
  var sheet = SpreadsheetApp.openById("").getSheetByName('メイン');　
  var sheetdata = SpreadsheetApp.openById("").getSheetByName('休日repeat');
  const columnBVals = sheet.getRange('A8:A').getValues(); // A列の値を配列で取得
  const LastRow = columnBVals.filter(String).length; //空白を除き、配列の数を取得
  const count　 = sheetdata.getRange('A:A').getValues(); // A列の値を配列で取得
  const LastRowsrepeat = count.filter(String).length; //空白を除き、配列の数を取得
  var copy = LastRow + 8;
  sheetdata.getRange(1, 1, LastRowsrepeat, 14).copyTo(sheet.getRange(copy, 1)) //getRange(開始行, 開始列, 何行選択するか, 何列選択するか)
}

function taskstart() {
  var sheet = SpreadsheetApp.openById("").getSheetByName('メイン');
  const columnBVals = sheet.getRange('M8:M').getValues(); // A列の値を配列で取得
  const LastRow = columnBVals.filter(String).length; //空白を除き、配列の数を取得
  var last = LastRow + 8;　　
  var date = new Date();
  var hh = ("0" + date.getHours()).slice(-2);
  var mm = ("0" + date.getMinutes()).slice(-2);
  var t = hh + ":" + mm;
  sheet.getRange(last, 13).setValue(t)
}

function taskend() {
  var sheet = SpreadsheetApp.openById("").getSheetByName('メイン');
  const columnBVals = sheet.getRange('N8:N').getValues(); // A列の値を配列で取得
  const LastRow = columnBVals.filter(String).length; //空白を除き、配列の数を取得
  var last = LastRow + 8;　　
  var date = new Date();
  var hh = ("0" + date.getHours()).slice(-2);
  var mm = ("0" + date.getMinutes()).slice(-2);
  var t = hh + ":" + mm;
  sheet.getRange(last, 14).setValue(t)
}

function doGet() {
  var sheet = SpreadsheetApp.openById("").getSheetByName('メイン');
  const columnBVals = sheet.getRange('M8:M').getValues(); // M列の値を配列で取得
  const columnBVals2 = sheet.getRange('N8:N').getValues(); // N列の値を配列で取得
  const LastRow = columnBVals.filter(String).length; //空白を除き、配列の数を取得
  const LastRow2 = columnBVals2.filter(String).length; //空白を除き、配列の数を取得
  Logger.log(LastRow)
  Logger.log(LastRow2)
  var zyoukyou = LastRow + LastRow2;
  Logger.log(zyoukyou)
  var date = new Date();
  var dd = ("00" + date.getHours()).slice(-2) + ":" + ("00" + date.getMinutes()).slice(-2);
  var last = LastRow + 8;
  var last2 = LastRow2 + 8;
  if (zyoukyou == 0) {
    sheet.getRange(last, 13).setValue(dd)
  } else {
    if ((zyoukyou % 2) != 0) {
      sheet.getRange(last2, 14).setValue(dd)
    } // 奇数だったときの処理
    else if ((zyoukyou % 2) == 0) {
      if (zyoukyou == 0) {
        sheet.getRange(last, 14).setValue(dd)
      } // 0以上だったときの処理
      else {
        var last = LastRow + 8;
        var t = dd;
        sheet.getRange(last, 13).setValue(dd)
      } // 偶数だったときの処理
    }
  }
}

function doPost() {
  var sheet = SpreadsheetApp.openById("").getSheetByName('メイン');　
  var sheetdata = SpreadsheetApp.openById("").getSheetByName('data')
  const columnBVals = sheet.getRange('M8:M').getValues(); // M列の値を配列で取得
  const columnBVals2 = sheet.getRange('N8:N').getValues(); // N列の値を配列で取得
  const LastRow = columnBVals.filter(String).length; //空白を除き、配列の数を取得
  const LastRow2 = columnBVals2.filter(String).length; //空白を除き、配列の数を取得
  Logger.log(LastRow)
  Logger.log(LastRow2)
  var copy = LastRow + 7;
  var copy2 = LastRow2 + 7;
  if (LastRow > LastRow2) {
    addtask(copy);
  } else if (LastRow < LastRow2) {
    addtask(copy2);
  } else {
    addtask(copy);
  }
}

function addtask(cv) {
  var sheet = SpreadsheetApp.openById("").getSheetByName('メイン');　
  var sheetdata = SpreadsheetApp.openById("").getSheetByName('data');
  sheet.insertRowAfter(cv);
  var cvcopy = cv + 1;
  sheetdata.getRange(1, 1, 1, 14).copyTo(sheet.getRange(cvcopy, 1)) //getRange(開始行, 開始列, 何行選択するか, 何列選択するか)
}

function taskname(cv, e) {
  var sheet = SpreadsheetApp.openById("").getSheetByName('メイン');
  sheet.getRange(23, 7).setValue(e)
}

function test() {
  var date = new Date();
  var dd = ("0" + date.getMinutes()).slice(-2); // 08
  Logger.log(dd)
}
