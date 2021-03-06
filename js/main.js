function homeload() {

    const links = [
                    {
                        label: 'Week1',
                        url: 'week1/index.html'
                    },
                    {
                        label: 'Week2',
                        url: 'week2/index.html'
                    },
                    {
                        label: 'Week3',
                        url: 'week3/index.html'
                    },
                    {
                        label: 'Week4',
                        url: 'week4/index.html'
                    },
                    {
                        label: 'Week5',
                        url: 'week5/index.html'
                    },
                    {
                        label: 'todolist',
                        url: 'todolist/index.html'
                    },
                    {
                        label: 'Week7',
                        url: 'week7/index.html'
                    },
                    {
                        label: 'Week8',
                        url: 'week8/index.html'
                    },
                    {
                        label: 'Week9',
                        url: 'week9/index.html'
                    },
                    {
                        label: 'Week10',
                        url: 'week10/index.html'
                    },
                    {
                        label: 'notes',
                        url: 'notes/index.html'
                    }
    ];


    append('olist', links);

}

function weeks(){
    const week = [
                    {
                        label: 'notes',
                        url: 'notes/index.html'
                    }    
    ];

    append('olist', week);


}

function append(listId, arr){
    let ol = document.getElementById(listId);

    for(let i=0; i<arr.length; i++){

        let li = document.createElement("LI");   
        let a = document.createElement("A");  

        a.href =arr[i]['url'];
        a.innerHTML = arr[i]['label'];

        li.appendChild(a);             

        ol.appendChild(li);  
    }
}

function addNotes(){
    let note = document.getElementById('note').value;

    document.getElementById('notes').innerHTML = note;
}
