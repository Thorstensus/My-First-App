let data1 = {
    photo: "https://imgur.com/5RjlEtE",
    title: "Graffiti",
    description: "V nemocnici sa nachádzalo veľa krásnych graffiti"
  };

  let data2 = {
    photo: "https://imgur.com/ysTHRiE",
    title: "Pohľad z okna",
    description: "Na obrázku vidno strechy nižších poschodí"
  };

  let data3 = {
    photo: "https://imgur.com/q10iV8O",
    title: "Strecha",
    description: "Zo strechy bolo vidno Lamač a okolie"
  };

  let data4 = {
    photo: "https://imgur.com/gXIYjut",
    title: "Átrium",
    description: "Pohľad na átrium zo strechy"
  };

  let data5 = {
    photo: "https://imgur.com/XJNnMIH",
    title: "Stopy v snehu",
    description: "Na streche sme za sebou nechali stopy v snehu"
  };

  let data6 = {
    photo: "https://imgur.com/n9bg8F8",
    title: "Interiér",
    description: "Interiér budovy, na potrubí sú cencúle"
  };

  let data7 = {
    photo: "https://imgur.com/iBJpUpk",
    title: "Diera v podľahe",
    description: "Cez dieru v podľahe vidno nižšie poschodie"
  };

  let data8 = {
    photo: "https://imgur.com/ccfbImF",
    title: "Veľká diera",
    description: "Boli tu aj väčšie diery, cez niektoré sa dokonca dalo prepadnúť"
  };

  let data9 = {
    photo: "https://imgur.com/9tJCvuX",
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
