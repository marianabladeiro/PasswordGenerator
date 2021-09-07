function generatePassword() {		

	var password = (
	  length = 18,
	  wishlist = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$+_=)(:.*&%{}[];,'
	) =>
  	Array.from(crypto.getRandomValues(new Uint32Array(length)))
    .map((x) => wishlist[x % wishlist.length])
    .join('')
    document.getElementById("password").value = password();
    document.getElementById("copy").classList.remove("disabled");
}


function copyToClipboard() {
	var copyPassword = document.getElementById("password");

  copyPassword.select();
  copyPassword.setSelectionRange(0, 99999); /* For mobile devices */

  navigator.clipboard.writeText(copyPassword.value);
  $('[data-toggle="tooltip"]').tooltip('toggle');

  setInterval(function () {
 $('[data-toggle="tooltip"]').tooltip('dispose'); 
	}, 2000);
    
}