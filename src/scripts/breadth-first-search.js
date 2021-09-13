function breadthFirstSearch(root, onVisit) {
  const queue = [root];
  while (queue.length) {
    const node = queue.pop();
    const done = onVisit(node);
    if (done) {
      return;
    }
    for (const child of node.children) {
      queue.unshift(child);
    }
  }
  return;
}
