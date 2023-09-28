import { Position } from 'reactflow';

import Fiber from './fiber';
import Handle from './handle';
import Wrapper from './node-wrapper';

export default function HeroNode({ data }) {
  const { label = '' } = data;

  return (
    <Wrapper label={label}>
      <div className="h-full w-full">
        <Fiber {...data} />
        <Handle
          type="target"
          position={Position.Left}
          style={{ top: 20 }}
          id="shape"
        />
        <Handle
          type="target"
          position={Position.Left}
          style={{ top: 40 }}
          id="color"
        />
        <Handle
          type="target"
          position={Position.Left}
          style={{ top: 60 }}
          id="zoom"
        />
      </div>
    </Wrapper>
  );
}
