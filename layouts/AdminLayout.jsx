import React, { useState } from 'react'
import Router from 'next/router'
import { Layout, Menu } from 'antd';
import {
    DesktopOutlined,
    GlobalOutlined,
    UserOutlined,
    ScheduleOutlined,
    LineChartOutlined,
    ContainerOutlined ,
    HomeOutlined,
    MenuOutlined,
    InboxOutlined
} from '@ant-design/icons';
import Link from 'next/link'
import { useRecoilState } from "recoil";

import { userState } from "../store/userState";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

import EditBanner from '../components/Admin/Banner/EditBanner';
import Products from '../components/Admin/Procduct';
import Laptops from '../components/Admin/Procduct/Laptop';
import Mouses from '../components/Admin/Procduct/Mouse';
import Pads from '../components/Admin/Procduct/Pad';
import Monitors from '../components/Admin/Procduct/Monitor';
import Keyboards from '../components/Admin/Procduct/KeyBoard';
import VGAs from '../components/Admin/Procduct/VGA';
import HDDs from '../components/Admin/Procduct/HDD';
import SSDs from '../components/Admin/Procduct/SSD';
import Order from '../components/Admin/Order';
export default function AdminLayout() {
    const [user, setUser] = useRecoilState(userState);
    const [tab, setTab] = useState('user');
    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = () => {
        setCollapsed(!collapsed);
    };


    return (
        <Layout style={{ minHeight: '100vh' }}>
             <Sider
                collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo" />
                <Menu onClick={({ key: tab }) => setTab(tab)} theme="dark" defaultSelectedKeys={['user']} mode="inline">
                    <Menu.Item key="chart" icon={<LineChartOutlined />}>
                        Chart
                    </Menu.Item>
                    <SubMenu key="banner-management" icon={<HomeOutlined />} title="Quản lý trang chủ">
                        <Menu.Item key="banner">Chỉnh sửa Banner</Menu.Item> 
                    </SubMenu>
                    <SubMenu key="categories-management" icon={<MenuOutlined />}  title="Quản lý Danh mục">
                        <Menu.Item key="categories">Danh sách danh mục</Menu.Item> 
                    </SubMenu>
                    <SubMenu key="products-management" icon={<InboxOutlined />} title="Quản lý sản phẩm">
                        <Menu.Item key="products">Danh sách sản phẩm</Menu.Item>
                        <SubMenu key="laptop-management"  title="Quản lý Laptop">
                        <Menu.Item  key="laptops">Danh sách laptop</Menu.Item>
                        </SubMenu>
                        <SubMenu key="mouses-pads-management"  title="Quản lý Chuột - Lót chuột">
                        <Menu.Item key="mouses">Danh sách chuột</Menu.Item>
                        <Menu.Item  key="pads">Danh sách pad chuột</Menu.Item>
                        </SubMenu>
                        <SubMenu key="monitors-keyboards-management"  title="Quản lý Màn hình - Bàn Phím">
                        <Menu.Item  key="monitors">Danh sách màn hình</Menu.Item>
                        <Menu.Item  key="keyboards">Danh sách bàn phím</Menu.Item>
                        </SubMenu>
                        <SubMenu key="linhkien-management"  title="Quản lý Linh kiện">
                        <Menu.Item  key="VGAs">Danh sách VGA</Menu.Item>
                        <Menu.Item  key="HDDs">Danh sách HDD</Menu.Item>
                        <Menu.Item  key="SSDs">Danh sách SSD</Menu.Item>
                        </SubMenu>
                        <SubMenu key="phukien-management"  title="Quản lý Phụ kiện">
                        <Menu.Item  key="caps">Danh sách dây cáp</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="order-management" icon={<ContainerOutlined />} title="Quản lý Đơn hàng">
                        <Menu.Item key="order">Danh sách đơn hàng</Menu.Item> 
                    </SubMenu>
                    <SubMenu key="user" icon={<UserOutlined />} title="Quản lý Người dùng">
                        <Menu.Item key="danh-gia">Danh sách đánh giá</Menu.Item> 
                    </SubMenu>
               
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="flex justify-between items-center shadow-xl  " style={{ padding: 0 }} >
                      <div className="text-xl ">
        <Link href="/">
                <a className="text-yellow-200 hover:text-white ml-4" >GearLap</a>
              </Link>
        </div>
        <div className='text-sm text-white mr-4'>Xin chào, {user.name}</div>
                </Header>
                <Content className="m-6">
                {tab === 'banner' && <EditBanner />}
                {tab ==='products' && <Products/>}
                {tab ==='laptops' && <Laptops />}
                {tab ==='mouses' && <Mouses />}
                {tab ==='pads' && <Pads />}
                {tab ==='monitors' && <Monitors />}
                {tab ==='keyboards' && <Keyboards />}
                {tab ==='VGAs' && <VGAs />}
                {tab ==='HDDs' && <HDDs />}
                {tab ==='SSDs' && <SSDs />}
                {tab==='order' && <Order/>}
                </Content>
                <Footer style={{ textAlign: 'center' }}>©Trang quản trị của project GearLap</Footer>
            </Layout>
           
        </Layout>
    )
}
    