// Twilio Credentials
const accountSid = 'AC4862315f7277edb17212d420c89296ef';
const authToken = '07b0639b18589680e729717cee093b8b';

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        to: '+16177857613',
        from: '+12348135704',
        body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
    })
.then(function(message){
    console.log(message.sid)
});