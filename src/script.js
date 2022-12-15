const initialValue = () => {
  let defaultText = "Metapals";
  const generated_text = document.getElementById("generated-text");
  const text_input = document.getElementById("text-input");
  text_input.value = defaultText;

  const splittedWord = defaultText
    .split("")
    .map((word, index) => {
      return `<span id=${index}-${word} class=generateWord>${word}</span>`;
    })
    .join("");

  generated_text.innerHTML = splittedWord;

  defaultText.split("").forEach((word, index) => {
    const temp = document.getElementById(`${index}-${word}`);
    temp.style.left = temp.offsetLeft + 10 * index + "px";

    dragElement(document.getElementById(`${index}-${word}`));
  });
};

const handleChangeText = () => {
  const generated_text = document.getElementById("generated-text");
  const text_input = document.getElementById("text-input");

  text_input.addEventListener("input", (e) => {
    const words = e.target.value;

    const splittedWord = words
      .split("")
      .map((word, index) => {
        return `<span id=${index}-${word} class=generateWord>${word}</span>`;
      })
      .join("");

    generated_text.innerHTML = splittedWord;

    words.split("").forEach((word, index) => {
      const temp = document.getElementById(`${index}-${word}`);
      temp.style.left = temp.offsetLeft + 10 * index + "px";

      dragElement(document.getElementById(`${index}-${word}`));
    });
  });
};

const handleSizeChange = () => {
  let size = 16;
  const size_input = document.getElementById("size-input");
  const size_text = document.getElementById("size-text");
  const generated_text = document.getElementById("generated-text");

  generated_text.style.fontSize = `${size}px`;

  size_input.addEventListener("input", (e) => {
    size = e.target.value;
    size_text.innerText = `${size} px`;
    generated_text.style.fontSize = `${size}px`;
  });
};

const onClickButtonSave = () => {
  const btn_save = document.getElementById("btn-save");
  btn_save.addEventListener("click", () => {});
};

const handleChangeColor = (color) => {
  const generated_text = document.getElementById("generated-text");

  generated_text.style.color = color;
};

initialValue();
handleChangeText();
onClickButtonSave();
handleSizeChange();

function dragElement(elmnt) {
  let pos1 = 0;
  let pos2 = 0;
  let pos3 = 0;
  let pos4 = 0;
  if (document.getElementById(elmnt.id)) {
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();

    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;

    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
