// Futuristic interface animations
document.addEventListener('DOMContentLoaded', () => {
    const gridCells = document.querySelectorAll('.grid-cell');
    const energyBar = document.querySelector('.energy-bar');
    let activeCell = null;

    // Grid cell interaction effects
    gridCells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            if (activeCell) {
                activeCell.style.transform = '';
            }
            cell.style.transform = 'scale(0.95)';
            activeCell = cell;

            // Create ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.border = '2px solid var(--neon-purple)';
            ripple.style.borderRadius = '50%';
            ripple.style.animation = 'ripple 1s linear';
            ripple.style.pointerEvents = 'none';
            
            const rect = cell.getBoundingClientRect();
            ripple.style.width = ripple.style.height = rect.width + 'px';
            ripple.style.left = '0';
            ripple.style.top = '0';
            
            cell.appendChild(ripple);
            setTimeout(() => ripple.remove(), 1000);
        });

        cell.addEventListener('mouseout', () => {
            if (activeCell) {
                activeCell.style.transform = '';
                activeCell = null;
            }
        });
    });

    // Random energy fluctuations
    function fluctuateEnergy() {
        const randomWidth = Math.random() * 40 + 30; // 30-70%
        energyBar.style.width = `${randomWidth}%`;
    }

    // Simulate system activity
    function simulateActivity() {
        const randomCell = gridCells[Math.floor(Math.random() * gridCells.length)];
        randomCell.style.background = 'rgba(157, 0, 255, 0.5)';
        setTimeout(() => {
            randomCell.style.background = '';
        }, 200);
    }

    // Start animations
    setInterval(fluctuateEnergy, 3000);
    setInterval(simulateActivity, 1500);

    // Add keyframe animation for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            0% { transform: scale(0); opacity: 1; }
            100% { transform: scale(1.5); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}); 