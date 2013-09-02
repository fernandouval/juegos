<HTML>
    <BODY BGCOLOR=FFFFFF>
    <?php 
    $options = array(
        1 => array(
           0 => 53,
           1 => 51,
           2 => 53,
           3 => 80,
           4 => 503,
        ),
        2 => array(
           0 => 50,
           1 => 21,
           2 => 23,
           3 => 50,
           4 => 203,
        ),
        3 => array(
           0 => 110,
           1 => 101,
           2 => 110,
           3 => 1001,
           4 => 1010,
        ),
        4 => array(
           0 => 70,
           1 => 52,
           2 => 62,
           3 => 70,
           4 => 502,
        ),
        5 => array(
           0 => 14,
           1 => 14,
           2 => 50,
           3 => 104,
           4 => 1010,
        ),
    );
    if (isset($_POST["question"])){
        $timer_prev = time() - $_POST["timer"];
        $counter = ','.$timer_prev.'-Instancia:'.$_POST["question"].'-'.$_POST["option"];
        file_put_contents('logs/prueba.csv', $counter, FILE_APPEND);
        $timer = time();
        $question=$_POST["question"]+1;
    }
    else {
        $question=1;
        $timer = time();
        $counter="Juego:1b,".date('Ymd H:i:s');
        file_put_contents('logs/prueba.csv', $counter, FILE_APPEND);
    }
?>
        <CENTER>
            <H1>Al volver a jugar, obtuvieron las siguientes cartas. &#191;Qu&eacute; puntaje lograron?</H1>
            <img class='child' src="images/child<?php print $question; ?>.png">
            <img class='num' src="images/1b<?php print $question; ?>num.png">
            <FORM METHOD=POST NAME="question" action="juego1b.php">
                <INPUT TYPE="hidden" NAME="question" VALUE="<?php print $question; ?>">
                <INPUT TYPE="hidden" NAME="timer" VALUE="<?php print $timer; ?>">
                <INPUT TYPE="radio" NAME="option" VALUE="<?php print $options[$question][0]; ?>"><?php print $options[$question][0]; ?>
                <INPUT TYPE="radio" NAME="option" VALUE="<?php print $options[$question][1]; ?>"><?php print $options[$question][1]; ?>
                <INPUT TYPE="radio" NAME="option" VALUE="<?php print $options[$question][2]; ?>"><?php print $options[$question][2]; ?>
                <INPUT TYPE="radio" NAME="option" VALUE="<?php print $options[$question][3]; ?>"><?php print $options[$question][3]; ?>
                <INPUT TYPE="radio" NAME="option" VALUE="<?php print $options[$question][4]; ?>"><?php print $options[$question][4]; ?>
                <INPUT class="next" TYPE="submit" NAME="submit" VALUE="Siguiente">
            </FORM>
        </CENTER>
    </BODY>
</HTML>
