const intCanvas = (id) => {
  return new fabric.Canvas(id, {
    width: 900,
    height: 500,
    backgroundColor: "lightBlue",
  });
};

//Task1

const reader = new FileReader();

const imageAdded = (e) => {
  const inputelem = document.getElementById("image");
  const file = inputelem.files[0];
  reader.readAsDataURL(file);
};

const canvas = intCanvas("canvas");
canvas.renderAll();

const inputFile = document.getElementById("image");

inputFile.addEventListener("change", imageAdded);
reader.addEventListener("load", () => {
  //   console.log(reader.result);
  fabric.Image.fromURL(reader.result, (img) => {
    canvas.add(img);
    canvas.requestRenderAll();
  });
});

//This is task 2
canvas.on("mouse:wheel", function (opt) {
  var delta = opt.e.deltaY;
  var zoom = canvas.getZoom();
  zoom *= 0.999 ** delta;
  if (zoom > 20) zoom = 20;
  if (zoom < 0.01) zoom = 0.01;
  canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
  opt.e.preventDefault();
  opt.e.stopPropagation();
});
