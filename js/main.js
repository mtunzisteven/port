window.onload = function() {

    const links = [
                    {
                        label: 'Week1',
                        url: 'week1/'
                    },
                    {
                        label: 'Week2',
                        url: 'week2/'
                    }
                
    ];


    append('olist', links);


    const week1 = [
                    {
                        label: 'notes',
                        url: 'notes/'
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