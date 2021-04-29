function myLinks(){
    var liLinks='';
    const links = [
                    {
                        label: 'Week1',
                        url: 'week1/index.html'
                    },
                    {
                        label: 'Week2',
                        url: 'week2/index.html'
                    }
                
    ]

     for(let i=0; i< links.length; i++){
        liLinks += "<li><a href='"+links[i][url]+"'>"+links[i][label]+"</a></li>";
    }

        document.getElementsById('olist').innerHTML = liLinks;
}