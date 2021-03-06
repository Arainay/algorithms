import { BinarySearchNode } from './BinarySearchNode';

export default class BinarySearchTree {
  constructor(value) {
    this.tree = new BinarySearchNode(value);
  }

  addValue = (value, tree = this.tree) => {
    if (value > tree.value) {
      if (tree.right) {
        this.addValue(value, tree.right);
      } else {
        tree.right = new BinarySearchNode(value);
      }
    } else if (value < tree.value) {
      if (tree.left) {
        this.addValue(value, tree.left);
      } else {
        tree.left = new BinarySearchNode(value);
      }
    }
  };

  getClosestValue = (value, tree = this.tree, closest = Infinity) => {
    if (!tree) {
      return closest;
    }

    if (value === tree.value) {
      return value;
    }

    return this.getClosestValue(
      value,
      value > tree.value ? tree.right : tree.left,
      Math.abs(closest - value) >= Math.abs(tree.value - value) ? tree.value : closest
    );
  };

  getBrunchSums = (tree = this.tree, currentSum = 0, sums = []) => {
    if (!tree) {
      return sums;
    }

    if (!tree.left && !tree.right) {
      return [...sums, currentSum + tree.value];
    }

    const leftSums = this.getBrunchSums(tree.left, tree.value + currentSum, sums);
    return this.getBrunchSums(tree.right, tree.value + currentSum, leftSums);
  };
}
