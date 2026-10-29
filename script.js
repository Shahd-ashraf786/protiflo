document.getElementById('year').textContent = new Date().getFullYear();
const links = document.getElementById('links'), burger = document.getElementById('burger');
burger.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  links.classList.remove('open'); burger.setAttribute('aria-expanded', false);
}));
const secs = [...document.querySelectorAll('section[id]')], navA = [...links.querySelectorAll('a')];
addEventListener('scroll', () => {
  const y = scrollY + 120, cur = secs.filter(s => s.offsetTop <= y).pop();
  navA.forEach(a => a.classList.toggle('active', !!cur && a.getAttribute('href') === '#' + cur.id));
}, { passive: true });

/* Contact form: opens the visitor's email app with the message filled in.
   For direct delivery without an email app, replace this with a Formspree/EmailJS endpoint. */
const f = document.getElementById('form'), st = document.getElementById('status');
f.addEventListener('submit', ev => {
  ev.preventDefault();
  const v = id => document.getElementById(id).value.trim();
  if (!v('n') || !v('e') || !v('m') || !f.e.validity.valid) {
    st.textContent = 'Please fill in every field with a valid email address.'; return;
  }
  const body = `${v('m')}\n\nFrom: ${v('n')} (${v('e')})`;
  location.href = `mailto:shahdashraf8786@gmail.com?subject=${encodeURIComponent('Portfolio message from ' + v('n'))}&body=${encodeURIComponent(body)}`;
  st.textContent = 'Opening your email app. Press send there to deliver the message.';
});
const bar=document.getElementById('bar');
addEventListener('scroll',()=>{bar.style.width=(scrollY/(document.documentElement.scrollHeight-innerHeight)*100)+'%'},{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.entry,.group,.rv,form,.reach li').forEach(el=>{el.classList.add('rv');io.observe(el)});
