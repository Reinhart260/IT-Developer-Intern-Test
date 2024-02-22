<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $file = fopen("messages.txt", "a");
    fwrite($file, "Nama: $name\nEmail: $email\nPesan: $message\n\n");
    fclose($file);

    header("Location: websiteUMKM.html");
    exit;
}
?>
