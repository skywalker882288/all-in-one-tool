const body = document.body;

const toggle = document.getElementById("toggle");

const darkBtn = document.getElementById("darkBtn");
const lightBtn = document.getElementById("lightBtn");

let lightMode = false;

// ---------- Enable Light Mode ----------

function enableLight(){

    lightMode = true;

    body.classList.add("light");

    darkBtn.classList.remove("active");
    lightBtn.classList.add("active");

    // Small press animation
    toggle.animate(
        [
            {transform:"scale(1)"},
            {transform:"scale(.97)"},
            {transform:"scale(1)"}
        ],
        {
            duration:450,
            easing:"cubic-bezier(.68,-0.6,.32,1.6)"
        }
    );
}

// ---------- Enable Dark Mode ----------

function enableDark(){

    lightMode = false;

    body.classList.remove("light");

    lightBtn.classList.remove("active");
    darkBtn.classList.add("active");

    toggle.animate(
        [
            {transform:"scale(1)"},
            {transform:"scale(.97)"},
            {transform:"scale(1)"}
        ],
        {
            duration:450,
            easing:"cubic-bezier(.68,-0.6,.32,1.6)"
        }
    );
}

// ---------- Button Events ----------

lightBtn.addEventListener("click", enableLight);

darkBtn.addEventListener("click", enableDark);

// ---------- Click Anywhere on Toggle ----------

toggle.addEventListener("click", (e)=>{

    if(e.target.closest("button")) return;

    if(lightMode){
        enableDark();
    }else{
        enableLight();
    }

});

// ---------- Keyboard Support ----------

document.addEventListener("keydown",(e)=>{

    if(e.key===" " || e.key==="Enter"){

        e.preventDefault();

        if(lightMode){
            enableDark();
        }else{
            enableLight();
        }

    }

});
