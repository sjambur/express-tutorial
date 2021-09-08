const express = require("express");
const router = express.Router();

const {
  getPeople,
  createPerson,
  createPersonPostman,
  modifyPerson,
  removePerson,
} = require("../controllers/people");

// router.get("/", getPeople);

// router.post("/", createPerson);

// router.post("/postman", createPersonPostman);

// router.put("/:id", modifyPerson);

// router.delete("/:id", removePerson);

router.route("/").get(getPeople).post(createPerson);
router.route("/postman").post(createPersonPostman);
router.route("/:id").put(modifyPerson).delete(removePerson);

module.exports = router;
