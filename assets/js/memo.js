// Base array that will hold objects
const list_items = [
  {info: 'Master Sergeant (MSG) Retired Farley Darbasie - 15 Jul 1951 - 11 Aug 2024'},
  {info: 'Sergeant First Class (Retired) Nededog, Daniel J. - 17 Oct 1975 - 10 Aug 2024'},
  {info: 'Colonel (Retired) Piasta, Joseph (Joe) A. II - 11 Jul 1951 - 06 Jul 2024'},
  {info: 'Colonel (Retired) Gilligan, Francis A - 06 Jul 2024'},
  {info: 'Colonel (Retired) Deberry, Thomas Patrick - 26 May 1943 - 01 Jul 2024'},
  {info: 'Mrs. Richards, Kathryn "Kate" L. - 22 Jul 1978 - 25 May 2024'},
  {info: 'Lieutenant Colonel Maxwell, Phillip (Phil) - 16 Oct 1977 - 01 May 2024'},
  {info: 'Sergeant First Class Smith, Matthew L - 08 Jan 1987 - 22 Apr 2024'},
  {info: 'Staff Sergeant (Retired) Moore, Jaime A. - 06 Aug 1983 - 19 Apr 2024'},
  {info: 'Sergeant Durkee, Victor E. - 28 Jul 1996 - 12 Apr 2024'},
  
];



// list DOM element
const list_element = document.querySelector('#list');
const pagination_element = document.querySelector('#pagination');


  

// declare variables for current page and total number of cards
let current_page = 1;
let rows = 5;

// Function to display items on page
function DisplayList(items, wrapper, rows_per_page, page) {
    wrapper.innerHTML = "";
    page--;

    let start = rows_per_page * page;
    let end = start + rows_per_page;
    let paginatedItems = items.slice(start, end);

    for (let i = 0; i < paginatedItems.length; i++) {
        let item = paginatedItems[i];
        
        // create the p tags
        let post_content = document.createElement('div')
        let para = document.createElement('p');
        post_content.appendChild(para)
        post_content.innerText = `${item.info}`
     
        wrapper.appendChild(post_content)
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


 


DisplayList(list_items, list_element, rows, current_page)
setupPagination(list_items, pagination_element, rows);