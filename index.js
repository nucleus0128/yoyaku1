   $ （関数 （） {
    //カレンダー
    $ （関数 （） {
        $ （'input [name = "date00"]' ）。デートピッカー（{
            dateFormat：'yy / mm / dd' 、
        } ）;
    } ）;

    -
    $ （'＃form-number' ）。クリック（関数 （） {
        $ （'＃form-name' ）。空（）;
        var  num  =  $ （'input [name = "number"]：checked' ）。val （）;
        for  （i  =  0 ;  i  <  num ;  i ++ ） {
            $ （'＃form-name' ）。追加（
                `<input class =" form-control w-100 mt-1 "name =" text "maxlength =" 10 ">`
            ）;
        }
    } ）;

    //この
    $ （'フォーム' ）。送信（関数 （） {
        var  date01  =  $ （'input [name = "date01"]' ）。val （）;
        var  time01  =  $ （'input [name = "time01"]' ）。val （）;
        var  date02  =  $ （'input [name = "date02"]' ）。val （）;
        var  time02  =  $ （'input [name = "time02"]' ）。val （）;
        var  date03  =  $ （'input [name = "date03"]' ）。val （）;
        var  time03  =  $ （'input [name = "time03"]' ）。val （）;
        var  number  =  $ （'input [name = "number"]：checked' ）。val （）;
        var  names  =  '' ;
        var  tel  =  $ （'input [name = "tel"]' ）。val （）;
        $ （'＃form-name' ）。子供（）。each （function  （i 、 elm ） {
            名前 + =  $ （elm ）。val （） +  '、' ;
        } ）
        名前 = 名前。スライス（0 、 -1 ）; _

        var  msg  =  `・第一希望日：$ { date01 } \ n希望時間：$ { time01 } \ n・第二希望日：$ { date02 } \ n希望時間：$ { time02 } \ n・第三日：$ { date03 } \ n希望時間：$ { time03 } \ nデータベース：$ {番号} \ n氏名： $ {名前} \ n住所：$ {アドレス} \ n電話番号：$ { tel } ` ;
        sendText （msg ）;

         falseを返します;
    } ）;
} ）;
