angular.module('ionicApp', ['ionic'])

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('news', {
                abstract: true,
                url: '/news',
                templateUrl: 'news.html'
            })

            .state('news.list', {
                url: '',
                templateUrl: 'news.list.html',
                controller: 'NewsListController'
            })

            .state('news.detail', {
                url: '/:id',
                templateUrl: 'news.detail.html',
                controller: 'NewsDetailController'
            });

        $urlRouterProvider.otherwise("/news");

    })

    .controller('NewsListController', function ($scope, $location) {

        $scope.news = [
            { id: 1, name: 'News 1' },
            { id: 2, name: 'News 2' },
            { id: 3, name: 'News 3' },
            { id: 4, name: 'News 4' },
            { id: 5, name: 'News 5' }
        ];

        $scope.onSelectNews = function(n) {
            //$state.go('news.detail', { NewsId: n.id });
            $location.url('/news/' + n.id);
        }

    })

    .controller('NewsDetailController', function ($stateParams, $scope) {

        $scope.news = { id: $stateParams.id, name: 'News ' + $stateParams.id };

    });