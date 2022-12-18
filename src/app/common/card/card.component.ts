import { Component, Input, OnInit } from '@angular/core';
import { NpmPackageDetail } from 'src/app/types/NpmPackageDetail';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() packageDetail!: NpmPackageDetail;

  constructor() { }

  ngOnInit(): void {
  }

}
