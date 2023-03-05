import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Bike } from 'src/app/models/bikes/bike';
import { MatTableDataSource } from '@angular/material/table';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'bike-table',
  templateUrl: './bike-table.component.html',
  styleUrls: ['./bike-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed, void', style({ height: '0px' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
      transition(
        'expanded <=> void',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class BikeTableComponent implements OnInit, OnChanges {
  @Input() public bikes: Bike[];
  public expandedElement: Bike;
  
  public header: string = 'BikesTable';

  public bikesDataSource: MatTableDataSource<Bike>;
  
  public displayedColumns: string[] = [
    'bikeId',
    'name',
    'rented',
  ];
  public columnHeaders: string[] = [
    'BikeId',
    'Name',
    'Available',
  ];

  private readonly expandedClass = 'expanded';
  private readonly collapsedClass = 'collapsed';

  constructor() {}

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.bikes) {
      this.bikesDataSource = new MatTableDataSource<Bike>(this.bikes);
    }
  }
  public toggleExpandedClass(row: any) {
    return row === this.expandedElement
      ? this.expandedClass
      : this.collapsedClass;
  }

  public toggleDetails(row: any) {
    this.expandedElement = this.expandedElement === row ? null : row;
  }

  public isExpanded(element: any) {
    return this.expandedElement === element;
  }
}
