pharmacyApp.factory('DepartmentService' ,['$http', function ($http) {
    return{

        getDepartments : function () {
        return $http.get(nodeHost+'/departments').then(function (res) {
            return res.data;
        });
        },
        add: department => $http.post(nodeHost+'/departments', department).then(response => response.data)
    }
}]);

