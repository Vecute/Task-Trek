function e(e){localStorage.setItem("tasks",JSON.stringify(e))}function t(){return JSON.parse(localStorage.getItem("tasks"))}function d(){0===C.children.length?B.style.display="none":B.style.display=""}function o(){let e=t();L.innerHTML="",h.innerHTML="",C.innerHTML="",e.forEach(e=>{"todo"===e.status?L.innerHTML+=s("todo",e):"progress"===e.status?h.innerHTML+=s("progress",e):"completed"===e.status&&(C.innerHTML+=s("completed",e))}),a(),d()}function a(){let e=L.children.length,t=h.children.length,d=C.children.length,o=document.getElementById("todo__count"),a=document.getElementById("progress__count"),s=document.getElementById("completed__count");o.textContent=e,a.textContent=t,s.textContent=d,0==L.children.length?L.classList.add("white-line"):L.classList.remove("white-line")}function s(e,{id:t,title:d,description:o,time:a,userName:s}){return`
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
      <h3 class="card__title">${d}</h3>
      <p class="card__description">${o}</p>
      <div class="card__bottom">
        <p class="card__user">${s}</p>
        <p class="card__time">${a}</p>
      </div>
    </div>
  `}function n(){v.style.border="1px solid #4e50d3",f.style.border="1px solid #4e50d3",E.style.border="1px solid #4e50d3",v.value="",f.value="",E.value=0}function l(e,t,d,o){let a=document.createElement("div");a.id="confirmModal",a.className="modalConfirm",a.innerHTML=`
      <div class="modalConfirm__content">
        <div class="modalConfirm__container${o}">
          <p class="modalConfirm__warning">${e}</p>
          <div class="modalConfirm__bottom">
            <button id="modalConfirm__cancel" class="modalConfirm__button${o} cancel">Cancel</button>
            <button id="modalConfirm__confirm" class="modalConfirm__button${o}">Confirm</button>
          </div>
        </div>
      </div>`,a.style.display="block",document.body.appendChild(a),document.getElementById("modalConfirm__confirm").addEventListener("click",d),document.getElementById("modalConfirm__cancel").addEventListener("click",t),document.addEventListener("click",e=>{e.target==a&&a.remove()}),document.addEventListener("keydown",e=>{"Escape"===e.key&&a.remove()})}function r(o){let s=o.getElementsByClassName("card__title")[0].innerHTML,n=o.getElementsByClassName("card__description")[0].innerHTML,l=o.getElementsByClassName("card__time")[0].innerHTML,r=o.getElementsByClassName("card__user")[0].innerHTML,c=Number(o.dataset.id);L.innerHTML+=`<div class="card todo__card" data-id="${c}" draggable="true">
                                  <div class="card__buttons">
                                    <button class="card__edit todo__button">Edit</button>
                                    <button class="card__delete todo__button">Delete</button>
                                    <button class="card__forward todo__button">Start</button>
                                  </div>
                                  <h3 class="card__title">${s}</h3>
                                  <p class="card__description">${n}</p>
                                  <div class="card__bottom">
                                    <p class="card__user">${r}</p>
                                    <p class="card__time">${l}</p>
                                  </div>
                                </div>`,o.remove(o);let i=t();i.find(e=>e.id===c).status="todo",e(i),a(),d()}function c(o){function s(){let s=o.getElementsByClassName("card__title")[0].innerHTML,n=o.getElementsByClassName("card__description")[0].innerHTML,l=o.getElementsByClassName("card__time")[0].innerHTML,r=o.getElementsByClassName("card__user")[0].innerHTML,c=Number(o.dataset.id);h.innerHTML+=`<div class="card progress__card" data-id="${c}" draggable="true">
                                        <div class="card__buttons">
                                          <button class="card__back progress__button">Back</button>
                                          <button class="card__forward progress__button">Complete</button>
                                        </div>
                                        <h3 class="card__title">${s}</h3>
                                        <p class="card__description">${n}</p>
                                        <div class="card__bottom">
                                          <p class="card__user">${r}</p>
                                          <p class="card__time">${l}</p>
                                        </div>
                                      </div>`,o.remove(o);let i=t();i.find(e=>e.id===c).status="progress",e(i),a(),d()}h.children.length>5?l("You have accumulated unfulfilled tasks. Are you sure you want to add another task?",()=>{confirmModal.remove()},()=>{confirmModal.remove(),s()},"Progress"):s()}function i(o){let s=o.getElementsByClassName("card__title")[0].innerHTML,n=o.getElementsByClassName("card__description")[0].innerHTML,l=o.getElementsByClassName("card__time")[0].innerHTML,r=o.getElementsByClassName("card__user")[0].innerHTML,c=Number(o.dataset.id);C.innerHTML+=`<div class="card completed__card" data-id="${c}" draggable="true">
                                      <div class="card__buttons">
                                        <button class="card__back completed__button">Back</button>
                                        <button class="card__delete completed__button">Delete</button>
                                      </div>
                                      <h3 class="card__title">${s}</h3>
                                      <p class="card__description">${n}</p>
                                      <div class="card__bottom">
                                        <p class="card__user">${r}</p>
                                        <p class="card__time">${l}</p>
                                      </div>
                                    </div>`,o.remove(o);let i=t();i.find(e=>e.id===c).status="completed",e(i),a(),d()}let _=null;localStorage.getItem("tasks")||localStorage.setItem("tasks",JSON.stringify([])),function(){let e=document.createElement("div");e.innerHTML=`<div class="modal__content"> 
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
  </div>`,e.classList.add("modal"),e.setAttribute("id","modal"),document.body.prepend(e),fetch("https://jsonplaceholder.typicode.com/users").then(e=>e.json()).then(e=>{let t=document.querySelector(".modal__selector");for(;t.firstChild;)t.firstChild.remove();let d=document.createElement("option");d.value=0,d.textContent="Select user",t.appendChild(d),e.forEach(e=>{let d=document.createElement("option");d.value=e.id,d.textContent=e.name,t.appendChild(d)})})}();const u=document.getElementById("modal"),m=document.getElementById("task__cancel"),p=document.getElementById("task__confirm"),g=document.getElementById("todo__header"),b=document.getElementById("progress__header"),y=document.getElementById("completed__header"),v=document.getElementById("modal__title"),f=document.getElementById("modal__description"),E=document.getElementById("modal__user"),L=document.getElementById("todo__container"),h=document.getElementById("progress__container"),C=document.getElementById("completed__container"),B=document.getElementById("completed__delete-all");let k=null;window.addEventListener("load",function(){o(),function e(){let t=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});document.getElementById("clock").innerText=t,setTimeout(e,1e3)}()}),window.addEventListener("storage",function(){o()}),document.addEventListener("dragstart",e=>{_=e.target.dataset.id,e.target.classList.add("dragging")}),document.addEventListener("dragover",e=>{e.preventDefault()}),document.addEventListener("drop",e=>{if(e.target.closest(".card__container")){let t=e.target.closest(".card__container").id,d=document.querySelector(`[data-id="${_}"]`);"todo__container"!==t||d.classList.contains("todo__card")?"progress__container"!==t||d.classList.contains("progress__card")?"completed__container"!==t||d.classList.contains("completed__card")||i(d):c(d):r(d),d.classList.remove("dragging")}}),document.addEventListener("dragend",e=>{e.target.classList.remove("dragging")}),document.body.addEventListener("click",function(o){if(o.target.classList.contains("card__edit")){u.style.display="block",k=o.target.closest(".card");let e=o.target.closest(".card");v.value=e.querySelector(".card__title").textContent,f.value=e.querySelector(".card__description").textContent;let t=e.querySelector(".card__user").textContent;for(let e=0;e<E.options.length;e++)if(E.options[e].text===t){E.selectedIndex=e;break}}if(o.target.classList.contains("todo__add")&&(k=null,u.style.display="block"),o.target===p&&function(d){let o=v.value,s=f.value,l=E.value;if(o.trim()?(v.style.border="1px solid #4e50d3",s.trim())?(f.style.border="1px solid #4e50d3",0==l)?(E.style.border="2px solid red",!0):(E.style.border="1px solid #4e50d3",!1):(f.style.border="2px solid red",!0):(v.style.border="2px solid red",!0))return;let r=t();if(d){d.querySelector(".card__title").textContent=v.value,d.querySelector(".card__description").textContent=f.value,d.querySelector(".card__user").textContent=E.options[E.selectedIndex].text;let o=t(),a=o.find(e=>e.id===Number(d.dataset.id));a&&(a.title=v.value,a.description=f.value,a.userID=E.value,a.userName=E.options[E.selectedIndex].text,e(o)),d.dataset.id=a.id}else{let t=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),d=Date.now(),a=E.options[E.selectedIndex].text;L.innerHTML+=`<div class="card todo__card" data-id="${d}" draggable="true">
                                    <div class="card__buttons">
                                      <button class="card__edit todo__button">Edit</button>
                                      <button class="card__delete todo__button">Delete</button>
                                      <button class="card__forward todo__button">Start</button>
                                    </div>
                                    <h3 class="card__title">${o}</h3>
                                    <p class="card__description">${s}</p>
                                    <div class="card__bottom">
                                      <p class="card__user">${a}</p>
                                      <p class="card__time">${t}</p>
                                    </div>
                                  </div>`,r.push({id:d,time:t,title:o,description:s,userID:E.value,userName:E.options[E.selectedIndex].text,status:"todo"}),e(r)}u.style.display="none",d=null,n(),a()}(k),o.target===B&&l("Are you sure you want to delete all completed tasks?",()=>{confirmModal.remove()},()=>{e(t().filter(e=>"completed"!==e.status)),C.innerHTML="",a(),confirmModal.remove(),d()},"Completed"),o.target===m&&(u.style.display="none",n()),o.target===u&&(u.style.display="none",n()),o.target.closest(".todo__header")===g&&function(){let e=document.body.getElementsByClassName("card__container")[0],t=document.body.getElementsByClassName("category__button")[0],d=document.body.querySelector(".todo");e.classList.toggle("hidden"),t.classList.toggle("hidden"),d.classList.toggle("collapsed")}(),o.target.closest(".progress__header")===b&&function(){let e=document.body.getElementsByClassName("card__container")[1],t=document.body.querySelector(".progress");e.classList.toggle("hidden"),t.classList.toggle("collapsed")}(),o.target.closest(".completed__header")===y&&function(){let e=document.body.getElementsByClassName("card__container")[2],t=document.body.getElementsByClassName("category__button")[1],d=document.body.querySelector(".completed");e.classList.toggle("hidden"),t.classList.toggle("hidden"),d.classList.toggle("collapsed")}(),o.target.classList.contains("card__delete")){let s=o.target.closest(".card"),n=Number(s.dataset.id);s.remove(),e(t().filter(e=>e.id!==n)),a(),d()}if(o.target.classList.contains("card__forward")){let e=o.target.closest(".card");e.parentElement===L?c(e):e.parentElement===h&&i(e)}if(o.target.classList.contains("card__back")){let e=o.target.closest(".card");e.parentElement===h?r(e):e.parentElement===C&&c(e)}}),document.addEventListener("keydown",e=>{"Escape"===e.key&&"block"===u.style.display&&(u.style.display="none",n())});