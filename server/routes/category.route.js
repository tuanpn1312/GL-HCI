const express = require("express");

const categoryService = require("../services/category.service");

const Router = express.Router();

Router.post("/", categoryService.createCategories);
Router.get("/", categoryService.getAllCategories);
Router.get("/true", categoryService.getAllCategoriesTrue);
Router.post("/update", categoryService.updateCategory);
Router.delete("/delete", categoryService.deleteCategory);

module.exports = Router;
