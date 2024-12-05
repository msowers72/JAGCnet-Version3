// Base array that will hold objects
const list_items = [
  {info: 'Master Sergeant (MSG) Retired Farley Darbasie - 15 Jul 1951 - 11 Aug 2024', memo: 'memo-one.html'},
  {info: 'Sergeant First Class (Retired) Nededog, Daniel J. - 17 Oct 1975 - 10 Aug 2024', memo: 'memo-two.html'},
  {info: 'Colonel (Retired) Piasta, Joseph (Joe) A. II - 11 Jul 1951 - 06 Jul 2024', memo: 'memo-three.html'},
  {info: 'Colonel (Retired) Gilligan, Francis A - 06 Jul 2024',  memo: 'memo-four.html'},
  {info: 'Colonel (Retired) Deberry, Thomas Patrick - 26 May 1943 - 01 Jul 2024',  memo: 'memo-five.html' },
  {info: 'Mrs. Richards, Kathryn "Kate" L. - 22 Jul 1978 - 25 May 2024',  memo: 'memo-six.html'},
  {info: 'Lieutenant Colonel Maxwell, Phillip (Phil) - 16 Oct 1977 - 01 May 2024',  memo: 'memo-seven.html'},
  {info: 'Sergeant First Class Smith, Matthew L - 08 Jan 1987 - 22 Apr 2024',  memo: 'memo-eight.html'},
  {info: 'Staff Sergeant (Retired) Moore, Jaime A. - 06 Aug 1983 - 19 Apr 2024',  memo: 'memo-nine.html'},
  {info: 'Sergeant Durkee, Victor E. - 28 Jul 1996 - 12 Apr 2024',  memo: 'memo-ten.html'},
  {info: 'Colonel (Retired) Radosh, Burnett H. - 26 Mar 1935 - 26 Mar 2024',  memo: 'memo-eleven.html'},
  {info: 'Captain Christian, Chad R. - 26 Jan 1987 - 25 Mar 2024',  memo: 'memo-tweleve.html'},
  {info: 'Specialist Lopez, Kristal - 18 Sep 2004 - 19 Mar 2024',  memo: 'memo-thirteen.html'},
  {info: "Colonel (Retired), O'Hare, Patrick D. - 07 Dec 1952 - 27 Feb 2024",  memo: 'memo-fourteen.html'},
  {info: 'Colonel (Retired) Lorenz, Theodore "Ted" - 21 Feb 2024',  memo: 'memo-fifteen.html'},
  {info: "Staff Sergeant, Benjamin, Brandon T. - 03 Feb 1994 - 17 Feb 2024",  memo: 'memo-sixteen.html'},
  {info: "Colonel (Retired), Cullen, Peter M. - 08 Nov 1959 - 05 Jan 2024",  memo: 'memo-eightteen.html'},
  {info: "Colonel (Retired), Cornelius, Roger W. - 12 Sep 1950 - 29 Nov 2023",  memo: 'memo-nineteen.html'},
  {info: "Colonel (Retired), Schempf, Bryan H. - 03 Apr 1947 - 14 Oct 2023",  memo: 'memo-twenty.html'},
  {info: "Lieutenant Colonel, Myers, Stanley L. - 07 Jul 1976 - 27 Sep 2023",  memo: 'memo-twentyone.html'},
  {info: "Colonel (Retired), McMakin, Susan W - 10 Sep 2023"},
  {info: "Attorney Advisor (Contracts and Fiscal Law), Office of the Staff Judge"},
  {info: "Advocate, 3d Infantry Division, Eaker, Jamie D - 21 Jan 1958 - 15 Aug 2023"},
  {info: "Deputy Director, Office of Soldiers’ Counsel, McGillivray, James C. - 14 Sep 1960 - 02 Aug 2023"},
  {info: "Senior Civilian, Office of the Staff Judge Advocate, 2d Infantry Division, Chon, Yong Mi - 31 Jul 2023"},
  {info: "Major (Retired), Seamone, Evan Ryan - 03 Jan 1976 - 25 Jul 2023"},
  {info: "Staff Sergeant (Retired), Gould, Cassandra - 07 Feb 1961 - 11 Jul 2023"},
  {info: "Colonel (Retired), Kile, Daniel A. - 31 Dec 1937 - 11 Jul 2023"},
  {info: "Colonel (Retired), Exnicios, John Adams - 11 May 1947 - 06 Jul 2023"},
  {info: "Colonel (Ret), Febbo, Anthony Thomas - 13 Oct 1963 - 03 Jun 2023"},
  { info: "Major (Retired), Richardson, Mark Patrick - 27 Jun 1962 - 02 Jun 2023" },
  {info:"Staff Sergeant, Rinvelt, Anthony E. - 14 Oct 1996 - 30 May 2023"},
  {info:"Colonel (Retired), Machado, Donald (Don) C. Sr. - 10 Sep 1928 - 20 May 2023"},
  {info:"Colonel (Ret), Ley, John P. Jr. - 17 Mar 1951 - 15 May 2023"},
  {info:"Major General (Retired), Murray, Robert E. - 28 Feb 1937 - 14 Apr 2023"},
  {info:"Master Sergeant, Hanks, Roland D. - 24 Sep 1969 - 09 Apr 2023"},
  {info:"Colonel (Retired), Scheff, Richard P. - 28 Jul 1935 - 02 Mar 2023"},
  {info:"McDaniel, Deborah A. - 27 Oct 1956 - 28 Feb 2023"},
  {info:"Major General (Retired), Hopkins, Alben N. Sr. - 14 Feb 1941 - 12 Feb 2023"},
  {info:"LTC Litka, Timothy D - 04 Jan 1971 - 19 Nov 2022"},
  { info: "MAJ (Retired) Croswell, David Lee - 10 Oct 1971 - 19 Oct 2022" },
  {info: "Staff Seargeant Beck, Travis J. - 26 May 1982 - 10 Oct 2022"},
  {info: "SGM (Retired), Magers, Larry Clifton - 22 Dec 1948 - 30 Aug 2022"},
  {info: "CPT Volkert, John V. Jr - 18 Dec 1982 - 26 Jul 2022"},
  {info: "CPT Escapa, Ramón M. - 24 Dec 1979 - 19 Jun 2022"},
  { info: "Colonel (Retired) Weedman, Walter S. - 13 Jun 1963 - 01 Jun 2022" },
  {info: "SFC Skeete, Brent E. - 18 Jun 1982 - 04 May 2022"},
  {info: "Colonel Lasseter, Earle F. - 26 Dec 1933 - 29 Apr 2022"},
  {info: "Colonel (Retired) Brannen, Barney L. Jr. - 15 Aug 1933 - 21 Apr 2022"},
  {info: "SSG Marshall, Cameron C. - 13 May 1994 - 17 Apr 2022"},
  {info: "MAJ Kerrane, Barbara - 05 Apr 2022"},
  {info: "Command Sergeant Major (Retired) Sullivan, Robert (Bob) J. - 19 Jan 1939 - 28 Mar 2022"},
  {info: "CW5 Sumner, Criag G. - 08 Nov 1961 - 06 Feb 2022"},
  {info: "First Sergeant (Retired), Robles, Samuel - 08 Feb 1983 - 25 Dec 2021"},
  { info: "Masten, Heather A. - 27 Dec 1964 - 02 Nov 2021" },
  { info: 'Sergeant First Class (Retired), Walker, Richard "Pops" - 13 Jun 1951 - 29 Oct 2021'},
  { info: "McAnich, Robyn M - 26 Oct 2021"},
  { info: "MAJ Van De Water, Kyle - 07 Sep 2021"},
  { info: "CW4 Forman, Jeffrey S. - 09 Aug 2021"},
  { info: "Lieutenant Colonel (Retired) Garcia, Peter A. - 03 Aug 2021"},
  { info: "Colonel (Retired) McCoy, Toby D. - 25 Oct 1970 - 31 Jul 2021" },
  {info: "Colonel (Retired) Rob, Edith M. “Edyie” - 18 Nov 1959 - 02 Jul 2021"},
  {info: "Col (Retired) Hays Parks, William - 11 May 2021"},
  {info: "Ms. Johnson, Denise - 24 Jan 2021"},
  {info: "Brigadier General (Retired) Bednar, Richard J. - 30 Oct 1931 - 20 Dec 2020"},
  {info: "SGM (Retired) Nolan, John H. - 06 Jul 1935 - 13 Nov 2020"},
  {info: "Mr. Cieslewicz, Stanley J. - 08 Dec 1956 - 11 Nov 2020"},
  {info: "Mr. Roger (Ray) Lane - 03 Jun 1955 - 21 Oct 2020"},
  {info: 'COL (Retired) Poydasheff, Robert "Bob" Stephen, Sr. - 24 Sep 2020'},
  {info: "MSG Tolliver, Brian K. - 04 Jul 1974 - 17 Aug 2020"},
  {info: "COL (Retired) Finn, Michael “Mike” P. - 12 Apr 1954 - 05 Jul 2020"},
  {info: "Mrs. June Chung Fugh - 02 Jun 1937 - 18 Jun 2020"},
  {info: "CW4 (Retired) Kelly, Kevin R. - 17 May 1953 - 17 Apr 2020"},
  {info: "Chief Warrant Officer Four (Retired) Kelly, Kevin - 17 May 1953 - 17 Apr 2020"},
  {info: "Mr. Bahamonde, George - 31 Mar 2020"},
  { info: "Brigadier General (Retired) Sherman, William F. (Bill) - 11 Mar 2020" },
  {info: "Sergeant Major (Retired) Metcalf, Howard - 25 Nov 2019"},
  {info: "MAJ (Retired) Banks, Brian - 13 Sep 2019"},
  {info: "SGT Cherry, Charles - 25 Jun 1991 - 04 Sep 2019"},
  {info: "LTC (Retired) Lewis, Robert M. (Mike) - 23 Mar 1952 - 14 Aug 2019"},
  {info: "COL (Retired) Douglass, John Jay - 09 Mar 1922 - 22 Dec 2018"},
  {info: "BG (Retired) Finnegan, Patrick - 20 Sep 1949 - 03 Jul 2018"},
  {info: 'CPT Ladd, Charles D. "Chip" - 15 Oct 1982 - 02 May 2018'},
  {info: "LTC Thoman, Jay - 24 Apr 1974 - 30 Apr 2018"},
  {info: "MAJ (Retired) Fontenot, Russell J - 21 Mar 2018"},
  { info: 'LTC (Retired) Eckman, Christina "Chrissy" - 07 Mar 2018' },
  {info: "Lieutenant Colonel, MacDonald ,Sally - 09 Aug 1975 - 11 Sep 2017"},
  {info: "LTC Fox, Gerald R. - 04 Sep 2017"},
  {info: "LTC (Retired) McWright, Michael - 14 Nov 1963 - 03 Sep 2017"},
  {info: "MAJ Evans, Christopher R. - 28 Mar 1977 - 14 Feb 2017"},
  { info: "MAJ (Retired) Johnson, Carla T. - 09 Jan 2017" },
  {info: "CW3 (Retired) Carl Rickert - 24 Sep 2016"},
  {info: "Staff Sergeant Martinez, Sabrina K. - 27 Aug 2016"},
  {info: "Major McNorrill, Barbara A. - 30 Mar 2016"},
  {info: "Mr. Martensen, John K. - 23 Mar 2016"},
  {info: "Master Sergeant Dawber, Shirley J - 19 Feb 2016"},
  {info: "Colonel (Retired) Barnett, Patrick A - 18 Sep 2015"},
  {info: "Mrs. Finneran, Rosa - 15 Sep 2015"},
  {info: "Sergeant Major (Retired) Todd, Jeffrey A - 16 Oct 1954 - 27 Jun 2015"},
  {info: "CPT Grant, Jim Bruce, Jr. - 20 May 2015"},
  {info: "Major General (Retired) Persons, Wilton B, Jr. - 02 Dec 1923 - 03 Apr 2015"},
  {info: "Colonel (Ret.) Fulton Jr., William S - 14 Sep 1925 - 14 Mar 2015"},
  { info: "Dr. Burch, Robert H., Jr. - 30 Jan 2015" },
  {info: "COL Cotell, Robert J. - 06 Jan 2015"},
  {info: "LTC (Ret) Hall, Joseph J. - 05 Nov 2014"},
  {info: "LTC Melnick, Robert R - 19 Oct 2014"},
  {info: "COL (Ret) Baker, John - 05 Jun 1918 - 02 Aug 2014"},
  {info: "CW4 (Ret) Gordon, Aubrey C. (“Butch”) - 11 Apr 2014"},
  {info: "CMSgt (Ret) Ivins, James (Jim) J. - 05 Aug 1952 - 05 Apr 2014"},
  {info: "LTC (Ret) Dunn, Robert E - 25 Feb 2014"},
  {info: "Ms. Wallace, Priscilla T - 19 Jan 2014"},
  {info: "SSG Serrato, Hector G - 24 Dec 2013"},
  {info: "LTC (Retired) Blackburn, Douglas C - 07 Mar 1950 - 29 Oct 2013"},
  {info: "SFC DeVoile, Jamie - 26 Sep 2013"},
  {info: "Gruetzmacher, Heidi - 22 Sep 2013"},
  {info: "SSG Bush, Patrick B. - 07 Sep 2013"},
  {info: "LTC Mangialardi, John - 04 Sep 2013"},
  {info: "MAJ (Ret) Mulderig, Robert J - 21 Aug 2013"},
  {info: "CPT Eros, Joseph H - 24 Jun 2013"},
  {info: "BG De Fiori, Victor A. - 08 Jun 2013"},
  {info: "MSG Breeding, Alicia - 04 May 2013"},
  {info: "Mr. Nyce, Peter Q., Jr. - 27 Apr 2013"},
  {info: "COL Kennedy, Reid W - 27 Nov 1920 - 04 Apr 2013"},
  {info: "Ms. Graham, Joan - 30 Nov 2012"},
  {info: "CW3 Smith, Raymond J. - 28 Jun 1933 - 26 Nov 2012"},
  {info: "Mr. Rouse, Joseph H. - 28 Jun 1919 - 22 Nov 2012"},
  {info: "LTC Tackaberry, Karin G. - 30 Oct 2012"},
  {info: "SFC Reynolds, Alison - 14 Sep 2012"},
  {info: "SFC Barnett, Cherie M - 17 Aug 2012"},
  {info: "Colonel Finkelstein, Zane E - 24 Jun 1929 - 15 Aug 2012"},
  {info: "Lieutenant Colonel (Retired) Yustas, Vincent P - 30 Jul 2012"},
  {info: "Lieutenant Colonel (Retired) Ziegler, Edward R. - 26 Jun 2012"},
  {info: "Mr. Hauck, Daniel A. - 23 May 2012"},
  {info: "Brigadier General Tenhet, Joseph N. Jr. - 21 May 2012"},
  { info: "Captain Vincent, Michael A. - 16 May 2012" },
  { info: "Sergeant Nelson, Natasha J. - 06 May 2012" },
  {info: "Colonel (Retired) Durbin, Paul - 31 Mar 2012"},
  {info: "Mr. Gullatt, Wayne - 25 Jan 2012"},
  {info: "Sergeant First Class Robins, Leonard H. - 28 Dec 2011"},
  {info: "Lieutenant Colonel (Retired) Stonerock, Jeffrey A. - 13 Oct 2011"},
  {info: "Colonel (Retired) McNamee, Alfred A. - 10 Oct 2011"},
  {info: "Lieutenant Colonel (Retired) Butters, Roger A. - 22 Sep 2011"},
  {info: "Lieutenant Colonel (Retired) Bettwy, Andrew W. - 18 Sep 2011"},
  {info: "Staff Sergeant (Retired) Duckett, James E. - 12 Sep 2011"},
  {info: "Sergeant First Class (Retired) Offer, Velda C. - 07 Sep 2011"},
  {info: "Major Dennehy, James W. - 24 Aug 2011"},
  {info: "Colonel (Retired) Lampton, Dunn - 17 Aug 2011"},
  {info: "Sergeant First Class (Retired) Stange, Derald M. - 09 Aug 2011"},
  {info: "Ms. Williams, Cynthia - 07 Aug 2011"},
  {info: "Ms. Haas, Gaby - 15 Jul 2011"},
  {info: "Lieutenant Colonel Carroll, John J. III - 25 May 2011"},
];



// list DOM element
const list_element = document.querySelector('#list');
const pagination_element = document.querySelector('#pagination');


  

// declare variables for current page and total number of cards
let current_page = 1;
let rows = 20;

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
        let post_content = document.createElement('p')
      let para = document.createElement('a');
        para.setAttribute('target', '_blank')
        para.setAttribute('href', `${item.memo}`);
        post_content.appendChild(para)
        para.innerText = `${item.info}`
     
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