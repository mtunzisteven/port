window.onload = function() {

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

    var ol = document.getElementById("olist");

    for(let i=0; i<links.length; i++){

        var li = document.createElement("LI");   
        var a = document.createElement("A");  

        a.setAttribute.href =links[i]['url'];
        a.innerHTML = links[i]['label'];

        li.appendChild(a);             

        ol.appendChild(li);  
    }

}