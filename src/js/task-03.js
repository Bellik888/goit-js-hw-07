const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('#gallery');
const addElToGalleryRef = images.map(element => {
  const addItemToGallery = `<li class="gallery__item"><img src="${element.url}" alt="${element.alt}" width=320></li>`;
  return addItemToGallery;
});
galleryRef.classList.add('gallery');
galleryRef.insertAdjacentHTML("beforeend", addElToGalleryRef.join(''));
galleryRef.style = "margin-top: 50px; list-style:none; display: flex; justify-content: space-around; align-items: center;"
