/**
 * Give rootA and nodeA, gets the node symmetrical path in rootB.
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB
 * @param {HTMLElement} nodeA
 * @returns {HTMLElement} Node at the symmetrical path of `nodeA` in `rootB`.
 */
function getSymmetricNode(rootA, rootB, nodeA) {
  const path = getPath(rootA, nodeA);
  return getNodeFromPath(rootB, path);
}

/**
 * Gets the path to the node from the root.
 * @param {HTMLElement} root
 * @param {HTMLElement} node
 * @returns {number[]}
 */
function getPath(root, node) {
  const path = [];

  while (node !== root) {
    const parent = node.parentElement;
    const children = Array.from(parent.children);
    const nodeIndex = children.indexOf(node);
    path.push(nodeIndex);
    node = parent;
  }

  return path;
}

/**
 * Returns the node at a given path from the root.
 * @param {HTMLElement} root
 * @param {number[]} path
 * @returns {HTMLElement}
 */
function getNodeFromPath(root, path) {
  let node = root;
  const toWalk = [...path];

  while (toWalk.length) {
    const nodeIndex = toWalk.pop();
    node = node.children[nodeIndex];
  }

  return node;
}
