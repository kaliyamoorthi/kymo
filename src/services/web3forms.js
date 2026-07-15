export function attachContactFormListener() {
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const submitBtn = form.querySelector("button[type='submit']");
      const originalBtnText = submitBtn.innerHTML;

      submitBtn.innerHTML = "Transmitting...";
      submitBtn.style.opacity = "0.7";
      submitBtn.disabled = true;

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })
        .then(async (response) => {
          if (response.status == 200) {
            form.innerHTML =
              '<div class="py-20 text-center"><i class="ri-checkbox-circle-fill text-6xl text-neo-green mb-4 block"></i><h3 class="text-2xl font-black uppercase">Transmission Received</h3><p class="font-mono text-sm mt-2">System response initialized. I will reach out shortly.</p></div>';
          } else {
            submitBtn.innerHTML = originalBtnText;
            submitBtn.style.opacity = "1";
            submitBtn.disabled = false;
            alert("Transmission failed. Please try again later.");
          }
        })
        .catch((error) => {
          console.log(error);
          submitBtn.innerHTML = originalBtnText;
          submitBtn.style.opacity = "1";
          submitBtn.disabled = false;
          alert("Encountered an error. Please try again.");
        });
    });
  }
}
