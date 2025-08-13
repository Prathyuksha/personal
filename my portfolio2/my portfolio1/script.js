function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('active'));
  const btns = ['projects', 'internships', 'workexp', 'skills', 'achievements', 'contact'];
  btns.forEach((menu, i) => {
    if (menu === id) document.querySelectorAll('.menu-btn')[i].classList.add('active');
  });
}

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for reaching out!');
  this.reset();
});
