export const glob = globalThis

export const canvas = glob.document.getElementById('render')

export const getURLHash = () => glob.document.location.hash.replace(/^#\//, "");

export const delegate = (el, selector, event, handler) => {
	el.addEventListener(event, (e) => {
		if (e.target.matches(selector)) handler(e, el);
	});
};

export const insertHTML = (el, html) => el.insertAdjacentHTML("afterbegin", html);

export const replaceHTML = (el, html) => {
	el.replaceChildren();
	insertHTML(el, html);
};

export const showPic = () =>{
	var img = document.getElementById('bigpic')
	img.style.display = "block";
  } 