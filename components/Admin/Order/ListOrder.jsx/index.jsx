import React, { useState,useEffect } from 'react'
import { Table, Button , Tooltip } from 'antd';


export default function ListOrderAdmin( {tab}){

    const columns = [
        {
            title: 'Mã đơn hàng',
            dataIndex: 'ma',
            key: 'ma',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Tên khách hàng',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
    
        {
            title: 'Mail',
            dataIndex: 'price_now',
            key: 'price_now',
            render: (text) => <a>{text}</a>,
        },
 
        {
            title: 'Số điện thoại',
            dataIndex: 'price_now',
            key: 'price_now',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Trạng thái',
            key: 'status',
            dataIndex: 'status',
            render: status => (
                <>
                    {/* <Tag color={status==="true"? 'green' :  'volcano'} >
                        {status==="true" ? "Hoạt động" : "Tạm ngừng"}
                    </Tag> */}
                 {status==="true" && <Tag color={'green' } >
                       Hoạt động
                    </Tag>}
                    {status==="false" && <Tag color={'volcano' } >
                    Tạm ngừng
                    </Tag>}
                </>
            ),
        },
        {
            title: '',
            key: 'delete',
            render: (text, record) => (
                <Space size="middle">
                   
                  <Popconfirm
                        title={ `link "${record.link}" bạn chắc muốn xóa?`}
                        // onConfirm={() => deleteBanner(record)}
                        okText={'Xóa'}
                        cancelText="Hủy"
                    >
                       <CloseOutlined style={{color:"red"}} />
                    </Popconfirm>
                 
                 
                </Space>
            ),
      }

      ];

    return(
        <Table className=''
        onRow={(record, rowIndex) => {
        return {
        onClick: () => {
        // setShowModalEdit(true)
        // setProductDetail(record)
                }
            }
        }
        }
          columns={columns} 
        //   dataSource={products}
          pagination={{ defaultPageSize: 6 }}
          scroll={{ y: 500 }} 
        />

    )
}