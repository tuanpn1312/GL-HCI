const db = require("../util/database");
const functionConfig = require("../util/function");

module.exports.createProduct = async (req, res, next) => {
  try {
    const newVGA = await db.query(
      `insert into product (name, price, price_sale, type_id, image, percent_sale, brand_id, amount, price_now, warranty, realease_date, link)
        values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) returning *`,
      [
        req.body.name,
        req.body.price,
        req.body.price - req.body.price * (1 - req.body.percent_sale / 100),
        req.body.type_id,
        req.body.image,
        req.body.percent_sale,
        req.body.brand_id,
        req.body.amount,
        req.body.price * (1 - req.body.percent_sale / 100),
        req.body.warranty,
        req.body.realease_date,
        JSON.stringify(req.body.link),
      ]
    );

    res.status(200).json({ ...newVGA.rows[0], message: "Thêm thành công" });
  } catch (e) {
    console.log(e.message);
    return res.status(400).json({ message: e.message });
  }
};

module.exports.getAllDetailProduct = async (req, res, next) => {
  try {
    const condition = !req.query.type_id
      ? ""
      : `where type_id = '${req.query.type_id}'`;

    const result = await db.getResultList(
      `select product_id, name, price, price_sale, amount_sale, amount_star, type_id, status, image, percent_sale,
      brand_id, amount_feedback, amount, price_now, warranty, realease_date, count(*) over() as full_count
      from product ${condition}`,
      []
    );

    res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
    return res.status(400).json({ message: e.message });
  }
};

module.exports.getAllDetailProductTrue = async (req, res, next) => {
  try {
    const condition = !req.query.type_id
      ? ""
      : `and type_id = '${req.query.type_id}'`;

    const result = await db.getResultList(
      `select product_id, name, price, price_sale, amount_sale, amount_star, type_id, status, image, percent_sale,
      brand_id, amount_feedback, amount, price_now, warranty, realease_date, count(*) over() as full_count 
      from product where status = $1 ${condition}`,
      [true]
    );

    res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
    return res.status(400).json({ message: e.message });
  }
};

module.exports.getDetailProduct = async (req, res, next) => {
  try {
    const result = await db.getFirstResult(
      `select * from product where product_id = $1`,
      [req.query.product_id]
    );

    result.link = JSON.parse(result.link);

    res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
    return res.status(400).json({ message: e.message });
  }
};

module.exports.updateProduct = async (req, res, next) => {
  try {
    req.body.link = JSON.stringify(req.body.link);

    const queryStringUpdate = await functionConfig.updateQueryByOneCondition(
      "product_id",
      req.query.product_id,
      "product",
      req.body
    );

    const colValues = Object.keys(req.body).map((key) => {
      return req.body[key];
    });

    const result = await db.query(
      `${queryStringUpdate} returning *`,
      colValues
    );
    if (result)
      return res
        .status(200)
        .json({ ...result.rows[0], message: "Cập nhật thông tin thành công" });
    else return res.status(400).json({ message: "Lỗi cập nhật" });
  } catch (e) {
    console.log(e.message);
    return res.status(400).json({ message: e.message });
  }
};

module.exports.deleteProduct = async (req, res, next) => {
  try {
    const result = await db.query(
      `delete from product where product_id = $1 on delete casade returning *`,
      [req.query.product_id]
    );

    res.status(200).json({ ...result.rows[0], message: "Xoá thành công" });
  } catch (e) {
    console.log(e.message);
    return res.status(400).json({ message: e.message });
  }
};

module.exports.getBestProducts = async (req, res, next) => {
  try {
    const condition = !req.query.type_id
      ? ""
      : `where type_id = '${req.query.type_id}'`;
    const page = req.query.page ? req.query.page : 1;
    const limit = req.query.limit ? req.query.limit : 10;
    const offset = limit * (page - 1);

    const result = await db.getResultList(
      `select product_id, name, price, price_sale, amount_sale, amount_star, type_id, status, image, percent_sale,
      brand_id, amount_feedback, amount, price_now, warranty, realease_date, count(*) over() as full_count 
      from product ${condition} order by ${req.query.type} desc limit ${limit} offset ${offset}`,
      []
    );

    const meta = {
      total_page: result[0] ? Math.ceil(result[0].full_count / limit) : 0,
      total_count: result[0] ? +result[0].full_count : 0,
    };

    res.status(200).json({ result, meta });
  } catch (e) {
    console.log(e.message);
    return res.status(400).json({ message: e.message });
  }
};

module.exports.sortProducts = async (req, res, next) => {
  try {
    let condition = !req.query.type_id
      ? ""
      : `where type_id = '${req.query.type_id}'`;

    if (req.query.brand_id) {
      condition += ` and brand_id = '${req.query.brand_id}'`;
    }

    const result = await db.getResultList(
      `select product_id, name, price, price_sale, amount_sale, amount_star, type_id, status, image, percent_sale,
      brand_id, amount_feedback, amount, price_now, warranty, realease_date, count(*) over() as full_count
      from product ${condition} order by ${req.query.type} ${req.query.value}`,
      []
    );

    res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
    return res.status(400).json({ message: e.message });
  }
};

module.exports.filterProducts = async (req, res, next) => {
  try {
    const condition = !req.query.type_id
      ? ""
      : `type_id = '${req.query.type_id}' and`;

    const result = await db.getResultList(
      `select product_id, name, price, price_sale, amount_sale, amount_star, type_id, status, image, percent_sale,
      brand_id, amount_feedback, amount, price_now, warranty, realease_date, count(*) over() as full_count 
      from product where ${condition} lower(${
        req.query.type
      }) like '%${req.query.value.toLowerCase()}%'`,
      []
    );

    res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
    return res.status(400).json({ message: e.message });
  }
};

module.exports.getAllDetailOneProduct = async (req, res, next) => {
  try {
    const result = await db.getResultList(
      `select * from 
      (select product_id, name, price, price_sale, amount_sale, amount_star, type_id, status, image, percent_sale,
        brand_id, amount_feedback, amount, price_now, warranty, realease_date from product where product_id = $1) t1
      left join
      (select * from ${req.query.type} where product_id = $1) t2
      on t1.product_id = t2.product_id
      `,
      [req.query.product_id]
    );
    res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
    return res.status(400).json({ message: e.message });
  }
};

module.exports.getAllProduct = async (req, res, next) => {
  try {
    const conditionType = !req.query.type_id
      ? ""
      : `where type_id = '${req.query.type_id}'`;

    const conditionBrand = !req.query.brand_id
      ? ""
      : `where brand_id = '${req.query.brand_id}'`;

    const result = await db.getResultList(
      `select product_id, name, price, price_sale, amount_sale, amount_star, type_id, status, image, percent_sale,
      brand_id, amount_feedback, amount, price_now, warranty, realease_date 
      from product ${conditionType} ${conditionBrand}
      `,
      []
    );
    res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
    return res.status(400).json({ message: e.message });
  }
};

module.exports.getAllProductByType = async (req, res, next) => {
  try {
    const result = await db.getResultList(
      `select product_id, name, price, price_sale, amount_sale, amount_star, type_id, status, image, percent_sale,
      brand_id, amount_feedback, amount, price_now, warranty, realease_date 
      from product where type_id = $1 and brand_id = $2
      `,
      [req.query.type_id, req.query.brand_id]
    );
    res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
    return res.status(400).json({ message: e.message });
  }
};
