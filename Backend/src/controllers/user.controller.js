// login , signup , send otp , chnagePassword

const userModel = require("../models/user.model");
const OTP = require("../models/OTP.model");
const profileModel = require('../models/profile.model');
const otpgenerator = require("otp-generator");
const bcrypt = require('bcrypt');
// fetch email from request ki body
exports.sendOTP = async (req, res) => {
  try {
    const { email } = req.body;
    // user find
    const user = await userModel.findOne({ email });
    // if user already exist than return a response
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Usser already registered",
      });
    }
    // generate otp
    var otp = otpgenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    console.log("OTP generated: ", otp);
    //   check otp unique or not

    let result = await OTP.findOne({ otp: otp });
    while (result) {
      otp = otpgenerator(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      });
      result = await OTP.findOne({ otp: otp });
    }

    const otpPayloaded = { email, otp };
    // create entry for db
    const otpBody = await OTP.create(otpPayloaded);
    console.log(otpBody);
    // return response successfully

    res.status(200).json({
      success: true,
      message: "OTP sent successfully",
      otp,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// signup
// datafetch req ki body se
// valodation kr lo
// 2 password match kr lo
// check user already exist or not
// find most recent otp stored for the user
// validate otp
// password hash
// db entry created
// return response

exports.signup = async (req, res) => {
  try {
    // data fetch req ki body se
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      accountType,
      contactNumber,
      otp,
    } = req.body;
    // validation
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !otp
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    // password match

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password and confirmPassword does not match Please try again",
      });
    }
    // user already existnor not

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User is already registered",
      });
    }

    // recent otp stored for the user

    const recentOtp = await OTP.find({ email })
      .sort({ createdAt: -1 })
      .limit(1);
    console.log(recentOtp);
    // validate otp
    if (recentOtp.length == 0) {
      // otp not found
      return res.status(400).json({
        success: false,
        message: "OTP not found",
      });
    } else if(otp !== recentOtp.otp) {
        // invalid otp
        return res.status(400).json({
            success: false,
            message: "Invalid OTP",
        })

    }   

  
//   hash password 
const hashedPassword = await bcrypt.hash(password, 10);
// entry create in db
const profileDetails = await profileModel.create({
    gender:null,
    contactNumber:null,
    about:null,
    dateOfBirth:null,
});

const user = await userModel.create({
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    contactNumber,
    accountType,
    additionalDetails: profileDetails._id,
    image:`https://api.dicebear.com/5.x/initials/svg?seed=${firstname} ${lastname}`
})
// return res
return res.status(200).json({
    success:true,
    message: "User registered successfully",
    user,
});

} 
catch (error) {
    return res.status(400).json({
      success: false,
      message: "User cannot be registered . please try again",
    });
  }

};
