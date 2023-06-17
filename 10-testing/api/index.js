import * as dotenv from 'dotenv'
dotenv.config()
import express from "express";
import pkg from "@prisma/client";
import morgan from "morgan";
import cors from "cors";
import { auth } from  'express-oauth2-jwt-bearer'

const requireAuth = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUER,
  tokenSigningAlg: 'RS256'
});

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.get("/todos", requireAuth, async (req, res) => {
  const auth0Id = req.auth.payload.sub;

  const user = await prisma.user.findUnique({
    where: {
      auth0Id,
    },
  });

  const todos = await prisma.todoItem.findMany({
    where: {
      authorId: user.id,
    },
  });

  res.json(todos);
});

// creates a todo item
app.post("/todos", requireAuth, async (req, res) => {
  const auth0Id = req.auth.payload.sub;

  const { title } = req.body;

  if (!title) {
    res.status(400).send("title is required");
  } else {
    const newItem = await prisma.todoItem.create({
      data: {
        title,
        author: { connect: { auth0Id } },
      },
    });

    res.status(201).json(newItem);
  }
});

// deletes a todo item by id
app.delete("/todos/:id", requireAuth, async (req, res) => {
  const id = req.params.id;
  const deletedItem = await prisma.todoItem.delete({
    where: {
      id,
    },
  });
  res.json(deletedItem);
});

// get a todo item by id
app.get("/todos/:id", requireAuth, async (req, res) => {
  const id = req.params.id;
  const todoItem = await prisma.todoItem.findUnique({
    where: {
      id,
    },
  });
  res.json(todoItem);
});

// updates a todo item by id
app.put("/todos/:id", requireAuth, async (req, res) => {
  const id = req.params.id;
  const { title } = req.body;
  const updatedItem = await prisma.todoItem.update({
    where: {
      id,
    },
    data: {
      title,
    },
  });
  res.json(updatedItem);
});

// get Profile information of authenticated user
app.get("/me", requireAuth, async (req, res) => {
  const auth0Id = req.auth.payload.sub;

  const user = await prisma.user.findUnique({
    where: {
      auth0Id,
    },
  });

  res.json(user);
});

// verify user status, if not registered in our database we will create it
app.post("/verify-user", requireAuth, async (req, res) => {
  const auth0Id = req.auth.payload.sub;
  const email = req.auth.payload[`${process.env.AUTH0_AUDIENCE}/email`];
  const name = req.auth.payload[`${process.env.AUTH0_AUDIENCE}/name`];

  const user = await prisma.user.findUnique({
    where: {
      auth0Id,
    },
  });

  if (user) {
    res.json(user);
  } else {
    const newUser = await prisma.user.create({
      data: {
        email,
        auth0Id,
        name,
      },
    });

    res.json(newUser);
  }
});

app.listen(8000, () => {
  console.log("Server running on http://localhost:8000 🎉 🚀");
});
