import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

import { NodeService } from './node.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styles: [],
  providers: [NodeService],
})
export class TreeComponent implements OnInit {
  files1: TreeNode[];
  files2: TreeNode[];

  constructor(private readonly nodeService: NodeService) {}

  ngOnInit(): void {
    this.nodeService.getFiles().then((files) => {
      this.files1 = files;
      this.files2 = files;
    });
  }

  expandAll(): void {
    this.files2.forEach((node) => {
      this.expandRecursive(node, true);
    });
  }

  collapseAll(): void {
    this.files2.forEach((node) => {
      this.expandRecursive(node, false);
    });
  }

  private expandRecursive(node: TreeNode, isExpand: boolean): void {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach((childNode) => {
        this.expandRecursive(childNode, isExpand);
      });
    }
  }
}
