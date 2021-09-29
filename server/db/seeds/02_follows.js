
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('follows')
    .then(function () {
      // Inserts seed entries
      return knex('follows').insert([
        // HIHI
        {id: 1, followers: 1, following: 2},
        {id: 2, followers: 1, following: 3},
        {id: 3, followers: 1, following: 4},
        {id: 4, followers: 1, following: 5},
        {id: 5, followers: 1, following: 6},

        {id: 6, followers: 2, following: 1},
        {id: 7, followers: 2, following: 3},
        {id: 8, followers: 2, following: 4},
        {id: 9, followers: 2, following: 5},
        {id: 10, followers: 2, following: 6},

        {id: 11, followers: 3, following: 1},
        {id: 12, followers: 3, following: 2},
        {id: 13, followers: 3, following: 4},
        {id: 14, followers: 3, following: 5},
        {id: 15, followers: 3, following: 6},

        {id: 16, followers: 4, following: 1},
        {id: 17, followers: 4, following: 2},
        {id: 18, followers: 4, following: 3},
        {id: 19, followers: 4, following: 5},
        {id: 20, followers: 4, following: 6},

        {id: 21, followers: 5, following: 1},
        {id: 22, followers: 5, following: 2},
        {id: 23, followers: 5, following: 3},
        {id: 24, followers: 5, following: 4},
        {id: 25, followers: 5, following: 6},

        {id: 26, followers: 6, following: 1},
        {id: 27, followers: 6, following: 2},
        {id: 28, followers: 6, following: 3},
        {id: 29, followers: 6, following: 4},
        {id: 30, followers: 6, following: 5},

        // BIRTHDAY BOX
        {id: 31, followers: 7, following: 8},
        {id: 32, followers: 7, following: 9},
        {id: 33, followers: 7, following: 10},
        {id: 34, followers: 7, following: 11},

        {id: 35, followers: 8, following: 7},
        {id: 36, followers: 8, following: 9},
        {id: 37, followers: 8, following: 10},
        {id: 38, followers: 8, following: 11},

        {id: 39, followers: 9, following: 7},
        {id: 40, followers: 9, following: 8},
        {id: 41, followers: 9, following: 10},
        {id: 42, followers: 9, following: 11},

        {id: 43, followers: 10, following: 7},
        {id: 44, followers: 10, following: 8},
        {id: 45, followers: 10, following: 9},
        {id: 46, followers: 10, following: 11},

        {id: 47, followers: 11, following: 7},
        {id: 48, followers: 11, following: 8},
        {id: 49, followers: 11, following: 9},
        {id: 50, followers: 11, following: 10},

        // Shelfalytics
        {id: 51, followers: 12, following: 13},
        {id: 52, followers: 12, following: 14},
        {id: 53, followers: 12, following: 15},

        {id: 54, followers: 13, following: 12},
        {id: 55, followers: 13, following: 14},
        {id: 56, followers: 13, following: 15},

        {id: 57, followers: 14, following: 12},
        {id: 58, followers: 14, following: 13},
        {id: 59, followers: 14, following: 15},

        {id: 60, followers: 15, following: 12},
        {id: 61, followers: 15, following: 13},
        {id: 62, followers: 15, following: 14},

        // Lockdown Helper
        {id: 63, followers: 16, following: 17},
        {id: 64, followers: 16, following: 18},
        {id: 65, followers: 16, following: 19},

        {id: 66, followers: 17, following: 16},
        {id: 67, followers: 17, following: 18},
        {id: 68, followers: 17, following: 19},

        {id: 69, followers: 18, following: 16},
        {id: 70, followers: 18, following: 17},
        {id: 71, followers: 18, following: 19},

        {id: 72, followers: 19, following: 16},
        {id: 73, followers: 19, following: 17},
        {id: 74, followers: 19, following: 18},

        // Facilitators
        {id: 75, followers: 20, following: 21},
        {id: 76, followers: 20, following: 22},
        {id: 77, followers: 20, following: 23},

        {id: 78, followers: 21, following: 20},
        {id: 79, followers: 21, following: 22},
        {id: 80, followers: 21, following: 23},

        {id: 81, followers: 22, following: 20},
        {id: 82, followers: 22, following: 21},
        {id: 83, followers: 22, following: 23},

        {id: 84, followers: 23, following: 20},
        {id: 85, followers: 23, following: 21},
        {id: 86, followers: 23, following: 22},


        // Staff
        {id: 87, followers: 24, following: 25},
        {id: 88, followers: 24, following: 26},
        {id: 89, followers: 24, following: 27},
        {id: 90, followers: 24, following: 28},

        {id: 91, followers: 25, following: 24},
        {id: 92, followers: 25, following: 26},
        {id: 93, followers: 25, following: 27},
        {id: 94, followers: 25, following: 28},

        {id: 95, followers: 26, following: 24},
        {id: 96, followers: 26, following: 25},
        {id: 97, followers: 26, following: 27},
        {id: 98, followers: 26, following: 28},

        {id: 99, followers: 27, following: 24},
        {id: 100, followers: 27, following: 25},
        {id: 101, followers: 27, following: 26},
        {id: 102, followers: 27, following: 28},

        {id: 103, followers: 28, following: 24},
        {id: 104, followers: 28, following: 25},
        {id: 105, followers: 28, following: 26},
        {id: 106, followers: 28, following: 27}

      ]);
    });
};
