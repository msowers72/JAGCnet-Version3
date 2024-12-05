// Base array that will hold objects
const list_items = [
  { date: "November 2024", photo_url: "./assets/img/homepage-ceremony_lg.jpg", eventsDate: 'Up Coming Events 15-Nov-2024', paraText: 'Recipient of the Inaugural Chief Warrant Officer Three (CW3) Melanie D. Sellars Servant Leadership Award .', link: './nov-events.html'},
  { date: "November 2024", photo_url: "./assets/img/homepage-planning_lg.jpg", eventsDate: 'Up Coming Events 21-Nov-2024', paraText: "Please join The Judge Advocate General's Legal Center and School for the NCOA SLC 001-25 & ALC 001-25 Graduation.", link: './nov2-events.html' },
  { date: "January 2025", photo_url: "./assets/img/GoArmyJAG-Intern-04-Interns at PT.jpg", eventsDate: 'Up Coming Events 13-Jan-2025', paraText: 'General: The 22nd Ethics Counselor Course is scheduled for Monday, 13 January 2025 to Friday, 17 January 2025.', link: './jan-events.html' },
  { date: "January 2025", photo_url: "./assets/img/GoArmyJAG-FLEP-Eligibility-MAJ-Ferrell-MAJ-IG.jpg", eventsDate: 'Up Coming Events 22-Jan-2025', paraText: 'The 14th Emergent Topics in International & Operational Law (ETIOL) Course', link: './jan2-events.html'},
  { date: "January 2025", photo_url: "./assets/img/GoArmyJAG-eligibility-banner.jpg", eventsDate: 'Up Coming Events 27-Jan-2025', paraText: 'The 3rd resident Judge Advocate Tactical Staff Officer Course (JATSOC).', link: './jan3-events.html' },
  
  
];


// list DOM element
const list_element = document.querySelector('#list');
const pagination_element = document.querySelector('#pagination');

 let prevButton = document.createElement('li');
  let prev_a_elm = document.createElement('a');
  let prev_i_elm = document.createElement('i');
  prev_i_elm.classList.add('bi');
  prev_i_elm.classList.add('bi-chevron-left')
  prev_a_elm.appendChild(prev_i_elm);
prevButton.appendChild(prev_a_elm);
  
let nextButton = document.createElement('li');
  let next_a_elm = document.createElement('a');
  let next_i_elm = document.createElement('i');
  next_i_elm.classList.add('bi');
  next_i_elm.classList.add('bi-chevron-right')
  next_a_elm.appendChild(next_i_elm);
  nextButton.appendChild(next_a_elm);
  

// declare variables for current page and total number of cards
let current_page = 1;
let rows = 3;

// Function to display items on page
function DisplayList(items, wrapper, rows_per_page, page) {
    wrapper.innerHTML = "";
    page--;

    let start = rows_per_page * page;
    let end = start + rows_per_page;
    let paginatedItems = items.slice(start, end);

    for (let i = 0; i < paginatedItems.length; i++) {
        let item = paginatedItems[i];
        
        // create 1st interal div that is inside the container
        let card_element = document.createElement('div');
        card_element.classList.add('col-lg-4');

        // add the article element to the page
        let article = document.createElement('article');
        article.classList.add('position-relative');
        article.classList.add('h-100');
        card_element.appendChild(article)

        // create the post-img div
        let post_img = document.createElement('div');
        post_img.classList.add('post-img');
        post_img.classList.add('position-relative');
        post_img.classList.add('overflow-hidden');
        article.appendChild(post_img)

        // add img to post-img div
        let img = document.createElement('img');
        img.classList.add('img-fluid');
        img.src = `${item.photo_url}`
        post_img.appendChild(img)

        // add span under the imge
        let span = document.createElement('span');
        span.classList.add('post-date');
        post_img.appendChild(span)
        span.innerText = `${item.date}`

        // add the post content to the card
        let post_content = document.createElement('div');
        post_content.classList.add('post-content');
        post_content.classList.add('d-flex');
        post_content.classList.add('flex-column');
        article.appendChild(post_content);

        // add the h3 the post content div
        let post_title = document.createElement('h3');
        post_title.classList.add('post-title');
        post_content.appendChild(post_title);
        post_title.innerText = "Click to view events page"
      
        // add the div that holds upcoming events description
        let upcomming_events = document.createElement('div');
        upcomming_events.classList.add('meta');
        upcomming_events.classList.add('d-flex');
        upcomming_events.classList.add('align-items-center');
        post_content.appendChild(upcomming_events);
      
        // add the inner div for the upcoming events description
        let upcomming_events_inner = document.createElement('div');
        upcomming_events_inner.classList.add('d-flex');
        upcomming_events_inner.classList.add('align-items-center');
        upcomming_events.appendChild(upcomming_events_inner);
      
      // add the i element, span element, p, hr and href
      let i_element = document.createElement('i');
      i_element.classList.add('bi');
      i_element.classList.add('bi-calendar');
      upcomming_events_inner.appendChild(i_element);

      let upcomming_events_span = document.createElement('span');
      upcomming_events_span.classList.add('ps-2');
      upcomming_events_inner.appendChild(upcomming_events_span);
      upcomming_events_span.innerText = `${item.eventsDate}`

      let para = document.createElement('p');
      post_content.appendChild(para)
      para.innerText = `${item.paraText}`

      let line = document.createElement('hr');
      post_content.appendChild(line);

      let a = document.createElement('a');
      let linkText = document.createElement("span");
      a.appendChild(linkText)
      linkText.innerText = `Learn More`
      a.classList.add('readmore');
      a.classList.add('stretched-link');
      a.setAttribute("target", "blank")
      a.href = `${item.link}`
      let new_i_elem = document.createElement('i');
      new_i_elem.classList.add('bi');
      new_i_elem.classList.add('bi-arrow-right');
      a.appendChild(new_i_elem);
      
      post_content.appendChild(a)

      wrapper.appendChild(card_element)
    };

};

function setupPagination(items, wrapper, rows_per_page) { // array, div#pagination, 5
   wrapper.innerHTML = "";

  let page_count = Math.ceil(items.length / rows_per_page); // 5
  
//  wrapper.appendChild(prevButton)
  
   for(let i = 1; i < page_count + 1 ; i++) {
    let btn = PaginationButton(i, items)
    wrapper.appendChild(btn)
  };
  
  
  
  // wrapper.appendChild(nextButton)
  
  
};

// Pagination Button
function PaginationButton(page, items) {
  let button = document.createElement('li');
  let a_elem = document.createElement('a');
  button.appendChild(a_elem)
    a_elem.innerText = page;  

    if(current_page === page) {
        a_elem.classList.add('active');
    };
  
  button.addEventListener('click', () => {
        
    current_page = page
   
    DisplayList(items, list_element, rows, current_page);

    let current_btn = document.querySelector('.pagenumbers a.active')
    current_btn.classList.remove('active');
    a_elem.classList.add('active');
  });

  

 
   return button;

};


 


// DisplayList(list_items, list_element, rows, current_page)
// setupPagination(list_items, pagination_element, rows);