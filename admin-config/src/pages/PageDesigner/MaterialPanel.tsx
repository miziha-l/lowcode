import React from 'react';
import { useDraggable } from '@dnd-kit/core';

const MaterialItem: React.FC<{ type: string; name: string }> = ({ type, name }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `material-${type}`,
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="p-2 mb-2 bg-white border rounded cursor-move hover:border-blue-500"
    >
      {name}
    </div>
  );
};

const MaterialPanel: React.FC = () => {
  return (
    <div className="w-60 p-4 border-r bg-gray-50">
      <h2 className="text-lg font-bold mb-4">组件库</h2>
      <div className="space-y-2">
        <MaterialItem type="Button" name="按钮" />
      </div>
    </div>
  );
};

export default MaterialPanel; 