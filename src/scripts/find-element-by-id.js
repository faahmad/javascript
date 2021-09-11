/**
 * Searches a tree for a given id.
 * @param {HTMLElement} root
 * @param {string} id
 * @returns {HTMLElement | null} The element that matches the id or `null` if not found.
 */
function findElementById(root, id) {
  let element = null;
  depthFirstSearch(root, (node) => {
    if (node.id === id) {
      // We found the node we were looking for, stop the search.
      element = node;
      return true;
    }
  });
  return element;
}
