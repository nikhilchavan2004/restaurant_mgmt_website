import express from "express";
import rv from "../models/rs.js";
import errorhandler from "../error/error.js";
export const srv = async (req, res, next) => {
  const { firstname, lastname, email, phone, date, time } = req.body;
  if (!firstname || !lastname || !email || !phone || !date || !time) {
    return next(new errorhandler("please fill full reservation "));
  }
  try {
    const j = await rv.create({
      firstname,
      lastname,
      email,
      phone,
      date,
      time,
    });
    res.status(200).json({
      j,
      sucess: true,
      message: "reservation created successfully",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (error) => error.message
      );
      return next(new errorhandler(validationErrors.join(" ")));
    }
    return next(error);
  }
};
