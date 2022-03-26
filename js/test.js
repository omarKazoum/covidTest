const radioLabelText=document.querySelector(".label-text");
const label=document.querySelector('label');
document.querySelectorAll("input[type='radio']").forEach((radio)=>{
        radio.addEventListener('change',($)=>{
            console.log("radio clicked value:"+$.target.value);
            document.querySelector('label.active').classList.remove('active');
            $.target.parentNode.classList.add('active');
        });
});

