/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */


var isSameTree = function (p, q) {
    function Inorder(pp, qq) {
        if (!pp && !qq) return true;
        if (!pp || !qq) return false;
        if (pp.val !== qq.val) return false;
        return Inorder(pp.left, qq.left) && Inorder(pp.right, qq.right);
    }
    return Inorder(p, q);
};