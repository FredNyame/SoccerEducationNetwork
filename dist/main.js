//Function to set the time and date
function timeDate(){
  //Get Html elements
  let day = document.querySelector('#day');
  let hours = document.querySelector('#hour');
  let minutes = document.querySelector('#minute');
  let seconds = document.querySelector('#second');

  //Date wants to end time in milliseconds
  let futureDate = new Date('January 10, 2019 03:24:00').getTime();

  //Having a counter to count down every 1 second
  let counter  = setInterval(function() {
    //today date and time in milliseconds
    let todayDate = new Date().getTime();

    //Elapsed time in millseconds
    let distance = futureDate - todayDate;

    //get day, hour, minutes seconds
    let dayTime = Math.floor(distance / (1000 * 60*  60 * 24));
    let hourTime = Math.floor((distance % (1000 * 60*  60 * 24) )/ (1000 * 60 * 60));
    let minuteNow = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let secondNow = Math.floor((distance % (1000 * 60)) / (1000));

    //Display inside HTML
    day.innerHTML = dayTime;
    hours.innerHTML = hourTime;
    minutes.innerHTML = minuteNow;
    seconds.innerHTML = secondNow;

    //When the time is up
    if(distance < 0) {
      clearInterval(counter);
      document.querySelector('.time_container').innerHTML = '<h1>Website is live</h1>';
    }
  }, 1000);
}

timeDate();