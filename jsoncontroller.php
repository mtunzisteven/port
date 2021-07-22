<?php

session_start();

// case action variable
$action = filter_input(INPUT_POST, 'action',FILTER_SANITIZE_STRING);

// get the post input from the javascript fetch request 
$username = filter_input(INPUT_POST, 'username', FILTER_SANITIZE_STRING);

// store file in variable
$file = 'notesData.json';

//echo $id; exit;
if(file_exists($file)){

    $notesData = file_get_contents($file);

    switch($action){

        case "signup":

            $notesData = json_decode($notesData);

            $cont = 0;

            if(empty($notesData)){

                $cont = 0;

                $notesData = [];

            }else{

                for($i =0; $i < count($notesData); $i++){  

                    if($notesData[$i]->username[0] == $username){

    
                        $cont +=1;
    
                    }
    
                }

            }


            if($cont > 0){

                $response = [

                    'result'=> false,
                    'notes' => ''
                
                ];

                echo json_encode($response); // return json object

            }else{

                //Svar_dump($notesData); exit;

                array_push($notesData, ['username' => [$username, []]]);
                
                $notesData = json_encode($notesData); // convert to json format

                $bytes = file_put_contents("notesData.json", $notesData); // save to json file

                if($bytes > 0){

                    $response = [

                        'result'=> true,
                        'notes' => ''
                    
                    ];

                    echo json_encode($response); // return json object

                }
            }
               
            break;

        case "signin":

            $notesData = json_decode($notesData);

            for($i = 0; $i < count($notesData) ; $i++){  

                $response = [];

                if($notesData[$i]->username[0] == $username){

                    $notes =[ $notesData[$i]];

                    $response = [
    
                        'result'=> true,
                        'notes' => $notesData[$i]
                    
                    ];
    
                    echo json_encode($response); // return json object

                    exit;

                }else{

                    continue;

                }
            }

            $response = [

                'result'=> false,
                'notes' => ''
            
            ];

            echo json_encode($response); // return json object
                
            break;

        case "add-note":

            // get the post input from the javascript fetch request 
            $title = filter_input(INPUT_POST, 'title', FILTER_SANITIZE_STRING);
            $note = filter_input(INPUT_POST, 'note', FILTER_SANITIZE_STRING);

            $notesData = json_decode($notesData);

            $cont = 0;

            $index = 0;

            if(empty($notesData)){

                $cont = 0;

                $notesData = [];

            }else{

                for($i =0; $i < count($notesData); $i++){  

                    if($notesData[$i]->username[0] == $username){

    
                        $cont +=1;

                        $index = $i;

    
                    }
                }
            }

            if($cont > 0){

                array_push($notesData[$index]->username[1], [$title, $note]);
                
                $notesData = json_encode($notesData); // convert to json format

                $bytes = file_put_contents("notesData.json", $notesData); // save to json file

                if($bytes > 0){

                    $response = [

                        'result'=> true,
                        'notes' => ''
                    
                    ];

                    echo json_encode($response); // return json object

                }

            }else{

                $response = [

                    'result'=> false,
                    'notes' => ''
                
                ];

                echo json_encode($response); // return json object
            }
               
            break;

        default:
            
            $response = [

                'result'=> false,
                'notes' => "Can't access notes"
            
            ];

            echo json_encode($response); // return json object

        }
    }