import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { INpmPackageDetail } from 'src/app/types/INpmPackageDetail';

@Component({
  selector: 'app-dialog-pop-up',
  templateUrl: './dialog-pop-up.component.html',
  styleUrls: ['./dialog-pop-up.component.scss']
})
export class DialogPopUpComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: INpmPackageDetail) { }

  ngOnInit(): void {
  }

}
