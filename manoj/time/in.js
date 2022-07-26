const currentTime = () => {
  const h1 = document.querySelector("h1");

  let date = new Date();
  let mnth = date.getMonth();
  let yer = date.getFullYear();
  let dates = date.getDate();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  hh = hour < 10 ? `0${hour}` : hour;
  mm = min < 10 ? `0${min}` : min;
  ss = sec < 10 ? `0${sec}` : sec;

  let time = `${hh}:${mm}:${ss}&date:${dates}/${mnth}/${yer}`;
  h1.innerHTML = time;
};

currentTime();
setInterval(currentTime, 1000);
