$(document).ready(function () {

    $.getJSON("data.json",
        function (data) {
            var employee = '';
            $.each(data, function (key, value) {
                employee += '<tr>';
                employee += '<td>' +
                    value.userId + '</td>';

                employee += '<td>' +
                    value.jobTitle + '</td>';

                employee += '<td>' +
                    value.firstName + '</td>';

                employee += '<td>' +
                    value.lastName + '</td>';
                employee += '<td>' +
                    value.employeeCode + '</td>';
                employee += '<td>' +
                    value.phoneNumber + '</td>';
                employee += '<td>' +
                    value.emailAddress + '</td>';
                employee += '</tr>';
            });

            $('table').append(employee);
        });
});