function callfun(){
    window.alert( 5+6 )
}

function capture() {
    var canvas = document.getElementById('canvas');     
    var video = document.getElementById('peerVideo');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, video.videoWidth, video.videoHeight);  
    // canvas.toBlob() = (blob) => {
    //     const img = new Image();
    //     img.src = window.URL.createObjectUrl(blob);
    // };
    canvas.toBlob(
        blob => {
          const anchor = document.createElement('a');
          anchor.download = 'my-file-name.jpg'; // optional, but you can give the file a name
          anchor.href = URL.createObjectURL(blob);
      
          anchor.click(); 
      
          URL.revokeObjectURL(anchor.href); // remove it from memory and save on memory! 😎
        },
        'image/jpeg',
        0.9,
      );
    
}
function save(){
    var myimage = document.getElementById('image2');
    var canvas = document.getElementById('canvas2');
    canvas.width = myimage.width;
    canvas.height = myimage.height;
    canvas.getContext('2d').drawImage(myimage, 0, 0)
    
}
