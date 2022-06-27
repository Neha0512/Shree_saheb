const reviews = [{
    id: 1,
    name: "Mrs. Manju",
    job: "Housewife",
    img:"https://i.postimg.cc/52wt80Rz/Whats-App-Image-2022-06-27-at-10-15-34-PM.jpg",
    text: "Trying Shree Saheb heena has not only provided me with dark stain on hands but also left soft-feels after the colour started to go-off. "
  },
  {
    id: 7,
    name: "Ashok Bhattacharya",
    job: "Businessman",
    img: "https://i.postimg.cc/cL8hP6tZ/img1-3.jpg",
    text: "Shree Saheb has become a trending brand among the market."
  },
  {
    id: 3,
    name: "Mr. Bhagirath ",
    job: "Businessman",
    img: "https://i.postimg.cc/ZKWxy0c3/img1-2.jpg",
    text: "Customers have changed their preference from the trending heena brands in the market. "
  }, 

  {
    id: 4,
    name: "Mr. Kailash",
    job: "Teacher",
    img: "https://i.postimg.cc/6qGjTDp9/Whats-App-Image-2022-06-27-at-10-11-58-PM.jpg",
    text: "I have known Rakesh as not just an amazing businessman but also a good human by heart."

  }, 
 /* {
    id: 5,
    name: "Miss Neha",
    job: "अहं ब्रह्मास्मि",
    img: "https://i.postimg.cc/nhZXRB72/Whats-App-Image-2022-06-27-at-10-16-44-PM.jpg",
    text: "I have known Rakesh as not just an amazing businessman but also a good human by heart."

  }, */
  {
    id: 5,
    name: "Miss Riya",
    job: "Student",
    img: "https://i.postimg.cc/j5hgfzz1/Whats-App-Image-2022-06-27-at-10-32-07-PM.jpg",
    text: "I was looking for heena which is not harsh on hands and stays for atleast three days. Thus, Shree saheb provided me with these qualities."

  }, 
  {
    id: 6,
    name: "Mr. Shubham ",
    job: "Marketing Manager",
    img: "https://i.postimg.cc/cLYSPb7G/Whats-App-Image-2022-06-27-at-10-06-16-PM.jpg",
    text: "I am impressed by the ways Rakesh has put in efforts for the branding and marketing of the henna."

  }, 
  {
    id: 2,
    name: "Mrs. Jyoti",
    job: "Housewife",
    img: "https://i.postimg.cc/YqrJcNt7/img1-4.jpg",
    text: "Getting such a good henna after a long time!"

  }, 
  ];
  
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  
  let currentItem = 0;
  
  // load initial item
  window.addEventListener("DOMContentLoaded", () => {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
  }
  
  // show next person
  nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
  });
  
  // show prev person
  prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
  });
  