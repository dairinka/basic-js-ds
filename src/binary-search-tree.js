const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor(){
    this.rootNode = null;
  }
  
  root() {
    return this.rootNode;
  }

   add(data) {
    this.rootNode = addData(this.rootNode, data);

    function addData(node, data){
      if(!node){
        return new Node(data);
      }

      if(node.data === data ){
        return node;
      }

       if(node.data > data){
        node.left = addData(node.left, data);
       } else{
        node.right = addData(node.right, data)
       }

       return node;
    }
  }

  has(data) {
    return searchData(this.rootNode, data);

    function searchData(node, data){
      if(!node){
        return false;

      }
      if(node.data === data){
        return true;
      }
       return data < node.data ?
       searchData(node.left, data) : 
       searchData(node.right, data)
    }
  }

  find(data) {
   return searchData(this.rootNode, data);

    function searchData(node, data){
      if(!node){
        return null;
      }
      if(node.data === data){
        return node;
      }
       return data < node.data ?
       searchData(node.left, data) :
        searchData(node.right, data)
    }
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);

    function removeNode(node, data){
      if(!node){
        return null;
      }

      if(data < node.data){
        node.left = removeNode(node.left, data);
        return node;
      } else if(data > node.data){
        node.right = removeNode(node.right, data);
        return node;
      }else {
        if(!node.left && !node.right){
          return null;
        } else if(!node.left){
          node = node.right;
          return node;
        } else if(!node.right){
          node = node.left;
          return node;
        } else{
          let minRight = node.right;
          while(minRight.left){
            minRight = minRight.left;
          }
          node.data = minRight.data;
          node.right = removeNode(node.right, minRight.data);
          return node;
        }
        
      }
    }
  }

  min() {
    if(!this.rootNode){
      return;
    }
    let node = this.rootNode;
    while(node.left){
      node = node.left;
    }
    return node.data;
  }

  max() {
      if(!this.rootNode){
      return;
      }
      let node = this.rootNode;
      while(node.right){
        node = node.right;
      }
      return node.data;
    }
}


module.exports = {
  BinarySearchTree
};