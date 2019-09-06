
interface Ichild {
  label: string,
  value: string | number,
  isLeaf?: boolean;
  children?: Array<Ichild>,
}

interface ITree {
  dataSource: Array<Ichild>;
  value: any;
  onChange: Function;
  root?: boolean;
  multiple?: boolean;
  loadData?: Function;
  treeDefaultExpandAll?: boolean;
}

interface ITreeItem {
  [otherProps: string]: any;
}








export {
  ITree,
  Ichild,
  ITreeItem,
}