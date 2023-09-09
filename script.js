document.addEventListener("DOMContentLoaded", function () {
  Swal.fire({
    position: "top-center",
    title: "Perhatian!",
    text: "Ini hanya untuk tampilan desktop, bukan untuk mobile.",
    icon: "info",
    showCloseButton: false,
    showCancelButton: false,
    showConfirmButton: false,
    timer: 4000, // Waktu (dalam milidetik) sebelum SweetAlert2 otomatis menghilang
    timerProgressBar: true, // Tampilkan progress bar waktu
  });
});

function submit() {
  Swal.fire({
    title: "Error!",
    text: "Link tidak tersedia",
    icon: "error",
    confirmButtonText: "Kembali",
  });
}

function download() {
  Swal.fire({
    title: "Error!",
    text: "Aplikasi sedang tidak tersedia",
    icon: "error",
    confirmButtonText: "Kembali",
  });
}

let form = document.getElementById("submitForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let nama = document.getElementById("nama");
  let email = document.getElementById("email");
  let pesan = document.getElementById("pesan");

  if (nama.value == "" || email.value == "" || pesan.value == "") {
    Swal.fire({
      title: "Error!",
      text: "Pastikan anda memasukan form yg kosong!",
      icon: "error",
      confirmButtonText: "Kembali",
    });
  } else {
    // perform operation with form input
    Swal.fire({
      title: "Sukses!",
      text: `Formulir telah berhasil dikirimkan! nama: ${nama.value}, email: ${email.value}, pesan: ${pesan.value}`,
      icon: "success",
      confirmButtonText: "Selesai",
    });

    nama.value = "";
    email.value = "";
    pesan.value = "";
  }
});

let formEmail = document.getElementById("emailSubmit");

formEmail.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = document.getElementById("kirimEmail");

  if (email.value == "") {
    Swal.fire({
      title: "Error!",
      text: "Harap masukan email!",
      icon: "error",
      confirmButtonText: "Kembali",
    });
  } else {
    Swal.fire({
      title: "Sukses!",
      text: `Berhasil mengirim dengan email: ${email.value}!`,
      icon: "success",
      confirmButtonText: "Selesai",
    });

    email.value = "";
  }
});
