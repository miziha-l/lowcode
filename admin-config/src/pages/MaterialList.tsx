import React, { useEffect } from 'react';
import { Table, Button } from 'antd';
import { useMaterialStore } from '../stores/materialStore';
import axios from 'axios';

const MaterialList: React.FC = () => {
  const { materials, setMaterials } = useMaterialStore();

  useEffect(() => {
    fetchMaterials();
  }, []);

  const fetchMaterials = async () => {
    try {
      const response = await axios.get('http://localhost:3000/materials');
      setMaterials(response.data);
    } catch (error) {
      console.error('Failed to fetch materials:', error);
    }
  };

  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '操作',
      key: 'action',
      render: (_: any, record: any) => (
        <Button type="link">编辑</Button>
      ),
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-4">
        <Button type="primary">添加物料</Button>
      </div>
      <Table 
        columns={columns} 
        dataSource={materials}
        rowKey="_id"
      />
    </div>
  );
};

export default MaterialList; 