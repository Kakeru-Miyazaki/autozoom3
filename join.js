function setUrl() {
  urlToJoin = "nomeeting.html"
  const date = new Date();
  var nowHour = '' + date.getHours()
  var nowMin = ('0' + date.getMinutes()).slice(-2);
  nowTime = Number(nowHour + nowMin);
  var dayOfWeek = date.getDay();

  var nowDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][dayOfWeek];
  console.log(nowDay, nowTime)
  var t = 0
  for (var i = 0; i < localStorage.length; i++) {
    var _key = localStorage.key(i);
    obj = JSON.parse(localStorage.getItem(_key))
    keyDay = obj['Day'];
    keyTime = obj['Time'];
    if (keyDay == nowDay) {
      keyTime = Number(keyTime.slice(0, 2) + keyTime.slice(3))
      // keyTime = Number(keyTime)
      if (t <= keyTime && keyTime <= nowTime) {
        urlToJoin = obj['URL']
        t = keyTime
      }
    }
    // console.log(keyTime)
  }
  let link = document.getElementById('joinMeeting');
  link.setAttribute('href', urlToJoin);
};

setUrl()