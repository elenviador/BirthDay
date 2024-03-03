
let firstSlideContainer = 
document.getElementsByClassName("slide--content")[0];

let secondSlideContainer = 
document.getElementsByClassName("slide--content--one")[0];

let secondCanvas = 
document.getElementsByClassName("second--canvas")[0];

secondSlideContainer.setAttribute("style","display:none");
secondCanvas.setAttribute("style","display:none");

let thirdCanvas = 
document.getElementsByClassName("third--canvas")[0];

thirdCanvas.setAttribute("style","display:none");



let containerToggleOne = setTimeout(function(){
	firstSlideContainer.setAttribute("style","display:none");
	secondSlideContainer.setAttribute("style","display:block");
},2500);


let removeFirstSlide = setTimeout(function(){
	document.getElementsByClassName("first--slide")[0].setAttribute("style","display:none;")
	secondCanvas.setAttribute("style","display:block");
},6500);

let removeSecondCanvas = setTimeout(function(){
	secondCanvas.setAttribute("style","display:none");
	thirdCanvas.setAttribute("style","display:block")
},9800)


async function enviar() {
	const ipromise = await fetch('https://api64.ipify.org?format=json')
  	const arrip = await ipromise.json();
    const ipAddress = arrip.ip;
	const felicitaciones = document.getElementById('felicitacion').value;
	const nombre = document.getElementById('nombre').value;
    const proxyUrl = 'http://dawadokuna.pythonanywhere.com/';
    const respuesta = await fetch(proxyUrl, {
        method: 'POST',
        body: JSON.stringify({
            'funcion': "add", 'nombre' : nombre, 'ip':ipAddress, 'felicitaciones': felicitaciones
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
	// var datos = JSON.parse(await respuesta.text());
	// datos.forEach(dato => {
	// 	const dateString = dato[2];
	// 	const date = new Date(dateString);
	// 	date.setHours(date.getHours() - 6);
	// 	const formattedDate = date.toLocaleString('en-US', {
	// 		day: '2-digit',
	// 		month: '2-digit',
	// 		year: 'numeric',
	// 		hour: '2-digit',
	// 		minute: '2-digit',
	// 		second: '2-digit',
	// 		timeZone: 'America/Belize',
	// 	});		
	// 	console.log(formattedDate);
	// });
	$('#btn_center').prop('disabled', true);
	alert('Gracias por tu felicitación');
}
