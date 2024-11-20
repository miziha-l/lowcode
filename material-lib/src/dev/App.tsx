import React from 'react';
import Button from '../components/Button';

const App: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">物料预览</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-xl mb-2">Button 组件</h2>
          <div className="space-x-2">
            <Button 
              text="默认按钮" 
              onClick={() => alert('点击了按钮')}
            />
            <Button 
              text="禁用按钮" 
              onClick={() => alert('点击了按钮')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App; 