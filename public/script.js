$.post('/getLight', {}, function(data) {
    console.log(data);

    if (data == "OFF") {
      $(".light img").attr("src", "light-bulb.svg");
    } else {
      $(".light img").attr("src", "light-bulb-yellow.svg");
    }
});

$(".light").click(function () {
    if($(".light img").attr("src") == "light-bulb-yellow.svg") {

      $.post('/changeLight', {value: "OFF"}, function() {
        $(".light img").attr("src", "light-bulb.svg");
      });

    } else {

      $.post('/changeLight', {value: "ON"}, function() {
          $(".light img").attr("src", "light-bulb-yellow.svg");
      });

    }
});
