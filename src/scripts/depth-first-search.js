// FUNCTIONS
/**
 * Returns the node in the tree that matches the given id.
 * @param {HTMLElement} root - The root node where we start the search.
 * @param {(node: HTMLElement) => boolean | void} onVisit - Callback that is invoked with  visited every node. Return `true` if you want to stop visiting.
 * @returns {void}
 */
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
