/* Portable, dependency-free behavior shared by editor previews and exports. */
function mountComponentInteractions(doc=document){
if(doc.__dlInteractions)return;doc.__dlInteractions=true;const win=doc.defaultView;
const closeMenu=(root,focus=false)=>{const toggle=root.querySelector('[data-dl-action="menu"]');toggle.setAttribute('aria-expanded','false');root.classList.remove('dl-menu-open');root.querySelector('nav').hidden=true;root.querySelector('.dl-menu-backdrop').hidden=true;if(focus)toggle.focus();};
for(const root of doc.querySelectorAll('.dl-nav-menu')){const media=win.matchMedia('(max-width:599px)');const sync=()=>{const mobile=root.classList.contains('dl-menu-mobile');const toggle=root.querySelector('[data-dl-action="menu"]');closeMenu(root);toggle.hidden=mobile&&!media.matches;root.querySelector('nav').hidden=!mobile||media.matches;};sync();media.addEventListener('change',sync);}
const slide=(root,delta)=>{const panels=[...root.querySelectorAll('[data-slide]')],current=panels.findIndex(p=>!p.hidden),next=(current+delta+panels.length)%panels.length;panels.forEach((p,i)=>p.hidden=i!==next);root.querySelector('[data-slide-status]').textContent='Slide '+(next+1)+' of '+panels.length;};
doc.addEventListener('click',e=>{if(doc.body.dataset.dlEditing==='true')return;const button=e.target.closest('[data-dl-action]');if(!button){const root=e.target.closest('.dl-nav-menu');if(root&&e.target.closest('nav a')&&root.classList.contains('dl-menu-open'))closeMenu(root);return;}const action=button.dataset.dlAction;
if(action==='menu'){const root=button.closest('.dl-nav-menu'),open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));root.classList.toggle('dl-menu-open',open);root.querySelector('nav').hidden=!open;root.querySelector('.dl-menu-backdrop').hidden=!open;}
if(action==='close-menu')closeMenu(button.closest('.dl-nav-menu'),true);
if(action==='next'||action==='previous')slide(button.closest('.dl-slideshow'),action==='next'?1:-1);
if(action==='lightbox'){const root=button.closest('.dl-lightbox'),dialog=root.querySelector('dialog'),source=button.querySelector('img');dialog.querySelector('img').src=source.src;dialog.querySelector('img').alt=source.alt;dialog.querySelector('[data-lightbox-caption]').textContent=button.dataset.caption;dialog.__dlTrigger=button;dialog.showModal();}
if(action==='close-lightbox')button.closest('dialog').close();
});
doc.addEventListener('keydown',e=>{if(doc.body.dataset.dlEditing==='true')return;if(e.key==='Escape'){for(const root of doc.querySelectorAll('.dl-menu-open')){closeMenu(root,true);e.preventDefault();}}const root=e.target.closest('.dl-slideshow');if(root&&(e.key==='ArrowLeft'||e.key==='ArrowRight')){e.preventDefault();slide(root,e.key==='ArrowRight'?1:-1);}});
for(const dialog of doc.querySelectorAll('.dl-lightbox dialog')){dialog.addEventListener('close',()=>dialog.__dlTrigger?.focus());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});}
}
if(typeof document!=='undefined'){if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>mountComponentInteractions());else mountComponentInteractions();}
