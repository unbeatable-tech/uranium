const bookModel = require("../models/bookModel");
const mongoose = require("mongoose");
const validator = require("../validators/validator");
const aws = require("aws-sdk");




aws.config.update({
    accessKeyId: "AKIAY3L35MCRUJ6WPO6J",
    secretAccessKey: "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",
    region: "ap-south-1"
})

// this function uploads file to AWS and gives back the url for the file
let uploadFile = async(file) => {
    return new Promise(function(resolve, reject) { 

        // Create S3 service object
        let s3 = new aws.S3({ apiVersion: "2006-03-01" });
        var uploadParams = {
            ACL: "public-read", // this file is publically readable
            Bucket: "classroom-training-bucket", 
            Key: "abc/" +  file.originalname, 
            Body: file.buffer,
        };

        // Callback - function provided as the second parameter ( most oftenly)
        s3.upload(uploadParams, function(err, data) {
            if (err) {
                return reject({ "error": err });
            }
            console.log(data)
            console.log(`File uploaded successfully`);
            return resolve(data.Location); //HERE 
        });
    });
};
const addLink = async function(req, res) {
    try {
        let files = req.files;
        
        if (files && files.length > 0) {
            //upload to s3 and return true..incase of error in uploading this will goto catch block( as rejected promise)
            let uploadedFileURL = await uploadFile(files[0]); 
            res.status(201).send({ status: true,msg: "file uploaded succesfully", data: uploadedFileURL });
        } else {
            res.status(400).send({ status: false, msg: "No file found" });
        }
    } catch (err) {
        console.log("error is: ", err);
        res.status(500).send({ status: false, msg: err });
    }
};


const createBook = async function (req, res) {
  try {
    const bookData = req.body;

    if (!validator.isValidRequestBody(bookData)) {
      return res.status(400).send({ status: false, msg: "pls add details" });
    }

    let { title, excerpt, userId, ISBN, category, subcategory, releasedAt } =
      bookData;
    if (!validator.isValid(title)) {
      return res.status(400).send({ status: false, msg: "pls add tittle" });
    }
    if (!validator.isValid(excerpt)) {
      return res.status(400).send({ status: false, msg: "pls add excerpt" });
    }
    if (!validator.isValid(category)) {
      return res.status(400).send({ status: false, msg: "pls add category" });
    }
    if (!validator.isValid(subcategory)) {
      return res
        .status(400)
        .send({ status: false, msg: "pls add subcategory" });
    }
    if (!validator.isValid(ISBN)) {
      return res.status(400).send({ status: false, msg: "pls add ISBN" });
    }

    if (!validator.isValid(userId)) {
      return res.status(400).send({ status: false, msg: "Userid is required" });
    }
    if (!validator.isValidObjectId(userId)) {
      return res.status(400).send({ status: false, msg: "invalid userId" });
    }
    // ISBN validation using regex
    if (!/^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/.test(ISBN))
      return res.status(400).send({ status: false, msg: "ISBN is invalid" });
    // excerpt validation using regex

    if (!/^[0-9a-zA-Z,\-.\s:;]+$/.test(excerpt))
      return res.status(400).send({ status: false, msg: "excerpt is invalid" });

    const sameISBN = await bookModel.findOne({ ISBN: ISBN, isDeleted: false });
    if (sameISBN)
      return res
        .status(400)
        .send({ status: false, msg: `${ISBN} already exists` });

    const sameTitle = await bookModel.findOne({
      title: title,
      isDeleted: false,
    });
    if (sameTitle)
      return res
        .status(400)
        .send({ status: false, msg: `${title} already exists` });

    if (!validator.isValid(releasedAt)) {
      return res
        .status(400)
        .send({ status: false, message: "Date of release is required." });
    }
    if (
      !/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/.test(
        releasedAt
      )
    )
      return res
        .status(400)
        .send({
          status: false,
          msg: `Released date must be in "YYY-MM-DD" and a "valid date`,
        });

    if (req["decodedToken"].userId != userId) {
      return res
        .status(403)
        .send({ status: false, message: "You are not authorized" });
    }

    // let object = {
    //   title,
    //   excerpt,
    //   ISBN,
    //   category,
    //   subcategory,
    //   userId,
    //   releasedAt,
    // };



    const books = await bookModel.create(bookData);
    return res
      .status(201)
      .send({ status: true, message: "success", data: books });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ status: false, message: error.message });
  }
};
module.exports={createBook,addLink}