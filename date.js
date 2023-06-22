
module.exports = getDate;

function getDate(){
    let today = new Date();
  let day = "";
  let currentDay = today.getDay();

  let options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  

  let date = today.toLocaleDateString("de-DE", options)
  return date
}


