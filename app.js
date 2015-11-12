angular.module('ionicApp', ['ionic'])

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('meals', {
                abstract: true,
                url: '/meals',
                templateUrl: 'meals.html'
            })

            .state('meals.list', {
                url: '',
                templateUrl: 'meals.list.html',
                controller: 'MealsListController'
            })

            .state('meals.detail', {
                url: '/:id',
                templateUrl: 'meals.detail.html',
                controller: 'MealsDetailController'
            });

        $urlRouterProvider.otherwise("/meals");

    })

    .controller('MealsListController', function ($scope, $location) {

        $scope.meals = [
            {
                id: 1,
                name: 'Salmon Done Right',
                ingredients: [
                    {
                        name: "Shredded Red Cabbage",
                        quantity: "4 cups"
                    },
                    {
                        name: "Mini Red Potatoes",
                        quantity: "12"
                    },
                    {
                        name: "Extra virgin olive oil",
                        quantity: "2 tbsp"
                    },
                    {
                        name: "Salt",
                        quantity: "Preference"
                    },
                    {
                        name: "Pepper",
                        quantity: "Preference"
                    },
                    {
                        name: "Lemon",
                        quantity: "1"
                    }
                ],
                preparation: [
                    {
                        step: 1,
                        instruction: "Preheat oven to 400 Degrees"
                    },
                    {
                        step: 2,
                        instruction: "In a roasting pan, toss tabbage and potatoes with olive oil, season with salt and pepper"
                    },
                    {
                        step: 3,
                        instruction: "Roast for 25 minutes"
                    },
                    {
                        step: 4,
                        instruction: "Nestle salmon in center of pan, pushing cabbage and potatoes to edges. Season salmon with salt and pepper. Cut lemon in half and squeeze 1 half over dish."
                    },
                    {
                        step: 5,
                        instruction: "Roast for 15 minutes. Squeeze other lemon half over dish and serve."
                    }
                ]
            }
        ];

        $scope.onSelectMeal = function(n) {
            $location.url('/meals/' + n.id);
        }

    })

    .controller('MealsDetailController', function ($stateParams, $scope) {

        $scope.meal = {
                id: 1,
                name: 'Salmon Done Right',
                ingredients: [
                    {
                        name: "Shredded Red Cabbage",
                        quantity: "4 cups"
                    },
                    {
                        name: "Mini Red Potatoes",
                        quantity: "12"
                    },
                    {
                        name: "Extra virgin olive oil",
                        quantity: "2 tbsp"
                    },
                    {
                        name: "Salt",
                        quantity: "Preference"
                    },
                    {
                        name: "Pepper",
                        quantity: "Preference"
                    },
                    {
                        name: "Lemon",
                        quantity: "1"
                    }
                ],
                preparation: [
                    {
                        step: 1,
                        instruction: "Preheat oven to 400 Degrees"
                    },
                    {
                        step: 2,
                        instruction: "In a roasting pan, toss tabbage and potatoes with olive oil, season with salt and pepper"
                    },
                    {
                        step: 3,
                        instruction: "Roast for 25 minutes"
                    },
                    {
                        step: 4,
                        instruction: "Nestle salmon in center of pan, pushing cabbage and potatoes to edges. Season salmon with salt and pepper. Cut lemon in half and squeeze 1 half over dish."
                    },
                    {
                        step: 5,
                        instruction: "Roast for 15 minutes. Squeeze other lemon half over dish and serve."
                    }
                ]
            };
    });