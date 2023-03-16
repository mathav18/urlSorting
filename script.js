let shortUrl="";
function urlShorter(){
    let input=document.getElementById('url');
    let dis=document.getElementById('dis');
    let url=document.getElementById('url').value;
    input.value="";
     if(url==""){
        input.style.border="2px solid red";
        dis.innerText="pless enter url link"
    }
    else{
        if(!url.startsWith('https://')){
            input.style.border="2px solid red";
            dis.innerText="Invalid   url link";
             return "";
        }
        else
        {
        dis.innerText=""
        input.style.border="2px solid #2BD0D0";
       fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
        .then((response)=>{
            return response.json();
          })
          .then((data)=>{
           shortUrl=data.result.short_link;
           createBox(shortUrl,url)
        })
     }}
}


function createBox(short,url){
    let parent=document.getElementById("display");
          parent.innerHTML+=`<div id="urlDisplay">
         <div style="width:60%;>
         <h3 id="link"> ${url} </h3>
         </div>
     <div style="width:30%;" id="copyBox">
         <input type="text" style="color:#2BD0D0" id="copylink" value=${short}></input>
         <button id="copyButton" onclick="copyLink(this)">Copy</button>
         </div>
          </div>`
}

function copyLink(ele) {
    var copy = ele.previousElementSibling;
    console.log(copy)
    copy.select();
    document.execCommand("copy"); 
     ele.style.background="black"   
    ele.innerText="copied";
};

  