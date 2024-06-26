const Compare = {
  less: -1,
  bigger: 1,
  equ: 0,
};
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(key) {
    if (this.root == null) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key);
    }
  }

  compareFn(a, b) {
    if (a === b) {
      return Compare.equ;
    }
    return a < b ? Compare.less : Compare.bigger;
  }
//   根据二叉树的规则，不会重复，只是说先传入的点会影响左右侧分支不均衡
  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.less) {
      if (node.left == null) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else {
      if (node.right == null) {
        node.right = new Node(key);
      } else {
        this.insertNode(node.right, key);
      }
    }
  }

  //中序遍历，就是从小到大
  inOrderMap(callback) {
    this.inOrderMapNode(this.root, callback);
  }

  inOrderMapNode(node, callback) {
    if (node != null) {
      this.inOrderMapNode(node.left, callback);
      callback(node.key);
      this.inOrderMapNode(node.right, callback);
    }
  }
  //先序遍历
  preOrderMap(callback) {
    this.preOrderMapNode(this.root, callback);
  }

  preOrderMapNode(node, callback) {
    if (node != null) {
      callback(node.key);
      this.preOrderMapNode(node.left, callback);
      this.preOrderMapNode(node.right, callback);
    }
  }

  //后序遍历，最后打印根节点，先打印左侧节点，再打印右侧节点
  postOrderMap(callback) {
    this.postOrderMapNode(this.root, callback);
  }

  postOrderMapNode(node, callback) {
    if (node != null) {
      this.postOrderMapNode(node.left, callback);
      this.postOrderMapNode(node.right, callback);
      callback(node.key);
    }
  }

  min() {
    return this.minNode(this.root);
  }

  minNode(node) {
    let current = node;
    while (current != null && current.left != null) {
      current = current.left;
    }
    return current;
  }

  max() {
    return this.maxNode(this.root);
  }

  maxNode(node) {
    let current = node;
    while (current != null && current.right != null) {
      current = current.right;
    }
    return current;
  }

  search(key) {
    return this.searchNode(this.root, key);
  }

  searchNode(node, key) {
    if (node === null) {
      return false;
    }
    if (this.compareFn(key, node.key) === Compare.less) {
      return this.searchNode(node.left, key);
    } else if (this.compareFn(key, node.key) === Compare.bigger) {
      return this.searchNode(node.right, key);
    } else {
      return true;
    }
  }

  remove(key) {
    this.root = this.removeNode(this.root, key);
  }

  removeNode(node, key) {
    if (node == null) {
      return null;
    }
    if (this.compareFn(key, node.key) === Compare.less) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (this.compareFn(key, node.key) === Compare.bigger) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {

      //末梢节点
      if (node.left == null && node.right == null) {
        node = null;
        return node;
      }

      //有一个子节点
      if (node.left == null) {
        node = node.right;
        return node;
      } else if (node.right == null) {
        node = node.left;
        return node;
      }

      //找到右侧树最小的节点，
      const target = this.minNode(node.right);
      node.key = target.key;

      node.right = this.removeNode(node.right, target.key);
      return node;
    }
  }
}

var mytree = new BST();

mytree.insert(3);
mytree.insert(2);
mytree.insert(5);
mytree.insert(4);
mytree.insert(6);
mytree.postOrderMap((value) => console.log(value));