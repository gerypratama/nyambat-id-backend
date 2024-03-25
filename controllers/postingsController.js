const data = {
  postings: require("../model/postings.json"),
  setPostings: function (data) {
    this.postings = data;
  },
};

const getAllPostings = (req, res) => {
  res.json(data.postings);
};

module.exports = { getAllPostings };
