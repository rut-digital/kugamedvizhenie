import{s as ie,n as G,r as he,f as fe}from"../chunks/scheduler.63274e7e.js";import{S as ce,i as de,g as r,s as O,m as se,h as o,j as b,f as v,c as R,y as $,n as le,k as a,l as ve,a as ae,x as t,z as P,o as ne,r as K,u as W,v as X,d as Z,t as ee,w as te}from"../chunks/index.443e41d3.js";const ge=!0,Ue=Object.freeze(Object.defineProperty({__proto__:null,prerender:ge},Symbol.toStringTag,{value:"Module"}));function Ie(h){let l,e,d,s,n,c,I="Текущий счёт:",y,p,E,f,i,m,u,S="",Q,T,D,V="",w,_,L,q='<div class="tablet__blockname svelte-7l3s3">Кошелёк</div>',M,g,U,C,F,x;return{c(){l=r("div"),e=r("div"),d=O(),s=r("div"),n=r("div"),c=r("div"),c.textContent=I,y=O(),p=r("div"),E=se(h[0]),f=O(),i=r("div"),m=r("div"),u=r("button"),u.innerHTML=S,Q=O(),T=r("div"),D=r("button"),D.innerHTML=V,w=O(),_=r("div"),L=r("div"),L.innerHTML=q,M=O(),g=r("button"),U=r("div"),C=se(h[2]),this.h()},l(k){l=o(k,"DIV",{class:!0});var N=b(l);e=o(N,"DIV",{class:!0,style:!0}),b(e).forEach(v),d=R(N),s=o(N,"DIV",{class:!0});var A=b(s);n=o(A,"DIV",{class:!0});var H=b(n);c=o(H,"DIV",{class:!0,"data-svelte-h":!0}),$(c)!=="svelte-u6wu0a"&&(c.textContent=I),y=R(H),p=o(H,"DIV",{class:!0});var B=b(p);E=le(B,h[0]),B.forEach(v),H.forEach(v),f=R(A),i=o(A,"DIV",{class:!0});var Y=b(i);m=o(Y,"DIV",{class:!0});var z=b(m);u=o(z,"BUTTON",{class:!0,"data-svelte-h":!0}),$(u)!=="svelte-p2nn5v"&&(u.innerHTML=S),z.forEach(v),Q=R(Y),T=o(Y,"DIV",{class:!0});var j=b(T);D=o(j,"BUTTON",{class:!0,"data-svelte-h":!0}),$(D)!=="svelte-113x5ef"&&(D.innerHTML=V),j.forEach(v),Y.forEach(v),A.forEach(v),w=R(N),_=o(N,"DIV",{class:!0});var J=b(_);L=o(J,"DIV",{class:!0,"data-svelte-h":!0}),$(L)!=="svelte-yg3p9r"&&(L.innerHTML=q),M=R(J),g=o(J,"BUTTON",{class:!0});var ue=b(g);U=o(ue,"DIV",{class:!0});var _e=b(U);C=le(_e,h[2]),_e.forEach(v),ue.forEach(v),J.forEach(v),N.forEach(v),this.h()},h(){a(e,"class","tablet__coins svelte-7l3s3"),ve(e,"--image","url("+h[1]+")"),a(c,"class","tablet__blockname svelte-7l3s3"),a(p,"class","amount__button svelte-7l3s3"),a(n,"class","tablet__elemtitle svelte-7l3s3"),a(u,"class","reset__button svelte-7l3s3"),a(m,"class","amount__reset reset svelte-7l3s3"),a(D,"class","increment__button svelte-7l3s3"),a(T,"class","amount__increment increment svelte-7l3s3"),a(i,"class","amount__control svelte-7l3s3"),a(s,"class","tablet__element amount svelte-7l3s3"),a(L,"class","tablet__elemtitle svelte-7l3s3"),a(U,"class","bank__amount svelte-7l3s3"),a(g,"class","bank__wallet svelte-7l3s3"),a(_,"class","tablet__element bank svelte-7l3s3"),a(l,"class","tablet svelte-7l3s3")},m(k,N){ae(k,l,N),t(l,e),t(l,d),t(l,s),t(s,n),t(n,c),t(n,y),t(n,p),t(p,E),t(s,f),t(s,i),t(i,m),t(m,u),t(i,Q),t(i,T),t(T,D),t(l,w),t(l,_),t(_,L),t(_,M),t(_,g),t(g,U),t(U,C),F||(x=[P(u,"click",h[5]),P(D,"click",h[3]),P(g,"click",h[4])],F=!0)},p(k,[N]){N&2&&ve(e,"--image","url("+k[1]+")"),N&1&&ne(E,k[0]),N&4&&ne(C,k[2])},i:G,o:G,d(k){k&&v(l),F=!1,he(x)}}}function pe(h,l,e){const d=[100,200,400,800,1600,3200,6400,12800,25600,51200,102400];let s=0,n=`https://storage.yandexcloud.net/rzd-universitet/${s}.png`,c=[],I=0,y=0;return[s,n,y,()=>{s==0?(e(0,s+=d[0]),e(1,n=`https://storage.yandexcloud.net/rzd-universitet/${s}.png`),c.push({id:I}),I++):(console.log(s,d[d.findIndex(()=>s)]),e(0,s+=d[d.indexOf(s)]),e(1,n=`https://storage.yandexcloud.net/rzd-universitet/${s}.png`),c.push({id:I}),I++),console.log(c)},i=>{e(2,y+=s),e(0,s=0),e(1,n=`https://storage.yandexcloud.net/rzd-universitet/${s}.png`),c=[],I=0},()=>{e(0,s=0),e(1,n=`https://storage.yandexcloud.net/rzd-universitet/${s}.png`)}]}class re extends ce{constructor(l){super(),de(this,l,pe,Ie,ie,{})}}function me(h){let l,e,d;return{c(){l=r("a"),e=r("img"),this.h()},l(s){l=o(s,"A",{href:!0,target:!0});var n=b(l);e=o(n,"IMG",{src:!0,alt:!0,class:!0}),n.forEach(v),this.h()},h(){fe(e.src,d=h[2])||a(e,"src",d),a(e,"alt",""),a(e,"class","tablet__image svelte-1f9dgr7"),a(l,"href",h[2]),a(l,"target","_blank")},m(s,n){ae(s,l,n),t(l,e)},p(s,n){n&4&&!fe(e.src,d=s[2])&&a(e,"src",d),n&4&&a(l,"href",s[2])},d(s){s&&v(l)}}}function be(h){let l,e,d,s="Предыдущий вопрос",n,c,I="Ответ",y,p,E="Следующий вопрос",f,i,m,u,S,Q,T,D,V="Правильный ответ:",w,_,L,q,M,g=h[2]&&me(h);return{c(){l=r("div"),e=r("div"),d=r("button"),d.textContent=s,n=O(),c=r("button"),c.textContent=I,y=O(),p=r("button"),p.textContent=E,f=O(),i=r("div"),m=r("div"),u=se(h[0]),S=O(),g&&g.c(),Q=O(),T=r("div"),D=r("div"),D.textContent=V,w=O(),_=r("div"),L=se(h[1]),this.h()},l(U){l=o(U,"DIV",{class:!0});var C=b(l);e=o(C,"DIV",{class:!0});var F=b(e);d=o(F,"BUTTON",{"data-svelte-h":!0}),$(d)!=="svelte-eaock9"&&(d.textContent=s),n=R(F),c=o(F,"BUTTON",{"data-svelte-h":!0}),$(c)!=="svelte-1fw20kw"&&(c.textContent=I),y=R(F),p=o(F,"BUTTON",{"data-svelte-h":!0}),$(p)!=="svelte-1mo4sp7"&&(p.textContent=E),F.forEach(v),f=R(C),i=o(C,"DIV",{class:!0});var x=b(i);m=o(x,"DIV",{class:!0});var k=b(m);u=le(k,h[0]),k.forEach(v),S=R(x),g&&g.l(x),x.forEach(v),Q=R(C),T=o(C,"DIV",{class:!0});var N=b(T);D=o(N,"DIV",{class:!0,"data-svelte-h":!0}),$(D)!=="svelte-1xh1pyk"&&(D.textContent=V),w=R(N),_=o(N,"DIV",{class:!0});var A=b(_);L=le(A,h[1]),A.forEach(v),N.forEach(v),C.forEach(v),this.h()},h(){a(e,"class","tablet__control svelte-1f9dgr7"),a(m,"class","tablet__text svelte-1f9dgr7"),a(i,"class","tablet__element tablet__element_question svelte-1f9dgr7"),a(D,"class","tablet__text svelte-1f9dgr7"),a(_,"class","tablet__text svelte-1f9dgr7"),a(T,"class","tablet__element tablet__element_answer svelte-1f9dgr7"),a(l,"class","tablet svelte-1f9dgr7")},m(U,C){ae(U,l,C),t(l,e),t(e,d),t(e,n),t(e,c),t(e,y),t(e,p),t(l,f),t(l,i),t(i,m),t(m,u),t(i,S),g&&g.m(i,null),t(l,Q),t(l,T),t(T,D),t(T,w),t(T,_),t(_,L),q||(M=[P(d,"click",h[4]),P(c,"click",h[5]),P(p,"click",h[3])],q=!0)},p(U,[C]){C&1&&ne(u,U[0]),U[2]?g?g.p(U,C):(g=me(U),g.c(),g.m(i,null)):g&&(g.d(1),g=null),C&2&&ne(L,U[1])},i:G,o:G,d(U){U&&v(l),g&&g.d(),q=!1,he(M)}}}const oe=3;function Te(h,l,e){let d="Игра скоро начнётся!",s="",n;const c={question_list:[{id:0,text:"Какие виды поездов существуют и какие задачи они выполняют?",correct_answer:"Существует множество видов поездов, включая пассажирские, грузовые, скоростные, пригородные и т.д. Каждый вид поезда имеет свои особенности и предназначен для разных целей. Пассажирские поезда предназначены для перевозки людей на дальние и средние расстояния, грузовые — для перевозки различных грузов, скоростные — для быстрой доставки пассажиров на дальние расстояния, пригородные — для перевозки пассажиров между городами и пригородами и т.д.",difficulty:"easy"},{id:1,text:"Какие типы вагонов бывают в составе поезда и какие функции они выполняют?",correct_answer:"В составе поезда могут быть различные типы вагонов, такие как плацкартный, купейный, спальный, ресторанный и т.д. Каждый тип вагона предназначен для определенной категории пассажиров и имеет свои особенности. Плацкартный вагон предназначен для перевозки пассажиров на дальние и средние расстояния, купейный вагон — для комфортного проживания пассажиров, спальный вагон — для ночной перевозки пассажиров, ресторанный вагон — для обеспечения питания пассажиров и т.д.",difficulty:"easy",image:"https://storage.yandexcloud.net/mcdmap/%D0%9A%D1%83%D0%BD%D1%86%D0%B5%D0%B2%D0%BE-1.png"},{id:2,text:"Какие виды билетов бывают на поезд и какие условия их использования?",correct_answer:"На поезд можно приобрести различные виды билетов, например, плацкартный, купейный, спальный, бизнес-класса и т.д. Каждый вид билета имеет свои особенности и стоимость. Плацкартный билет обычно является самым доступным и предназначен для перевозки пассажиров на дальние и средние расстояния, купейный билет обеспечивает больший комфорт и приватность, спальный билет позволяет пассажиру отдохнуть во время ночной перевозки, бизнес-класс обеспечивает максимальный комфорт и сервис для пассажиров. Условия использования каждого вида билета могут отличаться, например, наличие места, возможность возврата билета и т.д.",difficulty:"easy"},{id:3,text:"Какие типы локомотивов существуют и какие задачи они выполняют?",correct_answer:"Существует множество типов локомотивов, включая электрические, дизельные, паровые и т.д. Каждый тип локомотива имеет свои преимущества и недостатки и используется в зависимости от целей перевозки. Электрические локомотивы обеспечивают экономичность и экологичность перевозки, дизельные локомотивы могут работать на больших расстояниях без подзарядки, паровые локомотивы имеют большую мощность и тяговую силу. Каждый тип локомотива используется для перевозки определенных видов поездов и грузов.",difficulty:"medium"},{id:4,text:"Какие виды грузовых вагонов бывают и какие грузы они перевозят?",correct_answer:"Грузовые вагоны могут быть различных типов, например, платформы, цистерны, хопперы, крытые и т.д. Каждый тип вагона предназначен для определенного вида груза и имеет свои особенности. Платформы используются для перевозки больших и тяжелых грузов, цистерны — для перевозки жидких и газообразных грузов, хопперы — для перевозки сыпучих грузов, крытые вагоны — для перевозки грузов, которые нуждаются в защите от погодных условий и т.д.",difficulty:"medium"},{id:5,text:"Какие технологии используются на железной дороге для обеспечения безопасности и эффективности движения поездов?",correct_answer:"На железной дороге используются различные технологии, такие как системы автоматического управления движением поездов, системы безопасности, системы контроля скорости и т.д. Все эти технологии позволяют обеспечить безопасность и эффективность движения поездов. Например, системы автоматического управления движением поездов позволяют контролировать скорость и расстояние между поездами, системы безопасности обеспечивают защиту пассажиров и грузов от возможных аварий, системы контроля скорости позволяют снизить вероятность возникновения аварийных ситуаций.",difficulty:"medium"},{id:6,text:"Какие особенности у международных поездов и какие условия перевозки?",correct_answer:"Международные поезда имеют свои особенности, такие как необходимость прохождения границы, использование различных систем сигнализации и безопасности в разных странах, а также возможность пересадки на другие поезда в разных городах и странах. Условия перевозки международных поездов могут отличаться от условий перевозки внутри страны, например, необходимость получения специальных документов для пересечения границы, ограничения на перевозку определенных видов грузов и т.д.",difficulty:"hard"},{id:7,text:"Какие технологии используются для обслуживания железнодорожных путей и как они влияют на безопасность и эффективность движения поездов?",correct_answer:"Для обслуживания железнодорожных путей используются различные технологии, такие как системы контроля состояния путей, системы обнаружения дефектов, системы ремонта и т.д. Все эти технологии позволяют обеспечить безопасность и эффективность движения поездов. Например, системы контроля состояния путей позволяют своевременно выявлять и устранять дефекты, системы обнаружения дефектов позволяют предотвращать возможные аварийные ситуации, системы ремонта позволяют быстро восстанавливать работоспособность путей после аварий.",difficulty:"hard"},{id:8,text:"Какие виды багажа можно брать с собой в поезд и какие правила перевозки существуют?",correct_answer:"В поезде можно брать различные виды багажа, такие как сумки, чемоданы, рюкзаки и т.д. Однако есть ограничения по весу и размеру багажа, а также запрет на перевозку опасных и запрещенных к перевозке вещей. Правила перевозки багажа могут отличаться в зависимости от вида билета и типа поезда, например, при наличии специального билета можно перевозить большой объем багажа, а при перевозке грузовых поездов действуют особые правила перевозки грузов.",difficulty:"hard"}]};let I=[];const y=()=>{I=[],c.question_list.forEach(V=>{!I.includes(V.difficulty)&&!u.includes(V.id)&&I.push(V.difficulty)}),console.log(I)};let p="easy",E=1,f=0,i,m,u=[];const S=c.question_list.length;return y(),[d,s,n,()=>{if(f++,u.length===c.question_list.length){e(0,d="Вопросы кончились, игра закончена!"),e(1,s="");return}const V=()=>{for(e(1,s=""),m=Math.floor(Math.random()*S);u.includes(m)||p!==c.question_list[m].difficulty;)m=Math.floor(Math.random()*S);console.log("ID вопроса:",m),u.push(m),e(0,d=c.question_list[m].text),c.question_list[m].image?e(2,n=c.question_list[m].image):e(2,n=void 0),console.log("CURRENT_ROUND: ",E),console.log("CURRENT_ROUND_QUESTION: ",f),console.log("CURRENT_DIFFICULTY: ",p),console.log("DIFFICULTY_LIST:",I),console.log("passedQuestionsIds",u)};f<=oe&&V(),f>oe&&(E++,f=1,y(),p=I[Math.floor(Math.random()*I.length)],V())},()=>{e(1,s="");const V=w=>{const _=c.question_list.find(L=>L.id===w);console.log(w),e(0,d=_.text),m=w,_.image?e(2,n=_.image):e(2,n=void 0),console.log("CURRENT_ROUND: ",E),console.log("CURRENT_ROUND_QUESTION: ",f),console.log("CURRENT_DIFFICULTY: ",p),console.log("DIFFICULTY_LIST:",I),console.log("passedQuestionsIds",u)};if(f<=oe&&f!==1?(f--,u.pop(),i=u[u.length-1],console.log("LAST_QUESTION_ID: ",i),V(i)):f===1&&(E--,f=3,u.pop(),i=u[u.length-1],console.log("LAST_QUESTION_ID: ",i),p=c.question_list.find(_=>_.id===i).difficulty,V(i)),f===3){i=u[u.length-1];const w=c.question_list.find(_=>_.id===i).difficulty;I.includes(w)||I.push(w),p=w}},()=>{e(1,s=c.question_list[m].correct_answer)}]}class De extends ce{constructor(l){super(),de(this,l,Te,be,ie,{})}}function Ce(h){let l,e,d,s,n,c="Вопрос",I,y,p,E,f,i,m="Команда №1",u,S,Q,T,D,V="Команда №2",w,_,L,q,M,g="Команда №3",U,C,F;return y=new De({}),S=new re({}),_=new re({}),C=new re({}),{c(){l=r("main"),e=r("div"),d=r("div"),s=r("div"),n=r("h3"),n.textContent=c,I=O(),K(y.$$.fragment),p=O(),E=r("div"),f=r("div"),i=r("h3"),i.textContent=m,u=O(),K(S.$$.fragment),Q=O(),T=r("div"),D=r("h3"),D.textContent=V,w=O(),K(_.$$.fragment),L=O(),q=r("div"),M=r("h3"),M.textContent=g,U=O(),K(C.$$.fragment),this.h()},l(x){l=o(x,"MAIN",{});var k=b(l);e=o(k,"DIV",{class:!0});var N=b(e);d=o(N,"DIV",{class:!0});var A=b(d);s=o(A,"DIV",{class:!0});var H=b(s);n=o(H,"H3",{class:!0,"data-svelte-h":!0}),$(n)!=="svelte-1as704c"&&(n.textContent=c),I=R(H),W(y.$$.fragment,H),H.forEach(v),A.forEach(v),p=R(N),E=o(N,"DIV",{class:!0});var B=b(E);f=o(B,"DIV",{class:!0});var Y=b(f);i=o(Y,"H3",{class:!0,"data-svelte-h":!0}),$(i)!=="svelte-1di5kj6"&&(i.textContent=m),u=R(Y),W(S.$$.fragment,Y),Y.forEach(v),Q=R(B),T=o(B,"DIV",{class:!0});var z=b(T);D=o(z,"H3",{class:!0,"data-svelte-h":!0}),$(D)!=="svelte-x37mt5"&&(D.textContent=V),w=R(z),W(_.$$.fragment,z),z.forEach(v),L=R(B),q=o(B,"DIV",{class:!0});var j=b(q);M=o(j,"H3",{class:!0,"data-svelte-h":!0}),$(M)!=="svelte-hhhbvc"&&(M.textContent=g),U=R(j),W(C.$$.fragment,j),j.forEach(v),B.forEach(v),N.forEach(v),k.forEach(v),this.h()},h(){a(n,"class","card__comandname svelte-eru07b"),a(s,"class","question__card card svelte-eru07b"),a(d,"class","gameboard__question question svelte-eru07b"),a(i,"class","card__comandname svelte-eru07b"),a(f,"class","score__card card svelte-eru07b"),a(D,"class","card__comandname svelte-eru07b"),a(T,"class","score__card card svelte-eru07b"),a(M,"class","card__comandname svelte-eru07b"),a(q,"class","score__card card svelte-eru07b"),a(E,"class","gameboard__score score svelte-eru07b"),a(e,"class","gameboard svelte-eru07b")},m(x,k){ae(x,l,k),t(l,e),t(e,d),t(d,s),t(s,n),t(s,I),X(y,s,null),t(e,p),t(e,E),t(E,f),t(f,i),t(f,u),X(S,f,null),t(E,Q),t(E,T),t(T,D),t(T,w),X(_,T,null),t(E,L),t(E,q),t(q,M),t(q,U),X(C,q,null),F=!0},p:G,i(x){F||(Z(y.$$.fragment,x),Z(S.$$.fragment,x),Z(_.$$.fragment,x),Z(C.$$.fragment,x),F=!0)},o(x){ee(y.$$.fragment,x),ee(S.$$.fragment,x),ee(_.$$.fragment,x),ee(C.$$.fragment,x),F=!1},d(x){x&&v(l),te(y),te(S),te(_),te(C)}}}class Ne extends ce{constructor(l){super(),de(this,l,null,Ce,ie,{})}}export{Ne as component,Ue as universal};
