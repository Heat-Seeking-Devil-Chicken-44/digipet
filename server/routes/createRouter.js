const express = require('express');
const path = require('path');
const petController = require('../controller/petController');

const router = express.Router();

// serve index.html on the route for /create
router.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
});

//
router.get('/all', petController.getPets, (req, res) => {
  // console.log('made it to api', res.locals.getPets);
  return res.status(200).json(res.locals.getPets);
});

router.get('/one/:id', petController.getOnePet, (req, res) => {
  return res.status(200).json(res.locals.getOnePet);
});

// POST req
// router.post('/', petController.postPet, (req, res) => {
router.post('/add', petController.postPet, (req, res) => {
  return res.status(200).json(res.locals.postPets);
});

//PATCH req
router.patch('/update/:id', petController.updatePet, (req, res) => {
  res.status(200).json(res.locals.updatePet);
  console.log('made it to patch router!');
});

//DELETE req
router.delete('/pets/:id', petController.releasePet, (req, res) => {
  res.status(200).json(res.locals.releasePet);
});

router.delete('/pets', petController.releaseAll, (req, res) => {
  return res.status(200).json();
});

module.exports = router;
