import imgUrl from './favicon.svg';

window.addEventListener('load', () => {
  let img = document.createElement('img');
  img.src = imgUrl;
  document.body.append(img);
});
