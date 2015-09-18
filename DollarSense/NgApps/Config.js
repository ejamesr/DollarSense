app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'NgApps/Templates/home.html',
            controller: 'HomeController'
        })
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'NgApps/Templates/dashboard.html',
            controller: 'DashboardController'
        })
        .state('accounts', {
            url: '/accounts',
            templateUrl: 'NgApps/Templates/accounts.html',
            controller: 'AccountsController'
        })
        .state('categories', {
            url: '/categories',
            templateUrl: 'NgApps/Templates/categories.html',
            controller: 'CategoriesController'
        })
        .state('invite', {
            url: '/invite',
            templateUrl: 'NgApps/Templates/invite.html',
            controller: 'InviteController'
        })
        .state('households', {
            url: '/households',
            templateUrl: 'NgApps/Templates/households.html',
            controller: 'HouseholdsController'
        })
        .state('reconcile', {
            url: '/reconcile',
            templateUrl: 'NgApps/Templates/reconcile.html',
            controller: 'ReconcileController'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'NgApps/Templates/contact.html',
            controller: 'ContactController'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'NgApps/Templates/about.html',
            controller: 'AboutController'
        })
}]);
