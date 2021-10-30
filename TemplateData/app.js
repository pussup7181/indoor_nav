if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
    try{
        const constraints = {
            video: {
              height: {
                min: 1280,
                ideal: 1920,
                max: 2560,
              },
              width: {
                min: 720,
                ideal: 1080,
                max: 1440,
              },
              facingMode: "environment"
            },
          }
          
          const videoStream = await navigator.mediaDevices.getUserMedia(constraints)
    }
        catch(e){
            alert(e);
        }

  }
  else return;
