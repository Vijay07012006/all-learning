const userModel = require("../models/user.model");
const foodPartnerModel = requrie("../models/foodpartner.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const isUserAlreadyExists = await userModel.findOne({ email });

    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (isUserAlreadyExists) {
      return res.status(400).json({ message: "User already exists " });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      fullName,
      email,
      password: hashedPassword,
    });
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    res.cookie("token", token);

    res.status(201).json({
      message: "User registered successfully",
      user: {
        _id: user._id,
        email: user.email,
        fullName: user.fullName,
      },
    });
  } catch (err) {
    console.log("Internal error ", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.stats(400).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
    );

    res.cookie("token", token);

    res.status(200).json({
      message: "User logged in successfully",
      user: {
        _id: user._id,
        email: user.email,
        fullName: user.fullName,
      },
    });
  } catch (err) {
    console.log("Internal error ", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const logoutUser = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    message: "User logged  out successfully",
  });
};

// for food partner

const registerFoodPartner = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const isAccountAlreadyExists = await foodPartnerModel.findOne({ email });

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!isAccountAlreadyExists) {
      return res.status(400).json({
        message: "Food partner account already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const foodPartner = await foodPartnerModel.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      {
        id: foodPartner._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    res.cookie("token", token);

    res.status(200).json({
      message: "Food partner registered successfully",
      foodPartner: {
        id: foodPartner._id,
        email: foodPartner.email,
        name: foodPartner.name,
      },
    });
  } catch (err) {
    console.log("Internal error ", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const loginFoodPartner = async (req, res) => {
  try {
    const { email , password} = req.body;
    const  foodPartner = await foodPartnerModel.findOne({email});
    if(!foodPartner) {
        return res.status(400).json({
            message:"Invalid email or password"
        })
    } 
    const isPasswordValid = await bcrypt.compare(password , foodPartner.password);
    if(!isPasswordValid){
        return res.status(200).json({
            message:"Invalid email or password"
        })
    }
    const token = await jwt.sign({
        id:foodPartner._id,
    } , process.env.JWT_SECRET, {expiresIn:"7d"});

    res.cookie("token" , token)

    res.status(200).json({
        message:"Food Partner logged in successfully",
        foodPartner:{
            id:foodPartner._id,
            email:foodPartner.email,
            name:foodPartner.name
        }
    })

  } catch (err) {
    console.log("Internal error ", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const logoutFoodPatner = (req , res)=>{
    res.cookie("token")
    res.status(200).json({
        message:"Food partner logged out successfully"
    })
}
module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  registerFoodPartner,
    loginFoodPartner,
    logoutFoodPatner
};
