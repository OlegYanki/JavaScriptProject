var API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImI4NDIxYTBjMjMxZjBkMzY1NDcwN2I1MTRhOTEzZDlhYWRhMWYxOGFiMzcxYWU3NzY3NDIxYjc2OWI4MWI5MWNkNDBlYTVlZDZmZTEwMTkzIn0.eyJhdWQiOiIxMCIsImp0aSI6ImI4NDIxYTBjMjMxZjBkMzY1NDcwN2I1MTRhOTEzZDlhYWRhMWYxOGFiMzcxYWU3NzY3NDIxYjc2OWI4MWI5MWNkNDBlYTVlZDZmZTEwMTkzIiwiaWF0IjoxNTA5NjQxODExLCJuYmYiOjE1MDk2NDE4MTEsImV4cCI6MTgyNTE3NDYxMSwic3ViIjoiNzg0Iiwic2NvcGVzIjpbInVzZXJCYXNlSW5mbyIsInVzZXJEZXRhaWxlZEluZm8iLCJ1c2VyQ291cnNlSW5mbyJdfQ.M6nFA2t5tba6h-qOuJUAKmPcb_FF0WhYYhfv_v1XTbcOfz6paRekPxW0XyR8Nppk14JTTLqSe82kSYOwBAFpdBtDj3DBfG5I8tK4NyJWy9yZrG3pjdFfgZiQzmAsoztf8cO9jyle5edWUO_fB8AxOl7iNmqRnaVaEFtBKfQZoCfCe0uezYc5G5nmyrRTAfK6YwS-ZFv7sws6qzqkzwlcyuhR7ThiNhYiajlTQp3ErpWbmNSPnaasaiMrY6KZCnPe-cPMwJCMLvjIR_Vfts1boJKUmwiBTuQr5WmyLDoq3fLltbEYhHOTVbvO237UBG8BQgxz8RT2_QrR_92MCWMzDo6vDVMVNe-Pm_rT1DXXRkYqfYDIvTdGUAiUuk9yJYIdipsmafV0Jsq-VaLOpCg5atbPz2ar5TvA5w4ZiuKOHHclXqjjpez5Dq94nmzy0iJ99w73uk1WoyQJdNI5gqKZxwn7KTHT4k4QZ4iiycV7YRl9MTWdGiW6mJ4wyC2JB9j3kdhU4tkhvBg72sOkHGu6wZV3saGkWFTWZQKQJzUJAtJcyvbo0EUrT0QyhhzRRsBgLQ3AGqNvCsQD1Y6wYL91gVSfVhYnCzxJ0tmFrWU2TRqoP-9WAiGbo7QYppU7ulD_VIe2gUUx20oCF8thjIFk29kPEfbBQrmYA-tFQsI3bw8\n';
var client = new INTITAClient({
    key: API_KEY,
});
var myId = 784;
client.getUserDetails(myId, function (error, data) {
    console.log(error,data);
    var myAvatar,firstName,lastName,email,address,city,country,phone;
    myAvatar = document.getElementById("myAvatar");
    myAvatar.src = data.avatar;
    firstName = document.getElementById("firstName");
    firstName.innerText = data.firstName;
    lastName = document.getElementById("lastName");
    lastName.innerText = data.secondName;
    email = document.getElementById("email");
    email.innerText = data.email;
    address = document.getElementById("address");
    address.innerText = data.address;
    city = document.getElementById("city");
    city.innerText = data.city;
    country  = document.getElementById("country");
    country.innerText = data.country;
    phone = document.getElementById("phone");
    phone.innerText = data.phone;
});
client.getUserCoursesAndModules(myId, function (error, data) {

    var courseID = data.courses[0].id;

    client.getCourseModules(courseID,function (err,modules) {
        var ul,li;
        ul = document.createElement("ul");
        modules.forEach(function (item) {
            li = document.createElement("li");
            li.innerText = item.title;
            ul.appendChild(li);
        });
        document.getElementById("modules").appendChild(ul);
    })

    client.getCourseInfo(courseID, function (error, coureseInfo) {
        var courses = document.getElementById("courses");
        courses.innerText = coureseInfo.title_ru;
        var from = document.getElementById("from");
        from.innerText = coureseInfo.for_whom_ru;
    });

});

/*client.getModuleInfo(1, function (error, data) {
    console.log(error, data)


});
client.getCourseModules(1, function (error, data) {
    console.log(error, data);
});
client.getCourseTags(1, function(error, data) {
    console.log(error, data);
});
client.getModuleTags(1, function(error, data) {
    console.log(error, data);
});
client.getModuleLectures(1, function(error, data) {
    console.log(error, data);
})*/
