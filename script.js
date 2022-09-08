function CS50_appear() {    
    document.getElementById("cs50-container").style.display="grid";
    document.getElementById("python-container").style.display="none"
    document.getElementById("java-container").style.display="none";
    document.getElementById("js-container").style.display="none";
}

function python_appear() {    
    document.getElementById("python-container").style.display="grid";
    document.getElementById("cs50-container").style.display="none";
    document.getElementById("java-container").style.display="none";
    document.getElementById("js-container").style.display="none";
}

function java_appear() {    
  document.getElementById("java-container").style.display="grid";
  document.getElementById("cs50-container").style.display="none";
  document.getElementById("python-container").style.display="none";
  document.getElementById("js-container").style.display="none";
}

function js_appear() {
  document.getElementById("js-container").style.display="grid";
  document.getElementById("java-container").style.display="none";
  document.getElementById("cs50-container").style.display="none";
  document.getElementById("python-container").style.display="none";
}