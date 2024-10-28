import { bootstrapCameraKit, createMediaStreamSource, Transform2D } from '@snap/camera-kit';

(async function () {
  const cameraKit = await bootstrapCameraKit({
    apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzI1OTk1ODg4LCJzdWIiOiJmZTBlYTZkNS0wNjkyLTQ3MGEtYmVlNi1kNDQ1NDkyY2ZhNzd-UFJPRFVDVElPTn4zOGMyYWVmNy05OGEyLTQ4MzctYWQzNC1lYTRhZDk1Y2RkODYifQ.ZcL4d_QOzSnF7HAXsvWVdsqGG_uzELwoqw54-EayvQk',
  });
  const liveRenderTarget = document.getElementById(
    'canvas'
  ) as HTMLCanvasElement;
  const session = await cameraKit.createSession({ liveRenderTarget });
  const mediaStream = await navigator.mediaDevices.getUserMedia({
    video: true,
  });
  const source = createMediaStreamSource(
    mediaStream, {
    transform: Transform2D.MirrorX,
    cameraType: 'environment'
  })

  await session.setSource(mediaStream);
  await session.play();

  const lens = await cameraKit.lensRepository.loadLens(
    '160c4693-fc8d-4eae-84de-a1711c6f3b3a',
    '3be14fc9-fadd-438c-a509-2d6ac737bbae'
  );

  await session.applyLens(lens);
})();
