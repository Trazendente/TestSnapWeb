// Import the necessary Camera Kit modules.
import {
    bootstrapCameraKit,

    // Set the source of the CameraKit session.
    await session.setSource(source);
  
    // Set the render size of the CameraKit session to the size of the browser window.
    session.source.setRenderSize( window.innerWidth,  window.innerHeight);
  
    // Start the CameraKit session.
    session.play();
  })();
  
