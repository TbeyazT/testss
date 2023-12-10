$(document).ready(function() {
    $('#submitBug').on('click', function() {
      var bugDescription = $('#bugDescription').val();
  
      if (bugDescription.trim() === '') {
        alert('Please describe the bug.');
        return;
      }
  
      if (confirm('Are you sure you want to submit this bug report?')) {
        var discordWebhookURL = 'https://discord.com/api/webhooks/1183354505652346930/fBgfBhjH3jPeFxbn0Yk0KxJhLeyJGgLrkB7fUNEU2qHPwdDi_88AWdncPNBx9iQuccwa';
  
        var bugPayload = {
          content: 'Bug Report: ' + bugDescription
        };
  
        $.ajax({
          type: 'POST',
          url: discordWebhookURL,
          data: JSON.stringify(bugPayload),
          contentType: 'application/json',
          success: function(response) {
            alert('Bug report submitted successfully!');
          },
          error: function(err) {
            alert('Error submitting bug report.');
            console.error('Error:', err);
          }
        });
      }
    });
  });
  