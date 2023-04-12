const searchList = (data) => {
  let element = document.querySelector(".searchList");
  let searchQuery = "Education";
  let html =
    " <h2>Search Results for " +
    searchQuery +
    "</span> (0.03 seconds)</h2>" +
    " <div class='year-box adjust-year'>" +
    " <div>" +
    "  <h3>Year</h3>" +
    " </div>" +
    " <div><input type='radio' name='year' id='' /> 2020</div>" +
    " <div><input type='radio' name='year' id='' /> 2021</div>" +
    "</div>";
  for (let i = 0; i < data.length; i++) {
    let { title, description, authorName, date, readTime, category } = data[i];
    for (let j = 0; j < category.length; j++) {
      if (category[j] == searchQuery) {
        html +=
          "<div class='home-article'>" +
          "<div class='home-article-img'>" +
          "<img src='img/11.svg' alt='article'/>" +
          "</div>" +
          "<div class='home-article-content font1'>" +
          "<a href='/blogpost.html'>" +
          "<h3>" +
          title +
          "</h3>" +
          "</a>" +
          "<br>" +
          description +
          "<br>" +
          "<span>" +
          authorName +
          " | " +
          "</span > " +
          "<span>" +
          date +
          " " +
          "</span>" +
          " | " +
          "<span>" +
          readTime +
          "</span > " +
          "<br>" +
          category +
          "</div>" +
          "</div>";
      }
    }
  }
  element.innerHTML = html;
};

const buildHomeArticles = (data) => {
  let element = document.querySelector(".home-articles");

  let html =
    "<h2>Featured Articles</h2>" +
    "<div class='year-box adjust-year'>" +
    "<div>" +
    " <h3>Year</h3>" +
    "</div>" +
    "<div>" +
    "<input type='radio' name='year' id='' /> 2020" +
    " </div>" +
    " <div>" +
    "   <input type='radio' name='year' id='' /> 2021" +
    " </div>" +
    "</div>";
  for (let i = 0; i < data.length; i++) {
    let {
      id,
      title,
      description,
      imgLink,
      authorName,
      author_post,
      authorLink,
      date,
      readTime,
      category,
    } = data[i];

    html +=
      "<div class='home-article'>" +
      `<div class='home-article-img' style="background-image:url('` +
      imgLink +
      `');">` +
      "</div>" +
      "<div class='home-article-content font1'>" +
      // "<a href='/blogs/Post" +
      // 1 +
      // ".html' id=='" +
      // id +
      // "'> " +
      "<span class='title' >" +
      title +
      "</span>" +
      "</a>" +
      // description +
      "<br>" +
      "<span><a href='" +
      authorLink +
      "'>" +
      authorName +
      " | " +
      author_post +
      "</a><br>" +
      "</span > " +
      "<span>" +
      date +
      " " +
      "</span>" +
      " | " +
      "<span>" +
      readTime +
      "</span > " +
      "<br>" +
      category +
      "</div>" +
      "</div><br>";
  }
  element.innerHTML = html;
};
