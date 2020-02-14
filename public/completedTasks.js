window.onload = function() {


    completedTasks = [];

    const done = document.querySelector("#done");
    
    if(done){
    done.addEventListener("click", ()=>{
        if(completedTasks){
       completedTasks.push(this.parents);
    }
    })
}


    // const back = document.querySelector('#back');
    // back.addEventListener('click', ()=>{
    //     history.go(-3)
    // })

}