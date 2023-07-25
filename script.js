// event listener on file button
let file_menu = document.getElementsByTagName("button")[0];
let i=0;
file_menu.addEventListener("click",()=>{
    let list =document.getElementsByClassName("file")[0]
    if(list.style.display==="block")
    {
        setTimeout(()=>{
            list.style.display="none"
        },100)
        
    }
    else{
        list.style.display="block"
    }
    if(i%2==0){
        list.style.animationName="animate"
        list.style.animationDuration="0.2s"
        list.style.animationTimingFunction="linear"
    }    
    else{
        list.style.animationName="animate2"
        list.style.animationDuration="0.1s"
        list.style.animationTimingFunction="linear"
    }
    i++;
})

// event listener on tool button
let tool_menu = document.getElementsByTagName("button")[1];
let j=0;
let list =document.getElementsByClassName("tool")[0]

tool_menu.addEventListener("click",()=>{
    if(list.style.display==="block")
    {
        setTimeout(()=>{
            list.style.display="none"
        },100)
      
    }
    else{
        list.style.display="block"
    }
    if(j%2==0){
        list.style.animationName="tool"
        list.style.animationDuration="0.2s"
        list.style.animationTimingFunction="linear"
    }    
    else{
        list.style.animationName="tool2"
        list.style.animationDuration="0.1s"
        list.style.animationTimingFunction="linear"
    }
    console.log(j)
    j++;
})

// when a user click on new button
new_btn.addEventListener("click",()=>{
    textarea.value=''
})

// when a user click on save button
let btn4 = document.getElementsByTagName("button")[3];
btn4.addEventListener('click', () => {
    const textToSave = textarea.value;
    localStorage.setItem('savedText', textToSave);
    alert('Data saved successfully! Download file');
  });


//   when a user click on download button
  // Get references to the elements

let download = document.getElementsByTagName("button")[2];
  // Save functionality
  download.addEventListener('click', async () => {
    const textToSave = textarea.value;

    try {
      const fileHandle = await window.showSaveFilePicker();
      const writable = await fileHandle.createWritable();
      await writable.write(textToSave);
      await writable.close();
      alert('File saved successfully!');
    } catch (error) {
      console.error('Error saving file:', error);
    }
  });
