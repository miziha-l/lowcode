import React from 'react';
import { Form, Input } from 'antd';
import { buttonSchema } from 'material-lib';

interface PropertyPanelProps {
  component: any;
  onChange: (props: any) => void;
}

const PropertyPanel: React.FC<PropertyPanelProps> = ({ component, onChange }) => {
  if (!component) {
    return (
      <div className="w-60 p-4 border-l bg-gray-50">
        <h2 className="text-lg font-bold mb-4">属性配置</h2>
        <p className="text-gray-500">请选择组件进行配置</p>
      </div>
    );
  }

  const schema = component.type === 'Button' ? buttonSchema : null;

  return (
    <div className="w-60 p-4 border-l bg-gray-50">
      <h2 className="text-lg font-bold mb-4">属性配置</h2>
      <Form
        layout="vertical"
        initialValues={component.props}
        onValuesChange={(_, values) => onChange(values)}
      >
        {Object.entries(schema?.properties || {}).map(([key, value]: [string, any]) => (
          <Form.Item
            key={key}
            label={value.title}
            name={key}
          >
            <Input />
          </Form.Item>
        ))}
      </Form>
    </div>
  );
};

export default PropertyPanel; 