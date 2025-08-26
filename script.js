const popup = document.getElementById('popup');
const popupText = document.getElementById('popup-text');

const data = {
    cpu: `<h2>المعالج - CPU</h2>
          <p>اضغط على زر "شرح المعالج" لتشغيل الفيديو التعليمي.<br>Click the "CPU Tutorial" button to play the video.</p>
          <button onclick="playVideo('CPU')">شرح المعالج - CPU Tutorial</button>
          <div id="CPU-video" style="margin-top:15px;"></div>`,

    gpu: `<h2>كرت الشاشة - GPU</h2>
          <p>اضغط على زر "شرح كرت الشاشة" لتشغيل الفيديو التعليمي.<br>Click the "GPU Tutorial" button to play the video.</p>
          <button onclick="playVideo('GPU')">شرح كرت الشاشة - GPU Tutorial</button>
          <div id="GPU-video" style="margin-top:15px;"></div>`,

    ram: `<h2>الذاكرة العشوائية - RAM</h2>
          <p>اضغط على زر "شرح RAM" لتشغيل الفيديو التعليمي.<br>Click the "RAM Tutorial" button to play the video.</p>
          <button onclick="playVideo('RAM')">شرح RAM - RAM Tutorial</button>
          <div id="RAM-video" style="margin-top:15px;"></div>`,

    motherboard: `<h2>اللوحة الأم - Motherboard</h2>
          <p>اضغط على زر "شرح اللوحة الأم" لتشغيل الفيديو التعليمي.<br>Click the "Motherboard Tutorial" button to play the video.</p>
          <button onclick="playVideo('Motherboard')">شرح اللوحة الأم - Motherboard Tutorial</button>
          <div id="Motherboard-video" style="margin-top:15px;"></div>`
};

function openPopup(component){
    popupText.innerHTML = data[component];
    popup.style.display = 'flex';
}

function closePopup(){
    popup.style.display = 'none';
}

// دالة لتشغيل الفيديو عند الضغط على الزر
function playVideo(component){
    const videoDiv = document.getElementById(component + '-video');
    videoDiv.innerHTML = `<video controls width="100%" autoplay>
                            <source src="videos/${component}.mp4" type="video/mp4">
                            متصفحك لا يدعم الفيديو - Your browser does not support the video tag.
                          </video>`;
}
