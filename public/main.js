const menuToggle = document.querySelector('#menu-toggle1');
const menu = document.querySelector('#menu1');


menuToggle.addEventListener('click', () => {
menu.classList.toggle('active');
});

const toggleModal = () => {
    document.querySelector('.modal')
    .classList.toggle('modal--hidden');
};

document.querySelector('.enquiryForm')
  .addEventListener('click', toggleModal);
document.querySelector('.enquiryForm1')
  .addEventListener('click', toggleModal);
document.querySelector('.enquiryForm2')
  .addEventListener('click', toggleModal);
document.querySelector('.enquiryForm3')
  .addEventListener('click', toggleModal);

document.querySelector('#learn-more')
    .addEventListener('submit', (event) => {
        event.preventDefault();
        toggleModal();
    });

document.querySelector('.modal-close-bar span')
    .addEventListener('click' ,toggleModal);

    const video = document.querySelector('#videojs');

    video.addEventListener('mouseover', () => {
      video.play();
    });
    
    video.addEventListener('mouseout', () => {
      video.pause();
      video.currentTime = 0;
    });


    const video2 = document.querySelector('#videojs2');

    video2.addEventListener('mouseover', () => {
      video2.play();
    });
    
    video2.addEventListener('mouseout', () => {
      video2.pause();
      video2.currentTime = 0;
    });


    const video3 = document.querySelector('#videojs5');

    video3.addEventListener('mouseover', () => {
      video3.play();
    });
    
    video3.addEventListener('mouseout', () => {
      video3.pause();
      video3.currentTime = 0;
    });


    const video4 = document.querySelector('#videojs4');

    video4.addEventListener('mouseover', () => {
      video4.play();
    });
    
    video4.addEventListener('mouseout', () => {
      video4.pause();
      video4.currentTime = 0;
    });

    const video5 = document.querySelector('#videojs3');

    video5.addEventListener('mouseover', () => {
      video5.play();
    });
    
    video5.addEventListener('mouseout', () => {
      video5.pause();
      video5.currentTime = 0;
    });


    const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const button = item.querySelector('.accordion-button');
  const content = item.querySelector('.accordion-content');

  button.addEventListener('click', () => {
    // Toggle active class to expand/collapse accordion item
    item.classList.toggle('active');

    // If the accordion item is active, expand the content; otherwise, collapse it
    if (item.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = '0';
    }
  });
});


const accordionItems1 = document.querySelectorAll('.accordion-item1');

accordionItems1.forEach(item => {
  const button1 = item.querySelector('.accordion-button1');
  const content1 = item.querySelector('.accordion-content1');

  button1.addEventListener('click', () => {
    // Toggle active class to expand/collapse accordion item
    item.classList.toggle('active');

    // If the accordion item is active, expand the content; otherwise, collapse it
    if (item.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = '0';
    }
  });
});