/* Each preview has its own viewport; width-based media queries run inside it. */
let previewWidth=390,previewMode='mobile',previewFit=true,previewFocus=null;
function previewDocument(){return document.getElementById('preview-frame')?.contentDocument;}
function previewElement(id){return previewDocument()?.getElementById(id);}
function previewQuery(selector){return previewDocument()?.querySelector(selector);}
function previewHead(title='Design Lab preview'){return '<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><base href="'+esc(document.baseURI)+'"><title>'+esc(title)+'</title><link rel="stylesheet" href="style.css"><link rel="stylesheet" href="workshop.css"><style>html,body{margin:0;min-height:100%;background:#f6f7fb}body{padding:24px}.demo{margin:auto}.preview-content{width:100%;display:flex;align-items:center;flex-direction:column}.legend,.contrast-result{max-width:900px;width:100%}body.workshop-preview{padding:0;background:transparent}.workshop-preview .dl-site{min-height:100vh}body.direction-preview .demo{max-width:1000px}@media(max-width:500px){body{padding:12px}}</style></head>';}
function renderViewport(h,style,extra,kind,group){
const host=document.getElementById('preview');host.innerHTML='<div class="viewport-stage"><iframe id="preview-frame" title="Live component preview" sandbox="allow-same-origin allow-popups"></iframe></div>';const frame=document.getElementById('preview-frame');
frame.addEventListener('load',()=>{
if(document.getElementById('preview-frame')!==frame)return;
const doc=frame.contentDocument;doc.addEventListener('input',handlePreviewInput);doc.addEventListener('click',handlePreviewClick);doc.addEventListener('submit',e=>e.preventDefault());
if(group==='Style & motion')mountStyleExample(kind,state);
if(previewFocus){doc.querySelector(previewFocus)?.focus();previewFocus=null;}
});
frame.srcdoc=previewHead()+'<body class="'+(kind==='workshop'?'workshop-preview':kind==='direction'?'direction-preview':'')+'">'+(kind==='workshop'?h:'<div class="preview-content"><div class="demo" style="'+style+'">'+h+'</div>'+extra+'</div>')+'</body></html>';fitPreview();
}
function fitPreview(){const stage=document.querySelector('.viewport-stage'),frame=document.getElementById('preview-frame');if(!stage||!frame)return;const available=Math.max(200,stage.parentElement.clientWidth-28),scale=previewFit?Math.min(1,available/previewWidth):1;const height=previewMode==='desktop'?900:previewMode==='tablet'?900:740;frame.style.width=previewWidth+'px';frame.style.height=height+'px';frame.style.transform='scale('+scale+')';stage.style.width=previewFit?'100%':previewWidth+'px';stage.style.height=height*scale+'px';document.getElementById('viewport-status').textContent=previewWidth+'px viewport · '+Math.round(scale*100)+'% display';}
function chooseViewport(mode,width){previewMode=mode;previewWidth=width;document.querySelectorAll('[data-viewport]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.viewport===mode)));document.getElementById('custom-width').value=width;fitPreview();}
document.getElementById('viewport-controls').addEventListener('click',e=>{const b=e.target.closest('[data-viewport]');if(b)chooseViewport(b.dataset.viewport,Number(b.dataset.width));});
document.getElementById('custom-width').addEventListener('change',e=>{const width=Number(e.target.value);if(Number.isFinite(width))chooseViewport('custom',Math.round(Math.max(280,Math.min(1920,width))));});
document.getElementById('fit-preview').addEventListener('change',e=>{previewFit=e.target.checked;fitPreview();});
if(typeof ResizeObserver!=='undefined')new ResizeObserver(fitPreview).observe(document.getElementById('preview'));
