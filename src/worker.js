/*
    Remember to check the copyright status of the image before using.
    If the app supports mp4 as a background source, you can add them too.
    I'll recommend sticking to image or gif for low resource usage.

*/

// Paste the below code into the Code tab of worker.

export default {
  async fetch(request, env, ctx) {
    const wallPaper = [
      'https://cdn.cosmos.so/f25e80ca-1239-48e4-a7da-f02c9bf31f56?format=jpeg',
      'https://cdn.cosmos.so/0d9b0e31-42b8-4873-acce-8ecd0e32b002?format=jpeg',
      'https://cdn.cosmos.so/e7a8a132-8faf-4022-a7da-91b5ac2dcb80?format=jpeg',
      'https://cdn.cosmos.so/62e334f3-96b2-4862-9652-d1762d1becb6?format=jpeg',
      'https://cdn.cosmos.so/ac6fa276-25cb-422a-98a8-61957432b898?format=jpeg',
      'https://cdn.cosmos.so/5e17291a-af0d-444d-8fc3-54ed3bb88019?format=jpeg',
      'https://cdn.cosmos.so/bec2fb21-0bea-4787-8cfb-41ac67d8a0dd?format=jpeg',
      'https://cdn.cosmos.so/00e31670-f7c1-4b9a-b9ab-13bcb3bc7ce2?format=jpeg',
      'https://cdn.cosmos.so/983be661-8fe3-407c-b6a9-d90393c0ac10?format=jpeg',
      'https://cdn.cosmos.so/c3c0c58b-da64-4bbe-b43b-2415eade5fc4?format=jpeg',
      'https://cdn.cosmos.so/924a9b2b-959d-4ccd-b5f2-92796792eb93?format=jpeg',
    ];

    const randomIndex = Math.floor(Math.random() * wallPaper.length);
    const randomWallpaperUrl = wallPaper[randomIndex];
    
    const newHeaders = new Headers();
    newHeaders.set('Location', randomWallpaperUrl);
    newHeaders.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    newHeaders.set('Pragma', 'no-cache');
    newHeaders.set('Expires', '0');

    return new Response(null, {
      status: 302,
      headers: newHeaders,
    });
  },
};