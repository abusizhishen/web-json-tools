function clearContent(){
  console.log("click")
  lel.value = "";
  rel.value = "";
  localStorage.clear()
}


var rel;
var lel;

document.getElementsByTagName("textarea").scrollTop = document.getElementsByTagName("textarea").scrollHeight

var lastContent = "";

function prettyPrint() {
  var data = lel.value;
  if (data === ""){
    return
  }
  try{
    content = formatJson(data)
    rel.value = content
    //save(data);
  }
  catch (e) {
    console.log(e)
    rel.value = e;

  }
}
window.onload= load
function save(content) {
  localStorage.setItem("lastContent", content);
}
function load(){
  lel = document.getElementById('leftText')
  rel = document.getElementById('rightText')
  // lastContent = localStorage.getItem("lastContent");
  // if (lastContent){
  //   content = formatJson(lastContent)
  //   lel.value = lastContent
  //   rel.value = content
  // }
}

function compress() {
  rel.value = JSON.stringify(JSON.parse(lel.value));
}

function formatJson(content){
  obj = JSON.parse(content)
  return JSON.stringify(obj, undefined, 4);
}

function copy(){
  el = document.getElementById("forCopy")
  el.value = rel.value
  rel.disabled = false;

  rel.select()
  document.execCommand('copy')
  document.execCommand('copy')
  rel.disabled = true;
}
