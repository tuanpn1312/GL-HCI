const express = require("express");

const userRoute = require("../routes/user.route");
const authRoute = require("../routes/auth.route");
const categoryRoute = require("../routes/category.route");
const bannerRoute = require("../routes/banner.route");
const adminRoute = require("../routes/admin.route");
const utilRoute = require("../routes/util.route");
const ssdRoute = require("../routes/ssd.service");
const hddRoute = require("../routes/hdd.route");
const vgaRoute = require("../routes/vga.route");
const monitorRoute = require("../routes/monitor.route");
const laptopRoute = require("../routes/laptop.route");
const mouseRoute = require("../routes/mouse.route");
const padRoute = require("../routes/pad.route");
const keyboardRoute = require("../routes/keyboard.route");
const productRoute = require("../routes/product.route");
const CableRoute = require("../routes/cable.route");
const productLoveRoute = require("../routes/product_love.route");
const feedbackRoute = require("../routes/feedback.route");
const orderRoute = require("../routes/order.route");
const dbRoute = require("../routes/db.route");

const Router = express.Router();

Router.use("/users", userRoute);
Router.use("/auths", authRoute);
Router.use("/categories", categoryRoute);
Router.use("/banners", bannerRoute);
Router.use("/admins", adminRoute);
Router.use("/utils", utilRoute);
Router.use("/products", productRoute);
Router.use("/laptop", laptopRoute);
Router.use("/ssd", ssdRoute);
Router.use("/hdd", hddRoute);
Router.use("/vga", vgaRoute);
Router.use("/manhinh", monitorRoute);
Router.use("/chuot", mouseRoute);
Router.use("/lotchuot", padRoute);
Router.use("/banphim", keyboardRoute);
Router.use("/cap", CableRoute);
Router.use("/love-products", productLoveRoute);
Router.use("/feedbacks", feedbackRoute);
Router.use("/orders", orderRoute);
Router.use("/dbs", dbRoute);

module.exports = Router;