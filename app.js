const form = document.querySelector("#input");
const dispDiv = document.querySelector("#translatedText");

const baseURL = "https://api.funtranslations.com/translate/dothraki.json";

form.elements.translate.addEventListener("click", async (e) => {
  e.preventDefault();
  const input = form.elements.textarea;
  const ansText = await translate(input.value);
  dispDiv.innerText = ansText;
});

const translate = async (val) => {
  const config = {
    params: {
      text: val,
    },
  };

  const res = await axios.get(`${baseURL}`, config);
  return res.data.contents.translated;
};

form.elements.clear.addEventListener("click", (e) => {
  e.preventDefault();
  form.elements.textarea = "";
  form.elements.ansText = "";
});
