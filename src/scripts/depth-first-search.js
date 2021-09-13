function depthFirstSearch(root, onVisit) {
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    const done = onVisit(node);
    if (done) {
      return;
    }
    for (const child of node.children) {
      stack.push(child);
    }
  }
  return;
}
