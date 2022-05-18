import React, { useState,useEffect } from 'react'
import { Tabs} from "antd";
import {  ShoppingCartOutlined,FileTextOutlined,CheckCircleOutlined   } from '@ant-design/icons';
import DefaultLayout from '../../layouts/Default';
import ListOrder from './ListOrder';
import ListProductOrder from './ListProductOrder';

const { TabPane } = Tabs;

export default function StatusOder() {
 

    function callback(key) {
        console.log(key);
      }

    return(
        <DefaultLayout>
    <div className=" bg-white rounded-lg hover:shadow-xl m-8 w-11/12 p-6">
    <Tabs centered  onChange={callback} type="card" efaultActiveKey="1" >
    <TabPane tab="Chờ xác nhận" key="1">
      <ListOrder tab={'cho-xac-nhan'} />
    </TabPane>
    <TabPane tab="Đang giao" key="2">
    <ListOrder tab={'dang-giao'} />
    </TabPane>
    <TabPane tab="Đã thanh toán" key="3">
    <ListProductOrder tab={'da-thanh-toan'} />
    </TabPane>
    <TabPane tab="Đánh giá" key="4">
    <ListProductOrder tab={'danh-gia'} />
    </TabPane>
    <TabPane tab="Đã hủy" key="5">
    <ListOrder tab={'da-huy'} />
    </TabPane>
  </Tabs>
        </div>
            </DefaultLayout>
    )
}
