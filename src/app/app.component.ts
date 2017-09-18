import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Movie Lists';
  selectedList;
  isCreateList = false;

  mockLists = {
    "list 1": [
      {
        name: "movie 1",
        rating: 4
      },
      {
        name: "movie 2",
        rating: 3
      },
      {
        name: "movie 3",
        rating: 3
      }
    ],
    "list 2": [
      {
        name: "movie 4",
        rating: 4
      },
      {
        name: "movie 5",
        rating: 3
      }
    ],
    "list 3": [
      {
        name: "movie 7",
        rating: 3
      },
      {
        name: "movie 8",
        rating: 3
      },
      {
        name: "movie 9",
        rating: 3
      }
    ]
  };

  count = Object.keys(this.mockLists).length;

  showList(list) {
    this.selectedList = list;
  }

  averageRating(list) {
    let movies = this.mockLists[list];
    console.log(movies);
    let totalRatings = 0;

    for (let i of movies) {
      totalRatings = totalRatings + i.rating;
    }

   return totalRatings/movies.length;
  }

  objectKeys(obj) {
    return Object.keys(obj);
  }

  createList() {
    this.isCreateList = true;
  }
}
