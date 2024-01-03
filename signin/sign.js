<script src="https://www.gstatic.com/firebasejs/4.12.1/firebase.js"></script>
// 初始化
const config = {
  apiKey: "apiKey",
  authDomain: "XXXXX.firebaseapp.com",
  databaseURL: "https://XXXXX.firebaseio.com/"
};
firebase.initializeApp(config);
const database = firebase.database();

// 綁定註冊按鈕的點擊事件
submit.addEventListener('click', () => {
// 點擊註冊按鈕時，紀錄使用者輸入的帳號密碼
  let user = {
    email: email.value,
    pwd: pwd.value
  };

// 透過 auth().createUserWithEmailAndPassword 建立使用者
  firebase.auth().createUserWithEmailAndPassword(user.email, user.pwd)
    .then(u => {
      // 取得註冊當下的時間
      let date = new Date();
      let now = date.getTime();

      // 記錄相關資訊到 firebase realtime database
      database.ref(u.uid).set({
        signup: now,
        email: user.email
      }).then(() => {
        // 儲存成功後顯示訊息
        message.innerHTML = 'User created successfully';
      });
    }).catch(err => {
      // 註冊失敗時顯示錯誤訊息
      message.innerHTML = err.message;
    });
});
firebase.initializeApp({
  apiKey: "apiKey",
  authDomain: "XXXXX.firebaseapp.com",
  databaseURL: "https://XXXXX.firebaseio.com/"
});

const database = firebase.database();

function show_hide() {
    var login = document.getElementById("container1");
    var signup = document.getElementById("container2");
    var copyright = document.getElementById("copyright");
  
    if (login.style.display === "none") {
        login.style.display = "block";  //lonin出現
        document.getElementById("username").value="";
        document.getElementById("password").value="";
        signup.style.display = "none";  //signup消失
        copyright.style.margin = "200px 0px 0px 0px";
    } else {
        login.style.display = "none";   //login消失
        signup.style.display = "block"; //signup出現
        signup.style.visibility="visible";
        copyright.style.margin = "200px 0px 0px 0px";
     
        document.getElementById("fullname").value="";
        document.getElementById("username2").value="";
        document.getElementById("password2").value="";
        document.getElementById("comfirm_password").value="";
    }
}
