export default function depthFirstSearch(tree) {
  const values = [];

  const depthFirstSearchInner = (node) => {
    values.push(node.value);

    node.children.forEach(item => {
      depthFirstSearchInner(item);
    });
  };

  depthFirstSearchInner(tree);

  return values;
}
