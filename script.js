function startPranayama() {
    const inhale = parseInt(document.getElementById('inhale').value);
    const hold1 = parseInt(document.getElementById('hold1').value);
    const exhale = parseInt(document.getElementById('exhale').value);
    const hold2 = parseInt(document.getElementById('hold2').value);
    const cycles = parseInt(document.getElementById('cycles').value);

    const timerDiv = document.getElementById('timer');
    const progressionDiv = document.getElementById('progression');
    const cycleCounterDiv = document.getElementById('cycle-counter');
    let currentCycle = 0;

    const phases = [
        { phase: 'Inspire', time: inhale },
        { phase: 'Rétention après inspire', time: hold1 },
        { phase: 'Expire', time: exhale },
        { phase: 'Rétention après expire', time: hold2 }
    ];

    let currentPhase = 0;

    function nextPhase() {
        if (currentPhase < phases.length) {
            const { phase, time } = phases[currentPhase];
            progressionDiv.innerHTML = `Phase : ${phase}`;
            timerDiv.innerHTML = `${time} secondes restantes`;
            setTimeout(() => {
                currentPhase++;
                nextPhase();
            }, time * 1000);
        } else {
            currentCycle++;
            cycleCounterDiv.innerHTML = `Cycle ${currentCycle} sur ${cycles}`;
            if (currentCycle < cycles) {
                currentPhase = 0;
                nextPhase();
            } else {
                timerDiv.innerHTML = 'Cycle de pranayama terminé !';
                progressionDiv.innerHTML = '';
                cycleCounterDiv.innerHTML = '';
            }
        }
    }

    nextPhase();
}
