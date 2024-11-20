import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { Button } from 'material-lib';

interface CanvasProps {
  components: any[];
  onSelect: (component: any) => void;
}

const Canvas: React.FC<CanvasProps> = ({ components, onSelect }) => {
  const { setNodeRef } = useDroppable({
    id: 'canvas',
  });

  return (
    <div
      ref={setNodeRef}
      className="min-h-full p-4 bg-gray-100 rounded"
    >
      {components.map((comp) => (
        <div
          key={comp.id}
          onClick={() => onSelect(comp)}
          className="mb-2 inline-block"
        >
          {comp.type === 'Button' && (
            <Button {...comp.props} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Canvas; 