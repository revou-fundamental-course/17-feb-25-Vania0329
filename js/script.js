/* Ini Javascript External */

document.addEventListener("DOMContentLoaded", function () {
    const slides = [
        {
            image: "assets/arab.avif",
            text: '"The trip to Arabia was memorable, a great spiritual experience!"',
            name: "Ahmed Al-Farsi",
            gender: "Male",
            age: "35 years"
        },
        {
            image: "assets/indonesia.avif",
            text: '"Bali has beautiful beaches and a unique culture. An unforgettable vacation!"',
            name: "Jessica Tan",
            gender: "Female",
            age: "28 years"
        },
        {
            image: "assets/japan.jpg",
            text: '"Japan is very modern but still rich in culture. The cherry blossoms in Tokyo are simply breathtaking!"',
            name: "Takahiro Yamamoto",
            gender: "Male",
            age: "40 years"
        },
        {
            image: "assets/singapore.jpg",
            text: '"Singapore is very clean and full of interesting attractions. Garden by the Bay is amazing!"',
            name: "Chen Wei",
            gender: "Male",
            age: "33 years"
        },
        {
            image: "assets/thailand.jpg",
            text: '"Thailand has great food and beautiful temples. Worth a visit!"',
            name: "Suthida Anong",
            gender: "Female",
            age: "29 years"
        },
        {
            image: "assets/vietnam.jpg",
            text: '"Vietnam has beautiful nature, especially Ha Long Bay. Great trip!"',
            name: "Nguyen Phu",
            gender: "Female",
            age: "31 years"
        }
    ];

    let currentIndex = 0;
    const slideImage = document.getElementById("slide-image");
    const testimonialText = document.getElementById("testimonial-text");
    const testimonialUser = document.getElementById("testimonial-user");

    function changeSlide() {
        // Efek fade out sebelum mengganti gambar & teks
        slideImage.style.opacity = 0;
        testimonialText.style.opacity = 0;
        testimonialUser.style.opacity = 0;

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % slides.length; // Pindah ke slide berikutnya
            slideImage.src = slides[currentIndex].image;
            testimonialText.textContent = slides[currentIndex].text;
            testimonialUser.textContent = `${slides[currentIndex].name}, ${slides[currentIndex].gender}, ${slides[currentIndex].age}`;

            // Tentukan warna berdasarkan gender
            let color = slides[currentIndex].gender === "Male" ? "blue" : "red";

            // Tambahkan ikon user Font Awesome dengan warna yang sesuai
            testimonialUser.innerHTML = `<i class="fa-solid fa-user" style="color: ${color};"></i> 
            <span style="color: ${color};">${slides[currentIndex].name}, ${slides[currentIndex].gender}, ${slides[currentIndex].age}</span>`;
            
            // Efek fade in setelah mengganti konten
            slideImage.style.opacity = 1;
            testimonialText.style.opacity = 1;
            testimonialUser.style.opacity = 1;
        }, 500); // Delay 500ms sebelum menampilkan yang baru
    }

    setInterval(changeSlide, 7000);
});

    // Form Validation
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();
        
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let destination = document.getElementById("destination").value.trim();
    
        // Validasi semua field harus diisi
        if (!name || !email || !destination) {
            alert("All fields must be filled out properly!");
            return;
        }
    
        // Validasi panjang nama minimal 3 karakter
        if (name.length < 3) {
            alert("Name must be at least 3 characters long!");
            return;
        }
    
        // Validasi email dengan Regex
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address!");
            return;
        }
    
        // Jika validasi berhasil
        alert("Form submitted successfully!");
        this.reset();
    });    