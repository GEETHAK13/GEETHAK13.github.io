var data1 = {
  image: "./girl.png",
  name: "Geetha",
  designation: "Software Developer",
};
var data2 = {
  image: "./girl2.jpeg",
  name: "Geetha Koritala",
  designation: "Intern",
};

var isdata1 = true;
var displaydata;
var changepic = function () {
  if (isdata1) {
    displaydata = data2;
    isdata1 = false;
  } else {
    displaydata = data1;
    isdata1 = true;
  }
  document.getElementById("myimage").src = displaydata.image;
  document.getElementById("myname").innerHTML = displaydata.name;
  document.getElementById("mydesig").innerHTML = displaydata.designation;
};
  