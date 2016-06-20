$(document).ready(function () {


  if(!localStorage.getItem('puhelinnumero'))
  {
	$('#odotanSoittoa').removeClass('alert-warning').addClass('alert-danger').html('Puhelinnumero on tyhjä');
  } else {
	var sahkoposti = localStorage.getItem('puhelinnumero');
	$('#puhelinnumero').val(sahkoposti);
  }

  $('.savePuhelin').click(function(){

	var puhelinnumero = $('#puhelinnumero').val();
	localStorage.setItem('puhelinnumero', puhelinnumero);
	window.location.reload();
  });




            function onDeviceReady(){
                console.log("Device is ready");
            }

            function recognizeSpeech() {
                var maxMatches = 5;
                var promptString = "Speak now"; // optional
                var language = "en-US";                     // optional
                window.plugins.speechrecognizer.startRecognize(function(result){
                    alert(result);
                }, function(errorMessage){
                    console.log("Error message: " + errorMessage);
                }, maxMatches, promptString, language);
            }

            // Show the list of the supported languages
            function getSupportedLanguages() {
                window.plugins.speechrecognizer.getSupportedLanguages(function(languages){
                    // display the json array
                    alert(languages);
                }, function(error){
                    alert("Could not retrieve the supported languages : " + error);
                });
            }

            // Check to see if a recognition activity is present
            function checkSpeechRecognition() {
                window.plugins.speechrecognizer.checkSpeechRecognition(function(){
                    alert('Speech Recogition is present! :D');
                }, function(){
                    alert('Speech Recogition not found! :(');
                });
            }

            document.addEventListener("deviceready", onDeviceReady, true);




});


