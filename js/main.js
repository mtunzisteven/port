function homeload() {

    const links = [
                    {
                        label: 'Week1',
                        url: 'week1/index.html'
                    },
                    {
                        label: 'Week2',
                        url: 'week2/index.html'
                    }
                
    ];


    append('olist', links);

}

function week1(){
    const week1 = [
                    {
                        label: 'notes',
                        url: 'notes/index.html'
                    }    
    ];

    append('olist1', week1);


}

function append(listId, arr){
    var ol = document.getElementById(listId);

    for(let i=0; i<arr.length; i++){

        var li = document.createElement("LI");   
        var a = document.createElement("A");  

        a.href =arr[i]['url'];
        a.innerHTML = arr[i]['label'];

        li.appendChild(a);             

        ol.appendChild(li);  
    }
}