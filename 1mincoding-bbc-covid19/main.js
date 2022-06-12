//graphic-item 그림과 step 말풍선 짝 맞춰준다.

//전역변수로 만들면 누구나 접근할수있으니까 위험해서 익명 함수 안에다가 만듬
//함수자체는 실행을 해야 호출되니까 괄호까지 붙여서 호출완료

/* data-index 2인 경우에 나오는 새가 위로 날라가게 하기 */
(() => {
  const actions = {
    birdFlies(isTrue) {
      if (isTrue) {
        document.querySelector(
          '[data-index="2"] .bird' //부모가 data-index="2"인 graphic-item 의 자식요소 bird클래스
        ).style.transform = `translateX(${window.innerWidth}px)`;
        //x방향으로 윈도우 폭만큼 날라감
      } else {
        document.querySelector(
          '[data-index="2"] .bird'
        ).style.transform = `translateX(-100%)`; //css에서 default로 잡아둔 값
      }
    },
  };

  const stepElems = document.querySelectorAll(".step");
  const graphicElems = document.querySelectorAll(".graphic-item");
  let currentItem = graphicElems[0]; //맨 처음 이미지 저장해두기

  for (let i = 0; i < stepElems.length; i++) {
    stepElems[i].setAttribute("data-index", i);
    graphicElems[i].setAttribute("data-index", i);
    // graphicElems[i].dataset.index = i //same
  }
  // function activate() {
  //   currentItem.classList.add("visible");
  // }

  //action이 들어오면 action실행되도록 매개변수줌
  function activate(action) {
    currentItem.classList.add("visible");
    if (action) {
      actions[action](true); //actions객체의 메서드 부름
    }
  }

  // function inactivate() {
  //   currentItem.classList.remove("visible");
  // }

  function inactivate(action) {
    currentItem.classList.remove("visible");
    if (action) {
      actions[action](false);
    }
  }

  //scroll이벤트가 발생할때 실행되는 이벤트핸들러 함수
  window.addEventListener("scroll", () => {
    let step;
    let boundinRect;

    // 각 step의 top (y위치) 체크
    //for loop은 i의 갯수만큼 계속 looping하나 우리가 관심있는건 스크롤할때 눈에 보이는 애들만 위치 체크
    //Intersection Observer 어떤 요소가 눈에 보이는지 체크
    for (let i = 0; i < stepElems.length; i++) {
      step = stepElems[i];
      boundinRect = step.getBoundingClientRect();
      //   console.log(boundinRect);
      //   DOMRect {x: 16, y: 2497.75, width: 400, height: 71, top: 2497.75, …}
      //   스크롤 할때마다 DOMRect라는 객체 나오고 속성은 x,y,width, height, top로 위치와 크기 가짐

      //창사이즈 높이 기준으로 step이 나오는 범위 설정
      //브라우저 창사이즈 높이 10% 위치보다 크고 높이 80%보다 작으면 활성화
      if (
        boundinRect.top > window.innerHeight * 0.1 &&
        boundinRect.top < window.innerHeight * 0.8
      ) {
        // console.log(step.dataset.index); //스크롤할때마다 이미지 인덱스값 찍힘
        if (currentItem) {
          //currentItem존재하면
          inactivate(currentItem.dataset.action);
          currentItem = graphicElems[step.dataset.index];
          // activate();
          activate(currentItem.dataset.action);
        }
      }
    }
  });

  activate(); //currentItem에 visible클래스 붙여주는데 맨처음 화면 띄웠을때 처음 이미지 나타나게 하려고
})();
