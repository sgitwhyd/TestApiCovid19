import "./style/style.css";
import "regenerator-runtime";
import Navbar from "./script/Navbar.js";
import Footer from './script/footer';
import reqApi from "./script/view/data.js";


window.addEventListener("load", _ => {
    const name = prompt("Masukan Nama anda !");
    if(name === ""){
        document.querySelector("#user").innerHTML = `Hi User`;
    } else if ( name === null){
        document.querySelector("#user").innerHTML = `Hi User`;
    }  else {
        alert(`Selamat Datang ${name}`);
        document.querySelector("#user").innerHTML = `Hi ${name}`;
    }
    Navbar
    Footer
    reqApi();

})

