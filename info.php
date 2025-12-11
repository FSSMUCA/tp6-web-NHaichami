<?php
$etablissement = "Institut Supérieur Exemple";
$module = "Programmation Web 2";
$annee = 2025;

$a = 10;
$b = 5;

$addition = $a + $b;
$produit = $a * $b;
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Info PHP</title>
</head>
<body>

<h1>Informations TP6</h1>

<p>Établissement : <?php echo $etablissement; ?></p>
<p>Module : <?php echo $module; ?></p>
<p>Année : <?php echo $annee; ?></p>

<h2>Variables PHP</h2>
<p>A = <?php echo $a; ?></p>
<p>B = <?php echo $b; ?></p>
<p>Addition = <?php echo $addition; ?></p>
<p>Multiplication = <?php echo $produit; ?></p>

</body>
</html>
