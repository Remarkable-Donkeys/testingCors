$(document).ready(function(){
    $.ajax({
        type: 'get',
        url: 'http://localhost:5000/api/customer',
    })
});