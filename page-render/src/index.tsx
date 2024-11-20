import React from 'react';
import ReactDOM from 'react-dom/client';
import PageRenderer from './components/PageRenderer';

const sampleConfig = {
  components: [
    {
      type: 'Button',
      props: {
        text: '示例按钮',
        onClick: () => alert('按钮被点击')
      }
    }
  ]
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <PageRenderer config={sampleConfig} />
  </React.StrictMode>
); 