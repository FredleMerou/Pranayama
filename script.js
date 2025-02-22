function startPranayama() {
    const inhale = parseInt(document.getElementById('inhale').value);
    const hold1 = parseInt(document.getElementById('hold1').value);
    const exhale = parseInt(document.getElementById('exhale').value);
    const hold2 = parseInt(document.getElementById('hold2').value);

    const timerDiv = document.getElementById('timer');
    timerDiv.innerHTML = '';

    const phases = [
        { phase: 'Inhale', time: inhale },
        { phase: 'Hold after inhale', time: hold1 },
        { phase: 'Exhale', time: exhale },
        { phase: 'Hold after exhale', time: hold2 }
    ];

    let currentPhase = 0;

    function nextPhase() {
        if (currentPhase < phases.length) {
            const { phase, time } = phases[currentPhase];
            timerDiv.innerHTML = `${phase} for ${time} seconds`;
            setTimeout(() => {
                currentPhase++;
                nextPhase();
            }, time * 1000);
        } else {
            timerDiv.innerHTML = 'Pranayama cycle complete!';
        }
    }

    nextPhase();
}
