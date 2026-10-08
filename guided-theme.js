/* Guided decisions, independent of Theme Workshop's art-direction presets. */
(() => {
  'use strict';
  const root = document.getElementById('guided-theme');
  if (!root) return;
  const find = id => root.querySelector('#' + id);
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const fonts = {
    'System sans': "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    'Arial': 'Arial, Helvetica, sans-serif',
    'Verdana': 'Verdana, Geneva, sans-serif',
    'Trebuchet MS': "'Trebuchet MS', sans-serif",
    'Georgia': 'Georgia, serif',
    'Times New Roman': "'Times New Roman', Times, serif",
    'Palatino': "Palatino, 'Palatino Linotype', 'Book Antiqua', serif",
    'System monospace': "ui-monospace, 'SFMono-Regular', Consolas, monospace"
  };
  const defaults = {
    bodyFont:'System sans', headingFont:'System sans', bodySize:16, headingSize:40,
    headingWeight:'600', lineHeight:1.6, tracking:0,
    contentWidth:1120, readingWidth:60, columns:'3', align:'left',
    gutter:24, sectionSpace:56, cardSpace:24, gap:24,
    background:'#ffffff', surface:'#f5f6f8', text:'#233044', brand:'#2334ea',
    border:'#d7deea', borderWidth:1, radius:8, shadow:'none'
  };
  let state = {...defaults}, step = 0, width = 1440, device = 'desktop', fit = true;
  const range = (key, label, min, max, unit, help, increment=1) => ({key,label,min,max,unit,help,increment,type:'range'});
  const select = (key,label,options,help) => ({key,label,options,help,type:'select'});
  const color = (key,label,help) => ({key,label,help,type:'color'});
  const steps = [
    {
      title:'Typography', description:'Start with the text people will read. Choose your own fonts and establish a relationship between body copy and headings.',
      fields:[
        select('bodyFont','Body font',Object.keys(fonts),'Local font stacks: the available face can differ by operating system.'),
        select('headingFont','Heading font',Object.keys(fonts),'Use the same family or choose a different one; pairing is optional.'),
        range('bodySize','Body size',12,24,'px','This changes body copy, links, and controls. 16px is a starting value, not a rule.'),
        range('headingSize','Main heading',24,80,'px','Compare its emphasis and wrapping at every device width.'),
        select('headingWeight','Heading weight',['400','500','600','700','800'],'Available weights depend on the selected font.'),
        range('lineHeight','Body line height',1,2.2,'×','Unitless leading scales with body text; headings use their own tighter leading.',.05),
        range('tracking','Heading letter spacing',-.04,.12,'em','Adjust the distance between heading letters; avoid judging by size alone.',.01)
      ],
      lesson:'Font size, line length, and line height work together. A font change can alter wrapping even when its size stays the same. The next step lets you adjust reading width. User text-size preferences and zoom must remain usable.',
      sources:[['Typography — web.dev','https://web.dev/learn/design/typography'],['Text spacing — W3C','https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html']]
    },
    {
      title:'Layout', description:'Your typography stays in place. Now decide how wide the content can be, where it aligns, and how cards share the available space.',
      fields:[
        range('contentWidth','Content maximum',600,1600,'px','A maximum width stops content stretching indefinitely; narrow viewports still shrink it.',20),
        range('readingWidth','Reading measure',35,90,'ch','ch approximates the width of a zero in the body font, not an exact character count.'),
        select('columns','Desktop card columns',['1','2','3'],'Cards reduce to at most two columns below 1000px and stack below 600px.'),
        select('align','Text alignment',['left','center','right'],'Compare where your eye starts each line and how headings relate to paragraphs.')
      ],
      lesson:'Containers, reading measure, and grids solve different problems. A wide page can still contain a narrow paragraph. Choose breakpoints when content needs a different arrangement; these sample breakpoints are editable design decisions, not definitions of devices.',
      sources:[['Layout — GOV.UK','https://design-system.service.gov.uk/styles/layout/'],['Responsive design — MDN','https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design']]
    },
    {
      title:'Spacing', description:'Keep your fonts and layout. Use distance to show which things belong together and which sections are separate.',
      fields:[
        range('gutter','Page side gutters',8,64,'px','Space between the viewport edge and content.'),
        range('sectionSpace','Section spacing',16,120,'px','Space around each major section.'),
        range('cardSpace','Card padding',8,48,'px','Space inside a card, between its boundary and its content.'),
        range('gap','Card gap',8,64,'px','Space between neighboring cards.')
      ],
      lesson:'Proximity communicates relationships. Padding is space inside a boundary; a grid gap separates neighboring items. A small repeatable set of spacing values can improve consistency, but no particular numerical grid is mandatory.',
      sources:[['Spacing — GOV.UK','https://design-system.service.gov.uk/styles/spacing/'],['Visual design principles — NN/g','https://www.nngroup.com/articles/principles-visual-design/']]
    },
    {
      title:'Colors', description:'Choose each color directly. Give it a job, then examine the actual combinations used in your sample page.',
      fields:[color('background','Page background','The canvas behind the content.'),color('surface','Card surface','The background behind card text.'),color('text','Text','Body text, headings, and navigation.'),color('brand','Action / link color','Used for links, the primary button, and focus indicators.')],
      lesson:'Hue is a creative choice; readability also depends on luminance contrast. Normal text needs at least 4.5:1 for WCAG AA, with a 3:1 threshold for qualifying large text. Checks here cover specific pairs, not an entire accessibility audit. Button labels use whichever of black or white has stronger contrast.',
      sources:[['Contrast — W3C','https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html']]
    },
    {
      title:'Details', description:'Use borders, corners, and shadows to refine the structure you have already built. Every earlier choice remains intact.',
      fields:[color('border','Border color','Separates cards and sections; a decorative border is not automatically an accessibility requirement.'),range('borderWidth','Border thickness',0,4,'px','Zero removes borders.'),range('radius','Corner radius',0,32,'px','Applied to cards and buttons.'),select('shadow','Card shadow',['none','subtle','raised'],'Compare whether depth helps distinguish the cards.')],
      lesson:'A line or shadow can clarify grouping, but repeated decoration also competes for attention. Choose details that reinforce the page hierarchy. Hover and keyboard focus remain visible regardless of decorative settings.',
      sources:[['Visual design principles — NN/g','https://www.nngroup.com/articles/principles-visual-design/']]
    },
    {
      title:'Review', description:'Inspect the combined result at mobile, tablet, and desktop widths. Revisit any step freely; changing one decision never resets the others.',fields:[],
      lesson:'This is a theme study using a fixed sample page. Check real content, browsers, devices, keyboard interaction, and zoom before using a theme in a production website. A resized preview does not simulate an operating system or a touchscreen.',
      sources:[['Accessibility quick reference — W3C','https://www.w3.org/WAI/WCAG22/quickref/']]
    }
  ];
  const icon = type => {
    const paths = {mobile:'<rect x="8" y="2" width="12" height="24" rx="2"/><path d="M12 22h4"/>',tablet:'<rect x="4" y="2" width="20" height="24" rx="2"/><path d="M12 22h4"/>',desktop:'<rect x="2" y="3" width="24" height="17" rx="2"/><path d="M14 20v5m-6 0h12"/>'};
    return '<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">'+paths[type]+'</svg>';
  };
  const luminance = hex => {
    const channels = hex.slice(1).match(/../g).map(v => parseInt(v,16)/255).map(v => v<=.04045?v/12.92:((v+.055)/1.055)**2.4);
    return channels[0]*.2126+channels[1]*.7152+channels[2]*.0722;
  };
  const contrast = (a,b) => (Math.max(luminance(a),luminance(b))+.05)/(Math.min(luminance(a),luminance(b))+.05);
  const onBrand = () => contrast('#ffffff',state.brand)>=contrast('#000000',state.brand)?'#ffffff':'#000000';
  function fontAvailable(label) {
    if(label.startsWith('System')) return true;
    const face=fonts[label].split(',')[0],canvas=document.createElement('canvas'),ctx=canvas.getContext('2d');
    if(!ctx)return true;
    const measure=family=>{ctx.font='72px '+family;return ctx.measureText('mmmmmmmmmmlli').width;};
    return measure(face+', monospace')!==measure('monospace')||measure(face+', sans-serif')!==measure('sans-serif');
  }
  function observation() {
    if(step===0){const fallback=[...new Set([state.bodyFont,state.headingFont])].filter(f=>!fontAvailable(f));return 'Body copy is '+state.bodySize+'px with '+(state.bodySize*state.lineHeight).toFixed(1)+'px between baselines. The main heading is '+(state.headingSize/state.bodySize).toFixed(2)+' times the body size. '+(fallback.length?fallback.join(' and ')+' is unavailable here; a fallback is displayed.':'Switch device widths to compare heading wrapping.');}
    if(step===1)return 'Your '+state.bodyFont+' body font is unchanged. Content is limited to '+state.contentWidth+'px; paragraphs to '+state.readingWidth+'ch. At '+width+'px, cards use '+(width<600?1:width<1000?Math.min(2,Number(state.columns)):state.columns)+' column(s).';
    if(step===2)return 'Cards have '+state.cardSpace+'px inside and '+state.gap+'px between them. Compare this with '+state.sectionSpace+'px around major sections: does the spacing communicate the groups you intended?';
    if(step===3){return [['Text / page',state.text,state.background],['Text / card',state.text,state.surface],['Link / page',state.brand,state.background],['Button label / action',onBrand(),state.brand]].map(([name,a,b])=>{const r=contrast(a,b);return name+': '+r.toFixed(2)+':1 ('+(r>=4.5?'meets':'below')+' normal-text AA).';}).join(' ');}
    if(step===4)return 'Borders are '+state.borderWidth+'px; corners are '+state.radius+'px. '+(state.shadow==='none'?'Cards use no shadow.':'Cards use the '+state.shadow+' shadow.')+' Check whether these choices strengthen the grouping rather than distract from the content.';
    return 'Try the three device icons, then revisit any step. Also check your browser at 200% zoom and use Tab to move through the sample links and button. Contrast checks are in the Colors step.';
  }
  function renderPanel(focusHeading=false) {
    const active=steps[step];
    root.querySelector('.gt-steps').innerHTML=steps.map((s,i)=>'<button type="button" data-gt-step="'+i+'" '+(i===step?'aria-current="step"':'')+'><span>'+String(i+1).padStart(2,'0')+'</span>'+s.title+'</button>').join('');
    find('gt-position').textContent='STEP '+(step+1)+' OF '+steps.length;
    find('gt-title').textContent=active.title;
    find('gt-explanation').textContent=active.description;
    find('gt-fields').innerHTML=active.fields.map(field=>{
      const id='gt-'+field.key, value=state[field.key];
      const input=field.type==='select'?'<select id="'+id+'" data-gt-key="'+field.key+'" aria-describedby="'+id+'-help">'+field.options.map(o=>'<option '+(o===value?'selected':'')+'>'+escape(o)+'</option>').join('')+'</select>':'<input id="'+id+'" data-gt-key="'+field.key+'" type="'+field.type+'" value="'+escape(value)+'" '+(field.type==='range'?'min="'+field.min+'" max="'+field.max+'" step="'+field.increment+'"':'')+' aria-describedby="'+id+'-help">';
      return '<div class="gt-field"><label class="gt-label" for="'+id+'">'+field.label+(field.type!=='select'?'<output id="'+id+'-value" for="'+id+'">'+value+(field.unit||'')+'</output>':'')+'</label>'+input+'<p class="gt-help" id="'+id+'-help">'+field.help+'</p></div>';
    }).join('');
    find('gt-observation').textContent=observation();
    find('gt-lesson').innerHTML='<p>'+escape(active.lesson)+'</p>'+active.sources.map(([title,url])=>'<p><a href="'+url+'" target="_blank" rel="noopener">'+escape(title)+'</a></p>').join('');
    find('gt-previous').disabled=step===0;
    find('gt-next').hidden=step===steps.length-1;
    find('gt-next').textContent='Next: '+(steps[step+1]?.title||'Review')+' →';
    find('gt-reset').hidden=active.fields.length===0;
    find('gt-summary').innerHTML=step===5?'<h2>Your decisions</h2><dl>'+steps.slice(0,5).map(s=>'<dt>'+s.title+'</dt><dd>'+s.fields.map(f=>f.label+': '+state[f.key]+(f.unit||'')).map(escape).join(' · ')+'</dd>').join('')+'</dl>':'';
    if(focusHeading){root.querySelector('.gt-panel').scrollTop=0;find('gt-title').setAttribute('tabindex','-1');find('gt-title').focus({preventScroll:true});find('gt-status').textContent='Step '+(step+1)+': '+active.title+'. Your earlier choices are retained.';}
  }
  function sampleCSS() {
    const s=state, shadow={none:'none',subtle:'0 2px 10px #00000012',raised:'0 10px 28px #00000020'}[s.shadow];
    return `
      *,*::before,*::after{box-sizing:border-box}html{font-size:100%}body{margin:0;background:${s.background};color:${s.text};font-family:${fonts[s.bodyFont]};font-size:${s.bodySize/16}rem;line-height:${s.lineHeight}}button,input,select,textarea{font:inherit}img{max-width:100%;height:auto}
      a{color:${s.brand};text-underline-offset:.2em}a:hover{text-decoration-thickness:2px}:focus-visible{outline:3px solid ${s.brand};outline-offset:4px}
      h1,h2,h3{font-family:${fonts[s.headingFont]};font-weight:${s.headingWeight};line-height:1.15;letter-spacing:${s.tracking}em;overflow-wrap:anywhere;margin:0 0 .6em}h1{font-size:${s.headingSize/16}rem}h2{font-size:${Math.max(s.bodySize*1.25,s.headingSize*.65)/16}rem}h3{font-size:${Math.max(s.bodySize*1.1,s.headingSize*.45)/16}rem}
      p{margin:0 0 1em}header,footer{border-bottom:${s.borderWidth}px solid ${s.border}}.container{width:100%;max-width:${s.contentWidth}px;padding-inline:${s.gutter}px;margin-inline:auto;text-align:${s.align}}header .container{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;padding-block:20px}.logo{font-weight:700;text-decoration:none;color:${s.text}}nav{display:flex;gap:20px;flex-wrap:wrap}
      section{padding-block:${s.sectionSpace}px}.copy{max-width:${s.readingWidth}ch;${s.align==='center'?'margin-inline:auto':s.align==='right'?'margin-left:auto':''}}.eyebrow{font-size:.8em;font-weight:600;letter-spacing:.12em;text-transform:uppercase}.action{display:inline-block;color:${onBrand()};background:${s.brand};border:0;border-radius:${s.radius}px;padding:12px 20px;min-height:44px;text-decoration:none;font-weight:600}.action:hover{text-decoration:underline}
      .cards{display:grid;grid-template-columns:repeat(${s.columns},minmax(0,1fr));gap:${s.gap}px;margin-top:28px}.card{min-width:0;overflow-wrap:anywhere;padding:${s.cardSpace}px;border:${s.borderWidth}px solid ${s.border};border-radius:${s.radius}px;background:${s.surface};box-shadow:${shadow}}.card p:last-child{margin-bottom:0}.contact{border-top:${s.borderWidth}px solid ${s.border}}footer{border-top:${s.borderWidth}px solid ${s.border};padding-block:24px}footer p{margin:0;font-size:.875em}
      @media(max-width:999px){.cards{grid-template-columns:repeat(${Math.min(2,Number(s.columns))},minmax(0,1fr))}}@media(max-width:599px){.cards{grid-template-columns:1fr}header .container{align-items:flex-start;flex-direction:column}h1{font-size:${Math.min(s.headingSize,48)/16}rem}}
    `;
  }
  function renderPreview() {
    const frame=find('gt-preview'),oldScroll=frame.contentDocument?.documentElement?.scrollTop||0,doc='<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Theme sample</title><style>'+sampleCSS()+'</style></head><body><header><div class="container"><a class="logo" href="#home">Your website</a><nav aria-label="Sample navigation"><a href="#explore">Explore</a><a href="#contact">Contact</a></nav></div></header><main id="home"><section class="container"><div class="copy"><p class="eyebrow">A SPACE FOR YOUR IDEAS</p><h1>Make something that feels like you.</h1><p>Your choices give this page its character. Start with readable text, arrange the content, and build a consistent set of styles one decision at a time.</p><a class="action" href="#explore">Explore the possibilities</a></div></section><section class="container" id="explore"><div class="copy"><h2>Small decisions. A shared direction.</h2><p>Compare the same content as your typography, layout, spacing, and colors evolve.</p></div><div class="cards">'+[['Learn something new','Give an idea room to grow. Notice how line length and spacing change the reading experience.'],['Try a different approach','Use your own judgment. A clear hierarchy makes it easier to find the next step.'],['Make it your own','Build relationships between the pieces. Consistency leaves room for creative expression.']].map(([title,text])=>'<article class="card"><h3>'+title+'</h3><p>'+text+'</p></article>').join('')+'</div></section><section class="container contact" id="contact"><div class="copy"><h2>Leave room for the next idea.</h2><p>This is sample content for comparing your design decisions. Return to an earlier step whenever you want to try something else.</p><a href="#home">Back to the beginning</a></div></section></main><footer><div class="container"><p>Your website · A theme in progress</p></div></footer></body></html>';
    frame.onload=()=>{if(frame.contentDocument)frame.contentDocument.documentElement.scrollTop=oldScroll;};
    frame.srcdoc=doc;
    fitPreview();
  }
  function fitPreview() {
    const holder=root.querySelector('.gt-preview-scroll'),frame=find('gt-preview'),stage=root.querySelector('.gt-preview-stage');
    const available=Math.max(1,holder.clientWidth-(window.innerWidth<=620?28:40)),scale=fit?Math.min(1,available/width):1;
    const height=Math.max(700,Math.min(1600,620/scale));
    frame.style.width=width+'px';frame.style.height=height+'px';frame.style.transform='scale('+scale+')';
    stage.style.width=(width*scale)+'px';stage.style.height=(height*scale)+'px';
    find('gt-viewport').textContent=width+'px viewport · '+Math.round(scale*100)+'% display';
  }
  root.querySelector('.gt-devices').innerHTML=[['mobile',390],['tablet',768],['desktop',1440]].map(([type,w])=>'<button type="button" data-gt-device="'+type+'" data-gt-width="'+w+'" aria-label="'+type[0].toUpperCase()+type.slice(1)+' preview" title="'+type[0].toUpperCase()+type.slice(1)+'" aria-pressed="'+(type===device)+'">'+icon(type)+'</button>').join('');
  root.addEventListener('click',event=>{
    const target=event.target.closest('button');if(!target)return;
    if(target.hasAttribute('data-gt-step')){step=Number(target.dataset.gtStep);renderPanel(true);}
    if(target.hasAttribute('data-gt-device')){device=target.dataset.gtDevice;width=Number(target.dataset.gtWidth);root.querySelectorAll('[data-gt-device]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.gtDevice===device)));fitPreview();find('gt-observation').textContent=observation();find('gt-status').textContent=device+' preview: '+width+' CSS pixels.';}
    if(target.id==='gt-next'||target.id==='gt-previous'){step=Math.max(0,Math.min(steps.length-1,step+(target.id==='gt-next'?1:-1)));renderPanel(true);}
    if(target.id==='gt-reset'){for(const field of steps[step].fields)state[field.key]=defaults[field.key];renderPanel();renderPreview();find('gt-status').textContent=steps[step].title+' reset. Other steps are unchanged.';}
  });
  root.addEventListener('input',event=>{
    const key=event.target.dataset.gtKey;if(!key)return;
    const field=steps[step].fields.find(f=>f.key===key);if(!field)return;
    const value=event.target.value;
    if(field.type==='range'){const number=Number(value);if(!Number.isFinite(number)||number<field.min||number>field.max)return;state[key]=number;}
    else if(field.type==='color'){if(!/^#[0-9a-f]{6}$/i.test(value))return;state[key]=value;}
    else{if(!field.options.includes(value))return;state[key]=value;}
    const output=find('gt-'+key+'-value');if(output)output.textContent=state[key]+(field.unit||'');
    find('gt-observation').textContent=observation();renderPreview();
  });
  find('gt-fit').addEventListener('change',event=>{fit=event.target.checked;fitPreview();});
  if(typeof ResizeObserver!=='undefined')new ResizeObserver(fitPreview).observe(root.querySelector('.gt-preview-scroll'));
  else window.addEventListener('resize',fitPreview);
  renderPanel();renderPreview();
})();
