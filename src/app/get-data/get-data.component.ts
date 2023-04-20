import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss'],
})
export class GetDataComponent implements OnInit {
  usersData: any[] | undefined;
  constructor(private httpServerService: HttpServerService) {}

  public ngOnInit(): void {
    this.httpServerService.getComments().subscribe((data) => {
      console.log('Comments', data);
    });

    this.httpServerService.getRandomUser(10).subscribe((data) => {
      this.usersData = data.results;
      console.log(this.usersData);
      
    });
  }
}
