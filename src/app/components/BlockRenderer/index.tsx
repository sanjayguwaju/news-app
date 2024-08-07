import React from 'react';
import HeadingBlock from '../heading-block';
import Recent from '../recent';
import PoliticsBlock from '../politics-block';
import EntertainmentBlock from '../entertainment-block';

const blockComponents = {
  'hero-block': HeadingBlock,
  'recent-block': Recent,
  'politics-block': PoliticsBlock,
  'entertainment-block': EntertainmentBlock,
  // Add other block types here
};

const BlockRenderer = ({ block, index }) => {
  const BlockComponent = blockComponents[block.blockType];
  return BlockComponent ? <BlockComponent key={index} data={block} /> : null;
};

export default BlockRenderer;