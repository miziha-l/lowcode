import React from 'react';
import { Button } from '@your-org/material-lib';

interface PageConfig {
  components: any[];
}

const PageRenderer: React.FC<{ config: PageConfig }> = ({ config }) => {
  return (
    <div className="page-container">
      {config.components.map((comp, index) => {
        if (comp.type === 'Button') {
          return <Button key={index} {...comp.props} />;
        }
        return null;
      })}
    </div>
  );
};

export default PageRenderer; 