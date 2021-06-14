$(document).ready(function() {
    //populate days
    for (var i = 1; i <= 31; i++) {
        $("#Day").append('<option value="' + i + '">' + i + '</option>');
    }

    //populate months
    $("#Month").append('<option value="1">January</option>');
    $("#Month").append('<option value="2">February</option>');
    $("#Month").append('<option value="3">March</option>');
    $("#Month").append('<option value="4">April</option>');
    $("#Month").append('<option value="5">May</option>');
    $("#Month").append('<option value="6">June</option>');
    $("#Month").append('<option value="7">July</option>');
    $("#Month").append('<option value="8">August</option>');
    $("#Month").append('<option value="9">September</option>');
    $("#Month").append('<option value="10">October</option>');
    $("#Month").append('<option value="11">November</option>');
    $("#Month").append('<option value="12">December</option>');
    

    //populate years
    for (var i = 1961; i <= 2021; i++) {
        $("#Year").append('<option value="' + i + '">' + i + '</option>');
    }

    //enable hobby textbox on check of others checkbox
    $("#OthersText").attr('disabled', 'disabled');
    $("#Others").click(function (){
        if($("#Others").is(":checked"))
            $("#OthersText").removeAttr('disabled');
        else
            $("#OthersText").attr('disabled', 'disabled');
    });
});

function submitHandler(){
    var URL = "https://localhost:44320/api/student/post"
    $.ajax({
        url: URL,
        type: "POST",
        data: fetchPayload(),
        success: () => alert("successfully posted data"),
        error: () => alert("failed to post data")
    });
}

function fetchPayload(){
    return {
        "Student": fetchStudent(),
        "Hobbies": fetchHobbies(),
        "Qualifications": fetchQualifications(),
        "Courses": fetchCourses()
    };
}

function fetchCourses(){
    var courses = [];
    
    if($("#BCA").is(":checked")) courses.push( { "Name": "BCA(Bachelor of Computer Applications)" } );
    if($("#BCOM").is(":checked")) courses.push( { "Name": "B.Com(Bachelor of Commerce)" } );
    if($("#BSC").is(":checked")) courses.push( { "Name": "B.Sc(Bachelor of Science)" } );
    if($("#BA").is(":checked")) courses.push( { "Name": "BA(Bachelor of Arts)" } );
    if($("#MCA").is(":checked")) courses.push( { "Name": "MCA(Master of Computer Applications)" } );
    if($("#MCOM").is(":checked")) courses.push( { "Name": "M.Com(Master of Commerce)" } );
    if($("#MSC").is(":checked")) courses.push( { "Name": "M.Sc(Master of Science)" } );
    if($("#MA").is(":checked")) courses.push( { "Name": "MA(Master of Arts)" } );

    return courses;
}

function fetchQualifications(){
    var qualifications = [];
    
    if($("#10").is(":checked")) qualifications.push( { "Name": "High School(10th)" } );
    if($("#12").is(":checked")) qualifications.push( { "Name": "Higher School(12th)" } );
    if($("#Graduate").is(":checked")) qualifications.push( { "Name": "Graduation(Bachelors)" } );
    if($("#PostGraduate").is(":checked")) qualifications.push( { "Name": "Post Graduation(Masters)" } );
    if($("#PhD").is(":checked")) qualifications.push( { "Name": "Ph.D" } );

    return qualifications;
}

function fetchHobbies(){
    var hobbies = [];
    
    if($("#Drawing").is(":checked")) hobbies.push( { "Name": "Drawing" } );
    if($("#Singing").is(":checked")) hobbies.push( { "Name": "Singing" } );
    if($("#Dancing").is(":checked")) hobbies.push( { "Name": "Dancing" } );
    if($("#Sketching").is(":checked")) hobbies.push( { "Name": "Sketching" } );
    if($("#Others").is(":checked")) hobbies.push( { "Name": $("#OthersText").val() } );
    
    return hobbies;
}

function fetchStudent(){
    //first name
    var firstName = $("#FirstName").val();

    //last name
    var lastName = $("#LastName").val();
    
    //email ID
    var email = $("#Email").val();

    //mobile number
    var mobile = $("#Mobile").val();

    //gender
    var gender;
    if($("input[name='Gender']:checked").val() === "male") gender = false;
    else gender = true;

    //date of birth
    var dateOfBirth = $("#Year").val() + "-" + $("#Month").val() + "-" + $("#Day").val();

    //address
    var address = $("#Address").val();

    //city
    var city = $("#City").val();

    //pincode
    var pincode = $("#Pincode").val();

    //state
    var state = $("#State").val();

    //country
    var country = $("#Country").val();

    return {
        "FirstName": firstName,
        "LastName": lastName,
        "EmailID": email,
        "MobileNo": parseInt(mobile),
        "Gender": gender,
        "DateOfBirth": dateOfBirth,
        "Address": address,
        "City": city,
        "Pincode": parseInt(pincode),
        "State": state,
        "Country": country
    };
}

function resetHandler(){
    $("#FirstName").val("");
    $("#LastName").val("");
    $("#Email").val("");
    $("#Mobile").val("");
    $("#Address").val("");
    $("#City").val("");
    $("#Pincode").val("");
    $("#State").val("");
    $("#Country").val("");
    $("#OthersText").val("");
    $("#OthersText").attr('disabled', 'disabled');
    $("#Male").prop("checked", true);
    $("#Female").prop("checked", false);
    $("#Drawing").prop("checked", false);
    $("#Singing").prop("checked", false);
    $("#Dancing").prop("checked", false);
    $("#Sketching").prop("checked", false);
    $("#Others").prop("checked", false);
    $("#10").prop("checked", false);
    $("#12").prop("checked", false);
    $("#Graduate").prop("checked", false);
    $("#PostGraduate").prop("checked", false);
    $("#PhD").prop("checked", false);
    $("#BCA").prop("checked", false);
    $("#BCOM").prop("checked", false);
    $("#BSC").prop("checked", false);
    $("#BA").prop("checked", false);
    $("#MCA").prop("checked", false);
    $("#MCOM").prop("checked", false);
    $("#MSC").prop("checked", false);
    $("#MA").prop("checked", false);
    $("#Day").val("1");
    $("#Month").val("1");
    $("#Year").val("1961");
}

function restrictAlphabets(e) {
    var x = e.which || e.keycode;
    if ((x >= 48 && x <= 57))
        return true;
    else
        return false;
}