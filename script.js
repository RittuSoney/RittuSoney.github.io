document.addEventListener('DOMContentLoaded', () => {
    //const navbar = document.getElementsById('navbar'); 
    const header = document.querySelector('.custom-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {   // adjust trigger point
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once on load
});
                    
    // Typing effect for hero subtitle
    function typeWriter(el, texts, speed = 120, delay = 1200) {
    let i = 0, j = 0, isDeleting = false;

    function type() {
        let current = texts[i];
        el.textContent = current.substring(0, j);

        if (!isDeleting) {
            j++;
            if (j > current.length) {
                isDeleting = true;
                setTimeout(type, delay);
                return;
            }
        } else {
            j--;
            if (j < 0) {
                isDeleting = false;
                i = (i + 1) % texts.length;
            }
        }
        setTimeout(type, isDeleting ? speed / 2 : speed);
    }
            type();
    }

    //const typing1 = document.getElementById("typing1");
    const typing2 = document.getElementById("typing2");

    //if (typing1) typeWriter(typing1, ["Hello !!!"]);
    if (typing2) typeWriter(typing2, ["I'm Rittu Soney"]);

    //Read more section
    const readMoreBtn = document.getElementById("readMoreBtn");
    const extraText = document.getElementById("extraText");

    readMoreBtn.addEventListener("click", function(e) {
    e.preventDefault(); // prevent page jump
    if (extraText.style.display === "none") {
        extraText.style.display = "block";
        readMoreBtn.textContent = "Read Less...";
    } else {
        extraText.style.display = "none";
        readMoreBtn.textContent = "Read More...";
    }
    });
        
