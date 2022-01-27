import * as profile from './model.mjs';
import express from 'express';
const app = express();

const PORT = 3000;

app.use(express.json()).use(express.urlencoded({ extended: true })) 

app.post("/persons", (req, res) => {
    console.log(req.body);
    profile.createProfile(req.body.name, req.body.age, req.body.phone)
        .then(profile => {
            res.status(201).json(profile)
        })
        .catch(error => {
            console.error(error);
            res.status(400);
        });
});

app.get('/persons', (req, res) => {
  profile.findProfile()
      .then(profile => { 
          if (profile !== null) {
              res.json(profile);
          } else {
              res.status(404).json({ Error: 'Resource not found' });
          }         
       })
      .catch(error => {
        console.log(error);
          res.status(400).json({ Error: 'Request failed' });
      });

});

app.delete('/persons/:_id', (req, res) => {
  profile.deleteProfile({_id: req.params._id})
      .then(deletedCount => {
          if (deletedCount === 1) {
              res.status(204).send();
          } else {
              res.status(404).json({ Error: 'Resource not found' });
          }
      })
      .catch(error => {
          console.error(error);
          res.send({ error: 'Request failed' });
      });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});