import express, { Express, Request, Response } from "express";
var bcrypt = require("bcryptjs");
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const createUser = async (req: Request, res: Response) => {
  try {
    var hashedPassword = bcrypt.hashSync(
        req.body.password,
        Number(process.env.SALT)
      );
    const user: any = await prisma.user.create({
      data: {
        email: req.body.email,
        name:req.body.name,
        password: hashedPassword
      },
    });
    res.status(200).send({
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findMany();
    res.status(200).send({
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    let user = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        email: req.body.email,
        name:req.body.name,
        password:req.body.password
      },
    });
    res.status(200).send({
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).send({
      message: "User deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


