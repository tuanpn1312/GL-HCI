import React, { useState,useEffect } from 'react'
import { List, Button, Popover,Rate,Input  } from 'antd';

const { TextArea } = Input;

export default function ListProductOrder( {tab}) {
  const [modalDetail, setModalDetail] = useState(false);

    const data = [
        {
          title: 'SP 1',
        },
        {
          title: 'SP  2',
        },
        {
          title: 'SP  3',
        },
        {
          title: 'SP  4',
        },
      ];

      const text = <span>Title</span>;
const content = (
  <div className='space-y-4'>
  <div className='flex space-x-4'>
    <p className='mt-2 mr-24'>Điểm:</p>
    <Rate />
   </div>
   <div className='flex space-x-4'>
<p className='w-56'>Đánh giá sản phẩm:</p>
<TextArea rows={4} />
   </div>
   
  </div>
);
    return(
        <>
<List
    itemLayout="vertical"
    size="large"
    dataSource={data}
    renderItem={item => (
      <List.Item
      extra={
          <>
                {tab =='da-thanh-toan' && 
        <div className='flex flex-col  bg-gray-100 h-full p-8 space-y-2'>
          
         <div className='text-red-700 font-medium text-base mb-4'>Đánh giá</div>
       
       
    <div className='text-base'>x1</div>
    <div className='text-base font-medium'> Tổng tiền: 20,000,000 đồng</div>
  
    <Popover placement="bottom"  content={content} trigger="click">
    <Button className='text-red-700 w-auto justify-end'>Đánh giá</Button>
  </Popover>
   
</div>
      }
            {tab =='danh-gia' && 
        <div className='flex flex-col  bg-gray-100 h-full p-4 space-y-2'>
          
         <div className='text-red-700 font-medium text-base mb-4'>Đã đánh giá</div>
       
       
    <div className='text-base'>x1</div>
    <div className='text-base font-medium'> Tổng tiền: 20,000,000 đồng</div>
  
    <div className='flex space-x-4'>
    <p className='mt-2 mr-20'>Điểm:</p>
    <Rate />
   </div>
   <div className='flex space-x-4'>
<p>Đánh giá sản phẩm:</p>
<p>Rất đẹp</p>
   </div>
</div>
      }
          </>
        
      

    
    }
        
      
      >
        <List.Item.Meta
          title={<a className='text-xl' href="https://ant.design">{item.title}</a>}
          description={
              <div className='flex flex-col space-y-4'>
                     <img
          width={272}
          alt="logo"
          src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
        />
        
       <Button onClick={() => setModalDetail(true)} className='w-full h-10 text-white bg-green-400 font-medium text-base'>Xem chi tiết sản phẩm</Button>
              </div>
         
          }
        />
     
      </List.Item>
    )}
    
  />
  
        </>
    )
}