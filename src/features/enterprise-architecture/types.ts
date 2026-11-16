export type DepartmentId = 'sales' | 'finance' | 'warehouse' | 'legal' | 'hr';

export interface SubToolNode {
  id: string;
  label: string;
}

export interface DepartmentTreeNode {
  id: DepartmentId;
  toolTag: string;
  name: string;
  accent: 'emerald' | 'amber' | 'sky' | 'violet' | 'rose';
  isUpgradeable?: boolean;
  subTools: readonly SubToolNode[];
}

export interface EnterpriseDiagramLabels {
  title: string;
  subtitle: string;
  clickHint: string;
  level1Tag: string;
  users: readonly {
    id: string;
    label: string;
  }[];
  level2Tag: string;
  dbNode: {
    title: string;
    sub: string;
  };
  supervisorNode: {
    tag: string;
    title: string;
    sub: string;
  };
  jevNode: {
    tag: string;
    title: string;
    sub: string;
  };
  ragNode: {
    title: string;
    sub: string;
  };
  level3Tag: string;
  level4Tag: string;
  upgradeLockedLabel: string;
  upgradeActiveLabel: string;
  departments: readonly DepartmentTreeNode[];
}
