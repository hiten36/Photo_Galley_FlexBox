let b=document.querySelectorAll('.img');
for(i of b)
{
    i.addEventListener('click',(e)=>{
        document.querySelector('.img1').classList.remove('img1');
        e.target.parentNode.classList.add('img1');
    })
}