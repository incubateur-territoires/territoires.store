exports.handler = async (event, context, callback) => {
  const request = JSON.parse(event.body)

  // At row to Airtable
  const Airtable = require('airtable');
  const base = new Airtable({apiKey: process.env.AIRTABLE_KEY}).base(process.env.AIRTABLE_BASE);
  
  base('Territoires Store').create({
      "Nom": request.contact.nom,
      "Email": request.contact.email,
      "Telephone": request.contact.tel,
      "Services": request.services.map(s => s.service)
    }, 
    {typecast: true},
    function(err, records) {
      if (err) {
        console.error(err);
        return;
      }
    }
  );

  // Send emails
  const mailjet = require ('node-mailjet')
    .connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE)

  const email = mailjet
    .post("send", {'version': 'v3.1'})
    .request({
      "Messages":[{
        "From": {
          "Email": "jonathan.pichot@anct.gouv.fr",
          "Name": "Incubateur des Territoires"
        },
        "To": [{
          "Email": request.contact.email
        }],
        "Subject": "[Territoires Store] Test",
        "TextPart": "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
        "HTMLPart": "<h3>Dear passenger 1, welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3><br />May the delivery force be with you!"
      }]
    })

  email
    .then((result) => {
      console.log(result.body)
    })
    .catch((err) => {
      console.log(err.statusCode)
    })

  // Wrap up
  callback(null, {
    statusCode: 200,
    body: "Success"
  });
}
