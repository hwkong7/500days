// 1. 디데이 카운터 설정
const startDate = new Date("2025-01-21");
const today = new Date("2026-06-04");

const diff = Math.floor((today - startDate) / (1000 * 60 * 60 * 24)+1);
document.getElementById("days").innerHTML = `${diff} Days Together ❤️`;

// 2. 배경에 떠다니는 하트 생성
for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 15) + "px";
    heart.style.animationDuration = (Math.random() * 8 + 6) + "s";
    document.body.appendChild(heart);
}

// 3. 타임라인 서랍(Accordion) 열고 닫기
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', function(e) {
        // 내부 서랍 콘텐츠를 클릭했을 때는 서랍이 닫히지 않도록 방지
        if (e.target.closest('.drawer')) return; 

        this.classList.toggle('active');
        
        // 서랍이 열리는 순간 화면 스크롤 이벤트를 한 번 강제 트리거하여 이미 노출된 이미지 감지
        setTimeout(() => {
            window.dispatchEvent(new Event('scroll'));
        }, 300);
    });
});

// 4. 스크롤 시 사진 및 설명글 자연스럽게 나타나기 (Intersection Observer)
const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px', // 화면 하단에 가까워지면 미리 감지 시작
    threshold: 0.15                  // 요소가 15% 이상 보일 때 애니메이션 실행
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            observer.unobserve(entry.target); // 한 번 연출된 요소는 감지 해제하여 성능 최적화
        }
    });
}, observerOptions);

// 감지할 서랍 내부 아이템들 등록
const drawerItems = document.querySelectorAll('.drawer-item');
drawerItems.forEach(item => observer.observe(item));

// 추억 갤러리 카드 클릭 시 뒤집기 (Flip Effect)
const flipCards = document.querySelectorAll('.flip-card');

flipCards.forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('flipped'); // 클래스가 있으면 빼고, 없으면 넣기
    });
});