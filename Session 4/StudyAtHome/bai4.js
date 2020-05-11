let dictionary ={
    debug :'The process of figuring out why your program has a certain error and how to fix it ',
    done : 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed) ',
    defect :' The formal word for ‘error’',
    pm : 'The short version of Project Manager, the person in charge of the final result of a project',
    uiUx :' UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels'    
}

alert('Hi there,this is dev dictionary');
let enterWord = prompt('Enter a keyword');
let checkWord = dictionary[enterWord];
if(!checkWord){
    alert( 'we could not find your word : ' );
    let addWord = prompt('We could not find your word leave your explaination');
    alert('Done');
    let enterWord = prompt('Enter a keyword');
    dictionary[enterWord] = addWord;
    alert(enterWord + ':' + dictionary[enterWord]);
}else{
    alert (enterWord + ':' + checkWord);
}

