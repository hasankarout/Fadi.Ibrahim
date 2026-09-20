document.addEventListener('DOMContentLoaded', function() {
const whatsappForm = document.getElementById('whatsappForm');

if (whatsappForm) {
whatsappForm.addEventListener('submit', function(e) {
e.preventDefault();

const name = document.getElementById('name').value;
const type = document.getElementById('trainingType').value;
const notes = document.getElementById('notes').value;
// أدخل رقم الواتساب الخاص بـ فادي هنا (مع المفتاح الدولي بدون +)
const phoneNumber = "96100000000";

const message = `Hello Coach Fady,%0A%0AMy name is *${name}*. I am interested in *${type}*.%0A%0A*My Goals/Notes:* ${notes}`;

window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
});
}
});

