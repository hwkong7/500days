# 500 Days Anniversary Webpage ❤️

> **2025.01.21 ~ 2026.06.04** > 우리 함께한 지 벌써 500일, 그 소중한 순간들을 기록하기 위한 특별한 웹페이지입니다.

---

## ✨ 주요 기능 (Features)

- **D-Day Counter:** 우리 처음 만난 날(`2025-01-21`)부터 오늘까지의 일수를 실시간으로 계산하여 메인 화면에 띄워줍니다.
- **Interactive Timeline Drawer:** 우리의 핵심 기념일(첫 만남, 첫 데이트, 100일 등) 카드를 클릭하면 아래로 서랍(Accordion)이 열리며 숨겨진 사진과 글귀가 나타납니다.
- **Scroll Reveal Animation:** 서랍 안의 추억 사진과 글귀들은 스크롤을 내릴 때 화면에 맞춰 자연스럽게 위로 올라오며 나타납니다 (`Intersection Observer API` 활용).
- **3D Flip Card Gallery:** 추억 갤러리의 사진들을 클릭하면 카지노 칩처럼 뒤로 휙 뒤집히며(`3D Flip Effect`) 뒷면에 적어둔 감성적인 비밀 메시지를 확인할 수 있습니다.
- **Floating Heart Effect:** 화면 전체에 은은하고 예쁜 핑크빛 하트 애니메이션이 무작위로 떠다니며 기념일 분위기를 연출합니다.

---

## 🛠️ 기술 스택 (Tech Stacks)

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla JS)
- **Design & Layout:** Flexbox, CSS Grid (Responsive Design)
- **Animation:** CSS 3D Transforms, Transition, Interaction Observer API
- **Fonts:** Pretendard, Gowun Batang (Google Fonts)

---

## 📂 폴더 구조 (Folder Structure)

```text
📁 500days-project/
├── 📄 index.html      # 웹페이지의 뼈대와 디데이/기념일 데이터
├── 📄 style.css       # 3D 뒤집기 효과, 하트 애니메이션 및 전체 스타일링
├── 📄 script.js       # 디데이 계산, 서랍 열기 및 스크롤 감지 로직
├── 📁 images/         # 우리들의 추억 사진 폴더 (Local Only)
└── 📁 videos/         # 우리들의 추억 동영상 폴더 (Local Only)
