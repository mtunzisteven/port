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


    append('olist', 'url', 'label');


    const weel1 = [
                    {
                        label: 'notes',
                        url: 'notes/'
                    }    
    ];

    append('olist1', 'url', 'label');


}

function append(listId, url, label){
    var ol = document.getElementById(listId);

    for(let i=0; i<links.length; i++){

        var li = document.createElement("LI");   
        var a = document.createElement("A");  

        a.href =links[i][url];
        a.innerHTML = links[i][label];

        li.appendChild(a);             

        ol.appendChild(li);  
    }
}