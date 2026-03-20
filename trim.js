const trim = () => {
    const nodes = document.querySelectorAll("#thread > div > div.relative.flex > div.flex > section");

    [...nodes].reverse().slice(10).forEach(node => {
        node.style.display = 'none';
    });
};

const button = document.createElement('button');

button.addEventListener('click', trim);

button.innerHTML = 'TRIM';

// ===== 样式优化 =====
button.style.position = 'fixed';
button.style.right = '16px';
button.style.top = '50%';
button.style.transform = 'translateY(-50%)';

// 尺寸 & 布局
button.style.padding = '12px 14px';
button.style.fontSize = '13px';
button.style.fontWeight = '600';
button.style.letterSpacing = '0.5px';

// 外观
button.style.background = 'rgba(56, 189, 248, 0.8)';
button.style.backdropFilter = 'blur(8px)';
button.style.color = '#fff';
button.style.border = 'none';
button.style.borderRadius = '999px';
button.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';

// 交互
button.style.cursor = 'pointer';
button.style.transition = 'all 0.2s ease';

// 层级
button.style.zIndex = '9999';

// ===== Hover 效果 =====
button.addEventListener('mouseenter', () => {
    button.style.transform = 'translateY(-50%) scale(1.08)';
    button.style.boxShadow = '0 6px 18px rgba(0,0,0,0.25)';
});

button.addEventListener('mouseleave', () => {
    button.style.transform = 'translateY(-50%) scale(1)';
    button.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
});

// ===== 点击反馈 =====
button.addEventListener('mousedown', () => {
    button.style.transform = 'translateY(-50%) scale(0.95)';
});

button.addEventListener('mouseup', () => {
    button.style.transform = 'translateY(-50%) scale(1.08)';
});

document.body.appendChild(button);