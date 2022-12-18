import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResourceService } from 'src/app/services/resources.service';
import { INpmPackageDetail } from 'src/app/types/INpmPackageDetail';
import { NpmSearchPackageDetail } from 'src/app/types/NpmSearchPackageDetail';
import { DialogPopUpComponent } from '../dialog-pop-up/dialog-pop-up.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() packageDetail!: NpmSearchPackageDetail;
  packageMoreDetail!: INpmPackageDetail;

  constructor(public dialog: MatDialog, private resource: ResourceService) { }

  ngOnInit(): void {
  }

  displayDate(date: string) {
    return new Date(date).toLocaleString();
  }

  openDialog() {
    this.getMoreDetailsAndOpenDialog();
  }

  getMoreDetailsAndOpenDialog() {
    this.resource.getPackageDetail(this.packageDetail.name).subscribe((result) => {
      this.packageMoreDetail = result;
      this.dialog.open(DialogPopUpComponent, {
        data: this.packageMoreDetail
      });
    });
  }
}
