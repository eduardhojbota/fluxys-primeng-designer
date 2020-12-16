import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

import { NodeService } from '../node.service';

@Component({
  selector: 'app-tree-table',
  templateUrl: './tree-table.component.html',
  providers: [NodeService],
})
export class TreeTableComponent implements OnInit {
  files1: TreeNode[];
  files2: TreeNode[];
  cols: any[];

  constructor(private nodeService: NodeService) {}

  ngOnInit(): void {
    this.nodeService.getFilesystem().then((files) => {
      this.files1 = files;
      this.files2 = files;
    });

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'size', header: 'Size' },
      { field: 'type', header: 'Type' },
    ];
  }
}
