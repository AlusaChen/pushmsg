<html>
<head>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
    <script src="http://127.0.0.1:8080/socket.io/socket.io.js" type="text/javascript"></script>
    <script type="text/javascript">
    $(function(){
        var sio = io('http://127.0.0.1:8080');
        sio.on('connect',function(){
        	var uid = '<?php echo $_GET["uid"] ?>';
            sio.emit('join', uid);
            sio.on('message',function(omsg){
                //console.info('msg from server : ', omsg);
                $('#inbox').append("<li>msg from server : " + omsg + " </li>");
            });
        });
    });
    </script>
</head>
<body>
Incoming Chat:&nbsp;<ol id="inbox"></ol>
</body>
</html>
<?php
// http://localhost/nodejs/pushmsg/test.php?uid=1
?>
