var redis = require("redis"),
    client = redis.createClient(),
    client1 = redis.createClient();

	client.on("error", function (err) {
        console.log("Error " + err);
    });

    /*

    //client.set("string key", "string val", redis.print);
    client.get("string key", function(err, value) {
    	console.info(value);
    });
    client.hget("hash key", "hashtest 1", function(err, value) {
    	console.info(value);
    });
    client.hgetall("hash key", function(err, value) {
    	console.info(value);
    });
    client.hset("hash key", "hashtest 1", "some value", redis.print);
    client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
    client.hkeys("hash key", function (err, replies) {
        console.log(replies.length + " replies:");
        replies.forEach(function (reply, i) {
            console.log("    " + i + ": " + reply);
        });
        client.quit();
    });

    */

    client.on("subscribe", function (channel, count) {
        console.log("channel " + channel + " count: " + count);
    });

    client.on("message", function (channel, message) {
        console.log("channel " + channel + ": " + message);
    });

    client.subscribe("aa");
    client.subscribe("bb");
    client.subscribe("cc");









