$( document ).ready(function() {
let toDayEl = $("#currentDay");
toDayEl.text(moment().format("LLLL"));
let currentTime = 9;
//let curentTime = moment().hour()
let hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
for (i = 0; i < hours.length; i++) {
  let blocktime = $("#" + hours[i]);
  // console.log(hours [i]);
  if (currentTime == hours[i]) {
    console.log(i);
    $("#" + hours[i]).addClass("violetbackground");
  } else if (currentTime > hours[i]  ){
    $("#" + hours[i]).addClass("hotpinkground");
  }
  else if (currentTime < hours[i]) {
      $("#" + hours[i]).addClass("purplebackground");
  }
}

var saveBtn=$(".saveBtn")
    saveBtn.on("click", function(){
      //var index = $( ".saveBtn" ).index( this );
      //var inPut= $(".textinput").eq(index);
      var inPut = $(this).parent().find(".textinput").first(); //gets the text input element (go to parent of button, then search children for textinput class, and use first result)
      var value=inPut.val()
      var name=inPut.attr("name");
      //Saves to local storage from web page
      console.log("Saving " + name + " as " + value);
     localStorage.setItem(name,value);
    })
    console.log("Page Ready");
    //Loads values from local storage and puts them into the web page
    document.getElementsByName("9am")[0].value = localStorage.getItem("9am");
    document.getElementsByName("10am")[0].value = localStorage.getItem("10am");
    document.getElementsByName("11am")[0].value = localStorage.getItem("11am");
    document.getElementsByName("12pm")[0].value = localStorage.getItem("12pm");
    document.getElementsByName("1pm")[0].value = localStorage.getItem("1pm");
    document.getElementsByName("2pm")[0].value = localStorage.getItem("2pm");
    document.getElementsByName("3pm")[0].value = localStorage.getItem("3pm");
    document.getElementsByName("4pm")[0].value = localStorage.getItem("4pm");
    document.getElementsByName("5pm")[0].value = localStorage.getItem("5pm");
    //...
});








