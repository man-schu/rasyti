<!DOCTYPE html>
<html>
<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  
  <meta name="description" content="A free, open-source, online typing tutor.">

  <title>Rašyti - Touch Typing Trainer</title>

  <link type="text/css" rel="stylesheet" href="css/style.css">
  <link type="text/css" rel="stylesheet" href="css/keyboard.css?<?php echo date('l jS \of F Y h:i:s A'); ?>">
  <link type="text/css" rel="stylesheet" href="css/rasyti.css?<?php echo date('l jS \of F Y h:i:s A'); ?>">

  <link rel="icon" type="image/png" href="rasyti.png" />

  <script type="text/javascript" src="js/adblock-tester.js"></script>
  <script type="text/javascript" src="js/rasyti.js"></script>
</head>



<body>
  <div id="wrapper">
    <div id="content">
    
      <h1>Rašyti - Touch Typing Trainer</h1>
      

<p><button title="bigger"><a href="indexbig.php" style="text-decoration: none; color: inherit;"><span style="font-size: 12px">A</span>&rarr;<span style="font-size: 22px">A</span></a></button>
<input  title="reload page" type="button" style="font-size:22px;" value="&#10227;" onclick="location.reload(true);" /></p>

<?php
include('include/index_content.php');
?>


<?php
include('include/index_gamelink.php');
?>

    </div>
  
    <div id="footer">
    <p><a href="info.html" target="_blank">&#8505; about the application</a>&ensp;&ensp;&ensp;&ensp;&ensp; Version <?php include('include/index_version.php'); ?></p>


    </div>
  </div>
</body>
</html>

