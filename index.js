var Ffmpeg = require('fluent-ffmpeg');
Ffmpeg.setFfmpegPath('./bin/ffmpeg.exe')
Ffmpeg.setFfprobePath('./bin/ffprobe.exe')

Ffmpeg('https://v.vrv.co/evs1/e41726261c55a9b37eb82644bb014b3d/assets/7bdf2ed1fcdcbd274ca32ff3dff5c88e_3966512.mp4/index-v1-a1.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly92LnZydi5jby9ldnMxL2U0MTcyNjI2MWM1NWE5YjM3ZWI4MjY0NGJiMDE0YjNkL2Fzc2V0cy83YmRmMmVkMWZjZGNiZDI3NGNhMzJmZjNkZmY1Yzg4ZV8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjEyMjM4MjIzfX19XX0_&Signature=JlvU7U6iJxFAysRUoSLQ7c3pZXOnegrbchGgRMbm-6kGywSC72Gg9d923J-Uk6XVKdh2~~KUw2H~SECvRf9CUZ23D3HKaTofqQHurxhWhaCoNM6JHAZumyqoEogp54Y76dTPLVyhjjzYKQsc29j~ywRpRB-67ouBJzRIjyf1b4awkd4pjj3Apf5Dl2EFlI8PhLIjDPjY7vEMzTKM7mF75Romwz1y~yJ5gHwB-Ig09JO0yxpCTd34EIBK~Qb-os2v8riCT6LBImOMMAdxQR7iDZQClt~BpLzRlKf1e7dXUBeh8B1TdiPBe6eM1RON6eRb8Ay7Ra021~~wD-l5L3klEA__&Key-Pair-Id=APKAJMWSQ5S7ZB3MF5VA')
  .on('end', function() {
    console.log('Screenshots taken');
  })
  .on('error', function(err) {
    console.error(err);
  })
  .screenshots({
    // Will take screenshots at 20%, 40%, 60% and 80% of the video
    count: 32,
    folder: 'videos'
  });

