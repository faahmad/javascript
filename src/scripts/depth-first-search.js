function depthFirstSearch(root, onVisit) {
  let stack = [root];
  while (stack.length) {
    const node = stack.pop();
    const done = onVisit(node);
    if (done) {
      return;
    }
    const children = Array.from(node.children);
    stack = [...stack, ...children];
  }
  return;
}
