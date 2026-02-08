photoInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("profilePhoto").src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});
function generate() {
  document.getElementById("rname").innerText = name.value;
  raddress.innerText = address.value;
  rphone.innerText = phone.value;
  remail.innerText = email.value;
  rlinkedin.innerText = linkedin.value;

  rsummary.innerText = summary.value;
  rexperience.innerText = experience.value;
  reducation.innerText = education.value;
  rlanguages.innerText = languages.value;
  rhobby.innerText = hobby.value;

  rskills.innerHTML = "";
  skills.value.split(",").forEach(skill => {
    let li = document.createElement("li");
    li.innerText = skill.trim();
    rskills.appendChild(li);
  });
}

function downloadPDF() {
  html2pdf().from(document.getElementById("resume")).save("resume.pdf");
}