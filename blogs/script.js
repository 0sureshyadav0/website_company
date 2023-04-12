// const menu = document.querySelector("#hamburger");
// menu.addEventListener("click", () => {
//   menu.classList.toggle("is-active");
// });

let isVisible = false;
function showMenu() {
  if (!isVisible) {
    document.querySelector(".nav").style =
      "z-index:100;display:flex;flex-direction:column;position:absolute;top:1.9rem;right:0;justify-content:flex-start;animation-name:start-slide;";
    isVisible = true;
  } else {
    document.querySelector(".nav").style =
      "z-index:100;display:flex;flex-direction:column;position:absolute;top:1.9rem;right:0;justify-content:flex-start;animation-name:end-slide;";

    setTimeout(removeDisplay, 800);
    function removeDisplay() {
      document.querySelector(".nav").style.display = "none";
    }
    isVisible = false;
  }
}

// const buildBlog = (blogData) => {
//   let element = document.querySelector("#blog_grid");
//   let html = "hello bro<br>hello";
// for (let i = 0; i < blogData.length; i++) {
//   let { imgUrl, title, subtitle, link } = blogData[i];
//   html +=
//     "<a href='/blogs/index.html'><div class='col' style='background-image:url('" +
//     imgUrl +
//     "');background-repeat:no-repeat;background-position:absolute;background-size:cover;'>" +
//     "<div class='bottom_col'>" +
//     "<div id='bottom_col_title'>" +
//     title +
//     "</div>" +
//     "<div id='bottom_col_subtitle'>" +
//     subtitle +
//     "</div></div></div></a>";
// }
//   element.innerHTML = html;
// };

// const changeLogo = () => {
//   let element = document.querySelector(".site-logo");
//   console.log(element);
// };

const buildBlog = (blogData) => {
  let html = "<span style='color:red;'>hello</span>";
  document.querySelector("#blog_grid").innerHTML = html;
};

const buildList = (blogData) => {
  let element = document.querySelector("#left-container");
  let html = "";
  for (let i = 0; i < blogData.length; i++) {
    let { id, list, listLink } = blogData[i];
    if (id == 1) {
      for (let j = 0; j < list.length; j++) {
        let { lisT } = list[j];
        // console.log(lisT);
        html +=
          "<ul><li><a href='" + listLink + "'>" + list[j] + "</a></li></ul>";
      }
    }
  }
  element.innerHTML = html;
};

const buildBlogDescription = (blogData) => {
  let element = document.querySelector("#content");
  let html = "";
  for (let i = 0; i < blogData.length; i++) {
    let {
      id,
      title,
      authorName,
      author_post,
      date,
      readTime,
      readTxt,
      description,
    } = blogData[i];
    // console.log(readtxt);
    if (id == 1) {
      html +=
        "<span class='blog-title'>" +
        title +
        "</span><br><span class='blog-subtitle'><i class='fa fa-user'></i><span class='author-name'> " +
        authorName +
        "</span> | <span class='author-post'>" +
        author_post +
        "</span><br> <span class='subtitle'> <i class='fa fa-clock'></i> " +
        date +
        " - " +
        readTime +
        `<i class='fa fa-play' style='margin-left:1rem;cursor:pointer;' onclick='speak("Hi, Welcome to Appazon. Before you start listening the blog post, its important to be in a good position to ensure your comfort and focus. Be ready. This blog belongs to ` +
        authorName +
        `. a ` +
        author_post +
        `. about ` +
        title +
        ". posted on " +
        date +
        ". Lets begin body section." +
        readTxt +
        ". Thanks for listening carefully. Now, its your turn to share the link to your colleagues or friends. So, that they can be updated about this post as well as different technology." +
        `");'></i><i class='fa fa-pause' style='margin-left:1rem; cursor:pointer;' onclick='pause()'></i>` +
        `<i class='fa fa-stop' style='margin-left:1rem; cursor:pointer;' onclick='stop()'></i>` +
        "</span></span><hr><span class='blog-description'>" +
        description +
        "</span><br>";
    }
  }
  element.innerHTML = html;
};
// `<i class='fa fa-play' style='margin-left:1rem;cursor:pointer;color:yellow;' onclick='speak("Hi, Welcome to Appazon's world. Before you start listening the blog post, it's important to be in a good position to ensure your comfort and focus. This blog belongs to "` +
var firstPlay = false;
function speak(message) {
  var msg = new SpeechSynthesisUtterance(message);
  // msg.lang = "hi-IN";
  var voices = window.speechSynthesis.getVoices();
  msg.voice = voices[0];
  if (!firstPlay) {
    window.speechSynthesis.speak(msg);
    firstPlay = true;
  } else if (firstPlay == true) {
    window.speechSynthesis.resume();
  }
}
function pause() {
  window.speechSynthesis.pause();
}

function stop() {
  window.speechSynthesis.cancel();
}

// speak("Hi, Suresh Yadav here. In this blog your are going to explore about");
const currentDate = new Date();

function showDialog() {
  document.querySelector(".blog-description").style.display = "block";
}

// var quit = document.querySelector(".exit").addEventListener(onclick, exit);
// function exit() {
//   document.querySelector(".blog-description").style.display = "none";
// }
