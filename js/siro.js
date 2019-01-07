//calender-------------------------------------*/

//
//  【 カレンダー選択入力 】  http://www.cman.jp/
//
//   商用,改変,再配布はすべて自由ですですが、動作保証はありません
//
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//    maintenance history
//
//    Ver   Date        contents
//    0.9   2016/6/20   New
//    0.91  2016/6/21   カレンダ表示位置修理
//    0.91  2017/4/28   ユーザ様ご指摘による不具合修正
//                      
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//
//  使用方法
//    https://web-designer.cman.jp/javascript_ref/keybord/calendar/
//
//  【注意】
//  引数やユーザ設定内容についてはノーチェックです
//    解析しやすいようにコメントを多く入れています。
//    JavaScriptのファイルサイズを削減する場合は、コメントやスペースを消してください。
//    再配布する場合は、当サイトのJavaScriptが元であることを記載ください。
//
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


var cmanCLD_VAR = {};

// ----- 初期イベントの登録 ----------------------------------------------------------
if     ( window.addEventListener ){window.addEventListener("load", cmanCLD_JS_init, false);}
else if( window.attachEvent )     {window.attachEvent( 'onload', cmanCLD_JS_init );}


// =========================================================================================
//  初期処理（オンロード時）
// =========================================================================================
function cmanCLD_JS_init(){

  var wID   = '';
  var wObjAt;

  // ----- 対象タグの一覧を配列に格納 ----------------------------------------------
  var wTagList = document.getElementsByTagName('input');


  // ----- input type="date","text" を対象にイベント登録する -----------------------
  for(var i = 0; i < wTagList.length; i++){


    // ----- "date"と"text"だけを対象とする --------------------------------------
    if((wTagList[i].type.toLowerCase() != "date")&&(wTagList[i].type.toLowerCase() != "text")){
      continue; // 次の要素へ
    }

    // ----- 属性"cmanCLDat"を取得 -----------------------------------------------
    wObjAt = wTagList[i].getAttribute("cmanCLDat");
    if(wObjAt === null){
      wObjAt = '';
    }


    // ----- "text"の場合は属性"cmanCLDat"が実在しない場合は対象外 ---------------
    if(wObjAt ==''){
      continue; // 次の要素へ
    }


    // ----- 属性で「OFF」（未使用）が定義されている場合は対象外 -----------------
    wObjAt = wObjAt.replace(/\s+/g, "");
    if(wObjAt.match(/USE:OFF/i)){
      continue; // 次の要素へ
    }


    // ----- "date"でブラウザが"date"に対応している場合は動作させない ------------
    //      （二重にパレットが出る）
    if(wTagList[i].type.toLowerCase() == "date"){

      // ブラウザがdateに対応しているかチェック
      var wObjTest = document.createElement("input");
      wObjTest.setAttribute("type", "date");

      if(wObjTest.type.toLowerCase() == "date"){
        continue; // 次の要素へ
      }
    }


    // ----- 対象の要素にカラーパレットを開くイベント（KeyDown時）を登録 ---------
    wTagList[i].onkeydown = cmanCLD_JS_open;
    wTagList[i].onclick = cmanCLD_JS_open;

  }

  // ----- カレンダーを閉じるためのイベント登録 ------------------------------------
  document.body.onclick = cmanCLD_JS_bodyClick;
  window.onscroll   = cmanCLD_JS_cl;
}

// =========================================================================================
//  カレンダー以外がクリックされた場合は、カレンダを閉じる
// =========================================================================================
function cmanCLD_JS_bodyClick(e){

  var wObjClick = e.target;

  // ----- カレンダーが開いていない場合は対象外 ------------------------------------
  if(document.getElementById(cmanCLD_VAR["popId"])){
  }else{
    return;
  }

  // ----- クリックされた要素の親要素に「cmanCLD」が実在する場合は対象外 -----------
  var wObjAt = wObjClick.getAttribute("cmanCLDat");
  if((wObjAt === null)||(wObjAt == '')){
  }else{
    return;
  }

  // ----- クリックされた要素の親要素に「cmanCLD」が実在する場合は対象外 -----------
  if(wObjClick.id.match(/^cmanCLD/)){
    return;
  } 


  // ----- クリックされた要素の親要素に「cmanCLD」が実在する場合は対象外 -----------
  var wOyaObj = wObjClick;
  for(var j = 0; j < 10; j++){

    wOyaObj = wOyaObj.parentNode;
    if((typeof wOyaObj === 'object')&&(wOyaObj.tagName.toLowerCase() != 'html')){
      if(wOyaObj.id.match(/^cmanCLD/)){
        return;
      } 

    }else{
      break;
    }
  }

  // ----- カレンダーが開いている場合は閉じる --------------------------------------
  cmanCLD_JS_cl();

}

// =========================================================================================
//  カレンダーを開く  
// =========================================================================================
function cmanCLD_JS_open(e){

  // ----- カレンダーが開いている場合は閉じる --------------------------------------
  cmanCLD_JS_cl();


  // ----- 対象外キーは処理を抜ける ------------------------------------------------
  switch (e.keyCode){
  case 9  :   // tab
  case 16 :   // shift
    return;
    break;
  }


  // ----- 日付入力エリア ----------------------------------------------------------
  cmanCLD_VAR["objValue"] = e.target;


  // ----- 選択済み日付をハッシュ変数に保存 ----------------------------------------
  cmanCLD_VAR["selectedDate"] = '';
  if(cmanCLD_JS_DateChk(cmanCLD_VAR["objValue"].value)){


    var wSplit = cmanCLD_VAR["objValue"].value.split("-");

    if(wSplit.length == 3){
      cmanCLD_VAR["selectedDate"] = cmanCLD_JS_dateEdit(wSplit[0], wSplit[1], wSplit[2]);
    }
  }


  // ----- カレンダ編集＆表示 ------------------------------------------------------
  if(cmanCLD_VAR["selectedDate"] == ''){
    cmanCLD_JS_create('','');
  }
  else{
    cmanCLD_JS_create( new Date(cmanCLD_VAR["selectedDate"]).getFullYear(),  new Date(cmanCLD_VAR["selectedDate"]).getMonth() + 1);
  }


  // ----- 押されたキーはクリアする ------------------------------------------------
  e.keyCode = 0;

  return false;

}


// =========================================================================================
//  表示年月変更
// =========================================================================================
function cmanCLD_JS_res(argYM, argUD){

  var wNextOutYMD;

  wNextOutYMD = new Date( cmanCLD_VAR["outYYYY"], parseInt(cmanCLD_VAR["outMM"]) - 1, 1);

  // ----- 次に表示する年月を求める ------------------------------------------------
  if(('outYYYY' in cmanCLD_VAR)&&('outMM' in cmanCLD_VAR)){

    if(argYM == 'y'){
      if(argUD == 'u'){
        wNextOutYMD.setYear(wNextOutYMD.getFullYear() + 1);
      }else{
        wNextOutYMD.setYear(wNextOutYMD.getFullYear() - 1);
      }
    }else{
      if(argUD == 'u'){
        wNextOutYMD.setMonth(wNextOutYMD.getMonth() + 1);
      }else{
        wNextOutYMD.setMonth(wNextOutYMD.getMonth() - 1);
      }
    }

  }else{
    wNextOutYMD = new Date();
  }


  // ----- カレンダ編集＆表示 ------------------------------------------------------
  cmanCLD_JS_edit( wNextOutYMD.getFullYear(),  wNextOutYMD.getMonth() + 1);

}


// =========================================================================================
//  カレンダーの編集
// =========================================================================================
function cmanCLD_JS_edit(argYYYY, argMM){

  var wObjDate_FirstDay;         // 月初
  var wObjDate_LastDay;          // 月末
  var wStr_FirstDay_Week  = 0;   // 月初の曜日
  var wStr_LastDay_Week   = 0;   // 月末の曜日
  var wObjDate_LastMonth;        // 前月
  var wObjDate_NextMonth;        // 翌月
  var wObjDate_JpFirstDay;       // 元号判定用の元号別月初
  var wOutY_JpName        = '';  // 元号
  var wOutY_JpYY          = '';  // 和暦年
  var wDayList            = [];  // カレンダーに表示する日付
  var wDayListIdx         = 0;
  var wDayListTargetIdxF  = 0;
  var wDayListTargetIdxT  = 0;
  var wStrNowDate         = 0;   // 現在日付（表示のカレンダの月と違う場合は0）
  var wLang               = "";


  // ----- 曜日表示テーブル --------------------------------------------------------
  var wWeekJA = [ '日', '月', '火', '水', '木', '金', '土' ];
  var wWeekEN = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];


  // ----- 和暦の表示テーブル（元号変更時は追加が必要） ----------------------------
  var wG_YMS  = [ '1868-01-25', '1912-07-30', '1926-12-25', '1989-01-08' ];
  var wG_STR  = [ '明治', '大正', '昭和', '平成' ];


  // ----- カレンダー枠のID設定 ----------------------------------------------------
  cmanCLD_VAR["popId"]  = 'cmanCLD_POP';    // POP枠のID


  // ----- 属性"cmanCLDat"より言語を取得 -------------------------------------------
  var wObjAt = cmanCLD_VAR["objValue"].getAttribute("cmanCLDat").replace(/\s+/g, "");
  if(wObjAt.match(/LANG:EN/i))  {wLang = 'EN';}
  else              {wLang = 'JA';}


  // ----- 表示する日付を設定 ------------------------------------------------------
  if((argYYYY == '')||(argMM=='')){
    wObjDate_FirstDay = new Date(new Date().getFullYear(), new Date().getMonth() , 1);  // 当日の月初
  }else{
    wObjDate_FirstDay = new Date(argYYYY, argMM - 1, 1);
  }

  // 明治以前は表示しない
  if(wObjDate_FirstDay.getTime() < new Date(wG_YMS[0]).getTime()){
    wObjDate_FirstDay = new Date(wG_YMS[0]);
  }


  // ----- 月末を調べる ------------------------------------------------------------
  wObjDate_LastDay  = new Date(wObjDate_FirstDay.getFullYear(), wObjDate_FirstDay.getMonth() + 1, 0);


  // ----- 表示する和暦年・元号を設定 ----------------------------------------------
  for (var i = wG_YMS.length - 1; i >=0; i--){

    var wSplit = wG_YMS[i].split("-");

//    wObjDate_JpFirstDay =  new Date(wSplit[0], wSplit[1], 1);     // Ver0.92 Delete
    wObjDate_JpFirstDay =  new Date(wSplit[0], wSplit[1] - 1, 1);     // Ver0.92 Insert

    if(wObjDate_FirstDay.getTime() >= wObjDate_JpFirstDay.getTime()){
      wOutY_JpName = wG_STR[i];
      wOutY_JpYY   = wObjDate_FirstDay.getFullYear() - wObjDate_JpFirstDay.getFullYear() + 1;
      if(wOutY_JpYY == 1){wOutY_JpYY = '元';}
      break;
    }
  }


  // ----- 当日がカレンダに実在するか確認する --------------------------------------
  wStrNowDate = cmanCLD_JS_dateEdit( new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate());


  // ----- 表示カレンダー設定（上部の年月） ----------------------------------------
  document.getElementById('cmanCLD_ID_outy').innerHTML  = wObjDate_FirstDay.getFullYear() + '年';
  if(wLang == 'JA'){
    document.getElementById('cmanCLD_ID_outy').innerHTML  += '<div style="font-size:80%;font-weight: normal;padding-top:1px;text-align: center;">' + wOutY_JpName + wOutY_JpYY + '年</div>';
  }
  document.getElementById('cmanCLD_ID_outm').innerText  = (wObjDate_FirstDay.getMonth() + 1) + '月';


  // ----- 月初・月末の曜日を調べる ------------------------------------------------
  wStr_FirstDay_Week  = wObjDate_FirstDay.getDay();   // 0:日曜
  wStr_LastDay_Week = wObjDate_LastDay.getDay();    // 0:日曜


  // ----- 前月末日を調べる --------------------------------------------------------
  wObjDate_LastMonth = new Date(wObjDate_FirstDay.getFullYear(), wObjDate_FirstDay.getMonth(), 0);
  wObjDate_NextMonth = new Date(wObjDate_FirstDay.getFullYear(), wObjDate_FirstDay.getMonth() + 2, 1);


  // ----- 1行目の前月最終分を配列に格納 -------------------------------------------
  var wLastMonthDay = wObjDate_LastMonth.getDate() - wStr_FirstDay_Week + 1;
  if(wStr_FirstDay_Week != 0){
    for ( var j = 0; j < wStr_FirstDay_Week; j++){
      wDayList[wDayListIdx++] = cmanCLD_JS_dateEdit(wObjDate_LastMonth.getFullYear(), wObjDate_LastMonth.getMonth() + 1, wLastMonthDay++);
    }
  }

  // ----- 当月分を配列に格納 ------------------------------------------------------
  wDayListTargetIdxF = wDayListIdx;
  for ( var j = 1; j <= wObjDate_LastDay.getDate(); j++){
    wDayList[wDayListIdx++] = cmanCLD_JS_dateEdit(wObjDate_FirstDay.getFullYear(), wObjDate_FirstDay.getMonth() + 1, j);
  }
  wDayListTargetIdxT = wDayListIdx - 1;


  // ----- 最終行目の翌月最終分を配列に格納 ----------------------------------------
  var wNextMonthDay = 1;
  if(wStr_LastDay_Week != 6){
    for ( var j = wStr_LastDay_Week; j < 6; j++){
//      wDayList[wDayListIdx++] = cmanCLD_JS_dateEdit(wObjDate_NextMonth.getFullYear(), wObjDate_NextMonth.getMonth() + 1, wNextMonthDay++);    // Ver0.92 Delete
      wDayList[wDayListIdx++] = cmanCLD_JS_dateEdit(wObjDate_NextMonth.getFullYear(), wObjDate_NextMonth.getMonth(), wNextMonthDay++);    // Ver0.92 Insert
    }
  }


  // ----- カレンダー部分の編集 ----------------------------------------------------
  var wCldTbl  = '';
  wCldTbl   +=  '<table id="cmanCLD_ID_tbl1">';


  // ----- カレンダー部分（曜日）の編集 --------------------------------------------
  var wWeekTbl;
  if(wLang == 'JA'){wWeekTbl = wWeekJA.concat();}
  else             {wWeekTbl = wWeekEN.concat();}
  wCldTbl   +=  '<tr><th style="color: #ff3333;">'+wWeekTbl[0]+'</th><th>'+wWeekTbl[1]+'</th><th>'+wWeekTbl[2]+'</th><th>'+wWeekTbl[3]+'</th><th>'+wWeekTbl[4]+'</th><th>'+wWeekTbl[5]+'</th><th style="color: #0033ff;">'+wWeekTbl[6]+'</th></tr>';


  // ----- カレンダー部分（日付）の編集 --------------------------------------------
  for (var i = 0; i < wDayList.length; i++){

    if((i % 7) == 0){
      wCldTbl   +=  '<tr>';
    }

    if  (i < wDayListTargetIdxF){
      wCldTbl   +=  '<td class="cmanCLD_CSS_StrOff" id="cmanCLD_ID_col' + i + '" onclick="cmanCLD_JS_sel(\'' + wDayList[i] + '\')">' + new Date(wDayList[i]).getDate() + '</td>';
    }
    else if (i > wDayListTargetIdxT){
      wCldTbl   +=  '<td class="cmanCLD_CSS_StrOff" id="cmanCLD_ID_col' + i + '" onclick="cmanCLD_JS_sel(\'' + wDayList[i] + '\')">' + new Date(wDayList[i]).getDate() + '</td>';
    }
    else{
      wCldTbl   +=  '<td class="cmanCLD_CSS_StrOn" id="cmanCLD_ID_col' + i + '" onclick="cmanCLD_JS_sel(\'' + wDayList[i] + '\')"';

      var wStyle  = '';
      if(cmanCLD_VAR["selectedDate"] == wDayList[i]){
        wStyle  +=  'background-color:#ffcccc;';
      }
      if(wStrNowDate == wDayList[i]){
        wStyle  +=  'border:1px solid #0099ff;';
      }

      if(wStyle !=''){
        wCldTbl +=  ' style="'+wStyle+'"';
      }

      wCldTbl   +=  '>' + new Date(wDayList[i]).getDate() + '</td>';
    }

    if((i % 7) == 6){
      wCldTbl   +=  '</tr>';
    }

  }

  wCldTbl   +=  '</table>';


  document.getElementById('cmanCLD_ID_dateList').innerHTML = wCldTbl;


  // ----- カレンダの表示 ----------------------------------------------------------
  cmanCLD_VAR["objPop"].style.display = '';

  cmanCLD_VAR["outYYYY"]  = wObjDate_FirstDay.getFullYear();
  cmanCLD_VAR["outMM"]  = wObjDate_FirstDay.getMonth() + 1;

}

// =========================================================================================
//  カレンダーの雛形枠作成
// =========================================================================================
function cmanCLD_JS_create(argYYYY, argMM){


  cmanCLD_VAR["popId"]  = 'cmanCLD_POP';    // POP枠のID

  if(document.getElementById(cmanCLD_VAR["popId"])){return;}


  // ----- CSS定義 -----------------------------------------------------------------
  var wCss =  '<style type="text/css">';
  wCss  +=  '#cmanCLD_ID_area {' +
        'width: 100%;' + 
        'max-width:260px;' + 
        'border: 1px solid #000;' + 
        'font-size: 9pt;' + 
        'background-color: #fff;' +
        'line-height: 1.1em;' +
        'letter-spacing: 1px;' +
      '}';
  wCss  +=  '#cmanCLD_ID_tbl1 {' + 
        'width: 100%;' + 
        'text-align: center;' + 
        'border-collapse:collapse;' + 
        'border: 1px solid #fff;' + 
        'font-size: 10pt;' + 
        'color: #333;' + 
      '}';
  wCss  +=  '#cmanCLD_ID_tbl1 th {' + 
        'background-color: #eee;' + 
        'padding: 3px;' + 
        'border-top: 1px solid #666;' + 
        'border-bottom: 1px solid #ccc;' + 
        'font-weight: normal;' + 
      '}';
  wCss  +=  '#cmanCLD_ID_tbl1 td {' + 
        'padding: 3px;' + 
        'cursor: pointer;' + 
        'font-weight: normal;' + 
      '}';
  wCss  +=  '#cmanCLD_ID_tbl1 td:hover {' + 
        'background-color: #ddeeff;' + 
      '}';
  wCss  +=  '#cmanCLD_ID_ym {' + 
        'width: 100%;' + 
        'text-align: center;' + 
        'border-collapse:collapse;' + 
        'border: 1px solid #fff;' + 
        'font-size: 10pt;' + 
        'color: #333;' + 
      '}';
  wCss  +=  '.cmanCLD_CSS_btm {' + 
        'margin: 5px;' + 
        'width: 22px;' + 
        'height: 22px;' + 
        'cursor: pointer;' + 
        'border: 1px solid #fff;' + 
        'border-radius: 15%;' + 
        'background-color: #fff;' + 
      '}';
  wCss  +=  '.cmanCLD_CSS_btm:hover {' + 
        'border: 1px solid #ccc;' + 
        'background-color: #eee;' + 
        'box-shadow: none;' + 
      '}';
  wCss  +=  '.cmanCLD_CSS_bty {' + 
        'margin: 2px auto 2px 0;' + 
        'width: 22px;' + 
        'height: 11px;' + 
        'cursor: pointer;' + 
        'border: 1px solid #fff;' + 
        'border-radius: 15%;' + 
        'background-color: #fff;' + 
      '}';
  wCss  +=  '.cmanCLD_CSS_bty:hover {' + 
        'border: 1px solid #ccc;' + 
        'background-color: #eee;' + 
        'box-shadow: none;' + 
      '}';
  wCss  +=  '.cmanCLD_CSS_mstr{' + 
        'font-size: 120%;' + 
        'font-weight :bold;' + 
      '}';
  wCss  +=  '.cmanCLD_CSS_StrOn{' + 
        'color: #333;' + 
      '}';
  wCss  +=  '.cmanCLD_CSS_StrOff{' + 
        'color: #999;' + 
      '}';
  wCss  +=  '</style>';


  // ----- HTML定義 ----------------------------------------------------------------
  var wHtml = '';

  // ----- カレンダー枠 ------------------------------------------------------------
  wHtml +='<div id="cmanCLD_ID_area">';


  // ----- 上部年月 ----------------------------------------------------------------
  wHtml +=  '<div>' +
      '<table id="cmanCLD_ID_ym">' +
        '<colgroup span="1" style="width:10%">' +
        '<colgroup span="1" style="width:30%">' +
        '<colgroup span="2" style="width:10%">' +
        '<colgroup span="1" style="width:20%">' +
        '<colgroup span="2" style="width:10%">' +
        '<tr>' +
          '<td>' +
            '<div class="cmanCLD_CSS_btm" onclick="cmanCLD_JS_res(\'y\',\'d\')">' +
              '<svg width="20px" height="20px" viewBox="0 0 22 22">' +
                '<polygon points="14,4 14,18 7,11" style="fill:#999;stroke:none;stroke-width:1">' +
              '</svg>' +
            '</div>' +
          '</td>' +
          '<td>' +
            '<div class="cmanCLD_CSS_mstr" style="text-align: center;" id="cmanCLD_ID_outy">YYYY年</div>' +
          '</td>' +
          '<td>' +
            '<div class="cmanCLD_CSS_btm" onclick="cmanCLD_JS_res(\'y\',\'u\')">' +
              '<svg width="20px" height="20px" viewBox="0 0 22 22">' +
                '<polygon points="9,4 9,18 16,11" style="fill:#999;stroke:none;stroke-width:1">' +
              '</svg>' +
            '</div>' +
          '</td>' +
          '<td>' +
            '<div class="cmanCLD_CSS_btm" style="margin-left:auto;margin-right:2px;" onclick="cmanCLD_JS_res(\'m\',\'d\')">' +
              '<svg width="20px" height="20px" viewBox="0 0 22 22">' +
                '<polygon points="14,4 14,18 7,11" style="fill:#999;stroke:none;stroke-width:1">' +
              '</svg>' +
            '</div>' +
          '</td>' +
          '<td>' +
            '<div class="cmanCLD_CSS_mstr" style="text-align: center;" id="cmanCLD_ID_outm">MM月</div>' +
          '</td>' +
          '<td>' +
            '<div class="cmanCLD_CSS_btm" style="margin-left:2px;margin-right:auto;" onclick="cmanCLD_JS_res(\'m\',\'u\')">' +
              '<svg width="20px" height="20px" viewBox="0 0 22 22">' +
                '<polygon points="9,4 9,18 16,11" style="fill:#999;stroke:none;stroke-width:1">' +
              '</svg>' +
            '</div>' +
          '</td>' +
          '<td>' +
            '<div class="cmanCLD_CSS_btm" style="margin-left:auto;margin-right:2px;" onclick="cmanCLD_JS_cl()">' +
              '<svg width="20px" height="20px" viewBox="0 0 22 22">' +
                '<path stroke="#999" stroke-width="2" fill="none" d="M 7 7 L 16 16  M 7 16 L 16 7">' +
              '</svg>' +
            '</div>' +
          '</td>' +
        '</tr>' +
      '</table>' +
      '</div>';


  // ----- 日付 --------------------------------------------------------------------
  wHtml +=  '<div id="cmanCLD_ID_dateList">' +
      '</div>';

  wHtml +=  '<div style="margin:3px 0 0 auto;text-align: center;font-size: 8pt;padding: 2px 5px;color:#999;background-color:#f3f3f3">' +
        'calendar : ' +
        '<a href="http://web-designer.cman.jp/javascript_ref/" target="_blank" style="color:#999;font-weight:normal;">web-designer.cman.jp</a>' +
      '</div>';

  wHtml +='</div>';


  // ----- 表示枠の作成＆割り当て（非表示で割り当て） ------------------------------
  var wEle = document.createElement("div");   // 新規に要素（タグ）を生成
  wEle.id = cmanCLD_VAR["popId"];
  wEle.style.display = "none";
  wEle.style.position = 'fixed';
  document.body.appendChild(wEle);            // このページ (document.body) の最後に生成した要素を追加

  cmanCLD_VAR["objPop"] = wEle;
  cmanCLD_VAR["objPop"].innerHTML = wCss + "\n" + wHtml;


  // ----- カレンダー内容を編集 ----------------------------------------------------
  cmanCLD_JS_edit(argYYYY, argMM);


  // ----- 入力要素の位置・サイズ取得 ----------------------------------------------
  var wObjValue = cmanCLD_VAR["objValue"].getBoundingClientRect();
  var wValueX = wObjValue.left;
  var wValueY = wObjValue.top;
  var wValueH = wObjValue.height;


  // ----- カレンダーの位置を一旦入力エリアの下に割り当て --------------------------
  cmanCLD_VAR["objPop"].style.left  = wValueX + 'px';
  cmanCLD_VAR["objPop"].style.top   = ( wValueY + wValueH ) + 'px';


  // ----- カレンダーを100%透過（見えない状態で）非表示解除 ------------------------
  cmanCLD_VAR["objPop"].style.opacity = 0;
  cmanCLD_VAR["objPop"].style.display = '';


  // ----- カレンダーの縦サイズを取得 ----------------------------------------------
  var wObjPop = cmanCLD_VAR["objPop"].getBoundingClientRect();
  var wPopH = wObjPop.height;


  // ----- カレンダーの表示位置設定 ------------------------------------------------
  // 表示可能域を比較し、優先順位：下＞上で設定
  // 両方とも満たさない場合は下に表示
  var wH = document.documentElement.clientHeight - (wValueY + wValueH);

  if(wH > wPopH){
    cmanCLD_VAR["objPop"].style.top   = (wValueY + wValueH)+'px';
  }
  else if (wValueY > wPopH){
    cmanCLD_VAR["objPop"].style.top   = (wValueY - wPopH )+'px';
  }
  else{
    cmanCLD_VAR["objPop"].style.top   = (wValueY + wValueH)+'px';
  }


  // ----- カレンダーの透過を解除して表示 ------------------------------------------
  cmanCLD_VAR["objPop"].style.opacity = 1;

}

// =========================================================================================
//  日付が選択されたら
// =========================================================================================
function cmanCLD_JS_sel(argYMD){

  // ----- 選択した日付を設定する --------------------------------------------------
  cmanCLD_VAR["objValue"].value = argYMD;
  cmanCLD_VAR["selDate"]        = argYMD;

  // ----- カレンダーを閉じる ------------------------------------------------------
  cmanCLD_JS_cl();

}

// =========================================================================================
//  閉じるボタンが押されたら
// =========================================================================================
function cmanCLD_JS_cl(){

  // ----- カレンダーが開いていない場合はreturn ------------------------------------
  if(document.getElementById(cmanCLD_VAR["popId"])){
  }else{
    return;
  }


  // ----- 指定の関数を実行 --------------------------------------------------------
  var wObjAt = cmanCLD_VAR["objValue"].getAttribute("cmanCLDat").replace(/\s+/g, "").split(",");

  for( var i=0; i<wObjAt.length; i++){

    if(wObjAt[i].substr(0,5).toUpperCase() == "FUNC:"){

      if('selDate' in cmanCLD_VAR){
      }else{
        cmanCLD_VAR["selDate"] = '';
      }

      try{
        eval(wObjAt[i].substr(5)+'("'+cmanCLD_VAR["selDate"]+'")');
      }
      catch(e){
        alert('関数('+wObjAt[i].substr(5)+')を実行できません');
      }
    }
  }


  // ----- 登録したカレンダー要素を消す --------------------------------------------
  var wDelElm = document.getElementById(cmanCLD_VAR["popId"]);
  document.body.removeChild(wDelElm);

  // ----- WKハッシュクリア --------------------------------------------------------
  for(var key in cmanCLD_VAR){
    delete cmanCLD_VAR[key];
  }
}

// =========================================================================================
//  日付チェック
// =========================================================================================
function cmanCLD_JS_DateChk(argDate) {

  var wY = 0;
  var wM = 0;
  var wD = 0;

  if(argDate==''){return true;}

  var wYMD = argDate.split("-");

  if(wYMD.length != 3){
    return false;
  }

  if(wYMD[0].toString().match(/^[0-9]+$/)){wY = parseInt(wYMD[0]);}
  if(wYMD[1].toString().match(/^[0-9]+$/)){wM = parseInt(wYMD[1]);}
  if(wYMD[2].toString().match(/^[0-9]+$/)){wD = parseInt(wYMD[2]);}

  if((wY < 1900)||(wM < 1)||(wM > 12)||(wD < 1)||(wD > 31)){
    return false;
  }

  var wDate = new Date(wY, wM - 1, wD, 0, 0, 0, 0);

  if((wDate.getFullYear() != wY)||(wDate.getMonth() != wM - 1)||(wDate.getDate() != wD)){
          return false;
  }

  return true;
}
// =========================================================================================
//  日付編集
// =========================================================================================
function cmanCLD_JS_dateEdit(argYear, argMonth, argDate){

  if(argYear == ''){
    return '';
  }

  var wYYYY = argYear;
  var wMM   = ("0" + argMonth).slice(-2);
  var wDD   = ("0" + argDate).slice(-2);

  var wObjAt = cmanCLD_VAR["objValue"].getAttribute("cmanCLDat").replace(/\s+/g, "");

  if      (wObjAt.match(/FORM:2/i)){return wYYYY + '' + wMM + '' + wDD;}
  else if (wObjAt.match(/FORM:3/i)){return wYYYY + '/' + wMM + '/' + wDD;}
  else                             {return wYYYY + '-' + wMM + '-' + wDD;}

}