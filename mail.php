<html lang="pl">
    <head>
        <!-- Writed by Dorian Namyślak :> -->
        <meta charset="UTF-8">
        <title>Fauna Service</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="author" content="Dorian Namyślak">
        <meta name="description" content="Faunaservice.pl">
        <link rel="stylesheet" href="stylemain.css">
        <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
        <link rel="icon" href="logotyp.svg" type="image/x-icon">
        <link rel="x-icon" href="logotyp.svg" type="image/x-icon">
        <link rel="shortcut icon" href="logotyp.svg">
        <link rel="fluid-icon" type="image/png" href="logotyp.svg">
        <link rel="logo" type="image/png" href="logotyp.svg">
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
        <style>
            #con-form-php {
                text-align: center;
                display: block;
                background: url("img/fs_4_tlo.jpg");
                background-position: center;
                background-size: contain;
                width: 100%;
                height: 100%;
                overflow-y: visible;
            }
            #con-form-php div {
                font-size: 24px;
                color: #bfdc0e;
                font-weight: 0.02em;
                font-weight: 400;
                padding-top: 150px;
                margin-left: 50px;
                margin-right: 50px;
                padding-bottom: 25px;
            }
            #con-form-php hr {
                width: 55px;
                height: 2px;
                margin-bottom: 25px;
            }

            .php-button {
                letter-spacing: 0.03em;
                font-weight: 400;
                text-align: center;
                text-decoration: none;
                margin-top: 25px;
                margin-bottom: 25px;
                padding-top: 7px;
                padding-bottom: 7px;
                padding-left: 15px;
                padding-right: 15px;
                background-color: #bfdc0e;
                color: #fff;
                transition: 0.5s ease;
            }
            .php-button:hover {
                background: transparent;
                color: #bfdc0e;
                border: 1px solid #bfdc0e;
                transition: 0.4s ease-out;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <section class="con-header" id="top-header">
                <a class="con-header-logo" href="index.html">
                    <img src="logotyp.svg" alt="Błąd: Nie udało się załadować obrazka.">
                </a>
                <div class="con-header-links">
                    <a class="con-header-links-link" href="index.html">o nas</a>
                    <a class="con-header-links-link" href="index.html">oferta</a>
                    <a class="con-header-links-link" href="index.html">kontakt</a>
                </div>
                <div class="con-header-button" onclick="goto()">
                    <p id="button-event">Zamów transport</p>
                </div>
            </section>
            <section id="con-form-php">
<?php

date_default_timezone_set('UTC');
setlocale(LC_ALL, 'fr_CA.utf-8');

$to = 'kontakt1@faunaservice.pl';
$name = $_POST['name'];
$surname = $_POST['surname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$type = $_POST['type'];
$age = $_POST['age'];
$size = $_POST['size'];
$animalname = $_POST['animalname'];
$placepick = $_POST['placepick'];
$destination = $_POST['destination'];
$term = $_POST['term'];
$datatime = date("Y-m-d H:i:s");


$user_adr = $_SERVER['REMOTE_ADDR'];
$blacklist = array(
    "exampl1",
    "example2"
);

if(empty($animalname)) {
    $animalname = "Nie podano imienia zwierzęcia.";
} else if(preg_match('~[0-9]~', $animalname)) {
    $animalname = "Błędnie podano imię zwierzęcia: " . $animalname;
}

$subject = 'Nowe zgloszenie od: ' . $name . ' ' . $surname . ' (' . $email . ') ' . $user_adr . ' ' . "\r\n";
$message = "<b>Dodatkowe, ważne informacje dotyczące<br>zwierzęcia (np. choroby, alergie,<br>przyjmowane leki) - <br></b>"
. $_POST['message'] . "<br>\r\n";$message .= "<b>Gatunek/rasa - <br></b>" . $type . "<br>\r\n";$message .= "<b>Telefon kontaktowy - <br></b>" . $phone . "<br>\r\n";
$message .= "<b>Wiek - <br></b>" . $age . "<br>\r\n";$message .= "<b>Wielkość (cm, kg) - <br></b>" . $size . "<br>\r\n";
$message .= "<b>Imię zwierzęcia - <br></b>" . $animalname . "<br>\r\n";$message .= "<b>Miejsce odbioru (kraj/miasto) - <br></b>" . $placepick . "<br>\r\n";
$message .= "<b>Miejsce docelowe (kraj/miasto) - <br></b>" . $destination . "<br>\r\n";$message .= "<b>Termin - <br></b>" .  $term . "<br>\r\n";
$message .= "<br>";$message .= "<b>Dane zgłaszającego: </b>" . $name . ' ' . $surname . ' (' . $email . ')' . "\r\n";
$headers = 'From: '  . $name . ' ' . $surname . ' (' . $email . ')';$headers = "Content-Type: text/html; charset=UTF-8";

if(empty($name) || empty($surname) || empty($email) || empty($message) || empty($phone) || empty($type) || 
empty($age) || empty($size) || empty($placepick) || empty($destination)) {
    echo "<div> Wypełnij wszystkie wymagane rubryki. </div>";
    die();
} else {
    if(preg_match('~[0-9]+~', $phone)) {
        if(preg_match('~[0-9]~', $age)) {
            if(preg_match('~[0-9]~', $placepick)) {
                echo "<div> Podaj prawidłowe miejsce odbioru. (kraj/miasto) </div>";
            } else {
                if(preg_match('~[0-9]~', $destination)) {
                    echo "<div> Podaj prawidłowe miejsce docelowe. (kraj/miasto) </div>";
                } else {
                    if($placepick == $destination) {
                        echo "<div> Podałeś/aś te same miasto/kraj jako miejsce docelowe i odbioru. Podaj przybliżony adres miejsca. </div>";
                    } else if($placepick != $destination) {
                        if(strpos($message, "nigger") || strpos($message, "jebać") || strpos($message, "kurwa") !== false) {
                            echo "<div> W wiadomości są niedozwolone słowa! Sprawdź swoją wiadomość. </div>";
                        } else {
                            if(in_array($user_adr, $blacklist)) {
                                echo '<meta http-equiv = "refresh" content = "0; url = https://faunaservice.pl/accessdenied.html">';
                                die();
                                exit;
                            } else {
                                $file = "logmail.txt";
                                $text = file_get_contents($file);
                                $text .= "\n" . $datatime . " Request by: " . $user_adr . "\n" . "\n" . "- " . $to . "\n" . "- " . $subject . "\n" . $message . "\n" . "- " . $headers . "\n";
                                file_put_contents($file, $text);
                                mail($to, $subject, $message, $headers);
                                echo '<meta http-equiv = "refresh" content = "0; url = https://faunaservice.pl">';
                                echo "<div> Zgłoszenie zostało wysłane </div>";
                                exit;
                            }
                        }
                    }
                }
            }
        } else {
            echo "<div> Podaj prawidłowy wiek zwierzęcia. </div>";
        }
    } else {
       echo "<div> Podaj poprawny numer telefonu kontaktowego. </div>";
    }
}

?>
                    <hr color="#bfdc12">
                    <a class="php-button" href="https://faunaservice.pl">Powrót do strony głównej</a>
            </section>
        </div>
    </body>
</html>