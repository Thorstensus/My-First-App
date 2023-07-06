let data1 = {
    photo: "./docs/assets/images/img1.jpg",
    title: "Graffiti",
    description: "V nemocnici sa nachádzalo veľa krásnych graffiti"
  };

  let data2 = {
    photo: "./docs/assets/images/img2.jpg",
    title: "Pohľad z okna",
    description: "Na obrázku vidno strechy nižších poschodí"
  };

  let data3 = {
    photo: "./docs/assets/images/img3.jpg",
    title: "Strecha",
    description: "Zo strechy bolo vidno Lamač a okolie"
  };

  let data4 = {
    photo: "./docs/assets/images/img4.jpg",
    title: "Átrium",
    description: "Pohľad na átrium zo strechy"
  };

  let data5 = {
    photo: "./docs/assets/images/img5.jpg",
    title: "Stopy v snehu",
    description: "Na streche sme za sebou nechali stopy v snehu"
  };

  let data6 = {
    photo: "./docs/assets/images/img6.jpg",
    title: "Interiér",
    description: "Interiér budovy, na potrubí sú cencúle"
  };

  let data7 = {
    photo: "./docs/assets/images/img7.jpg",
    title: "Diera v podľahe",
    description: "Cez dieru v podľahe vidno nižšie poschodie"
  };

  let data8 = {
    photo: "./docs/assets/images/img8.jpg",
    title: "Veľká diera",
    description: "Boli tu aj väčšie diery, cez niektoré sa dokonca dalo prepadnúť"
  };

  let data9 = {
    photo: "./docs/assets/images/img9.jpg",
    title: "Autori",
    description: "Fotografia jedného z autorov"
  };



  let imagesData = [data1, data2, data3, data4, data5, data6, data7, data8, data9];

  imagesData.forEach((item, index) => {
    let thumbnailBox = $(`<div class="thumbnailbox" data-index="${index}"><input type="image" src=${item.photo} width=40px height=40px></div>`);
    thumbnailBox.append(`<p class="thumbnail-text" data-index="${index}">${item.title}</p>`);
    $("#thumbnails").append(thumbnailBox);
  });

  let loadPhoto = (photoNumber) => {
    $("#photo-image").attr("src", imagesData[photoNumber].photo);
    $("#photo-title").text(imagesData[photoNumber].title);
    $("#photo-description").text(imagesData[photoNumber].description);
    $("#thumbnails .thumbnailbox").removeClass("currentbox");
    $(`#thumbnails .thumbnailbox[data-index="${photoNumber}"]`).addClass("currentbox");
   
  };

  let currentPhoto = 0;

  loadPhoto(currentPhoto);

  $("#left-arrow").click(() => {
    if(currentPhoto >= 1) {
        currentPhoto--;
    }
    else {
        currentPhoto = imagesData.length-1;
    };
    loadPhoto(currentPhoto);
  });

  $("#right-arrow").click(() => {
    if(currentPhoto <= imagesData.length-2) {
        currentPhoto++;
    }
    else {
        currentPhoto = 0;
    };
    loadPhoto(currentPhoto);
  });


$('.thumbnailbox').click(function(event) {
    let indexClicked = $(this).attr('data-index');
    currentPhoto = parseInt(indexClicked);
    loadPhoto(currentPhoto);
  });
