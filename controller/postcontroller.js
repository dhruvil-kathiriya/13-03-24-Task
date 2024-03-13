const Post = require("../model/postmodel");
const geolocation = require("geolocation");

module.exports.geoLoc = geolocation.getCurrentPosition(function (err, position) {
  if (err) throw err;
  console.log(position);
});

module.exports.create = async (req, res) => {
  try {
    req.body.isActive = true;
    req.body.geolocation = geoLoc;
    let PostData = await Post.create(req.body);
    if (PostData) {
      res.status(200).json({
        msg: "Post Created Successfully",
        status: 1,
        Data: PostData,
      });
    } else {
      res.status(200).json({
        msg: "Postis not Created",
        status: 0,
      });
    }
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong", status: 0 });
  }
};
module.exports.view = async (req, res) => {
  try {
    let PostData = await Post.find();
    res.status(200).json({
      msg: "Your Posts are",
      status: 1,
      Data: PostData,
    });
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong", status: 0 });
  }
};

module.exports.delete = async (req, res) => {
  try {
    let PostData = await Post.findByIdAndDelete({ title: req.body.title });
    res.status(200).json({
      msg: "Post Deleted Successfully",
      status: 1,
      Data: PostData,
    });
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong", status: 0 });
  }
};
module.exports.update = async (req, res) => {
  try {
    let PostData = await Post.findByIdAndUpdate({ title: req.body.title });
    res.status(200).json({
      msg: "Post Deleted Successfully",
      status: 1,
      Data: PostData,
    });
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong", status: 0 });
  }
};
