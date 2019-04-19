


<script src="~/Scripts/jquery-3.3.1.js"></script>
    <script src="~/Scripts/bootstrap.js"></script>
    <link href="~/Content/bootstrap.css" rel="stylesheet" />
   

$(document).ready(function () {
    loadData();
});

function loadData() {
    $.ajax({
        URL: "/Home/List",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {


            var html = '';
            $.each(result, function (key, item) {
                html += '<tr>';
                html += '<td>' + item.EmployeeID + '</td>';
                html += '<td>' + item.Name + '</td>';
                html += '<td>' + item.Age + '</td>';
                html += '<td>' + item.State + '</td>';
                html += '<td>' + item.Country + '</td>';
                html += '<td><a href="#" onclick="return getbyID(' + item.EmployeeID + ')">Edit</a> | <a href="#" onclick="Delele(' + item.EmployeeID + ')">Delete</a></td>';
                html += '</tr>';
            });  

            //var html = '';
            //$.each(result, fuction(key, item){
            //    html += '<tr>';
            //    html += '<td>' + item.EmployeeID + '</td>';

            //    html += '<td>' + item.Name + '</td>';
            //    html += '<td>' + item.Age + '</td>';
            //    html += '<td>' + item.State + '</td>';
            //    html += '<td>' + item.Country + '</td>';
            //    html += '<td>' 
            //        <a href="#" onclick="return getbyID('+item.EmployeeID+')" > Edit</a>
            //    </td>;
            //    html += '</tr>';
            //});
            $('.tbody').html(html);

        },
        error: function (errormessage) {
            alert(errormessage.responseText);
    });


}





$(document).ready(function () {
    loadData();
});

//Load Data function  
function loadData() {
    $.ajax({
        url: "/Home/List",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            var html = '';
            $.each(result, function (key, item) {
                html += '<tr>';
                html += '<td>' + item.EmployeeID + '</td>';
                html += '<td>' + item.Name + '</td>';
                html += '<td>' + item.Age + '</td>';
                html += '<td>' + item.State + '</td>';
                html += '<td>' + item.Country + '</td>';
                html += '<td><a href="#" onclick="return getbyID(' + item.EmployeeID + ')">Edit</a> | <a href="#" onclick="Delele(' + item.EmployeeID + ')">Delete</a></td>';
                html += '</tr>';
            });
            $('.tbody').html(html);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}  









//Add data function

function Add() {
    var res = validate();
    if (res == false) {
        return false;
    }

    var empobj = {
        EmployeeID: $('#EmployeeID').val,
        Name: $('#Name').val(),
        Age: $('#Age').val(),
        State: $('#State').val(),
        Country: $('#Country').val()

    };
    $.ajax({

        url: "/Home/Add",
        data: JSON.stringify(empobj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
          //  loadData();
            $('#myModal').modal('hide');
        },
        error: function (errormessage) {
            alert(error.responseText);
        }

    });
    

}

//data validation
function validate() {


    var isValid = true;
    if ($('#Name').val().trim() == "") {
        $('#Name').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Name').css('border-color', 'lightgrey');
    }
    if ($('#Age').val().trim() == "") {
        $('#Age').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Age').css('border-color', 'lightgrey');
    }
    if ($('#State').val().trim() == "") {
        $('#State').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#State').css('border-color', 'lightgrey');
    }
    if ($('#Country').val().trim() == "") {
        $('#Country').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Country').css('border-color', 'lightgrey');
    }
    return isValid;
}









