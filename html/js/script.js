$(function () {
  $.post("http://esx_identity/ready", JSON.stringify({}));

  window.addEventListener("message", function (event) {
    if (event.data.type == "enableui") {
      document.body.style.display = event.data.enable ? "block" : "none";
    }
  });

  // Manejo del formulario de registro
  $("#register").submit(function (event) {
    event.preventDefault();

    const dofVal = $("#dateofbirth").val();
    if (!dofVal) return;

    const dateCheck = new Date(dofVal);

    const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(
      dateCheck
    );
    const month = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(
      dateCheck
    );
    const day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(
      dateCheck
    );

    const formattedDate = `${day}/${month}/${year}`;

    $.post(
      "http://esx_identity/register",
      JSON.stringify({
        firstname: $("#firstname").val(),
        lastname: $("#lastname").val(),
        dateofbirth: formattedDate,
        sex: $("input[type='radio'][name='sex']:checked").val(),
        height: $("#height").val(),
      })
    );

    $("#register").trigger("reset");
  });

  // Funciones para abrir enlaces
  function openWebNorms() {
    window.open(
      "https://docs.google.com/document/d/1gH0lvA2KcOQYyeA_0kTaJ0Z9xvk0aQp6Fzf0FU7wqEc/edit",
      "_blank"
    );
  }

  function openWebDiscord() {
    window.open("https://discord.gg/E5RjVDvPPj", "_blank");
  }
  $(document).ready(function () {
    let currentSlide = 1;
    const totalSlides = 5;

    // Función para actualizar los puntos de progreso
    function updateProgress() {
      for (let i = 1; i <= totalSlides; i++) {
        document.getElementById(`dot${i}`).classList.remove("activehit");
      }
      document.getElementById(`dot${currentSlide}`).classList.add("activehit");
    }

    // Función para cambiar el fondo del body-pres según el slide
    function updateBackground(slideIndex) {
      if (slideIndex === 3) {
        $(".body-pres").css(
          "background",
          "linear-gradient(45deg, #d586ee9e, #ffe9ff, #ffffffdb, #ffffff03)"
        );
      } else if (slideIndex === 1) {
        $(".body-pres").css(
          "background",
          "linear-gradient(45deg, #d586ee9e, #ffe9ff, #ffffffdb, #ffffff03),url(css/bg3.jpg"
        );
      } else if (slideIndex === 5) {
        $(".body-pres").css(
          "background",
          "linear-gradient(45deg, #d586ee9e, #ffe9ff, #ffffffdb, #ffffff03),url(css/bg4.jpg"
        );
      } else {
        $(".body-pres").css(
          "background",
          "linear-gradient(45deg, #d586ee9e, #ffe9ff, #ffffffdb, #ffffff03), url(css/bg2.jpg)"
        );
      }
    }

    // Función para cambiar entre slides con animación
    function showSlide(slideIndex) {
      $(".slide").removeClass("active").hide();
      $(`#slide${slideIndex}`).fadeIn(500).addClass("active");
      updateProgress();
      updateBackground(slideIndex);

      // Ocultar box2 y progress si estamos en el slide 5
      if (slideIndex === 5) {
        $("#box2").hide();
        $("#progress").hide();
      } else {
        $("#box2").show();
        $("#progress").show();
      }
    }

    // Control del botón "Siguiente"
    $("#nextBtn").click(function () {
      if (currentSlide < totalSlides) {
        currentSlide++;
        showSlide(currentSlide);
      }

      if (currentSlide === totalSlides) {
        $(this).hide();
        $("#prevBtn").hide();
        $("#backToStartBtn").show();
      }
      $("#prevBtn").show();
    });

    // Control del botón "Anterior"
    $("#prevBtn").click(function () {
      if (currentSlide > 1) {
        currentSlide--;
        showSlide(currentSlide);
      }

      if (currentSlide === 1) {
        $(this).hide();
      }
      $("#nextBtn").show();
      $("#backToStartBtn").hide();
    });

    // Control del botón "Volver al inicio"
    $("#backToStartBtn").click(function () {
      currentSlide = 1;
      showSlide(currentSlide);
      $(this).hide();
      $("#prevBtn").hide();
      $("#nextBtn").show();
    });

    // Función para manejar los eventos de teclado
    $(document).keydown(function (e) {
      switch (e.which) {
        case 37: // Flecha izquierda
          $("#prevBtn").click();
          break;
        case 39: // Flecha derecha
          $("#nextBtn").click();
          break;
        default:
          return;
      }
      e.preventDefault();
    });

    // Inicializar la primera diapositiva y el primer punto activo
    $(`#slide1`).addClass("active").show();
    updateProgress();
    updateBackground(1);

    // Inicializar el botón "Volver al inicio" como oculto
    $("#backToStartBtn").hide();
    $("#prevBtn").hide();
  });

  document.onkeyup = function (data) {
    if (data.which == 27) {
      // Escape key
      $.post("http://esx_identity/escape", JSON.stringify({}));
    }
  };
});
