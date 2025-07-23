// فتح النافذة
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // إغلاق النافذة
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  // التحكم بالشرائح
  let slideIndex = 1;
  showSlides(slideIndex);
  
  // التنقل بين الصور
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // عرض الشريحة الحالية
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
  
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }
  