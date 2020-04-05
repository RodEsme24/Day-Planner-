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
  var index = $( ".saveBtn" ).index( this );
  var inPut= $(".textinput").eq(index);
  var value=inPut.val()
  var name=inPut.attr("name");
 localStorage.setItem(name,value); 

})






