document.addEventListener("DOMContentLoaded",(function(){const t=document.querySelectorAll(".show-button-detail");let e=null,n=null;t.forEach((function(t){t.addEventListener("click",(function(){!function(t){const l="profile--detail--"+t.getAttribute("data-id"),i=document.getElementById(l);i&&("none"===i.style.display||""===i.style.display?(e&&n&&(n.style.display="none",e.textContent="View Details",e.classList.remove("active")),i.style.display="block",t.textContent="Hide Details",t.classList.add("active"),e=t,n=i):(i.style.display="none",t.textContent="View Details",t.classList.remove("active"),e=null,n=null))}(t)}))}))}));