const bar = document.querySelector('.menu-bar');
function onclickMenu() {
  document.querySelector('.menu').classList.toggle('change');
  document.querySelector('.menu-pop').classList.toggle('change-pop');
  document.querySelector('.menuList').classList.toggle('change');
}

bar.addEventListener('click', onclickMenu);

const projects1 = [
  {
    name1: [
      'Alan Hicks',
      'Andreas Perotti ',
      'Bogdan GASPAR',
      'Alex Kehoe',
      'Dr Dennis Majoe',
      'James Wardlow',
      'Feature Speakers',
    ],
    description1: [
      "CTO of Manna Drone Delivery. Alan leads Manna's technology function and team, and sets the direction and future vision of the platform.",
      'Chief Marketing Officer  -  EHang ',
      'Modularity in drone development',
      'Mitigating the Threat Posed by Hostile and Nuisance Drones',
      'Intelligent Drone Ports for Autonomous Cargo Handling and Drone Garaging',
      'Using drones successfully for Inspection: The need for a high-quality sensor',
    ],

    description2: [
      'He has built and led distributed teams of engineers working on cutting edge technology systems. In 2007 he joined ',
      "The Nasdaq listed company is the world's leading autonomous aerial vehicle (AAV) technology platform company. EHang provides customers in various industries ",
      'Bogdan was active most of his life in the IT part of the automotive sector: from IT Security to IT Design and Management.',
      'Alex is a former Royal Navy submariner and now the CEO at VIZGARD, a UK-based SME providing AI-powered capabilities for drones ',
      'Dr Majoe has been working in advanced robotics and medical systems for over 30 years. He has over 40 publications in medical and robotic systems ',
      'James Wardlow is an area sales manager for Phase One. Coming from a background as an Aerial Survey operator James understands the importance of a quality sensor for aerial applications.',
    ],
    Image1: [
      'img/AlanHicks.jpg',
      'img/AndreasPerotti.jpg',
      'img/BogdanGASPAR.jpg',
      'img/AlexKehoe.jpg',
      'img/DrDennisMajoe.jpg',
      'img/JamesWardlow.jpg',
      'img/arrow2.png',
    ],
  },
];

const div1 = document.getElementById('speakers');
div1.innerHTML = projects1
  .map(
    (project1) => `<section class="projects1">
    <h2 class="intro2">${project1.name1[6]}</h2>
<hr class="hr2">
    <ul>
   
    <li>
      <div class="meta">
      <a href="#" class="imgs"><img src="${project1.Image1[0]}" alt="alan"></a>
      <h3 class="name">${project1.name1[0]}</h3>
        <p class="p1">${project1.description1[0]}</p>
        <hr class="hr3" />
        <p class="p2">${project1.description2[0]}</p>
      </div></li>
      <li>
      <div class="meta1">
      <a href="#" class="imgs"><img src="${project1.Image1[1]}" alt="Andreas"></a>  
      <h3 class="name">${project1.name1[1]}</h3>
        <p class="p1">${project1.description1[1]}</p>
        <hr class="hr3" />
        <p class="p2">${project1.description2[1]}</p>
      </div></li>
      <li>
      <div class="meta2">
      <a href="#" class="imgs"><img src="${project1.Image1[2]}" alt="Bogdan"></a>   
      <h3 class="name">${project1.name1[2]}</h3>
        <p class="p1">${project1.description1[2]}</p>
        <hr class="hr3" />
        <p class="p2">${project1.description2[2]}</p>
      </div></li>
      <li>
      
      <div class="meta3">
      <a href="#" class="imgs"><img src="${project1.Image1[3]}" alt="Alex"></a>   
      <h3 class="name">${project1.name1[3]}</h3>
        <p class="p1">${project1.description1[3]}</p>
        <hr class="hr3" />
        <p class="p2">${project1.description2[3]}</p>
      </div></li>
      <li>
      <div class="meta4">
      <a href="#" class="imgs"><img src="${project1.Image1[4]}" alt="DrDennis"></a>  
      <h3 class="name">${project1.name1[4]}</h3>
        <p class="p1">${project1.description1[4]}</p>
        <hr class="hr3" />
        <p class="p2">${project1.description2[4]}</p>
      </div></li>
      <li>
      <div class="meta5">
      <a href="#" class="imgs"><img src="${project1.Image1[5]}" alt="James"></a>  
      <h3 class="name">${project1.name1[5]}</h3>
        <p class="p1">${project1.description1[5]}</p>
        <hr class="hr3" />
        <p class="p2">${project1.description2[5]}</p>
      </div></li>
      <li>
      <button type="button" class="load-more effect">
      MORE <img src="${project1.Image1[6]}" alt="arrow">
    </button></li>
    </ul>
    </section>`,
  )
  .join('');
