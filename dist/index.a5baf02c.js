function e(e){localStorage.setItem("tasks",JSON.stringify(e))}function t(){return JSON.parse(localStorage.getItem("tasks"))}function o(){0===h.children.length?E.style.display="none":E.style.display=""}function d(){let e=t();v.innerHTML="",L.innerHTML="",h.innerHTML="",e.forEach(e=>{"todo"===e.status?v.innerHTML+=s("todo",e):"progress"===e.status?L.innerHTML+=s("progress",e):"completed"===e.status&&(h.innerHTML+=s("completed",e))}),n(),o()}function n(){let e=v.children.length,t=L.children.length,o=h.children.length,d=document.getElementById("todo__count"),n=document.getElementById("progress__count"),s=document.getElementById("completed__count");d.textContent=e,n.textContent=t,s.textContent=o,0==v.children.length?v.classList.add("white-line"):v.classList.remove("white-line")}function s(e,{id:t,title:o,description:d,time:n,userName:s}){return`
    <div class="card ${e}__card" data-id="${t}" draggable="true">
      <div class="card__buttons">
        ${"todo"===e?`
            <button class="card__edit todo__button">Edit</button>
            <button class="card__delete todo__button">Delete</button>
            <button class="card__forward todo__button">Start</button>
          `:"progress"===e?`
            <button class="card__back progress__button">Back</button>
            <button class="card__forward progress__button">Complete</button>
          `:"completed"===e?`
            <button class="card__back completed__button">Back</button>
            <button class="card__delete completed__button">Delete</button>
          `:""}
      </div>
      <h3 class="card__title">${o}</h3>
      <p class="card__description">${d}</p>
      <div class="card__bottom">
        <p class="card__user">${s}</p>
        <p class="card__time">${n}</p>
      </div>
    </div>
  `}function a(){y.style.border="1px solid #4e50d3",b.style.border="1px solid #4e50d3",f.style.border="1px solid #4e50d3",y.value="",b.value="",f.value=0}function l(e,t,o,d){let n=document.createElement("div");n.id="confirmModal",n.className="modalConfirm",n.innerHTML=`
      <div class="modalConfirm__content">
        <div class="modalConfirm__container${d}">
          <p class="modalConfirm__warning">${e}</p>
          <div class="modalConfirm__bottom">
            <button id="modalConfirm__cancel" class="modalConfirm__button${d} cancel">Cancel</button>
            <button id="modalConfirm__confirm" class="modalConfirm__button${d}">Confirm</button>
          </div>
        </div>
      </div>`,n.style.display="block",document.body.appendChild(n),document.getElementById("modalConfirm__confirm").addEventListener("click",o),document.getElementById("modalConfirm__cancel").addEventListener("click",t),document.addEventListener("click",e=>{e.target==n&&n.remove()}),document.addEventListener("keydown",e=>{"Escape"===e.key&&n.remove()})}function r(d,a){let r;let c=d.getElementsByClassName("card__title")[0].innerHTML,i=d.getElementsByClassName("card__description")[0].innerHTML,_=d.getElementsByClassName("card__time")[0].innerHTML,u=d.getElementsByClassName("card__user")[0].innerHTML,m=Number(d.dataset.id);function g(){let l=s(a,{id:m,title:c,description:i,time:_,userName:u});r.innerHTML=r.innerHTML+l,d.remove();let g=t();g.find(function(e){return e.id===m}).status=a,e(g),n(),o()}"todo"===a?r=v:"progress"===a?r=L:"completed"===a&&(r=h),"progress"===a&&L.children.length>5?l("You have accumulated unfulfilled tasks. Are you sure you want to add another task?",function(){confirmModal.remove()},function(){confirmModal.remove(),g()},"Progress"):g()}let c=null;localStorage.getItem("tasks")||localStorage.setItem("tasks",JSON.stringify([])),function(){let e=document.createElement("div");e.innerHTML=`<div class="modal__content"> 
    <div class="todo__card modal__card">
        <input class="modal__title" placeholder="Title" id="modal__title"></input>
        <textarea class="modal__description" rows="10" placeholder="Description" id="modal__description"></textarea>
        <div class="modal__bottom">
            <select class="modal__selector" name="modal__user" required="required" id="modal__user">
                <option value="0" selected>Select user</option>
            </select>
            <div class="card__buttons">
                <button class="todo__button" id="task__cancel"">Cancel</button>
                <button class="todo__button" id="task__confirm">Confirm</button>
            </div>
        </div>
    </div>
  </div>`,e.classList.add("modal"),e.setAttribute("id","modal"),document.body.prepend(e),fetch("https://jsonplaceholder.typicode.com/users").then(e=>e.json()).then(e=>{let t=document.querySelector(".modal__selector");for(;t.firstChild;)t.firstChild.remove();let o=document.createElement("option");o.value=0,o.textContent="Select user",t.appendChild(o),e.forEach(e=>{let o=document.createElement("option");o.value=e.id,o.textContent=e.name,t.appendChild(o)})}).catch(e=>{let t=document.querySelector(".modal__selector");t.innerHTML+='<option value="1">Anonymous</option>'})}();const i=document.getElementById("modal"),_=document.getElementById("task__cancel"),u=document.getElementById("task__confirm"),m=document.getElementById("todo__header"),g=document.getElementById("progress__header"),p=document.getElementById("completed__header"),y=document.getElementById("modal__title"),b=document.getElementById("modal__description"),f=document.getElementById("modal__user"),v=document.getElementById("todo__container"),L=document.getElementById("progress__container"),h=document.getElementById("completed__container"),E=document.getElementById("completed__delete-all");let C=null;window.addEventListener("load",function(){d(),function e(){let t=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});document.getElementById("clock").innerText=t,setTimeout(e,1e3)}()}),window.addEventListener("storage",function(){d()}),document.addEventListener("dragstart",e=>{c=e.target.dataset.id,e.target.classList.add("dragging")}),document.addEventListener("dragover",e=>{e.preventDefault()}),document.addEventListener("drop",e=>{if(e.target.closest(".card__container")){let t;let o=e.target.closest(".card__container").id,d=document.querySelector(`[data-id="${c}"]`);switch(o){case"todo__container":t="todo";break;case"progress__container":t="progress";break;case"completed__container":t="completed"}r(d,t),d.classList.remove("dragging")}}),document.addEventListener("dragend",e=>{e.target.classList.remove("dragging")}),document.body.addEventListener("click",function(d){if(d.target.classList.contains("card__edit")){i.style.display="block",C=d.target.closest(".card");let e=d.target.closest(".card");y.value=e.querySelector(".card__title").textContent,b.value=e.querySelector(".card__description").textContent;let t=e.querySelector(".card__user").textContent;for(let e=0;e<f.options.length;e++)if(f.options[e].text===t){f.selectedIndex=e;break}}if(d.target.classList.contains("todo__add")&&(C=null,i.style.display="block"),d.target===u&&function(o){let d=y.value,s=b.value,l=f.value;if(d.trim()?(y.style.border="1px solid #4e50d3",s.trim())?(b.style.border="1px solid #4e50d3",0==l)?(f.style.border="2px solid red",!0):(f.style.border="1px solid #4e50d3",!1):(b.style.border="2px solid red",!0):(y.style.border="2px solid red",!0))return;let r=t();if(o){o.querySelector(".card__title").textContent=y.value,o.querySelector(".card__description").textContent=b.value,o.querySelector(".card__user").textContent=f.options[f.selectedIndex].text;let d=t(),n=d.find(e=>e.id===Number(o.dataset.id));n&&(n.title=y.value,n.description=b.value,n.userID=f.value,n.userName=f.options[f.selectedIndex].text,e(d)),o.dataset.id=n.id}else{let t=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),o=Date.now(),n=f.options[f.selectedIndex].text;v.innerHTML+=`<div class="card todo__card" data-id="${o}" draggable="true">
                                    <div class="card__buttons">
                                      <button class="card__edit todo__button">Edit</button>
                                      <button class="card__delete todo__button">Delete</button>
                                      <button class="card__forward todo__button">Start</button>
                                    </div>
                                    <h3 class="card__title">${d}</h3>
                                    <p class="card__description">${s}</p>
                                    <div class="card__bottom">
                                      <p class="card__user">${n}</p>
                                      <p class="card__time">${t}</p>
                                    </div>
                                  </div>`,r.push({id:o,time:t,title:d,description:s,userID:f.value,userName:f.options[f.selectedIndex].text,status:"todo"}),e(r)}i.style.display="none",o=null,a(),n()}(C),d.target===E&&l("Are you sure you want to delete all completed tasks?",()=>{confirmModal.remove()},()=>{e(t().filter(e=>"completed"!==e.status)),h.innerHTML="",n(),confirmModal.remove(),o()},"Completed"),d.target===_&&(i.style.display="none",a()),d.target.closest(".todo__header")===m&&function(){let e=document.body.getElementsByClassName("card__container")[0],t=document.body.getElementsByClassName("category__button")[0],o=document.body.querySelector(".todo");e.classList.toggle("hidden"),t.classList.toggle("hidden"),o.classList.toggle("collapsed")}(),d.target.closest(".progress__header")===g&&function(){let e=document.body.getElementsByClassName("card__container")[1],t=document.body.querySelector(".progress");e.classList.toggle("hidden"),t.classList.toggle("collapsed")}(),d.target.closest(".completed__header")===p&&function(){let e=document.body.getElementsByClassName("card__container")[2],t=document.body.getElementsByClassName("category__button")[1],o=document.body.querySelector(".completed");e.classList.toggle("hidden"),t.classList.toggle("hidden"),o.classList.toggle("collapsed")}(),d.target.classList.contains("card__delete")){let s=d.target.closest(".card"),a=Number(s.dataset.id);s.remove(),e(t().filter(e=>e.id!==a)),n(),o()}if(d.target.classList.contains("card__forward")||d.target.classList.contains("card__back")){let e;let t=d.target.closest(".card"),o=t.parentElement.id.replace("__container","");if(d.target.classList.contains("card__forward"))switch(o){case"todo":e="progress";break;case"progress":e="completed"}else if(d.target.classList.contains("card__back"))switch(o){case"progress":e="todo";break;case"completed":e="progress"}e&&r(t,e)}}),document.addEventListener("keydown",e=>{"Escape"===e.key&&"block"===i.style.display&&(i.style.display="none",a())});let k=!1;document.body.addEventListener("mousedown",function(e){e.target===i&&(k=!0)}),document.body.addEventListener("mouseup",function(e){e.target===i&&k&&(i.style.display="none",a()),k=!1});