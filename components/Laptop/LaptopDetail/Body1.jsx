import React, { useState, useEffect } from "react";
import { Typography, Carousel, Button, Rate, Tag } from "antd";
const { Text, Title, Link } = Typography;
import { FireOutlined, BorderOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import numberFormat from "../../../utils/modules/numberFormat";

export default function Body1Detail({ product, description }) {

    return (
        <div className="flex items-center justify-center">
            <Carousel autoplay autoplaySpeed={1500} dots="false" style={{ width: 450 }} >
                {description?.image_detail?.split(',').map(url => {
                    return (
                        <div className="w-9/12">
                            {/* <div className="bg-no-repeat bg-cover bg-center "
                                style={{
                                    width: 500,
                                    height: 600,
                                    backgroundImage: `url(${url})`,
                                }}
                            ></div> */}
                            <img width="100%" src={url} alt="" />
                        </div>
                    )
                })}
            </Carousel>
            <div className="">
                <div className="flex flex-col text-center space-y-6  m-5">
                    <Title level={3}>{product.name}</Title>
                    <Rate disabled allowHalf defaultValue={product.amount_star} />
                    <div className="flex flex-col space-y-3">
                        <Tag className="text-lg" color="gold">
                            <div>
                                Bảo hành chính hãng {product.warranty}
                            </div>
                            {description.intro?.map(item =>
                                <div>
                                    {item}
                                </div>)}
                        </Tag>
                        <Tag className="text-base" color="lime">Đã bán: {product.amount_sale} sản phẩm - Còn lại: {product.amount} sản phẩm</Tag>
                        {/* <Title level={5}  >Windows bản quyền tích hợp</Title> */}
                    </div>
                    <div className="flex flex-col text-center space-y-3">
                        {product.percent_sale > 0 &&
                            <Text className="text-xl">Giá cũ: <Text strong delete className="text-2xl">{numberFormat(product.price)}đ</Text> - Giảm: <Text strong className="text-2xl">{product.percent_sale}%</Text></Text>}
                        <Text className="text-xl">Giá hiện tại: <Text type="danger" strong className="text-2xl ">{numberFormat(product.price_now)}đ</Text></Text>

                    </div>
                    <div>
                        <Button danger type="primary" className="rounded-lg">
                            Thêm vào giỏ hàng
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    );
}