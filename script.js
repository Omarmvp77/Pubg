document.getElementById('spin-btn').addEventListener('click', function() {
    let wheel = document.getElementById('wheel');
    let locker = document.getElementById('locker');
    
    let rotation = Math.floor(Math.random() * 3600) + 1440;
    wheel.style.transition = "transform 3s ease-out";
    wheel.style.transform = `rotate(${rotation}deg)`;

    setTimeout(() => {
        locker.style.display = 'block';
    }, 3000);
});

document.getElementById('unlock-btn').addEventListener('click', function() {
    alert("Redirecting to offer...");
    window.location.href = "https://your-content-locker-link.com";
});
