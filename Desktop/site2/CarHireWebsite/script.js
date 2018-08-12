$(function(){

	// console.log('Bla');
	$('.nav').hide();
	$('.bars').on('click',function(){

		$('.nav').slideToggle();
	});
	$('.datepairExample').timepicker();
});

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
    var a, b, i, val = this.value;

    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) { return false;}
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function(e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
              inp.click();
            });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
    });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

/*An array containing all the country names in the world:*/
var cities = ["Auckland","Wellington","Christchurch","Hamilton","Tauranga","Napier-Hastings","Dunedin","Palmerston North","Nelson","Rotorua","Whangarei","New Plymouth","Invercargill","Whanganui","Gisborne"];

/*initiate the autocomplete function on the "myInput" element, and pass along the cities array as possible autocomplete values:*/
autocomplete(document.getElementById("locationPickup"), cities);
autocomplete(document.getElementById("locationDropoff"), cities);

//check forms


function checkAlphabertic(){
  /*An array containing all the country names in the world:*/
  var cities = ["Auckland","Wellington","Christchurch","Hamilton","Tauranga","Napier-Hastings","Dunedin","Palmerston North","Nelson","Rotorua","Whangarei","New Plymouth","Invercargill","Whanganui","Gisborne"];

  var sValue = this.value;
  if(sValue === ''){
    //not valid
    this.classList.add('message-error');
  }else{
    //check aplhabet
    //Create a regular expression object
    // var oAphabeticExp = cities;
    
    this.classList.remove('message-error');
    //Test the string
    if ($.inArray(sValue, cities) == -1) {
      
      this.classList.add('message-error');
    }

  } 
}

function checkPickupDate(){
  var sValue = this.value;
  if(sValue ===''){
    //not valid
    // this.parentNode.children[3].children[1].innerHTML = 'Please fill in';
    this.classList.add('message-error');

    

  }else{
   //check aplhabet
   //Create a regular expression object
   var oAphabeticExp = /^\d{4}-\d{2}-\d{2}$/;

   
   //Test the string
   var bTest = oAphabeticExp.test(sValue);
   if(bTest === false){
       //complain
       this.classList.add('message-error');

     }else{
       //say thanks
       this.classList.remove('message-error');
     }
   } 

 }

 function checkPickupTime(){
  var sValue = this.value;
  if(sValue === ''){
    //not valid
    // this.parentNode.children[3].children[1].innerHTML = 'Please fill in';
    this.classList.add('message-error');

  }else{
       //say thanks
       this.classList.remove('message-error');
     }
   }

   function checkDistance(){
    var sValue = this.value;
    if(sValue === ''){
    //not valid
    // this.parentNode.children[3].children[1].innerHTML = 'Please fill in';
    this.classList.add('message-error');

  }else{
       //say thanks
       this.classList.remove('message-error');
     }
   }


   var oPickupLocation = document.querySelector('#locationPickup');
   oPickupLocation.addEventListener('keyup',checkAlphabertic);
   oPickupLocation.addEventListener('click',checkAlphabertic);
   var oDropoffLocation = document.querySelector('#locationDropoff');
   oDropoffLocation.addEventListener('keyup',checkAlphabertic);
   oDropoffLocation.addEventListener('click',checkAlphabertic);
   var oPickupDate = document.querySelector('#pickupDate');
   oPickupDate.addEventListener('blur',checkPickupDate);
   var odropOffDate = document.querySelector('#dropOffDate');
   odropOffDate.addEventListener('blur',checkPickupDate);
   var opickupTime = document.querySelector('.pickupTime');
   opickupTime.addEventListener('blur',checkPickupTime);
   var odropoffTime = document.querySelector('.dropoffTime');
   odropoffTime.addEventListener('blur',checkPickupTime);
   var odistance = document.querySelector('#distance');
   odistance.addEventListener('blur',checkDistance);


   var iPickupDate = "2008-01-12";
   var iDropoffDate = "2008-01-22";
// var iDaysHire = "";


$('#pickupDate').on('change', function(){
  iPickupDate = $('#pickupDate').val();
  console.log(iPickupDate);
});

$('#dropOffDate').on('change', function(){
  iDropoffDate = $('#dropOffDate').val();
  console.log(iDropoffDate);
  checkDates();
});
var differanceDates;

function checkDates(){

  var oneDay = 24*60*60*1000;

  var startDate = new Date(iPickupDate);
  var endDate = new Date(iDropoffDate);

  differanceDates = ((endDate - startDate) / oneDay);

  return differanceDates;

  // console.log('Days: ' + differanceDates);

  // if(differanceDates < 0){
  //   console.log('Drop Off Date cant be before pickup date.');

  // }

  // else if(differanceDates > 0){
  //     //show options

  //     // showVehicles(differanceDates);

  //   }

  //   else {
  //   //Minimum hire is 1 day.
  // }

}

$('#people').on('change', function(){

  var iPeople = parseInt($('#people').val());

  console.log(iPeople);
  $('.carOptions-cars').css('display', 'none');
  // $('.carOptions-cars').css('border', 'none');

  if(iPeople == 1 ){
    if (differanceDates >= 1 && differanceDates <= 5){
      $('.carOptions-cars:nth-child(2)').css('display', 'block');
      $('.carOptions-cars:nth-child(3)').css('display', 'block');

      if(differanceDates >= 3){
        $('.carOptions-cars:nth-child(4)').css('display', 'block');
      }
    }
    else if (differanceDates >5 && differanceDates <= 10){
      $('.carOptions-cars:nth-child(3)').css('display', 'block');
      $('.carOptions-cars:nth-child(4)').css('display', 'block');
    }
  }
  if (iPeople == 2){
    if (differanceDates >=1 && differanceDates <= 10){
      $('.carOptions-cars:nth-child(3)').css('display', 'block');
      if(differanceDates >= 2){
        $('.carOptions-cars:nth-child(5)').css('display', 'block');
      }
      if(differanceDates >= 3){
        $('.carOptions-cars:nth-child(4)').css('display', 'block');
      }
    }
    else if (differanceDates >10 && differanceDates <= 15){
      $('.carOptions-cars:nth-child(5)').css('display', 'block');
    }
  }
  if (iPeople == 3){
    if (differanceDates >=2 && differanceDates <= 10){
      $('.carOptions-cars:nth-child(4)').css('display', 'block');
      if(differanceDates >= 3){
        $('.carOptions-cars:nth-child(5)').css('display', 'block');
      }
    }
    else if (differanceDates >10 && differanceDates <= 15){
      $('.carOptions-cars:nth-child(5)').css('display', 'block');
    }
  }
  if (iPeople == 4){
    if (differanceDates >=2 && differanceDates <= 10){
      $('.carOptions-cars:nth-child(4)').css('display', 'block');
      if(differanceDates >= 3){
        $('.carOptions-cars:nth-child(5)').css('display', 'block');
      }
    }
    else if (differanceDates >10 && differanceDates <= 15){
      $('.carOptions-cars:nth-child(5)').css('display', 'block');
    }
  }
  if (iPeople == 5){
    if (differanceDates >=2 && differanceDates <= 10){
      $('.carOptions-cars:nth-child(4)').css('display', 'block');
      if(differanceDates >= 3){
        $('.carOptions-cars:nth-child(5)').css('display', 'block');
      }
    }
    else if (differanceDates >10 && differanceDates <= 15){
      $('.carOptions-cars:nth-child(5)').css('display', 'block');
    }
  }
  if (iPeople == 6){
    if (differanceDates >=2 && differanceDates <= 15){
      $('.carOptions-cars:nth-child(5)').css('display', 'block');
    }
  }

});

$('.carOptions-cars').on('click', function(){
  var vehicleBorderOn = $(this).data('border');
  var vehiclePrice = $(this).data('price');
  var vehicleFuel = $(this).data('fuel');
  var VehicleDistance = $('#distance').val();

  $('.carOptions-cars').each(function(){
    $(this).removeClass('optionBorder');
    $(this).data('border', 'false');
  });

  if (vehicleBorderOn == 'false'){
    $(this).addClass('optionBorder');
    $(this).data('border', 'true');
  }
  console.log(vehiclePrice);
  console.log(vehicleFuel);
  var costDays = differanceDates * vehiclePrice;
  var costFuel = (VehicleDistance / 100) * vehicleFuel;
  console.log(costDays);
  console.log(differanceDates);
  console.log(costFuel);
  $('.value').html(' $'+costDays);
  $('.valueFuel').html(' '+costFuel+'L');
});