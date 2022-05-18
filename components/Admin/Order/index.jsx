import React, { useState,useEffect } from 'react'
import { Tag, Table, Typography,Button, message,Space,Popconfirm,Tabs} from "antd";
import ListOrderAdmin from './ListOrder.jsx';

const { Title } = Typography;
const { TabPane } = Tabs;

export default function Order() {

    function callback(key) {
        console.log(key);
      }

    return(
        <div className=" bg-white rounded-lg hover:shadow-xl p-6 flex flex-col justify-center relative">
               <div className="text-center">

<Title level={3} className="p-3" >Quản lí các tình trạng danh sách đơn hàng</Title>
</div>
             <Tabs centered  onChange={callback} type="card" efaultActiveKey="1" >
    <TabPane tab="Chờ xác nhận" key="1">
    <ListOrderAdmin tab={'cho-xac-nhan'}/>
    </TabPane>

    <TabPane tab="Đang giao" key="2">
    <ListOrderAdmin tab={'dang-giao'}/>
    </TabPane>

    <TabPane tab="Đã thanh toán" key="3">
    <ListOrderAdmin tab={'da-thanh-toan'}/>
    </TabPane>

    <TabPane tab="Đã hủy" key="5">
    <ListOrderAdmin tab={'da-huy'}/>
    </TabPane>
  </Tabs>
        </div>
    )
}