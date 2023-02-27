var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://Khoa21donga:Khoa21dongaKhoa21dongaKhoa21donga@cluster0.o9ivn6p.mongodb.net/test2?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);
let monHocSchema = mongoose.Schema({
  maMonHoc: {
    type: String,
  },
  tenMonHoc: {
    type: String,
  },
  moTa: {
    type: String,
  },
});
let User = mongoose.model("MonHoc", monHocSchema);
/* GET home page. */
router.get("/", function (req, res, next) {
  User.find({}, (Error, data) => {
    res.render("index", { mons: data });
  });
});
//from-add
router.get("/form-add", function (req, res, next) {
  res.render("form-add", {});
});

router.post("/add", function (req, res, next) {
  User.create(req.body);
  res.redirect("/");
});

//  form-update
router.get("/form-update/:id", function (req, res, next) {
  User.findById(req.params.id, (error, data) => {
    res.render("form-update", { mons: data });
  });
});
// req.body.id update
router.post("/update", function (req, res, next) {
  console.log("TranDinhCuong", req.body);
  User.findByIdAndUpdate(req.body.id, req.body, (Error, data) => {
    res.redirect("/");
  });
});

//lệnh

router.get("/form-delete/:id", function (req, res, next) {
  User.findByIdAndDelete(req.params.id, (Error, data) => {
    res.redirect("/");
  });
});

module.exports = router;
