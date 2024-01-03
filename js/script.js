// 'use strict';
// const titleClickHandler = function(event){
//     event.preventDefault();
//     const clickedElement = this;
//     console.log('Link was clicked!');


//     /* remove class 'active' from all article links  */
//     const activeLinks = document.querySelectorAll('.titles a.active');
//     for(let activeLink of activeLinks){
//         activeLink.classList.remove('active')
//     }

//     /* add class 'active' to the clicked link */
//     clickedElement.classList.add('active')
//     console.log('clickedElement:', clickedElement);

//     /* remove class 'active' from all articles */
//     const activeArticles = document.querySelectorAll('.posts .active');
//         for(let activeArticle of activeArticles){
//             activeArticle.classList.remove('active')
//         }

//     /* get 'href' attribute from the clicked link */
//     const articleSelector = clickedElement.getAttribute('href')
//     console.log(articleSelector)

//     /* find the correct article using the selector (value of 'href' attribute) */
//     const targetArticle = document.querySelector(articleSelector)
//     targetArticle.classList.add('active')
//     console.log(targetArticle)
//     /* add class 'active' to the correct article */
//   }

//   const links = document.querySelectorAll('.titles a');
//   console.log(links)

//   for(let link of links){
//     link.addEventListener('click', titleClickHandler);
// }
//     const optArticleSelector = '.post',
//     optTitleSelector = '.post-title',
//     optTitleListSelector = '.titles';

// function generateTitleLinks(){
//     /* remove contents of titleList */
//     const titleList = document.querySelector(optTitleListSelector);
//     titleList.innerHTML = '';
//   /* for each article */
//     const articles = document.querySelectorAll(optArticleSelector);
//     for(let article of articles){
//     /* get the article id */
//     const articleId = article.getAttribute('id');
//     /* find the title element */
//     const articleTitle = article.querySelector(optTitleSelector).innerHTML;
//     /* get the title from the title element */

//     /* create HTML of the link */
//     const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
//     /* insert link into titleList */
//     titleList.innerHTML += linkHTML;
// }
// titleList.innerHTML += linkHTML;
// }
// generateTitleLinks();

'use strict';

const titleClickHandler = function (event) {
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');

    /* remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');
    for (let activeLink of activeLinks) {
        activeLink.classList.remove('active');
    }

    /* add class 'active' to the clicked link */
    clickedElement.classList.add('active');
    console.log('clickedElement:', clickedElement);

    /* remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts .active');
    for (let activeArticle of activeArticles) {
        activeArticle.classList.remove('active');
    }

    /* get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');
    console.log(articleSelector);

    /* find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);
    targetArticle.classList.add('active');
    console.log(targetArticle);
    /* add class 'active' to the correct article */

};

const optArticleSelector = '.post';
const optTitleSelector = '.post-title';
const optTitleListSelector = '.titles';
const optArticleTagsSelector = '.post-tags .list';

    function generateTitleLinks() {
        const titleList = document.querySelector(optTitleListSelector);
        titleList.innerHTML = '';
        const articles = document.querySelectorAll(optArticleSelector)
        for (let article of articles) {
            const articleId = article.getAttribute('id');
            const articleTitle = article.querySelector(optTitleSelector).innerHTML;
            const linkHTML = `<li><a href="#${articleId}"><span>${articleTitle}</span></a></li>`;
            titleList.innerHTML += linkHTML;
        }
        const links = document.querySelectorAll('.titles a');
        for (let link of links) {
            link.addEventListener('click', titleClickHandler);
        }
    }

    generateTitleLinks();

    function generateTags(){
    /* find all articles */
    const articles = document.querySelectorAll(optArticleTagsSelector);
    /* START LOOP: for every article: */
    for (let article of articles){
        /* find tags wrapper */
        const tagsWrapper = article.querySelector(optArticleTagsSelector);
        /* make html variable with empty string */
        let html = '';
        /* get tags   from data-tags attribute */
        const articleTags = article.getAttribute('data-tags');
        /* split tags into array */
        const articleTagsArray = articleTags.split(' ');
        /* START LOOP: for each tag */
        for(let tag of articleTagsArray){
        /* generate HTML of the link */
        const linkHtml = `<li><a href="#tag-${tag}">${tag}</a></li>`;
        console.log('siema,  siema '+linkHtml)
        /* add generated code to html variable */
        html += linkHtml;
      /* END LOOP: for each tag */
      }
      /* insert HTML of all the links into the tags wrapper */
      tagsWrapper.innerHTML = html;
    /* END LOOP: for every article: */
  }
    }
  generateTags();

  function tagClickHandler(event){
    /* prevent default action for this event */

    /* make new constant named "clickedElement" and give it the value of "this" */

    /* make a new constant "href" and read the attribute "href" of the clicked element */

    /* make a new constant "tag" and extract tag from the "href" constant */

    /* find all tag links with class active */

    /* START LOOP: for each active tag link */

      /* remove class active */

    /* END LOOP: for each active tag link */

    /* find all tag links with "href" attribute equal to the "href" constant */

    /* START LOOP: for each found tag link */

      /* add class active */

    /* END LOOP: for each found tag link */

    /* execute function "generateTitleLinks" with article selector as argument */
  }

  function addClickListenersToTags(){
    /* find all links to tags */

    /* START LOOP: for each link */

      /* add tagClickHandler as event listener for that link */

    /* END LOOP: for each link */
  }

  addClickListenersToTags();