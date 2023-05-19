'use strict'
const gallery = document.querySelector('.gallery');
const feed = document.querySelector('.contenedor-gallery');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

const token = 'IGQVJVNjFXazNFOUdTY1loclVTLXJPUjFkX0NRYzZAKTW5pdWpVeXhVeEF4RVg0dkZAyU2tob2RLd2lpV09uYzdob2tldWo5U0lTMEs1ZA2lHZAzR0VzZA1QWdwUWY1ZAzd3UWc0Y016c1FrWGNxd2dGVWxtOAZDZD';
const url= `https://graph.instagram.com/v11.0/media?fields=thumbnail_url,media_url,caption,permalink&limit=80&access_token=${token}`;


fetch(url)
.then(res => res.json())
.then(data => CrearHtml(data.data))
function CrearHtml(data){
	for (const img of data) {
		gallery.innerHTML +=`
		<div class="image overflow">
		<img loading=lazy" src"${img.media_url}" alt"">
		<div class="opacity-hover">
		<a href="${img.permalink}" class="caption">
		<p>
		${img.caption.slice(0, 100)}
		</p>
		</a>
		</div>
		</div<
		`;
		
	}
}
next.addEventListener('click', moveGallery);
prev.addEventListener('click', moveGallery);

function moveGallery(e){
if (e.target.id == 'next' || e.target.parentElement.id == 'next') {
	feed.scrollLeft += feed.offsetWidth;
} else {
	feed.scrollLeft -= feed.offsetWidth;
	
}
}
