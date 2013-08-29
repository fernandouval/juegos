<?php
error_reporting(0);

$title = "Al volver a jugar, obtuvieron las siguientes cartas. &#191;Qu&eacute; puntaje lograron?";
$address = "index.html";

$a = array(
1 => array(
   0 => 53,
   1 => 51,
   2 => 53,
   3 => 80,
   4 => 503,
   5 => 50111,
   6 => 2
),
2 => array(
   0 => 50,
   1 => 21,
   2 => 23,
   3 => 50,
   4 => 203,
   5 => 230,
   6 => 3
),
3 => array(
   0 => 110,
   1 => 101,
   2 => 110,
   3 => 1001,
   4 => 1010,
   5 => 10010,
   6 => 2
),
4 => array(
   0 => 70,
   1 => 52,
   2 => 62,
   3 => 70,
   4 => 502,
   5 => 5020,
   6 => 3
),
5 => array(
   0 => 14,
   1 => 14,
   2 => 50,
   3 => 104,
   4 => 1010,
   5 => 101111,
   6 => 1
),
);

$max=5;

$question=$_POST["question"] ;

if ($_POST["Random"]==0){
        srand((double)microtime()*1000000);
        $randval = rand(1,$max);
        $randval2 = $randval;
        }else{
        $randval=$_POST["Random"];
        $randval2=$_POST["Random"] + $question;
                if ($randval2>$max){
                $randval2=$randval2-$max;
                }
        }
        
$ok=$_POST["ok"] ;

if ($question==0){
        $question=0;
        $ok=0;
        $percentaje=0;
        }else{
        $percentaje= Round(100*$ok / $question);
        }
?>

<HTML>
<HEAD>
<TITLE>ITSU GAME</TITLE>
<link href="boilerplate.css" rel="stylesheet" type="text/css">
<link href="styles/style.css" rel="stylesheet" type="text/css">
<SCRIPT LANGUAGE='JavaScript'>
<!-- 
function Goahead (number){
        if (document.percentaje.response.value==0){
                if (number==<?php print $a[$randval2][6] ; ?>){
                        document.percentaje.response.value=1
                        document.percentaje.question.value++
                        document.percentaje.ok.value++
                }else{
                        document.percentaje.response.value=1
                        document.percentaje.question.value++
                }
        }
        if (number==<?php print $a[$randval2][6] ; ?>){
                document.question.response.value="Correct"
        }else{
                document.question.response.value="Incorrect"
        }
}
// -->
</SCRIPT>

</HEAD>
<BODY BGCOLOR=FFFFFF>

<CENTER>
<H1><?php print "$title"; ?></H1>
<div>

<?php if ($question<$max){ ?>

<FORM METHOD=POST NAME="percentaje" ACTION="<?php print $URL; ?>">

<BR><input type=submit value="Next >>">
<input type=hidden name=response value=0>
<input type=hidden name=question value=<?php print $question; ?>>
<input type=hidden name=ok value=<?php print $ok; ?>>
<input type=hidden name=Random value=<?php print $randval; ?>>
<br><?php print $question+1; ?> / <?php print $max; ?>
</FORM>
<HR>

<FORM METHOD=POST NAME="question">
<?php print $a[$randval2][0]; ?>
 
<BR>     <INPUT TYPE=radio NAME="option" VALUE="1"  onClick=" Goahead (1);"><?php print $a[$randval2][1] ; ?>
<BR>     <INPUT TYPE=radio NAME="option" VALUE="2"  onClick=" Goahead (2);"><?php print $a[$randval2][2] ; ?>
<?php if ($a[$randval2][3]!=""){ ?>
<BR>     <INPUT TYPE=radio NAME="option" VALUE="3"  onClick=" Goahead (3);"><?php print $a[$randval2][3] ; } ?>
<?php if ($a[$randval2][4]!=""){ ?>
<BR>     <INPUT TYPE=radio NAME="option" VALUE="4"  onClick=" Goahead (4);"><?php print $a[$randval2][4] ; } ?>
<?php if ($a[$randval2][5]!=""){ ?>
<BR>     <INPUT TYPE=radio NAME="option" VALUE="5"  onClick=" Goahead (5);"><?php print $a[$randval2][5] ; } ?>
<!--<BR>     <input type=text name=response size=8>-->


</FORM>

<?php
}else{
?>

<DIV>TD ALIGN=Center>
<BR>

<?php } ?>
</div>

</CENTER>
</BODY>
</HTML>
