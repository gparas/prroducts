const fetch = require('node-fetch');
const data = require('./prroducts.json');

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions;

  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins;

  const processPhoto = photo => {
    const nodeId = createNodeId(`pixabay-photo-${photo.id}`);
    const nodeContent = JSON.stringify(photo);
    const nodeData = Object.assign({}, photo, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `PixabayPhoto`,
        content: nodeContent,
        contentDigest: createContentDigest(photo),
      },
    });

    return nodeData;
  };

  // plugin code goes here...
  return data.products.forEach(photo => {
    const nodeData = processPhoto(photo);
    // Use Gatsby's createNode helper to create a node from the node data
    createNode(nodeData);
  });
};
