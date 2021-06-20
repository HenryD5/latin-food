(function() {
    emailjs.init('user_uMKlpkC8LjI4BLSLyiMjx');
})();
window.onload = function() {
    document.getElementById('ajax-contact').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_pcmxuxl', 'template_91g772v', this)
            .then(function() {
				document.getElementById('ajax-contact').reset();
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
	document.getElementById('reservation-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_pcmxuxl', 'template_sb78mev', this)
            .then(function() {
				document.getElementById('reservation-form').reset();
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}