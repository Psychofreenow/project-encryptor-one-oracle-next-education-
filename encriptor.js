const text = document.getElementById("input");
const btnEncripted = document.getElementById("btn-encripted");
const btnUnencryptor = document.getElementById("btn-unencryptor"); // Corregir el nombre del botón
const description = document.getElementById("description");
const textOutputContainer = document.getElementById("text-output-container");
const textOutput = document.getElementById("text-output");
const btnClipBoard = document.getElementById("btn-clipboard");

const encriptedText = (string) => {
  return string.replace(/[aeiou]/g, (match) => {
    switch (match) {
      case "a":
        return "ai";
      case "e":
        return "enter";
      case "i":
        return "imes";
      case "o":
        return "ober";
      case "u":
        return "ufat";
      default:
        return match;
    }
  });
};

const unencryptedText = (string) => {
  return string.replace(/(ai|enter|imes|ober|ufat)/g, (match) => {
    switch (match) {
      case "ai":
        return "a";
      case "enter":
        return "e";
      case "imes":
        return "i";
      case "ober":
        return "o";
      case "ufat":
        return "u";
      default:
        return match;
    }
  });
};

const copyInClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    console.log("texto copiado");
  } catch (error) {
    console.error("error al copiar", error);
  }
};

btnEncripted.addEventListener("click", () => {
  const textForEncrypted = text.value;
  if (textForEncrypted.length === 0) {
    description.style.display = "block";
    textOutputContainer.classList.remove("aside-output--active");
    return;
  }

  description.style.display = "none";
  textOutputContainer.classList.add("aside-output--active");
  textOutput.innerHTML = `${encriptedText(textForEncrypted)}`;
  text.value = "";
});

btnUnencryptor.addEventListener("click", () => {
  const textForEncrypted = text.value;
  if (textForEncrypted.length === 0) {
    description.style.display = "block";
    textOutputContainer.classList.remove("aside-output--active");
    return;
  }

  description.style.display = "none";
  textOutputContainer.classList.add("aside-output--active");
  textOutput.innerHTML = `${unencryptedText(textForEncrypted)}`;
  text.value = "";
});

btnClipBoard.addEventListener("click", () => {
  copyInClipboard(textOutput.innerHTML);
});
