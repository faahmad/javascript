function breadthFirstSearch(root, onVisit) {
  let queue = [root];
  const visited = new Set();
  while (queue.length) {
    const node = queue.pop();
    if (visited.has(node)) {
      continue;
    }
    const done = onVisit(node);
    if (done) {
      return;
    }
    const children = Array.from(node.children);
    queue = [...children, ...queue];
  }
  return;
}
