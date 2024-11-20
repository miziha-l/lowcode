import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
// import { Material } from '../../types';
import MaterialPanel from './MaterialPanel';
import Canvas from './Canvas';
import PropertyPanel from './PropertyPanel';

const PageDesigner: React.FC = () => {
  const [components, setComponents] = useState<any[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [selectedComponent, setSelectedComponent] = useState<any>(null);

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor)
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    
    if (over && active.id.startsWith('material-')) {
      const materialType = active.id.replace('material-', '');
      setComponents([
        ...components,
        {
          id: `component-${Date.now()}`,
          type: materialType,
          props: { text: '新按钮' }
        }
      ]);
    }
    setActiveId(null);
  };

  return (
    <div className="flex h-screen">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <MaterialPanel />
        <div className="flex-1 p-4">
          <Canvas
            components={components}
            onSelect={setSelectedComponent}
          />
        </div>
        <PropertyPanel
          component={selectedComponent}
          onChange={(props) => {
            setComponents(components.map(comp => 
              comp.id === selectedComponent?.id 
                ? { ...comp, props }
                : comp
            ));
          }}
        />
      </DndContext>
    </div>
  );
};

export default PageDesigner; 