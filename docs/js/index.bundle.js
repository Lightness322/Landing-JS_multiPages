!function(){const e=document.querySelector(".news__arrow-left"),t=document.querySelector(".news__arrow-right"),r=document.querySelector(".news__item"),n=document.querySelector(".news__content"),o=document.querySelector(".news__content-slider"),l=document.querySelector(".news__container"),s=document.querySelector(".reviews__left-button"),d=document.querySelector(".reviews__right-button"),c=document.querySelector(".reviews__slider-item"),i=(document.querySelector(".reviews__slider-block"),document.querySelector(".reviews__slider"));let u,a;e.addEventListener("click",(()=>{if(parseInt(getComputedStyle(l).width)>768){let e=getComputedStyle(r).width,t=getComputedStyle(n).width,l=parseInt(t)-2*parseInt(e)+parseInt(e);u||(u=0),u<=-l&&(o.style.transform=`translateX(${u+l+"px"})`,u+=l)}})),t.addEventListener("click",(()=>{if(parseInt(getComputedStyle(l).width)>768){let e=getComputedStyle(r).width,t=getComputedStyle(n).width,l=parseInt(t)-2*parseInt(e)+parseInt(e);u||(u=0),u<=2*-l||(o.style.transform=`translateX(${u-l+"px"})`,u-=l)}})),s.addEventListener("click",(()=>{let e=getComputedStyle(c).width,t=parseInt(e);a||(a=0),a<=-t&&(i.style.transform=`translateX(${a+t+"px"})`,a+=t)})),d.addEventListener("click",(()=>{let e=getComputedStyle(c).width,t=parseInt(e);a||(a=0),a<=3*-t||(i.style.transform=`translateX(${a-t+"px"})`,a-=t)}))}();