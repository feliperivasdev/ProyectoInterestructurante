import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  public projects: any;

  constructor(
    private ps: ProjectService
  ) { }

  ngOnInit(): void {
    let pry = this.ps.getProjects().subscribe(
      {
        next: (data => {
          this.projects = data;
          console.log(data);
        }),
        error: (err => err)
      }
    );
  }

}
